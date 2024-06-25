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

> Tagged by: [Advent Incremental](/garden/advent-incremental/index.md), [Babble Buds](/garden/babble-buds/index.md), [Capture the Citadel](/garden/capture-the-citadel/index.md), [Dice Armor](/garden/dice-armor/index.md), [Game Dev Tree](/garden/game-dev-tree/index.md), [Incremental Social](/garden/incremental-social/index.md), [Kronos](/garden/kronos/index.md), [Opti-Speech](/garden/opti-speech/index.md), [Planar Pioneers](/garden/planar-pioneers/index.md), [Profectus](/garden/profectus/index.md), [V-ecs](/garden/v-ecs/index.md)

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