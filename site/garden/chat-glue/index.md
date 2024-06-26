---
public: "true"
slug: "chat-glue"
title: "Chat Glue"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Chat Glue</h1>
<p>23 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/commune/index.md">Commune</a><a href="/garden/my-personal-website/index.md">My Personal Website</a><a href="/garden/the-small-web/index.md">The Small Web</a></details>

A theoretical chat system designed to solve the problems of transcribing branching conversations into linear timelines.

Defined by the [Chatting with Glue](https://a9.io/glue-comic/) comic.