const fs = require("fs");
const path = require("path");

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
    await walk("./garden-output/logseq-pages", (dir, file, resolve) => {
        const filePath = path.resolve(dir, file);
        const data = fs.readFileSync(filePath).toString();
        for (const match of data.matchAll(/- (.*)\n\s*id:: (.*)/gm)) {
        	const text = match[1];
        	const id = match[2];
        	blockRefs[id] = `[${text}](/garden/${path.basename(file, ".md")}/index.md#${id})`;
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
        const slug = toSlug(name);
        const link = `/garden/${slug}/index.md`;
        pageLinks[name] = link;

        for (match of data.matchAll(/alias:: (.*)/g)) {
            match[1].split(", ").forEach(page => (pageLinks[page] = link));
        }

        for (match of data.matchAll(/tags:: (.*)/g)) {
            match[1].split(", ").forEach(page => {
                const pageSlug = toSlug(page);
                taggedBy[pageSlug] = [...(taggedBy[pageSlug] ?? []), name];
                tagged[slug] = [...(tagged[slug] ?? []), page];
            });
        }

        for (match of data.matchAll(/\[\[([^\[\]]*)\]\]/g)) {
            const pageSlug = toSlug(match[1]);
            referencedBy[pageSlug] = [...(referencedBy[pageSlug] ?? []), name];
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
            /(.*)\n\s*id:: (.*)/gm,
            '<span id="$2">$1</span>');
        // Fix internal links with spaces not getting mapped
        data = data.replaceAll(
            /\[\[([^\[\]]*)\]\]/g,
            (_, page) => `[${page}](${pageLinks[page]})`);
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
        data = data.replaceAll(
            /---\n\n/gm,
            `---\n# ${data.match(/title: "(.+)"/)[1]}\n\n`);

        const fd = fs.openSync(filePath, "w+");
        fs.writeSync(fd, data);
        fs.closeSync(fd);
        resolve();
    });

	fs.mkdirSync("./site/garden");

	// Move everything from ./garden-output/logseq-pages into ./site/garden
    await walk("./garden-output/logseq-pages", (dir, file, resolve) => {
    	const folder = path.resolve("./site/garden", path.basename(file, ".md"));
    	fs.mkdirSync(folder);
    	fs.copyFileSync(path.resolve(dir, file), path.resolve(folder, "index.md"));
        resolve();
    });

	// Move everything from ./garden-output/logseq-assets into ./site/public
    await walk("./garden-output/logseq-assets", (dir, file, resolve) => {
    	fs.copyFileSync(path.resolve(dir, file), path.resolve("./site/public", path.basename(file)));
        resolve();
    });
})();
