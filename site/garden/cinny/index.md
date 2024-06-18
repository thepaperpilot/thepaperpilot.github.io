---
public: "true"
slug: "cinny"
title: "Cinny"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Cinny</h1>
<p>3 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

> Referenced by: [Incremental Social](/garden/incremental-social/index.md)

[Cinny](https://cinny.in) is an [Open Source](/garden/open-source/index.md) web client for the [Matrix](/garden/matrix/index.md) messaging protocol