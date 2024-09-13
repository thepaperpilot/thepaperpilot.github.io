const fs = require("fs");
const { parse } = require("csv-parse");
const snoowrap = require('snoowrap');
const { getLinkPreview } = require("link-preview-js");
const { sanitize, getAvatar, preparePost, slugify, encodeString, processLinkPreview, getActionDescription } = require("./utils");
const UserAgent = require("user-agents");
require('dotenv').config();

const REDDIT_SVG = `<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Reddit</title><path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z"/></svg>`;

let r;
function setupReddit() {
    try {
        r = new snoowrap({
            userAgent: new UserAgent().toString(),
            clientId: process.env.REDDIT_CLIENT,
            clientSecret: process.env.REDDIT_SECRET,
            username: process.env.REDDIT_USERNAME,
            password: process.env.REDDIT_PASSWORD
        });
        return true;
    } catch (error) {
        console.error("Failed to setup reddit:", error);
        return false;
    }
}
setupReddit();

let forbidden_ids = new Set();
let unavailable_urls = new Set();

let forbidden_subreddits = new Set();

let aliases_map = {};

let skippedPosts = 0;
let createdPosts = 0;

(async () => {
    if (!fs.existsSync("./site/posts")) {
        fs.mkdirSync("./site/posts");
    }
    if (!fs.existsSync("./cache")) {
        fs.mkdirSync("./cache");
    }

    if (fs.existsSync("./cache/forbidden.json")) {
        forbidden_ids = new Set(JSON.parse(fs.readFileSync("./cache/forbidden.json").toString()));
        console.log(`Loaded ${forbidden_ids.size} forbidden IDs`);
    }

    if (fs.existsSync("./cache/unavailable.json")) {
        unavailable_urls = new Set(JSON.parse(fs.readFileSync("./cache/unavailable.json").toString()));
        console.log(`Loaded ${unavailable_urls.size} unavailable URLs`);
    }

    if (fs.existsSync("./forbidden.txt")) {
        forbidden_subreddits = new Set(fs.readFileSync("./forbidden.txt").toString().split("\n"));
        console.log(`Loaded ${forbidden_subreddits.size} forbidden subreddits`);
    }

    if (fs.existsSync("./reddit_aliases.json")) {
        aliases_map = JSON.parse(fs.readFileSync("./reddit_aliases.json").toString());
        console.log(`Loaded ${Object.keys(aliases_map).length} subreddit aliases`);
    }

    // Posts
    const posts = fs
        .createReadStream("./reddit-export/posts.csv")
        .pipe(parse({ columns: true }));
    for await (const { id, permalink, date, ip, subreddit, gildings, title, url, body } of posts) {
        if (!url) {
            // Removed and lost to time ;_;
            skippedPosts++;
            continue;
        }

        let timestamp = new Date(date).getTime();

        const submission = await getSubmission(id);
        if (isError(submission)) {
            skippedPosts++;
            continue;
        }

        const replies = submission.comments.map(comment => ({
            content: processContent(comment.body_html),
            published: comment.created * 1000,
            url: `https://reddit.com${comment.permalink}`,
            author: {
                name: extractUsername(comment.author),
                url: `https://reddit.com/u/${extractUsername(comment.author)}`,
                photo: getRedditAvatar(comment.author)
            }
        })) ?? [];

        let content;
        if (submission.selftext_html) {
            content = processContent(submission.selftext_html, title);
        } else {
            let processedUrl = url;
            if (url.startsWith("/r/")) {
                processedUrl = "https://www.reddit.com" + url;
            }
            content = await generateLinkPreview(processedUrl, timestamp, await getSubmissionFallback(submission), title);
        }

        while (fs.existsSync("./site/posts/" + timestamp)) {
            timestamp++;
            continue;
        }
        fs.mkdirSync("./site/posts/" + timestamp);

        const tag = slugify(aliases_map[subreddit.toLowerCase()] ?? subreddit);

        const fd = fs.openSync("./site/posts/" + timestamp + "/index.md", "w+");
        fs.writeSync(fd, preparePost(`---
kind: ${body ? 'article' : 'repost'}
title: ${encodeString(title, 2)}
published: ${timestamp}
next: false
prev: false
tags: [${encodeString(tag, 2)}]
---
<div class="post">
    ${getActionDescription({ timestamp, action: body ? "📝" : "🔁", verb: body ? "wrote" : "shared" })}
    <div class="content-container">
        ${await getAvatar({
            timestamp,
            tags: [tag],
            syndications: [{ type: REDDIT_SVG, url: permalink }],
            action: body ? '📝' : '🔁'
        })}
        <div class="content e-content ${body ? '' : 'h-cite u-repost-of'}">${content}</div>
    </div>
    ${(await Promise.all(replies.filter(c => c.author.name !== '[deleted]').map(async ({ content, published, url, author }) => `
    <div class="content-container u-comment h-cite">
        ${await getAvatar({
            ...author,
            timestamp: published,
            syndications: [{ type: REDDIT_SVG, url }]
        })}
        <div class="content e-content">${content}</div>
    </div>`))).join('')}
</div>
`));
        fs.closeSync(fd);
        createdPosts++;
        if (createdPosts % 100 === 0) {
            console.log(`Created ${createdPosts} reddit activity posts (currently submitting)`);
        }
    }

    // Comments
    const comments = fs
        .createReadStream("./reddit-export/comments.csv")
        .pipe(parse({ columns: true }));
    for await (const { id, permalink, date, ip, subreddit, gildings, link, parent, body } of comments) {
        if (body === "[removed]") {
            skippedPosts++;
            continue;
        }
        if (forbidden_subreddits.has(subreddit.toLowerCase())) {
            continue;
        }

        const comment = await getComment(id);
        if (isError(comment)) {
            skippedPosts++;
            continue;
        }

        let timestamp = new Date(date).getTime();
        const content = processContent(comment.body_html);

        let parentInfo;
        if (parent) {
            const parentComment = await getComment(parent);
            if (isError(parentComment)) {
                skippedPosts++;
                continue;
            }
            parentInfo = {
                content: processContent(await parentComment.body_html),
                published: await parentComment.created * 1000,
                url: `https://reddit.com${await parentComment.permalink}`,
                author: {
                    name: extractUsername(await parentComment.author),
                    url: `https://reddit.com/u/${extractUsername(await parentComment.author)}`,
                    photo: getRedditAvatar(await parentComment.author)
                }
            };
        } else {
            const submission = await getSubmission(await comment.link_id.replace(/t._/, ''));
            if (isError(submission)) {
                skippedPosts++;
                continue;
            }
            let content;
            if (await submission.selftext_html) {
                content = processContent(await submission.selftext_html, await submission.title);
            } else if (await submission.url) {
                content = await generateLinkPreview(await submission.url, timestamp, await getSubmissionFallback(submission), await submission.title);
            } else {
                console.warn("Unsure how to handle like to this submission", submission);
            }
            parentInfo = {
                content,
                published: await submission.created * 1000,
                url: `https://reddit.com${await submission.permalink}`,
                author: {
                    name: extractUsername(await submission.author),
                    url: `https://reddit.com/u/${extractUsername(await submission.author)}`,
                    photo: getRedditAvatar(await submission.author)
                }
            };
        }

        const replies = await Promise.all(await comment.replies.map(async comment => ({
            content: processContent(await comment.body_html),
            published: await comment.created * 1000,
            url: `https://reddit.com${await comment.permalink}`,
            author: {
                name: extractUsername(await comment.author),
                url: `https://reddit.com/u/${extractUsername(await comment.author)}`,
                photo: getRedditAvatar(await comment.author)
            }
        })) ?? []);

        if (!fs.existsSync("./site/posts/" + timestamp)) {
            fs.mkdirSync("./site/posts/" + timestamp);
        }
        const tag = slugify(aliases_map[subreddit.toLowerCase()] ?? subreddit);
        const fd = fs.openSync("./site/posts/" + timestamp + "/index.md", "w+");
        fs.writeSync(fd, preparePost(`---
kind: reply
title: I wrote a comment on r/${subreddit}
published: ${timestamp}
next: false
prev: false
tags: [${encodeString(tag, 2)}]
---
<div class="post">
    ${getActionDescription({ timestamp, action: "💬", verb: "replied to" })}
    <div class="content-container u-in-reply-to">
        ${await getAvatar({
            ...parentInfo.author,
            syndications: [{ type: REDDIT_SVG, url: parentInfo.url }],
            timestamp: parentInfo.published,
            tags: [tag]
        })}
        <div class="content e-content">${parentInfo.content}</div>
    </div>
    <div class="content-container">
        ${await getAvatar({
            timestamp,
            syndications: [{ type: REDDIT_SVG, url: permalink }]
        })}
        <div class="content e-content">${content}</div>
    </div>
    ${(await Promise.all(replies.filter(c => c.author.name !== '[deleted]').map(async ({ content, published, url, author }) => `
    <div class="content-container u-comment h-cite">
        ${await getAvatar({
            ...author,
            timestamp: published,
            syndications: [{ type: REDDIT_SVG, url }]
        })}
        <div class="content e-content">${content}</div>
    </div>`))).join('')}
</div>
`));
        fs.closeSync(fd);
        createdPosts++;
        if (createdPosts % 100 === 0) {
            console.log(`Created ${createdPosts} reddit activity posts (currently replying)`);
        }
    }

    // Votes
    const post_votes = fs
        .createReadStream("./reddit-export/post_votes.csv")
        .pipe(parse({ columns: true }))
    for await (const { id, permalink, direction } of post_votes) {
        if (direction !== "up") {
            continue;
        }

        await like_post(id, permalink);
    }
    const comment_votes = fs
        .createReadStream("./reddit-export/comment_votes.csv")
        .pipe(parse({ columns: true }));
    for await (const { id, permalink, direction } of comment_votes) {
        if (direction !== "up") {
            continue;
        }

        await like_comment(id, permalink);
    }

    // Saved
    const saved_posts = fs
        .createReadStream("./reddit-export/saved_posts.csv")
        .pipe(parse({ columns: true }));
    for await (const { id, permalink } of saved_posts) {
        await like_post(id, permalink, "favorite");
    }
    const saved_comments = fs
        .createReadStream("./reddit-export/saved_comments.csv")
        .pipe(parse({ columns: true }));
    for await (const { id, permalink } of saved_comments) {
        await like_comment(id, permalink, "favorite");
    }

    const fd = fs.openSync("./cache/forbidden.json", "w+");
    fs.writeSync(fd, JSON.stringify(Array.from(forbidden_ids.keys())));
    fs.closeSync(fd);

    console.log(`Created ${createdPosts} posts. ${skippedPosts} posts skipped due to being removed.`);
})();

async function generateLinkPreview(url, timestamp, fallback, title) {
    if (url.match(/^\/?[ru]\//)) {
        url = "https://www.reddit.com/" + url;
    }
    // Dorkly's CDN now serves viruses :(
    if (url.includes("dorkly.com")) {
        return undefined;
    }
    const linkPreviewCachePath = `./cache/${cyrb53(url)}.json`;
    let linkPreview;
    if (fs.existsSync(linkPreviewCachePath)) {
        linkPreview = JSON.parse(fs.readFileSync(linkPreviewCachePath).toString());
    } else if (!unavailable_urls.has(url)) {
        // getLinkPreview makes the process exit without throwing an error on this url
        if (url === "http://www.phrack.org/issues.html?issue=7&id=3&mode=txt") {
            linkPreview = await getArchivePreview(url, timestamp, fallback);
        } else {
            linkPreview = await getLinkPreview(url, { followRedirects: true }).catch(async () => {
                console.log(`Failed to retrieve preview for ${url}. Trying wayback machine...`);
                return await getArchivePreview(url, timestamp, fallback);
            });
        }
        if (linkPreview) {
            const fd = fs.openSync(linkPreviewCachePath, "w+");
            fs.writeSync(fd, JSON.stringify(linkPreview));
            fs.closeSync(fd);
        } else {
            console.log("Not available on wayback machine. No preview available.");
            markLinkUnavailable(url);
        }
    }

    if (linkPreview?.mediaType === "website" && (linkPreview.images ?? []).length === 0 && fallback) {
        linkPreview.images = [fallback];
    }

    return linkPreview ? processLinkPreview(linkPreview, title) : undefined;
}

async function like_post(id, permalink, action = "like") {
    const submission = await getSubmission(id);
    if (isError(submission)) {
        skippedPosts++;
        return;
    }

    let content;
    if (await submission.selftext_html) {
        content = processContent(await submission.selftext_html, await submission.title);
    } else if (await submission.url) {
        content = await generateLinkPreview(await submission.url, await submission.created,
            await getSubmissionFallback(submission), await submission.title);
    } else {
        console.warn("Unsure how to handle like to this submission", submission);
    }
    if (!content) {
        skippedPosts++;
        return;
    }

    let timestamp = await submission.created_utc * 1000;
    while (fs.existsSync("./site/posts/" + timestamp)) {
        timestamp++;
    }
    const author = extractUsername(await submission.author);
    const subreddit = await extractSubreddit(submission.subreddit);

    if (!fs.existsSync("./site/posts/" + timestamp)) {
        fs.mkdirSync("./site/posts/" + timestamp);
    }
    const fd = fs.openSync("./site/posts/" + timestamp + "/index.md", "w+");
    fs.writeSync(fd, preparePost(`---
kind: ${action}
title: ${encodeString(submission.title, 2)}
published: ${timestamp}
next: false
prev: false
tags: [${encodeString(subreddit, 2)}]
---
<div class="post">
    ${getActionDescription({ timestamp, action: action === "favorite" ? "⭐" : "❤️", verb: action === "favorite" ? "favorited" : "liked" })}
    <div class="content-container h-cite u-like-of">
        ${await getAvatar({
            photo: getRedditAvatar(author),
            name: author,
            url: `https://www.reddit.com/u/${author}`,
            syndications: [{ type: REDDIT_SVG, url: permalink }],
            timestamp,
            tags: [subreddit]
        })}
        <div class="content e-content">${content}</div>
    </div>
</div>
`));
    fs.closeSync(fd);
    createdPosts++;
    if (createdPosts % 100 === 0) {
        console.log(`Created ${createdPosts} reddit activity posts (currently ${action.slice(0, -1)}ing submissions)`);
    }
}

async function like_comment(id, permalink, action = "like") {
    const comment = await getComment(id);
    if (isError(comment)) {
        skippedPosts++;
        return;
    }

    const submission = await getSubmission(await comment.link_id.replace(/t._/, ''));
    if (isError(submission)) {
        skippedPosts++;
        return;
    }

    const content = processContent(await comment.body_html);
    let timestamp = await comment.created_utc * 1000;
    while (fs.existsSync("./site/posts/" + timestamp)) {
        timestamp++;
    }
    const author = extractUsername(await comment.author);
    const subreddit = await extractSubreddit(submission.subreddit);

    if (!fs.existsSync("./site/posts/" + timestamp)) {
        fs.mkdirSync("./site/posts/" + timestamp);
    }
    const fd = fs.openSync("./site/posts/" + timestamp + "/index.md", "w+");
    fs.writeSync(fd, preparePost(`---
kind: ${action}
title: I liked a comment on r/${subreddit}
published: ${timestamp}
next: false
prev: false
tags: [${encodeString(subreddit, 2)}]
---
<div class="post">
    ${getActionDescription({ timestamp, action: action === "favorite" ? "⭐" : "❤️", verb: action === "favorite" ? "favorited" : "liked" })}
    <div class="content-container h-cite u-like-of">
        ${await getAvatar({
            photo: getRedditAvatar(author),
            name: author,
            url: `https://www.reddit.com/u/${author}`,
            syndications: [{ type: REDDIT_SVG, url: permalink }],
            timestamp,
            tags: [subreddit]
        })}
        <div class="content e-content">${content}</div>
    </div>
</div>
`));
    fs.closeSync(fd);
    createdPosts++;
    if (createdPosts % 100 === 0) {
        console.log(`Created ${createdPosts} reddit activity posts (currently ${action.slice(0, -1)}ing comments)`);
    }
}

async function getSubmission(id) {
    if (forbidden_ids.has(id)) {
        return { error: 403 }
    }
    const submissionCachePath = `./cache/${id}.json`;
    if (fs.existsSync(submissionCachePath)) {
        const submission = JSON.parse(fs.readFileSync(submissionCachePath).toString());
        if (submission.author === "[deleted]" || submission.selftext === "[removed]") {
            return new Error();
        }
        if (forbidden_subreddits.has(submission.subreddit.toLowerCase())) {
            return new Error();
        }
        if (Object.keys(submission).length > 0) {
            return submission;
        }
    }
    
    // I think we're perma rate-limited. It's okay, I got most of the posts already
    skippedPosts++;
    return new Error();

    console.log("Querying submission", getLinkToSubmission(id));
    let submission = r.getSubmission(id).expandReplies({ limit: Infinity, depth: 1 });
    try {
        const fetchedSubmission = await new Promise(async (resolve, reject) => {
            setTimeout(() => reject({ error: { error: 429 } }), 2000);
            resolve(await submission.fetch());
        });
        const fd = fs.openSync(submissionCachePath, "w+");
        fs.writeSync(fd, JSON.stringify(fetchedSubmission));
        fs.closeSync(fd);
    } catch (error) {
        if (error.error?.error === 403) {
            console.log("Failed to retrieve submission - Forbidden", getLinkToSubmission(id));
            markForbidden(id);
        } else if (isRateLimited(error)) {
            if (await rateLimited()) {
                return getSubmission(id);
            }
        } else {
            console.log("Failed to retrieve submission - Not sure how to handle", getLinkToSubmission(id), error.name, error.message, error.constructor.name, error.error?.error);
        }
        skippedPosts++;
        return error;
    }
    return submission;
}

async function getComment(id, expandReplies = true) {
    if (forbidden_ids.has(id)) {
        return { error: 403 }
    }
    const commentCachePath = `./cache/${id}.json`;
    if (fs.existsSync(commentCachePath)) {
        const comment = JSON.parse(fs.readFileSync(commentCachePath).toString());
        if (comment.author === "[deleted]") {
            return new Error();
        }
        if (Object.keys(comment).length > 0) {
            return comment;
        }
    }
    
    // I think we're perma rate-limited. It's okay, I got most of the posts already
    skippedPosts++;
    return new Error();
    
    console.log("Querying comment", getLinkToComment(id), expandReplies ? "" : "without expanding replies");
    let comment = r.getComment(id);
    if (expandReplies) {
        comment = comment.expandReplies({ limit: Infinity, depth: 1 });
    }
    try {
        const fetchedComment = await new Promise(async (resolve, reject) => {
            setTimeout(() => reject({ error: { error: 429 } }), 2000);
            resolve(await comment.fetch());
        });
        const fd = fs.openSync(commentCachePath, "w+");
        fs.writeSync(fd, JSON.stringify(fetchedComment));
        fs.closeSync(fd);
        return fetchedComment;
    } catch (error) {
        if (error.error?.error === 403) {
            console.log("Failed to retrieve comment - Forbidden", getLinkToComment(id));
            markForbidden(id);
        } else if (isRateLimited(error)) {
            if (await rateLimited()) {
                return getComment(id, expandReplies);
            }
        } else if (expandReplies) {
            // Try again without expanding replies
            // Because expanding can fail on deleted posts
            return getComment(id, false);
        } else if (error.name === "TypeError") {
            console.log("Failed to retrieve comment - Probably a private community", getLinkToComment(id), error.name, error.message);
            markForbidden(id);
        } else {
            console.log("Failed to retrieve comment - Not sure how to handle", getLinkToComment(id), error.name, "|", error.message, "|", error.constructor.name, "|", error.error?.error);
        }
        skippedPosts++;
        return error;
    }
}

function getLinkToComment(id) {
    return `https://www.reddit.com/api/info?id=${getFullId(id, "t1_")}`;
}

function getLinkToSubmission(id) {
    return `https://www.reddit.com/comments/${id}`;
}

function getFullId(id, type) {
    if (id.startsWith(type)) {
        return id;
    }
    return type + id;
}

function markForbidden(id) {
    forbidden_ids.add(id);

    const fd = fs.openSync("./cache/forbidden.json", "w+");
    fs.writeSync(fd, JSON.stringify(Array.from(forbidden_ids.keys())));
    fs.closeSync(fd);
}

function markLinkUnavailable(url) {
    unavailable_urls.add(url);

    const fd = fs.openSync("./cache/unavailable.json", "w+");
    fs.writeSync(fd, JSON.stringify(Array.from(unavailable_urls.keys())));
    fs.closeSync(fd);
}

function extractUsername(usernameOrUser) {
    if (typeof usernameOrUser === "string") {
        return usernameOrUser;
    }
    return usernameOrUser.name;
}

async function extractSubreddit(subreddit) {
    while (typeof subreddit === "object" && "then" in subreddit) {
        // Continue unwrapping promises
        // Not sure why, but one await isn't always enough
        subreddit = await subreddit;
    }
    if (typeof subreddit !== "string") {
        subreddit = subreddit.display_name;
    }
    subreddit = aliases_map[subreddit.toLowerCase()] ?? subreddit;
    return slugify(subreddit);
}

function getRedditAvatar(user) {
    return `https://www.redditstatic.com/avatars/defaults/v2/avatar_default_${cyrb53(extractUsername(user)) % 8}.png`
}

function isRateLimited(error) {
    return error.constructor.name === "RateLimitError" || error.error?.error === 429;
}

function isError(error) {
    const hasError = error instanceof Error || !!error.error;
    if (hasError) {
        skippedPosts++;
    }
    return hasError;
}

function processContent(content, title) {
    content = sanitize(content)
        .replaceAll(
            /<a href="\/?([ur]\/[A-Za-z0-9_-]+)">\/?[ur]\/[A-Za-z0-9_-]+<\/a>/g,
            '<a href="https://www.reddit.com/$1">$1</a>');
    title = title ? `<h2>${sanitize(title).replaceAll(/</g, '&lt;').replaceAll(/>/g, '&gt;')}</h2>` : '';
    return `<div class="img-container"><div class="description">${title}${content}</div></div>`;
}

// https://stackoverflow.com/a/52171480/4376101
const cyrb53 = (str, seed = 0) => {
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < str.length; i++) {
        ch = str.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

async function rateLimited() {
    console.log(`Rate-limited by reddit. Waiting 1 minute and trying again...`);
    await new Promise(resolve => setTimeout(resolve, 60 * 1000));
    // Roll a new UA
    return setupReddit();
}

async function getSubmissionFallback(submission) {
    return await submission.preview?.images?.[0]?.resolutions?.slice(-1)[0]?.url;
}
