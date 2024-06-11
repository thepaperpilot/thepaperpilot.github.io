const fs = require("fs");
const path = require("path");

const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);

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

function toSlug(string) {
    return string.toLowerCase().replaceAll(' ', '-');
}

(async () => {
    const blockRefs = {};
    const blockLinks = {};
    const indices = [];
    await walk("./garden-output/logseq-pages", (dir, file, resolve) => {
        const filePath = path.resolve(dir, file);
        const data = fs.readFileSync(filePath).toString();
        const slug = path.basename(file, ".md").replaceAll('___', '/').replaceAll(/%3F/gi, '').replace('what-is-content-', 'what-is-content');
        for (const match of data.matchAll(/(.*)\n\s*id:: (.*)/gm)) {
        	const text = match[1];
        	const id = match[2];
            const link = `/garden/${slug}/index.md#${id}`;
            blockLinks[id] = link;
        	blockRefs[id] = `[${text}](${link})`;
        }
        if (data.match(/index: "true"/g)) {
            indices.push(slug);
        }
        resolve();
    });

    const pageLinks = {};
    const taggedBy = {};
    const tagged = {};
    const referencedBy = {};
    // Walk through the pages to make sure we get the canonical name page (pre-slug)
    // The logseq-export README made it sound like even the title property is transformed sometimes
    await walk("./Garden/pages", (dir, file, resolve) => {
        const filePath = path.resolve(dir, file);
        const data = fs.readFileSync(filePath).toString();
        if (!data.match(/public::/g)) {
            resolve();
            return;
        }

        const name = path.basename(file, ".md").replaceAll('___', '/');
        const slug = toSlug(name).replaceAll(/%3F/gi, '').replaceAll('\'', '-');
        const link = `/garden/${slug}/index.md`;
        pageLinks[name.replaceAll(/%3F/gi, '?')] = link;

        for (const match of data.matchAll(/alias:: (.*)/g)) {
            match[1].split(", ").forEach(page => (pageLinks[page] = link));
        }

        for (const match of data.matchAll(/tags:: (.*)/g)) {
            match[1].split(", ").forEach(page => {
                const pageSlug = toSlug(page);
                taggedBy[pageSlug] = [...(taggedBy[pageSlug] ?? []), name];
                tagged[slug] = [...(tagged[slug] ?? []), page];
            });
        }

        if (!indices.includes(slug)) {
            for (const match of data.matchAll(/\[\[([^\[\]]*)\]\]/g)) {
                const pageSlug = toSlug(match[1]);
                referencedBy[pageSlug] = [...(referencedBy[pageSlug] ?? []), name];
            }
        }

        resolve();
    });
    Object.keys(referencedBy).forEach(page => {
        referencedBy[page] = Array.from(new Set(referencedBy[page]));
    });

    await walk("./garden-output/logseq-pages", (dir, file, resolve) => {
        const filePath = path.resolve(dir, file);
        let data = fs.readFileSync(filePath).toString();

		// Replace youtube embeds
        data = data.replaceAll(
        	/{{video https:\/\/(?:www\.)?youtube\.com\/watch\?v=(.*)}}/g,
        	'<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" title="" frameBorder="0" allowFullScreen />');
        // Replace internal links
        data = data.replaceAll(
        	/]\(\/logseq-pages\/([^\)]*)\)/g,
        	'](/garden/$1/index.md)');
		// Replace block links
        data = data.replaceAll(
        	/\(\((.*)\)\)/g,
        	(_, id) => blockRefs[id]);
		// Remove id:: lines
        data = data.replaceAll(
            /(#+) (.*)\n\s*id:: (.*)/gm,
            (_, h, title, id) => `<span id="${id}"><h${h.length}>${title}</h${h.length}></span>`);
        data = data.replaceAll(
            /(.*)\n\s*id:: (.*)/gm,
            '<span id="$2">$1</span>');
        // Fix internal links with spaces not getting mapped
        data = data.replaceAll(
            /\[\[([^\[\]]*)\]\]/g,
            (_, page) => `[${page}](${pageLinks[page]})`);
        // Fix internal asset links
        data = data.replaceAll(
            /\(\/logseq-assets\/([^\)]*)\)/g,
            '(/garden/$1)');
        // Fix logseq block links
        data = data.replaceAll(
            /logseq:\/\/graph\/Garden\?block-id=([^\)]*)/g,
            (_, block) => `${blockLinks[block]})`);
        // Fix logseq page links
        data = data.replaceAll(
            /logseq:\/\/graph\/Garden\?page=([^\)]*)/g,
            (_, page) => `${pageLinks[page.replaceAll('%20', ' ')]})`);
		// Add tags and references
        const title = path.basename(file, ".md");
        if (title in tagged) {
            data = data.replaceAll(
                /---\n\n/gm,
                `---\n\n> Tags: ${tagged[title].map(tag => `[${tag}](${pageLinks[tag]})`).join(", ")}\n\n`);
        }
        if (title in taggedBy) {
            data = data.replaceAll(
                /---\n\n/gm,
                `---\n\n> Tagged by: ${taggedBy[title].map(tag => `[${tag}](${pageLinks[tag]})`).join(", ")}\n\n`);
        }
        // TODO show context on references? Perhaps in a `::: info` block?
        if (title in referencedBy) {
            data = data.replaceAll(
                /---\n\n/gm,
                `---\n\n> Referenced by: ${referencedBy[title].map(tag => `[${tag}](${pageLinks[tag]})`).join(", ")}\n\n`);
        }
        // Add title to the top
        data = data.replaceAll('___', '/');
        data = data.replaceAll(
            /---\n\n/gm,
            `prev: false\nnext: false\n---\n# ${data.match(/title: "(.+)"/)[1]}\n\n`);

        const fd = fs.openSync(filePath, "w+");
        fs.writeSync(fd, data);
        fs.closeSync(fd);
        resolve();
    });

	fs.mkdirSync("./site/garden");
    fs.mkdirSync("./site/public/garden");

	// Move everything from ./garden-output/logseq-pages into ./site/garden
    await walk("./garden-output/logseq-pages", (dir, file, resolve) => {
    	const folder = path.resolve("./site/garden", ...path.basename(file, ".md").split('___'));
    	fs.mkdirSync(folder);
    	fs.copyFileSync(path.resolve(dir, file), path.resolve(folder, "index.md"));
        resolve();
    });

	// Move everything from ./garden-output/logseq-assets into ./site/public/garden
    await walk("./garden-output/logseq-assets", (dir, file, resolve) => {
    	fs.copyFileSync(path.resolve(dir, file), path.resolve("./site/public/garden", ...path.basename(file).split('___')));
        resolve();
    });

    // Copy the guide-to-incrementals pages to the old locations so links don't break
    fs.mkdirSync('./site/guide-to-incrementals');
    fs.copyFileSync('./site/garden/guide-to-incrementals/index.md', './site/guide-to-incrementals/index.md');
    fs.mkdirSync('./site/guide-to-incrementals/design');
    fs.mkdirSync('./site/guide-to-incrementals/design/criticism');
    fs.copyFileSync('./site/garden/guide-to-incrementals/navigating-criticism/index.md', './site/guide-to-incrementals/design/criticism/index.md');
    fs.mkdirSync('./site/guide-to-incrementals/ludology');
    fs.mkdirSync('./site/guide-to-incrementals/ludology/appeal-developers');
    fs.copyFileSync('./site/garden/guide-to-incrementals/appeal-to-developers/index.md', './site/guide-to-incrementals/ludology/appeal-developers/index.md');
    fs.mkdirSync('./site/guide-to-incrementals/ludology/appeal-gamers');
    fs.copyFileSync('./site/garden/guide-to-incrementals/appeal-to-players/index.md', './site/guide-to-incrementals/ludology/appeal-gamers/index.md');
    fs.mkdirSync('./site/guide-to-incrementals/ludology/content');
    // For what is content, also remove the - at the end
    fs.cpSync('./site/garden/guide-to-incrementals/what-is-content-', './site/garden/guide-to-incrementals/what-is-content', { recursive: true });
    fs.copyFileSync('./site/garden/guide-to-incrementals/what-is-content-/index.md', './site/guide-to-incrementals/ludology/content/index.md');
    fs.rmSync('./site/garden/guide-to-incrementals/what-is-content-', { recursive: true });
    fs.mkdirSync('./site/guide-to-incrementals/ludology/definition');
    fs.copyFileSync('./site/garden/guide-to-incrementals/defining-the-genre/index.md', './site/guide-to-incrementals/ludology/definition/index.md');

    // Build changelog
    fs.mkdirSync("./site/changelog");

    await exec("git fetch --all")
    console.log("remotes: " + (await exec("git branch -r -v")).stdout);
    const { stdout } = await exec('git log origin/master --after="2024-06-03T0:0:0+0000" --pretty=%H site/garden');
    console.log(stdout);
    const entries = await Promise.all(stdout.split("\n").filter(p => p).map(hash => new Promise(async (resolve) => {
        const { stdout: title } = await exec(`git show --quiet --format=%s ${hash}`);
        const { stdout: time } = await exec(`git show --quiet --format=%as ${hash}`);
        console.log(">", hash, title, time)
        let { stdout: changes } = await exec(`git show --format="" --stat=100 --relative ${hash} .`, { cwd: 'site/garden' });

        changes = changes.replaceAll(/\/index.md/g, '');
        changes = changes.replaceAll(
            /(\| +[0-9]+ )(\++)/g,
            '$1<span style="color:#A3BE8C">$2</span>');
        changes = changes.replaceAll(
            /(\| +[0-9]+ \+*)(-+)/g,
            '$1<span style="color:#BF616A">$2</span>');
        const lines = changes.split('\n');
        const summary = lines[lines.length - 2];
        changes = lines.slice(0, -2).map(line => {
            const [page, changes] = line.split("|").map(p => p.trim());
            return `<tr><td><a href="/garden/${page}">${page}</a></td><td>${changes}</td></tr>`;
        }).join("\n");

        resolve(
`<article class="h-entry">
<h2 class="p-name">${title}</h2>
<p>Pushed on <time class="dt-published">${time}</time></p>
<p class="p-content">
<table>
<thead>
<tr>
<th style="align: center">Page</th>
<th style="align: center">Changes</th>
</tr>
</thead>
<tbody>
${changes}
</tbody>
</table>
</p>
<p>${summary}</p>
</article>`);
    })));
    const fd = fs.openSync("site/changelog/index.md", "w+");
    fs.writeSync(fd,
`---
title: Changelog
prev: false
next: false
---
<section class="h-feed">
<h1 class="p-name">
<a href="/changelog" class="u-url">Changelog</a>
<a href="/changelog.rss"><svg viewBox="0 0 16 16" class="svg octicon-rss" aria-hidden="true" width="16" height="16"><path d="M2.002 2.725a.75.75 0 0 1 .797-.699C8.79 2.42 13.58 7.21 13.974 13.201a.75.75 0 0 1-1.497.098 10.5 10.5 0 0 0-9.776-9.776.747.747 0 0 1-.7-.798ZM2.84 7.05h-.002a7 7 0 0 1 6.113 6.111.75.75 0 0 1-1.49.178 5.5 5.5 0 0 0-4.8-4.8.75.75 0 0 1 .179-1.489M2 13a1 1 0 1 1 2 0 1 1 0 0 1-2 0"></path></svg></a>
</h1>
<p>This feed starts when I formatted the site to be a <a href="/garden/digital-gardens/">Digital Garden</a>. If you'd like to look further into this site's history, check <a href="https://code.incremental.social/thepaperpilot/pages/commits/branch/master">here</a>!</p>

${entries.join("\n\n")}
</section>
`
);
    fs.closeSync(fd);
})();
