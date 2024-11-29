---
alias: "The IndieWeb, Personal Web, Personal Websites, IndieWeb"
public: "true"
slug: "the-small-web"
title: "The Small Web"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">The Small Web</h1>
<p>731 words, ~4 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/commune/index.md">Commune</a><a href="/garden/decentralized-identity/index.md">Decentralized Identity</a><a href="/garden/digital-locality/index.md">Digital Locality</a><a href="/garden/fedi-v2/index.md">Fedi v2</a><a href="/garden/my-personal-website/index.md">My Personal Website</a><a href="/garden/the-indieweb/signature-blocks/index.md">The IndieWeb/Signature Blocks</a><a href="/garden/this-knowledge-hub/index.md">This Knowledge Hub</a><a href="/garden/webrings/index.md">Webrings</a><a href="/garden/weird/index.md">Weird</a></details>

The small web (also known as the indie web, personal web, the web revival movement, and other terms) refers to small, personal, independent websites. It is seen as a direct alternative to the centralized and homogenized websites like X, Meta, and TikTok. [My Personal Website](/garden/my-personal-website/index.md) is part of the small web!

## Motivation behind the small web

### The modern web is bad

The small web is, at its roots, a direct response to the issues with the modern web:

The modern web is dominated by a handful of large websites, sometimes referred to as the "corporate web". These websites limit personalization, how you can use the website, and are filled with ads, marketers, and influencers.

The corporate web is designed for consuming content created by a few large/popular creators. This manifests in the near-ubiquitous infinitely scrolling feed of algorithmically chosen posts, optimized to keep you on the site for as long as possible, to the detriment of society.

Large websites, due to the profit motive, will naturally [Enshittify](/garden/enshittification/index.md).

### The old web was good

In contrast to the above, the classic web was filled with many diverse sites that typically represented a single person or organization, who were able to fully tailor their site to what they wanted it to be. Websites would be more unique and interesting, since the creator would have full control over them. This also makes the whole web feel more personal and intimate, as you're looking at a closer representation of how someone chooses to portray themselves online, in a way a profile page on X or Meta cannot be.

There are still lessons we've learned over time that can apply to modern "small web" pages, like accessible design and how to be more inclusive.

### The small web is anti-corporate

Small static websites are very cheap to host, making anti-features like ads unnecessary and therefore rare. In general small websites are cheap enough to avoid needing to think about monetization entirely, let alone worrying about how to perpetually make more money. This lack of profit motive behind most small websites contributes to a culture of not just being "not corporate", but "anti-corporate".

In general, the corporate web seems to have values that align with those of authoritarianism - control, surveillance, and hierarchy, whereas the small web aligns with anarchist values - autonomy, cooperation, and egalitarianism.

### Further reading

These are videos and articles that continue expanding on the values and motivations behind the small web as an alternative to the corporate web:
- [What is the small web?](https://ar.al/2020/08/07/what-is-the-small-web/)
- [Reweirding the web](https://webdirections.org/blog/reweirding-the-web/)
- [The web has lost its soul](https://www.youtube.com/watch?v=00qwzmMrtok)
- [You should check out the indie web](https://www.youtube.com/watch?v=rTSEr0cRJY8)

## Browsing the small web

Follow [Webrings](/garden/webrings/index.md) or other links from known small websites.

[Marginalia](https://search.marginalia.nu) is a search engine for non-commercial content with a "random" button and filters for the small web explicitly (amongst other useful filters!)

The [Tildeverse](https://tildeverse.org/) contains a large set of personal websites.
- Pick one of the member sites, and they'll have a list of all their users, who each have a custom page. Some may also list most recently updated pages, which is a good way of filtering out default pages.
- You may also consider joining one of these communities. They're effectively shared Linux computers, with a focus on small tight knit communities as an alternative to social media. Great if you're interested in learning Linux and command line utilities!

## Building personal websites

[IndieWeb](https://indieweb.org/) contains various information and resources on building personal websites that use open standards to better interact with readers and other sites consistently. Check out [IndieWebify Me](https://indiewebify.me/) to get assistance implementing their standards.

<span id="665b6ac0-d3ca-41d8-9534-929ac2907c2e">Free hosting for static websites:</span>
- [Neocities](https://neocities.org). Also check out their tutorials to [Learn How to Make Websites!](https://neocities.org/tutorials)
- [mmm.page — Your Corner of the Internet](https://mmm.page/)
- [Codeberg pages](https://codeberg.page) (and any other [pages-server](https://codeberg.org/Codeberg/pages-server) instance - like on [Incremental Social](https://incremental.social/pages)!)
- [Github pages](https://pages.github.com)
- [Weird](/garden/weird/index.md) (in development)

Other resources:
- [32-bit cafe](https://32bit.cafe/)

### [Streams](https://indieweb.org/stream)

[Microsub](https://indieweb.org/Microsub) is a proposed protocol to support hosting streams of content on personal websites in a way they can be consistently ingested by microsub clients. This way, people could subscribe to multiple streams on independent websites and get them in one feed. Through this, the indie web becomes a [Federated Social Media](/garden/fediverse/index.md).

Streams also allow your personal website to be the one source of truth for your posted content, in a concept called [POSSE](https://indieweb.org/POSSE) - Publish (on your) Own Site, Syndicate Elsewhere (other social media sites). This would effectively solve the problems described in [Hey Creators, Please Make Firehoses!](https://jonbell.medium.com/hey-creators-please-make-firehoses-8d0c48c075e4)

Multiple streams can be hosted by one site/person so people can subscribe to the kind of content they're interested in.

### [Digital Gardens](/garden/digital-gardens/index.md)

These sites may be useful to occasionally check up on rather than get notifications from on every post/change
- Although [Garden-RSS](/garden/garden-rss/index.md) could allow those who want to receive notifications to do so

### The future

[The Internet is a series of webs](https://aramzs.xyz/essays/the-internet-is-a-series-of-webs/) talks about transitioning from our current consolidated web back to the indie web
