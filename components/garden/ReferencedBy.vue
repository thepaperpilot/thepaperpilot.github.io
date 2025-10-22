<template>
  <template v-if="doc.referencedBy">
    <h2 id="referenced-by">
      <NuxtLink href="#referenced-by"
        >Pages that reference "{{ doc.name }}":</NuxtLink
      >
    </h2>
    <ul class="inline">
      <li v-for="(text, link) in doc.referencedBy">
        <NuxtLink :to="`/garden/${link}`">{{ text }}</NuxtLink>
      </li>
    </ul>
  </template>
</template>

<script setup lang="ts">
defineProps<{
  doc: GardenDocument;
}>();
</script>
