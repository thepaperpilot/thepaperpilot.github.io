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

<details><summary>Referenced by:</summary><a href="/garden/incremental-social">Incremental Social</a></details>

[Mbin](https://github.com/MbinOrg/mbin) is an [Open Source](/garden/open-source) [Fediverse](/garden/fediverse) software

Can show both twitter-style posts and reddit-style threads