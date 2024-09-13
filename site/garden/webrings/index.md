---
public: "true"
slug: "webrings"
title: "Webrings"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Webrings</h1>
<p>139 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/the-small-web">The Small Web</a></details>

A collection of [Personal Websites](/garden/the-small-web) that link to each other
- These websites are all endorsing each other
- They form a network of related sites readers might be interested in
- Built on human trust rather than algorithms

[Commune](/garden/commune) has a vision for modern webrings
- Have communities set up matrix spaces for chatting
- Multiple spaces can contain the same room
- Related communities can share a room about a relevant topic
	- e.g. a bunch of game development libraries shared a "Game Design" room
- This allows smaller communities to grow from cross-pollinating with other related communities
- Could [Incremental Social](/garden/incremental-social) host a shared "Incremental Games" room?
	- How to bridge one channel to multiple discord servers, since that's where most incremental games communities are
	- Would this be appealing to already large communities?
	- Would this be overwhelming to smaller communities?
	- Who would moderate?