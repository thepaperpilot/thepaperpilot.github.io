const fs = require("fs");

const { getLinkPreview } = require("link-preview-js");
const { getAvatar, preparePost, encodeString, processLinkPreview, getArchivePreview, getActionDescription } = require("./utils");

(async () => {
    if (!fs.existsSync("./manual-posts")) {
        fs.mkdirSync("./manual-posts");
    }
    const tags = process.argv.slice(2).filter(tag => !tag.startsWith("-") && !tag.startsWith("http"));
    await Promise.all(process.argv.slice(2).map(async url => {
        if (url.startsWith("-") || !url.startsWith("http")) {
            return;
        }
        
        let timestamp = new Date().getTime();
        while (fs.existsSync("./manual-posts/" + timestamp)) {
            timestamp++;
            continue;
        }
        fs.mkdirSync("./manual-posts/" + timestamp);

        console.log("Generating preview for", url);
        const linkPreview = await getLinkPreview(url, { followRedirects: true }).catch(async () => {
            console.log(`Failed to retrieve preview for ${url}. Trying wayback machine...`);
            return await getArchivePreview(url, timestamp);
        });
        const content = await processLinkPreview(linkPreview);

        const fd = fs.openSync("./manual-posts/" + timestamp + "/index.md", "w+");
        fs.writeSync(fd, preparePost(`---
kind: repost
title: ${encodeString(linkPreview.title, 2)}
published: ${timestamp}
next: false
prev: false
---
<div class="post">
    ${getActionDescription({ timestamp, kind: "bookmark" })}
    <div class="content-container">
        ${await getAvatar({
            timestamp,
            tags,
            kind: 'bookmark'
        })}
        <div class="content e-content h-cite u-repost-of">${content}</div>
    </div>
</div>
`));
        fs.closeSync(fd);
        console.log(`Created post for url ${url}: /manual-posts/${timestamp}`);
    }));
})();
