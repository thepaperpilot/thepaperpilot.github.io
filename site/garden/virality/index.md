---
public: "true"
slug: "virality"
title: "Virality"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Virality</h1>
<p>324 words, ~2 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/digital-locality/index.md">Digital Locality</a></details>

Virality is the ability of something to "go viral" on a network - spread far and wide throughout the network. On traditional social media, this refers to how influencers and advertisers will have their content spread, but also specific posts from smaller posters can get picked up by the algorithm and spread as well.

Since there's only so much of people's attention to go around, social media has been described as an "attention economy". Under this framework, one could argue that social media is designed for "wealth accumulation", elevating a handful of accounts to celebrity status and limiting the reach of the masses. This dynamic much reflects the class antagonisms in a [Neoliberal](/garden/neoliberalism/index.md) economy.

## Non-consensual virality

On traditional social media, posts can be picked up by the algorithm and spread far and wide,  causing the author to be inundated with unwanted attention, including negative or hateful attention. This can and has caused serious harm for both [businesses](https://sarah-geri.medium.com/you-dont-want-to-go-viral-dace46a91bee) and especially [individuals](https://embedded.substack.com/p/going-viral-sucks-even-more-now). Traditional social media doesn't [differentiate between the "living room" and "public square"](https://discuss.coding.social/t/discuss-sx-anti-pattern-reply-sigh-aka-reply-guy/531/2), which enforces this behavior. [Digital Locality](/garden/digital-locality/index.md) could help with this by its tendency to limit the reach of individual people or posts.

## Movements on the fediverse

The [Fediverse](/garden/fediverse/index.md) has been criticized for being "anti-viral", as described by Dr. Jonathan Flowers in a series of posts on [whether the 2020 BLM movement could have happened on the fediverse](https://mas.to/@shengokai@zirk.us/109723062349528947).

Dr. Flowers argues that the success of BLM was dependent on the movement not relying on any specific person or post, but rather having the "cripthevote' hashtag that was visible platform wide and allowed people to see many posts about the movement and check for updates in realtime.

However, on the fediverse hashtags are instance local. This means they have to "jump" between instances (or escape, as he refers to it) in order to spread. This makes the movement much harder to spread across the federated network.

This may be solved by more properly [Decentralized Social Media](/garden/decentralized-social-media/index.md), since without a concept of instances there would naturally no longer be instance-local hashtags. Decentralized moderation would also give more agency to individuals, who can then participate in movements on a case-by-case basis rather than the instance potentially making that decision for them.