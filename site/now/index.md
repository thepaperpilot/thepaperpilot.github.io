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
<p>181 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

This "now page" offers a big picture glimpse into what I’m focused on at this point in my life. [What is a now page](https://nownownow.com/about)?

## IndieWeb

I've been learning a lot about [The Small Web](/garden/the-small-web/index.md) (or the various other names it goes by). I've been working on this website and implementing the various IndieWeb building blocks

I'm also working on a proposal for adding [The IndieWeb/Signature Blocks](/garden/the-indieweb/signature-blocks/index.md) to your notes

## Commune

While I'm not contributing to the project directly, I'm following along and participating with the discussions and designs of [Commune](/garden/commune/index.md).

I'm working on a mockup of what an app could look like that treats incoming messages, emails, etc. differently based on user defined rules, with a focus on moving them into personal or communal digital gardens.

## Incremental Social

I'm running and improving the social media site [Incremental Social](/garden/incremental-social/index.md), along with CardboardEmpress.

## Chromatic Lattice

I'm working on a multiplayer incremental game. That's all that's known publicly for now 😜.

## Kronos

I'm working on a long single player narratively driven incremental game. This is a very long-term project.