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
<p>1373 words, ~8 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/anti-intellectualism/index.md">Anti-Intellectualism</a><a href="/garden/constructivism/index.md">Constructivism</a><a href="/garden/digital-locality/index.md">Digital Locality</a><a href="/garden/efficiency/index.md">Efficiency</a><a href="/now/index">/now</a></details>

<details><summary>Tags:</summary><a href="/garden/my-projects/index.md">My Projects</a><a href="/garden/decentralized/index.md">Decentralized</a></details>

This is an [Agentic Fediverse](/garden/fedi-v2/index.md) app I'm designing and at least building a mock for. The purpose of the app is to organize and grow a [Network of Knowledge](/garden/network-of-knowledge/index.md) sorted by topic. It achieves this through a concept called message gardening, the process of converting casual conversations into formal, referenceable stores of knowledge. It would be an experiment in [Digital Locality](/garden/digital-locality/index.md) and perhaps represent an alternative to traditional [Social Media](/garden/social-media/index.md).

The original problem I was trying to solve is having a lot of conversations about various topics stretching back far into the past and across many platforms. I often want to review something I said on a given topic and find it difficult to do so. This app would make it far easier to retrieve my notes on any topic, and collect those notes into a useful resource about that topic (a process called "message gardening"). It's different than a traditional note-taking app because it works with conversations directly, which is useful because discourse is typically what prompts me to collect my thoughts on a topic in the first place.

Core to this project is improving how conversations online are carried out. It's inspired by [Commune](/garden/commune/index.md) but aims to remove the idea of discrete communities.

## Implementing [Chat Glue](/garden/chat-glue/index.md)

In addition to note pages, orchard will have its own chat glue inspired messaging system, that integrates with the rest of the digital garden.

While in something like discord we have channels to filter topics and participants, in this system we expose topics directly. So instead conversations "branch" from the topic(s) that the first message brings up. This conversation can be open to the public, or only to specified users. In addition, people can subscribe to both topics and people, or even in combination (e.g. programming conversations involving a specific friend). Users can create groups of friends for ease of specifying who can participate in specific conversations. Conversations have topic sets in lieu of titles.

Messages can have edits and reactions and other embellishments, which can refer to the message as a whole or just a piece of it. Edits are also shown as messages, which includes edits to garden pages (so someone can start a conversation off that edit).

Every message is a branch (like how reddit threads converse), and those branches can change topic sets, change user visibility, etc. It's possible to see a message but not its context, or that someone referenced a message but you can't see the contents or even metadata of that message.

## Non-conversation Notes

In addition to including conversations, I want to support freeform notes that also discuss one or more topics. Another type of non-conversation note could be excerpts from online articles, which could be automatically cited. Through leaf's compositional structure, in theory any entity should be able to be added to the network.

When allowing these kinds of notes, users should be encouraged to split notes small if possible. This could potentially allow us to avoid or delay the need for something like [Garden-RSS](/garden/garden-rss/index.md), and instead allow us to just mark entire notes as changed.

## The Topic Graph

If a note was about multiple topics it forms a link between those topics and considers them in some way related. These links are represented as lines in the topics graph, and cause the topics to be physically closer within the graph.

Links can also be manually created, and all links can be labeled to display a relationship between two topics, like "x is a y" or "x is similar to y" or "x contains y". These would be stored as specially marked notes and can be made public like any other. Selecting an edge will show all relationships that edge has been labeled with, along with any other notes that contain both topics.

## Sharing Notes

You can jump to other people's gardens and see their public notes (via a friends list or via a mutual chat room). You'll be notified of changes to your friends' garden so you can read it and perhaps make corresponding updates to your own notes. Unread notes should appear similar to unread chats, which will improve the ability to use Orchard as a method of learning. In fact, breaking down books by topic and adding them to an Orchard graph is something I think would be worth looking into, once the project is usable.

I think a conversation should show a sidebar of notes from both the user's network as well as any public notes from any other active participants' networks that relate to the set of topics being discussed. I think this would help encourage message gardening and assist with distributing information. We could go a step further and notify participants when those notes get added to or edited, which could help with corrections to articles getting spread to those who saw the original incorrect information (something that traditional media doesn't do well).

Having to copy notes over into your own garden is a deliberate decision to prevent misinformation and centralizing power. It forces engagement before spreading information, and prevents a specific poster from their exact post from accumulating influence - thus, this system includes the ideas of [Digital Locality](/garden/digital-locality/index.md) and all the benefits it entails. However, we'll need to make sure it's not such a burden to copy over notes that movements can't spread. In theory this could also allow the note to be iterated upon and become more complete, succinct, or some other quality, based on what's more likely to be copied over by readers.

I think the notification system should look for similarities between your notes and theirs, and make it clear when they just added a note that's similar to a note you already made. In theory, a button could be shown to copy over changes when compatible.

## LLMs

A local LLM could assist in marking topic changes automatically, making it so chat participants don't have to themselves. Since being broken down into topics is particularly useful for "catching up" on a conversation (allowing you to skip topics you're not interested in), this feature would be particularly useful on chats from platforms that don't support topics themselves, such as discord or slack. Jigsaw's [sensemaking-tools](https://medium.com/jigsaw/making-sense-of-large-scale-online-conversations-b153340bda55) project could slot in here particularly well.

LLMs could also be given the topics as context and be able to query the network for knowledge.

## Education

This graph of topics could naturally lead itself to educational purposes. I think people should be able to perhaps describe directed sub graphs that present the topics as a dependency tree. This would enable self paced learning, with the dependencies acting as a guide for what can be learned next. This is in alignment with my personal beliefs that we should have [Decentralized Education](/garden/decentralized-education/index.md) using a [Constructivist](/garden/constructivism/index.md) approach.

Couple Orchard with some sort of mastery system and subject dependency tree and you basically have an alternative to Khan Academy or Brilliant.

Flash cards are a good method of memorizing thinks, especially through something like anki. Flash cards are already fairly decentralized, so perhaps annotations on notes should allow mapping them into flash cards that can be easily imported in flash cards apps through standard formats.

## Tech Stack

It'll use the [Agentic Fediverse](/garden/fedi-v2/index.md) to store the messages and other data, making the whole app [Local-First Software](/garden/local-first-software/index.md). The frontend of the app will be built in either [tauri](https://v2.tauri.app/) or perhaps just be a website, using sqlite and service workers to work local-first. It'll use [Incremental Social](/garden/incremental-social/index.md) as the default iroh node and handle any other (optional) server side features.

Consider using [Animata](https://animata.design/) components

Could we have a note type that implements [Potluck](/garden/potluck/index.md)?
- Might be overkill / out of scope
- Making it a plugin could make more sense
- I'd like a potluck app with syncing regardless
- Potluck pages would likely be fewer in quantity and more frequently returned to than other notes. Might be an indicator its not appropriate, could also mean we'd just need a way to favorite notes

Could we have a note type that allows code and markdown, like [Observable](https://observablehq.com/)?
- https://tomlarkworthy.github.io/lopecode/webpage.html
- https://observablehq.com/@tomlarkworthy/hello-golden-layout-2-6-0

## Orchard as a Protocol

I might consider making orchard really just [Garden-RSS](/garden/garden-rss/index.md), built as a handful of leaf schemas that would allow any app to potentially allow users to subscribe to other gardens and see updates, and theoretically update their own garden. This would have to work with arbitrary leaf components that apps can implement support for, and stuff like chat glue would be how I personally manage my digital garden.
