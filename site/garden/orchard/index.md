---
public: "true"
slug: "orchard"
tags: [My Projects]
title: "Orchard"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Orchard</h1>
<p>634 words, ~3 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/now/index">/now</a></details>

<details><summary>Tags:</summary><a href="/garden/my-projects/index.md">My Projects</a></details>

This is an app I'm designing and at least building a mock for. I'd like it to either get built directly into [Commune](/garden/commune/index.md) or integrate with it. The purpose of the app is to organize and grow a [Network of Knowledge](/garden/network-of-knowledge/index.md) (or [Digital Garden](/garden/digital-gardens/index.md)) sorted by topic. It achieves this through a concept called message gardening, the process of converting casual conversations into formal, referenceable stores of knowledge.

The problem I have that I'm trying to solve is having a lot of conversations about various topics stretching back far into the past and across many platforms. I often want to review something I said on a given topic and find it difficult to do so. This app would make it far easier to retrieve my notes on any topic. It's different than a traditional note-taking app because it works with conversations directly, which is how my "notes" on a topic initially start out as. As a secondary effect, this will also fix some of the issues described in the [chat glue](https://a9.io/glue-comic/) comic. I'd like it to eventually support even more of the ideas proposed in that comment, like replies and reactions to parts of a message.

The main way you interact with the app is by conversing. As you converse in your group chats and DMs, which are technically through matrix but can bridge to other platforms like discord, you can specify topic changes. These will break the conversation up into pieces, and each piece gets added to each of the topics it was about (with links to the convo from before and after that one). If a piece was about multiple topics it forms a link between those topics and considers them in some way related. These links are represented as lines in the topics graph, and cause the topics to be physically closer within the graph. Topics can use slashes to indicate hierarchy, which will also place them next to each other in the graph.

## Non-conversation notes

In addition to including conversations, I want to support freeform notes that also discuss one or more topics. Through leaf's compositional structure, in theory any entity should be able to be added to the network.

Another type of non-conversation note could be excerpts from online articles, which could be automatically cited.

When allowing these kinds of notes, users should be encouraged to split notes as small as possible. This allows us to avoid needing something like [Garden-RSS](/garden/garden-rss/index.md) by just showing that a note has updated, and showing the new content.

## Communal Networks

By integrating with commune on the server side, the network could be maintained by the entire community, allowing any (trusted) members to mark topic changes. This has the benefit of making maintenance easier on any individual, but also it means users wanting to catch up on the conversations can now do so via the graph, ignoring any conversations that don't mention any topics that user doesn't particularly care about.

## Federation

Allow clients to "follow" those communal networks, replicating them locally and merging them together (aliasing similar topics as necessary). This allows users to get very large networks much more easily, and further incentivizes contributing to the communal networks.

## LLMs

A local LLM could assist in marking topic changes automatically, allowing you to get the benefits of the conversation being broken up for catching up even while on a non-commune chat.

LLMs could also be given the topics as context and be able to query the network for knowledge.

## Tech Stack

The client will be a matrix client that stores all the messages locally. It'll use [Fedi v2](/garden/fedi-v2/index.md) to store the messages and other data, making the whole app [Local-First Software](/garden/local-first-software/index.md). The rest of the app will be a web-based UI, using [Neutralino.js](https://neutralino.js.org/) or an alternative.

Actually, [tauri](https://v2.tauri.app/) apparently doesn't require rust per-say, and has things like mobile support and a better dev experience.

The server will be something that ensures commune servers can share topic changes across the community.

Consider using [Animata](https://animata.design/) components
