---
public: "true"
slug: "network-of-knowledge"
title: "Network of Knowledge"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Network of Knowledge</h1>
<p>50 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/now/index">/now</a><a href="/garden/orchard/index.md">Orchard</a></details>

A theoretical concept for a federated protocol for people to write down their research, thoughts, etc. and link to other people's writings, such that it forms of network of all human thought

Existing Projects:
- [Noosphere](https://github.com/subconsciousnetwork/noosphere)
	- Sounds a lot like it's building networked [Digital Gardens](/garden/digital-gardens/index.md)
	- Unfortunately, [closed down](https://subconscious.substack.com/p/subconscious-is-winding-down)
- [Ibis](https://ibis.wiki)