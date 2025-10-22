<template>
  <Aside v-if="doc.taggedBy">
    <h3>Pages tagged "{{ doc.name }}":</h3>
    <ul>
      <li v-for="(text, link) in doc.taggedBy">
        <NuxtLink :to="`/garden/${link}`">{{ text }}</NuxtLink>
      </li>
    </ul>
  </Aside>
</template>

<script setup lang="ts">
import Aside from "~/components/asides/Aside.vue";

defineProps<{
  doc: GardenDocument;
}>();
</script>

<style lang="css" scoped>
h3 {
  margin-bottom: 0;
}

a {
  color: var(--nord8);
  text-decoration: none;
}
</style>
