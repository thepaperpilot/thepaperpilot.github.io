<template>
    <div class="pagination" v-if="totalPages > 1">
        <NuxtLink :to="`?page=1`"
            v-if="currentPage !== 1 && currentPage !== 2 && useNavigation">
            <span>1</span>
            <Icon name="material-symbols:first-page" />
        </NuxtLink>
        <button @click="emits('switchPage', 1)" v-else-if="currentPage !== 1 && currentPage !== 2">
            <span>1</span>
            <Icon name="material-symbols:first-page" />
        </button>

        <NuxtLink :to="`?page=${currentPage - 1}`" rel="prev"
            v-if="currentPage !== 1 && useNavigation">
            {{ currentPage - 1 }}
        </NuxtLink>
        <button @click="emits('switchPage', currentPage - 1)" v-else-if="currentPage !== 1">
            {{ currentPage - 1 }}
        </button>

        <div>{{ currentPage }}</div>

        <NuxtLink :to="`?page=${currentPage + 1}`" rel="next"
            v-if="currentPage !== totalPages && useNavigation">
            {{ currentPage + 1 }}
        </NuxtLink>
        <button @click="emits('switchPage', currentPage + 1)"
            v-else-if="currentPage !== totalPages">
            {{ currentPage + 1 }}
        </button>

        <NuxtLink :to="`?page=${totalPages}`"
            v-if="currentPage !== totalPages && currentPage !== totalPages - 1 && useNavigation">
            <Icon name="material-symbols:last-page" />
            <span>{{ totalPages }}</span>
        </NuxtLink>
        <button @click="emits('switchPage', totalPages)"
            v-else-if="currentPage !== totalPages && currentPage !== totalPages - 1">
            <Icon name="material-symbols:last-page" />
            <span>{{ totalPages }}</span>
        </button>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    currentPage: number;
    totalPages: number;
    useNavigation?: boolean;
}>();

const emits = defineEmits<{
    switchPage: [page: number];
}>();
</script>

<style lang="css" scoped>
.pagination {
    margin-left: 50%;
    margin-top: 29px;
    margin-bottom: -1px;
    transform: translateX(-50%);
    display: inline-flex;
    border: solid 1px var(--nord0);
    border-radius: 8px;
    width: fit-content;
}

.pagination > * {
    padding: 0 16px;
}

.pagination > :not(:last-child) {
    border-right: solid 1px var(--nord0);
}

.pagination button,
.pagination a {
    border-radius: 0;
    margin: 0;
    display: flex;
    align-items: center;
    background: transparent;
    background-image: none;
    background-image: linear-gradient( to right, rgba(255, 225, 0, 0.05), rgba(255, 225, 0, 0.35) 4%, rgba(255, 225, 0, 0.15) );
    box-decoration-break: clone;
    outline: none;
    border: none;
    cursor: pointer;
}

.pagination button:hover,
.pagination a:hover {
    background-image: linear-gradient( to right, rgba(255, 225, 0, 0.1), rgba(255, 225, 0, 0.7) 4%, rgba(255, 225, 0, 0.3) );
}

.pagination button :first-child,
.pagination a :first-child {
    margin-right: 4px;
}
</style>
