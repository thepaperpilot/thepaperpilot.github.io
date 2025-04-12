---
public: "true"
slug: "rss"
title: "RSS"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">RSS</h1>
<p>239 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

I've used RSS in the past and present (with a ~decade long gap in there somewhere). I think its fascinating and great, allowing people to consolidate information from many sources into one feed, and allowing essentially limitless client customization.

However, as more and more services build their "walled gardens", RSS feeds can be harder and harder to come by, and I'm not a huge fan of adding additional dependencies in the form of 3rd party services that parse pages or emails and send them to feeds. Indeed, even the RSS service itself can be relatively centralized. To that end I like the idea of local software that supports adding RSS feeds locally, like Thunderbird. It would be cool to see a local-first alternative come up eventually that additionally uses a sync engine to keep read status synced between devices.

Of course, there's also the issue of RSS not handling non-chronological content, but I describe that issue and a potential solution in [Garden-RSS](/garden/garden-rss/index.md).

Currently I selfhost miniflux for myself, and I've followed many different feeds on YT, nebula, and various blogs and comics. I also follow various github release pages so I know when they update. I treat the feed as more of a "to-do" list, but I'll still browse YT directly when I'm just looking for _something_ to watch. I want to decrease how much time that is, though.