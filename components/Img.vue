<template>
  <img
    v-if="src.startsWith('/garden/assets')"
    v-bind="props"
    @click="() => (open = true)"
  />
  <NuxtImg v-else v-bind="props" @click="() => (open = true)" />

  <Teleport to="body">
    <div class="container" v-if="open" @click="() => (open = false)">
      <img v-if="src.startsWith('/garden/assets')" :src="src" />
      <NuxtImg v-else :src="src" />
    </div>
    <div class="closer" @click="() => (open = false)" v-if="open" />
  </Teleport>
</template>

<script setup lang="ts">
const props = defineProps<{
  alt?: string;
  src: string;
  width?: string | number;
  height?: string | number;
  class?: string;
  style?: string;
}>();

const open = ref(false);
</script>

<style lang="css" scoped>
img,
:deep(img) {
  object-fit: contain;
  max-width: 100%;
  object-position: center;
  cursor: pointer;
}

.container :deep(img) {
  cursor: initial;
}

.closer {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9;
  background: black;
  opacity: 0.3;
}

.container {
  position: fixed;
  top: 5vh;
  bottom: 5vh;
  left: 5vw;
  right: 5vw;
  overflow: hidden;
  z-index: 10;
  display: flex;
  justify-content: center;
}
</style>
