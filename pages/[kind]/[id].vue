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
    const m = `${date.getMonth()}`;
    const d = `${date.getDate()}`;
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
    const { verb } = POST_TYPES[kind.value];
    let subject;
    if (post.value.title) {
        subject = ': ' + post.value.title;
    } else if (post.value.author?.name) {
        subject = ' ' + post.value.author.name;
    } else if (post.value.url) {
        subject = ' a link';
    } else {
        subject = ' a post';
    }
    const title = `The Paper Pilot ${verb}${subject}`;
    useContentHead(Object.assign({}, post.value,
        { title, image: post.value.image ?? "/paperpilot_thumb.png" }));
}
</script>
