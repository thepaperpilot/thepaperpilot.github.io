---
public: "true"
slug: "profectus"
tags: [My Projects]
title: "Profectus"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Profectus</h1>
<p>73 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/advent-incremental/index.md">Advent Incremental</a><a href="/garden/planar-pioneers/index.md">Planar Pioneers</a></details>

<details><summary>Tagged by:</summary><a href="/garden/advent-incremental/index.md">Advent Incremental</a><a href="/garden/kronos/index.md">Kronos</a><a href="/garden/planar-pioneers/index.md">Planar Pioneers</a></details>

<details><summary>Tags:</summary><a href="/garden/my-projects/index.md">My Projects</a></details>

[Profectus](https://moddingtree.com) is an [Open Source](/garden/open-source/index.md) game engine I made, loosely based on The Modding Tree by Acamaeda

Technically it's more of a template for making web games

It centers around using Vue's reactivity and is designed with the intent to not restrain developers into making games that only look or behave "one way"

Games made with Profectus:
- Everything in this garden tagged with this page!
- The [entries](https://itch.io/jam/profectus-creation-jam/entries) to the Profectus Creation Jam
- [Primordia](https://jacorb90.me/Primordial-Tree/) by Jacorb
