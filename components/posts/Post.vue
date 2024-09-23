<template>
    <div class="h-entry" :class="{ 'h-cite': isParent }">
        <DatedContentWarning v-if="!isParent" :published="post.published" />
        <PostHeader v-if="!isParent" :kind="post.kind" :id="post.published" />
        <Post v-if="post.parent" :post="post.parent" :isParent="true" />
        <div class="post" :class="{
            'h-cite': ['favorite', 'bookmark', 'repost'].includes(post.kind),
            'u-in-reply-to': post.parent != null,
            'u-like-of': post.kind === 'favorite',
            'u-repost-of': post.kind === 'repost',
            'u-bookmark': post.kind === 'bookmark'
        }">
            <Avatar v-if="post.author || selfAuthored"
                :published="post.published"
                :author="post.author"
                :action="selfAuthored ? post.kind : undefined"
                :syndications="post.syndications"
                :tags="post.tags" />
            <Card :title="post.title"
                :image="post.image"
                :alt="post.imageAlt"
                :description="post.description"
                :url="post.url"
                :fadeDescription="fadeDescription" />
        </div>
        <template v-if="post.replies?.length ?? 0 > 0">
            <h2>Comments</h2>
            <Reply v-for="reply in post.replies" :reply="reply" />
        </template>
    </div>
</template>

<script setup lang="ts">
import Avatar from "./Avatar.vue";
import Card from "./Card.global.vue";
import DatedContentWarning from "./DatedContentWarning.vue";
import PostHeader from "./PostHeader.vue";
import Reply from "./Reply.vue";
import type { Post } from "~/types";

const props = withDefaults(defineProps<{
    post: Post;
    isParent?: boolean;
    fadeDescription?: boolean;
}>(), {
    isParent: false,
    fadeDescription: false
});

const selfAuthored = computed(() =>
    props.post.author == null && ['article', 'reply'].includes(props.post.kind));
</script>

<style lang="css" scoped>
.post {
    display: flex;
    align-items: start;
}
</style>
