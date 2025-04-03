<template>
    <Teleport to="body">
        <div class="container" @click.self="emits('close')" v-if="open">
            <Paper class="centered-paper">
                <slot />
            </Paper>
        </div>
        <div class="closer" v-if="open" />
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
    left: 0;
    right: 0;
    bottom: 0;
    overflow-y: auto;
    z-index: 10;
    cursor: pointer;
}

.centered-paper {
    margin-top: 5vh;
    margin-bottom: 5vh;
    margin-left: calc((100vw - min(800px, 95vw)) / 2);
    cursor: auto;
}
</style>
