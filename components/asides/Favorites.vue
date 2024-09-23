<template>
    <Aside>
        <h3>Recommended Pages</h3>
        <ul>
            <li v-for="favorite in favorites">
                <NuxtLink :to="favorite.link">{{ favorite.text }}</NuxtLink>
            </li>
        </ul>
        <h3>Posts</h3>
        <ul>
            <li><NuxtLink to="/tags">Tags</NuxtLink></li>
            <li><NuxtLink to="/types">Types</NuxtLink></li>
            <li>
                <NuxtLink to="/posts" rel="alternate" type="text/mf2+html" title="All posts">
                    All posts
                </NuxtLink>
            </li>
        </ul>
        <h3>Meta</h3>
        <ul>
            <li><NuxtLink to="/about">About me</NuxtLink></li>
            <li><NuxtLink to="/garden/now">/now</NuxtLink></li>
            <li><NuxtLink to="/changelog">Garden changelog</NuxtLink></li>
        </ul>
    </Aside>
</template>

<script setup lang="ts">
import Aside from "./Aside.vue";
import favorites from "~/assets/favorites.json";
</script>

<style lang="css" scoped>
h3 {
    margin-bottom: 0;
}

a {
    color: var(--nord8);
    text-decoration: none;
}
</style>
