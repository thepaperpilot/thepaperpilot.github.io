<template>
    <ClientOnly>
        <Teleport to="#asides">
            <div class="aside">
                <slot />
            </div>
        </Teleport>
    </ClientOnly>
</template>

<style lang="css" scoped>
.aside {
    background: #feff9c !important;
    padding: 1em;
    color: var(--nord1);
    margin-top: 18px;
}
</style>
