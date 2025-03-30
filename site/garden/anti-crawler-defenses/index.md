---
public: "true"
slug: "anti-crawler-defenses"
title: "Anti-Crawler Defenses"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Anti-Crawler Defenses</h1>
<p>410 words, ~2 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

Some sites are getting large amounts of traffic from bots rather than humans, meaning their data is being used for training regardless of consent, and hosts are facing strain for traffic they don't really care about.

Unfortunately, the way these scrapers work is they try to blend in as normal users, often using highly varied IP addresses, locations, and user-agents. This makes it hard to act solely against them without also acting against genuine users. Most accessibility features, like sitemaps, help crawlers just as much as or even more than genuine users.

My site is likely not a major target, and it's a static site that's hosted by GitHub so unlikely to get taken down by a DDOS attempt. But I'm still interested in potential solutions should they become necessary. To be honest, it's these crawlers that probably prompted hetzner to add outgoing data limits/charges, and it's likely those limits/charges that'll prompt me to implement any of these solutions, if I do.

## Proof of Work

Make each request perform some expensive calculations before being served the page. Make the challenges harder during active attacks or when something about the user seems suspicious (e.g. a lot of traffic coming from the same IP range or location).

I'm concerned about this degrading the experience of real users and wasting unnecessary compute resources, causing harm to users' hardware, electricity bill, and the environment. That said, I think the difficult challenges are supposed to be rare, although I suspect VPN users suffer significantly.

[Anubis](https://anubis.techaro.lol/) is an [Open Source](/garden/open-source/index.md) software that'll do this for you.

## Generative Content

Another somewhat ironic approach is to generate content infinitely for crawlers to scrape. Ideally these would be in honeypot paths with invisible links that users wouldn't visit and bots have been told to avoid. For the crawlers ignoring robots.txt they'll find themselves in a labyrinth of links to fake pages of fake content.

[Nepenthes](https://zadzmo.org/code/nepenthes/) will generate content using markov chains in a malicious way that gives it bad training data. It loads the pages slowly in an attempt to slow down the crawlers, but I'm not sure that'll work in practice since they likely parallelize their crawling. They give quite a few warnings about using the software, most notably that good faith crawlers may also fall in the trap and cause you to not get indexed by search engines (but I think a robots.txt entry could fix that). Overall I'm concerned it wouldn't be too hard for the crawlers to detect nepenthes and intentionally avoid it's trap.

[Dadadodo](https://www.jwz.org/dadadodo/) is a similar but much older tool with a very confusing homepage.

Cloudflare has a tool for this called [AI Labyrinth](https://blog.cloudflare.com/ai-labyrinth/), although I'm not a fan of CF's monopoly over the web nor it's use of generate AI for creating the fake content.

## Further Reading

https://thelibre.news/foss-infrastructure-is-under-attack-by-ai-companies/