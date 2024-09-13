const fs = require("fs");
const path = require("path");
const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);
const { Feed } = require('feed');
const YAML = require('yaml');

const { walk, preparePost } = require("./utils");

const numFormat = Intl.NumberFormat("en-US");

(async () => {
    // We can't load all posts into memory, so focus on organizing them first (just storing timestamps)
    const mostRecentPosts = [];
    const postsByDate = {};
    const postsByTag = {};
    const postsByType = {
        article: [],
        repost: [],
        like: [],
        favorite: [],
        reply: []
    };

    const feed = new Feed({
        title: "The Paper Pilot's Posts",
        description: "A feed of my activity across the internet - posts, comments, replies, and reactions!",
        id: "https://www.thepaperpilot.org/posts/",
        link: "https://www.thepaperpilot.org/posts/",
        language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
        // image: "http://example.com/image.png",
        // favicon: "http://example.com/favicon.ico",
        copyright: `All rights reserved ${new Date().getFullYear()}, The Paper Pilot`,
        // updated: new Date(2013, 6, 14), // optional, default = today
        // generator: "awesome", // optional, default = 'Feed for Node.js'
        feedLinks: {
            rss: "https://www.thepaperpilot.org/posts/rss",
            json: "https://www.thepaperpilot.org/posts/json",
            atom: "https://www.thepaperpilot.org/posts/atom"
        },
        author: {
            name: "The Paper Pilot",
            email: "thepaperpilot@incremental.social",
            link: "https://www.thepaperpilot.org/"
        }
    });

    fs.readdirSync("./manual-posts").forEach(filename => {
        if (!fs.existsSync("./site/posts/" + filename)) {
            fs.mkdirSync("./site/posts/" + filename);
        }
        fs.copyFileSync("./manual-posts/" + filename + "/index.md", "./site/posts/" + filename + "/index.md")
    });

    let processed = 0;
    const totalPosts = fs.readdirSync("./site/posts").length;
    process.stdout.write(`Processed 0/${totalPosts} posts...`);
    await walk("./site/posts", (dir, file, resolve) => {
        const filePath = path.resolve(dir, file);
        const data = fs.readFileSync(filePath).toString();
        
        try {        
            let frontmatter = data.match(/---\n([\S\s]*?\n)---/m)[1];
            // frontmatter = frontmatter.replaceAll(/\\([a-zA-Z<>\.])/g, '\\\\$1');
            const { kind, published, tags, title } = YAML.parse(frontmatter);
            const timestamp = parseInt(published);

            mostRecentPosts.push(timestamp);
            mostRecentPosts.sort((a, b) => b - a);
            mostRecentPosts.splice(9, 10);

            insertByDate(postsByDate, timestamp);
            insertByDate(postsByType[kind], timestamp);
            tags?.forEach(tag => {
                postsByTag[tag] = postsByTag[tag] ?? [];
                insertByDate(postsByTag[tag], timestamp);
            })

            const content = data.match(/---\n[\S\s]*?\n---\n([\S\s]*)/m)[1];
            
            feed.addItem({
                title: title ?? kind,
                id: `https://www.thepaperpilot.org/posts/${timestamp}`,
                link: `https://www.thepaperpilot.org/posts/${timestamp}`,
                content,
                date: new Date(published),
                category: { name: kind }
            });

            process.stdout.clearLine(0);
            process.stdout.cursorTo(0);
            process.stdout.write(`Processed ${++processed}/${totalPosts} posts...`);

            resolve();
        } catch (e) {
            console.log("\nFailed to process post", filePath, e);
        }
    });
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(`Processed ${totalPosts}/${totalPosts} posts... Processed all posts!\n`);

    console.log("Writing recent posts", mostRecentPosts);
    fd = fs.openSync("site/recent-posts.data.ts", "w+");
    fs.writeSync(fd, `
export default {
    async load(): Promise<string[]> {
        return ${JSON.stringify(mostRecentPosts.map(getContentFromTimestamp))}
    }
};`);
    fs.closeSync(fd);

    console.log("Writing index pages organized by date");
    await writePostsByDate(postsByDate, "timeline");

    console.log("Writing index pages by tag");
    if (fs.existsSync("./site/tag")) {
        fs.rmSync("./site/tag", { recursive: true });
    }
    let tagIndex = `---
kind: index
title: Tags
prev: false
next: false
---
# Tags\n\n`;
    for (const tag of Object.keys(postsByTag).toSorted()) {
        console.log("-- " + tag);
        const totalPosts = await writePostsByDate(postsByTag[tag], "tag/" + tag, `Posts tagged "${tag}"`);
        tagIndex += `## ${tag}

There are ${numFormat.format(totalPosts)} post${totalPosts === 1 ? '' : 's'} tagged "[${tag}](/tag/${tag}/1)".\n\n`;
    }
    if (!fs.existsSync("./site/tags")) {
        fs.mkdirSync("./site/tags");
    }
    fd = fs.openSync("./site/tags/index.md", "w+");
    fs.writeSync(fd, preparePost(tagIndex));
    fs.closeSync(fd);

    console.log("Writing index pages by type");
    let kindIndex = `---
kind: index
title: Types
prev: false
next: false
---
# Types\n\n`;
    await Promise.all(Object.keys(postsByType).map(async kind => {
        console.log("-- " + kind);
        const title = `${kind.charAt(0).toUpperCase()}${kind === "reply" ? "eplie" : kind.slice(1)}s`;
        const totalPosts = await writePostsByDate(postsByType[kind], "type/" + kind, title);
        kindIndex += `## ${title}

There are ${numFormat.format(totalPosts)} [${title.toLowerCase()}](/type/${kind}/1) post${totalPosts === 1 ? '' : 's'}.\n\n`;
    }));
    if (!fs.existsSync("./site/types")) {
        fs.mkdirSync("./site/types");
    }
    fd = fs.openSync("./site/types/index.md", "w+");
    fs.writeSync(fd, preparePost(kindIndex));
    fs.closeSync(fd);


    if (!fs.existsSync("./site/public/posts")) {
        fs.mkdirSync("./site/public/posts");
    }

    console.log("Writing rss...");
    fd = fs.openSync("site/public/posts/rss", "w+");
    fs.writeSync(fd, feed.rss2());
    fs.closeSync(fd);

    console.log("Writing atom...");
    fd = fs.openSync("site/public/posts/atom", "w+");
    fs.writeSync(fd, feed.atom1());
    fs.closeSync(fd);

    console.log("Writing json...");
    fd = fs.openSync("site/public/posts/json", "w+");
    fs.writeSync(fd, feed.json1());
    fs.closeSync(fd);
})();

function insertByDate(posts, timestamp) {
    const d = new Date(timestamp);
    const year = d.getFullYear();
    const month = d.getMonth();
    posts[year] = posts[year] ?? {};
    posts[year][month] = posts[year][month] ?? [];
    posts[year][month].push(timestamp);
}

function getContentFromTimestamp(timestamp) {
    const filePath = `./site/posts/${timestamp}/index.md`;
    const data = fs.readFileSync(filePath).toString();
    return data.match(/---\n[\S\s]*?\n---\n([\S\s]*)/m)[1]
        .replace(/<iframe.*<\/iframe>/, '')
        .replace(/<div class="content-container u-comment h-cite">.*/s, '</div>');
}

async function writePostsByDate(posts, baseUrl, title = "Posts") {
    await exec(`rm -rf ./site/${baseUrl}`);
    const allPosts = Object.keys(posts).map(y => parseInt(y)).toSorted().reduce((acc, year) => {
        const sortedMonths = Object.keys(posts[year]).map(m => parseInt(m)).toSorted();
        const sortedPosts = sortedMonths.reduce((acc, month) =>
            [...acc, ...posts[year][month].toSorted()], []);
        return [...acc, ...sortedPosts];
    }, []).toReversed();
    const pages = Math.ceil(allPosts.length / 20);
    new Array(pages).fill(0).forEach((_, i) => {
        const folderPath = `./site/${baseUrl}/${i + 1}`;
        fs.mkdirSync(folderPath, { recursive: true });
        fd = fs.openSync(folderPath + "/index.md", "w+");
        fs.writeSync(fd, `---
kind: index
title: '${title}'
${adjacentLinks(i + 1, pages, baseUrl)}
---
# ${title}

${allPosts.slice(i * 20, (i + 1) * 20).map(getContentFromTimestamp).join("\n")}
`);
        fs.closeSync(fd);
    });
    return allPosts.length;
}

function adjacentLinks(index, pages, baseUrl) {
    let links = '';
    if (index === 1) {
        links += 'prev: false\n';
    } else {
        links += `prev:
    link: ${baseUrl}/${index - 1}
    text: Page ${index - 1}\n`;
    }
    if (index === pages) {
        links += 'next: false';
    } else {
        links += `next:
    link: ${baseUrl}/${index + 1}
    text: Page ${index + 1}`;
    }
    return links;
}
