<template>
    <h1>Hello!</h1>
    <p>
        I'm Anthony, or The Paper Pilot, and welcome to my <a href="/garden/digital-gardens">digital garden</a>!
    </p>

    <div class="hero-wrapper">
        <TresCanvas :stencil="true" >
            <TresOrthographicCamera :position="[0, 0, 10]" />
            <TresAmbientLight :intensity="1" />
            <Suspense>
                <Hole />
            </Suspense>
        </TresCanvas>
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

    <p>
        This is a public website collecting all my (public) thoughts and projects all in one place. There are a lot of pages here, that link to each other wiki-style. I suggest starting your browsing with one of the recommended pages that most closely align with your interests :).
    </p>

    <div class="h-feed" id="most-recent-activity">
        <NuxtLink class="u-url" to="#most-recent-activity" style="display: none"></NuxtLink>
        <h2 class="p-name contains-link">
            Most recent <NuxtLink to="/posts" class="u-uid u-url">posts</NuxtLink>
        </h2>
        <VuePost v-for="post in posts" :post="post" :fadeDescription="true" />
    </div>
</template>

<script setup lang="ts">
import { TresCanvas } from '@tresjs/core';
import VuePost from '~/components/posts/Post.vue';
import Hole from "~/components/Hole.vue";
import type { Post } from '~/types';

const xOffset = ref(0);
function mouseMoveHandler(event: MouseEvent) {
    xOffset.value = event.pageX / window.innerWidth - .5;
}
onMounted(() => {
    window.addEventListener("mousemove", mouseMoveHandler);
});
onUnmounted(() => {
    window.removeEventListener("mousemove", mouseMoveHandler);
});

const { data: posts } = await useAsyncData("recent", () => 
    queryContent("posts")
        .sort({ published: -1, $numeric: true })
        .limit(10).find() as Promise<Post[]>, {
    dedupe: 'defer'
});

useHead({
    title: "The Paper Pilot's Digital Garden"
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

.hero {
    height: 80%;
    width: unset;
    margin: auto;
    margin-bottom: 30px;
    position: absolute;
    right: 50%;
    bottom: 0;
    transform: translate(calc(50% + var(--x-offset)), 0%);
    animation: bob 5s ease-in-out infinite;
}

svg {
    display: none;
}

.h-entry {
    margin-top: 30px;
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
