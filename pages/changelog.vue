<template>
    <div class="h-feed">
        <h1 class="p-name">Garden changelog</h1>
        <p>
            This feed starts from when I added the posts timeline to the site. If you'd like to look further into this site's history, check <a href="https://code.incremental.social/thepaperpilot/pages/commits/branch/master">here</a>!
        </p>
        
        <article class="h-entry" v-for="item in currentPageItems">
            <h2 class="p-name contains-link">
                Updated {{ item.content_html.split("<tr>").length - 2 }} page{{ item.content_html.split("<tr>").length === 3 ? '' : 's' }} on
                <a class="u-url" :href="item.url">
                    <time class="dt-published" :datetime="item.date_modified">
                        {{ new Date(item.date_modified).toLocaleDateString() }}
                    </time>
                </a>
            </h2>
            <div class="e-content changelog-item" v-nuxt-html="item.content_html" />
        </article>

        <Pagination
            :current-page="currentPage"
            :total-pages="totalPages"
            :use-navigation="true" />

    </div>
</template>

<script setup lang="ts">
import Pagination from "~/components/Pagination.vue";

interface ChangelogItem {
    id: string;
    content_html: string;
    url: string;
    date_modified: string;
}

onMounted(async () => {
    const response = await fetch("/changelog/json");
    const file = await response.json() as { items: ChangelogItem[] };
    items.value = file.items;
});

const items = ref<ChangelogItem[]>([]);
const POSTS_PER_PAGE = 20;
const totalPages = computed(() => Math.ceil(items.value.length / POSTS_PER_PAGE));
const currentPage = getPageFromRoute(totalPages);
const currentPageItems = computed(() => items.value.slice(
    (currentPage.value - 1) * POSTS_PER_PAGE,
    currentPage.value * POSTS_PER_PAGE));

useHead({
    title: "Garden changelog"
});
</script>

<style lang="scss" scoped>
h2 {
    margin-top: 30px;
}
</style>

<style lang="scss">
.e-content.changelog-item {
    table {
        margin: 29px 0 30px 0;
        width: 100%;
        border-collapse: collapse;
    }

    tr {
        background-color: var(--nord6);
    }

    tr:nth-child(2n), thead tr {
        background-color: var(--nord5);
    }

    th, td {
        text-align: left;
        line-height: 29px;
        border: 1px solid var(--nord4);
        padding: 0 8px;
    }
}
</style>
