const fs = require('fs');
const { getAvatar, preparePost, encodeString, getActionDescription, getMediaUrl } = require("./utils");
require('dotenv').config();

const KEY = process.env.ITCH_API_KEY;

const ITCH_SVG = '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Itch.io</title><path d="M3.13 1.338C2.08 1.96.02 4.328 0 4.95v1.03c0 1.303 1.22 2.45 2.325 2.45 1.33 0 2.436-1.102 2.436-2.41 0 1.308 1.07 2.41 2.4 2.41 1.328 0 2.362-1.102 2.362-2.41 0 1.308 1.137 2.41 2.466 2.41h.024c1.33 0 2.466-1.102 2.466-2.41 0 1.308 1.034 2.41 2.363 2.41 1.33 0 2.4-1.102 2.4-2.41 0 1.308 1.106 2.41 2.435 2.41C22.78 8.43 24 7.282 24 5.98V4.95c-.02-.62-2.082-2.99-3.13-3.612-3.253-.114-5.508-.134-8.87-.133-3.362 0-7.945.053-8.87.133zm6.376 6.477a2.74 2.74 0 0 1-.468.602c-.5.49-1.19.795-1.947.795a2.786 2.786 0 0 1-1.95-.795c-.182-.178-.32-.37-.446-.59-.127.222-.303.412-.486.59a2.788 2.788 0 0 1-1.95.795c-.092 0-.187-.025-.264-.052-.107 1.113-.152 2.176-.168 2.95v.005l-.006 1.167c.02 2.334-.23 7.564 1.03 8.85 1.952.454 5.545.662 9.15.663 3.605 0 7.198-.21 9.15-.664 1.26-1.284 1.01-6.514 1.03-8.848l-.006-1.167v-.004c-.016-.775-.06-1.838-.168-2.95-.077.026-.172.052-.263.052a2.788 2.788 0 0 1-1.95-.795c-.184-.178-.36-.368-.486-.59-.127.22-.265.412-.447.59a2.786 2.786 0 0 1-1.95.794c-.76 0-1.446-.303-1.948-.793a2.74 2.74 0 0 1-.468-.602 2.738 2.738 0 0 1-.463.602 2.787 2.787 0 0 1-1.95.794h-.16a2.787 2.787 0 0 1-1.95-.793 2.738 2.738 0 0 1-.464-.602zm-2.004 2.59v.002c.795.002 1.5 0 2.373.953.687-.072 1.406-.108 2.125-.107.72 0 1.438.035 2.125.107.873-.953 1.578-.95 2.372-.953.376 0 1.876 0 2.92 2.934l1.123 4.028c.832 2.995-.266 3.068-1.636 3.07-2.03-.075-3.156-1.55-3.156-3.025-1.124.184-2.436.276-3.748.277-1.312 0-2.624-.093-3.748-.277 0 1.475-1.125 2.95-3.156 3.026-1.37-.004-2.468-.077-1.636-3.072l1.122-4.027c1.045-2.934 2.545-2.934 2.92-2.934zM12 12.714c-.002.002-2.14 1.964-2.523 2.662l1.4-.056v1.22c0 .056.56.033 1.123.007.562.026 1.124.05 1.124-.008v-1.22l1.4.055C14.138 14.677 12 12.713 12 12.713z"/></svg>';

const TAGS_MAP = {
    40801: "lifeisstrange",
    1826237: "incremental",
    969362: "incremental",
    938153: "incremental",
    2074815: "incremental",
    730177: "incremental",
    62179: "incremental",
    814897: "incremental",
    993566: "incremental"
};

(async () => {
    if (!fs.existsSync("./site/posts")) {
        fs.mkdirSync("./site/posts");
    }

    const url = `https://itch.io/api/1/${KEY}/my-games`;
    const resp = await fetch(url).then(r => r.text());
    let response;
    try {
        response = JSON.parse(resp);
    } catch (err) {
        console.error("Unexpected response from itch:", url, resp, err);
        process.exit(0);
    }
    if (!response.games?.length) {
        console.error("No games received from itch:", url, resp);
        process.exit(0);
    }

    console.log(`Checking ${response.games.length} games`);
    for await (const game of response.games) {
        if (!game.published) continue;
        const timestamp = new Date(game.published_at).getTime();
        const tag = TAGS_MAP[game.id] ?? "gaming";

        let embed = '';
        if (game.embed) {
            const uploadsResponse = await fetch(`https://itch.io/api/1/${KEY}/game/${game.id}/uploads`).then(r => r.text());
            embed = await getEmbed(game, uploadsResponse);
        }

        fs.mkdirSync("./site/posts/" + timestamp, { recursive: true });
        const fd = fs.openSync("./site/posts/" + timestamp + "/index.md", "w+");
        fs.writeSync(fd, preparePost(`---
kind: article
title: ${encodeString(game.title)}
published: ${timestamp}
next: false
prev: false
tags: [${encodeString(tag, 2)}]
---
<div class="post">
    ${getActionDescription({ timestamp, action: "🎮", verb: "released" })}
    <div class="content-container">
        ${await getAvatar({
            timestamp,
            tags: [tag],
            syndications: [{ type: ITCH_SVG, url: game.url }],
            action: '🎮'
        })}
        <div class="content e-content">
            <div class="img-container">
                <img src="${await getMediaUrl(game.cover_url)}" />
                <div class="description">
                    <h2>${game.title}</h2>
                    <div>${game.short_text}</div>
                </div>
            </div>
        </div>
    </div>
    ${embed}
</div>
`));
        fs.closeSync(fd);
        console.log(`Created post for "${game.title}": /posts/${timestamp}/index.md`);
    }
})();

async function getEmbed(game, resp) {
    // Skip games that don't fit on the paper
    // TODO hsve play button that full screens the game
    if ([993566, 40801, 184114, 162503, 129905, 87387, 79940, 62179, 60029, 50055].includes(game.id)) {
        return "";
    }
    let response;
    try {
        response = JSON.parse(resp);
    } catch (err) {
        console.error("Unexpected response from itch:", game.title, resp, err);
        return "";
    }
    if (!response.uploads?.length ?? 0 < 1) {
        console.error("No uploads received for game:", game.title, resp);
        return "";
    }
    const upload = response.uploads?.filter(up => up.type === "html")[0];
    if (!upload) {
        console.error("No html uploads received for game:", game.title, resp);
        return "";
    }

    const dist = upload.filename === "dist.zip" ? '/dist' : '';
    const src = `https://html-classic.itch.zone/html/${upload.id}${dist}/index.html`;
    const height = Math.ceil(game.embed.height / 30 + 1) * 30;
    const width = height * game.embed.width / game.embed.height;

    return `<iframe width="${width}" height="${height}" src="${src}" frameborder="0" scrolling="no" allowfullscreen></iframe>`;
}
