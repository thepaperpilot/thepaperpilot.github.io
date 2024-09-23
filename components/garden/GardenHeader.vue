<template>
    <p class="garden-header">
        {{ doc.wordCount }} words, ~{{ Math.ceil(doc.wordCount / 183) }} minute read.
        Planted <a
            :href="`https://code.incremental.social/thepaperpilot/pages/commit/${doc.published.hash}`">
            <time :datetime="publishedTime" :title="publishedTime">{{ publishedDate }}</time>
        </a>.
        <template v-if="doc.edited">
            {{ doc.edited }}
            Last tended to <a
                :href="`https://code.incremental.social/thepaperpilot/pages/commit/${doc.edited.hash}`">
                <time :datetime="editedTime" :title="editedTime">{{ editedDate }}</time>
            </a>.
        </template>
    </p>
    <ul class="garden-header inline tagged" v-if="doc.tags">
        <li v-for="(link, text) in doc.tags">
            <NuxtLink :to="link">{{ text }}</NuxtLink>
        </li>
    </ul>
</template>

<script setup lang="ts">
import type { ParsedContent } from '@nuxt/content';

const props = defineProps<{
    doc: ParsedContent;
}>();

const publishedTime = computed(() => new Date(props.doc.published.timestamp).toLocaleString());
const publishedDate = computed(() => new Date(props.doc.published.timestamp).toLocaleDateString());

const editedTime = computed(() => new Date(props.doc.edited.timestamp).toLocaleString());
const editedDate = computed(() => new Date(props.doc.edited.timestamp).toLocaleDateString());
</script>

<style lang="css" scoped>
.garden-header {
    margin-top: -30px;
    margin-bottom: 30px;
}

.tagged::before {
    content: "Tagged";
}
</style>
