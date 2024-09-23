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

definePageMeta({
    key: route => route.fullPath,
    validate: ({ params }) => typeof params.tag === "string",
});

const route = useRoute();
const tag = computed(() => route.params.tag);

const { data: pages } = await useAsyncData("tag-pages", async () =>
    await queryContent("posts").where({ tags: { $contains: tag.value }}).count()
            .then(count => Math.ceil(count / POSTS_PER_PAGE)),
{
    dedupe: 'defer',
    watch: [tag],
    default: () => 0
});
const page = getPageFromRoute(pages);
const { data: posts } = await useAsyncData("tag-posts", async () =>
    await queryContent("posts")
            .where({ tags: { $contains: tag.value }})
            .sort({ published: -1, $numeric: true })
            .skip((page.value - 1) * POSTS_PER_PAGE)
            .limit(POSTS_PER_PAGE).find() as Post[],
{
    dedupe: 'defer',
    watch: [tag, page],
    default: () => []
});

const capitalized = computed(() =>
    "Posts tagged " + tag.value[0].toUpperCase() + tag.value.slice(1));
const pageText = computed(() => pages.value > 1 ? ` page ${page.value}/${pages.value}` : '');
const title = computed(() => capitalized.value + pageText.value);
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
