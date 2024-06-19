---
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
<p>73 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

> Referenced by: [Digital Gardens](/garden/digital-gardens/index.md), [Freeform vs Chronological Dichotomy](/garden/freeform-vs-chronological-dichotomy/index.md), [The Small Web](/garden/the-small-web/index.md)

A collection of information that is tied to its creation or edit date

Part of the [Freeform vs Chronological Dichotomy](/garden/freeform-vs-chronological-dichotomy/index.md)

Anything with a "timeline" or "feed" is considered chronological
- Even if there's algorithmic sortings that take things other than creation or edit date into account!

Chronological displays are less suitable as stores of knowledge ([Digital Gardens](/garden/digital-gardens/index.md))

Social media overuses timelines and feeds

RSS feeds work really well with this form of content