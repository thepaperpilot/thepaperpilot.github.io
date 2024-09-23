<template>
    <div id="asides" :class="{ open }" />
    <div class="asides-toggle" @click="open = !open">
        <Icon name="material-symbols:menu-open" />
    </div>
</template>

<script setup lang="ts">
const open = ref(false);
</script>

<style lang="css">
#asides {
    width: 300px;
    height: calc(100% - 180px);
    position: fixed;
    left: calc((100% - 310px - min(800px, .95 * (100% - 310px))) / 2);
    top: 18px;
    padding-bottom: 30px;
    mask-image: linear-gradient(to bottom, transparent 0px, white 18px, white calc(100% - 30px), transparent);
    overflow-y: auto;
}

.asides-toggle {
    display: none;
    position: fixed;
    right: 0;
    top: 45px;
    background-color: #ff7eb9;
    z-index: 1;
    font-size: 150%;
    color: var(--nord1);
    width: 45px;
    height: 30px;
    vertical-align: middle;
    align-items: center;
    padding-left: 4px;
    transition: width .25s ease;
    cursor: pointer;
}

.asides-toggle:hover,
.open + .asides-toggle {
    width: 60px;
}

@media (max-width: 1000px) {
    .asides-toggle {
        display: flex;
    }

    #asides {
        z-index: 1;
        right: 0;
        left: unset;
        top: 75px;
        height: calc(100% - 300px);
        transition: right .25s ease;
    }

    #asides:not(.open) {
        right: -300px;
    }
}
</style>
