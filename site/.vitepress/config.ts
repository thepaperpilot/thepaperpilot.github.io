import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from "vitepress";

module.exports = {
  lang: "en-US",
  title: 'The Paper Pilot',
  description: 'The Paper Pilot Personal Website',
  vite: {
    plugins: [
      SearchPlugin({
        previewLength: 62,
        buttonLabel: "Search",
        placeholder: "Search website",
        allow: [],
        ignore: [],
      })
    ],
    ssr: {
      noExternal: [
        '@nolebase/vitepress-plugin-highlight-targeted-heading'
      ]
    }
  },
  sitemap: {
    hostname: 'https://thepaperpilot.org'
  },
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Pacifico&family=Roboto+Mono:ital,wght@0,400;0,600;1,400&display=swap' }],
    ['link', { rel: 'manifest', href: '/site.webmanifest' }],
    ['link', { rel: 'alternate', type: "text/mf2+html", href: '/changelog' }],
    ['meta', { name: 'og:description', content: 'The Paper Pilot portfolio site' }]
  ],
  lastUpdated: true,
  cleanUrls: 'with-subfolders',
  themeConfig: {
    outline: 'deep',
    nav: [
      { text: "Profectus", link: "https://moddingtree.com" },
      { text: "Incremental Social", link: "https://incremental.social" }
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/thepaperpilot" },
      { icon: "linkedin", link: "https://www.linkedin.com/pub/anthony-lawn/a9/a98/2" },
      { icon: { svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" version="1.1" viewBox="0 0 27.9 32" style="background-color:white">
  <g xmlns="http://www.w3.org/2000/svg" transform="translate(-.095 .005)" fill="#040404">
    <path d="m27.1 31.2v-30.5h-2.19v-0.732h3.04v32h-3.04v-0.732z"/>
    <path d="m8.23 10.4v1.54h0.044c0.385-0.564 0.893-1.03 1.49-1.37 0.58-0.323 1.25-0.485 1.99-0.485 0.72 0 1.38 0.14 1.97 0.42 0.595 0.279 1.05 0.771 1.36 1.48 0.338-0.5 0.796-0.941 1.38-1.32 0.58-0.383 1.27-0.574 2.06-0.574 0.602 0 1.16 0.074 1.67 0.22 0.514 0.148 0.954 0.383 1.32 0.707 0.366 0.323 0.653 0.746 0.859 1.27 0.205 0.522 0.308 1.15 0.308 1.89v7.63h-3.13v-6.46c0-0.383-0.015-0.743-0.044-1.08-0.0209-0.307-0.103-0.607-0.242-0.882-0.133-0.251-0.336-0.458-0.584-0.596-0.257-0.146-0.606-0.22-1.05-0.22-0.44 0-0.796 0.085-1.07 0.253-0.272 0.17-0.485 0.39-0.639 0.662-0.159 0.287-0.264 0.602-0.308 0.927-0.052 0.347-0.078 0.697-0.078 1.05v6.35h-3.13v-6.4c0-0.338-7e-3 -0.673-0.021-1-0.0114-0.314-0.0749-0.623-0.188-0.916-0.108-0.277-0.3-0.512-0.55-0.673-0.258-0.168-0.636-0.253-1.14-0.253-0.198 0.0083-0.394 0.042-0.584 0.1-0.258 0.0745-0.498 0.202-0.705 0.374-0.228 0.184-0.422 0.449-0.584 0.794-0.161 0.346-0.242 0.798-0.242 1.36v6.62h-3.13v-11.4z"/>
    <path d="m0.936 0.732v30.5h2.19v0.732h-3.04v-32h3.03v0.732z"/>
  </g>
 </svg>` }, link: "https://matrix.to/#/@thepaperpilot:incremental.social" },
      { icon: { svg: `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg
   version="1.1"
   viewBox="0 0 334.73599 334.736"
   id="svg40"
   sodipodi:docname="logo_condensed.svg"
   inkscape:version="1.3.1 (5ab75fa947, 2023-11-03)"
   width="334.73599"
   height="334.73599"
   inkscape:export-filename="logo_condensed_forgejo.png"
   inkscape:export-xdpi="96"
   inkscape:export-ydpi="96"
   xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
   xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
   xmlns="http://www.w3.org/2000/svg"
   xmlns:svg="http://www.w3.org/2000/svg">
  <defs
     id="defs44" />
  <sodipodi:namedview
     id="namedview42"
     pagecolor="#505050"
     bordercolor="#eeeeee"
     borderopacity="1"
     inkscape:pageshadow="0"
     inkscape:pageopacity="0"
     inkscape:pagecheckerboard="0"
     showgrid="false"
     inkscape:zoom="2.8284271"
     inkscape:cx="87.327687"
     inkscape:cy="132.40574"
     inkscape:window-width="2560"
     inkscape:window-height="1369"
     inkscape:window-x="-8"
     inkscape:window-y="-8"
     inkscape:window-maximized="1"
     inkscape:current-layer="g4"
     inkscape:showpageshadow="0"
     inkscape:deskcolor="#d1d1d1"
     showguides="true">
    <sodipodi:guide
       position="264.97068,-61.5051"
       orientation="1,0"
       id="guide1"
       inkscape:locked="false" />
    <sodipodi:guide
       position="93.001002,77.044749"
       orientation="1,0"
       id="guide2"
       inkscape:locked="false" />
    <sodipodi:guide
       position="109.56249,95.005809"
       orientation="1,0"
       id="guide3"
       inkscape:locked="false" />
    <sodipodi:guide
       position="163.99999,77.505809"
       orientation="1,0"
       id="guide4"
       inkscape:locked="false" />
    <sodipodi:guide
       position="179,1.5058096"
       orientation="1,0"
       id="guide5"
       inkscape:locked="false" />
  </sodipodi:namedview>
  <g
     id="g1"
     transform="translate(-1,84.932692)">
    <path
       fill="#6b438b"
       d="m 271.24983,105.65061 q -0.36,4.08 -0.31,8.47 0.05,4.56 -4.49,8.19 -9.11,7.28 -17.84,-0.35 c -5.3,-4.65 -3.99,-10.34 -4.42,-16.25 -11.33,-3.3 -21.65,-12.470005 -22.8,-24.590005 q -0.53,-5.59 -0.95,-11.21 -0.04,-0.52 -0.53,-0.64 c -4.87,-1.23 -7.99,-2.08 -10.29,-6.94 -3.9,-8.23 0.79,-15.35 8.92,-18.12 a 0.39,0.4 77.9 0 0 0.27,-0.41 c -0.74,-8.02 -1.4,-15.08 1.56,-22.79 3.11,-8.09 9.57,-14.2599996 17.53,-17.6199996 q 4.11,-1.73 10.44,-2.07 8.68,-0.46000001 17.4,-0.26 16.85,0.37 26.28,13.5899996 c 6.43,9.02 5.96,18.48 5.03,29.16 q -0.05,0.51 0.45,0.64 c 13.7,3.61 12.56,22.82 -1.42,24.78 a 0.71,0.71 0 0 0 -0.61,0.65 c -0.38,5.39 -0.17,11.34 -2.1,16.46 q -5.7,15.160005 -22.12,19.310005 z"
       id="path28"
       style="display:inline" />
    <path
       fill="#eceff4"
       d="m 142.39,41.700605 -31,11.57 a 0.62,0.61 79.8 0 1 -0.83,-0.58 l 0.01,-19.31 q 0,-0.55 0.51,-0.74 23.03,-8.68 46.02,-17.25 c 2.57,-0.96 4.78,-0.76 7.42,-0.75 a 0.49,0.49 0 0 1 0.49,0.49 V 147.45061 a 0.79,0.79 0 0 1 -0.8,0.79 l -19.99,-0.01 q -1.17,0 -1.17,-1.16 V 42.160605 a 0.49,0.49 0 0 0 -0.66,-0.46 z"
       id="path30"
       style="display:inline" />
    <path
       fill="#eceff4"
       d="m 59.21,74.480605 h 33.95 a 0.84,0.84 0 0 1 0.84,0.84 l -0.01,18.96 a 0.84,0.84 0 0 1 -0.84,0.84 l -33.88,0.03 a 0.84,0.84 0 0 0 -0.84,0.84 l -0.08,38.580005 a 0.84,0.84 0 0 1 -0.84,0.84 l -20.11,-0.01 a 0.84,0.84 0 0 1 -0.84,-0.84 L 36.55,95.980605 a 0.84,0.84 0 0 0 -0.84,-0.84 H 1.84 a 0.84,0.84 0 0 1 -0.84,-0.84 l 0.02,-19.02 a 0.84,0.84 0 0 1 0.84,-0.84 l 33.86,0.02 a 0.84,0.84 0 0 0 0.84,-0.84 v -35.79 a 0.84,0.84 0 0 1 0.84,-0.84 l 20.13,-0.02 a 0.84,0.84 0 0 1 0.84,0.84 v 35.83 a 0.84,0.84 0 0 0 0.84,0.84 z"
       id="path32"
       style="display:inline" />
    <path
       fill="#533566"
       d="m 244.18983,105.71061 c 0.43,5.91 -0.88,11.6 4.42,16.25 q 8.73,7.63 17.84,0.35 4.54,-3.63 4.49,-8.19 -0.05,-4.39 0.31,-8.47 24.6,4 42.34,20.72 l -0.18,37.49 -110.93,0.01 -0.09,-37.61 q 17.53,-16.43 41.8,-20.55 z"
       id="path34"
       style="display:inline" />
    <path
       fill="#6b438b"
       d="m 202.38983,126.26061 0.09,37.61 -21.38,-0.49 a 1.13,1.13 0 0 1 -1.04,-1.49 q 7.21,-21.29 22.33,-35.63 z"
       id="path36"
       style="display:inline" />
    <path
       fill="#6b438b"
       d="m 313.58983,126.37061 q 12.71,12.03 19.9,29.52 1.79,4.36 2.23,6.86 0.11,0.61 -0.51,0.62 l -21.8,0.49 z"
       id="path38"
       style="display:inline" />
    <g
       transform="matrix(0.77226665,0,0,0.77226665,154.89692,5.2164554)"
       id="g4"
       style="display:none">
      <path
         d="M 58,168 V 70 a 50,50 0 0 1 50,-50 h 20"
         class="orange"
         id="path1"
         style="fill:none;stroke:#ff6600;stroke-width:25" />
      <path
         d="m 58,168 v -30 a 50,50 0 0 1 50,-50 h 20"
         class="red"
         id="path2-3"
         style="fill:none;stroke:#d40000;stroke-width:25" />
      <circle
         cx="142"
         cy="20"
         r="18"
         class="orange"
         id="circle2"
         style="fill:none;stroke:#ff6600;stroke-width:15" />
      <circle
         cx="142"
         cy="88"
         r="18"
         class="red"
         id="circle3"
         style="fill:none;stroke:#d40000;stroke-width:15" />
      <circle
         cx="58"
         cy="180"
         r="18"
         class="red"
         id="circle4"
         style="fill:none;stroke:#d40000;stroke-width:15" />
    </g>
  </g>
</svg>
` }, link: "https://incremental.social/u/thepaperpilot" }
    ],
    sidebar: [
      {
        text: "Recommended Pages",
        items: [
          { text: "My Projects", link: "/garden/my-projects" },
          { text: "Guide to Incrementals", link: "/garden/guide-to-incrementals" },
          { text: "The Small Web", link: "/garden/the-small-web" },
          { text: "Fedi v2", link: "/garden/fedi-v2" },
        ]
      },
      { text: "Changelog", link: "/changelog" }
    ]
  }
}
