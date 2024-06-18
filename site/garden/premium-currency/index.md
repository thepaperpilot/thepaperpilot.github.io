---
public: "true"
slug: "premium-currency"
title: "Premium Currency"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Premium Currency</h1>
<p>71 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

> Referenced by: [Pre-Order Bonuses](/garden/pre-order-bonuses/index.md)

A popular form of [MTX](/garden/mtx/index.md) where instead of receiving a useful item or effect directly, you receive a currency that is then spent on an in game store

Reasons companies use them
- Abstracts the real world price of items
	- No strict conversion ratio
	- Discounts for bulk purchasing
	- Small amounts given for free based on story progression or watching ads
- Consolidates smaller purchases into a larger one (decreasing friction of individual purchases)