---
public: "true"
slug: "logseq"
title: "Logseq"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Logseq</h1>
<p>40 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/command-palettes/index.md">Command Palettes</a><a href="/garden/incremental-automaton/index.md">Incremental Automaton</a><a href="/garden/my-personal-website/index.md">My Personal Website</a><a href="/garden/this-knowledge-hub/index.md">This Knowledge Hub</a></details>

[Logseq](https://logseq.com) is an [Open Source](/garden/open-source/index.md) outlining software.

It's what I use for [This Knowledge Hub](/garden/this-knowledge-hub/index.md), using a script to export the pages. When writing, everything is a bullet points, but when exporting I make the top level bullet points appear as prose instead.