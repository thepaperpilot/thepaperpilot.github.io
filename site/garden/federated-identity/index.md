---
alias: "Decentralized Identity"
public: "true"
slug: "federated-identity"
tags: [Decentralized]
title: "Federated Identity"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Federated Identity</h1>
<p>68 words, ~0 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/commune/index.md">Commune</a><a href="/garden/fedi-v2/index.md">Fedi v2</a><a href="/garden/weird/index.md">Weird</a></details>

<details><summary>Tags:</summary><a href="/garden/decentralized/index.md">Decentralized</a></details>

Allow for validating one's identity without relying on a specific centralized server

Implementations:
- Private and public keypairs
- [IndieAuth](https://indieweb.org/IndieAuth) by [The IndieWeb](/garden/the-small-web/index.md)
	- Supported by [Rauthy](https://github.com/sebadob/rauthy) which the [Commune](/garden/commune/index.md) community endorses

Self hosted identity providers are NOT enough to be considered federated identity
- OIDC and OAuth require the service owner to have pre-configured with explicitly allowed identity providers

[Incremental Social](/garden/incremental-social/index.md) uses Zitadel which does NOT support IndieAuth and probably won't