---
alias: "Federated Social Media"
public: "true"
slug: "fediverse"
title: "Fediverse"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Fediverse</h1>
<p>22 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/atproto/index.md">ATProto</a><a href="/garden/decentralized-social-media/index.md">Decentralized Social Media</a><a href="/garden/decentralized/index.md">Decentralized</a><a href="/garden/fedi-v2/index.md">Fedi v2</a><a href="/garden/incremental-social/index.md">Incremental Social</a><a href="/garden/mbin/index.md">Mbin</a><a href="/garden/nostr/index.md">Nostr</a><a href="/garden/social-media/index.md">Social Media</a><a href="/garden/the-small-web/index.md">The Small Web</a><a href="/garden/virality/index.md">Virality</a><a href="/garden/weird/index.md">Weird</a></details>

A collection of [Social Media](/garden/social-media/index.md) websites that can all talk to each other by virtue of a shared protocol.

Implementations:
- ActivityPub
- [ATProto](/garden/atproto/index.md)