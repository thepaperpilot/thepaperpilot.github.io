---
alias: "Enshittify"
public: "true"
slug: "enshittification"
title: "Enshittification"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Enshittification</h1>
<p>15 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/decentralized/index.md">Decentralized</a><a href="/garden/the-small-web/index.md">The Small Web</a></details>

Large websites are expensive to operate and are typically owned by corporations. The [Profit Motive](/garden/profit-motive/index.md) of capitalism states that these websites must continuously be trying to make more money, which means if they're not growing users, they must increase how much they're making per user. This process means corporate backed websites become worse for their users over time, which Cory Doctorow coined as [Enshittification](https://pluralistic.net/2023/01/21/potemkin-ai/).