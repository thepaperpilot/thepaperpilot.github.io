const fs = require('fs');
const { parse } = require("csv-parse");
const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const { preparePost, encodeString, getAvatar, getActionDescription, processLinkPreview, getMediaUrl, linkify, sanitize } = require("./utils");
const { google } = require('googleapis');
const OAuth2 = google.auth.OAuth2;
const YTMusic = require("ytmusic-api");

const SCOPES = [
    'https://www.googleapis.com/auth/youtube.readonly',
    'https://www.googleapis.com/auth/youtube.force-ssl'
];
const TOKEN_DIR = "./";
const TOKEN_PATH = TOKEN_DIR + 'youtube_token.json';

const YOUTUBE_SVG = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>YouTube</title><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`;

const VIDEO_CATEGORIES = {
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

let createdPosts = 0;
/** @type import('googleapis').youtube_v3.Youtube  */
let service;
let unavailable_urls = new Set();

let YOUTUBE_THUMBNAIL_URL;

// Load client secrets from a local file.
fs.readFile('youtube_credentials.json', function processClientSecrets(err, content) {
    if (err) {
        console.log('Error loading client secret file: ' + err);
        return;
    }
    // Authorize a client with the loaded credentials, then call the YouTube API.
    authorize(JSON.parse(content), process);
});

/**
* Create an OAuth2 client with the given credentials, and then execute the
* given callback function.
*
* @param {Object} credentials The authorization client credentials.
* @param {function} callback The callback to call with the authorized client.
*/
function authorize(credentials, callback) {
    const clientSecret = credentials.installed.client_secret;
    const clientId = credentials.installed.client_id;
    const redirectUrl = credentials.installed.redirect_uris[0];
    const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);
    
    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, function(err, token) {
        if (err) {
            getNewToken(oauth2Client, callback);
        } else {
            oauth2Client.credentials = JSON.parse(token);
            callback(oauth2Client);
        }
    });
}

/**
* Get and store new token after prompting for user authorization, and then
* execute the given callback with the authorized OAuth2 client.
*
* @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
* @param {getEventsCallback} callback The callback to call with the authorized
*     client.
*/
function getNewToken(oauth2Client, callback) {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    });
    console.log('Authorize this app by visiting this url: ', authUrl);
    const rl = readline.createInterface({ input, output });
    rl.question('Enter the code from that page here: ', function(code) {
        rl.close();
        oauth2Client.getToken(code, function(err, token) {
            if (err) {
                console.log('Error while trying to retrieve access token', err);
                return;
            }
            oauth2Client.credentials = token;
            storeToken(token);
            callback(oauth2Client);
        });
    });
}

/**
* Store token to disk be used in later program executions.
*
* @param {Object} token The token to store to disk.
*/
function storeToken(token) {
    try {
        fs.mkdirSync(TOKEN_DIR);
    } catch (err) {
        if (err.code != 'EEXIST') {
            throw err;
        }
    }
    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) throw err;
        console.log('Token stored to ' + TOKEN_PATH);
    });
}

async function process(auth) {
    service = google.youtube('v3');

    if (fs.existsSync("./cache/videos-unavailable.json")) {
        unavailable_urls = new Set(JSON.parse(fs.readFileSync("./cache/videos-unavailable.json").toString()));
        console.log(`Loaded ${unavailable_urls.size} unavailable URLs`);
    }

    YOUTUBE_THUMBNAIL_URL = await getMediaUrl("https://www.youtube.com/s/desktop/86d8f362/img/favicon_32x32.png");

    // Comments
    const posts = fs
        .createReadStream("./youtube-export/comments.csv")
        .pipe(parse({ columns: true, skip_empty_lines: true }));
    for await (const { "Comment ID": commentId, "Channel ID": channelId, "Comment Create Timestamp": timestampDate, "Price": price, "Parent Comment ID": parentCommentId, "Video ID": videoId, "Comment Text": commentJson } of posts) {
        const comment = JSON.parse(commentJson);

        let timestamp = new Date(timestampDate).getTime();

        const permalink = `https://www.youtube.com/watch?v=${videoId}&lc=${commentId}`;

        const video = await getVideo(videoId, auth);
        if (video.error || video.snippet == null) {
            continue;
        }
        const tag = VIDEO_CATEGORIES[video.snippet.categoryId];

        let parentInfo;
        if (parentCommentId) {
            const parentComment = await getComment(parentCommentId, auth);
            if (!parentComment.error) {
                const { textDisplay, authorDisplayName, authorProfileImageUrl, authorChannelUrl, publishedAt } = parentComment;
                parentInfo = {
                    content: `<div class="img-container"><div class="description">${linkify(sanitize(textDisplay))}</div></div>`,
                    published: new Date(publishedAt).getTime(),
                    url: `https://www.youtube.com/watch?v=${videoId}&lc=${parentCommentId}`,
                    author: {
                        name: authorDisplayName,
                        url: `https://www.youtube.com/channel/${authorChannelUrl}`,
                        photo: authorProfileImageUrl
                    }
                }
            }
        } 
        if (!parentInfo) {
            const channel = await getChannel(video.snippet.channelId, auth);
            if (channel.error) {
                continue;
            }
            parentInfo = {
                content: await processLinkPreview({
                    url: `https://www.youtube.com/watch?v=${videoId}`,
                    images: [video.snippet.thumbnails?.high?.url ?? ''],
                    favicons: [YOUTUBE_THUMBNAIL_URL],
                    title: video.snippet.title,
                    description: video.snippet.description
                }),
                published: new Date(video.snippet.publishedAt).getTime(),
                url: `https://www.youtube.com/watch?v=${videoId}`,
                author: {
                    name: channel.title,
                    url: channel.customUrl ?
                        `https://www.youtube.com/${channel.customUrl}` :
                        `https://www.youtube.com/channel/${channelId}`,
                    photo: channel.thumbnails?.high?.url ?? ""
                }
            }
        }

        const replies = await getReplies(commentId, auth);
        if (replies.error) {
            continue;
        }

        const d = new Date(timestamp);
        let path;
        for (timestamp--; path == null || fs.existsSync(path);) {
            path  = `./site/reply/${d.getFullYear()}/${d.getMonth()}/${d.getDate()}/${++timestamp}`;
        }
        fs.mkdirSync(path, { recursive: true });
        const fd = fs.openSync(path + "/index.md", "w+");
        fs.writeSync(fd, preparePost(`---
kind: reply
title: I wrote a comment on a video by ${video.snippet.channelTitle ?? ""}
published: ${timestamp}
next: false
prev: false
tags: [${encodeString(tag, 2)}]
---
<div class="post">
    ${getActionDescription({ timestamp, kind: "reply" })}
    <div class="content-container u-in-reply-to">
        ${await getAvatar({
            ...parentInfo.author,
            syndications: [{ type: YOUTUBE_SVG, url: parentInfo.url }],
            timestamp: parentInfo.published,
            tags: [tag]
        })}
        <div class="content e-content">${parentInfo.content}</div>
    </div>
    <div class="content-container">
        ${await getAvatar({
            timestamp,
            syndications: [{ type: YOUTUBE_SVG, url: permalink }],
        })}
        <div class="content e-content">
            <div class="img-container">
                <div class="description">${linkify(sanitize(comment.text))}</div>
            </div>
        </div>
    </div>
    ${(await Promise.all(replies.map(async reply => `
    <div class="content-container u-comment h-cite">
        ${await getAvatar({
            author: {
                name: reply.authorDisplayName,
                url: reply.authorChannrlUrl,
                photo: reply.authorProfileImageUrl
            },
            timestamp: new Date(reply.publishedAt).getTime(),
            syndications: [{ type: YOUTUBE_SVG, url: `https://www.youtube.com/watch?v=${videoId}&lc=${reply.id}` }]
        })}
        <div class="content e-content">
            <div class="img-container">
                <div class="description">${linkify(reply.textDisplay)}</div>
            </div>
        </div>
    </div>`))).join('')}
</div>
`));
        fs.closeSync(fd);
        createdPosts++;
        if (createdPosts % 100 === 0) {
            console.log(`Created ${createdPosts} youtube activity posts (currently commenting)`);
        }
    }

    // Favorites
    let nextPageToken;
    do {
        const favorite_videos = await service.playlistItems.list({
            auth,
            playlistId: "FLg1YH1wAWH7JF2-64XYio0A",
            part: "snippet",
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
                console.log("Failed to retrieve videos - Bad Request", JSON.stringify(err.response));
                process.exit(0);
            } else {
                console.log("Failed to retrieve videos", err.status, JSON.stringify(err.response));
                return err.status;
            }
        });
        if (typeof favorite_videos === "number") {
            break;
        }
        await Promise.all(favorite_videos.data.items.map(async video => {
            // Don't save video to file because its missing properties like categoryId
            await likeVideo({ videoId: video.snippet.resourceId.videoId, auth, kind: "favorite" });
        }));
        nextPageToken = favorite_videos.data.nextPageToken;
    } while (nextPageToken);

    // Liked songs
    const liked_songs = fs
        .createReadStream("./youtube-export/music-library-songs.csv")
        .pipe(parse({ columns: true, skip_empty_lines: true }));
    const ytmusic = new YTMusic();
    await ytmusic.initialize();
    for await (const { "Song URL": permalink, "Song Title": title, "Album Title": album, "Artist Names": artists } of liked_songs) {
        const songId = permalink.match(/https:\/\/music\.youtube\.com\/watch\?v\=(.*)/)[1];
        const song = await getSong(songId, ytmusic);
        const lastModified = song.formats[0]?.lastModified ?? song.adaptiveFormats[0]?.lastModified;
        if (!lastModified) {
            // TODO Try searching for the song (and dedupe) (and handle this case in getSong)
            continue;
        }
        let timestamp = new Date(parseInt(lastModified.slice(0, -3))).getTime();
        
        const channel = await getChannel(song.artist.artistId, auth);
        if (channel.error) {
            continue;
        }
        let url;
        if (channel.customUrl) {
            if (channel.customUrl.startsWith('https')) {
                url = channel.customUrl;
            } else {
                url = `https://www.youtube.com/${channel.customUrl}`;
            }
        } else {
            url = `https://www.youtube.com/channel/${song.artist.artistId}`;
        }
        const author = {
            name: channel.title,
            url,
            photo: channel.thumbnails?.high?.url ?? ""
        };

        const content = `<div class="img-container">
    <img src="${await getMediaUrl(song.thumbnails[song.thumbnails.length - 1].url)}" />
    <div class="description">
        <a class="u-url" href="${permalink}"><h2><img src="https://music.youtube.com/img/favicon_32.png" />${title}</h2></a>
        <pre>${permalink}</pre>
    </div>
</div>`;

        const d = new Date(timestamp);
        let path;
        for (timestamp--; path == null || fs.existsSync(path);) {
            path  = `./site/bookmark/${d.getFullYear()}/${d.getMonth()}/${d.getDate()}/${++timestamp}`;
        }
        fs.mkdirSync(path, { recursive: true });
        const fd = fs.openSync(path + "/index.md", "w+");
        fs.writeSync(fd, preparePost(`---
kind: bookmark
title: ${encodeString(title, 2)}
published: ${timestamp}
next: false
prev: false
tags: ["music"]
---
<div class="post">
    ${getActionDescription({ timestamp, kind: "bookmark" })}
    <div class="content-container u-in-reply-to">
        ${await getAvatar({
            ...author,
            syndications: [{ type: YOUTUBE_SVG, url: permalink }],
            timestamp,
            tags: ["music"]
        })}
        <div class="content e-content">${content}</div>
    </div>
</div>`));
        fs.closeSync(fd);
        createdPosts++;
        if (createdPosts % 100 === 0) {
            console.log(`Created ${createdPosts} youtube activity posts (currently bookmarking songs)`);
        }
    }

    // Liked videos
    nextPageToken = undefined;
    const allLikedVideos = new Set(JSON.parse(fs.readFileSync("./youtube-export/liked_videos.json").toString()));
    console.log(`Loaded ${allLikedVideos.size} bookmarked videos`);
    do {
        const liked_videos = await service.playlistItems.list({
            auth,
            playlistId: "LL",
            part: "snippet",
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
                console.log("Failed to retrieve videos - Bad Request", JSON.stringify(err.response));
                process.exit(0);
            } else {
                console.log("Failed to retrieve videos", err.status, JSON.stringify(err.response));
                return err.status;
            }
        });
        if (typeof liked_videos === "number") {
            break;
        }
        let hasInsertedNone = true;
        liked_videos.data.items.map(video => {
            if (!allLikedVideos.has(video.snippet.resourceId.videoId)) {
                console.log("Found newly bookmarked video", `https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`);
            }
            hasInsertedNone &= !allLikedVideos.has(video.snippet.resourceId.videoId);
            allLikedVideos.add(video.snippet.resourceId.videoId);
            // Don't save video to file because its missing properties like categoryId
        });
        // Early exit if a page had all duplicates
        if (hasInsertedNone) {
            break;
        }
        nextPageToken = liked_videos.data.nextPageToken;
    } while (nextPageToken);
    const fd = fs.openSync("./youtube-export/liked_videos.json", "w+");
    fs.writeSync(fd, JSON.stringify(Array.from(allLikedVideos)));
    fs.closeSync(fd);
    for await (const videoId of allLikedVideos) {
        await likeVideo({ videoId, auth, kind: "bookmark" });
    }

    console.log(`Created ${createdPosts} posts.`);
}

/** @returns {import('googleapis').youtube_v3.Schema$CommentSnippet}  */
async function getComment(commentId, auth) {
    const commentCachePath = `./cache/comment-${commentId}.json`;
    if (fs.existsSync(commentCachePath)) {
        const comment = JSON.parse(fs.readFileSync(commentCachePath).toString());
        if (Object.keys(comment).length > 0) {
            return comment;
        }
    }

    if (unavailable_urls.has(commentId)) {
        return { error: "Unavailable" };
    }

    console.log("Querying comment", commentId);

    const comment = await service.comments.list({
        auth,
        part: "snippet",
        id: [commentId]
    }).catch(err => {
        if (err.status === 403) {
            console.log("Failed to retrieve comment - Forbidden", commentId, JSON.stringify(err.response));
            return 403;
        } else if (err.status === 404) {
            console.log("Failed to retrieve comment - Not Found", commentId, JSON.stringify(err.response));
            return 404;
        } else if (err.status === 400) {
            console.log("Failed to retrieve comment - Bad Request", commentId, JSON.stringify(err.response));
            process.exit(0);
        } else {
            console.log("Failed to retrieve comment", commentId, err.status, JSON.stringify(err.response));
            return err.status;
        }
    });
    if (typeof comment === "number") {
        return { error: comment };
    }
    const snippet = comment?.data.items[0]?.snippet;
    if (snippet == null) {
        console.log("Could not parse comment", JSON.stringify(comment?.data));
        markLinkUnavailable(commentId);
        return { error: "Could not parse comment" };
    }
    const fd = fs.openSync(commentCachePath, "w+");
    fs.writeSync(fd, JSON.stringify(snippet));
    fs.closeSync(fd);
    return snippet;
}

/** @returns {import('googleapis').youtube_v3.Schema$CommentSnippet[]}  */
async function getReplies(commentId, auth) {
    const commentCachePath = `./cache/replies-${commentId}.json`;
    if (fs.existsSync(commentCachePath)) {
        return JSON.parse(fs.readFileSync(commentCachePath).toString());
    }

    console.log("Querying replies", commentId);

    const comments = await service.comments.list({
        auth,
        part: "snippet",
        parentId: [commentId]
    }).catch(err => {
        if (err.status === 403) {
            console.log("Failed to retrieve replies - Forbidden", commentId, JSON.stringify(err.response));
            return 403;
        } else if (err.status === 404) {
            console.log("Failed to retrieve replies - Not Found", commentId, JSON.stringify(err.response));
            return 404;
        } else if (err.status === 400) {
            console.log("Failed to retrieve replies - Bad Request", commentId, JSON.stringify(err.response));
            process.exit(0);
        } else {
            console.log("Failed to retrieve replies", commentId, err.status, JSON.stringify(err.response));
            return err.status;
        }
    });
    if (typeof comments === "number") {
        return { error: comments };
    }
    const snippets = comments?.data.items.map(item => ({ ...item.snippet, id: item.id }));
    if (snippets == null) {
        console.log("Could not parse replies", JSON.stringify(comments?.data));
        return { error: "Could not parse replies" };
    }
    const fd = fs.openSync(commentCachePath, "w+");
    fs.writeSync(fd, JSON.stringify(snippets));
    fs.closeSync(fd);
    return snippets;
}

/** @returns {import('googleapis').youtube_v3.Schema$Video}  */
async function getVideo(videoId, auth) {
    const videoCachePath = `./cache/video-${videoId}.json`;
    if (fs.existsSync(videoCachePath)) {
        const video = JSON.parse(fs.readFileSync(videoCachePath).toString());
        if (Object.keys(video).length > 0 && video.snippet.categoryId != null) {
            return video;
        }
    }

    if (unavailable_urls.has(videoId)) {
        return { error: "Unavailable" };
    }

    console.log("Querying video", videoId);

    const video = await service.videos.list({
        auth,
        part: "snippet",
        id: [videoId]
    }).catch(err => {
        if (err.status === 403) {
            console.log("Failed to retrieve video - Forbidden", videoId, JSON.stringify(err.response));
            return 403;
        } else if (err.status === 404) {
            console.log("Failed to retrieve video - Not Found", videoId, JSON.stringify(err.response));
            return 404;
        } else if (err.status === 400) {
            console.log("Failed to retrieve video - Bad Request", videoId, JSON.stringify(err.response));
            process.exit(0);
        } else {
            console.log("Failed to retrieve video", videoId, err.status, JSON.stringify(err.response));
            return err.status;
        }
    });
    if (typeof video === "number") {
        return { error: video };
    }
    const item = video?.data.items[0];
    if (item == null) {
        console.log("Could not parse video", JSON.stringify(video?.data));
        markLinkUnavailable(videoId);
        return { error: "Could not parse video" };
    }
    const fd = fs.openSync(videoCachePath, "w+");
    fs.writeSync(fd, JSON.stringify(item));
    fs.closeSync(fd);
    return item;
}

/** @returns {import('googleapis').youtube_v3.Schema$ChannelSnippet}  */
async function getChannel(channelId, auth) {
    const channelCachePath = `./cache/channel-${channelId}.json`;
    if (fs.existsSync(channelCachePath)) {
        const channel = JSON.parse(fs.readFileSync(channelCachePath).toString());
        if (Object.keys(channel).length > 0) {
            return channel;
        }
    }

    if (unavailable_urls.has(channelId)) {
        return { error: "Unavailable" };
    }

    console.log("Querying channel", channelId);

    const channel = await service.channels.list({
        auth,
        part: "snippet",
        id: [channelId]
    }).catch(err => {
        if (err.status === 403) {
            console.log("Failed to retrieve channel - Forbidden", channelId, JSON.stringify(err.response));
            return 403;
        } else if (err.status === 404) {
            console.log("Failed to retrieve channel - Not Found", channelId, JSON.stringify(err.response));
            return 404;
        } else if (err.status === 400) {
            console.log("Failed to retrieve channel - Bad Request", channelId, JSON.stringify(err.response));
            process.exit(0);
        } else {
            console.log("Failed to retrieve channel", channelId, err.status, JSON.stringify(err.response));
            return err.status;
        }
    });
    if (typeof channel === "number") {
        return { error: channel };
    }
    if (!channel?.data.items?.length) {
        return { error: "Could not find channel" };
    }
    const item = channel?.data.items[0]?.snippet;
    if (item == null) {
        console.log("Could not parse channel", JSON.stringify(channel?.data));
        markLinkUnavailable(channelId);
        return { error: "Could not parse channel" };
    }
    const fd = fs.openSync(channelCachePath, "w+");
    fs.writeSync(fd, JSON.stringify(item));
    fs.closeSync(fd);
    return item;
}

async function getSong(songId, ytmusic) {
    const songCachePath = `./cache/song-${songId}.json`;
    if (fs.existsSync(songCachePath)) {
        const song = JSON.parse(fs.readFileSync(songCachePath).toString());
        if (Object.keys(song).length > 0) {
            return song;
        }
    }

    console.log("Querying song", songId);

    const song = await ytmusic.getSong(songId)
        .catch(err => {
            console.log("Failed to retrieve song", songId, JSON.stringify(err));
            return err;
        });
    if (song instanceof Error) {
        return { error: song };
    }
    const fd = fs.openSync(songCachePath, "w+");
    fs.writeSync(fd, JSON.stringify(song));
    fs.closeSync(fd);
    return song;
}

async function likeVideo({ videoId, auth, kind }) {
    const permalink = `https://www.youtube.com/watch?v=${videoId}`;
    
    const video = await getVideo(videoId, auth);
    if (video.error || video.snippet == null) {
        return;
    }

    let timestamp = new Date(video.snippet.publishedAt).getTime();
    const tag = VIDEO_CATEGORIES[video.snippet.categoryId];
        
    const channel = await getChannel(video.snippet.channelId, auth);
    if (channel.error) {
        return;
    }
    const author = {
        name: channel.title,
        url: channel.customUrl ?
            `https://www.youtube.com/${channel.customUrl}` :
            `https://www.youtube.com/channel/${video.snippet.channelId}`,
        photo: channel.thumbnails?.high?.url ?? ""
    };

    const content = `<div class="img-container">
    <img src="${await getMediaUrl(video.snippet.thumbnails?.high?.url ?? '')}" />
    <div class="description">
        <a class="u-url" href="https://www.youtube.com/watch?v=${videoId}"><h2><img width="30px" height="30px" src="${YOUTUBE_THUMBNAIL_URL}" />${video.snippet.title}</h2></a>
        <div>${linkify(video.snippet.description.replaceAll(/\n/g, '<br />'))}</div>
        <pre>https://www.youtube.com/watch?v=${videoId}</pre>
    </div>
</div>`;

    const d = new Date(timestamp);
    let path;
    for (timestamp--; path == null || fs.existsSync(path);) {
        path  = `./site/${kind}/${d.getFullYear()}/${d.getMonth()}/${d.getDate()}/${++timestamp}`;
    }
    fs.mkdirSync(path, { recursive: true });
    const fd = fs.openSync(path + "/index.md", "w+");
    fs.writeSync(fd, preparePost(`---
kind: ${kind}
title: ${encodeString(video.snippet.title, 2)}
published: ${timestamp}
next: false
prev: false
tags: [${encodeString(tag, 2)}]
---
<div class="post">
    ${getActionDescription({ timestamp, kind })}
    <div class="content-container h-cite u-${kind === 'favorite' ? 'like' : 'bookmark'}-of">
        ${await getAvatar({
            ...author,
            syndications: [{ type: YOUTUBE_SVG, url: permalink }],
            timestamp,
            tags: [tag]
        })}
        <div class="content e-content">${content}</div>
    </div>
</div>
`));
    fs.closeSync(fd);
    createdPosts++;
    if (createdPosts % 100 === 0) {
        console.log(`Created ${createdPosts} youtube activity posts (currently ${kind}ing videos)`);
    }
}

function markLinkUnavailable(url) {
    unavailable_urls.add(url);

    const fd = fs.openSync("./cache/videos-unavailable.json", "w+");
    fs.writeSync(fd, JSON.stringify(Array.from(unavailable_urls.keys())));
    fs.closeSync(fd);
}
