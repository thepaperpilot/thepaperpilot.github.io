---
public: "true"
slug: "video-game-monetization"
title: "Video Game Monetization"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Video Game Monetization</h1>
<p>250 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/life-is-strange">Life is Strange</a></details>

## AAA games

They Clcost a lot of money to make, mostly due to the graphics arms race. The price required to make these games profitable would be much higher than the current price of AAA games.

Graphics would not justify significantly higher prices, and AAA studios know this. So instead they use the techniques to make more money without raising the base price:
- Premium Editions
- [MTX](/garden/mtx)
- [Pre-Order Bonuses](/garden/pre-order-bonuses)

## Free-to-play games

Typically utilize [MTX](/garden/mtx) and ads in order to profit. Often extreme cases of designing games to compell players to spend money.

## Indie developers

Trying to make a sustainable living as an indie developer is hard. The industry is packed with lots of competition, and drive prices people are willing to pay very low. Therefore, I don't blame indies for their monetization strategies, even if I consider them unethical or tainting the game design.

## Ethical game monetization

Requirements:
- Free demo
- Paid base game
- No [MTX](/garden/mtx)
- Paid content expansions

The goal of the above is to allow players to determine if they enjoy the game without putting money down, and to ensure the game design cannot be tainted by the monetization.

I think having the gameplay affected by transactions of any kind taints the game design. This is a particularly controversial take in the context of communal benefits (e.g. one person donates and all players get a 2x buff for an hour, or a persistent buff based on number of patrons), which are generally seen as ethical.