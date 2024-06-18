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
<p>3 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

> Referenced by: [Command Palettes](/garden/command-palettes/index.md), [This Knowledge Hub](/garden/this-knowledge-hub/index.md)

[Logseq](https://logseq.com) is an [Open Source](/garden/open-source/index.md) outlining software