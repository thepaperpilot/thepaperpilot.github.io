<template>
    <template v-if="doc.referencedBy">
        <h2 id="referenced-by">
            <NuxtLink href="#referenced-by">Pages that reference "{{ doc.title }}":</NuxtLink>
        </h2>
        <ul class="inline">
            <li v-for="(link, text) in doc.referencedBy">
                <NuxtLink :to="link">{{ text }}</NuxtLink>
            </li>
        </ul>
    </template>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';
defineProps<{
    doc: ParsedContent;
}>();
</script>
