---
public: "true"
slug: "this-knowledge-hub"
title: "This Knowledge Hub"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">This Knowledge Hub</h1>
<p>135 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/digital-gardens/index.md">Digital Gardens</a></details>

This is my knowledge hub!
- It's a [Digital Garden](/garden/digital-gardens/index.md) collecting my thoughts in varying levels of completeness on basically anything I have interest in

This is not Wikipedia. My thoughts are biased and argumentative, but to the best of my ability based on fact and expertise

<span id="6637b86a-3603-45ef-a21e-b33c7d96c529">I'm writing on _something_ essentially every day</span>
- Most of my pages are private, especially the journal pages
- I'll only push updates to this site every so often (not an automatic process)
- Until something like [Garden-RSS](/garden/garden-rss/index.md) exists, we'll have to make do with [/changelog](https://thepaperpilot.org/changelog) which gives a git diff summary for every pushed change, in the form of a [The IndieWeb](/garden/the-small-web/index.md) stream as well as an RSS feed

Written in [Logseq](/garden/logseq/index.md) and rendered with [Vitepress](/garden/vitepress/index.md)

I want to utilize the strategies described in [Andy's working notes](https://notes.andymatuschak.org/About_these_notes?stackedNotes=zPKTSiU725W9WQCqoVPBcxm) to help improve my digital garden

Suggested pages:
- [The Small Web](/garden/the-small-web/index.md)