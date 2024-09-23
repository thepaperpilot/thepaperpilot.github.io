<template>
    <Aside v-if="doc.taggedBy">
        <h3>Pages tagged "{{ doc.title }}":</h3>
        <ul>
            <li v-for="(link, text) in doc.taggedBy">
                <NuxtLink :to="link">{{ text }}</NuxtLink>
            </li>
        </ul>
    </Aside>
</template>

<script setup lang="ts">
import Aside from "~/components/asides/Aside.vue";
import type { ParsedContent } from '@nuxt/content';

defineProps<{
    doc: ParsedContent;
}>();
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
