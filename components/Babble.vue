<template>
  <div :id="stageId" ref="stage"></div>
</template>

<script lang="ts" setup>
import babble from "babble.js";
import { generateUUID } from "three/src/math/MathUtils.js";

const props = defineProps<{
  numCharacters: number;
  puppetScale?: number;
  assetsPath: string;
}>();

const stageId = generateUUID();
const stage = ref<babble.Stage>();
const stageRef = useTemplateRef("stage");

defineExpose({ stage });

const observer = new ResizeObserver((entries) => {
    const size = entries[0]?.contentRect;
    if (stage.value && size) {

  stage.value.resize(null, size.width, size.height);
    }
});

onMounted(() => {
  stage.value = new babble.Stage(
    stageId,
    {
      numCharacters: props.numCharacters,
      puppetScale: props.puppetScale,
      assets: []
    },
    {},
    props.assetsPath,
    () => {}
  );

  observer.observe(stageRef.value!);
});

watch(props, ({ numCharacters, puppetScale }) => {
  if (stage.value) {
    stage.value.environment.numCharacters = numCharacters;
    stage.value.environment.puppetScale = puppetScale;
  }
});
</script>
