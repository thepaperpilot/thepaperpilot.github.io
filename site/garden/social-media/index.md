---
alias: "Social Web"
public: "true"
slug: "social-media"
title: "Social Media"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Social Media</h1>
<p>222 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/commune/index.md">Commune</a><a href="/garden/decentralized-moderation/index.md">Decentralized Moderation</a><a href="/garden/decentralized-social-media/index.md">Decentralized Social Media</a><a href="/garden/digital-locality/index.md">Digital Locality</a><a href="/garden/fediverse/index.md">Fediverse</a><a href="/garden/filter-bubbles/index.md">Filter Bubbles</a><a href="/garden/moderation/index.md">Moderation</a><a href="/garden/orchard/index.md">Orchard</a></details>

Social media is how we interact with people online. It's also increasingly becoming how we discover and discuss news and ideas. It's incredibly important, but flawed. A lot of pages in this digital garden criticize and attempt to solve these flaws.

Traditional social media is centralized, meaning you have to trust the central authority to be acting in your best interests. It also means you likely won't have control over the moderation rules, sorting methods, filters, or other aspects of the platform. Traditional social media is also overrun by entities trying to accumulate wealth in the "attention economy", meaning feeds are littered with influencers, advertisers, and scams. It's not a safe place to be and its not conducive to health conversations.

[Federated Social Media](/garden/fediverse/index.md) is partially [Decentralized](/garden/decentralized/index.md), and includes services like Mastodon or Lemmy. These require self hosting, leading to it being a federation of smaller centralized authorities. Most people still won't have control over the platform, but may find a platform that's more tolerable to them. However, the process of doing so greatly increases the barrier of entry into the network, and stifles their adoption.

I personally advocate for a full decentralized social media, called the [Agentic Fediverse](/garden/fedi-v2/index.md) . It should give full agency to the individual, and perhaps even introduce the concept of [Digital Locality](/garden/digital-locality/index.md).