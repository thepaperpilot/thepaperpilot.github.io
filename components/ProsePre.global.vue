<template>
  <Shiki :lang="language" :code="code" />
</template>

<script setup lang="ts">
defineProps<{
  code: string;
  language?: string;
}>();
</script>

<style lang="scss">
pre:has(> code.shiki) {
  position: relative;
  margin: 10px 0;
  padding: 20px;
  background-color: white;
  border-radius: 2px;
  box-shadow: 0px 7px 6px -9px black;

  &::before {
    content: "";
    position: absolute;
    transform: rotateZ(-30deg);
    width: 2em;
    height: 2px;
    left: 1em;
    top: 1em;
    background-color: var(--nord1);
  }
}

code.shiki {
  background: transparent !important;

  & .line {
    height: 30px;
  }
}
</style>
