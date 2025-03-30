---
public: "true"
slug: "personality"
title: "Personality"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Personality</h1>
<p>143 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/identity/index.md">Identity</a></details>

I think personality is best explained with a combination of Social Identity Theory and Self Categorization Theory
- Social Identity Theory
	- Posits that significant amount of our personality is derived from our membership in various social groups
	- People categorize themselves and others into groups based on nationality, gender, profession, interests, etc.
	- The groups one feels they most identity with end up shaping one's behaviors
	- Also leads to discrimination and out-group homogeneity
- Self Categorization Theory
	- People act in ways that they perceive as typical for the members of the group they identify with
	- Can lead to viewing oneself as an embodiment of the group prototype rather than a unique individual
- I believe people adopt core identities and then subconsciously use their perception of how people with those identities as a mnemonic for how they should behave
- [Gender Performativity](/garden/gender-performativity/index.md) maps cleanly onto these theories