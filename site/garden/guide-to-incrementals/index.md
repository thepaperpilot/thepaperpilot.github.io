---
public: "true"
slug: "guide-to-incrementals"
title: "Guide to Incrementals"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Guide to Incrementals</h1>
<p>230 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/my-personal-website">My Personal Website</a></details>

This is a comprehensive guide to Incremental Games, a genre of video games. It will explore defining the genre, why it's appealing, and how to design and build your own incremental game. Along the way will be ~~interactive examples~~, snippets from other creators, and relevant material to contextualize everything.

> Note: This is an incomplete document. I want to keep adding opinions and opposing views from other incremental games developers, and add interactive examples to illustrate various points regarding game design and balancing. Consider this a living document - and see the changelog at the end.

## Why am I making this?

That's a good question! What authority do I have to be making this guide? I haven't made the best incremental games, nor the most incremental games, certainly not the most popular ones either. But I do have some formal education in game development, know a lot of incremental game devs (as well as other game devs), and have a passionate interest in ludology, classifying genres, etc. I've also made [a couple of incremental games](/garden/my-projects)) myself.

If you have any additional questions about my credentials or anything on this site, feel free to reach out!

## Ludology
- [Guide to Incrementals/Defining the Genre](/garden/guide-to-incrementals/defining-the-genre)
- [Guide to Incrementals/Appeal to Players](/garden/guide-to-incrementals/appeal-to-players)
- [Guide to Incrementals/Appeal to Developers](/garden/guide-to-incrementals/appeal-to-developers)
- [Guide to Incrementals/What is Content?](/garden/guide-to-incrementals/what-is-content)

## Making an Incremental
- [Guide to Incrementals/Navigating Criticism](/garden/guide-to-incrementals/navigating-criticism)