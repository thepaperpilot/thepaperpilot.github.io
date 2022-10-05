module.exports = {
  lang: "en-US",
  title: 'The Paper Pilot',
  description: 'The Paper Pilot portfolio site',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto+Mono:ital,wght@0,400;0,600;1,400&display=swap' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['script', { defer: true, 'data-domain': 'thepaperpilot.org', src: 'https://plausible.io/js/plausible.js' }],
    ['meta', { name: 'og:description', content: 'The Paper Pilot portfolio site' }]
  ],
  lastUpdated: true,
  cleanUrls: 'with-subfolders',
  themeConfig: {
    outline: 'deep',
    nav: [
      { text: "Guide to Incrementals", link: "/guide-to-incrementals/", activeMatch: "^/guide-to-incrementals" },
      { text: "Projects", link: "/projects/", activeMatch: "^/projects" },
      { text: "Profectus", link: "https://moddingtree.com" }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/thepaperpilot" },
      { icon: "linkedin", link: "https://www.linkedin.com/pub/anthony-lawn/a9/a98/2" },
      { icon: "discord", link: "https://discord.gg/F3xveHV" }
    ],
    sidebar: {
      "guide-to-incrementals": [
        {
          text: "Ludology",
          collapsible: true,
          items: [
            { text: "Defining the Genre", link: "/guide-to-incrementals/ludology/definition" },
            { text: "Appeal to Players", link: "/guide-to-incrementals/ludology/appeal-games" },
            { text: "Appeal to Developers", link: "/guide-to-incrementals/ludology/appeal-developers" },
            { text: "What is Content?", link: "/guide-to-incrementals/ludology/content" }
          ]
        }
      ],
      "projects": [
        {
          text: "Play Now",
          items: [
            { text: "Kronos", link: "/kronos/" },
            { text: "Game Dev Tree", link: "/gamedevtree/" },
            { text: "Lit", link: "/lit/" },
            { text: "The Ascension Tree", link: "/the_ascension_tree/" },
            { text: "Dream Hero", link: "/dream/" },
            { text: "My Itch Page", link: "https://thepaperpilot.itch.io/" }
          ]
        },
        {
          text: "Downloads",
          items: [
            { text: "Dice Armor", link: "/projects/dice/" },
            { text: "Capture the Citadel", link: "/projects/citadel/"}
          ]
        },
        {
          text: "Non-Games",
          items: [
            { text: "V-ecs", link: "/projects/vecs/" },
            { text: "OptiSpeech", link: "/projects/optispeech/" },
            { text: "Babble Buds", link: "/projects/babble/" }
          ]
        }
      ]
    }
  }
}
