<template>
  <NotFound v-if="data == null || !('content' in data)" />
  <template v-else-if="doc">
    <h1 id="top">{{ doc.name }}</h1>
    <GardenHeader :doc="doc" />
    <MDC :value="data.content" />
    <ReferencedBy :doc="doc" />
    <Tagged :doc="doc" />
    <TableOfContents :doc="doc" />
  </template>
</template>

<script setup lang="ts">
import GardenHeader from "~/components/garden/GardenHeader.vue";
import ReferencedBy from "~/components/garden/ReferencedBy.vue";
import TableOfContents from "~/components/garden/TableOfContents.vue";
import Tagged from "~/components/garden/Tagged.vue";

const route = useRoute();
const { data } = await useFetch(
  `/api/garden/${(Array.isArray(route.params.slug)
    ? route.params.slug
    : [route.params.slug]
  ).join("/")}`,
  {
    server: true,
    lazy: false,
  }
);
const doc = computed(() =>
  data.value && "data" in data.value && data.value.data
    ? (data.value.data as GardenDocument)
    : undefined
);

useHead({
  title: () => `${doc.value?.name ?? "Garden"} | The Paper Pilot`
})
</script>
