if(!self.define){let s,e={};const i=(i,l)=>(i=new URL(i+".js",l).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(l,n)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let u={};const t=s=>i(s,r),a={module:{uri:r},exports:u,require:t};e[r]=Promise.all(l.map((s=>a[s]||t(s)))).then((s=>(n(...s),u)))}}define(["./workbox-7369c0e1"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/@fontsource.c175eac8.css",revision:null},{url:"assets/@pixi.9bad2b8d.js",revision:null},{url:"assets/@vue.359f7754.js",revision:null},{url:"assets/amator.8216e0d2.js",revision:null},{url:"assets/bezier-easing.a990b400.js",revision:null},{url:"assets/earcut.03899505.js",revision:null},{url:"assets/eventemitter3.dc5195d7.js",revision:null},{url:"assets/gameLoop.b149ca7a.js",revision:null},{url:"assets/index.030a785e.js",revision:null},{url:"assets/index.27aee104.css",revision:null},{url:"assets/is-plain-object.906d88e8.js",revision:null},{url:"assets/lz-string.f2f3b7cf.js",revision:null},{url:"assets/nanoevents.1080beb7.js",revision:null},{url:"assets/ngraph.events.083734c6.js",revision:null},{url:"assets/panzoom.9e1878dd.js",revision:null},{url:"assets/querystring.b35d81f8.js",revision:null},{url:"assets/sortablejs.e4e9a931.js",revision:null},{url:"assets/url.1821b64b.js",revision:null},{url:"assets/vue-next-select.9e6f4164.css",revision:null},{url:"assets/vue-next-select.d15705a0.js",revision:null},{url:"assets/vue-panzoom.f6869ea5.js",revision:null},{url:"assets/vue-textarea-autosize.35804eaf.js",revision:null},{url:"assets/vue-toastification.4b5f8ac8.css",revision:null},{url:"assets/vue-toastification.7ec3a26c.js",revision:null},{url:"assets/vue.dd1d82d0.js",revision:null},{url:"assets/vuedraggable.179e27ef.js",revision:null},{url:"assets/wheel.f03080ac.js",revision:null},{url:"assets/workbox-window.4a8794bb.js",revision:null},{url:"index.html",revision:"6f99bc49d665a0c763800721ce021575"},{url:"favicon.ico",revision:"eead31eb5b19fa3bdc34af83d898c0b7"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"apple-touch-icon.png",revision:"26e53bb981d06c8069ffd9d2a14fce0e"},{url:"pwa-192x192.png",revision:"a16785d9e890858c5b508e0ef6954aaf"},{url:"pwa-512x512.png",revision:"b84004b93fd62ef6599ff179372861a1"},{url:"manifest.webmanifest",revision:"5f32ad2a77eb001e1b6a588835dc1efc"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
