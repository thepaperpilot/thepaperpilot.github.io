<template>
  <div
    class="babble-container"
    ref="container"
    :class="puppetOptions.position > 3 ? 'padRight' : 'padLeft'"
  >
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
        <ul v-if="links" class="inline">
          <Transition appear v-for="({ text, link }, i) in links">
            <li v-if="finished" :style="`transition-delay: ${i * 250}ms`">
              <a :href="link">{{ text }}</a>
            </li>
          </Transition>
        </ul>
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
    buttons?: {
      image: string;
      link: string;
    }[];
    links?: {
      text: string;
      link: string;
    }[];
    canStart?: boolean;
  }>(),
  {
    canStart: true,
  }
);

const visibleInViewport = ref(false);
const observer = new IntersectionObserver((e) => {
  visibleInViewport.value = e.some((e) => e.isIntersecting);
}, {});

const babble = useTemplateRef("babble");
const container = useTemplateRef("container");
const puppet = shallowRef<Puppet>();
const finished = ref(false);
const currentBlurb = ref("");

watch(container, (container) => {
  observer.disconnect();
  container && observer.observe(container);
});

defineExpose({ visibleInViewport, finished });

async function onReady() {
  const stage = babble.value!.stage!;
  async function traverseLayers(layer: Layer) {
    const promises: Promise<void>[] = [];
    if (layer.id) {
      promises.push(new Promise(resolve => stage.addAsset(
        layer.id!,
        allAssets[layer.id as keyof typeof allAssets],
        resolve
      )));
    }
    if (layer.children) {
      promises.push(...layer.children.map(traverseLayers));
    }
    await Promise.all(promises);
  }

  await Promise.all(props.puppetOptions.layers.children.map(traverseLayers));
  stage.clearPuppets();
  puppet.value = stage.addPuppet(props.puppetOptions, props.puppetOptions.name);
  if (puppet.value) {
    // Who needs cutscenes? lmao
    // I couldn't find a babbleMM exe anyways
    const actor = puppet.value;
    new Promise(async () => {
      await new Promise<void>((resolve) => {
        if (props.canStart && visibleInViewport.value) {
          resolve();
          return;
        }
        const canStartHandle = watch(
          () => props.canStart && visibleInViewport.value,
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
  min-height: 240px;
  padding-top: 30px;
  z-index: 1;
  box-sizing: border-box;
}

.padLeft {
  padding-left: calc(min(240px, 25%));
}

.padRight {
  padding-right: calc(min(240px, 25%));
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
  display: flex;
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
