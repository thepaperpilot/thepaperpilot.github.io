---
public: "true"
slug: "incremental-social"
tags: [My Projects]
title: "Incremental Social"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Incremental Social</h1>
<p>113 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/federated-identity/index.md">Federated Identity</a><a href="/garden/my-personal-website/index.md">My Personal Website</a><a href="/now/index">/now</a><a href="/garden/webrings/index.md">Webrings</a></details>

<details><summary>Tags:</summary><a href="/garden/my-projects/index.md">My Projects</a></details>

[Incremental Social](https://incremental.social/) is a [Fediverse](/garden/fediverse/index.md) website hosted by me! It was made under the motivation of the fediverse working best when split up into websites that are specialized for specific communities - and in this case, Incremental Social was made and designed explicitly for the incremental games community! Most notably, it hosts an instance of [Mbin](/garden/mbin/index.md), [Forgejo](/garden/forgejo/index.md), and [Synapse](/garden/synapse/index.md) (and [Cinny](/garden/cinny/index.md)). Mbin allows it to read and write both reddit-style threads and twitter-style posts, and forgejo allows developers to host their web games. Synapse allows the community to chat in a more synchronous fashion than Mbin.

In the future I plan on having the platform also generate a keypair to allow the user to use this account as their identity on the [Agentic Fediverse](/garden/fedi-v2/index.md).

With all these platforms, there will be a goal to support migrating identities elsewhere, so users are not locked in to our platform. Unfortunately a lot of these protocols don't support migration, or not well, so this is going to be a long-term goal.
