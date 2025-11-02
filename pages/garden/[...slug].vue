<template>
  <NotFound v-if="error" />
  <template v-else-if="hasDoc(data)">
    <h1 id="top">{{ data.doc.name }}</h1>
    <GardenHeader :doc="data.doc" />
    <MDCRenderer v-if="data.content" v-bind="data.content" />
    <ReferencedBy :doc="data.doc" />
    <Tagged :doc="data.doc" />
    <TableOfContents :doc="data.doc" />
  </template>
</template>

<script setup lang="ts">
import type { MDCParserResult } from "@nuxtjs/mdc";
import GardenHeader from "~/components/garden/GardenHeader.vue";
import ReferencedBy from "~/components/garden/ReferencedBy.vue";
import TableOfContents from "~/components/garden/TableOfContents.vue";
import Tagged from "~/components/garden/Tagged.vue";

const route = useRoute();

const { data, error } = await useFetch(
  () =>
    `/api/garden/${(Array.isArray(route.params.slug)
      ? route.params.slug
      : [route.params.slug]
    ).join("/")}`,
  { server: false, key: () => route.fullPath }
);

function hasDoc(
  obj: any
): obj is { doc: GardenDocument; content: MDCParserResult } {
  return obj != null && typeof obj === "object" && "doc" in obj;
}

useHead({
  title: () =>
    `${
      hasDoc(data.value) ? data.value.doc.name ?? "Garden" : "Garden"
    } | The Paper Pilot`,
});
</script>
