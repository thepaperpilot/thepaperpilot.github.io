---
alias: "GenAI"
public: "true"
slug: "generative-ai"
title: "Generative AI"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Generative AI</h1>
<p>1066 words, ~6 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

Generative AI is the use of artificial intelligence to take some inputs (e.g. a prompt, a matrix of noise, etc.) and generate some form of media (text, image, video, or audio).

This is an ongoing trend in computer science that has been fairly controversial, to say the least. I'm a programmer working at a company that uses GenAI, which certainly brings about some mixed feelings.

For what it's worth, I'm not going to be going into detail on how GenAI works. There's plenty of resources out there, and I'm not interested in explaining how machine learning, transformers, diffusion, etc. all work. This page is going to more go over the ethics and impact of it all.

## Training Data

I have some complicated feelings towards [Copyright](/garden/copyright/index.md). If it weren't for capitalism, I'd be totally down with the default being that information _ought_ to be free, but I think an exception for requesting content not be used for AI training.

For right now, though, the policy should absolutely be to expect _explicit_ consent for use in training, or wait for copyright to expire. It's quite frustrating that companies double dip and withold their creations from the public domain yet completely ignore copyright when there's profit to be made.

Their indiscriminate scraping has also put a lot of strain on a lot of websites, including [Incremental Social](/garden/incremental-social/index.md).

For what it's worth, [this data](https://www.visualcapitalist.com/sp/global-ai-opinion/) on AI sentiments seems to mirror my thoughts, where China is a stark outlier in how much they think AI is helpful, while also being quite socialist as well as not caring much for copyright.

## Environmental Cost

Obviously, machine learning is a relatively expensive process. There are a LOT of operations to be performed, and despite the optimizations from chip manufacturers, models continue to get larger and larger and require ever more resources to train and use. But there's levels to it, and it doesn't seem like (all) forms of generative AI are necessarily prohibitively bad for the environment.

LLMs are, compared to the other forms of generative AI, not _too_ bad and offer the most clear pathways to optimize further.

Training varies upon a lot of factors but is in the realm of dozens to hundreds of annual household emissions each, and uses as much water as several households in a year. And these numbers are expected to grow substantially as models proliferate and grow in size: https://generative-ai-newsroom.com/the-often-overlooked-water-footprint-of-ai-models-46991e3094b6. This is concerning - I hope the hype dies down, the bubble pops, and this growth doesn't end up coming to fruition. It'd also help if people collaborated and shared more rather than reinventing the same models over and over, but capitalism/copyright are unlikely to allow that.

The actual usage of an LLM is much smaller, in the realm of performing a couple Google searches. With quantization, smaller specialized models, etc. the actual usage of the models is fairly negligible.

Other forms of AI generation are much worse. They retain the high training cost, but are also so expensive to run that in some cases it'll even _exceed_ the training costs, both in terms of energy and water.

And I should clarify: we have already been on a very bad path with respect to the environment, even before AI. We have a LOT to do to reduce consumption of resources and switching to renewable sources of energy.

## Quality

A big question surrounding generative AI is whether it's even worth the above issues. These images are often not very good to look at, videos lack temporal consistency, and LLMs hallucinate regularly.

This is an aspect that is going to change very rapidly, so I don't want to take a hard-line stance here. But I do think AI is being used for situations where it's simply not the best tool for the job. I don't enjoy reading generated text and don't want generative AI movies, books, music, or other forms of art.

I think AI can be used in specific use cases well, though. In particular I think it's fine when answering queries on text that's included in the models context: this includes tasks like asking for feedback on human made text (like an article), summarizing notes you took in class, or even asking questions based on those notes. Perhaps AI chatbots could even be used by those with [Fictophilia](/garden/fictophilia/index.md).

LLMs are once again basically the only form of generative AI I'm even a little understanding towards, though. There are simply far fewer (if any) use cases for generated art etc. as a tool rather than just creating slop, and as mentioned they also use much more energy and water.

Also, I'm skeptical of using "vibe coding" on any decently sized projects, and that it doesn't help people learn to code and could even contribute to experienced programmers atrophying.

## Dead Internet Theory

AI slop is ruining the internet, filling it with low quality content, misinformation, etc. for ulterior motives. I want a internet with human made content with artistic intent. We're going to need to employ tools like [Digital Locality](/garden/digital-locality/index.md) to avoid bots and AI generated content.

## Accessibility

One big argument I've seen _for_ AI is that they can help people who would otherwise struggle with certain tasks. Someone bad at writing can use AI to clean it up, or someone who's bad at art can make a game that requires it.

I do not want to be ableist and generally consider most affordable made for accessibility quite reasonable. It as an argument for AI doesn't quite make sense to me - I think a spellchecker will typically suffice, and there's plenty of royalty free art and music out there for your personal projects that don't require burning a forest to make. But as the technology improves perhaps I can be persuaded it's okay to use for cleaning up writing and stuff. Until then, I'd suggest just asking for feedback but making the changes manually.

Honestly, I do think natural language interfaces will become increasingly common for a variety of tools, where appropriate. They're similar to a command palette in that they make it easier to access a plethora of actions.