---
public: "true"
slug: "potluck"
title: "Potluck"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Potluck</h1>
<p>151 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/barefoot-developers/index.md">Barefoot Developers</a><a href="/garden/orchard/index.md">Orchard</a></details>

A project by ink and switch detailing "dynamic documents": essentially text documents with several rendering rules that can highlight text, add annotations to the text, or even add inputs like buttons or sliders that change parts of the text. A big emphasis is on the fact that the text document is fully freeform, allowing any kind of notes or other text between the parts the rules apply to, so as to not limit the user like a traditional GUI would.

It was only implemented as a demo, but I'd really like to see it implemented for real. I think it has a lot of potential.

Besides the practical side of it, I could see it being used for a game all about having to track and perform a large number of tasks, and you design a potluck file to help optimize your performance.

## Further Reading

https://www.inkandswitch.com/potluck/