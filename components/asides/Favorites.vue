<template>
    <Aside :order="100">
        <h3>Recommended Pages</h3>
        <ul>
            <li v-for="url in data?.favorites">
                <NuxtLink :to="`/garden/${url}`">{{ data?.pages[url] }}</NuxtLink>
            </li>
        </ul>
        <h3>Meta</h3>
        <ul>
            <li><NuxtLink to="/about">About me</NuxtLink></li>
            <li><NuxtLink to="/friends">Friends</NuxtLink></li>
            <li><NuxtLink to="/blogroll">Blogroll</NuxtLink></li>
            <li><NuxtLink to="/garden/now">/now</NuxtLink></li>
        </ul>
    </Aside>
</template>

<script setup lang="ts">
import Aside from "./Aside.vue";

const { data } = await useFetch('/api/manifest', {
    server: true,
    lazy: false
});
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
