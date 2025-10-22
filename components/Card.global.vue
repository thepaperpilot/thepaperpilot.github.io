<template>
    <div class="card" :class="{ full: title == null && description == null && url == null }">
        <img v-if="image" class="u-photo" :src="image" :alt="alt" />
        <h2 v-if="title" class="p-name">
            <a class="u-url" :href="url" v-if="url">{{ title }}</a>
            <template v-else>{{ title }}</template>
        </h2>
        <div class="description e-content" :class="{ fadeDescription }" v-if="description">
            <MDC :value="description" />
        </div>
        <a class="u-url" v-if="url && !title" :href="url">{{ url }}</a>
    </div>
</template>

<script setup lang="ts">
defineProps<{
    title?: string;
    image?: string;
    alt?: string;
    description?: string;
    url?: string;
    fadeDescription?: boolean;
}>();
</script>

<style lang="css" scoped>
.card {
    padding: 15px;
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
}

.card.full {
    margin: auto;
    width: fit-content;
    height: 11lh;
}

.card::before, .card::after {
    content: "";
    display: block;
    position: absolute;
    border: 50px solid transparent;
    transform: rotate(135deg);
}

.card::before {
    top: -60px;
    left: -65px;
    box-shadow: 0px -7px 6px -9px black;
}

.card::after {
    bottom: -60px;
    right: -65px;
    box-shadow: 0px 7px 6px -9px black;
}

.card:not(.full) {
    height: unset;
    background: white;
    clip-path: polygon(-30px -30px, calc(100% + 30px) -30px, calc(100% + 30px) calc(100% - 75px), calc(100% - 75px) calc(100% + 30px), -30px calc(100% + 30px));
    width: 100%;
}

.card:not(.full)::before {
    visibility: hidden;
}

.card:not(.full)::after {
    border: 75px solid transparent;
    bottom: -105px;
    right: -105px;
}

.card img {
    max-height: 11lh;
    height: 100%;
    object-fit: contain;
    background: white;
    max-width: 100%;
}

.card.full img {
    clip-path: polygon(18px 0%, 100% 0, 100% calc(100% - 18px), calc(100% - 18px) 100%, 0 100%, 0% 18px);
}

.fadeDescription {
    max-height: 180px;
    mask-image: linear-gradient(to bottom, white 150px, transparent);
}
</style>
