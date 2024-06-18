---
public: "true"
slug: "my-personal-website"
title: "My Personal Website"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">My Personal Website</h1>
<p>10 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

> Referenced by: [The Small Web](/garden/the-small-web/index.md)

A [Personal Websites](/garden/the-small-web/index.md) for myself, available at https://thepaperpilot.org
