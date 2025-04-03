<template>
    <li><a :href="url"><Icon :name="icon" /></a></li>
</template>

<script setup lang="ts">
const props = defineProps<{
    url: string;
}>();

const icon = computed(() => {
    const hostname = new URL(props.url).hostname;
    if (hostname.endsWith("reddit.com")) {
        return "ph:reddit-logo";
    } else if (hostname.endsWith("youtube.com")) {
        return "ph:youtube-logo";
    } else if (hostname.endsWith("itch.io")) {
        return "cib:itch-io";
    } else if (hostname.endsWith("github.com")) {
        return "cib:github";
    }
    return "material-symbols:open-in-new";
});
</script>
