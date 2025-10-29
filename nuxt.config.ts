import { defineNuxtConfig } from "nuxt/config";
import { nodePolyfills } from "vite-plugin-node-polyfills";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default async () => {
  return defineNuxtConfig({
    modules: [
      "@tresjs/nuxt",
      "@nuxt/icon",
      "@nuxt/image",
      "@nuxtjs/sitemap",
      "@nuxtjs/mdc",
      "nuxt-shiki"
    ],

    site: {
      url: "https://thepaperpilot.org",
      name: "The Paper Pilot",
    },

    sitemap: {
      sitemaps: {
        pages: {
          // includeAppSources: true,
          urls: [
            "advent",
            "dream",
            "gamedevtree",
            "kronos",
            "lit",
            "ludwig",
            "planar",
            "skilltreetest",
            "the_ascension_tree",
          ],
        },
      },
    },

    routeRules: {
      /** Pre-rendererd pages */
      "/": { prerender: true },
      "/about": { prerender: true },

      /** Cached pages */
      // '/garden/**': { swr: true },
      "/licenses": { swr: true },

      /** Redirects */
      "/guide-to-incrementals": { redirect: "/garden/guide-to-incrementals" },
      "/guide-to-incrementals/design/criticism": {
        redirect: "/garden/guide-to-incrementals/navigating-criticism",
      },
      "/guide-to-incrementals/ludology/appeal-developers": {
        redirect: "/garden/guide-to-incrementals/appeal-to-developers",
      },
      "/guide-to-incrementals/ludology/appeal-gamers": {
        redirect: "/garden/guide-to-incrementals/appeal-to-players",
      },
      "/guide-to-incrementals/ludology/content": {
        redirect: "/garden/guide-to-incrementals/what-is-content",
      },
      "/guide-to-incrementals/ludology/definition": {
        redirect: "/garden/guide-to-incrementals/defining-the-genre",
      },
      "/now": { redirect: "/garden/now" },
      "/projects": { redirect: "/garden/my-projects" },
      "/babble": { redirect: "/garden/babble-buds" },
      "/themoddingtree": { redirect: "/garden/profectus" },

      /** Page renames */
      "/garden/the-beginner-s-guide": {
        redirect: "/garden/the-beginners-guide",
      },
      "/garden/the-indieweb/amplification": {
        redirect: "/garden/amplification",
      },
      "/garden/the-indieweb/signature-blocks": {
        redirect: "/garden/signature-blocks",
      },
      "/garden/the-small-web": { redirect: "/garden/small-web" },

      /** CORS */
      "/_ipx/**": { cors: true },
    },

    app: {
      head: {
        meta: [],
        link: [
          { rel: "preconnect", href: "https://fonts.googleapis.com" },
          {
            rel: "stylesheet",
            href: "https://fonts.googleapis.com/css2?family=Itim&display=block",
          },
          { rel: "me", href: "mailto:thepaperpilot@incremental.social" },
          { rel: "me", href: "https://incremental.social/u/thepaperpilot" },
          {
            rel: "me",
            href: "https://matrix.to/#/@thepaperpilot:incremental.social",
          },
          { rel: "me", href: "https://code.incremental.social/thepaperpilot" },
          { rel: "me", href: "https://www.linkedin.com/in/anthony-lawn/" },
          { rel: "me", href: "https://mastodon.gamedev.place/@thepaperpilot" },
          { rel: "me", href: "https://beehaw.org/u/thepaperpilot" },
          { rel: "me", href: "https://www.reddit.com/user/ThePaperPilot/" },
          { rel: "me", href: "https://github.com/thepaperpilot" },
          { rel: "me", href: "https://twitter.com/ThePaperPilot" },
          { rel: "me", href: "https://galaxy.click/user/3" },
          {
            rel: "authorization_endpoint",
            href: "https://indie.incremental.social/auth",
          },
          {
            rel: "token_endpoint",
            href: "https://indie.incremental.social/auth/token",
          },
          {
            rel: "micropub",
            href: "https://indie.incremental.social/micropub",
          },
          {
            rel: "indieauth-metadata",
            href: "https://indie.incremental.social/.well-known/oauth-authorization-server",
          },
        ],
      },
    },

    css: ["~/assets/nord.css", "~/assets/main.css"],

    tres: {
      glsl: true,
    },

    compatibilityDate: "2024-09-14",

    vite: {
      plugins: [nodePolyfills()],
    },

    experimental: {
      strictTrailingSlash: true
    }
  });
};
