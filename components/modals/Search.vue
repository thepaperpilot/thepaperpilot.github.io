<template>
  <div class="search" @click="open = true">
    <Icon name="material-symbols:search" />Search
  </div>
  <Modal :open="open" @close="open = false">
    <h1>Search</h1>
    <input
      ref="inputRef"
      v-model="search"
      @keydown.down.prevent="moveSelection(1)"
      @keydown.up.prevent="moveSelection(-1)"
      @keydown.left.prevent="moveSelection(-1)"
      @keydown.right.prevent="moveSelection(1)"
      @keydown.enter.prevent="selectSuggestion"
      placeholder="Your query..."
      autofocus
    />
    <ul v-if="suggestions" class="inline">
      <li
        v-for="(suggestion, i) in suggestions"
        :class="selectedIndex === i ? 'selected' : ''"
        style="cursor: pointer"
        @click="() => search = suggestion"
      >
        {{ suggestion }}
      </li>
    </ul>

    <h2>
      <template v-if="results.length > POSTS_PER_PAGE">
        {{ (currentPage - 1) * POSTS_PER_PAGE + 1 }}
        -
        {{ Math.min(currentPage * POSTS_PER_PAGE, results.length) }} of
      </template>
      {{ results.length }} result{{ results.length === 1 ? "" : "s" }}
    </h2>
    <br />

    <div v-for="post in currentPageResults" class="result">
      <NuxtLink :to="`/garden/${post.id}`" @click="open = false">{{
        post.name
      }}</NuxtLink>
      <GardenHeader :doc="post as unknown as GardenDocument" />
      <ul class="inline" v-if="post.tags">
        <li v-for="tag in post.tags">
          {{ tag }}
        </li>
      </ul>
      <br />
    </div>

    <Pagination
      :current-page="currentPage"
      :total-pages="Math.ceil(results.length / POSTS_PER_PAGE)"
      @switch-page="(page) => (currentPage = page)"
    />
  </Modal>
</template>

<script lang="ts" async setup>
import MiniSearch, { type SearchResult } from "minisearch";
import Modal from "./Modal.vue";

const POSTS_PER_PAGE = 5;

const open = ref(false);
const search = ref("");
const currentPage = ref(1);
const inputRef = ref<HTMLElement>();

onBeforeMount(() => {
  document.addEventListener("keydown", keyHandler);
});

onBeforeUnmount(() => {
  document.removeEventListener("keydown", keyHandler);
});

const { data } = await useFetch("/api/search", {
  server: true,
  lazy: false,
});
const miniSearch = ref<MiniSearch>();
const results = ref<SearchResult[]>([]);
const suggestions = ref<string[]>([]);
const selectedIndex = ref(0);
watch(
  data,
  (data) =>
    data &&
    MiniSearch.loadJSONAsync(JSON.stringify(data), {
      fields: ["content", "name", "tags"],
      searchOptions: { boost: { name: 2, tags: 2 }, fuzzy: true },
      storeFields: ["name", "wordcount", "modified", "created", "tags"],
      idField: "path",
    }).then((ms) => (miniSearch.value = ms)),
  { immediate: true }
);
watch([miniSearch, search], ([miniSearch, search]) => {
  if (miniSearch) {
    results.value = miniSearch.search(search);
    suggestions.value =
      miniSearch.autoSuggest(search, { fuzzy: true })[0]?.terms.slice(0, 10) ?? [];
    console.log(results.value);
  } else {
    results.value = [];
    suggestions.value = [];
  }
  selectedIndex.value = 0;
});
const currentPageResults = computed(() =>
  search.value === ""
    ? []
    : results.value?.slice(
        (currentPage.value - 1) * POSTS_PER_PAGE,
        currentPage.value * POSTS_PER_PAGE
      )
);

watch(inputRef, (inputRef) => {
  inputRef?.focus();
});

function keyHandler(e: KeyboardEvent) {
  if (e.key == "k" && e.ctrlKey) {
    open.value = !open.value;
    e.preventDefault();
    return true;
  }
  if (e.key === "Escape" && open.value) {
    open.value = false;
    e.preventDefault();
    return true;
  }
}

function moveSelection(delta: number) {
  const len = suggestions.value.length;
  if (len === 0) return;
  selectedIndex.value = (selectedIndex.value + delta + len) % len;
}

function selectSuggestion() {
  search.value = suggestions.value[selectedIndex.value] ?? "";
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
  height: 27px;
  padding-top: 0;
  padding-bottom: 1px;
}

.result :deep(a) {
  font-weight: 700;
}

.result :deep(.garden-header) {
  margin: 0px;
}

.result :deep(.tagged) {
  display: none;
}

.selected {
  color: var(--nord10);
  border-bottom: solid 1px var(--nord10);
  margin-bottom: -1px;
}
</style>
