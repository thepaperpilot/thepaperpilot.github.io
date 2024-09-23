<template>
    <div class="u-comment h-cite">
        <Avatar :published="reply.published"
            :author="reply.author"
            action="reply"
            :syndications="[reply.syndication]" />
        <Card :description="reply.body" />
    </div>
</template>

<script setup lang="ts">
import Avatar from "./Avatar.vue";
import Card from "./Card.global.vue";
import type { Reply } from "~/types";
defineProps<{
    reply: Reply;
}>();
</script>
