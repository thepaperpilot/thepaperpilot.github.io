<template>
    <NuxtImg v-bind:props />
</template>

<script setup lang="ts">
import type { ImageOptions } from '@nuxt/image';

const props = defineProps<ImageOptions>();
</script>
