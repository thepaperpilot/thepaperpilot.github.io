<template>
    <TresGroup ref="groupRef" v-if="renderer" :renderOrder="1">
        <TresMesh v-for="i in rows * cols" :position="[((i % cols) - cols / 2) * 304, (Math.floor((i - 1) / cols) - rows / 2) * 304, 1]">
            <TresShapeGeometry :args="[shapes]" />
            <TresShaderMaterial
                :vertexShader="vertexShader"
                :fragmentShader="fragmentShader"
                :uniforms="uniforms"
                :blending="AdditiveBlending"
                :stencilWrite="mask != null"
                :stencilRef="mask ?? 0"
                :stencilFunc="EqualStencilFunc"
                :stencilFail="KeepStencilOp"
                :stencilZFail="KeepStencilOp"
                :stencilZPass="KeepStencilOp" />
        </TresMesh>
    </TresGroup>
</template>

<script setup lang="ts">
import { useLoader, useRenderLoop, useTresContext } from '@tresjs/core';
import { AdditiveBlending, EqualStencilFunc, Group, KeepStencilOp, Vector2, Vector3 } from "three";
import { SVGLoader } from "three/examples/jsm/loaders/SVGLoader.js";
import noise from "~/assets/noise.glsl";
import cicuitBoard from "assets/circuit-board.svg";

const { renderer, sizes } = useTresContext();

const props = defineProps<{
  mask?: number;
}>();

// Setup window listeners
onMounted(() => {
  window.addEventListener("mousemove", updateMousePos);
  window.addEventListener("mouseout", handleMouseLeave);
});
onUnmounted(() => {
  window.removeEventListener("mousemove", updateMousePos);
  window.removeEventListener("mouseout", handleMouseLeave);
});

// Load SVG
const { paths } = await useLoader(SVGLoader, cicuitBoard);
const shapes = paths.map(path => SVGLoader.createShapes(path)).reduce((acc, curr) => [...acc, ...curr]);

const rows = computed(() => Math.ceil(sizes.height.value / 304));
const cols = computed(() => Math.ceil(sizes.width.value / 304));

// Handle mouse position
const mousePos = ref(new Vector2(Infinity, Infinity));
function updateMousePos(event: MouseEvent) {
  const {x, y, height} = renderer.value.domElement.getBoundingClientRect();
  mousePos.value = new Vector2(event.x - x, height + y - event.y);
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

const { onLoop } = useRenderLoop();
onLoop(({ elapsed }) => {
  if (groupRef.value) {
    groupRef.value.children.forEach(child => {
      child.material.uniforms.uTime.value = elapsed;
    });
  }
});

// Shaders
const groupRef = shallowRef<Group | null>(null);

const uniforms = {
  uColor: computed(() => props.mask == null ? new Vector3() : new Vector3(0.23, 0.26, 0.32)),
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
const fragmentShader = `
${noise}
precision mediump float;
uniform float uTime;
uniform vec2 uMouse;
uniform vec3 uColor;
varying vec2 vUv;

void main() {
  float dist = distance(gl_FragCoord.xy, uMouse);
  float alpha = max(0., 1. - dist / 304.);
  alpha += max(0., snoise(vec3(gl_FragCoord.xy / 304., uTime / 4.)));
  gl_FragColor = vec4(mix(uColor, vec3(0.), alpha), uColor == vec3(0.) ? alpha : 1.);
}
`;
</script>
