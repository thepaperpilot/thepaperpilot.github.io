---
public: "true"
slug: "babble-buds"
tags: [My Projects]
title: "Babble Buds"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Babble Buds</h1>
<p>113 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Tags:</summary><a href="/garden/my-projects/index.md">My Projects</a></details>

[Babble Buds](http://babblebuds.xyz) is a tool for creating puppets and interacting with puppets controlled by others on a shared stage

> Note: I need to move the website off replit because of their monetization strategy changing. In the meantime, you can check it out from its [github repository](https://github.com/thepaperpilot/babble-buds)

Inspired by Puppet Pals by Robert Moran

Intended for use in RPG Campaigns

The renderer was separated into its own project, [babble.js](https://github.com/thepaperpilot/babble.js), so it could be used for stuff like cutscenes

I ported the engine to C# and used it for the cutscenes in [Dice Armor](/garden/dice-armor/index.md)
- I don't believe I ever separated it out into its own project, but you can find the code [here](https://github.com/sreynoldsdesign/dice_armor/tree/master/Assets/Scripts/babble.cs)