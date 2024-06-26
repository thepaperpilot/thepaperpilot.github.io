---
public: "true"
slug: "weird"
title: "Weird"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Weird</h1>
<p>114 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/commune/index.md">Commune</a><a href="/garden/fedi-v2/index.md">Fedi v2</a><a href="/garden/my-personal-website/index.md">My Personal Website</a><a href="/garden/the-small-web/index.md">The Small Web</a></details>

[Weird](https://weird.one) is an [Open Source](/garden/open-source/index.md) project by the [Commune](/garden/commune/index.md) team currently in development

Aims to make creating [Personal Websites](/garden/the-small-web/index.md) with [Federated Identity](/garden/federated-identity/index.md) available to everyone
- Also plans on having paid tiers for giving people access to single user instances of various [Fediverse](/garden/fediverse/index.md) tools

Long term, Weird wants to build a new better fediverse
- It's being built on [Iroh](https://iroh.computer), which allows for decentralized identities that are not reliant on any specific servers continuing to exist
- Their current plans are laid out in [Next Gen Federation on Iroh: Graph Data & Linked Documents Layers](https://github.com/commune-os/weird/discussions/32)
- Erlend discusses some of the implications for identity specifically in [Weird Netizens](https://blog.erlend.sh/weird-netizens)
- I have my own high level take on how this new fediverse would look like in [Fedi v2](/garden/fedi-v2/index.md)