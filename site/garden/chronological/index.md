---
alias: "Feeds"
public: "true"
slug: "chronological"
title: "Chronological"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Chronological</h1>
<p>82 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/freeform/index.md">Freeform</a></details>

A collection of information that is displayed as a feed or timeline, as opposed to [Freeform](/garden/freeform/index.md) content . These are not suitable as stores of knowledge, but work well with RSS.

Feeds can also refer to algorithmic feeds, despite them not being chronological. I think algorithmic feeds caused a lot of the problems with [Social Media](/garden/social-media/index.md) today, and hope freeform will do better. That's not to say feeds have no use or utility, just that they're overused to our collective detriment.