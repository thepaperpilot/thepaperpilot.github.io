---
public: "true"
slug: "network-of-vouches"
tags: [Decentralized Moderation]
title: "Network of Vouches"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Network of Vouches</h1>
<p>327 words, ~2 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/decentralized-moderation/index.md">Decentralized Moderation</a><a href="/garden/digital-locality/index.md">Digital Locality</a></details>

<details><summary>Tags:</summary><a href="/garden/decentralized-moderation/index.md">Decentralized Moderation</a></details>

Identities could have a system by which they vouch for or against other identities that they are human and make content worth looking at, and clients could use this network of vouches to filter posts to display or retrieve. For example, a user may say they only want to see posts made by identities within a chain of 4 vouches to themselves. Upon account creation, users could be prompted to vouch for IRL friends or some popular figures within topics they care about to get started. In theory the longer the chain can be, the more varied the content a user will see, and the more likely for it to be something they disagree with. This would allow users to customize how narrow their feed is at a given time by just changing the max chain length. They can also continue vouching for more people to more precisely expand their feed.

Clients could include tools to analyze their network of vouches, such as displaying all the identities within certain max lengths, or viewing what chain was followed for a specific post to have been displayed. Clients could also add additional tools to customize the chain, like being able to ignore a specific user's vouches or reposts/reblogs. They could also treat any interaction as a vouch, overriding the max chain length for different contexts, such as when used for counting likes.

A reddit-like community could display all replies rather than use the network of trust, and offer controls like only counting likes from within the network when sorting the replies.

This would essentially be an alternative to how current fediverse applications block entire instances as a heuristic, so they can get rid of undesirable content while minimizing how much of it they need to see before doing so. Except in this model, you can always reach people regardless of what server they decided to use, and the controls of in the hands of the individual.