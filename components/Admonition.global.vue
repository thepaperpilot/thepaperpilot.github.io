<template>
  <blockquote :class="{ type }" :style="`--admonition-color: ${color}`">
    <h3>
      <Icon :name="icon" />{{
        title ?? type.charAt(0).toUpperCase() + type.slice(1)
      }}
    </h3>
    <slot />
  </blockquote>
</template>

<script setup lang="ts">
const props = defineProps<{
  type: string;
  title?: string;
}>();

const icons = {
  note: "material-symbols:info-outline",
  warning: "material-symbols:warning-outline",
  danger: "material-symbols:warning-outline",
  success: "material-symbols:check-circle-outline",
  quote: "material-symbols:format-quote"
};
const colors = {
  note: "var(--nord10)",
  warning: "var(--nord12)",
  danger: "var(--nord11)",
  success: "var(--nord14)",
  quote: "var(--nord9)",
};

const icon = computed(
  () => icons[props.type as keyof typeof icons] ?? icons.note
);
const color = computed(
  () => colors[props.type as keyof typeof colors] ?? colors.note
);
</script>

<style lang="css" scoped>
blockquote {
  border-color: var(--admonition-color);
}

h3 {
  color: var(--admonition-color);
  display: flex;
  align-items: center;
  gap: 0.5em;
}
</style>
