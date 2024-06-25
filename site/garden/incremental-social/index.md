---
public: "tags:: My Projects"
slug: "incremental-social"
title: "Incremental Social"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Incremental Social</h1>
<p>20 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

> Referenced by: [Federated Identity](/garden/federated-identity/index.md), [My Personal Website](/garden/my-personal-website/index.md), [/now](/now/index), [Webrings](/garden/webrings/index.md)

> Tags: [My Projects](/garden/my-projects/index.md)

[Incremental Social](https://incremental.social/) is a [Fediverse](/garden/fediverse/index.md) website hosted by me!

Made explicitly for the incremental games community

Most notably hosts an instance of [Mbin](/garden/mbin/index.md), [Forgejo](/garden/forgejo/index.md), and [Synapse](/garden/synapse/index.md) (and [Cinny](/garden/cinny/index.md))
