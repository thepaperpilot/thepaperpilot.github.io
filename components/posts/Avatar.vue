<template>
    <div class="avatar p-author h-card">
        <div class="photo">
            <img class="u-photo" :src="author.image" />
            <div v-if="action" class="action">
                <Icon :name="POST_TYPES[action].icon" />
            </div>
        </div>
        <a class="u-url p-name" :href="author.url">{{ author.name }}</a>
        <time class="dt-published" :datetime="timeString" :title="timeString">
            {{ dateString }}
        </time>
        <ul class="syndications" v-if="syndications.length > 0">
            <Syndication v-for="url in syndications" :url="url" />
        </ul>
        <ul class="tags" v-if="tags.length > 0">
            <li v-for="tag in tags">
                <NuxtLink :to="`/tags/${tag}`">{{ tag }}</NuxtLink>
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import Syndication from './Syndication.vue';
import { POST_TYPES } from '~/post_types';
import type { Author, PostType } from '~/types';

const props = withDefaults(defineProps<{
    author?: Author;
    published: number;
    syndications?: string[];
    tags?: string[];
    action?: PostType;
}>(), {
    author: () => ({
        name: "The Paper Pilot",
        url: "/about",
        image: "/me.jpg"
    }),
    syndications: () => [],
    tags: () => []
});

const timeString = computed(() => new Date(props.published).toLocaleString());
const dateString = computed(() => new Date(props.published).toLocaleDateString());
</script>

<style lang="css" scoped>
.avatar {
    width: 120px;
    margin-right: 30px;
    display: flex;
    flex-direction: column;
}

.avatar > * {
    text-align: center;
    overflow-wrap: break-word;
}

.photo {
    position: relative;
    height: 120px;
}

.u-photo {
    width: 90px;
    height: 90px;
    margin: 15px;
    border-radius: 50%;
}

.action {
    position: absolute;
    bottom: 15px;
    right: 10px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: var(--nord2);
    color: var(--nord4);
    font-size: x-large;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;
}

ul {
    list-style: none;
    padding-left: 0;
    text-align: center;
}

.tags li {
    margin-left: 0;
    display: inline-flex;
}

.tags li::before {
    content: "#";
}
</style>
