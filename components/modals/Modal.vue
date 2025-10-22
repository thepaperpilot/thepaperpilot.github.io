<template>
    <Teleport to="body">
        <div class="container" v-if="open">
            <Paper class="centered-paper">
                <slot />
            </Paper>
        </div>
        <div class="closer" @click.self="emits('close')" v-if="open" />
    </Teleport>
</template>

<script lang="ts" setup>
defineProps<{
    open: boolean;
}>();

const emits = defineEmits<{
    close: [];
}>();
</script>

<style lang="css" scoped>
.closer {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    background: black;
    opacity: 0.3;
}

.container {
    position: fixed;
    top: 0;
    left: calc((100vw - min(800px, 95vw)) / 2 - 20px);
    right: calc((100vw - min(800px, 95vw)) / 2 - 20px);
    bottom: 0;
    overflow-y: auto;
    overflow-x: visible;
    z-index: 10;
    pointer-events: none;
}

.centered-paper {
    margin: 5vh auto;
    cursor: auto;
    max-width: unset;
    pointer-events: all;
}
</style>
