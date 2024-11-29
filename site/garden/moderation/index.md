---
alias: "Moderate"
public: "true"
slug: "moderation"
title: "Moderation"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Moderation</h1>
<p>365 words, ~2 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/decentralized-moderation/index.md">Decentralized Moderation</a></details>

Moderation, in the context of [Social Media](/garden/social-media/index.md), is the enforcement of rules by removing offending content, and optionally punishing the offender through silencing, banning, or other measures.

What these rules are will typically vary platform to platform, and sometimes even community to community. This stems from different communities having different purposes or goals, along with differing views on what is acceptable speech. For example, a forums for victims of abuse may feature very heavy moderation, or a community for Christians may limit joining the community to only fellow Christians.

## Free Speech

Some platforms try to be very light handed with their moderation, often arguing that infringing on speech is inherently censorship and must be avoided unless it's literally against the law to say. These people are called "Free Speech Absolutists". In practice, most of those advocating for free speech absolutism are just fine censoring speech they disagree with, such as Elon Musk. He has been biased towards his personal views and self interests both in deciding [which government censorship requests X complies with](https://www.socialmediatoday.com/news/elon-musks-push-free-speech-shows-clear-bias-towards-interests/713803/) and promoting [his own posts above others](https://www.theverge.com/2023/2/14/23600358/elon-musk-tweets-algorithm-changes-twitter).

In general, those arguing for less moderation or more free speech are doing so from a position of privilege. In traditional social media, those with more power have more speech (that is, they're more influential), so arguing for free speech is perpetuating the existing power dynamics by giving them lots of speech and removing the ability for more fringe groups to have that hateful content removed. The fringe may criticize, but that won't likely be enough to change anything, as their calls to deplatform those in the ruling class are stymied by arguments for free speech.

However, these concerns regarding free speech would likely be mostly mitigated by [Decentralized Social Media](/garden/decentralized-social-media/index.md) and may lead to overall more lax rules in social media with [Decentralized Moderation](/garden/decentralized-moderation/index.md).

<span id="674531bb-952c-4346-8f0d-febf15e24879"><h2>Blocklists</h2></span>

Blocklists are lists of users someone has blocked, that they then share with the public. Some blocklists even auto update as the creator adds new users to them.

Blocklists are a double edged sword. They can help, for example, marginalized communities block those who wish them harm regularly. However, they centralize power and are often abused. I recommend [this article](https://privacy.thenexus.today/blocklists-in-the-fediverse/) which discusses blocklists and how they help and how they harm, especially with respect to marginalized communities.