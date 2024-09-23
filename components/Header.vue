<template>
    <header>
        <NuxtLink to="/" class="home">The Paper Pilot</NuxtLink>
        <div class="separator" />
        <menu id="menu">
            <Search />
            <a href="https://moddingtree.com" class="profectus">Profectus</a>
            <a href="https://incremental.social/" class="incsoc">Incremental Social</a>
            <a href="https://code.incremental.social/thepaperpilot" rel="me" class="forgejo">
                <Icon name="simple-icons:forgejo" /><span class="mobile-only">Forgejo</span>
            </a>
            <a href="https://matrix.to/#/@thepaperpilot:incremental.social" rel="me" class="matrix">
                <Icon name="simple-icons:matrix" /><span class="mobile-only">Matrix</span>
            </a>
            <a href="https://incremental.social/u/thepaperpilot" rel="me" class="fediverse">
                <Icon name="ph:fediverse-logo" /><span class="mobile-only">Fediverse</span>
            </a>
            <div class="mobile-only close-instructions">
                Tap anywhere to close
            </div>
        </menu>
        <button class="mobile-menu-toggle">Socials</button>
    </header>
</template>

<script setup lang="ts">
import Search from "./modals/Search.vue";
</script>

<style lang="css" scoped>
header {    
    width: 800px;
    max-width: 95%;
    display: flex;
    padding: 8px 30px 0 30px;
    box-sizing: border-box;
}

menu {
    display: flex;
    margin: 0;
    padding-left: 0;
}

.separator {
    flex-grow: 1;
}

a {
    text-decoration: unset;
}

.home {
    background-color: #00ffff;
    font-size: x-large;
    padding-top: 0;
}

.profectus {
    background-color: #00ff00;
}

.incsoc {
    background-color: #ff00ff;
}

.forgejo {
    background-color: #ff7700;
}

.matrix {
    background-color: #3c9a3c;
}

.fediverse {
    background-color: #a75aff;
}

.mobile-menu-toggle {
    background-color: red;
    display: none;
}

.mobile-only {
    display: none;
}

.close-instructions {
    color: var(--nord4) !important;
    margin-top: 24px !important;
    text-align: center;
}

a,
button {
    height: 36px;
    border-radius: 6px 6px 0 0;
    padding: 0 8px;
    margin-bottom: -8px;
    color: var(--nord1);
    padding-top: 4px;
    box-sizing: border-box;
}

a:hover,
button:hover,
button:focus {
    margin-bottom: unset;
    margin-top: -8px;
}

button {
    display: flex;
    border: none;
    cursor: pointer;
}

.iconify {
    width: 1.25em;
    height: 1.25em;
}

a::after {
    display: none;
}

@media (max-width: 767px) {
    #menu {
        display: none;
    }

    #menu:has(~ .mobile-menu-toggle:focus) {
        display: flex;
        position: fixed;
        z-index: 100;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: var(--nord1);
        padding: 2em;
        flex-direction: column;
    }

    #menu > * {
        background-color: transparent !important;
        color: var(--nord6) !important;
        font-size: large;
        padding: 8px !important;
        margin: 0 !important;
    }

    #menu > :not(.fediverse):not(.close-instructions) {
        border-bottom: solid 1px var(--nord4);
    }

    #menu .iconify {
        display: none;
    }

    .mobile-menu-toggle {
        display: flex;
    }

    .mobile-only {
        display: initial;
    }
}
</style>
