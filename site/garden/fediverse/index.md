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

> Referenced by: [ATProto](/garden/atproto/index.md), [Decentralized](/garden/decentralized/index.md), [Fedi v2](/garden/fedi-v2/index.md), [Incremental Social](/garden/incremental-social/index.md), [Mbin](/garden/mbin/index.md), [Weird](/garden/weird/index.md)

> Tags: [Decentralized](/garden/decentralized/index.md)

A collection of [Social Media](/garden/social-media/index.md) websites that can all talk to each other by virtue of a shared protocol

Typically refers to sites implementing [ActivityPub](/garden/activitypub/index.md)

Implementations:
- [ActivityPub](/garden/activitypub/index.md)
- [ATProto](/garden/atproto/index.md)
- [Nostr](/garden/nostr/index.md)