---
public: "true"
slug: "book"
title: "Book"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Book</h1>
<p>113 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Tagged by:</summary><a href="/garden/on-authority/index.md">On Authority</a></details>

This is just a tag for books (or other texts) I've read and taken notes on. It won't include books from before I started taking notes on them here.

Keep in mind this is a [Digital Garden](/garden/digital-gardens/index.md), and my notes on books may change long after my initial reading of it as new context or my understanding of the book or its themes change over time.

I'm honestly not sure how exactly I want to use this garden in the context of reading literature and taking notes. For now I think these will feel more like personal notes than the more formal structure I like to leave my pages in.