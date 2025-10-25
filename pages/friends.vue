<template>
  <h1>Friends</h1>
  <p>
    These are some people and sites I recommend checking out! Think of these
    people as my digital neighbors :).
  </p>

  <div class="babble-container">
    <ClientOnly>
      <Babble
        :numCharacters="4"
        :puppetScale="0.5"
        assetsPath="/babble/assets"
        style="width: 100%; height: 240px"
        ref="yhvrStage"
      />
    </ClientOnly>
    <Admonition type="quote" title="yhvr" v-if="yhvrPuppet.currentBlurb.value">
      {{ yhvrPuppet.currentBlurb.value }}
      <div class="babble-links"  v-if="yhvrPuppet.finished.value">
        <Transition appear>
          <a href="https://yhvr.me/" v-if="yhvrPuppet.finished.value"
            ><img src="/yhvr.gif"
          /></a>
        </Transition>
        <Transition appear>
          <a
            href="https://galaxy.click/"
            v-if="yhvrPuppet.finished.value"
            style="transition-delay: 250ms"
            ><img src="/galaxy.png"
          /></a>
        </Transition>
        <Transition appear>
          <a
            href="https://goat.rest/"
            v-if="yhvrPuppet.finished.value"
            style="transition-delay: 500ms"
            ><img src="/goat-rest.gif"
          /></a>
        </Transition>
      </div>
    </Admonition>
  </div>

  <h2>Web buttons</h2>
  <p>
    These are various web buttons of people I've worked on
    <a href="/garden/my-projects">projects</a> with or otherwise consider my
    internet friends.
  </p>
  <a href="https://duducat.moe/"><img src="/duducat.gif" /></a>
  <span>
    (yes there's only one. More people need to make websites and/or website
    buttons lol)
  </span>

  <h2>Other friends</h2>
  <p>
    And here are some people who are otherwise very cool despite not having a
    web button ;).
  </p>
  <ul class="inline">
    <li><a href="https://semenar.am/">Semenar</a></li>
    <li><a href="https://jacorb90.me/">Jacorb</a></li>
    <li><a href="https://semenar.am/">Semenar</a></li>
    <li><a href="https://nxf.me/">Flame</a></li>
    <li><a href="https://linktr.ee/Drillur">Drillur</a></li>
    <li><a href="https://en.pronouns.page/@unpingabot">unpingabot</a></li>
  </ul>

  <h2>My button</h2>
  <p>I'm not an artist, but here's a button for my site you can use:</p>
  <img src="/button.png" />
</template>

<script setup lang="ts">
import { Puppet, Stage, type Layer, type PuppetOptions } from "babble.js";
import allAssets from "../public/babble/assets/assets.json";
import yhvr from "../public/babble/characters/1.json";
import Admonition from "~/components/Admonition.global.vue";
import { Transition } from "vue";

const yhvrStage = useTemplateRef("yhvrStage");
const yhvrPuppet = setupPuppet(
  yhvrStage,
  { ...yhvr, position: 5, facingLeft: true },
  "howdy!\n\nmy name is yhvr. i make incremental games and other things i find interesting."
);

useHead({
  title: "Friends | The Paper Pilot",
});

function setupPuppet(
  babble: Ref<{ stage?: Stage } | null>,
  puppetOptions: PuppetOptions,
  blurb: string,
  canStart?: Ref<boolean>
) {
  const puppet = shallowRef<Puppet>();
  const finished = ref(false);
  const currentBlurb = ref("");

  onMounted(() => {
    let watchHandle = watchEffect(() => {
      const stage = babble.value?.stage;
      if (stage == null) return;

      function traverseLayers(layer: Layer) {
        if (layer.id) {
          stage?.addAsset(
            layer.id,
            allAssets[layer.id as keyof typeof allAssets],
            () => {}
          );
        }
        if (layer.children) {
          layer.children.forEach(traverseLayers);
        }
      }

      puppetOptions.layers.children.forEach(traverseLayers);
      const puppet = stage?.addPuppet(puppetOptions, puppetOptions.name);
      if (puppet) {
        // Who needs cutscenes? lmao
        // I couldn't find a babbleMM exe anyways
        new Promise(async () => {
          if (canStart) {
            await new Promise<void>((resolve) => {
              const watchHandle = watch(
                canStart,
                (canStart) => {
                  if (canStart) {
                    watchHandle();
                    resolve();
                  }
                },
                { immediate: true }
              );
            });
          }

          puppet.target = puppet.position === 5 ? 4 : 1;
          await new Promise((resolve) => setTimeout(resolve, 1000));

          puppet.setBabbling(true);
          await new Promise<void>((resolve) => {
            const intervalId = setInterval(() => {
              currentBlurb.value = blurb.slice(
                0,
                currentBlurb.value.length + 1
              );
              if (currentBlurb.value === blurb) {
                clearInterval(intervalId);
                resolve();
              }
            }, 20);
          });
          puppet.setBabbling(false);

          finished.value = true;
        });
      }

      watchHandle();
    });
  });

  return { puppet, finished, currentBlurb };
}
</script>

<style scoped>
img {
  width: 88px;
  height: 31px;
  margin-bottom: -1px;
  image-rendering: pixelated;
}

a:has(img) {
  height: 30px;
  width: 88px;
  display: inline-block;
  padding: 0px;
  margin-right: 4px;
}

a:has(img)::after {
  display: none;
}

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
