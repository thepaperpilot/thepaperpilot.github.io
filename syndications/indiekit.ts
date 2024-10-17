import fs from "fs";
import open from 'open';
import { fileTypeFromBuffer } from 'file-type';
import { getArchiveUrl } from "./archive_utils";
import type { Author, Post, Reply } from "~/types";

function getHash(data: Bun.BlobOrStringOrBuffer) {
    const hasher = new Bun.CryptoHasher("md5");
    hasher.update(data);
    return hasher.digest("hex");
}

function encode(value: unknown): string {
    if (value instanceof Date) {
        value = value.toISOString();
    } else if (value && typeof value === "object") {
        const obj = value as Record<string, unknown>;
        return Object.keys(obj).map(key => {
            if (Array.isArray(obj[key])) {
                return obj[key].map(v => `${key}[]=${encode(v)}`).join("&");
            }
            return `${key}=${encode(obj[key])}`;
        }).join("&");
    } else if (typeof value !== "string") {
        value = JSON.stringify(value);
    }
    return encodeURIComponent(value as string);
}

let accessToken: string | undefined;
const TOKEN_PATH = "./syndications/indiekit_token.json";
async function authenticate() {
    if (fs.existsSync(TOKEN_PATH)) {
        const file = await fs.promises.readFile(TOKEN_PATH);
        try {
            const json = JSON.parse(file.toString());
            if (json.exp && json.exp * 1000 > Date.now()) {
                return json.access_token as string;
            }
        } catch (e) {

        }
    }

    const authUrl = "https://indie.incremental.social/auth?" + encode({
        me: "https://www.thepaperpilot.org/",
        client_id: "https://indie.incremental.social",
        redirect_uri: "https://indie.incremental.social/session/auth",
        state: Date.now(),
        scope: "create media",
        response_type: "code"
    });
    console.log('Need to authorize app with indiekit. Opening oauth url...:', authUrl);
    await open(authUrl);
    console.log("Enter the code from that page here:");
    for await (const code of console as unknown as AsyncIterable<string>) {
        let res = await fetch("https://indie.incremental.social/auth/token", {
            method: "POST",
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Accept': 'application/json'
            },
            body: encode({
                grant_type: "authorization_code",
                me: "https://www.thepaperpilot.org/",
                code,
                client_id: "https://indie.incremental.social",
                redirect_uri: "https://indie.incremental.social/session/auth",
            })
        });
        if (res.status !== 200) {
            console.warn("Failed to authenticate with indiekit", res, await res.text());
            process.exit(0);
        }
        const token_info = await res.json() as { access_token: string; };
        res = await fetch("https://indie.incremental.social/auth/introspect", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept": "application/json",
                "Authorization": `Bearer ${token_info.access_token}`
            },
            body: encode({ token: token_info.access_token })
        });
        if (res.status !== 200) {
            console.warn("Failed to authenticate with indiekit", res, await res.text());
            process.exit(0);
        }
        await res.json().then(res => {
            fs.promises.writeFile("./syndications/indiekit_token.json",
                JSON.stringify({ ...res, ...token_info }));
        });
        return token_info.access_token;
    }
}

let retries = 0;
export async function sendMessage(body: string): Promise<Response> {
    if (accessToken == null) {
        accessToken = await authenticate();
    }

    return await fetch("https://indie.incremental.social/micropub", {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        },
        body
    }).then(async res => {
        if (res.status === 429) {
            retries++;
            if (retries > 3) {
                console.error("Too many retries! Giving up.");
                process.exit(0);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
            return await sendMessage(body);
        }

        retries = 0;
        return res;
    });
}

async function sendPost(body: Record<string, unknown>) {
    await sendMessage(JSON.stringify({ type: "h-entry", properties: body }))
        .then(async res => {
            if (res.status === 202) {
                console.log(await res.json().then(r => r.success_description as string));
            } else {
                console.warn("Failed to send message to indiekit", res, await res.text());
                throw res;
            }
        });
}

export async function getProperties(postUrl: string, ...properties: string[]):
Promise<Record<string, unknown>> {
    if (accessToken == null) {
        accessToken = await authenticate();
    }

    let reqUrl = "https://indie.incremental.social/micropub?q=source";
    reqUrl += `&url=${encode(postUrl)}`;
    if (properties.length > 0) {
        reqUrl += '&' + properties.map(p => `properties[]=${encode(p)}`).join('&');
    }

    return await fetch(reqUrl, {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        }
    }).then(async res => {
        if (res.status === 429) {
            retries++;
            if (retries > 3) {
                console.error("Too many retries! Giving up.");
                process.exit(0);
            }
            await new Promise(resolve => setTimeout(resolve, 1000));
            return await getProperties(postUrl, ...properties);
        }

        retries = 0;
        return (await res.json()).properties;
    });
}

const MEDIA_URLS_PATH = "./syndications/media_urls.json";
let mediaUrls: Record<string, string> | undefined = undefined;
export async function uploadMedia(url: string) {
    if (mediaUrls == null) {
        mediaUrls = fs.existsSync(MEDIA_URLS_PATH) ?
            JSON.parse(fs.readFileSync(MEDIA_URLS_PATH).toString()) as {} : {};
    }

    if (url in mediaUrls) {
        return mediaUrls[url];
    }

    let res = await fetch(url, { redirect: "follow" });
    if (res.status !== 200) {
        console.log("Failed to download media:", res.status, res.statusText);
        const archiveUrl = await getArchiveUrl(url);
        if (archiveUrl) {
            console.log("...but it appears archive.org may have a copy! Download from there...");
            res = await fetch(archiveUrl, { redirect: "follow" });
            if (res.status !== 200) {
                console.log("Archive.org failed as well. Giving up.");
                return undefined;
            }
        }
    }

    // Check if its already uploaded
    const blob = await res.blob();
    const { ext } = await fileTypeFromBuffer(await blob.arrayBuffer()) ?? { ext: "jpg" };
    const hash = getHash(blob);
    const predictedUrl = `https://v4y3.c12.e2-2.dev/indiekit/${ext}/${hash}.${ext}`;
    if ((await fetch(predictedUrl, { method: "HEAD" }).catch(console.warn))?.status === 200) {
        mediaUrls[url] = predictedUrl;
        await fs.promises.writeFile(MEDIA_URLS_PATH, JSON.stringify(mediaUrls));
        return predictedUrl;
    }

    if (accessToken == null) {
        accessToken = await authenticate();
    }

    const filename = url.split('/').pop() ?? url;
    const file = new File([blob], filename, {
        type: res.headers.get("content-type") ?? undefined
    });
    const formData = new FormData();
    formData.append('file', file);
    res = await fetch("https://indie.incremental.social/media", {
        method: "POST",
        headers: {
            'Authorization': `Bearer ${accessToken}`,
        },
        body: formData
    });
    
    if (res.status !== 201) {
        console.log("Failed to upload media", url, res, await res.text());
        return undefined;
    }

    const location = res.headers.get("location") ?? undefined;
    mediaUrls[url] = location!;
    await fs.promises.writeFile(MEDIA_URLS_PATH, JSON.stringify(mediaUrls));

    console.log("Uploaded", url, "to", location);
    return location;
}

// All these exports exist to ensure type correctness
export async function addArticle(article: {
    name?: string;
    content: string;
    published?: Date;
    category: string | string[];
    photo?: string;
    originalUrl?: string;
    replies?: Reply[];
}) {
    const { photo, ...body } = article;
    const preview = photo == null ? undefined : await uploadMedia(photo);
    await sendPost({ ...body, preview });
}

export async function addBookmark(bookmark: {
    'bookmark-of': string;
    name?: string;
    content?: string;
    published?: Date;
    category: string | string[];
    photo?: string;
    author?: Partial<Author>;
}) {
    const { photo, author, ...body } = bookmark;
    const preview = photo == null ? undefined : await uploadMedia(photo);
    if (author) {
        author.image = author.image == null ? undefined : await uploadMedia(author.image);
    }
    const archiveUrl = await getArchiveUrl(bookmark["bookmark-of"], bookmark.published?.getTime());
    await sendPost({ ...body, author, preview, archiveUrl });
}

export async function addFavorite(favorite: {
    'like-of': string;
    name?: string;
    content?: string;
    published?: Date;
    category: string | string[];
    photo?: string;
    author?: Partial<Author>;
}) {
    const { photo, author, ...body } = favorite;
    const preview = photo == null ? undefined : await uploadMedia(photo);
    if (author) {
        author.image = author.image == null ? undefined : await uploadMedia(author.image);
    }
    const archiveUrl = await getArchiveUrl(favorite["like-of"], favorite.published?.getTime());
    await sendPost({ ...body, author, preview, archiveUrl });
}

export async function addReply(reply: {
    'in-reply-to': string;
    name?: string;
    content: string;
    published?: Date;
    category: string | string[];
    photo?: string;
    originalUrl?: string;
    parent: Partial<Post>;
    replies?: Reply[];
}) {
    const { photo, parent, ...body } = reply;
    const preview = photo == null ? undefined : await uploadMedia(photo);
    if (parent.image != null) {
        parent.image = await uploadMedia(parent.image);
    }
    if (parent.author?.image != null) {
        parent.author.image = await uploadMedia(parent.author.image);
    }
    const archiveUrl = await getArchiveUrl(reply["in-reply-to"], reply.published?.getTime());
    await sendPost({ ...body, parent, preview, archiveUrl });
}

export async function addRepost(repost: {
    'repost-of': string;
    name?: string;
    content?: string;
    published?: Date;
    category: string | string[];
    photo?: string;
    author?: Partial<Author>;
}) {
    const { photo, author, ...body } = repost;
    const preview = photo == null ? undefined : await uploadMedia(photo);
    if (author) {
        author.image = author.image == null ? undefined : await uploadMedia(author.image);
    }
    const archiveUrl = await getArchiveUrl(repost["repost-of"], repost.published?.getTime());
    await sendPost({ ...body, author, preview, archiveUrl });
}
