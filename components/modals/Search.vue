<template>
    <div class="search" @click="open = true">
        <Icon name="material-symbols:search" />Search
    </div>
    <Modal :open="open" @close="open = false">
        <h1>Search</h1>
        <input ref="inputRef" v-model="search" placeholder="Your query..." autofocus>

        <h2>
            <template v-if="results.length > POSTS_PER_PAGE">
                {{ (currentPage - 1) * POSTS_PER_PAGE + 1 }}
                -
                {{ Math.min(currentPage * POSTS_PER_PAGE, results.length) + 1 }} of
            </template>
            {{ results.length }} result{{ results.length === 1 ? '' : 's' }}
        </h2>
        
        <div v-for="post in currentPageResults">
            <NuxtLink :to="getUrlFromId(post.id)" @click="open = false">{{ post.title }}</NuxtLink>
            <MDC :value="post.content" />
            <br />
        </div>

        <Pagination :current-page="currentPage"
            :total-pages="Math.ceil(results.length / POSTS_PER_PAGE)"
            @switch-page="page => currentPage = page" />
    </Modal>
</template>

<script lang="ts" setup>
import Modal from "./Modal.vue";

const POSTS_PER_PAGE = 20;

const open = ref(false);
const search  = ref('');
const currentPage = ref(1);
const inputRef = ref<HTMLElement>();

const results = ref<import("minisearch").SearchResult[]>([]);
const fetchResults = async () => {
    const res = await searchContent(search.value, {});
    results.value = res.value;
}
watch(search, fetchResults);
// const results = await searchContent(search);
const currentPageResults = computed(() => search.value === "" ? [] : results.value.slice(
    (currentPage.value - 1) * POSTS_PER_PAGE,
    currentPage.value * POSTS_PER_PAGE));

// Too many requests, and I'm not sure we really need this information anyways
// Especially since garden posts can't use VuePost
// const { data: posts, status, error, refresh } = await useAsyncData("search", () =>
//     Promise.all(currentPageResults.value.map(result => {
//         if (result.id.startsWith("/posts")) {
//             console.log(result.id.split("/").slice(1))
//             return queryContent(...result.id.split("/").slice(1)).findOne() as Promise<Post>;
//         }
//         const indexHash = result.id.indexOf("#");
//         const id = indexHash === -1 ? result.id : result.id.slice(0, indexHash);
//         return queryContent(id).findOne() as Promise<ParsedContent>
//     })
// ), {
//     watch: [currentPageResults],
//     dedupe: "cancel",
//     lazy: true,
//     default: () => []
// });

// watch(error, console.error);

// TODO debounce
// Ideally checking status first
// watch(search, refresh);

watch(inputRef, inputRef => {
    inputRef?.focus();
});

function getUrlFromId(id: string) {
    if (id.startsWith("/posts")) {
        const [_, _2, kind, y, m, d, timestamp] = id.split("/");
        return `/${kind}/${timestamp}`;
    }
    return id;
}
</script>

<style lang="css" scoped>
.search {
    background-color: yellow; 
    display: flex;
    cursor: pointer;
    height: 36px;
    border-radius: 6px 6px 0 0;
    padding: 0 8px;
    margin-bottom: -8px;
    color: var(--nord1);
    padding-top: 4px;
    box-sizing: border-box;
}

.search:hover {
    margin-bottom: unset;
    margin-top: -8px;
}

input {
    outline: none;
    border: none;
    border-bottom: solid 2px var(--nord1);
    background: none;
    height: 28px;
}
</style>
