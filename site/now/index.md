---
public: "true"
slug: "now"
title: "/now"
prev: false
next: false
---
<script setup>
import { data } from '../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">/now</h1>
<p>186 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

This "now page" offers a big picture glimpse into what I’m focused on at this point in my life. [What is a now page](https://nownownow.com/about)?

## Digital Gardens

I'm building (at least) a mockup for [Orchard](/garden/orchard/index.md), an app for message gardening into a [Network of Knowledge](/garden/network-of-knowledge/index.md).

Ultimately, I think this project could have some implications on how _this_ digital garden operates, so I've decided to stop further indieweb integrations like webmentions for now. I'd like to see a server be able to bridge indieweb and agentic fediverse posts, and start using the agentic fediverse posts as my new source of truth.

## Incremental Social

I'm running and improving the social media site [Incremental Social](/garden/incremental-social/index.md), along with CardboardEmpress.

I'd like to make it host an iroh node for hosting agentic fediverse content, managing a keypair for each account (with options for migration).

## Chromatic Lattice

I'm working on a multiplayer incremental game called [Chromatic Lattice](/garden/chromatic-lattice/index.md) . It's still largely in the concept phase, and may even be built on the [Agentic Fediverse](/garden/fedi-v2/index.md).

## Kronos

I'm working on a long single player narratively driven incremental game called [Kronos](/garden/kronos/index.md) . This is a very long-term project.