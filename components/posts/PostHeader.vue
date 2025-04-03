<template>
    <div class="post-header">
        <Icon :name="POST_TYPES[kind].icon" />
        I <NuxtLink class="u-url" :to="`/${kind}/${id}`">{{ POST_TYPES[kind].verb }}</NuxtLink>
        <span>
            {{ POST_TYPES[kind].subject }} on
            <time class="dt-published" :datetime="timeString" :title="timeString">
                {{ dateString }}
            </time>:
        </span>
    </div>
</template>

<script setup lang="ts">
import { POST_TYPES } from '~/post_types';
import type { PostType } from '~/types';

const props = defineProps<{
    kind: PostType,
    id: number;
}>();

const timeString = computed(() => new Date(props.id).toLocaleString());
const dateString = computed(() => new Date(props.id).toLocaleDateString());
</script>

<style lang="css" scoped>
.post-header {
    align-items: center;
    display: flex;
}

.iconify {
    margin: 0 4px;
}
</style>
