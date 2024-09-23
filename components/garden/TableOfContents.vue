<template>
    <Aside>
        <h3>Outline</h3>
        <NuxtLink to="#top" class="to-top">
            <Icon name="material-symbols:vertical-align-top" /> Top
        </NuxtLink>
        <ul>
            <li v-for="({ id, text }) in doc.body.toc.links">
                <NuxtLink :to="`#${id}`">{{ text }}</NuxtLink>
            </li>
            <li v-if="doc.referencedBy">
                <NuxtLink to="#referenced-by">Pages that reference "{{ doc.title }}"</NuxtLink>
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

.to-top {
    margin-top: 16px;
    margin-bottom: 0;
    display: block;
    margin-left: 5px;
}

ul {
    margin-top: 0;
}
</style>
