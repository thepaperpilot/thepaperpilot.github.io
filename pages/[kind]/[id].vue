<template>
    <main>
        <NotFound v-if="post == null" />
        <VuePost v-else :post="post" />
    </main>
</template>

<script setup lang="ts">
import type { Post, PostType } from '~/types';
import VuePost from '~/components/posts/Post.vue';
import { POST_TYPES } from '~/post_types';

definePageMeta({
    key: route => route.fullPath,
    validate: ({ params }) => typeof params.kind === "string" && params.kind in POST_TYPES,
});

const route = useRoute();
const kind = computed(() => route.params.kind as PostType);
const id = computed(() => route.params.id as string);

const { data: post } = await useAsyncData("posts", () => {
    const date = new Date(parseInt(id.value));
    const y = `${date.getFullYear()}`;
    const m = `${date.getMonth() + 1}`;
    const d = `${date.getDate() + 1}`;
    return queryContent("posts", kind.value, y, m, d, id.value).findOne() as Promise<Post>;
}, {
    watch: [kind, id],
    dedupe: "defer"
});

if (post.value == null) {
    useHead({
        title: '404 | The Paper Pilot',
        meta: [
            { name: 'description', content: "Page not found." }
        ]
    });
} else if (kind.value in POST_TYPES) {
    let { verb, subject } = POST_TYPES[kind.value];
    if (post.value.title) {
        subject = ': ' + post.value.title;
    } else if (post.value.author?.name) {
        subject = ' ' + post.value.author.name;
    }
    const title = `The Paper Pilot ${verb}${subject}`;
    useContentHead(Object.assign({}, post.value,
        { title, image: post.value.image ?? "/paperpilot_thumb.png" }));
}
</script>

<style scoped>
main > .h-entry:first-child {
    margin-top: 0;
}
</style>
