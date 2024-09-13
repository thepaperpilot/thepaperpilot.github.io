---
public: "true"
slug: "capture-the-citadel"
tags: [My Projects]
title: "Capture the Citadel"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Capture the Citadel</h1>
<p>39 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Tags:</summary><a href="/garden/my-projects">My Projects</a></details>

A 3D VR re-envisioning of a Slay the Spire-style game by Anthony Lawn and Grant Barbee for their VR class in college's final project.

For more details, visit [Grant's page on the game](https://grantcbarbee.github.io/conquer-the-citadel.html).

<div class="img-container"><img src="/garden/screenshot_1717381273245_0.png" title="screenshot.png"/></div>