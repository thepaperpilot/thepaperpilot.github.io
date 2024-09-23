<template>
    <TresMesh :position="[Math.min(sizes.width.value, sizes.height.value) / 2 * .05,Math.min(sizes.width.value, sizes.height.value) / 2 * .05,0]">
        <TresCircleGeometry :args="[Math.min(sizes.width.value, sizes.height.value) / 2 * .9, 360]" />
        <TresShaderMaterial :vertexShader="vertexShader" :fragmentShader="fragmentShader" :uniforms="uniforms" :blending="NormalBlending" :transparent="true"  />
    </TresMesh>
    <TresMesh :position="[Math.min(sizes.width.value, sizes.height.value) / 2 * .05,Math.min(sizes.width.value, sizes.height.value) / 2 * .05,0]" :renderOrder="0">
        <TresCircleGeometry :args="[Math.min(sizes.width.value, sizes.height.value) / 2 * .9, 360]" />
        <TresShaderMaterial :vertexShader="vertexShader" :fragmentShader="fragmentShaderBorderless" :uniforms="uniforms" :blending="NormalBlending" :colorWrite="false" :depthWrite="false" :depthTest="false" :stencilWrite="true" :stencilRef="1" :stencilFunc="AlwaysStencilFunc" :stencilFail="KeepStencilOp" :stencilZFail="KeepStencilOp" :stencilZPass="ReplaceStencilOp" />
    </TresMesh>
    <TilingCircuitBoard :mask="1" />
</template>

<script setup lang="ts">
import { useTresContext } from '@tresjs/core';
import { AlwaysStencilFunc, KeepStencilOp, NormalBlending, ReplaceStencilOp, Vector3 } from "three";
import noise from "~/assets/noise.glsl";

const { sizes } = useTresContext();

const uniforms = {
    uColor: { value: new Vector3(0.23, 0.26, 0.32) },
    uSeed: { value: Math.random() *  100 }
};

const vertexShader = `
varying vec2 vUv;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  gl_Position = projectionMatrix * viewPosition;
  vUv = uv / .8 - 0.1;
}
`;
const fragmentVariables = `
precision mediump float;
uniform vec3 uColor;
uniform float uTime;
uniform float uSeed;
uniform vec2 uMouse;
varying vec2 vUv;
`;
const fragmentShader = `
${noise}
${fragmentVariables}

vec4 getColor(vec2 pos) {
    float dst = distance(pos, vec2(0.5, 0.5));
    if (dst < 0.475) {
        return vec4(uColor, 1.);
    } else if (dst < 0.5) {
        return vec4(.83, .83, .83, 1.);
    }
    return vec4(0.);
}

void main() {
  vec2 distortion = vec2(0., 0.);
  distortion.x += (snoise(vec3(vUv * 50., 0. + uSeed))) / 200.;
  distortion.y += (snoise(vec3(vUv * 50., 10. + uSeed))) / 200.;
  distortion.x += (snoise(vec3(vUv * 5., 20. + uSeed))) / 8.;
  distortion.y += (snoise(vec3(vUv * 5., 30. + uSeed))) / 8.;
  gl_FragColor = getColor(vUv + distortion);
}
`;
const fragmentShaderBorderless = `
${noise}
${fragmentVariables}
void main() {
    vec2 distortion = vec2(0., 0.);
    distortion.x += (snoise(vec3(vUv * 50., 0. + uSeed))) / 200.;
    distortion.y += (snoise(vec3(vUv * 50., 10. + uSeed))) / 200.;
    distortion.x += (snoise(vec3(vUv * 5., 20. + uSeed))) / 8.;
    distortion.y += (snoise(vec3(vUv * 5., 30. + uSeed))) / 8.;
    float dst = distance(vUv + distortion, vec2(0.5, 0.5));
    if (dst < 0.475) {
        gl_FragColor = vec4(1.);
        return;
    }
    discard;
}
`;
</script>
