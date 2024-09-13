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

<details><summary>Referenced by:</summary><a href="/garden/guide-to-incrementals/what-is-content">Guide to Incrementals/What is Content?</a></details>

<details><summary>Tagged by:</summary><a href="/garden/advent-incremental">Advent Incremental</a><a href="/garden/babble-buds">Babble Buds</a><a href="/garden/capture-the-citadel">Capture the Citadel</a><a href="/garden/dice-armor">Dice Armor</a><a href="/garden/game-dev-tree">Game Dev Tree</a><a href="/garden/incremental-social">Incremental Social</a><a href="/garden/kronos">Kronos</a><a href="/garden/opti-speech">Opti-Speech</a><a href="/garden/planar-pioneers">Planar Pioneers</a><a href="/garden/profectus">Profectus</a><a href="/garden/v-ecs">V-ecs</a></details>

I like making games and tools!

<span id="665e3a7a-395f-4493-8f3a-482f136ea157"><h2>Games</h2></span>
- [Planar Pioneers](/garden/planar-pioneers) ([play](https://thepaperpilot.org/planar))
- [Advent Incremental](/garden/advent-incremental) ([play](https://thepaperpilot.org/advent))
- [Game Dev Tree](/garden/game-dev-tree) ([play](https://thepaperpilot.org/gamedevtree))
- [Dice Armor](/garden/dice-armor)
- [Capture the Citadel](/garden/capture-the-citadel)
- I have more you can find on [my Itch.io page](https://thepaperpilot.itch.io/)
	- ... And several more in development! Most aren't going to have their own pages on here, but a long-term project of mine called [Kronos](/garden/kronos) is the exception!

## Tools (and other non-games)
- [Profectus](/garden/profectus)
- [Incremental Social](/garden/incremental-social)
- [Babble Buds](/garden/babble-buds)
- [V-ecs](/garden/v-ecs)
- [Opti-Speech](/garden/opti-speech)