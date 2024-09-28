import fs from "fs";
import { walk } from "./utils/fs-utils.js";
import { POST_TYPES } from "./post_types";
import type { PostType } from "./types";

const feedProps = { rel: 'alternate', type: "text/mf2+html" };

// https://nuxt.com/docs/api/configuration/nuxt-config
export default async () => {
    // Get all tags without using Nuxt Content
    const tags: Record<string, number> = {};
    await walk("./content/posts", (dir, file, resolve) => {
        const data = fs.readFileSync(file);
        resolve();
    });
    fs.writeFileSync("./assets/tags.json", JSON.stringify(tags));

    return defineNuxtConfig({
        devtools: { enabled: true },
        modules: ['@nuxt/content', '@tresjs/nuxt', '@nuxt/icon', '@nuxt/image', '@nuxtjs/sitemap'],
        
        site: {
            url: "https://thepaperpilot.org",
            name: "The Paper Pilot"
        },
        
        sitemap: {
            sitemaps: {
                pages: {
                    includeAppSources: true,
                    sources: [ '/api/sitemap/tags' ],
                    urls: [
                        "advent",
                        "dream",
                        "gamedevtree",
                        "kronos",
                        "lit",
                        "ludwig",
                        "planar",
                        "skilltreetest",
                        "the_ascension_tree"
                    ]
                },
                garden: {
                    sources: [ '/api/sitemap/garden' ]
                },
                ...Object.keys(POST_TYPES).reduce((acc, curr) => {
                    acc[POST_TYPES[curr as PostType].plural] = {
                        sources: [ `/api/sitemap/${POST_TYPES[curr as PostType].plural}` ]
                    };
                    return acc;
                }, {} as Record<string, unknown>)
            }
        },
        
        routeRules: {
            /** Pre-rendererd pages */
            '/': { prerender: true },
            '/about': { prerender: true },
            '/tags': { static: true },
            '/types': { prerender: true },
            
            /** Cached pages */
            '/garden/**': { swr: true },
            '/__sitemap__/**': { swr: true },
            '/posts': { swr: true },
            '/tags/**': { swr: true },
            '/changelog': { swr: true },
            ...Object.keys(POST_TYPES).reduce((acc, curr) => {
                acc[`/${POST_TYPES[curr as PostType].plural}`] = { swr: true };
                acc[`/${POST_TYPES[curr as PostType].plural}/**`] = { swr: 3600 };
                return acc;
            }, {} as Record<string, unknown>),
            
            /** Redirects */
            '/guide-to-incrementals': { redirect: '/garden/guide-to-incrementals' },
            '/guide-to-incrementals/design/criticism': {
                redirect: '/garden/guide-to-incrementals/navigating-criticism'
            },
            '/guide-to-incrementals/ludology/appeal-developers': {
                redirect: '/garden/guide-to-incrementals/appeal-to-developers'
            },
            '/guide-to-incrementals/ludology/appeal-gamers': {
                redirect: '/garden/guide-to-incrementals/appeal-to-players'
            },
            '/guide-to-incrementals/ludology/content': {
                redirect: '/garden/guide-to-incrementals/what-is-content'
            },
            '/guide-to-incrementals/ludology/defintion': {
                redirect: '/garden/guide-to-incrementals/defining-the-genre'
            },
            '/now': { redirect: '/garden/now' },
            '/projects': { redirect: '/garden/my-projects' },
            '/babble': { redirect: '/garden/babble-buds' },
            '/themoddingtree': { redirect: '/garden/profectus' }
        },
        
        app: {
            head: {
                meta: [
                    
                ],
                link: [
                    { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
                    {
                        rel: 'stylesheet',
                        href: 'https://fonts.googleapis.com/css2?family=Itim&display=block'
                    },
                    {
                        rel: 'alternate',
                        type: "application/rss+xml",
                        title: 'Garden Changelog',
                        href: '/changelog/rss'
                    },
                    {
                        rel: 'alternate',
                        type: "application/json+xml",
                        title: 'Garden Changelog',
                        href: '/changelog/json'
                    },
                    {
                        rel: 'alternate',
                        type: "application/rss+xml",
                        title: 'Posts',
                        href: '/posts/rss'
                    },
                    {
                        rel: 'alternate',
                        type: "application/atom+xml",
                        title: 'Posts',
                        href: '/posts/atom'
                    },
                    {
                        rel: 'alternate',
                        type: "application/json+xml",
                        title: 'Posts',
                        href: '/posts/json'
                    },
                    { rel: 'me', href: 'mailto:thepaperpilot@incremental.social' },
                    { rel: 'me', href: 'https://incremental.social/u/thepaperpilot' },
                    { rel: 'me', href: 'https://matrix.to/#/@thepaperpilot:incremental.social' },
                    { rel: 'me', href: 'https://code.incremental.social/thepaperpilot' },
                    { rel: 'me', href: 'https://www.linkedin.com/in/anthony-lawn/' },
                    { rel: 'me', href: 'https://mastodon.gamedev.place/@thepaperpilot' },
                    { rel: 'me', href: 'https://beehaw.org/u/thepaperpilot' },
                    { rel: 'me', href: 'https://www.reddit.com/user/ThePaperPilot/' },
                    { rel: 'me', href: 'https://github.com/thepaperpilot' },
                    { rel: 'me', href: 'https://twitter.com/ThePaperPilot' },
                    {
                        rel: 'authorization_endpoint',
                        href: 'https://indie.incremental.social/auth'
                    },
                    { rel: 'token_endpoint', href: 'https://indie.incremental.social/auth/token' },
                    { rel: 'micropub', href: 'https://indie.incremental.social/micropub' },
                    {
                        rel: 'indieauth-metadata',
                        href: 'https://indie.incremental.social/.well-known/oauth-authorization-server'
                    },

                    /** Feeds */
                    { ...feedProps, href: '/posts', title: 'All posts' },
                    { ...feedProps, href: '/changelog', title: 'Garden changelog' },
                    ...Object.keys(POST_TYPES).map(type => ({
                        ...feedProps,
                        href: `/${POST_TYPES[type as PostType].plural}`,
                        title: POST_TYPES[type as PostType].plural[0].toUpperCase() +
                            POST_TYPES[type as PostType].plural.slice(1)
                    })),
                    ...Object.keys(tags).map(tag => ({
                        ...feedProps,
                        href: `/tags/${tag}`,
                        title: tag[0].toUpperCase() + tag.slice(1)
                    }))
                ],
                script: [
                    {
                        async: true,
                        src: '//gc.zgo.at/count.js',
                        'data-goatcounter': 'https://thepaperpilot.goatcounter.com/count'
                    }
                ]
            }
        },
        
        runtimeConfig: {
            public: {
                buildCommitHash: process.env.GITHUB_SHA || "COMMIT_SHA",
                buildTime: new Date().toLocaleDateString() + " at " +
                new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute:'2-digit' })
            }
        },
        
        css: [
            "~/assets/nord.css",
            "~/assets/main.css"
        ],
        
        tres: {
            glsl: true,
        },
        
        content: {
            experimental: {
                search: true
            }
        },
        
        compatibilityDate: '2024-09-14'
    });
}
