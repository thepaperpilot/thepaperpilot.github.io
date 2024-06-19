---
title: Hello!
prev: false
next: false
---
# Hello!

I'm Anthony, or The Paper Pilot, and welcome to my [digital garden](/garden/digital-gardens/index.md)!

<div class="hero-wrapper">
  <div class="hole"></div>
  <img class="hero" src="/paperpilot.png" :style="`--x-offset: ${xOffset * 20}%`" />
</div>

<svg>
  <filter id="displacementFilter">
    <feTurbulence
      type="turbulence"
      baseFrequency="0.01"
      numOctaves="5"
      result="turbulence" />
    <feDisplacementMap
      in2="turbulence"
      in="SourceGraphic"
      scale="100"
      xChannelSelector="R"
      yChannelSelector="G" />
  </filter>
</svg>

This is a public website collecting all my (public) thoughts and projects all in one place. There are a lot of pages here, that link to each other wiki-style. I suggest starting your browsing with one of the recommended pages that most closely align with your interests :).

<script setup>
  import { ref, onMounted, onUnmounted } from "vue";

  const xOffset = ref(0);
  function mouseMoveHandler(event) {
    xOffset.value = event.pageX / window.innerWidth - .5;
  }
  onMounted(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
  });
  onUnmounted(() => {
    window.removeEventListener("mousemove", mouseMoveHandler);
  });
</script>

<style scoped>
  .hero-wrapper {
    height: 16lh;
    position: relative;
  }

  @media (max-width: 700px) {
    .hero-wrapper {
      height: 12lh;
    }
  }

  @media (max-width: 500px) {
    .hero-wrapper {
      height: 10lh;
    }
  }

  @media (max-width: 400px) {
    .hero-wrapper {
      height: 9lh;
    }
  }

  .hole {
    height: 80%;
    aspect-ratio: 1;
    border: solid 10px lightgrey;
    border-radius: 50%;
    background: #3b4252;
    position: absolute;
    left: 33%;
    transform: translateX(-50%);
    filter: url(#displacementFilter);
  }

  .hero {
    height: 80%;
    width: unset;
    margin: auto;
    position: absolute;
    right: 50%;
    bottom: 0;
    transform: translate(calc(50% + var(--x-offset)), 0%);
    animation: bob 5s ease-in-out infinite;
  }

  svg {
    display: none;
  }

  @keyframes bob {
    0% {
      transform: translate(calc(50% + var(--x-offset)), -10%);
    }
    50% {
      transform: translate(calc(50% + var(--x-offset)), 10%);
    }
    100% {
      transform: translate(calc(50% + var(--x-offset)), -10%);
    }
  }
</style>
