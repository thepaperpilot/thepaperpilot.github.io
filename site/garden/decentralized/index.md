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
<p>131 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/commune/index.md">Commune</a><a href="/garden/fedi-v2/index.md">Fedi v2</a><a href="/garden/matrix/index.md">Matrix</a><a href="/garden/social-media/index.md">Social Media</a></details>

<details><summary>Tagged by:</summary><a href="/garden/activitypub/index.md">ActivityPub</a><a href="/garden/atproto/index.md">ATProto</a><a href="/garden/federated-identity/index.md">Federated Identity</a><a href="/garden/fediverse/index.md">Fediverse</a><a href="/garden/nostr/index.md">Nostr</a></details>

Something with no central source of authority. RSS, email, and the [Fediverse](/garden/fediverse/index.md) are common examples of decentralized systems. There are many intricacies and potential pitfalls involved in allowing anyone to spin up their own server and join these large networks, but I believe they're often well worth it to solve the problems of centralized software. In practice though, even a lot of decentralized software can have the issues of centralized software due to the difficulty in migrating between servers, the difficulty in creating your own server, and the difficulty in picking a server, which typically leads to the consolidation of users in a handful of large servers (which are then similar to centralized services). I try to tackle those issues and suggest a new generation of federation without them in [Fedi v2](/garden/fedi-v2/index.md).

The typical (potential) advantages of decentralized services over centralized ones involve things like data ownership, increased privacy, having either no rules to follow or rules you more closely align with, the ability to customize your experience with custom servers or clients, protection from enshittification, and the democratization of improving the service.

I think there's been a long trend in the early 2020s of criticizing centralized services and looking for alternatives. Unfortunately, the network effect, transition costs, and issues with the alternatives have stymied their adoption. I'm still optimistic that we're approaching the point where a federated network will truly take over and replace these centralized services, and drastically impact the shape of the internet going forward.