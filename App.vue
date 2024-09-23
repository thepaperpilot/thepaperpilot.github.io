<template>
    <AsidesContainer />
    <Container>
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </Container>
    <Background />
    <Footer />
    <Favorites />
</template>

<script setup lang="ts">
import AsidesContainer from "~/components/asides/AsidesContainer.vue";
import Favorites from "~/components/asides/Favorites.vue";
</script>

<style lang="css">
html {
    background: var(--nord1);
    color: var(--nord4);
    font-family: Itim;
    overflow-x: hidden;
}

body {
    margin: 0;
    width: 100%;
    min-width: 320px;
    min-height: 100vh;
}

#__nuxt {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
    overflow-y: hidden;
}
</style>
