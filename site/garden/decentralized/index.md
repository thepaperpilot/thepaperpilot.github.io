---
alias: "Federated, Decentralization"
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
<p>225 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/decentralized-moderation/index.md">Decentralized Moderation</a><a href="/garden/decentralized-social-media/index.md">Decentralized Social Media</a><a href="/garden/digital-locality/index.md">Digital Locality</a><a href="/garden/fedi-v2/index.md">Fedi v2</a><a href="/garden/free-association/index.md">Free Association</a><a href="/garden/matrix/index.md">Matrix</a><a href="/garden/social-media/index.md">Social Media</a></details>

<details><summary>Tagged by:</summary><a href="/garden/decentralized-identity/index.md">Decentralized Identity</a><a href="/garden/decentralized-moderation/index.md">Decentralized Moderation</a><a href="/garden/digital-locality/index.md">Digital Locality</a><a href="/garden/fedi-v2/index.md">Fedi v2</a><a href="/garden/nostr/index.md">Nostr</a><a href="/garden/orchard/index.md">Orchard</a></details>

Decentralized networks are networks with no central source of authority, all the way to the individual level. This provides many useful advantages to the user, such as data ownership, privacy, and increased agency over the rules you must follow and the client you use. This also means democratizing the service and helping protect it from [Enshittification](/garden/enshittification/index.md). There's not many examples of fully decentralized networks today, but some common examples are RSS, cryptocurrency, torrenting, and other peer-to-peer software. Some energy grids are decentralized, relying on individuals generating their own power and sharing surplus with neighbors.

An important caveat to the use of the term decentralization is that federated networks are often (erroneously) considered decentralized. Federated networks are ones where users have to join or create an entity, which is usually non-trivial, and will then be subject to the rules and limitations of that entity, but can theoretically then communicate with users who are members of other entities. Common examples are email and the [Fediverse](/garden/fediverse/index.md). The distinction is important because federations trend towards a handful of large entities, thus centralizing power still. This happens due to the difficulty in migrating between servers, creating a new server, and even just picking a specific server to join. There is work being done in creating a properly decentralized alternative to the fediverse called the [Agentic Fediverse](/garden/fedi-v2/index.md).