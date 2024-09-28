import fs from "fs";
import { google, youtube_v3 } from 'googleapis';
import type { OAuth2Client, Credentials } from 'google-auth-library';
import open from 'open';

// Maps video categories to our tags
export const VIDEO_CATEGORIES: Record<number, string> = {
    1: "entertainment",
    2: "entertainment",
    10: "music",
    15: "entertainment",
    17: "entertainment",
    18: "entertainment",
    19: "blogs",
    20: "gaming",
    21: "blogs",
    22: "blogs",
    23: "comedy",
    24: "entertainment",
    25: "news",
    26: "education",
    27: "education",
    28: "science",
    29: "politics",
    30: "movies",
    31: "television",
    32: "entertainment",
    33: "movies",
    34: "comedy",
    35: "education",
    36: "entertainment",
    37: "blogs",
    38: "entertainment",
    39: "entertainment",
    40: "entertainment",
    41: "entertainment",
    42: "entertainment",
    43: "television",
    44: "entertainment"
};

interface YoutubeCredentials {
    installed: {
        client_secret: string;
        client_id: string;
        redirect_uris: string[];
    }
}

type WithRequired<T, S extends keyof T> = {
    [P in S]-?: NonNullable<T[P]>;
  };
type Video = youtube_v3.Schema$Video & WithRequired<youtube_v3.Schema$Video, "snippet" | "id">;
type Comment = NonNullable<youtube_v3.Schema$Comment["snippet"]>;
type Channel = NonNullable<youtube_v3.Schema$Channel["snippet"]>;

const service = google.youtube('v3');
const OAuth2 = google.auth.OAuth2;

const CACHE_DIR = "./syndications/cache";
const TOKEN_DIR = "./syndications/";
const TOKEN_PATH = TOKEN_DIR + 'youtube_token.json';

const SCOPES = [
    'https://www.googleapis.com/auth/youtube.readonly',
    'https://www.googleapis.com/auth/youtube.force-ssl'
];

export async function authorize() {
    // Load client secrets from a local file.
    const content = await fs.promises.readFile('./syndications/youtube_credentials.json')
        .catch(err => {
            console.log('Error loading client secret file: ' + err);
            process.exit(0);
        });

    // Authorize a client with the loaded credentials, then call the YouTube API.
    const credentials = JSON.parse(content.toString()) as YoutubeCredentials;

    const clientSecret = credentials.installed.client_secret;
    const clientId = credentials.installed.client_id;
    const redirectUrl = credentials.installed.redirect_uris[0];
    const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);
    
    // Check if we have previously stored a token.
    const token = await fs.promises.readFile(TOKEN_PATH);
    oauth2Client.credentials = JSON.parse(token.toString());
    if (!oauth2Client.credentials.expiry_date ||
        oauth2Client.credentials.expiry_date < Date.now()) {
        getNewToken(oauth2Client);
    }

    return oauth2Client;
}

async function getNewToken(oauth2Client: OAuth2Client) {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    });
    console.log('Need to authorize app with youtube. Opening oauth url...:', authUrl);
    await open(authUrl);
    console.log("Enter the code from that page here:");
    for await (const code of console as unknown as AsyncIterable<string>) {
        oauth2Client.getToken(code, function(err, token) {
            if (err || token == null) {
                console.log('Error while trying to retrieve access token', err);
                throw err;
            }
            oauth2Client.credentials = token;
            storeToken(token);
        });
        break;
    }
}

function storeToken(token: Credentials) {
    try {
        fs.mkdirSync(TOKEN_DIR);
    } catch (err) {
        if (err == null || typeof err !== "object" || !("code" in err) || err?.code != 'EEXIST') {
            throw err;
        }
    }
    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) throw err;
        console.log('Token stored to ' + TOKEN_PATH);
    });
}

export async function getVideos(id: string | string[], auth: OAuth2Client) {
    const allVideos: Video[] = [];

    if (typeof id === "string") {
        id = [id];
    }
    id = id.filter(id => {
        const path = `${CACHE_DIR}/video-${id}.json`;
        if (fs.existsSync(path)) {
            allVideos.push(JSON.parse(fs.readFileSync(path).toString()) as Video);
            return false;
        }
        return true;
    });

    if (id.length !== 0) {
        let nextPageToken: string | undefined;
        do {
            const videos = await service.videos.list({
                auth,
                part: ["snippet"],
                id,
                pageToken: nextPageToken
            }).catch(err => {
                if (err.status === 403) {
                    console.log("Failed to retrieve videos - Forbidden", id,
                        JSON.stringify(err.response));
                    return 403;
                } else if (err.status === 404) {
                    console.log("Failed to retrieve videos - Not Found", id,
                        JSON.stringify(err.response));
                    return 404;
                } else if (err.status === 400) {
                    console.log("Failed to retrieve videos - Bad Request", id,
                        JSON.stringify(err.response));
                    process.exit(0);
                } else {
                    console.log("Failed to retrieve videos", id, err.status,
                        JSON.stringify(err.response));
                    return err.status as number;
                }
            });
            if (typeof videos === "number") {
                return undefined;
            }
            const newVideos = videos.data.items?.filter(v =>
                v.snippet != null && v.id != null) ?? [];
            newVideos.forEach(video => {
                fs.writeFileSync(`${CACHE_DIR}/video-${video.id}.json`, JSON.stringify(video));
            });
            allVideos.push(...newVideos as Video[]);
            nextPageToken = videos.data.nextPageToken ?? undefined;
        } while (nextPageToken);
    }

    // Add channel data to each result
    let allVideosChannels: (Video & { channel: Channel })[] = [];
    id = Array.from(allVideos.reduce((acc, curr) => {
        const path = `${CACHE_DIR}/channel-${curr.snippet.channelId}.json`;
        if (fs.existsSync(path)) {
            const channel = JSON.parse(fs.readFileSync(path).toString()) as Channel;
            allVideosChannels.push({ ...curr, channel });
        } else {
            acc.add(curr.id);
        }
        return acc;
    }, new Set<string>()));

    if (id.length !== 0) {
        let nextPageToken: string | undefined;
        do {
            const channels = await service.channels.list({
                auth,
                part: ["snippet"],
                id,
                pageToken: nextPageToken
            }).catch(err => {
                if (err.status === 403) {
                    console.log("Failed to retrieve channels - Forbidden", id,
                        JSON.stringify(err.response));
                    return 403;
                } else if (err.status === 404) {
                    console.log("Failed to retrieve channels - Not Found", id,
                        JSON.stringify(err.response));
                    return 404;
                } else if (err.status === 400) {
                    console.log("Failed to retrieve channels - Bad Request", id,
                        JSON.stringify(err.response));
                    process.exit(0);
                } else {
                    console.log("Failed to retrieve channels", id, err.status,
                        JSON.stringify(err.response));
                    return err.status as number;
                }
            });
            if (typeof channels === "number") {
                return undefined;
            }
            channels.data.items?.forEach(channel => {
                if (channel.snippet != null && channel.id != null) {
                    fs.writeFileSync(`${CACHE_DIR}/channel-${channel.id}.json`,
                        JSON.stringify(channel.snippet));
                    allVideos.filter(v => v.snippet.channelId === channel.id).forEach(video => {
                        allVideosChannels.push({ ...video, channel: channel.snippet as Channel });
                    });
                }
            });
            nextPageToken = channels.data.nextPageToken ?? undefined;
        } while (nextPageToken);
    }

    return allVideosChannels;
}

export async function getComment(id: string | string[], auth: OAuth2Client) {
    const allComments: Comment[] = [];

    if (typeof id === "string") {
        id = [id];
    }
    id = id.filter(id => {
        const path = `${CACHE_DIR}/comment-${id}.json`;
        if (fs.existsSync(path)) {
            allComments.push(JSON.parse(fs.readFileSync(path).toString()) as Comment);
            return false;
        }
        return true;
    });

    if (id.length !== 0) {
        let nextPageToken: string | undefined;
        do {
            const comments = await service.comments.list({
                auth,
                part: ["snippet"],
                id,
                pageToken: nextPageToken
            }).catch(err => {
                if (err.status === 403) {
                    console.log("Failed to retrieve comments - Forbidden", id,
                        JSON.stringify(err));
                    return 403;
                } else if (err.status === 404) {
                    console.log("Failed to retrieve comments - Not Found", id,
                        JSON.stringify(err));
                    return 404;
                } else if (err.status === 400) {
                    console.log("Failed to retrieve comments - Bad Request", id,
                        JSON.stringify(err));
                    process.exit(0);
                } else {
                    console.log("Failed to retrieve comments", id, err.status,
                        JSON.stringify(err));
                    return err.status as number;
                }
            });
            if (typeof comments === "number") {
                return undefined;
            }
            comments.data.items?.forEach(comment => {
                if (comment.snippet != null && comment.id != null) {
                    fs.writeFileSync(`${CACHE_DIR}/comment-${comment.id}.json`,
                        JSON.stringify(comment.snippet));
                    allComments.push(comment.snippet);
                }
            });
            nextPageToken = comments.data.nextPageToken ?? undefined;
        } while (nextPageToken);
    }

    return allComments;
}

export function getBestThumbnail(thumbnails?: youtube_v3.Schema$ThumbnailDetails) {
    return thumbnails?.high?.url ??
        thumbnails?.maxres?.url ??
        thumbnails?.standard?.url ??
        thumbnails?.medium?.url ??
        thumbnails?.default?.url ?? undefined;
}

export async function findNewFromPlaylist(auth: OAuth2Client, playlistId: string, videos: Set<string>) {
    let nextPageToken: string | undefined;
    const newVideos: Record<string, youtube_v3.Schema$PlaylistItem> = {};
    do {
        const playlistItems = await service.playlistItems.list({
            auth,
            playlistId,
            part: ["snippet"],
            maxResults: 50,
            pageToken: nextPageToken
        }).catch(err => {
            if (err.status === 403) {
                console.log("Failed to retrieve videos - Forbidden", JSON.stringify(err.response));
                return 403;
            } else if (err.status === 404) {
                console.log("Failed to retrieve videos - Not Found", JSON.stringify(err.response));
                return 404;
            } else if (err.status === 400) {
                console.log("Failed to retrieve videos - Bad Request",
                    JSON.stringify(err.response));
                process.exit(0);
            } else {
                console.log("Failed to retrieve videos", err.status, JSON.stringify(err.response));
                return err.status as number;
            }
        });
        if (typeof playlistItems === "number") {
            break;
        }
        let hasInsertedNone = true;
        playlistItems.data.items?.forEach(video => {
            const videoId = video.snippet?.resourceId?.videoId;
            if (videoId && !videos.has(videoId)) {
                const url = `https://www.youtube.com/watch?v=${videoId}`;
                console.log("Found new video", url);
                videos.add(videoId);
                newVideos[videoId] = video;
                hasInsertedNone = false;
                return;
            }
        });

        // Exit if a page had all duplicates
        if (hasInsertedNone) {
            break;
        }
        nextPageToken = playlistItems.data.nextPageToken ?? undefined;
    } while (nextPageToken);

    return newVideos;
}
