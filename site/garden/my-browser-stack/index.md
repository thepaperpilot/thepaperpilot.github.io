---
public: "true"
slug: "my-browser-stack"
title: "My Browser Stack"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">My Browser Stack</h1>
<p>447 words, ~2 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

This is the list of tools I use for browsing the internet in a safe way that ensures it's a pleasant experience.

## Browser

I've used a lot of browsers over time, and currently use [Zen](https://zen-browser.app/) because of it's modern look. At this point I really just recommend any fork of Firefox (such as Zen). Mozilla has seen its fair share of controversy, but nowhere near the amount Google has, and it's worth using a Firefox based browser in order to fight the chrome monopoly.

Other great Firefox forks to look at are [librewolf](https://librewolf.net/) and [waterfox](https://www.waterfox.net/), which are privacy centric and lightweight and run faster than stock firefox.

## Extensions

A classic recommendation you've probably already heard, [uBlock Origin](https://ublockorigin.com/) is a requirement for browsing the internet. Ads spy on you and significantly degrade your browsing experience, and this extension fixes that. Gorhill, it's creator, deserves so much appreciation for the service they've done to the entire world.

### Youtube

If you browse YouTube in your browser, you might be interested in these extensions as well:

[Sponsorblock](https://sponsor.ajay.app/) uses crowd sourced information on YouTube videos to automatically skip past parts you don't care about, like sponsor reads or calls to like or subscribe.

[DeArrow](https://dearrow.ajay.app/) uses crowd sourced information on YouTube videos to replace the original titles with more descriptive ones (to avoid click bait). It'll also replace thumbnails with random frames from the video itself. Note this extension asks for a $1 donation or to request free access, which can take a few hours (but you can "trial" the extension in the meantime).

## Search

With the advent of AI generated content, it has become much more difficult to search the web. Here's some techniques to find useful, original, human made resources.

If you'd like to clean up your mainstream search engine results(Google, DuckDuckGo, or Bing), you can use the [Huge AI Blocklist](https://github.com/laylavish/uBlockOrigin-HUGE-AI-Blocklist). The list works with uBlock Origin, but they recommend using [uBlacklist](https://addons.mozilla.org/en-US/firefox/addon/ublacklist/), an extension specifically for blocking certain Google search results.

If you're willing to pay, [Kagi](https://kagi.com/welcome) is a premium search engine you may be interested in. Being a paid service, it doesn't rely on ads or tracking to make a profit, and has a great reputation for high quality results and additional features free search engines don't have like personalized rankings for domains.

There is also an independent search engine called [Marginalia](https://search.marginalia.nu/) that designed to show you non commercialized sites that are typically smaller and independent, which acts as a great filter to only see human made resources.

Finally, if your goal is just privacy, the extension mentioned in the following section will help redirect you to alternative search engines as well.

## Privacy respecting front ends

There are many projects out there that offer sites you can go to that interface with popular but not privacy respecting websites like YouTube or Twitter. This is personally a bit overkill for me, but I've considered using them in the past. Rather than looking up each alternative directly and finding a working instance, I recommend just using a regularly maintained extension that automatically redirects you from the popular site to a working instance of the alternative frontend, like [Privacy Redirect](https://github.com/SimonBrazell/privacy-redirect).