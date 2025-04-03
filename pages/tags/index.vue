<template>
    <h1>Tags</h1>
    <template v-for="(count, tag) in tags as Record<string, number>" v-if="tags != null">
        <h2>{{ tag[0].toUpperCase() + tag.slice(1) }}</h2>
        <p>
            There {{ count === 1 ? "is" : "are" }}
            {{ numFormat.format(count) }}
            post{{ count === 1 ? "" : "s" }} tagged
            <NuxtLink
                :to="`/tags/${tag}`" rel="alternate" type="text/mf2+html"
                :title="`Posts tagged ${tag[0].toUpperCase()}${tag.slice(1)}`">

                {{ tag }}
            </NuxtLink>.
        </p>
    </template>
</template>

<script setup lang="ts">
import tags from "~/assets/tags.json";
const numFormat = Intl.NumberFormat("en-US");
</script>

<style lang="css" scoped>
p {
    display: inline-flex;
    align-items: center;
}

a {
    display: inline-flex;
    align-items: center;
}

.iconify {
    margin-right: 4px;
}
</style>
