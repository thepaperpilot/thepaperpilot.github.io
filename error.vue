<template>
    <AsidesContainer />
    <Container>
        <h1>{{ error.statusMessage ?? error.message }} ({{ error.statusCode }})</h1>
        <div>You can try going <NuxtLink to="/">home</NuxtLink>.</div>
    </Container>
    <Background />
    <Footer />
    <Favorites />
</template>

<script setup lang="ts">
import AsidesContainer from "~/components/asides/AsidesContainer.vue";
import Favorites from "~/components/asides/Favorites.vue";
import type { NuxtError } from '#app';

defineProps<{
    error: NuxtError;
}>();

const handleError = () => clearError({ redirect: '/' })
</script>
