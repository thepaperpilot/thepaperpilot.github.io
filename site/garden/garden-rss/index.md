---
public: "true"
slug: "garden-rss"
title: "Garden-RSS"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Garden-RSS</h1>
<p>60 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/orchard/index.md">Orchard</a><a href="/garden/rss/index.md">RSS</a><a href="/garden/the-small-web/index.md">The Small Web</a><a href="/garden/this-knowledge-hub/index.md">This Knowledge Hub</a></details>

A theoretical alternative to RSS that's better for [Freeform](/garden/freeform/index.md) content.

Why is it useful?
- [Feeds are not fit for gardening](https://v5.chriskrycho.com/essays/feeds-are-not-fit-for-gardening/)
	- Describes the issues with RSS for [Digital Gardens](/garden/digital-gardens/index.md)
	- Proposes creating an alternative, which they call `grdn`

How should it work?
- Could display changes similar to git diffs

Existing Work
- [`grdn` Specification](https://github.com/chriskrycho/grdn/blob/main/SPEC.md)
- [Proposal to build set of extensions to RSS](https://forum.summerofprotocols.com/t/pig-rss-all-the-things/383)