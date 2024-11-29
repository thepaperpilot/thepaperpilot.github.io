---
public: "true"
slug: "my-personal-website"
title: "My Personal Website"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">My Personal Website</h1>
<p>422 words, ~2 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/the-small-web/index.md">The Small Web</a><a href="/garden/this-knowledge-hub/index.md">This Knowledge Hub</a></details>

A [Personal Websites](/garden/the-small-web/index.md) for myself, available at https://thepaperpilot.org

## Tech Stack

I use [Logseq](/garden/logseq/index.md) to journal and collect my thoughts on various topics that interest me
- Seafile syncs my logseq files between my devices
- Git syncs my logseq files to a private repo on [Incremental Social](/garden/incremental-social/index.md) for purposes of version control and using as a submodule
- The seafile files and all repos on [Incremental Social](/garden/incremental-social/index.md) are independently backed up daily to backblaze

My logseq files are synced to a private git repo which is added as a submodule to [my website repo](https://code.incremental.social/thepaperpilot/pages)

A [Node.js script](https://code.incremental.social/thepaperpilot/pages/src/branch/master/build_garden.js) pre-processes my logseq files into markdown files in the `/garden` path of the website
- Converts all links and block references
- Adds lists of tags and references to pages
- Adds `<h1 />` titles, word counts, update commits, etc. to each page
- Moves the /now page to [/now](https://thepaperpilot.org/now) instead of /garden/now
- Copies some of the [Guide to Incrementals](/garden/guide-to-incrementals/index.md) pages to [/guide-to-incrementals](https://thepaperpilot.org/guide-to-incrementals/) so as to not break links made before the current site iteration
- Generates [/changelog](https://www.thepaperpilot.org/changelog/) and its RSS, Atom, and JSON feeds
	- The outputs of the generation are NOT .gitignore'd, as I use the git log to determine which pages updated when
<span id="66757760-16ab-4777-976e-8bcbac053923">	- Commit information about when a file was last updated is added via a [data loader](https://vitepress.dev/guide/data-loading) because if it was added to the file directly, rebuilding the site would count as having updated every page, by updating each commit to the changes introduced last build</span>

[Vitepress](/garden/vitepress/index.md) builds a static site from the markdown files
- Includes a custom theme that makes the whole site paper-themed
- Includes some pages like the [homepage](https://thepaperpilot.org) and the [about me page](https://thepaperpilot.org/about) that require markup, thus don't make sense to maintain inside logseq
- The sidebar is generated from my favorited pages within Logseq
- Includes various static files, like copies of several of my games and a [robots.txt](https://www.thepaperpilot.org/robots.txt) (borrowed from [Tracy Durnell](https://tracydurnell.com/)'s [robots.txt](https://tracydurnell.com/robots.txt)) that blocks several crawlers specifically used for training AI models

Three.js is used to create the effect in the background
- Simplex noise gets used to adjust the opacity of a repeating SVG pattern
- Initially tried to use just SVG, which supports creating noise and using it as a mask, but it only does 2d noise and I need 2d slices of 3d noise

Microformats are used to markup the site for [The IndieWeb](/garden/the-small-web/index.md)
- The footer contains a minimal [h-card](https://microformats.org/wiki/h-card) with a link to my full profile
- Each garden page is an [h-entry](https://indieweb.org/h-entry), and the changelog an [h-feed](https://indieweb.org/h-feed)
- All my socials are added as [rel-me](https://indieweb.org/rel-me) links, and the profiles then link back to me (as rel-me links, if allowed by the platform)
	- Together this can verify the owner of this website and those socials are the same person
