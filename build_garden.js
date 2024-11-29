const fs = require("fs");
const path = require("path");
const wordCounting = require("word-counting");

const util = require('node:util');
const exec = util.promisify(require('node:child_process').exec);
const { Feed } = require('feed');

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
    return string.toLowerCase().replaceAll(' ', '-').replaceAll(/-$|^-/gi, '').replaceAll(/-\/|\/-/gi, '/');
}

function moveImportStatementUp(filePath, times = 1) {
    let data = fs.readFileSync(filePath).toString();
    const fd = fs.openSync(filePath, "w+");
    for (let i = 0; i < times; i++) {
        data = data.replace(/'\.\.\//g, '\'');
    }
    fs.writeSync(fd, data);
    fs.closeSync(fd);
}

(async () => {
    // Clear out old folders
    await exec("rm -rf ./site/guide-to-incrementals");
    await exec("rm -rf ./site/public/garden");
    await exec("rm -rf ./site/public/changelog");
    await exec("rm -rf ./site/changelog");
    await exec("rm -rf ./site/now");
    await exec("rm -rf ./site/garden");

    const blockRefs = {};
    const blockLinks = {};
    const indices = [];
    await walk("./garden-output/logseq-pages", (dir, file, resolve) => {
        const filePath = path.resolve(dir, file);
        const data = fs.readFileSync(filePath).toString();
        const slug = path.basename(file, ".md").replaceAll('___', '/').replaceAll(/%3F|%22/gi, '').replaceAll(/-$|^-/gi, '').replaceAll(/-\/|\/-/gi, '/');
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
        const slug = toSlug(name.replaceAll(/%3F|%22/gi, '').replaceAll('\'', '-'));
        const link = `/garden/${slug}/index.md`;
        pageLinks[name.replaceAll(/%3F/gi, '?').replaceAll(/%22/gi, '"')] = link;

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
        const slug = toSlug(name).replaceAll(/%3F|%22/gi, '').replaceAll('\'', '-');

        if (!indices.includes(slug)) {
            for (const match of data.matchAll(/\[\[([^\[\]]*)\]\]/g)) {
                const pageSlug = pageLinks[match[1].replaceAll(/%3F/gi, '?').replaceAll(/%22/gi, '"')];
                referencedBy[pageSlug] = [...(referencedBy[pageSlug] ?? []), name.replaceAll(/%3F/gi, '?').replaceAll(/%22/gi, '"')];
            }
        }

        resolve();
    });
    Object.keys(referencedBy).forEach(page => {
        referencedBy[page] = Array.from(new Set(referencedBy[page]));
    });
    pageLinks["NOW"] = "/now/index";

    await walk("./garden-output/logseq-pages", async (dir, file, resolve) => {
        const filePath = path.resolve(dir, file);
        let data = fs.readFileSync(filePath).toString();

        // Count word counts with a special set of transformations that should make it more accurate
        const strippedData = data.replace(/---\n[\S\s]*\n---/gm, '').replaceAll(/.*::.*/g, '').replaceAll(/\[([^\]]*)\]\(.*\)/g, '$1');
        const wc = wordCounting(strippedData).wordsCount;

		// Replace youtube embeds
        data = data.replaceAll(
        	/{{video https:\/\/(?:www\.)?youtube\.com\/watch\?v=(.*)}}/g,
        	'<iframe width="560" height="315" src="https://www.youtube.com/embed/$1" title="" frameBorder="0" allowFullScreen />');
        // Replace internal links
        data = data.replaceAll(
        	/]\(\/logseq-pages\/([^\)]*)\)/g,
        	(_, page) => `](/garden/${page.replaceAll(/-$|^-/gi, '')}/index.md)`);
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
            (_, page) => console.log("!!?", filePath, page, pageLinks[page]) || `[${page}](${pageLinks[page]})`);
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
            (_, title, src) => `<div class="img-container"><img src="${src}" title="${title}"/></div>`)
		// Add tags and references
        const title = path.basename(file, ".md");
        if (title in tagged) {
            data = data.replaceAll(
                /---\n\n/gm,
                `---\n\n<details><summary>Tags:</summary>${tagged[title].map(tag => `<a href="${pageLinks[tag].replace(".html", "")}">${tag}</a>`).join("")}</details>\n\n`);
        }
        if (title in taggedBy) {
            data = data.replaceAll(
                /---\n\n/gm,
                `---\n\n<details><summary>Tagged by:</summary>${taggedBy[title].map(tag => `<a href="${pageLinks[tag].replace(".html", "")}">${tag}</a>`).join("")}</details>\n\n`);
        }
        // TODO show context on references? Perhaps in a `::: info` block?
        const pageTitle = data.match(/title: "(.+)"/)[1];
        if (pageLinks[pageTitle] in referencedBy) {
            data = data.replaceAll(
                /---\n\n/gm,
                `---\n\n<details><summary>Referenced by:</summary>${referencedBy[pageLinks[pageTitle]].map(tag => `<a href="${pageLinks[tag].replace(".html", "")}">${tag}</a>`).join("")}</details>\n\n`);
        }
        // Fix links to /now
        data = data.replace('NOW', '/now')
        // Add header to the top
        data = data.replaceAll('___', '/');
        const relPath = path.relative("./garden-output/logseq-pages", path.resolve(...filePath.split("___"))).replaceAll(/%3F|%22/gi, '').replaceAll(/-$|^-/gi, '').replaceAll(/-\/|\/-/gi, '/').replace('.md', '/index.html');
        data = data.replaceAll(
            /---\n\n/gm,
`prev: false
next: false
---
<script setup>
import { data } from '${path.relative(path.resolve("site", relPath), path.resolve("site", "git.data.ts")).replaceAll('\\', '/')}';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">${pageTitle.replace("NOW", "/now").replaceAll('___', '/')}</h1>
<p>${wc} words, ~${Math.round(wc / 183)} minute read. <span v-html="data[\`site/\${pageData.page.value.relativePath}\`]" /></p>
<hr/>
\n`);

        const fd = fs.openSync(filePath, "w+");
        fs.writeSync(fd, data);
        fs.closeSync(fd);
        resolve();
    });

    fs.mkdirSync("./site/public/garden", { recursive: true });

	// Move everything from ./garden-output/logseq-pages into ./site/garden
    await walk("./garden-output/logseq-pages", (dir, file, resolve) => {
    	const folder = path.resolve("./site/garden", ...path.basename(file, ".md").split('___').map(f => f.replaceAll(/-$|^-/gi, '')));
    	fs.mkdirSync(folder, { recursive: true });
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
    moveImportStatementUp('./site/guide-to-incrementals/index.md');
    fs.mkdirSync('./site/guide-to-incrementals/design');
    fs.mkdirSync('./site/guide-to-incrementals/design/criticism');
    fs.copyFileSync('./site/garden/guide-to-incrementals/navigating-criticism/index.md', './site/guide-to-incrementals/design/criticism/index.md');
    fs.mkdirSync('./site/guide-to-incrementals/ludology');
    fs.mkdirSync('./site/guide-to-incrementals/ludology/appeal-developers');
    fs.copyFileSync('./site/garden/guide-to-incrementals/appeal-to-developers/index.md', './site/guide-to-incrementals/ludology/appeal-developers/index.md');
    fs.mkdirSync('./site/guide-to-incrementals/ludology/appeal-gamers');
    fs.copyFileSync('./site/garden/guide-to-incrementals/appeal-to-players/index.md', './site/guide-to-incrementals/ludology/appeal-gamers/index.md');
    fs.mkdirSync('./site/guide-to-incrementals/ludology/content');
    fs.copyFileSync('./site/garden/guide-to-incrementals/what-is-content/index.md', './site/guide-to-incrementals/ludology/content/index.md');
    fs.mkdirSync('./site/guide-to-incrementals/ludology/definition');
    fs.copyFileSync('./site/garden/guide-to-incrementals/defining-the-genre/index.md', './site/guide-to-incrementals/ludology/definition/index.md');

    fs.mkdirSync('./site/now');
    fs.renameSync('./site/garden/now/index.md', './site/now/index.md');
    moveImportStatementUp('./site/now/index.md');

    // Build changelog
    fs.mkdirSync("./site/changelog");

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
            atom: "https://www.thepaperpilot.org/changelog/atom"
        },
        author: {
            name: "The Paper Pilot",
            email: "thepaperpilot@incremental.social",
            link: "https://www.thepaperpilot.org/"
        }
    });

    const { stdout } = await exec('git log --after="2024-06-03T0:0:0+0000" --pretty=%H origin/master -- site/garden');
    const entries = await Promise.all(stdout.split("\n").filter(p => p).map(hash => new Promise(async (resolve) => {
        const { stdout: time } = await exec(`git show --quiet --format=%as ${hash}`);
        const { stdout: fullTime } = await exec(`git show --quiet --format=%ad ${hash}`);
        let { stdout: changes } = await exec(`git show --format="" --stat --relative ${hash} .`, { cwd: 'site/garden' });

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

        resolve(
`<article class="h-entry">
<h2 class="p-name">${summary}</h2>
<div class="e-content">
<a class="u-url" href="${commitLink}">Pushed on <time class="dt-published" datetime="${fullTime}">${time}</time></a>
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
</div>
</article>`);
    })));

    let fd = fs.openSync("site/changelog/index.md", "w+");
    fs.writeSync(fd,
`---
title: Garden Changelog
prev: false
next: false
---
<section class="h-feed">
<h1 class="p-name">Garden Changelog</h1>
<p>This feed starts when I formatted the site to be a <a href="/garden/digital-gardens/">Digital Garden</a>. If you'd like to look further into this site's history, check <a href="https://code.incremental.social/thepaperpilot/pages/commits/branch/master">here</a>!</p>

${entries.join("\n\n")}
</section>
`);
    fs.closeSync(fd);

    fs.mkdirSync("site/public/changelog");

    fd = fs.openSync("site/public/changelog/rss", "w+");
    fs.writeSync(fd, feed.rss2());
    fs.closeSync(fd);

    fd = fs.openSync("site/public/changelog/atom", "w+");
    fs.writeSync(fd, feed.atom1());
    fs.closeSync(fd);

    fd = fs.openSync("site/public/changelog/json", "w+");
    fs.writeSync(fd, feed.json1());
    fs.closeSync(fd);

    // Update commit info in footer
    const commitLink = (await exec(`git log -n 1 --format="https://code.incremental.social/thepaperpilot/pages/commit/%H"`)).stdout.replaceAll(/\n$/g, '');
    const commitTime = (await exec(`git log -n 1 --date=format:"%A, %B %d, %Y at %X" --format=%ad`)).stdout.replaceAll(/\n$/g, '');

    fd = fs.openSync("site/.vitepress/theme/Layout.vue", "w+");
    let layoutData = fs.readFileSync("site/.vitepress/theme/Layout.vue.in").toString();
    layoutData = layoutData.replace(/COMMIT_LINK/g, commitLink);
    layoutData = layoutData.replace(/COMMIT_TIME/g, commitTime);
    fs.writeSync(fd, layoutData);
    fs.closeSync(fd);

    // Write licenses to /licenses
    fd = fs.openSync("site/public/licenses.txt", "w+");
    const licenses = (await exec(`yarn licenses generate-disclaimer --frozen-lockfile`)).stdout;
    fs.writeSync(fd,
`# Licenses

${licenses}

-----

The following software may be included in this product: webgl-noise. A copy of the source code may be downloaded from git+https://github.com/ashima/webgl-noise.git The software contains the following license and notice below:

Copyright (C) 2011 by Ashima Arts (Simplex noise)
Copyright (C) 2011-2016 by Stefan Gustavson (Classic noise and others)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

-----

The following software may be included in this product: Hero Patterns by Steve Schoger. A copy of the software may be downloaded from https://heropatterns.com. The software contains the following license and notice below:

Attribution 4.0 International

=======================================================================

Creative Commons Corporation ("Creative Commons") is not a law firm and
does not provide legal services or legal advice. Distribution of
Creative Commons public licenses does not create a lawyer-client or
other relationship. Creative Commons makes its licenses and related
information available on an "as-is" basis. Creative Commons gives no
warranties regarding its licenses, any material licensed under their
terms and conditions, or any related information. Creative Commons
disclaims all liability for damages resulting from their use to the
fullest extent possible.

Using Creative Commons Public Licenses

Creative Commons public licenses provide a standard set of terms and
conditions that creators and other rights holders may use to share
original works of authorship and other material subject to copyright
and certain other rights specified in the public license below. The
following considerations are for informational purposes only, are not
exhaustive, and do not form part of our licenses.

     Considerations for licensors: Our public licenses are
     intended for use by those authorized to give the public
     permission to use material in ways otherwise restricted by
     copyright and certain other rights. Our licenses are
     irrevocable. Licensors should read and understand the terms
     and conditions of the license they choose before applying it.
     Licensors should also secure all rights necessary before
     applying our licenses so that the public can reuse the
     material as expected. Licensors should clearly mark any
     material not subject to the license. This includes other CC-
     licensed material, or material used under an exception or
     limitation to copyright. More considerations for licensors:
    wiki.creativecommons.org/Considerations_for_licensors

     Considerations for the public: By using one of our public
     licenses, a licensor grants the public permission to use the
     licensed material under specified terms and conditions. If
     the licensor's permission is not necessary for any reason--for
     example, because of any applicable exception or limitation to
     copyright--then that use is not regulated by the license. Our
     licenses grant only permissions under copyright and certain
     other rights that a licensor has authority to grant. Use of
     the licensed material may still be restricted for other
     reasons, including because others have copyright or other
     rights in the material. A licensor may make special requests,
     such as asking that all changes be marked or described.
     Although not required by our licenses, you are encouraged to
     respect those requests where reasonable. More considerations
     for the public:
    wiki.creativecommons.org/Considerations_for_licensees

=======================================================================

Creative Commons Attribution 4.0 International Public License

By exercising the Licensed Rights (defined below), You accept and agree
to be bound by the terms and conditions of this Creative Commons
Attribution 4.0 International Public License ("Public License"). To the
extent this Public License may be interpreted as a contract, You are
granted the Licensed Rights in consideration of Your acceptance of
these terms and conditions, and the Licensor grants You such rights in
consideration of benefits the Licensor receives from making the
Licensed Material available under these terms and conditions.


Section 1 -- Definitions.

  a. Adapted Material means material subject to Copyright and Similar
     Rights that is derived from or based upon the Licensed Material
     and in which the Licensed Material is translated, altered,
     arranged, transformed, or otherwise modified in a manner requiring
     permission under the Copyright and Similar Rights held by the
     Licensor. For purposes of this Public License, where the Licensed
     Material is a musical work, performance, or sound recording,
     Adapted Material is always produced where the Licensed Material is
     synched in timed relation with a moving image.

  b. Adapter's License means the license You apply to Your Copyright
     and Similar Rights in Your contributions to Adapted Material in
     accordance with the terms and conditions of this Public License.

  c. Copyright and Similar Rights means copyright and/or similar rights
     closely related to copyright including, without limitation,
     performance, broadcast, sound recording, and Sui Generis Database
     Rights, without regard to how the rights are labeled or
     categorized. For purposes of this Public License, the rights
     specified in Section 2(b)(1)-(2) are not Copyright and Similar
     Rights.

  d. Effective Technological Measures means those measures that, in the
     absence of proper authority, may not be circumvented under laws
     fulfilling obligations under Article 11 of the WIPO Copyright
     Treaty adopted on December 20, 1996, and/or similar international
     agreements.

  e. Exceptions and Limitations means fair use, fair dealing, and/or
     any other exception or limitation to Copyright and Similar Rights
     that applies to Your use of the Licensed Material.

  f. Licensed Material means the artistic or literary work, database,
     or other material to which the Licensor applied this Public
     License.

  g. Licensed Rights means the rights granted to You subject to the
     terms and conditions of this Public License, which are limited to
     all Copyright and Similar Rights that apply to Your use of the
     Licensed Material and that the Licensor has authority to license.

  h. Licensor means the individual(s) or entity(ies) granting rights
     under this Public License.

  i. Share means to provide material to the public by any means or
     process that requires permission under the Licensed Rights, such
     as reproduction, public display, public performance, distribution,
     dissemination, communication, or importation, and to make material
     available to the public including in ways that members of the
     public may access the material from a place and at a time
     individually chosen by them.

  j. Sui Generis Database Rights means rights other than copyright
     resulting from Directive 96/9/EC of the European Parliament and of
     the Council of 11 March 1996 on the legal protection of databases,
     as amended and/or succeeded, as well as other essentially
     equivalent rights anywhere in the world.

  k. You means the individual or entity exercising the Licensed Rights
     under this Public License. Your has a corresponding meaning.


Section 2 -- Scope.

  a. License grant.

       1. Subject to the terms and conditions of this Public License,
          the Licensor hereby grants You a worldwide, royalty-free,
          non-sublicensable, non-exclusive, irrevocable license to
          exercise the Licensed Rights in the Licensed Material to:

            a. reproduce and Share the Licensed Material, in whole or
               in part; and

            b. produce, reproduce, and Share Adapted Material.

       2. Exceptions and Limitations. For the avoidance of doubt, where
          Exceptions and Limitations apply to Your use, this Public
          License does not apply, and You do not need to comply with
          its terms and conditions.

       3. Term. The term of this Public License is specified in Section
          6(a).

       4. Media and formats; technical modifications allowed. The
          Licensor authorizes You to exercise the Licensed Rights in
          all media and formats whether now known or hereafter created,
          and to make technical modifications necessary to do so. The
          Licensor waives and/or agrees not to assert any right or
          authority to forbid You from making technical modifications
          necessary to exercise the Licensed Rights, including
          technical modifications necessary to circumvent Effective
          Technological Measures. For purposes of this Public License,
          simply making modifications authorized by this Section 2(a)
          (4) never produces Adapted Material.

       5. Downstream recipients.

            a. Offer from the Licensor -- Licensed Material. Every
               recipient of the Licensed Material automatically
               receives an offer from the Licensor to exercise the
               Licensed Rights under the terms and conditions of this
               Public License.

            b. No downstream restrictions. You may not offer or impose
               any additional or different terms or conditions on, or
               apply any Effective Technological Measures to, the
               Licensed Material if doing so restricts exercise of the
               Licensed Rights by any recipient of the Licensed
               Material.

       6. No endorsement. Nothing in this Public License constitutes or
          may be construed as permission to assert or imply that You
          are, or that Your use of the Licensed Material is, connected
          with, or sponsored, endorsed, or granted official status by,
          the Licensor or others designated to receive attribution as
          provided in Section 3(a)(1)(A)(i).

  b. Other rights.

       1. Moral rights, such as the right of integrity, are not
          licensed under this Public License, nor are publicity,
          privacy, and/or other similar personality rights; however, to
          the extent possible, the Licensor waives and/or agrees not to
          assert any such rights held by the Licensor to the limited
          extent necessary to allow You to exercise the Licensed
          Rights, but not otherwise.

       2. Patent and trademark rights are not licensed under this
          Public License.

       3. To the extent possible, the Licensor waives any right to
          collect royalties from You for the exercise of the Licensed
          Rights, whether directly or through a collecting society
          under any voluntary or waivable statutory or compulsory
          licensing scheme. In all other cases the Licensor expressly
          reserves any right to collect such royalties.


Section 3 -- License Conditions.

Your exercise of the Licensed Rights is expressly made subject to the
following conditions.

  a. Attribution.

       1. If You Share the Licensed Material (including in modified
          form), You must:

            a. retain the following if it is supplied by the Licensor
               with the Licensed Material:

                 i. identification of the creator(s) of the Licensed
                    Material and any others designated to receive
                    attribution, in any reasonable manner requested by
                    the Licensor (including by pseudonym if
                    designated);

                ii. a copyright notice;

               iii. a notice that refers to this Public License;

                iv. a notice that refers to the disclaimer of
                    warranties;

                 v. a URI or hyperlink to the Licensed Material to the
                    extent reasonably practicable;

            b. indicate if You modified the Licensed Material and
               retain an indication of any previous modifications; and

            c. indicate the Licensed Material is licensed under this
               Public License, and include the text of, or the URI or
               hyperlink to, this Public License.

       2. You may satisfy the conditions in Section 3(a)(1) in any
          reasonable manner based on the medium, means, and context in
          which You Share the Licensed Material. For example, it may be
          reasonable to satisfy the conditions by providing a URI or
          hyperlink to a resource that includes the required
          information.

       3. If requested by the Licensor, You must remove any of the
          information required by Section 3(a)(1)(A) to the extent
          reasonably practicable.

       4. If You Share Adapted Material You produce, the Adapter's
          License You apply must not prevent recipients of the Adapted
          Material from complying with this Public License.


Section 4 -- Sui Generis Database Rights.

Where the Licensed Rights include Sui Generis Database Rights that
apply to Your use of the Licensed Material:

  a. for the avoidance of doubt, Section 2(a)(1) grants You the right
     to extract, reuse, reproduce, and Share all or a substantial
     portion of the contents of the database;

  b. if You include all or a substantial portion of the database
     contents in a database in which You have Sui Generis Database
     Rights, then the database in which You have Sui Generis Database
     Rights (but not its individual contents) is Adapted Material; and

  c. You must comply with the conditions in Section 3(a) if You Share
     all or a substantial portion of the contents of the database.

For the avoidance of doubt, this Section 4 supplements and does not
replace Your obligations under this Public License where the Licensed
Rights include other Copyright and Similar Rights.


Section 5 -- Disclaimer of Warranties and Limitation of Liability.

  a. UNLESS OTHERWISE SEPARATELY UNDERTAKEN BY THE LICENSOR, TO THE
     EXTENT POSSIBLE, THE LICENSOR OFFERS THE LICENSED MATERIAL AS-IS
     AND AS-AVAILABLE, AND MAKES NO REPRESENTATIONS OR WARRANTIES OF
     ANY KIND CONCERNING THE LICENSED MATERIAL, WHETHER EXPRESS,
     IMPLIED, STATUTORY, OR OTHER. THIS INCLUDES, WITHOUT LIMITATION,
     WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR
     PURPOSE, NON-INFRINGEMENT, ABSENCE OF LATENT OR OTHER DEFECTS,
     ACCURACY, OR THE PRESENCE OR ABSENCE OF ERRORS, WHETHER OR NOT
     KNOWN OR DISCOVERABLE. WHERE DISCLAIMERS OF WARRANTIES ARE NOT
     ALLOWED IN FULL OR IN PART, THIS DISCLAIMER MAY NOT APPLY TO YOU.

  b. TO THE EXTENT POSSIBLE, IN NO EVENT WILL THE LICENSOR BE LIABLE
     TO YOU ON ANY LEGAL THEORY (INCLUDING, WITHOUT LIMITATION,
     NEGLIGENCE) OR OTHERWISE FOR ANY DIRECT, SPECIAL, INDIRECT,
     INCIDENTAL, CONSEQUENTIAL, PUNITIVE, EXEMPLARY, OR OTHER LOSSES,
     COSTS, EXPENSES, OR DAMAGES ARISING OUT OF THIS PUBLIC LICENSE OR
     USE OF THE LICENSED MATERIAL, EVEN IF THE LICENSOR HAS BEEN
     ADVISED OF THE POSSIBILITY OF SUCH LOSSES, COSTS, EXPENSES, OR
     DAMAGES. WHERE A LIMITATION OF LIABILITY IS NOT ALLOWED IN FULL OR
     IN PART, THIS LIMITATION MAY NOT APPLY TO YOU.

  c. The disclaimer of warranties and limitation of liability provided
     above shall be interpreted in a manner that, to the extent
     possible, most closely approximates an absolute disclaimer and
     waiver of all liability.


Section 6 -- Term and Termination.

  a. This Public License applies for the term of the Copyright and
     Similar Rights licensed here. However, if You fail to comply with
     this Public License, then Your rights under this Public License
     terminate automatically.

  b. Where Your right to use the Licensed Material has terminated under
     Section 6(a), it reinstates:

       1. automatically as of the date the violation is cured, provided
          it is cured within 30 days of Your discovery of the
          violation; or

       2. upon express reinstatement by the Licensor.

     For the avoidance of doubt, this Section 6(b) does not affect any
     right the Licensor may have to seek remedies for Your violations
     of this Public License.

  c. For the avoidance of doubt, the Licensor may also offer the
     Licensed Material under separate terms or conditions or stop
     distributing the Licensed Material at any time; however, doing so
     will not terminate this Public License.

  d. Sections 1, 5, 6, 7, and 8 survive termination of this Public
     License.


Section 7 -- Other Terms and Conditions.

  a. The Licensor shall not be bound by any additional or different
     terms or conditions communicated by You unless expressly agreed.

  b. Any arrangements, understandings, or agreements regarding the
     Licensed Material not stated herein are separate from and
     independent of the terms and conditions of this Public License.


Section 8 -- Interpretation.

  a. For the avoidance of doubt, this Public License does not, and
     shall not be interpreted to, reduce, limit, restrict, or impose
     conditions on any use of the Licensed Material that could lawfully
     be made without permission under this Public License.

  b. To the extent possible, if any provision of this Public License is
     deemed unenforceable, it shall be automatically reformed to the
     minimum extent necessary to make it enforceable. If the provision
     cannot be reformed, it shall be severed from this Public License
     without affecting the enforceability of the remaining terms and
     conditions.

  c. No term or condition of this Public License will be waived and no
     failure to comply consented to unless expressly agreed to by the
     Licensor.

  d. Nothing in this Public License constitutes or may be interpreted
     as a limitation upon, or waiver of, any privileges and immunities
     that apply to the Licensor or You, including from the legal
     processes of any jurisdiction or authority.


=======================================================================

Creative Commons is not a party to its public
licenses. Notwithstanding, Creative Commons may elect to apply one of
its public licenses to material it publishes and in those instances
will be considered the “Licensor.” The text of the Creative Commons
public licenses is dedicated to the public domain under the CC0 Public
Domain Dedication. Except for the limited purpose of indicating that
material is shared under a Creative Commons public license or as
otherwise permitted by the Creative Commons policies published at
creativecommons.org/policies, Creative Commons does not authorize the
use of the trademark "Creative Commons" or any other trademark or logo
of Creative Commons without its prior written consent including,
without limitation, in connection with any unauthorized modifications
to any of its public licenses or any other arrangements,
understandings, or agreements concerning use of licensed material. For
the avoidance of doubt, this paragraph does not form part of the
public licenses.

Creative Commons may be contacted at creativecommons.org.`);
    fs.closeSync(fd);
})();
