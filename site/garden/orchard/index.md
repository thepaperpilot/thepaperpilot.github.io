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
<p>743 words, ~4 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/digital-locality/index.md">Digital Locality</a><a href="/now/index">/now</a></details>

<details><summary>Tags:</summary><a href="/garden/my-projects/index.md">My Projects</a></details>

This is an [Agentic fediverse](undefined) app I'm designing and at least building a mock for. The purpose of the app is to organize and grow a [Network of Knowledge](/garden/network-of-knowledge/index.md) (or [Digital Garden](/garden/digital-gardens/index.md)) sorted by topic. It achieves this through a concept called message gardening, the process of converting casual conversations into formal, referenceable stores of knowledge. It would be an experiment in [Digital Locality](/garden/digital-locality/index.md) and perhaps represent an alternative to traditional [Social Media](/garden/social-media/index.md).

The original problem I was trying to solve is having a lot of conversations about various topics stretching back far into the past and across many platforms. I often want to review something I said on a given topic and find it difficult to do so. This app would make it far easier to retrieve my notes on any topic, and collect those notes into a useful resource about that topic. It's different than a traditional note-taking app because it works with conversations directly, which is how my "notes" on a topic initially start out.

Core to this project is improving how conversations online are carried out. It's inspired by [Commune](/garden/commune/index.md), and would follow a lot of the recommendations in the  [chat glue](https://a9.io/glue-comic/) comic.

## Implementing Chat Glue

As you converse in your group chats and DMs, you can specify topic changes. These will break the conversation up into pieces, and each piece gets added to each of the topics it was about (with links to the convo from before and after that one).

Notes should also allow specific parts, up to the character level, to reply to, react to, otherwise annotate, or mark as a topic change. This is something to think about with regards to decentralized moderation and things like muting pages or gardens. Plus the matter of displaying the sync to the user.

## Non-conversation Notes

In addition to including conversations, I want to support freeform notes that also discuss one or more topics. Through leaf's compositional structure, in theory any entity should be able to be added to the network.

Another type of non-conversation note could be excerpts from online articles, which could be automatically cited.

When allowing these kinds of notes, users should be encouraged to split notes as small as possible. This allows us to avoid needing something like [Garden-RSS](/garden/garden-rss/index.md) by just showing that a note has updated, and showing the new content.

## The Topic Graph

If a note was about multiple topics it forms a link between those topics and considers them in some way related. These links are represented as lines in the topics graph, and cause the topics to be physically closer within the graph.

Links can also be manually created, and all links can be labeled to display a relationship between two topics, like "x is a y" or "x is similar to y" or "x contains y". These would be stored as specially marked notes and can be made public like any other. Selecting an edge will show all relationships that edge has been labeled with, along with any other notes that contain both topics.

## Sharing

You can jump to other people's gardens and see their public notes. You should be able to take any of those notes or the whole graph and include it in your own, so they are part of your searches etc. There'll need to be a good way of displaying changes, aliasing topics, and proposing edits to other peoples' pages. A way to "fork" someone's page so you can have a locally modified version. Overall, this should be very reminiscent of the [IndieWeb](/garden/the-small-web/index.md).

This would help spread corrections to articles by amending people's notes on the event and spreading them further.

We'll need to be careful this doesn't lead to centralizing power, though. We don't want a federation of hubs, it should be fully decentralized. I'm not sure how the chat part should be. Community driven simplifies things and is appealing for people who make something and want a place where people can seek and provide guidance on using the thing. But its against the spirit of decentralization.

## LLMs

A local LLM could assist in marking topic changes automatically, allowing you to get the benefits of the conversation being broken up for catching up even while on a non-commune chat.

LLMs could also be given the topics as context and be able to query the network for knowledge.

## Tech Stack

It'll use the [Agentic Fediverse](/garden/fedi-v2/index.md) to store the messages and other data, making the whole app [Local-First Software](/garden/local-first-software/index.md). The rest of the app will be a web-based UI, using [Neutralino.js](https://neutralino.js.org/) or an alternative.

Actually, [tauri](https://v2.tauri.app/) apparently doesn't require rust per-say, and has things like mobile support and a better dev experience.

It'll use [Incremental Social](/garden/incremental-social/index.md) as the default iroh node and handle any other (optional) server side features.

Consider using [Animata](https://animata.design/) components
