if(!self.define){let e,s={};const i=(i,l)=>(i=new URL(i+".js",l).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(l,n)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const t=e=>i(e,r),u={module:{uri:r},exports:o,require:t};s[r]=Promise.all(l.map((e=>u[e]||t(e)))).then((e=>(n(...e),o)))}}define(["./workbox-958fa2bd"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/@fontsource.f66d05e7.css",revision:null},{url:"assets/@socket.io.aec831e2.js",revision:null},{url:"assets/@vue.4ce677c2.js",revision:null},{url:"assets/engine.io-client.58517560.js",revision:null},{url:"assets/engine.io-parser.3f360695.js",revision:null},{url:"assets/gameLoop.ed7f4ea7.js",revision:null},{url:"assets/index.624ae6e9.js",revision:null},{url:"assets/index.7f7e174e.css",revision:null},{url:"assets/lru-cache.9506e0ec.js",revision:null},{url:"assets/lz-string.f2f3b7cf.js",revision:null},{url:"assets/nanoevents.1080beb7.js",revision:null},{url:"assets/semver.d101e2be.js",revision:null},{url:"assets/socket.io-client.79ce0df5.js",revision:null},{url:"assets/socket.io-parser.544e37d1.js",revision:null},{url:"assets/sortablejs.80af5380.js",revision:null},{url:"assets/vue-next-select.8d9e0122.js",revision:null},{url:"assets/vue-next-select.9e6f4164.css",revision:null},{url:"assets/vue-textarea-autosize.35804eaf.js",revision:null},{url:"assets/vue-toastification.4b5f8ac8.css",revision:null},{url:"assets/vue-toastification.b272a510.js",revision:null},{url:"assets/vue.5bd9f35e.js",revision:null},{url:"assets/vuedraggable.832ed13e.js",revision:null},{url:"assets/workbox-window.8d14e8b7.js",revision:null},{url:"assets/yallist.fd762fe7.js",revision:null},{url:"index.html",revision:"04421e7d384efe628d9e82f5bdc694a3"},{url:"favicon.ico",revision:"eead31eb5b19fa3bdc34af83d898c0b7"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"26e53bb981d06c8069ffd9d2a14fce0e"},{url:"pwa-192x192.png",revision:"a16785d9e890858c5b508e0ef6954aaf"},{url:"pwa-512x512.png",revision:"b84004b93fd62ef6599ff179372861a1"},{url:"manifest.webmanifest",revision:"f93609f5a1f787be307fe537f0c532f3"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
