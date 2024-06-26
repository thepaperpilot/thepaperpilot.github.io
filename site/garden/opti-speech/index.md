---
public: "true"
slug: "opti-speech"
tags: [My Projects]
title: "Opti-Speech"
prev: false
next: false
---
<script setup>
import { data } from '../../git.data.ts';
import { useData } from 'vitepress';
const pageData = useData();
</script>
<h1 class="p-name">Opti-Speech</h1>
<p>312 words, ~2 minute read. <span v-html="data[`site/${pageData.page.value.relativePath}`]" /></p>
<hr/>

<details><summary>Tags:</summary><a href="/garden/my-projects/index.md">My Projects</a></details>

In college I continued development on the Opti-Speech project, originally built alongside the scientific paper [Opti-speech: a real-time, 3d visual feedback system for speech training](https://www.researchgate.net/profile/Thomas-Campbell-11/publication/354182612_Opti-speech_a_real-time_3d_visual_feedback_system_for_speech_training/links/6424679ca1b72772e4360fa2/Opti-speech-a-real-time-3d-visual-feedback-system-for-speech-training.pdf)

## The Original Project

The Optispeech project involves designing and testing a real-time tongue model that can be viewed in a transparent head while a subject talks — for the purposes of treating speech errors and teaching foreign language sounds. This work has been conducted in partnership with Vulintus and with support from the National Institutes of Health (NIH).

<div class="img-container"><img src="/garden/system-architecture-600_1717384793933_0.jpg" title="system-architecture-600.jpg"/></div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/9uHqIRs7ZjM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="display: block; margin: auto;"></iframe>

This video shows a talker with WAVE sensors placed on the tongue hitting a virtual target sphere located at the alveolar ridge. When an alveolar consonant is hit (e.g., /s/, /n/, /d/) the sphere changes color from red to green.

<iframe width="560" height="315" src="https://www.youtube.com/embed/Oz42mKvlzqI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="display: block; margin: auto;"></iframe>

This video shows an American talker learning a novel sound not found in English. When the post-alveolar consonant is hit, the target sphere changes color from red to green. Here, the NDI WAVE system serves as input.

## My Work

As the sole programmer at UT Dallas Speech Production Lab at the time, my changes involved updating to a more modern version of Unity, improving the interface, in general cleaning up tech debt so it can more easily support new features, and added support for additional EMA systems, namely the Carstens AG501.

<div class="img-container"><img src="/garden/new-interface_1717384734845_0.png" title="new-interface.png"/></div>

In addition, the program now includes documentation and unit tests to improve program stability and maintainability going forward.

<div class="img-container"><img src="/garden/documentation_1717384823218_0.png" title="documentation.png"/></div>

<div class="img-container"><img src="/garden/unittests_1717384825666_0.png" title="unittests.png"/></div>