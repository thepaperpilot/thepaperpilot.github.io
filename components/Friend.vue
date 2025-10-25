<template>
  <div class="babble-container">
    <Babble
      :numCharacters="4"
      :puppetScale="0.5"
      assetsPath="/babble/assets"
      style="width: 100%; height: 240px"
      ref="babble"
      @ready="onReady"
    />

    <Admonition type="quote" :title="puppetOptions.name" v-if="currentBlurb">
      {{ currentBlurb }}
      <div class="babble-links" v-if="finished">
        <Transition appear v-for="({ image, link }, i) in buttons">
          <WebButton
            :image="image"
            :link="link"
            v-if="finished"
            :style="`transition-delay: ${i * 250}ms`"
          />
        </Transition>
      </div>
    </Admonition>
  </div>
</template>

<script setup lang="ts">
import type { Layer, Puppet, PuppetOptions } from "babble.js";
import allAssets from "../public/babble/assets/assets.json";

const props = withDefaults(
  defineProps<{
    puppetOptions: PuppetOptions;
    blurb: string;
    buttons: {
      image: string;
      link: string;
    }[];
    canStart?: boolean;
  }>(),
  {
    canStart: true,
  }
);

const babble = useTemplateRef("babble");
const puppet = shallowRef<Puppet>();
const finished = ref(false);
const currentBlurb = ref("");

function onReady() {
  const stage = babble.value!.stage!;
  function traverseLayers(layer: Layer) {
    if (layer.id) {
      stage.addAsset(
        layer.id,
        allAssets[layer.id as keyof typeof allAssets],
        () => {}
      );
    }
    if (layer.children) {
      layer.children.forEach(traverseLayers);
    }
  }

  props.puppetOptions.layers.children.forEach(traverseLayers);
  stage.clearPuppets();
  puppet.value = stage.addPuppet(props.puppetOptions, props.puppetOptions.name);
  if (puppet.value) {
    // Who needs cutscenes? lmao
    // I couldn't find a babbleMM exe anyways
    const actor = puppet.value;
    new Promise(async () => {
      await new Promise<void>((resolve) => {
        if (props.canStart) {
          resolve();
          return;
        }
        const canStartHandle = watch(
          () => props.canStart,
          (canStart) => {
            if (canStart) {
              canStartHandle();
              resolve();
            }
          }
        );
      });

      actor.target = actor.position === 5 ? 4 : 1;
      await new Promise((resolve) => setTimeout(resolve, 1000));

      actor.setBabbling(true);
      await new Promise<void>((resolve) => {
        const intervalId = setInterval(() => {
          currentBlurb.value = props.blurb.slice(
            0,
            currentBlurb.value.length + 1
          );
          if (currentBlurb.value === props.blurb) {
            clearInterval(intervalId);
            resolve();
          }
        }, 20);
      });
      actor.setBabbling(false);

      finished.value = true;
    });
  }
}
</script>

<style scoped>
.babble-container {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 240px;
  padding-right: 240px;
  padding-top: 30px;
  z-index: 1;
  box-sizing: border-box;
}

.babble-container > div:has(canvas) {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}

.babble-links {
  margin-top: 30px;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
