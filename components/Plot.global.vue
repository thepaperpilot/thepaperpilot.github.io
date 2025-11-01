<template>
  <ClientOnly>
    <div class="container">
      <div ref="controls" class="controls"></div>
      <div ref="plot" class="plots"></div>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
import * as Plot from "@observablehq/plot";
import type { WatchHandle } from "vue";
import katex from "katex";

const slots = useSlots();
const controls = useTemplateRef("controls");
const plot = useTemplateRef("plot");
const watchers: WatchHandle[] = [];

function range(start: number, end: number, numSteps = 200) {
  return Array.from(
    { length: numSteps },
    (_, i) => start + ((end - start) * i) / (numSteps - 1)
  );
}

function createSlider(
  label: string,
  initial: number,
  min: number,
  max: number,
  step = 1
) {
  console.log("Creating slider", { label, initial, min, max, step });
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.type = "range";
  input.min = `${min}`;
  input.max = `${max}`;
  input.step = `${step}`;
  input.value = `${initial}`;
  const span = document.createElement("span");
  span.textContent = label;
  const valueLabel = document.createElement("span");
  div.appendChild(span);
  div.appendChild(valueLabel);
  div.appendChild(input);
  const value = ref(initial);
  input.oninput = () => (value.value = Number(input.value));
  controls.value?.appendChild(div);
  watchers.push(
    watch(value, (value) => (valueLabel.innerText = `${value}`), {
      immediate: true,
    })
  );
  return value;
}

function createCheckbox(label: string, initial = false) {
  console.log("Creating checkbox", { label, initial });
  const div = document.createElement("div");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.checked = initial;
  const span = document.createElement("span");
  span.textContent = label;
  div.appendChild(span);
  div.appendChild(input);
  const value = ref(initial);
  input.oninput = () => (value.value = input.checked);
  controls.value?.appendChild(div);
  return value;
}

function createChart(
  xFn: () => number[],
  yFn: (x: number) => number,
  labelFn?: string | (() => string)
) {
  console.log("Creating chart", { xFn, yFn });
  const x = computed(xFn);
  const points = computed(() => x.value.map((x) => ({ x, y: yFn(x) })));
  let currPlot: (SVGSVGElement | HTMLElement) & Plot.Plot;
  watchers.push(
    watch(
      points,
      (points) => {
        currPlot?.remove();
        const label = toValue(labelFn);
        let labelEl;
        if (label) {
          labelEl = document.createElement("div");
          katex.render(label, labelEl);
        }
        console.log(points)
        currPlot = Plot.plot({
          marks: [
            Plot.ruleX([0]),
            Plot.ruleY([0]),
            Plot.line(points, { x: "x", y: "y" }),
            Plot.crosshair(points, { x: "x", y: "y" }),
          ],
          caption: labelEl,
          height: 360,
          width: 690
        });
        plot.value?.appendChild(currPlot);
      },
      { immediate: true }
    )
  );
}

// Note: This is not reactive to the slot value changing, and I don't think I can avoid that
// Vue says slots are only reactive during the render() call, but we really need to access it outside of that
const code = ref("");
onMounted(() => {
  let raw = slots.default?.();
  if (!raw) return;

  // The typing is weird, but in practice this is what I need:
  const children = raw[0]?.children;
  // @ts-ignore
  const defaultSlot = children.default();
  code.value = defaultSlot[0].children;
});

watch(
  [code, controls, plot],
  ([code, controls, plot]) => {
    // Cleanup
    controls?.childNodes.forEach((c) => c.remove());
    plot?.childNodes.forEach((c) => c.remove());
    watchers.splice(0).forEach((w) => w());

    if (code && controls && plot) {
      if (typeof code !== "string") {
        throw "Invalid child; expected JS string";
      }
      new Function("plot", code)({
        range,
        createSlider,
        createCheckbox,
        createChart,
      });
    }
  },
  { immediate: true }
);
</script>

<style lang="scss" scoped>
.container {
  margin: 15px 0;
  box-shadow: 0 0 10px 1px #0003 !important;
  color: var(--nord1);
}

.controls,
.plots {
  padding: 15px;
  width: 100%;
  box-sizing: border-box;
  background: var(--nord6);
}

.plots {
  border-top: solid 1px var(--nord4);
}

.controls > :deep(div) {
  padding: 0 8px;
  height: 30px;
  display: flex;
  gap: 16px;

  & span:first-child {
    flex-grow: 1;
  }
}

:deep(svg) {
  height: 360px;
  overflow: visible;
}

:deep(figcaption) {
  text-align: center;
}

.plots {
  gap: 30px;
}

:deep(.katex-html) {
  display: none;
}

.plots > :deep(figure) {
  margin: 0;
}
</style>
