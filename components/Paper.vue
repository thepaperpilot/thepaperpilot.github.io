<template>
    <div class="paper">
        <div class="margin-lines" />
        <div class="content">
            <slot />
        </div>
    </div>
</template>

<style lang="css" scoped>
.paper {
    width: 800px;
    max-width: 95%;
    color: var(--nord1);
    background: linear-gradient(to bottom, var(--nord6) 29px, var(--nord4) 1px);
    background-size: 100% 30px;
    line-height: 30px;
    box-shadow: 0 0 10px 1px #0003 !important;
    padding: 30px;
    position: relative;
    display: flex;
    box-sizing: border-box;
}

.paper::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 30px;
    background: radial-gradient(5px 5px at 50% 50%, var(--nord1) 0%, var(--nord1) 100%, #0000 100%);
    background-size: 100% 30px;
}

.paper::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: -15px;
    width: 30px;
    z-index: 1;
    background: linear-gradient(to bottom, transparent 11px, #333 11px, #333 13px, transparent 13px,transparent 17px, #333 17px, #333 19px, transparent 19px);
      background-size: auto;
    background-size: 100% 30px;
}

.margin-lines {
    border-left: double 7px var(--nord4);
    flex: 0 0 1;
    margin-top: -30px;
    margin-bottom: -30px;
    margin-right: 10px;
}

.content {
    display: flex;
    flex-direction: column;
    width: 100%;
}
</style>

<!-- Un-scoped css used to set the default for all child elements -->
<style lang="scss">
.paper * {
    margin-top: 0;
    margin-bottom: 0;
}

.paper a {
    color: unset;
    text-decoration: unset;
    text-underline-offset: unset;
}

.paper :not(h2, h3, h4, h5, h6) > a,
.paper .contains-link a {
    padding: 0 0.4em;
    border-radius: 0.8em 0.3em;
    background: transparent;
    background-image: none;
    background-image: linear-gradient( to right, rgba(255, 225, 0, 0.05), rgba(255, 225, 0, 0.35) 4%, rgba(255, 225, 0, 0.15) );
    box-decoration-break: clone;

    &:hover {
        color: unset;
        background-image: linear-gradient( to right, rgba(255, 225, 0, 0.1), rgba(255, 225, 0, 0.7) 4%, rgba(255, 225, 0, 0.3) );
    }
}

.paper :is(h1, h2, h3, h4, h5, h6):not(.contains-link) > a:not(:has(> a)):hover:after {
    content: "🔗"
}

.paper h1 {
    margin-bottom: 30px;
}

.paper :not(h1) + :is(h1, h2, h3, h4, h5, h6) {
    margin-top: 30px;
}

.paper p + p {
    margin-top: 30px;
}

.paper blockquote {
    border-left: dashed 2px var(--nord9);
    padding-left: 1em;
    margin: 0 1em;
}

.paper .h-entry {
    margin-top: 30px;
}
</style>
