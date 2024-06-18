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

> Referenced by: [V-ecs](/garden/v-ecs/index.md)

> Tags: [My Projects](/garden/my-projects/index.md), [Profectus](/garden/profectus/index.md)

My largest and most ambitious incremental game I've ever made
- A magnum opus, of sorts ;P

Still in development, and will be for a long time. I have full intention of completing it, however

An older version, that is built in The Modding Tree, only has the gameplay, and only goes up to Chapter 2, can be played [here](https://thepaperpilot.org/kronos/)
