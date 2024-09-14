const fs = require("fs");
const path = require("path");
const sanitizeHtml = require('sanitize-html');

const { getLinkPreview } = require("link-preview-js");

const KIND_ACTIONS_MAP = {
    article: "📝",
    repost: "🔁",
    bookmark: "❤️",
    favorite: "⭐",
    reply: "💬",
    "": "📝"
}

const KIND_VERBS_MAP = {
    article: "wrote",
    repost: "shared",
    bookmark: "bookmarked",
    favorite: "favorited",
    reply: "replied to",
    "": "wrote"
}

function walk(dir, cb) {
    const list = fs.readdirSync(dir);
    return Promise.all(list.map(file => {
        const resolvedFile = path.resolve(dir, file);
        const stat = fs.statSync(resolvedFile);
        if (stat.isDirectory()) {
            return walk(resolvedFile, cb);
        } else {
            return new Promise((resolve) => cb(dir, resolvedFile, resolve));
        }
    }));
}

function getActionDescription({ kind, timestamp }) {
    const ts = new Date(timestamp);
    const tsString = ts.toLocaleString();
    const timeDisplay = timestamp ?
    ` on <time class="dt-published" datetime="${tsString}" title="${tsString}">
        ${ts.toLocaleDateString()}
    </time>` : '';
    const path = `/posts/${ts.getFullYear()}/${ts.getMonth()}/${ts.getDate()}/${timestamp}`;
    return `<div class="action-description">
    <span class="action">${KIND_ACTIONS_MAP[kind]}</span>
    <a class="p-name u-url h-card" href="/about">The Paper Pilot</a>
    <a class="u-url" href="${path}">${KIND_VERBS_MAP[kind]}</a>
    <span>this post${timeDisplay}:</span>
</div>`;
}

async function getAvatar({ photo, name, url, syndications, timestamp, tags, kind, linkClasses }) {
    url ??= "https://www.thepaperpilot.org/about/";
    name ??= "The Paper Pilot";
    photo ??= "https://www.thepaperpilot.org/me.jpg";
    return `<div class="avatar p-author h-card">
    <a class="u-url ${linkClasses ?? ''}" href="${url}">
        <div class="photo">
            <img class="u-photo" src="${await getMediaUrl(photo)}" />
            <span class="action">${KIND_ACTIONS_MAP[kind]}</span>
        </div>
        <div class="p-name">${name}</div>
    </a>
    ${timestamp ? `<time class="dt-published" datetime="${new Date(timestamp).toLocaleString()}" title="${new Date(timestamp).toLocaleString()}">
        ${new Date(timestamp).toLocaleDateString()}
    </time>\n` : ''}
    ${syndications?.length > 0 ? `<div class="syndications">
        ${syndications.map(synd => `<a href="${synd.url}">${synd.type}</a>`).join("")}
    </div>\n` : ''}
    ${tags?.length > 0 ? `<ul class="tags">
        ${tags.map(tag => `<li><a href="/tag/${tag}/1">${tag}</a></li>`).join("")}
    </ul>\n` : ''}
</div>`;
}

async function processLinkPreview({ mediaType, url, contentType, images, favicons, title, description }, header) {
    let mediaPreview = '';
    // Don't show media previews if we failed to retrieve the image
    if (mediaType === "image") {
        const localUrl = await getMediaUrl(url);
        if (localUrl !== url) {
            mediaPreview = `<img src="${localUrl}" />`;
        }
    } else if (mediaType === "audio") {
        mediaPreview = `<audio controls>
            <source src="${url}" type="${contentType}">
        </audio>`;
    } else if (mediaType === "video") {
        mediaPreview = `<video controls>
            <source src="${url}" type="${contentType}">
        </video>`;
    } else if (images?.length > 0) {
        const localUrl = await getMediaUrl(images[0]);
        if (localUrl !== url) {
            mediaPreview = `<img src="${localUrl}" />`;
        }
    } // Otherwise, no media preview

    let infoSection = '';
    let favicon = favicons.find(f => !f.startsWith(""));
    const localFavicon = favicon ? await getMediaUrl(favicon) : "";
    favicon = favicon && favicon !== localFavicon ? `<img src="${localFavicon}" />` : '';
    if (title) {
        title = title.replaceAll(/</g, '&lt;').replaceAll(/>/g, '&gt;');
        infoSection += `\n<a class="u-url" href="${url}"><h2>${favicon}${title}</h2></a>`;
        favicon = '';
    }
    if (description) {
        description = description.replaceAll(/</g, '&lt;')
                                 .replaceAll(/>/g, '&gt;')
                                 .replaceAll(/\n/g, '<br />');
        infoSection += `\n<div>${favicon}${linkify(description)}</div>`;
    }
    if (!title) {
        infoSection += `\n<a class="u-url" href="${url}">${url}</a>`;
    }

    return `<div class="img-container">
    ${header ? '<h2>' + header.replaceAll(/</g, '&lt;').replaceAll(/>/g, '&gt;') + '</h2>' : ''}
    ${mediaPreview}
    <div class="description">
        ${infoSection}
    </div>
</div>`;
}

let archiveTries = 0;
async function getArchivePreview(url, timestamp, fallback) {
    const trimmedUrl = encodeURIComponent(url.replace(/^https?:\/\/(www\.)?/, ''));
    const archiveInfoUrl = `http://archive.org/wayback/available?url=${trimmedUrl}&timestamp=${timestamp}`;
    const archiveResponse = await fetch(archiveInfoUrl).then(r => r.text());
    let archiveJson;
    try {
        archiveJson = JSON.parse(archiveResponse);
    } catch (err) {
        console.error("Unexpected response from wayback machine:", archiveInfoUrl, archiveResponse, err);
        process.exit(0);
    }
    const archivedTimestamp = archiveJson.archived_snapshots?.closest?.timestamp;
    if (archivedTimestamp) {
        const preview = await getLinkPreview(`https://web.archive.org/web/${archivedTimestamp}id_/${archiveJson.url}`, { followRedirects: true })
            .catch(err => {
                console.log("Error while trying to retrieve page from wayback machine:", err);
                archiveTries++;
                if (archiveTries >= 3) {
                    console.log("Too many retries. Giving up.");
                    process.exit(1);
                } else {
                    console.log(`Trying again. Try number ${archiveTries + 1}/3`);
                    return getArchivePreview(url, timestamp, fallback);
                }
            });
        archiveTries = 0;
        if (preview?.mediaType === "website" && (preview.images ?? []).length === 0 && fallback) {
            preview.images = [fallback];
        }
        return preview;
    } else {
        console.log("Not available on wayback machine. No preview available.");
        return;
    }
}

async function getMediaUrl(url) {
    if (url.startsWith("https://www.thepaperpilot.org") || !url.startsWith("http") || url.includes(".gfycat.com/")) {
        return url;
    }
    const fileExtensions = url.match(/\.[a-zA-Z]+/g);
    let ext = fileExtensions[fileExtensions.length - 1].toLowerCase();
    if (![".png", ".jpg", ".jpeg", ".ico", ".gif", ".webp", ".svg"].includes(ext)) {
        if (url.startsWith("https://yt3.ggpht.com/")) {
            ext = ".png";
        } else {
            return url;
        }
    }
    const urlHash = hash(url);
    let publicUrl = `/media/${urlHash}${ext}`;
    const filepath = `site/public/media/${urlHash}${ext}`;
    if (fs.existsSync(filepath)) {
        if (fs.statSync(filepath).size === 0) {
            fs.rmSync(filepath);
        } else {
            return publicUrl;
        }
    }
    console.log(`Downloading ${url} to ${publicUrl}`);
    await new Promise((resolve, reject) => {
        setTimeout(reject, 2000);
        fetch(url).then(async response => {
            const body = await response.text();
            if (body.startsWith("<html") || body === "") {
                // TODO also blacklist this url so future runs are faster
                reject();
            } else {
                const fd = fs.openSync(filepath, "w+");
                fs.writeSync(fd, body);
                fs.closeSync(fd);
                resolve();
            }
        }).catch(reject);
    }).catch(() => publicUrl = url);
    if (fs.existsSync(filepath) && fs.statSync(filepath).size !== 0) {
        console.log("Download successful!");
        return publicUrl;
    }
    return url;
}

// https://byby.dev/js-slugify-string
function slugify(str) {
    return String(str)
        .normalize('NFKD') // split accented characters into their base characters and diacritical marks
        .replace(/[\u0300-\u036f]/g, '') // remove all the accents, which happen to be all in the \u03xx UNICODE block.
        .trim() // trim leading or trailing whitespace
        .toLowerCase() // convert to lowercase
        .replace(/[^a-z0-9 -]/g, '') // remove non-alphanumeric characters
        .replace(/\s+/g, '-') // replace spaces with hyphens
        .replace(/-+/g, '-'); // remove consecutive hyphens
}

// https://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript
function hash(str) {
    let hash = 0, i, chr;
    if (str.length === 0) return hash;
    for (i = 0; i < str.length; i++) {
        chr = str.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

function linkify(str) {
    return str.replaceAll(
        /((http|https):\/\/)?([a-z0-9-]+\.)?[a-z0-9-]+(\.[a-z]{2,6}){1,3}(\/[a-z0-9,._\/~#&=;%+?-]*)?/isg,
        '<a href="$&">$&</a>');
}

function monthString(month) {
    return ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][month];
}

function preparePost(post) {
    return post.replaceAll(/\r/g, '').replaceAll(/\n(\s*\n)*/gm, '\n');
}

function encodeString(str, indent) {
    const spaces = new Array(indent).fill(' ').join('');
    return `"${str
        .replaceAll('\\', '\\\\')
        .replaceAll('"', '\\"')
        .replaceAll(/\n/g, '\n' + spaces)
        .replaceAll(/{/g, '\\\\{')
        .replaceAll(/}/g, '\\\\}')}"`;
}

function sanitize(content) {
    return sanitizeHtml(content)
        .replaceAll(/{/g, '&#123;')
        .replaceAll(/}/g, '&#125;');
}

module.exports = {
    walk,
    getActionDescription,
    getAvatar,
    slugify,
    monthString,
    preparePost,
    encodeString,
    processLinkPreview,
    getArchivePreview,
    getMediaUrl,
    linkify,
    sanitize
 };
