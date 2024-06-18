---
public: "true"
slug: "mbin"
title: "Mbin"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Mbin</h1>
<p>12 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

> Referenced by: [Incremental Social](/garden/incremental-social/index.md)

[Mbin](https://github.com/MbinOrg/mbin) is an [Open Source](/garden/open-source/index.md) [Fediverse](/garden/fediverse/index.md) software

Can show both twitter-style posts and reddit-style threads