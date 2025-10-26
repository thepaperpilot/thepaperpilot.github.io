<template>
  <ClientOnly>
    <Teleport to="#asides">
      <div class="aside" :style="{ order }">
        <slot />
      </div>
    </Teleport>
  </ClientOnly>
</template>

<script setup lang="ts">
defineProps<{
  order: number;
}>();
</script>

<style lang="css" scoped>
.aside {
  background: #feff9c !important;
  padding: 1em;
  color: var(--nord1);
  margin-top: 18px;
  position: relative;
}

.aside::before {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
  height: 60px;
}
</style>
