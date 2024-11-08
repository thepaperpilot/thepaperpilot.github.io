---
public: "true"
slug: "game-dev-tree"
tags: [My Projects]
title: "Game Dev Tree"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Game Dev Tree</h1>
<p>34 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Tags:</summary><a href="/garden/my-projects/index.md">My Projects</a></details>

Play it [here](https://thepaperpilot.org/gamedevtree)!

My first (good) incremental game! (My actual first was [Shape Tycoon](https://thepaperpilot.itch.io/shape-tycoon) - I don't recommend it!)

It's [Open Source](/garden/open-source/index.md)!

The [TV Tropes](https://tvtropes.org/pmwiki/pmwiki.php/VideoGame/TheGameDevTree) page on this game mentions some of the cool things about this game
