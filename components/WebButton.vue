<template>
  <a class="web-button" :href="link">
    <img :src="image" />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  image: string;
  link: string;
}>();
</script>

<style scoped>
.web-button {
  height: 30px;
  width: 88px;
  display: inline-block;
  padding: 0px;
  margin-right: 4px;
}

.web-button::after {
  display: none;
}

.web-button img {
  width: 88px;
  height: 31px;
  margin-bottom: -1px;
  image-rendering: pixelated;
}
</style>
