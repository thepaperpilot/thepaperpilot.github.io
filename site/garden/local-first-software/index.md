---
public: "true"
slug: "local-first-software"
title: "Local-First Software"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Local-First Software</h1>
<p>48 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/orchard/index.md">Orchard</a></details>

Software that is designed to operate fully offline, that can sync when connected to  other clients. This means giving users ownership over their data while still allowing for collaboration.

Find a bunch of resources explaining the concept, how to implement it, and some examples at https://localfirstweb.dev/