<template>
  <p class="garden-header">
    {{ doc.wordcount }} words, ~{{ Math.ceil(doc.wordcount / 183) }} minute
    read. Planted
    <time :datetime="publishedTime" :title="publishedTime">{{
      publishedDate
    }}</time
    >.
    <template v-if="doc.modified">
      Last tended to
      <time :datetime="editedTime" :title="editedTime">{{ editedDate }}</time
      >.
    </template>
  </p>
  <ul class="garden-header inline tagged" v-if="doc.tags">
    <li v-for="(text, link) in doc.tags">
      <NuxtLink :to="`/garden/${link}`">{{ text }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup lang="ts">
const props = defineProps<{
  doc: GardenDocument;
}>();

const publishedTime = computed(() =>
  new Date(props.doc.created).toLocaleString()
);
const publishedDate = computed(() =>
  new Date(props.doc.created).toLocaleDateString()
);

const editedTime = computed(() =>
  new Date(props.doc.modified).toLocaleString()
);
const editedDate = computed(() =>
  new Date(props.doc.modified).toLocaleDateString()
);
</script>

<style lang="css" scoped>
.garden-header {
  margin-top: -30px;
  margin-bottom: 30px;
}

.tagged::before {
  content: "Tagged";
}
</style>
