<template>
  <NotFound v-if="data == null || !('content' in data)" />
  <template v-else-if="doc">
    <h1 id="top">{{ doc.name }}</h1>
    <GardenHeader :doc="doc" />
    <ClientOnly>
      <MDC v-if="data?.content" :value="data.content" partial />
    </ClientOnly>
    <ReferencedBy :doc="doc" />
    <Tagged :doc="doc" />
    <TableOfContents :doc="doc" />
  </template>
</template>

<script setup lang="ts">
import type matter from "gray-matter";
import GardenHeader from "~/components/garden/GardenHeader.vue";
import ReferencedBy from "~/components/garden/ReferencedBy.vue";
import TableOfContents from "~/components/garden/TableOfContents.vue";
import Tagged from "~/components/garden/Tagged.vue";

const route = useRoute();
const { data, refresh } = await useFetch<matter.GrayMatterFile<any>>(
  () =>
    `/api/garden/${(Array.isArray(route.params.slug)
      ? route.params.slug
      : [route.params.slug]
    ).join("/")}`
);
const doc = computed(() =>
  data.value?.data ? (data.value.data as GardenDocument) : undefined
);

watch(
  () => route.params.slug,
  () => refresh(),
  { deep: true }
);

useHead({
  title: () => `${doc.value?.name ?? "Garden"} | The Paper Pilot`,
});
</script>
