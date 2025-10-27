<template>
    <h1>About Me</h1>
    <div class="h-card">
        <!-- Hidden link just to ensure this counts as the h-card that represents the page -->
        <a class="u-url u-uid" style="display: none;"></a>

        <span class="p-note">I'm a software developer who likes making games and tools! I have a variety of interests, from <a href="/garden/my-projects#games">game development</a> to the <a href="/garden/fediverse">fediverse</a> to <a href="/garden/digital-gardens">digital gardens</a>.</span>

        <Card image="/me.jpg" />

        <div class="otherAvatars">
            <Card image="/avatar.jpg" :imageHeight="120" />
            <Card image="/haleyDrawing.jpg" :imageHeight="120" />
            <Card image="/headshot.jpg" :imageHeight="120" />
            <Card image="/profile.png" :imageHeight="120" />
        </div>

        I live in <span class="p-locality">Dallas</span>, <span class="p-region">Texas</span>, <span class="p-country-name">USA</span> with <a href="https://linktr.ee/myotherheart">my wife</a> and baby son. <span class="p-org h-card">I work at <span class="p-name">Topaz Labs LLC</span> as a <span class="p-job-title">Product Engineer</span>. <span class="p-role">I currently work on their web products; Express, Bloom, and Mosaic</span>.</span>

        Reach out to me:
        <!-- If updating these links, make sure to add them to the site's <head> as well -->
        <ul>
            <li>Email: <a class="u-email" href="mailto:thepaperpilot@incremental.social" rel="me">thepaperpilot@incremental.social</a></li>
            <li>Fediverse: <a class="u-url" href="https://incremental.social/u/thepaperpilot" rel="me">thepaperpilot@incremental.social</a></li>
            <li>Matrix: <a class="u-url" href="https://matrix.to/#/@thepaperpilot:incremental.social" rel="me">@thepaperpilot:incremental.social</a></li>
            <li>Forgejo: <a class="u-url" href="https://code.incremental.social/thepaperpilot" rel="me">thepaperpilot</a></li>
            <li>Galaxy: <a class="u-url" href="https://galaxy.click/user/3" rel="me">thepaperpilot</a></li>
            <li>LinkedIn: <a class="u-url" href="https://www.linkedin.com/in/anthony-lawn/" rel="me">Anthony Lawn</a></li>
        </ul>
        <br/>

        These are old accounts I don't use anymore, but they are me:
        <ul>
            <li>Mastodon: <a class="u-url" href="https://mastodon.gamedev.place/@thepaperpilot" rel="me">@thepaperpilot@mastodon.gamedev.place</a></li>
            <li>Lemmy: <a class="u-url" href="https://beehaw.org/u/thepaperpilot" rel="me">thepaperpilot@beehaw.org</a></li>
            <li>Reddit: <a class="u-url" href="https://www.reddit.com/user/ThePaperPilot/" rel="me">thepaperpilot</a></li>
            <li>Github: <a class="u-url" href="https://github.com/thepaperpilot" rel="me">thepaperpilot</a></li>
            <li>X: <a class="u-url" href="https://x.com/ThePaperPilot" rel="me">@thepaperpilot</a></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import Card from '~/components/Card.global.vue';

useHead({
    title: "About me | The Paper Pilot"
});
</script>

<style lang="css" scoped>
.otherAvatars {
    display: flex;
    flex-wrap: wrap;
    max-width: calc(100% - 30px);
}

.otherAvatars .card {
    height: 4lh;
}

.otherAvatars .card img {
    max-height: 4lh;
}

@media (max-width: 767px) {
    .otherAvatars .card {
        height: 3lh;
    }
    
    .otherAvatars .card img {
        max-height: 3lh;
    }
}

li a {
    word-break: break-word;
}
</style>
