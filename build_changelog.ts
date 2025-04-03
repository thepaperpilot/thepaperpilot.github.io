import fs from "fs";

import util from 'node:util';
import child_process from 'node:child_process';

import { Feed } from 'feed';

const exec = util.promisify(child_process.exec);

(async () => {
    const feed = new Feed({
        title: "The Paper Pilot's Digital Garden Changelog",
        description: "A feed of updates made to my digital garden!",
        id: "https://www.thepaperpilot.org/changelog/",
        link: "https://www.thepaperpilot.org/changelog/",
        language: "en", // optional, used only in RSS 2.0, possible values: http://www.w3.org/TR/REC-html40/struct/dirlang.html#langcodes
        // image: "http://example.com/image.png",
        // favicon: "http://example.com/favicon.ico",
        copyright: `All rights reserved ${new Date().getFullYear()}, The Paper Pilot`,
        // updated: new Date(2013, 6, 14), // optional, default = today
        // generator: "awesome", // optional, default = 'Feed for Node.js'
        feedLinks: {
            rss: "https://www.thepaperpilot.org/changelog/rss",
            json: "https://www.thepaperpilot.org/changelog/json",
            // atom: "https://www.thepaperpilot.org/changelog/atom"
        },
        author: {
            name: "The Paper Pilot",
            email: "thepaperpilot@incremental.social",
            link: "https://www.thepaperpilot.org/about"
        }
    });

    const stdout = await exec('git log --after="2024-09-22T0:0:0+0000" --pretty=%H origin/master -- content/garden')
        .then(res => res.stdout)
        .catch(err => console.warn(`Error calculating git history:\n${err}`));
    if (!stdout) {
        return;
    }

    await Promise.all(stdout.split("\n").filter(p => p).map(hash => new Promise(async (resolve) => {
        const { stdout: fullTime } = await exec(`git show --quiet --format=%ad ${hash}`);
        let { stdout: changes } = await exec(`git show --format="" --stat --relative ${hash} .`, {
            cwd: 'content/garden'
        });

        changes = changes.replaceAll(/\/index.md/g, '');
        changes = changes.replaceAll(
            /(\| +[0-9]+ \+*)(-+)/g,
            '$1<span style="color:#BF616A">$2</span>');
        changes = changes.replaceAll(
            /(\| +[0-9]+ )(\++)/g,
            '$1<span style="color:#A3BE8C">$2</span>');
        const lines = changes.split('\n');
        const summary = lines[lines.length - 2];
        changes = lines.slice(0, -2).map(line => {
            const [page, changes] = line.split("|").map(p => p.trim());
            return `<tr><td><a href="/garden/${page}">${page}</a></td><td style="font-family: monospace; white-space: nowrap;">${changes}</td></tr>`;
        }).join("\n");

        const commitLink = `https://code.incremental.social/thepaperpilot/pages/commit/${hash}`
        const content = `<table>
    <thead>
        <tr>
            <th style="align: center">Page</th>
            <th style="align: center">Changes</th>
        </tr>
    </thead>
    <tbody>
        ${changes}
    </tbody>
</table>`;

        feed.addItem({
            title: summary,
            id: commitLink,
            link: commitLink,
            description: summary,
            content,
            date: new Date(fullTime)
        });

        resolve(null);
    })));

    if (!fs.existsSync("public/changelog")) {
        fs.mkdirSync("public/changelog");
    }

    let fd = fs.openSync("public/changelog/rss", "w+");
    fs.writeSync(fd, feed.rss2());
    fs.closeSync(fd);

    // Atom1 fails here for some reason
    // fd = fs.openSync("public/changelog/atom", "w+");
    // fs.writeSync(fd, feed.atom1());
    // fs.closeSync(fd);

    fd = fs.openSync("public/changelog/json", "w+");
    fs.writeSync(fd, feed.json1());
    fs.closeSync(fd);
})();
