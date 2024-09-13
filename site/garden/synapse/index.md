---
public: "true"
slug: "synapse"
title: "Synapse"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Synapse</h1>
<p>2 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/incremental-social">Incremental Social</a></details>

[Synapse](https://github.com/element-hq/synapse) is an [Open Source](/garden/open-source) server software for the [Matrix](/garden/matrix) protocol