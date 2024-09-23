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
import { POST_TYPES } from '~/post_types';
import type { Post, PostType } from '~/types';

const POSTS_PER_PAGE = 20;

definePageMeta({
    key: route => route.fullPath,
    validate: ({ params }) => typeof params.kind === "string" &&
        Object.values(POST_TYPES).some(({ plural }) => plural === params.kind),
});

const route = useRoute();
const kind = computed(() => Object.keys(POST_TYPES).find(type =>
    POST_TYPES[type as PostType].plural === route.params.kind) as PostType);

const { data: pages } = await useAsyncData("tag-pages", async () =>
    await queryContent("posts", kind.value).count()
            .then(count => Math.ceil(count / POSTS_PER_PAGE)),
{
    dedupe: 'defer',
    watch: [kind],
    default: () => 0
});
const page = getPageFromRoute(pages);
const { data: posts } = await useAsyncData("kind-posts", async () =>
    await queryContent("posts", kind.value)
            .sort({ published: -1, $numeric: true })
            .skip((page.value - 1) * POSTS_PER_PAGE)
            .limit(POSTS_PER_PAGE).find() as Post[],
{
    dedupe: 'defer',
    watch: [kind, page],
    default: () => []
});

const plural = computed(() => POST_TYPES[kind.value].plural);
const capitalized = computed(() => plural.value[0].toUpperCase() + plural.value.slice(1));
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
