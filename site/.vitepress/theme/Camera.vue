<template>
    <TresOrthographicCamera :position="[0, 0, 10]" />
</template>

<script setup lang="ts">
import { useTresContext } from '@tresjs/core';
import { OrthographicCamera } from 'three';
import { watch } from "vue";

const context = useTresContext();
watch([context.sizes.width, context.sizes.height, context.camera], ([width, height, camera]) => {
    const cam = camera as OrthographicCamera;
    if (cam) {
        cam.left = 0;
        cam.bottom = 0
        cam.right = width;
        cam.top = height;
        cam.updateProjectionMatrix();
    }
});
</script>
