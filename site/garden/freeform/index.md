---
public: "true"
slug: "freeform"
title: "Freeform"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Freeform</h1>
<p>46 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/commune/index.md">Commune</a><a href="/garden/digital-gardens/index.md">Digital Gardens</a><a href="/garden/freeform-vs-chronological-dichotomy/index.md">Freeform vs Chronological Dichotomy</a><a href="/garden/garden-rss/index.md">Garden-RSS</a></details>

A collection of information that is not tied to when it was created or edited

Part of the [Freeform vs Chronological Dichotomy](/garden/freeform-vs-chronological-dichotomy/index.md)

Anything wiki-style is considered freeform
- A collection of living documents

[Garden-RSS](/garden/garden-rss/index.md), a theoretical alternative to RSS that's better for freeform content