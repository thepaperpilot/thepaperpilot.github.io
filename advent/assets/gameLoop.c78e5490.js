import{_ as T,s as d,p as e,a as n,l as c,D as r,b as s,g as p}from"./index.560f42f4.js";import"./vue.dd1d82d0.js";import{b1 as v}from"./@vue.359f7754.js";/* empty css                    */import"./nanoevents.1080beb7.js";import"./lz-string.f2f3b7cf.js";import"./is-plain-object.906d88e8.js";import"./vue-next-select.d15705a0.js";import"./vue-toastification.7ec3a26c.js";import"./@pixi.9bad2b8d.js";import"./eventemitter3.dc5195d7.js";import"./earcut.03899505.js";import"./url.1821b64b.js";import"./amator.8216e0d2.js";import"./bezier-easing.a990b400.js";import"./querystring.b35d81f8.js";import"./vue-panzoom.f6869ea5.js";import"./panzoom.9e1878dd.js";import"./wheel.f03080ac.js";import"./ngraph.events.083734c6.js";import"./vuedraggable.179e27ef.js";import"./sortablejs.e4e9a931.js";import"./vue-textarea-autosize.35804eaf.js";let o=null,l=null;function a(){const t=Date.now();let i=(t-e.time)/1e3;e.time=t;const m=i;if(n.lastTenTicks.push(m),n.lastTenTicks.length>10&&(n.lastTenTicks=n.lastTenTicks.slice(1)),(l==null?void 0:l.value)&&!e.keepGoing||n.hasNaN||(i=Math.max(i,0),e.devSpeed===0))return;if(c.value=!1,e.offlineTime!=null){if(r.gt(e.offlineTime,s.offlineLimit*3600)&&(e.offlineTime=s.offlineLimit*3600),r.gt(e.offlineTime,0)&&e.devSpeed!==0){const u=Math.max(e.offlineTime/10,i);e.offlineTime=e.offlineTime-u,i+=u}else e.devSpeed===0&&(e.offlineTime+=i);(!e.offlineProd||r.lt(e.offlineTime,0))&&(e.offlineTime=null)}if(i=Math.min(i,s.maxTickLength),e.devSpeed!=null&&(i*=e.devSpeed),Number.isFinite(i)||(i=1e308),r.eq(i,0))return;e.timePlayed+=i,Number.isFinite(e.timePlayed)||(e.timePlayed=1e308);let f=m;for(;f>1;)p.emit("update",i/m,1),f--;p.emit("update",i*f/m,f),d.unthrottled?(requestAnimationFrame(a),o!=null&&(clearInterval(o),o=null)):o==null&&(o=setInterval(a,50))}async function R(){l=(await T(()=>import("./index.560f42f4.js").then(function(t){return t.c}),["assets/index.560f42f4.js","assets/index.538274e6.css","assets/@fontsource.c175eac8.css","assets/vue.dd1d82d0.js","assets/amator.8216e0d2.js","assets/bezier-easing.a990b400.js","assets/@vue.359f7754.js","assets/nanoevents.1080beb7.js","assets/lz-string.f2f3b7cf.js","assets/is-plain-object.906d88e8.js","assets/vue-next-select.d15705a0.js","assets/vue-next-select.9e6f4164.css","assets/vue-toastification.7ec3a26c.js","assets/vue-toastification.4b5f8ac8.css","assets/@pixi.9bad2b8d.js","assets/eventemitter3.dc5195d7.js","assets/earcut.03899505.js","assets/url.1821b64b.js","assets/querystring.b35d81f8.js","assets/vue-panzoom.f6869ea5.js","assets/panzoom.9e1878dd.js","assets/wheel.f03080ac.js","assets/ngraph.events.083734c6.js","assets/vuedraggable.179e27ef.js","assets/sortablejs.e4e9a931.js","assets/vue-textarea-autosize.35804eaf.js"])).hasWon,v(l,t=>{t&&p.emit("gameWon")}),d.unthrottled?requestAnimationFrame(a):o=setInterval(a,50)}export{R as startGameLoop};
