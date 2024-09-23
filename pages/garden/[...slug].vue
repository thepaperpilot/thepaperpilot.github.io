<template>
    <main>
        <ContentDoc>
            <template v-slot="{ doc }">
                <h1 id="top">{{ doc.title }}</h1>
                <GardenHeader :doc="doc" />
                <ContentRenderer :value="doc" />
                <ReferencedBy :doc="doc" />
                <Tagged :doc="doc" />
                <TableOfContents :doc="doc" />
            </template>
            <template #not-found>
                <NotFound />
            </template>
        </ContentDoc>
    </main>
</template>

<script setup lang="ts">
import GardenHeader from '~/components/garden/GardenHeader.vue';
import ReferencedBy from '~/components/garden/ReferencedBy.vue';
import TableOfContents from '~/components/garden/TableOfContents.vue';
import Tagged from '~/components/garden/Tagged.vue';
</script>
