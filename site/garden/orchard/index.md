---
public: "true"
slug: "orchard"
tags: [My Projects, Decentralized]
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
<p>1348 words, ~7 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/anti-intellectualism/index.md">Anti-Intellectualism</a><a href="/garden/constructivism/index.md">Constructivism</a><a href="/garden/digital-locality/index.md">Digital Locality</a><a href="/garden/efficiency/index.md">Efficiency</a><a href="/now/index">/now</a></details>

<details><summary>Tags:</summary><a href="/garden/my-projects/index.md">My Projects</a><a href="/garden/decentralized/index.md">Decentralized</a></details>

This is an [Agentic Fediverse](/garden/fedi-v2/index.md) app I'm designing and at least building a mock for. The purpose of the app is to organize and grow a [Network of Knowledge](/garden/network-of-knowledge/index.md) sorted by topic. It achieves this through a concept called message gardening, the process of converting casual conversations into formal, referenceable stores of knowledge. It would be an experiment in [Digital Locality](/garden/digital-locality/index.md) and perhaps represent an alternative to traditional [Social Media](/garden/social-media/index.md).

The original problem I was trying to solve is having a lot of conversations about various topics stretching back far into the past and across many platforms. I often want to review something I said on a given topic and find it difficult to do so. This app would make it far easier to retrieve my notes on any topic, and collect those notes into a useful resource about that topic (a process called "message gardening"). It's different than a traditional note-taking app because it works with conversations directly, which is useful because discourse is typically what prompts me to collect my thoughts on a topic in the first place.

Core to this project is improving how conversations online are carried out. It's inspired by [Commune](/garden/commune/index.md) but aims to remove the idea of discrete communities.

## Implementing [Chat Glue](/garden/chat-glue/index.md)

As you converse in your group chats and DMs, you can specify topic changes. These will break the conversation up into pieces called notes, and each piece gets added to each of the topics it was about (with links to the convo from before and after that one).

Notes should also allow specific parts, up to the character level, to reply to, react to, otherwise annotate, or mark as a topic change. This is something to think about with regards to decentralized moderation and things like muting pages or gardens. Plus the matter of displaying the sync to the user.

Exactly where these DMs and group chats are coming from isn't super clear in my mind. I want [Digital Locality](/garden/digital-locality/index.md), which means avoiding large groups of users and limiting the influence of individual posts and posters. We don't want a federation of discrete independently moderated communities, as that will lead to centralizing power and influence. But, organizing communities this way is very common due to its convenience and appeal. If you make, say, an open source library and want people to know where they can go to discuss how to use the library, show off what they used it for, etc. then you're likely to create a discrete community for it.

In theory we could take the Chromatic Lattice's initial approach and just have a chat room tied to each user, but I'm not confident that'll translate well to this project. I'm leaving this open ended, since I expect we'll learn from Chromatic Lattice anyways and find a better solution to this problem.

## Non-conversation Notes

In addition to including conversations, I want to support freeform notes that also discuss one or more topics. Another type of non-conversation note could be excerpts from online articles, which could be automatically cited. Through leaf's compositional structure, in theory any entity should be able to be added to the network.

When allowing these kinds of notes, users should be encouraged to split notes small if possible. This could potentially allow us to avoid or delay the need for something like [Garden-RSS](/garden/garden-rss/index.md), and instead allow us to just mark entire notes as changed.

## The Topic Graph

If a note was about multiple topics it forms a link between those topics and considers them in some way related. These links are represented as lines in the topics graph, and cause the topics to be physically closer within the graph.

Links can also be manually created, and all links can be labeled to display a relationship between two topics, like "x is a y" or "x is similar to y" or "x contains y". These would be stored as specially marked notes and can be made public like any other. Selecting an edge will show all relationships that edge has been labeled with, along with any other notes that contain both topics.

## Sharing Notes

You can jump to other people's gardens and see their public notes (via a friends list or via a mutual chat room). You should be able to take any of those notes or the whole graph and include it in your own, so they are part of your graph and queries. There'll need to be a good way of displaying changes, aliasing topics, and proposing edits to other peoples' pages. A user should also be able to "fork" someone's notes so they can modify them, and maintain a link to the original note but no longer auto-update them. Unread notes should appear similar to unread chats, which will improve the ability to use Orchard as a method of learning. In fact, breaking down books by topic and adding them to an Orchard graph is something I think would be worth looking into, once the project is usable.

I think a conversation should show a sidebar of notes from both the user's network as well as any public notes from any other active participants' networks that relate to the set of topics being discussed. I think this would help encourage message gardening and assist with distributing information. We could go a step further and notify participants when those notes get added to or edited, which could help with corrections to articles getting spread to those who saw the original incorrect information (something that traditional media doesn't do well).

We'll need to be careful sharing notes doesn't lead to centralizing power. I think if you subscribe/follow someone's graph, it shouldn't include the pages they've followed (although forks would be fine). This would lead to [Digital Locality](/garden/digital-locality/index.md) and all the benefits it entails. However, this might make it harder for movements to spread, because it means it spreading requires people to write new content rather than sharing existing content. I believe (perhaps optimistically) that movements can succeed in this environment, but perhaps instead there's a happy medium we can strike, so high quality notes can be spread without leading to issues like non-consensual virality.

I think a compromise here might just be letting people copy notes over to their own graph. Instead of suggesting changes to other peoples notes, you just copy the note over and modify it. If the other person is friends with you, they'll see your new (changed) note, and perhaps the app can even highlight the similarity (and importantly, the differences) between that note and the original. This system would be similar to sharing/retweeting a post, but with a bit more effort that I think would strike the right balance between signal boosting good information and limiting influence. Notes would naturally be iterated upon as they spread through the network.

## LLMs

A local LLM could assist in marking topic changes automatically, making it so chat participants don't have to themselves. Since being broken down into topics is particularly useful for "catching up" on a conversation (allowing you to skip topics you're not interested in), this feature would be particularly useful on chats from platforms that don't support topics themselves, such as discord or slack. Jigsaw's [sensemaking-tools](https://medium.com/jigsaw/making-sense-of-large-scale-online-conversations-b153340bda55) project could slot in here particularly well.

LLMs could also be given the topics as context and be able to query the network for knowledge.

## Education

This graph of topics could naturally lead itself to educational purposes. I think people should be able to perhaps describe directed sub graphs that present the topics as a dependency tree. This would enable self paced learning, with the dependencies acting as a guide for what can be learned next. This is in alignment with my personal beliefs that we should have [Decentralized Education](/garden/decentralized-education/index.md) using a [Constructivist](/garden/constructivism/index.md) approach.

Couple Orchard with some sort of mastery system and subject dependency tree and you basically have an alternative to Khan Academy or Brilliant.

Flash cards are a good method of memorizing thinks, especially through something like anki. Flash cards are already fairly decentralized, so perhaps annotations on notes should allow mapping them into flash cards that can be easily imported in flash cards apps through standard formats.

## Tech Stack

It'll use the [Agentic Fediverse](/garden/fedi-v2/index.md) to store the messages and other data, making the whole app [Local-First Software](/garden/local-first-software/index.md). The frontend of the app will be built in either [tauri](https://v2.tauri.app/) or perhaps just be a website, using sqlite and service workers to work local-first. It'll use [Incremental Social](/garden/incremental-social/index.md) as the default iroh node and handle any other (optional) server side features.
