if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>i(s,r),o={module:{uri:r},exports:u,require:t};e[r]=Promise.all(l.map((s=>o[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-958fa2bd"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/@fontsource.f66d05e7.css",revision:null},{url:"assets/@pixi.1eac1889.js",revision:null},{url:"assets/@socket.io.aec831e2.js",revision:null},{url:"assets/@vue.4ce677c2.js",revision:null},{url:"assets/earcut.b6f90e68.js",revision:null},{url:"assets/engine.io-client.58517560.js",revision:null},{url:"assets/engine.io-parser.3f360695.js",revision:null},{url:"assets/eventemitter3.dc5195d7.js",revision:null},{url:"assets/gameLoop.67963716.js",revision:null},{url:"assets/index.43d4d036.js",revision:null},{url:"assets/index.9f7b96f7.css",revision:null},{url:"assets/ismobilejs.5c6954b9.js",revision:null},{url:"assets/lru-cache.9a21e90b.js",revision:null},{url:"assets/lz-string.f2f3b7cf.js",revision:null},{url:"assets/nanoevents.1080beb7.js",revision:null},{url:"assets/querystring.23ae9a54.js",revision:null},{url:"assets/semver.83ff78cf.js",revision:null},{url:"assets/socket.io-client.79ce0df5.js",revision:null},{url:"assets/socket.io-parser.544e37d1.js",revision:null},{url:"assets/sortablejs.cbae5b2d.js",revision:null},{url:"assets/url.e51cb87b.js",revision:null},{url:"assets/vue-next-select.0dc4e443.js",revision:null},{url:"assets/vue-next-select.9e6f4164.css",revision:null},{url:"assets/vue-textarea-autosize.35804eaf.js",revision:null},{url:"assets/vue-toastification.4b5f8ac8.css",revision:null},{url:"assets/vue-toastification.b7cd620e.js",revision:null},{url:"assets/vue.f6263579.js",revision:null},{url:"assets/vuedraggable.c3acdf62.js",revision:null},{url:"assets/workbox-window.8d14e8b7.js",revision:null},{url:"assets/yallist.fd762fe7.js",revision:null},{url:"index.html",revision:"a38c787b064141974942a14b630bf4da"},{url:"favicon.ico",revision:"eead31eb5b19fa3bdc34af83d898c0b7"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"26e53bb981d06c8069ffd9d2a14fce0e"},{url:"pwa-192x192.png",revision:"a16785d9e890858c5b508e0ef6954aaf"},{url:"pwa-512x512.png",revision:"b84004b93fd62ef6599ff179372861a1"},{url:"manifest.webmanifest",revision:"f93609f5a1f787be307fe537f0c532f3"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
