<template>
  <ClientOnly>
    <Teleport to="#asides">
      <div
        ref="placeholder"
        class="graph-placeholder"
        :style="{ order }"
        @click="open"
      ></div>
    </Teleport>

    <Teleport to="body">
      <div class="asides-container" :class="{ masking }">
        <div class="graph-paper" :class="{ expanded }" :style="graphStyle">
          <slot />
        </div>
      </div>

      <div v-if="expanded" class="closer" @click.self="close" />
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
defineProps<{
  order: number;
}>();

const placeholder = useTemplateRef("placeholder");
const parentEl = ref<HTMLElement>();

const expanded = ref(false);
const startRect = ref<DOMRect>();
const masking = ref(true);

let timeoutId: NodeJS.Timeout | undefined = undefined;
watch(expanded, (expanded) => {
  clearTimeout(timeoutId);
  if (expanded) {
    masking.value = false;
  } else {
    timeoutId = setTimeout(() => (masking.value = true), 300);
  }
});

const graphStyle = computed(() => {
  if (expanded.value || !startRect.value) return {};
  const { top, left, width, height } = startRect.value;
  return {
    top: top + "px",
    left: left + "px",
    width: width + "px",
    height: height + "px",
  } as const;
});

function updatePlaceholder() {
  if (placeholder.value) {
    const oldRect = startRect.value;
    startRect.value = placeholder.value.getBoundingClientRect();
    // Fix for transitions
    if (
      (["x", "y", "width", "height"] as const).some(
        (key) => oldRect?.[key] !== startRect.value?.[key]
      )
    ) {
      requestAnimationFrame(updatePlaceholder);
    }
  }
}

function open() {
  if (expanded.value) return;
  updatePlaceholder();
  requestAnimationFrame(() => (expanded.value = true));
}

function close() {
  if (!expanded.value) return;
  updatePlaceholder();
  requestAnimationFrame(() => (expanded.value = false));
}

let observer = new MutationObserver(() => {
  // Fix for sliding asides taking a couple frames to really get going
  updatePlaceholder();
  requestAnimationFrame(() => requestAnimationFrame(updatePlaceholder));
});
watch(placeholder, (placeholder) => {
  parentEl.value?.removeEventListener("scroll", updatePlaceholder);
  observer.disconnect();

  parentEl.value = placeholder?.parentElement ?? undefined;
  if (parentEl.value) {
    parentEl.value.addEventListener("scroll", updatePlaceholder);
    observer.observe(parentEl.value, {
      childList: true,
      attributes: true,
    });
  }

  updatePlaceholder();
});

onMounted(() => {
  window.addEventListener("resize", updatePlaceholder);
});

onBeforeUnmount(() => {
  window.removeEventListener("", updatePlaceholder);
  parentEl.value?.removeEventListener("scroll", updatePlaceholder);
  observer.disconnect();
});
</script>

<style lang="css" scoped>
.asides-container.masking {
  width: 300px;
  height: calc(100% - 180px);
  position: fixed;
  left: calc((100% - 310px - min(800px, 0.95 * (100% - 310px))) / 2);
  top: 18px;
  padding-bottom: 30px;
  mask-image: linear-gradient(
    to bottom,
    transparent 0px,
    white 18px,
    white calc(100% - 30px),
    transparent
  );
  pointer-events: none;
}

@media (max-width: 1000px) {
  .asides-container.masking {
    right: 0;
    left: unset;
    top: 75px;
    height: calc(100% - 300px);
  }
}

.graph-placeholder {
  width: 100%;
  min-height: 300px;
  margin-top: 18px;
  cursor: pointer;
}

.graph-paper {
  position: fixed;
  padding: 30px;
  color: var(--nord1);
  background: linear-gradient(to bottom, transparent 29px, var(--nord4) 1px),
    linear-gradient(to right, var(--nord6) 29px, var(--nord4) 1px);
  background-size: 30px 30px;
  line-height: 30px;
  box-shadow: 0 0 10px 1px #0003 !important;
  box-sizing: border-box;
  transition: all 0.3s ease;
  z-index: 10;
  overflow: hidden;
}

.graph-paper.expanded {
  top: 5vh;
  left: 5vw;
  width: 90vw;
  height: 90vh;
  margin: 0;
  transition: all 0.3s ease;
}

.closer {
  position: fixed;
  inset: 0;
  z-index: 9;
  background: black;
  opacity: 0.3;
}
</style>
