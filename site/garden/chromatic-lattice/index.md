---
public: "true"
slug: "chromatic-lattice"
title: "Chromatic Lattice"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Chromatic Lattice</h1>
<p>1495 words, ~8 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/digital-locality/index.md">Digital Locality</a><a href="/garden/incremental-automaton/index.md">Incremental Automaton</a><a href="/garden/incremental-social/index.md">Incremental Social</a><a href="/now/index">/now</a></details>

A multiplayer [Incremental Game](/garden/guide-to-incrementals/index.md) I have in development. It'll be about optimizing a board of tiles to create certain patterns to improve resource gains. Players will work collaboratively to construct monuments. It will also include an experiment on [Digital Locality](/garden/digital-locality/index.md).

## Gameplay

The game features a board, a hexgonal grid. Colored tiles can be placed on the board, and have different effects based on the patterns formed. These tiles are purchased with currencies representing different colors of light. Initially the player starts with a couple tiles of a single color, a grid with just 7 tiles (a center cell and an adjacent cell for each edge) and simple patterns to create a different color than the one they started. Their initial patterns will allow them to make each of the three colors in a circle (e.g. two red tiles creating blue, two blue tiles creating green, and two green tiles creating red).

Next to the outer cells are more cells, with requirements to unlock them. These can be requirements that range from reaching a certain amount of a single currency, multiple currencies, having a tile with a certain amount of power, or reaching a number of simultaneous patterns met. Each unlocked cell gives more room for tiles as well as unlocking new patterns that can be matched. These new patterns will offer new benefits, like improving the effectiveness of a tile (its "power") or contributing to resource multipliers. The unlocked tile may also have an effect, such as giving extra power. There'll likely also be a "dead" cell or two, somewhere in the grid. This is just one that doesn't have an achievement and can never be placed on.

There will be a development focus on quality of life features for creating the grid. An easy way to visualize the active patterns, the ability to save and load designs, etc.

In addition to buying tiles, there will be a repeatable upgrade to increase a global power multiplier. It will increase the multiplier by 1.1x (compounding), but its cost will rotate between each of the three primary colors and increase at a rate of 1.5x (compounding).

The final grid will have a "radius" of 9 (so each side is 5 long), totalling 63 cells. That's 56 achievements and patterns. Some of these achievements will be unavoidable, by having the requirements be things like "unlock 10 tiles", but will unlock patterns with negative effects. These are intended to increase the complexity of boards by urging the player to avoid certain patterns. For instance, an early one will be designed to specifically make packing the three simple patterns as tightly as possible less effective.

### Monuments

Upon starting the game, players are randomly assigned a faction (red, green, or blue) which will collectively contribute resources to a monument. This monument's colors will be determined by the distribution of resources across the three factions. The resources will be slowly produced by late-game patterns by individuals. As monuments are completed, new ones will be unlocked, and they'll all be viewable in a hall of fame page that'll include details on total contributions by faction and top contributors.

Completing a monument will reset boards for players, and each board will have slight alterations to the positioning of achievements, tile effects, and the which pattern does which effect. This should serve to help keep the gameplay from getting stale and hopefully help mitigate people writing optimal guides that trivialize the gameplay. Each cell will also display the first player to unlock it that reset.

Mew players may not like having their progress reset, and in general we don't want monuments to be causing resets too often and upsetting users. To that end, I think they should cost twice as much resources as the previous, or perhaps make it factorial growth if I'm concerned about virality. In either case, the hope is that this won't take too many resources to keep going, and as I'll get into, eventually I hope to see it all "start over" with a new season. Unlocking tiles will also contribute to a per-player leveling system. This means the initial achievements, being easier, are easy exp. This means new players joining even close to the end of a monument will still benefit from playing even if they likely won't contribute monument resources.

### Seasons

I have a lot on my plate, but eventually I'd want to come back to chromatic lattice and create a new season, perhaps several so long as people are interested. New seasons could bring new mechanics, new possible boards, new achievements, etc.

One such new mechanic could involve replacing the monuments with a splatoon like mechanic where players are spending resources to move around and paint areas of a map.

## Social Features

The main screen the player will interact with is the "board" page, either their own or someone else's. It acts as a bit of a profile page, and include information about the player like a profile picture, bio, and friends list. It'll also include both a local and global chat. The local chat is only on that specific Board, and can include messages from anyone visiting that Board. People visiting will also have their cursors appear to the other visitors as a from of [ambient co-presence](https://maggieappleton.com/ambient-copresence).

If possible, I'd like to structure the chat like chat glue.

While visiting another board, you'll still have a panel displaying your own board and resources. The goal is to set it up so you're encouraged to spend time on other people's boards and creating informal hang outs.

Each player will have control over their board, and can disable chat, clear its history, and configure the opacity of visitor cursors.

### Digital Locality

The friend lists effectively work as the links between nodes, creating locality. Everyone has a link to their own board accessible at all times, and from there to their friends. You'd also be able to see a list of "adjacent" rooms with an active conversation, as well as what rooms your friends are in, with the ability to join them. Initial friends will likely be made from global chat, or by follows on [Incremental Social](/garden/incremental-social/index.md), or linking your board via external sources.

## Tech Stack

I haven't determined the stack entirely yet, other than that I want both the server and client code to use typescript due to my familiarity with it and because of how accessible web apps are. My goals are to have assurance that players are obeying the rules of the game, have an eventually consistent state of the game, reasonable protection against bot accounts, and realtime display of cursors to other players. I'd rather make this properly decentralized, but that isn't strictly required.

Oh, and to be clear, the frontend will definitely just be a website, using [Profectus](/garden/profectus/index.md).

### Elysia

The traditional approach. Use [Elysia](https://elysiajs.com/) or similar library to run a server that the clients connect to using websockets. The logic and state would be stored on the server, and passed along to the clients.

This is a very centralized approach, and is the most common approach for multiplayer games. While I'd really like to support the agentic fediverse and local-first software, I currently think this is the most practical approach.

### Leaf

This would make the game run on the agentic fediverse. Initially the private keys would likely be managed by incremental social, which would also be the default iroh node clients would connect to.

My concern with this approach is that it would be difficult to operate in a way that doesn't centralize the power. Being a multiplayer game it's important to ensure people can't just fabricate a history of actions with fake timestamps.

I'm also concerned about it's efficiency in regards to creating and maintaining entities to store each player's current mouse position.

Additionally, loading times for both your own board and other peoples' would likely be slow. You can't trust other players to give an accurate game state object,so you'd have to simulate their board based off their list of timestamped actions. This is slow, and doesn't allow for non-deterministic mechanics (e.g. RNG loot). This would be especially concerning if clients are supposed to include some piece of the game state next to players' names or in a mini profile display.

### Rivet

[Rivet](https://rivet.gg/) is a library for realtime applications (originally games). This would be similar to the traditional approach, but with a larger library that handles more of the work for us, enabling more advanced features like horizontal scaling and concurrency. It also has support for local-first sync, which could be useful in the future if we find a way for the game to work without needing a consistent connection for ensuring people are playing properly.

There's other similar libraries, like [Jazz](https://jazz.tools/). In fact, Jazz will eventually have things like the cursors I want as an out-of-box feature. But unfortunately, it seems to be quite early in development and it along with many other features won't be ready for awhile.
