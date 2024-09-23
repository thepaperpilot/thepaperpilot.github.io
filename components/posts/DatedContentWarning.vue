<template>
    <div class="old-warning" v-if="yearsDiff > 2">
        This is an old post made over {{Math.floor(yearsDiff)}} years ago!<br/>
        My views <NuxtLink to="/garden/my-political-journey">change over time</NuxtLink> and my older timeline posts may not reflect my current views!
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    published?: number;
}>();

const yearsDiff = computed(() => props.published ? Math.floor((Date.now() - props.published) / (1000 * 60 * 60 * 24 * 365)) : 0);
</script>

<style lang="css" scoped>
.old-warning {
    background: red;
    padding: 15px;
    margin-bottom: 30px;
    font-size: 24px;
    background: white;
    border: red dashed 10px;
    position: relative;
    padding-left: 130px;
    min-height: 150px;
    box-sizing: border-box;
}
  
.old-warning::before {
    content: "STOP";
    position: absolute;
    --o: calc(50%* tan(-22.5deg));
    clip-path: polygon(var(--o) 50%, 50% var(--o), calc(100% - var(--o)) 50%, 50% calc(100% - var(--o)));
    width: 100px;
    height: 100px;
    background: red;
    left: 15px;
    top: 15px;
    text-align: center;
    color: white;
    padding-top: 32px;
    font-size: 32px;
    font-family: 'Roboto Mono';
    font-weight: 900;
    box-sizing: border-box;
}
</style>
