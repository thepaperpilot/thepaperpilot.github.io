---
public: "true"
slug: "commune"
title: "Commune"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Commune</h1>
<p>48 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/digital-locality/index.md">Digital Locality</a><a href="/garden/erlend-heggen/index.md">Erlend Heggen</a><a href="/garden/filter-bubbles/index.md">Filter Bubbles</a><a href="/garden/orchard/index.md">Orchard</a><a href="/garden/webrings/index.md">Webrings</a></details>

An [Open Source](/garden/open-source/index.md) [Matrix](/garden/matrix/index.md) web client built to facilitate informal conversations being converted into a web indexed [Digital Garden](/garden/digital-gardens/index.md) through the process of message gardening. It also intends to implement some of the ideas proposed in [Chat Glue](/garden/chat-glue/index.md). Currently in development by [Erlend Heggen](/garden/erlend-heggen/index.md) and company.

Related projects:
- [@laxla@tech.lgbt](https://tech.lgbt/@laxla) is creating Gimli, a federated discord alternative
	- Built on ActivityPub
	- "Guild-based" in ways matrix is not?
	- Will integrate with F3 as well
	- Wants to handle blogging as well
	- Certainly seems similar to Commune's message gardening concept