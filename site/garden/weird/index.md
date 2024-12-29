---
public: "true"
slug: "weird"
title: "Weird"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Weird</h1>
<p>19 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/erlend-heggen/index.md">Erlend Heggen</a><a href="/garden/the-small-web/index.md">The Small Web</a></details>

[Weird](https://weird.one) is an [Open Source](/garden/open-source/index.md) project by [Erlend Heggen](/garden/erlend-heggen/index.md) and company currently in development. It aims to make creating [Personal Websites](/garden/the-small-web/index.md) with [Decentralized Identity](/garden/decentralized-identity/index.md) available to everyone. It also plans on having paid tiers for giving people access to single user instances of various [Fediverse](/garden/fediverse/index.md) tools.

Long term, Weird wants to build [Leaf](/garden/fedi-v2/index.md) and be a major node for storing data on Leaf.