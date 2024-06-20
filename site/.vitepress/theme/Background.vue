<template>
    <TresGroup ref="groupRef" v-if="renderer">
      <TresMesh v-for="i in rows * cols" :position="[((i % cols) - cols / 2) * 304, (Math.floor((i - 1) / cols) - rows / 2) * 304, 0]" >
        <TresShapeGeometry :args="[shapes]" />
        <TresShaderMaterial :vertexShader="vertexShader" :fragmentShader="fragmentShader" :uniforms="uniforms" :blending="AdditiveBlending" />
      </TresMesh>
    </TresGroup>
</template>

<script setup lang="ts">
import { useLoader, useRenderLoop, useTresContext } from '@tresjs/core';
import { AdditiveBlending, Group, Vector2 } from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import { computed, onMounted, onUnmounted, ref, shallowRef } from "vue";
import noise from "./noise.glsl?raw";

const { renderer, sizes } = useTresContext();

// Load SVG
const { paths } = await useLoader(SVGLoader, '/circuit-board.svg');
const shapes = paths.map(path => SVGLoader.createShapes(path)).reduce((acc, curr) => [...acc, ...curr]);

const rows = computed(() => Math.ceil(sizes.height.value / 304));
const cols = computed(() => Math.ceil(sizes.width.value / 304));

// Handle mouse position
const mousePos = ref(new Vector2(Infinity, Infinity));
function updateMousePos(event: MouseEvent) {
  mousePos.value = new Vector2(event.screenX, window.screen.availHeight - event.screenY);
  if (groupRef.value) {
    groupRef.value.children.forEach(child => {
      child.material.uniforms.uMouse.value = mousePos.value;
    });
  }
}
function handleMouseLeave(event: MouseEvent) {
  if (!event.relatedTarget) {
    mousePos.value = new Vector2(Infinity, Infinity);
    if (groupRef.value) {
      groupRef.value.children.forEach(child => {
        child.material.uniforms.uMouse.value = mousePos.value;
      });
    }
  }
}

// Setup window listeners
onMounted(() => {
  window.addEventListener("mousemove", updateMousePos);
  window.addEventListener("mouseout", handleMouseLeave);
});
onUnmounted(() => {
  window.removeEventListener("mousemove", updateMousePos);
  window.removeEventListener("mouseout", handleMouseLeave);
});

// Shaders
const groupRef = shallowRef<Group | null>(null);

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
`;
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
`;

const { onLoop } = useRenderLoop();
onLoop(({ elapsed }) => {
  if (groupRef.value) {
    groupRef.value.children.forEach(child => {
      child.material.uniforms.uTime.value = elapsed;
    });
  }
});
</script>
