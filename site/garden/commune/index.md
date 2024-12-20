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
<p>144 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/digital-locality/index.md">Digital Locality</a><a href="/garden/filter-bubbles/index.md">Filter Bubbles</a><a href="/garden/orchard/index.md">Orchard</a><a href="/garden/webrings/index.md">Webrings</a><a href="/garden/weird/index.md">Weird</a></details>

An [Open Source](/garden/open-source/index.md) [Matrix](/garden/matrix/index.md) web client built to be better for communities than anything else out there
- Currently in development
- Exposes certain channels such that they are web indexable
- Will include features like [Chat Glue](/garden/chat-glue/index.md) and communal [Digital Gardens](/garden/digital-gardens/index.md)

Created by [Erlend Sogge Heggen](https://writing.exchange/@erlend), a ex-employee from Discourse
- Maintains the [Commune Blog](https://blog.commune.sh) with great write ups on the issues of the modern web, social media, etc. and how they can be improved (by Commune or related projects)
- Also maintains a [Personal Blog](https://blog.erlend.sh) about similar topics

The Commune community is very interested in various topics and how they can relate together:
- [Decentralized Identity](/garden/decentralized-identity/index.md)
- [Personal Web](/garden/the-small-web/index.md)
- [Digital Gardens](/garden/digital-gardens/index.md)
- [Social Media](/garden/social-media/index.md)
- The common themes here are they want these things [Decentralized](/garden/decentralized/index.md) and [Freeform](/garden/freeform/index.md)
- They're also building [Weird](/garden/weird/index.md) to make several of these more accessible

Related projects:
- [@laxla@tech.lgbt](https://tech.lgbt/@laxla) is creating Gimli, a federated discord alternative
	- Built on ActivityPub
	- "Guild-based" in ways matrix is not?
	- Will integrate with F3 as well
	- Wants to handle blogging as well
	- Certainly seems similar to Commune's message gardening concept