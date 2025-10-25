<template>
  <h1>Friends</h1>
  <p>
    These are some people and sites I recommend checking out! Think of these
    people as my digital neighbors :).
  </p>

  <ClientOnly>
    <Friend
      :puppetOptions="{ ...myotherheart, position: 0, facingLeft: false }"
      blurb="Howdy! I'm an Indie Dev - Digital & Traditional 2D Artist - Gamer - Earth Science Nerd - I hand cut all of my prints, stickers, and key chains with love. <3"
      :links="[
        { text: 'linktree', link: 'https://linktr.ee/myotherheart' },
        {
          text: 'gayvampiremansion',
          link: 'https://www.tumblr.com/gayvampiremansion/',
        },
      ]"
      ref="myotherheartFriend"
    />

    <Friend
      :puppetOptions="{ ...yhvr, position: 5, facingLeft: true }"
      blurb="howdy! my name is yhvr. i make incremental games and other things i find interesting."
      :buttons="yhvrButtons"
      :canStart="
        preloadedYhvrButtons &&
        (myotherheartFriend?.finished || !myotherheartFriend?.visibleInViewport)
      "
    />
  </ClientOnly>

  <h2>Web buttons</h2>
  <p>
    These are various web buttons of people I've worked on
    <a href="/garden/my-projects">projects</a> with or otherwise consider my
    internet friends.
  </p>
  <WebButton link="https://duducat.moe/" image="/duducat.gif" />
  <span>
    (yes there's only one. More people need to make websites and/or website
    buttons lol)
  </span>

  <h2>Other friends</h2>
  <p>
    And here are some people who are otherwise very cool despite not having a
    <a href="https://indieweb.org/88x31">web button</a> ;).
  </p>
  <ul class="inline">
    <li><a href="https://semenar.am/">Semenar</a></li>
    <li><a href="https://jacorb90.me/">Jacorb</a></li>
    <li><a href="https://semenar.am/">Semenar</a></li>
    <li><a href="https://nxf.me/">Flame</a></li>
    <li><a href="https://linktr.ee/Drillur">Drillur</a></li>
    <li><a href="https://en.pronouns.page/@unpingabot">unpingabot</a></li>
  </ul>

  <h2>My button</h2>
  <p>I'm not an artist, but here's a button for my site you can use:</p>
  <WebButton image="/button.png" link="https://paperpilot.dev" />
</template>

<script setup lang="ts">
import WebButton from "~/components/WebButton.vue";
import yhvr from "../public/babble/characters/1.json";
import myotherheart from "../public/babble/characters/2.json";

const myotherheartFriend = useTemplateRef("myotherheartFriend");

useHead({
  title: "Friends | The Paper Pilot",
});

const yhvrButtons = [
  { image: "/yhvr.gif", link: "https://yhvr.me/" },
  { image: "/galaxy.png", link: "https://galaxy.click/" },
  { image: "/goat-rest.gif", link: "https://goat.rest/" },
];
const preloadedYhvrButtons = ref(false);
onMounted(() => {
  preloadedYhvrButtons.value = false;
  Promise.all(
    yhvrButtons.map(({ image }) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = image;
        img.onload = resolve;
        img.onerror = reject;
      });
    })
  ).then(() => {
    preloadedYhvrButtons.value = true;
  });
});
</script>
