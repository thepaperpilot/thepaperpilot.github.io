---
alias: "Federated Social Media"
public: "true"
slug: "fediverse"
tags: [Decentralized]
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
<p>29 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/activitypub">ActivityPub</a><a href="/garden/atproto">ATProto</a><a href="/garden/decentralized">Decentralized</a><a href="/garden/fedi-v2">Fedi v2</a><a href="/garden/incremental-social">Incremental Social</a><a href="/garden/mbin">Mbin</a><a href="/garden/nostr">Nostr</a><a href="/garden/social-media">Social Media</a><a href="/garden/the-small-web">The Small Web</a><a href="/garden/weird">Weird</a></details>

<details><summary>Tags:</summary><a href="/garden/decentralized">Decentralized</a></details>

A collection of [Social Media](/garden/social-media) websites that can all talk to each other by virtue of a shared protocol

Typically refers to sites implementing [ActivityPub](/garden/activitypub)

Implementations:
- [ActivityPub](/garden/activitypub)
- [ATProto](/garden/atproto)
- [Nostr](/garden/nostr)