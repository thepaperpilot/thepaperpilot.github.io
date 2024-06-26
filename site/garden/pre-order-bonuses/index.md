---
public: "true"
slug: "pre-order-bonuses"
title: "Pre-Order Bonuses"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Pre-Order Bonuses</h1>
<p>98 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/video-game-monetization/index.md">Video Game Monetization</a></details>

Pre-order bonuses are benefits given to players who buy a game before it comes out

They primarily serve to benefit the company
- People commit to buying before the embargo date passes
- Heuristic of how well it'll sell after launch
- Slight lead on return on investment
	- More significantly impacts indie studios, who will likely have less cash on hand
- Companies make deals with storefronts to have exclusive bonuses, to drive customers to said storefronts

Common bonuses:
- Digital goods:
	- Soundtrack
	- Cosmetics
	- [Premium Currency](/garden/premium-currency/index.md)
- Physical goods:
	- Typically pins, keychains, etc.
	- Typically only included in physical editions of the game