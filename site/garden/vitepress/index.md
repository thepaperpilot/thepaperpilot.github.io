---
public: "true"
slug: "vitepress"
title: "Vitepress"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Vitepress</h1>
<p>4 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

> Referenced by: [My Personal Website](/garden/my-personal-website/index.md), [This Knowledge Hub](/garden/this-knowledge-hub/index.md)

[Vitepress](https://vitepress.dev) is an [Open Source](/garden/open-source/index.md) static site generator