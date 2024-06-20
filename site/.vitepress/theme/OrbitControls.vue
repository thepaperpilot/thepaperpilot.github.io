<template>
    <TresOrbitControls
      v-if="renderer"
      :args="[camera, renderer?.domElement]"
    />
</template>

<script setup lang="ts">
import { extend, useTresContext } from '@tresjs/core';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

extend({ OrbitControls });
const { camera, renderer } = useTresContext();
</script>

<style scoped>
.background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
}
</style>
    