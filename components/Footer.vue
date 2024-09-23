<template>
    <footer>
        <p>
            <span>
                CC {{ new Date().getFullYear() }} <a class="h-card" rel="me" href="/about"><img class="p-right" src="/me.jpg" alt="" />The Paper Pilot</a>.
            </span>
            <span>
                All original content is licensed <a rel="license" href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC BY-NC-SA 4.0</a>.
            </span>
        </p>

        <p>
            Any and all opinions listed here are my own and not representative of my employers; future, past and present.
        </p>

        <p>
            <span>
                Check out my <a class="p-right" href="https://resume.incremental.social/thepaperpilot/thepaperpilot">resume</a>. (not seeking new opportunities)
            </span>
        </p>

        <p>
            <span>
                Site built from <a class="p-right" :href="`https://code.incremental.social/thepaperpilot/pages/commit/${buildCommitHash}`">this commit</a> on <time>{{ buildTime }}</time>.
            </span>
            <span>
                (Thorough) <NuxtLink to="https://www.thepaperpilot.org/licenses.txt">legal disclaimers</NuxtLink>.
            </span>
        </p>
    </footer>
</template>

<script setup lang="ts">
const { buildCommitHash, buildTime } = useRuntimeConfig().public;
</script>

<style lang="css" scoped>
footer {
    padding: 1em;
    font-size: small;
    background: var(--nord2);
    line-height: 24px;
}

p, a {
    display: flex;
    align-items: center;
}

p {
    margin: 0;
    flex-flow: row wrap;
    align-items: start;
}

a {
    color: var(--nord8);
}

p > span {
    display: flex;
}

p > span:has( + span) {
    margin-right: 4px;
}

p > :not(span), span > * {
    margin-left: 4px;
}

img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
}

.p-right {
    margin-right: 4px;
}
</style>
