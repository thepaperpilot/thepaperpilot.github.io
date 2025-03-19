---
public: "true"
slug: "barefoot-developers"
title: "Barefoot Developers"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Barefoot Developers</h1>
<p>235 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

A concept coined by Maggie Appleton for developers who rely on AI tools to make software for themselves and their community. They are not fully blown programmers and have less agency over their creations, but cna service people who aren't being serviced by the far more limited numbers of professional developers.

I actually think using AI to code stuff is potentially a really cool way for people to build custom tools for themselves. The "long tail" of software needs currently aren't being met by professional software, and never will, but AI can enable people to create their "bespoke" software to fill their needs, whatever they may be.

But, there's a big difference between making a tool for personal use, and making a public service people are paying for and will likely try to abuse or break. For that, I don't think it's smart to rely on AI to make stuff for you. This has started happening, has been coined "vibe coding", and has led to very predictable (negative) results.

While Maggie showed things like apps being made this way, I think a potential implementation could be part of [Potluck](/garden/potluck/index.md). That is, you tell an AI your needs, and it writes the rules and the initial document/template. Then you can fill in the template with your real data and start using it.

## Further Reading

https://maggieappleton.com/home-cooked-software