---
public: "true"
slug: "matrix"
title: "Matrix"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Matrix</h1>
<p>2 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/cinny">Cinny</a><a href="/garden/commune">Commune</a><a href="/garden/synapse">Synapse</a></details>

[Matrix](https://matrix.org) is a protocol for [Decentralized](/garden/decentralized) messaging