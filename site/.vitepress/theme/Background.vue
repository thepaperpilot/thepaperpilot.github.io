<template>
<div class="background">
    <TresCanvas>
        <TresOrthographicCamera ref="camera" :position="[0, 0, 10]" />
        <TresGroup ref="blobRef">
          <TresMesh v-for="i in rows * cols" :position="[((i % cols) - cols / 2) * 304, (Math.floor((i - 1) / cols) - rows / 2) * 304, 0]" >
            <TresShapeGeometry :args="[shapes]" />
            <TresShaderMaterial :vertexShader="vertexShader" :fragmentShader="fragmentShader" :uniforms="uniforms" :blending="AdditiveBlending" />
          </TresMesh>
        </TresGroup>
        <TresAmbientLight :intensity="1" />
        <OrbitControls />
    </TresCanvas>
</div>
</template>

<script setup lang="ts">
import { computed, ref, shallowRef, onMounted, onUnmounted, watch } from "vue";
import { TresCanvas, useLoader, useRenderLoop } from '@tresjs/core';
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import OrbitControls from './OrbitControls.vue';
import noise from "./noise.glsl?raw";
import { AdditiveBlending, Vector2 } from "three";

const camera = ref();

// Load SVG
const { paths } = await useLoader(SVGLoader, '/circuit-board.svg');
const shapes = paths.map(path => SVGLoader.createShapes(path)).reduce((acc, curr) => [...acc, ...curr]);

// Handle canvas size
const width = ref(window.innerWidth);
const height = ref(window.innerHeight);
const rows = computed(() => Math.ceil(height.value / 304));
const cols = computed(() => Math.ceil(width.value / 304));
function updateSize() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
}
watch([width, height, camera], ([width, height, camera]) => {
  if (camera) {
    camera.left = 0;
    camera.bottom = 0
    camera.right = width;
    camera.top = height;
    camera.updateProjectionMatrix();
  }
});

// Handle mouse position
const mousePos = ref(new Vector2(Infinity, Infinity));
function updateMousePos(event: MouseEvent) {
  mousePos.value = new Vector2(event.screenX, window.screen.availHeight - event.screenY);
  if (blobRef.value) {
    blobRef.value.children.forEach(child => {
      child.material.uniforms.uMouse.value = mousePos.value;
    });
  }
}
function handleMouseLeave(event: MouseEvent) {
  if (!event.relatedTarget) {
    mousePos.value = new Vector2(Infinity, Infinity);
    if (blobRef.value) {
      blobRef.value.children.forEach(child => {
        child.material.uniforms.uMouse.value = mousePos.value;
      });
    }
  }
}

// Setup window listeners
onMounted(() => {
    window.addEventListener("resize", updateSize);
    window.addEventListener("mousemove", updateMousePos);
    window.addEventListener("mouseout", handleMouseLeave);
});
onUnmounted(() => {
    window.removeEventListener("resize", updateSize);
    window.removeEventListener("mousemove", updateMousePos);
    window.removeEventListener("mouseout", handleMouseLeave);
});

// Shaders
const blobRef = shallowRef(null);

const uniforms = {
  uTime: { value: 0 },
  uMouse: { value: new Vector2(Infinity, Infinity) }
}

const vertexShader = `
varying vec2 vUv;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  gl_Position = projectionMatrix * viewPosition;
  vUv = uv;
}
`

const fragmentShader = noise + `
precision mediump float;
uniform float uTime;
uniform vec2 uMouse;
varying vec2 vUv;

void main() {
  float dist = distance(gl_FragCoord.xy, uMouse);
  float alpha = max(0., 1. - dist / 304.);
  alpha += max(0., snoise(vec3(gl_FragCoord.xy / 304., uTime / 4.)));
  gl_FragColor = vec4(0, 0, 0, alpha);
}
`
const { onLoop } = useRenderLoop();

onLoop(({ elapsed }) => {
  if (blobRef.value) {
    blobRef.value.children.forEach(child => {
      child.material.uniforms.uTime.value = elapsed;
    });
  }
});
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
