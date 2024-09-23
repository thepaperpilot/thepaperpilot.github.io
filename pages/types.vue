<template>
    <h1>Types</h1>
    <template v-for="id of sortedPostTypes" v-if="data != null">
        <h2>{{ id[0].toUpperCase() + id.slice(1) }}</h2>
        <p>
            There {{ data[id] === 1 ? "is" : "are" }}
            {{ numFormat.format(data[id]) }}
            <NuxtLink
                :to="`/${POST_TYPES[id].plural}`" rel="alternate" type="text/mf2+html"
                :title="POST_TYPES[id].plural[0].toUpperCase() + POST_TYPES[id].plural.slice(1)">

                <Icon :name="POST_TYPES[id].icon" />
                {{ data[id] === 1 ? id : POST_TYPES[id].plural }}
            </NuxtLink>.
        </p>
    </template>
</template>

<script setup lang="ts">
import { POST_TYPES } from '~/post_types';
import type { PostType } from '~/types';

const numFormat = Intl.NumberFormat("en-US");

const sortedPostTypes = Object.keys(POST_TYPES).sort() as PostType[];
const { data } = await useAsyncData("allTags", async () => {
    return Object.keys(POST_TYPES).reduce(async (acc, curr) => {
        return { ...await acc, [curr]: await queryContent("posts", curr).count() }
    }, Promise.resolve({} as Record<PostType, number>));
}, {
    dedupe: 'defer',
});

useHead({
    title: "Post types"
});
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
