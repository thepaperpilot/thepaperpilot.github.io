---
public: "true"
slug: "the-indieweb/amplification"
title: "The IndieWeb/Amplification"
prev: false
next: false
---
<script setup>
import { data } from '../../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">The IndieWeb/Amplification</h1>
<p>57 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/incremental-social/index.md">Incremental Social</a><a href="/garden/kronos/index.md">Kronos</a></details>

Refers to reblogging (and re-hosting, sometimes) of someone else's content on your own site

[The Internet is a series of webs](https://aramzs.xyz/essays/the-internet-is-a-series-of-webs/)  discusses some ideas and best practices for amplification

To ensure the rehosted content actually came from the claimed author and was not tampered with, all content should be signed using [The IndieWeb/Signature Blocks](/garden/the-indieweb/signature-blocks/index.md)