---
public: "true"
slug: "command-palettes"
title: "Command Palettes"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Command Palettes</h1>
<p>117 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

Command palettes are a design pattern where apps expose functionality through a search bar

Typing what you want is almost certainly easier and faster than finding the action in some submenu or remembering an arcane hotkey
- Especially with fuzzy search that also looks through descriptions of actions
- Command palettes scale very well with large amounts of actions

[Artificial Intelligence](/garden/artificial-intelligence) will make command palettes increasingly powerful
- Eventually these may become conversational interfaces

Maggie Appleton discusses this pattern in her article on [Command K Bars](https://maggieappleton.com/command-bar)
- The name comes from the fact many apps use the ctrl/cmd k shortcut to open the command palette

Many softwares I use have some form of command palette
- Linear
- [Logseq](/garden/logseq)
- Visual Studio Code