---
public: "true"
slug: "kronos"
tags: [My Projects, Profectus]
title: "Kronos"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Kronos</h1>
<p>60 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/v-ecs/index.md">V-ecs</a></details>

<details><summary>Tags:</summary><a href="/garden/my-projects/index.md">My Projects</a><a href="/garden/profectus/index.md">Profectus</a></details>

My largest and most ambitious incremental game I've ever made
- A magnum opus, of sorts ;P

Still in development, and will be for a long time. I have full intention of completing it, however

An older version, that is built in The Modding Tree, only has the gameplay, and only goes up to Chapter 2, can be played [here](https://thepaperpilot.org/kronos/)
