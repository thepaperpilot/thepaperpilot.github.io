<template>
    <NotFound v-if="pages === 0" />
    <div class="h-feed" v-else>
        <h1><span class="p-name">{{ capitalized }}</span>{{ pageText }}</h1>
        <VuePost v-for="post in posts" :post="post" :fadeDescription="true" />
        <Pagination :currentPage="page" :totalPages="pages" :use-navigation="true" />
    </div>
</template>

<script setup lang="ts">
import VuePost from '~/components/posts/Post.vue';
import type { Post } from '~/types';

const POSTS_PER_PAGE = 20;

const { data: pages } = await useAsyncData("all-pages", async () =>
    await queryContent("posts").count()
            .then(count => Math.ceil(count / POSTS_PER_PAGE)),
{
    dedupe: 'defer',
    default: () => 0
});
const page = getPageFromRoute(pages);
const { data: posts } = await useAsyncData("all-posts", async () =>
    await queryContent("posts")
            .sort({ published: -1, $numeric: true })
            .skip((page.value - 1) * POSTS_PER_PAGE)
            .limit(POSTS_PER_PAGE).find() as Post[],
{
    dedupe: 'defer',
    watch: [page],
    default: () => []
});

const capitalized = "All posts";
const pageText = computed(() => pages.value > 1 ? ` page ${page.value}/${pages.value}` : '');
const title = computed(() => capitalized + pageText.value);
if (pages.value == 0) {
    useHead({
        title: '404 | The Paper Pilot',
        meta: [
            { name: 'description', content: "Page not found." }
        ]
    });
} else {
    useHead({
        title,
        meta: [
            { name: 'description', content: "The Paper Pilot\'s Digital Garden" },
            { property: 'og:image', content: "/paperpilot_thumb.png" },
        ],
    });
}
</script>
