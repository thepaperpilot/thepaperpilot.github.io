---
public: "true"
slug: "artificial-intelligence"
title: "Artificial Intelligence"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Artificial Intelligence</h1>
<p>101 words, ~1 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Referenced by:</summary><a href="/garden/command-palettes/index.md">Command Palettes</a></details>

Catch all term that refers to many different things

Generative AI
- Models trained on large amounts of existing human made content in order to produce more of that content
- Copyright concerns over how training data is obtained
	- [What Ethical AI Really Means](https://nebula.tv/videos/philosophytube-what-ethical-ai-really-means/) by Philosophy Tube
		- > Ethical AI cannot exist under Capitalism
- Common Examples
	- LLMs like ChatGPT
		- Some also take voice and video input, like [Gemini](https://gemini.google.com) or [ChatGPT-4o](https://openai.com/index/hello-gpt-4o/)
	- Art generators like [Dall-E](https://openai.com/index/dall-e-3/) or [Midjourney](https://www.midjourney.com/home)

Human + AI cooperation
- ["Cyborgs"](https://www.patreon.com/posts/cyborgs-85486143) by Nicky Case
- Personal AI assistants
	- [Personal vs Personalized AI](https://doc.searls.com/2024/05/10/personal-vs-personalized/)
- [Home-Cooked Software and Barefoot Developers](https://maggieappleton.com/home-cooked-software) discusses how language models can help individuals build personal specialized software