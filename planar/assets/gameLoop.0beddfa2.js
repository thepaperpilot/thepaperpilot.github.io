import{_ as d,s as p,p as e,a as o,l as T,D as l,b as m,g as u}from"./index.4cde4e28.js";import"./vue.c16a309b.js";import{b2 as c}from"./@vue.6b211d3c.js";/* empty css                    */import"./nanoevents.1080beb7.js";import"./lz-string.dccec454.js";import"./vue-next-select.ded54c4a.js";import"./vuedraggable.1879de79.js";import"./amator.1e5a40c8.js";import"./bezier-easing.a990b400.js";import"./sortablejs.a0f68e5e.js";import"./vue-textarea-autosize.35804eaf.js";import"./vue-panzoom.8ce6f9b1.js";import"./panzoom.30c56ba6.js";import"./wheel.f2ae740f.js";import"./ngraph.events.083734c6.js";import"./vue-toastification.9c2dad53.js";let n=null,f=null;function a(){const t=Date.now();let i=(t-e.time)/1e3;e.time=t;const r=i;if(o.lastTenTicks.push(r),o.lastTenTicks.length>10&&(o.lastTenTicks=o.lastTenTicks.slice(1)),!((f==null?void 0:f.value)&&!e.keepGoing)&&!o.hasNaN&&(i=Math.max(i,0),e.devSpeed!==0)){if(T.value=!1,e.offlineTime!=null){if(l.gt(e.offlineTime,m.offlineLimit*3600)&&(e.offlineTime=m.offlineLimit*3600),l.gt(e.offlineTime,0)&&e.devSpeed!==0){const s=Math.max(e.offlineTime/10,i);e.offlineTime=e.offlineTime-s,i+=s}else e.devSpeed===0&&(e.offlineTime+=i);(!e.offlineProd||l.lt(e.offlineTime,0))&&(e.offlineTime=null)}i=Math.min(i,m.maxTickLength),e.devSpeed!=null&&(i*=e.devSpeed),Number.isFinite(i)||(i=1e308),!l.eq(i,0)&&(e.timePlayed+=i,Number.isFinite(e.timePlayed)||(e.timePlayed=1e308),u.emit("update",i,r),p.unthrottled?(requestAnimationFrame(a),n!=null&&(clearInterval(n),n=null)):n==null&&(n=setInterval(a,50)))}}async function A(){f=(await d(()=>import("./index.4cde4e28.js").then(function(t){return t.c}),["assets/index.4cde4e28.js","assets/index.8dafe82c.css","assets/@fontsource.f66d05e7.css","assets/vue.c16a309b.js","assets/amator.1e5a40c8.js","assets/bezier-easing.a990b400.js","assets/@vue.6b211d3c.js","assets/nanoevents.1080beb7.js","assets/lz-string.dccec454.js","assets/vue-next-select.ded54c4a.js","assets/vue-next-select.9e6f4164.css","assets/vuedraggable.1879de79.js","assets/sortablejs.a0f68e5e.js","assets/vue-textarea-autosize.35804eaf.js","assets/vue-panzoom.8ce6f9b1.js","assets/panzoom.30c56ba6.js","assets/wheel.f2ae740f.js","assets/ngraph.events.083734c6.js","assets/vue-toastification.9c2dad53.js","assets/vue-toastification.4b5f8ac8.css"])).hasWon,c(f,t=>{t&&u.emit("gameWon")}),p.unthrottled?requestAnimationFrame(a):n=setInterval(a,50)}export{A as startGameLoop};
