<template>
    <div class="container">
        <Header />
        <Paper>
            <slot />
        </Paper>
    </div>
</template>

<style lang="css" scoped>
.container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 310px;
}

@media (max-width: 1000px) {
    .container {
        margin-left: 0;
    }
}
</style>
