---
alias: "Federated"
public: "true"
slug: "decentralized"
title: "Decentralized"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Decentralized</h1>
<p>80 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/commune">Commune</a><a href="/garden/fedi-v2">Fedi v2</a><a href="/garden/matrix">Matrix</a><a href="/garden/social-media">Social Media</a></details>

<details><summary>Tagged by:</summary><a href="/garden/activitypub">ActivityPub</a><a href="/garden/atproto">ATProto</a><a href="/garden/federated-identity">Federated Identity</a><a href="/garden/fediverse">Fediverse</a><a href="/garden/nostr">Nostr</a></details>

Something with no central source of authority

Common examples:
- RSS
- Email
- The [Fediverse](/garden/fediverse)

In practice, the "pick a server" problem causes email and the fediverse to trend towards a handful of large servers that still suffer from some of the issues of centralization

Advantages over centralization:
- Data ownership
- Increased privacy
- No rules to follow
- Can fully customize your experience
- No single entity can make the experience worse for everyone
- Anyone and everyone can try their hand at improving the ecosystem