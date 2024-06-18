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

> Referenced by: [Commune](/garden/commune/index.md), [The Small Web](/garden/the-small-web/index.md)

A theoretical chat system designed to solve the problems of transcribing branching conversations into linear timelines.

Defined by the [Chatting with Glue](https://a9.io/glue-comic/) comic.