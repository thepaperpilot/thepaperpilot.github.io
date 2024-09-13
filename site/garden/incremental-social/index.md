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

<details><summary>Referenced by:</summary><a href="/garden/federated-identity">Federated Identity</a><a href="/garden/my-personal-website">My Personal Website</a><a href="/now/index">/now</a><a href="/garden/webrings">Webrings</a></details>

<details><summary>Tags:</summary><a href="/garden/my-projects">My Projects</a></details>

[Incremental Social](https://incremental.social/) is a [Fediverse](/garden/fediverse) website hosted by me!

Made explicitly for the incremental games community

Most notably hosts an instance of [Mbin](/garden/mbin), [Forgejo](/garden/forgejo), and [Synapse](/garden/synapse) (and [Cinny](/garden/cinny))
