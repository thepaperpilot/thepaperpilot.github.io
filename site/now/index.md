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
<p>300 words, ~2 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

This "now page" offers a big picture glimpse into what I’m focused on at this point in my life. [What is a now page](https://nownownow.com/about)?

## Timeline on this website

I'm working on a large update to this website that'll include a new global feed of my activity across many websites going back an entire decade. It also replaces Vitepress with Nuxt.JS and no longer using a (heavily) modified template, instead just having the whole thing implemented by me. It'll also include features like better search and a graph of garden pages.

As part of this migration, I'm usingeaf entities as the CMS, including building out some parts of the leaf ecosystem I need.

## Digital locality

I've been thinking a lot about social media design and how it could be improved, which has distilled into my writeup on what I call [Digital Locality](/garden/digital-locality/index.md), which I believe is the solution to decentralized moderation that combats hate and misinformation.

[Incremental Automaton](/garden/incremental-automaton/index.md) has effectively become the first experiment - not directly related to digital locality but still something that will inform the future experiments that do.

I have plans for two experiments into digital locality:

### [Chromatic Lattice](/garden/chromatic-lattice/index.md)

A multiplayer co-operative incremental game on the [Agentic Fediverse](/garden/fedi-v2/index.md). This will come alongside various improvements to [Incremental Social](/garden/incremental-social/index.md), such as making it operate as an iroh node.

### [Orchard](/garden/orchard/index.md)

An app for message gardening into a [Network of Knowledge](/garden/network-of-knowledge/index.md) and represents my vision for an alternative approach to social media that is better at not making people angry or doomscroll, combat misinformation, and encourage stronger relationships with those you meet online, rather than just wading through an ocean of strangers.

## Kronos

I'm working on a long single player narratively driven incremental game called [Kronos](/garden/kronos/index.md) . This is a very long-term project.