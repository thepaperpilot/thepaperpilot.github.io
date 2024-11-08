---
index: "true"
public: "true"
slug: "my-projects"
title: "My Projects"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">My Projects</h1>
<p>72 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/guide-to-incrementals/what-is-content/index.md">Guide to Incrementals/What is Content?</a></details>

<details><summary>Tagged by:</summary><a href="/garden/advent-incremental/index.md">Advent Incremental</a><a href="/garden/babble-buds/index.md">Babble Buds</a><a href="/garden/capture-the-citadel/index.md">Capture the Citadel</a><a href="/garden/dice-armor/index.md">Dice Armor</a><a href="/garden/game-dev-tree/index.md">Game Dev Tree</a><a href="/garden/incremental-social/index.md">Incremental Social</a><a href="/garden/kronos/index.md">Kronos</a><a href="/garden/opti-speech/index.md">Opti-Speech</a><a href="/garden/orchard/index.md">Orchard</a><a href="/garden/planar-pioneers/index.md">Planar Pioneers</a><a href="/garden/profectus/index.md">Profectus</a><a href="/garden/v-ecs/index.md">V-ecs</a></details>

I like making games and tools!

<span id="665e3a7a-395f-4493-8f3a-482f136ea157"><h2>Games</h2></span>
- [Planar Pioneers](/garden/planar-pioneers/index.md) ([play](https://thepaperpilot.org/planar))
- [Advent Incremental](/garden/advent-incremental/index.md) ([play](https://thepaperpilot.org/advent))
- [Game Dev Tree](/garden/game-dev-tree/index.md) ([play](https://thepaperpilot.org/gamedevtree))
- [Dice Armor](/garden/dice-armor/index.md)
- [Capture the Citadel](/garden/capture-the-citadel/index.md)
- I have more you can find on [my Itch.io page](https://thepaperpilot.itch.io/)
	- ... And several more in development! Most aren't going to have their own pages on here, but a long-term project of mine called [Kronos](/garden/kronos/index.md) is the exception!

## Tools (and other non-games)
- [Profectus](/garden/profectus/index.md)
- [Incremental Social](/garden/incremental-social/index.md)
- [Babble Buds](/garden/babble-buds/index.md)
- [V-ecs](/garden/v-ecs/index.md)
- [Opti-Speech](/garden/opti-speech/index.md)