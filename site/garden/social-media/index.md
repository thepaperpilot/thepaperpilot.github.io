---
alias: "Social Web"
public: "true"
slug: "social-media"
title: "Social Media"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Social Media</h1>
<p>98 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/commune/index.md">Commune</a><a href="/garden/fediverse/index.md">Fediverse</a></details>

Traditional social media
- Not [Decentralized](/garden/decentralized/index.md)
	- Can't choose your own rules, sorting methods, data queries, etc.
- Overrun by scams and ads and influencers

[Federated Social Media](/garden/fediverse/index.md)
- Partially [Decentralized](/garden/decentralized/index.md)
	- Self hosting is too hard for everyone to do
	- Still subject to instance's moderation, limitations, etc.
- Users need to pick an instance, associating their identity with one specific group
	- People belong to many groups
	- The person is permanently associated with that one group
	- You have to pick before getting a "trial period" to ensure you actually like that group/instance

My take on an ideal social media [Fedi v2](/garden/fedi-v2/index.md)
