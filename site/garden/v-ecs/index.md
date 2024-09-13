---
public: "true"
slug: "v-ecs"
tags: [My Projects]
title: "V-ecs"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">V-ecs</h1>
<p>209 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Tags:</summary><a href="/garden/my-projects">My Projects</a></details>

<div class="img-container"><img src="/garden/screenshot_1717383987886_0.png" title="screenshot.png"/></div>

V-ecs (pronounced "Vex") is a Vulkan-based engine I made for making highly moddable games and tools in Lua centered around the ECS design pattern and a work-stealing job system.

The engine works with "worlds", which are collections of systems and renderers. The engine comes with several worlds using systems and renderers I made, including a voxel world, an incremental game, and some test scenes. All of these include systems to render the fps as well as show a debug console by typing the grave key (\`). The default world is a title screen that detects any worlds in the "worlds" folder and displays a button for each of them.

<div class="img-container"><img src="/garden/debug_1717384018620_0.png" title="debug.png"/></div>

The original plans were to eventually put it on the steam workshop so people could more easily share their creations amongst each other, but I never became happy enough with the performance of the engine - the parallelization of the lua code involved a lot of overhead that severely limited performance.

Instead, I made a couple of worlds by myself - an infinite procedurally generated voxel world, a simple incremental game, and a more complex incremental game I call "[Sands of Time](https://thepaperpilot.itch.io/sands-of-time)".

<div class="img-container"><img src="/garden/sandsoftime_1717383994964_0.png" title="sandsoftime.png"/></div>

The gameplay of Sands of Time was replicated in [Kronos](/garden/kronos) Chapter 2!