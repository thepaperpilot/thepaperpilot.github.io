---
public: "true"
slug: "forgejo"
title: "Forgejo"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Forgejo</h1>
<p>5 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/incremental-social/index.md">Incremental Social</a></details>

[Forgejo](https://forgejo.org) is an [Open Source](/garden/open-source/index.md) code repository hosting software