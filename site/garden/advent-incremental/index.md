---
public: "true"
slug: "advent-incremental"
tags: [My Projects, Profectus]
title: "Advent Incremental"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Advent Incremental</h1>
<p>104 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Tags:</summary><a href="/garden/my-projects">My Projects</a><a href="/garden/profectus">Profectus</a></details>

Play it [here](https://thepaperpilot.org/advent)!

An [Open Source](/garden/open-source) game made in [Profectus](/garden/profectus) over the course of 1 month by myself and other devs I know in the Incremental Games community!

I had the idea of an advent-style game that unlocked new pieces of content every real-life day a couple days before December started.

This was one of the most hectic months of my life!

I'm super happy with how it turned out. It ended up being way more ambitious than I anticipated but the end result is super large and awesome!

The [TV Tropes](https://tvtropes.org/pmwiki/pmwiki.php/VideoGame/AdventIncremental) page on this game mentions some of the cool things about this game