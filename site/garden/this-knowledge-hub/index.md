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
<p>242 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/constructivism/index.md">Constructivism</a><a href="/garden/digital-gardens/index.md">Digital Gardens</a><a href="/garden/efficiency/index.md">Efficiency</a><a href="/garden/logseq/index.md">Logseq</a></details>

This is my knowledge hub! It's a [Digital Garden](/garden/digital-gardens/index.md) collecting my thoughts in varying levels of completeness on basically anything I have interest in. It's wiki-style, but not like Wikipedia. Each page is going to be biased and argumentative, and based on my understanding of the concept at the time of writing (with regular updates to reflect new understandings). On the more fleshed out articles I'll typically adopt the structure of a persuasive essay and include sources.

Since starting this digital garden, I've been writing a _lot_. Brief hiatuses aside, I'm writing on _something_ nearly every day. I keep a lot of pages private, including all my daily journal pages, and only make a garden page public once I'm sufficiently happy with the state of it. As time goes on, I should also update and improve older pages to meet any increase in standards new pages have. This process of writing and updating pages has really helped me collect my thoughts and essentially check my understanding of a topic. This is how I learn new things; its a [Constructivist](/garden/constructivism/index.md) approach.

I write to my garden using [Logseq](/garden/logseq/index.md). For more details on how the site gets generated and hosted, check out the page on [My Personal Website](/garden/my-personal-website/index.md). Of note, pushing garden page updates to the site is not an automatic process (which applies to bridged timeline posts as well, such as from Youtube or Github), so it's possible I'll have updated pages locally but they're not reflected in the site immediately.

Until something like [Garden-RSS](/garden/garden-rss/index.md) exists, we'll have to make do with [/changelog](https://thepaperpilot.org/changelog) which gives a git diff summary for every pushed change, in the form of a [The IndieWeb](/garden/the-small-web/index.md) stream as well as an RSS feed.