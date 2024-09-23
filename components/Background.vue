<template>
    <div class="background">
        <TresCanvas>
            <TresOrthographicCamera :position="[0, 0, 10]" />
            <TresAmbientLight :intensity="1" />
            <Suspense>
                <TilingCircuitBoard />
            </Suspense>
        </TresCanvas>
    </div>
</template>

<style lang="css" scoped>
.background {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    overflow: hidden;
}
</style>
