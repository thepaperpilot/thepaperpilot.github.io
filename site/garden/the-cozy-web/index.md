---
public: "true"
slug: "the-cozy-web"
title: "The Cozy Web"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">The Cozy Web</h1>
<p>45 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

> Referenced by: [Digital Gardens](/garden/digital-gardens/index.md)

The Cozy Web is an extension of the dark forest theory of the Internet

It refers to the part of the web that is not web indexable

This part of the web is known for not typically having ads or marketers

Popularized by [this article](https://maggieappleton.com/cozy-web) written by Maggie Appleton, who has also written a lot about [Digital Gardens](/garden/digital-gardens/index.md)