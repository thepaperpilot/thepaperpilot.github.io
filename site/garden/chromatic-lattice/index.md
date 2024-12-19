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
<p>205 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/digital-locality/index.md">Digital Locality</a><a href="/garden/fedi-v2/index.md">Fedi v2</a><a href="/garden/incremental-social/index.md">Incremental Social</a><a href="/now/index">/now</a><a href="/garden/orchard/index.md">Orchard</a></details>

A multiplayer game I have in development. It'll be about optimizing a board of tiles to create certain patterns to improve resource gains. Players will work collaboratively to construct monuments. It will be built on the [Agentic Fediverse](/garden/fedi-v2/index.md) and experiment with [Digital Locality](/garden/digital-locality/index.md).

A person's board will act as their profile page, and will include a local chat room (in addition to the global one), a description, a list of people currently on the page, and a friends list that can be broken down into categories. Your cursor also appears on the board for all other users, although those can be toggled off in settings.

The friend lists effectively work as the links between nodes, creating locality. Everyone has a link to their own board accessible at all times, and from there to their friends. You'd also be able to see a list of "adjacent" rooms with an active conversation, as well as what rooms your friends are in, with the ability to join them.

In addition to friends, you can jump to a players board or to wherever the player is by right clicking their name in global chat. You can also share links to your board off platform as well.
