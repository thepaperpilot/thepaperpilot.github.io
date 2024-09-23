import fs from "fs";
import path from "path";
import wordCounting from "word-counting";
import { walk } from "./utils/fs-utils.js";

import util from 'node:util';
import child_process from 'node:child_process';
const exec = util.promisify(child_process.exec);

function toSlug(string: string) {
    return string.toLowerCase().replaceAll(' ', '-');
}

(async () => {
    const blockRefs: Record<string, string> = {};
    const blockLinks: Record<string, string> = {};
    const indices: string[] = [];
    await walk("./garden-output/logseq-pages", (dir, file, resolve) => {
        const filePath = path.resolve(dir, file);
        const data = fs.readFileSync(filePath).toString();
        const slug = path.basename(file, ".md").replaceAll('___', '/').replaceAll(/%3F/gi, '')
            .replace('what-is-content-', 'what-is-content');
        for (const match of data.matchAll(/(.*)\n\s*id:: (.*)/gm)) {
        	const text = match[1];
        	const id = match[2];
            const link = `/garden/${slug}#${id}`;
            blockLinks[id] = link;
        	blockRefs[id] = `[${text}](${link})`;
        }
        if (data.match(/index: "true"/g)) {
            indices.push(slug);
        }
        resolve();
    });

    const pageLinks: Record<string, string> = {};
    const taggedBy: Record<string, string[]> = {};
    const tagged: Record<string, string[]> = {};
    const referencedBy: Record<string, string[]> = {};
    // Walk through the pages to make sure we get the canonical name page (pre-slug)
    // The logseq-export README made it sound like even the title property is transformed sometimes
    await walk("./Garden/pages", (dir, file, resolve) => {
        const filePath = path.resolve(dir, file);
        let data = fs.readFileSync(filePath).toString();
        if (data.match(/public::/g) == null) {
            resolve();
            return;
        }

        const startPrivate = data.indexOf("- private");
        if (startPrivate > 0) {
            data = data.slice(0, startPrivate);
        }

        const name = path.basename(file, ".md").replaceAll('___', '/');
        const slug = toSlug(name).replaceAll(/%3F/gi, '').replaceAll('\'', '-');
        const link = `/garden/${slug}`;
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

        resolve();
    });
    await walk("./Garden/pages", (dir, file, resolve) => {
        const filePath = path.resolve(dir, file);
        let data = fs.readFileSync(filePath).toString();
        if (data.match(/public::/g) == null) {
            resolve();
            return;
        }

        const name = path.basename(file, ".md").replaceAll('___', '/');
        const slug = toSlug(name).replaceAll(/%3F/gi, '').replaceAll('\'', '-');

        if (!indices.includes(slug)) {
            for (const match of data.matchAll(/\[\[([^\[\]]*)\]\]/g)) {
                const pageSlug = pageLinks[match[1].replaceAll(/%3F/gi, '?')];
                referencedBy[pageSlug] = [...(referencedBy[pageSlug] ?? []),
                    name.replaceAll(/%3F/gi, '?')];
            }
        }

        resolve();
    });
    Object.keys(referencedBy).forEach(page => {
        referencedBy[page] = Array.from(new Set(referencedBy[page]));
    });

	// Move everything from ./garden-output/logseq-assets into ./public/garden
    fs.mkdirSync("./content/garden", { recursive: true });
    await walk("./garden-output/logseq-pages", async (dir, file, resolve) => {
        const filePath = path.resolve(dir, file);
        let data = fs.readFileSync(filePath).toString();

        // Count word counts with a special set of transformations that should make it more accurate
        const strippedData = data.replace(/---\n[\S\s]*\n---/gm, '').replaceAll(/.*::.*/g, '')
            .replaceAll(/\[([^\]]*)\]\(.*\)/g, '$1');
        const wc = wordCounting(strippedData).wordsCount;
        data = data.replace(/---\n\n/gm, `wordCount: ${wc}\n---\n\n`);

        data = data.replace(/public: .*\n/, '');
        data = data.replace(/slug: .*\n/, '');
        data = data.replace(/alias: .*\n/, '');
        const contentPath =
            path.resolve("./content/garden", path.relative("./garden-output/logseq-pages", file));
        const firstCommit =
            exec(`git log -n 1 --diff-filter=A --format="%H,%at" -- "${contentPath}"`)
            .then(output => output.stdout)
            .catch(err =>
                console.warn(`Error calculating first commit for ${contentPath}:\n${err}`));
        const lastCommit =
            exec(`git log -n 1 --diff-filter=M --format="%H,%at" -- "${contentPath}"`)
            .then(output => output.stdout)
            .catch(err =>
                console.warn(`Error calculating last commit for ${contentPath}:\n${err}`));

        const [hash, timestampString] = (await firstCommit)?.trim().split(",") ?? ["", ""];
        const timestamp = parseInt(timestampString);
        data = data.replace(/---\n\n/gm,
            `published:\n  hash: ${hash}\n  timestamp: ${timestamp * 1000}\n---\n\n`);
        if (await lastCommit) {
            const [hash, timestampString] = (await lastCommit)!.trim().split(",");
            const timestamp = parseInt(timestampString);
            data = data.replace(/---\n\n/gm,
                `edited:\n  hash: ${hash}\n  timestamp: ${timestamp * 1000}\n---\n\n`);
        }

		// Replace youtube embeds
        data = data.replaceAll(
        	/{{video https:\/\/(?:www\.)?youtube\.com\/watch\?v=(.*)}}/g,
        	'<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" title="" frameBorder="0" allowFullScreen />');
        // Replace internal links
        data = data.replaceAll(
        	/]\(\/logseq-pages\/([^\)]*)\)/g,
        	'](/garden/$1)');
		// Replace block links
        data = data.replaceAll(
        	/\(\((.*)\)\)/g,
        	(_, id) => blockRefs[id]);
		// Remove id:: lines
        data = data.replaceAll(
            /(#+) (.*)\n\s*id:: (.*)/gm,
            (_, h, title, id) => `<h${h.length} id="${id}">${title}</h${h.length}>\n`);
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
        // Wrap images
        data = data.replaceAll(
            /!\[([^\]]*)\]\(([^\)]*)\)/g,
            (_, title, src) => `:postsCard{image="${src}" alt="${title}"}`)
		// Add tags and references
        const title = path.basename(file, ".md");
        if (title in tagged) {
            data = data.replace(/tags: \[.*\]\n/, '');
            data = data.replaceAll(
                /---\n\n/gm,
                `tags:\n${tagged[title].map(tag =>
                    `  ${tag}: ${pageLinks[tag]}`).join("\n")}\n---\n\n`);
        }
        if (title in taggedBy) {
            data = data.replaceAll(
                /---\n\n/gm,
                `taggedBy:\n${taggedBy[title].map(page =>
                    `  ${page}: ${pageLinks[page]}`).join("\n")}\n---\n\n`);
        }
        // TODO show context on references? Perhaps in a `::: info` block?
        const pageTitle = data.match(/title: "(.+)"/)?.[1] ?? "";
        if (pageLinks[pageTitle] in referencedBy) {
            data = data.replaceAll(
                /---\n\n/gm,
                `referencedBy:\n${referencedBy[pageLinks[pageTitle]].map(page =>
                    `  ${page}: ${pageLinks[page]}`).join("\n")}\n---\n\n`);
        }
        // Fix links to /now
        data = data.replace('NOW', '/now')
        data = data.replaceAll('___', '/');
        const folders = path.relative(dir, file).split('___');
        const filename = folders.splice(folders.length - 1, 1)[0];
    	fs.mkdirSync(path.resolve("./content/garden", ...folders), { recursive: true });
        const fd = fs.openSync(path.resolve("./content/garden", ...folders, filename), "w+");
        fs.writeSync(fd, data);
        fs.closeSync(fd);
        resolve();
    });

	// Move everything from ./garden-output/logseq-assets into ./public/garden
    fs.mkdirSync("./public/garden", { recursive: true });
    await walk("./garden-output/logseq-assets", (dir, file, resolve) => {
    	fs.copyFileSync(path.resolve(dir, file), path.resolve("./public/garden",
            ...path.basename(file).split('___')));
        resolve();
    });

    // For what is content, remove the - at the end
    fs.cpSync('./content/garden/guide-to-incrementals/what-is-content-.md',
        './content/garden/guide-to-incrementals/what-is-content.md');
    fs.rmSync('./content/garden/guide-to-incrementals/what-is-content-.md');

    // Save favorites to assets
    const favorites = (fs.readFileSync("./Garden/logseq/config.edn").toString()
        .matchAll(/:favorites \["([^\]]+)"\]/g).next()?.value as string)[1]?.split("\" \"")
        .map(page => ({ text: page, link: `/garden/${page.toLowerCase().replaceAll(' ', '-')}` }));
    const fd = fs.openSync("./assets/favorites.json", "w+");
    fs.writeSync(fd, JSON.stringify(favorites));
    fs.closeSync(fd);
})();
