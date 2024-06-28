import{k as M,C as n,p as h,q as y,I as o,E as r,u as e,F as b,_ as C,r as U,o as F,m as P,Q as s,aA as O,x as k,D as B,ae as I,R as $,S as A,K as m}from"./chunks/framework.DvHfxfnp.js";import{r as G,N as g,A as H,K as S,R as N,_ as V,V as R,n as w,t as E}from"./chunks/theme.Bb5kJd_v.js";const T=`
varying vec2 vUv;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  gl_Position = projectionMatrix * viewPosition;
  vUv = uv / .8 - 0.1;
}
`,x=`
precision mediump float;
uniform vec3 uColor;
uniform float uTime;
uniform float uSeed;
uniform vec2 uMouse;
varying vec2 vUv;
`,L=M({__name:"Hole",setup(i){const{sizes:t}=G(),a={uColor:{value:new R(.23,.26,.32)},uSeed:{value:Math.random()*100}},l=`
${w}
${x}

vec4 getColor(vec2 pos) {
    float dst = distance(pos, vec2(0.5, 0.5));
    if (dst < 0.475) {
        return vec4(uColor, 1.);
    } else if (dst < 0.5) {
        return vec4(.83, .83, .83, 1.);
    }
    return vec4(0.);
}

void main() {
  vec2 distortion = vec2(0., 0.);
  distortion.x += (snoise(vec3(vUv * 50., 0. + uSeed))) / 200.;
  distortion.y += (snoise(vec3(vUv * 50., 10. + uSeed))) / 200.;
  distortion.x += (snoise(vec3(vUv * 5., 20. + uSeed))) / 8.;
  distortion.y += (snoise(vec3(vUv * 5., 30. + uSeed))) / 8.;
  gl_FragColor = getColor(vUv + distortion);
}
`,p=`
${w}
${x}
void main() {
    vec2 distortion = vec2(0., 0.);
    distortion.x += (snoise(vec3(vUv * 50., 0. + uSeed))) / 200.;
    distortion.y += (snoise(vec3(vUv * 50., 10. + uSeed))) / 200.;
    distortion.x += (snoise(vec3(vUv * 5., 20. + uSeed))) / 8.;
    distortion.y += (snoise(vec3(vUv * 5., 30. + uSeed))) / 8.;
    float dst = distance(vUv + distortion, vec2(0.5, 0.5));
    if (dst < 0.475) {
        gl_FragColor = vec4(1.);
        return;
    }
    discard;
}
`;return(_,f)=>{const c=n("TresCircleGeometry"),d=n("TresShaderMaterial"),u=n("TresMesh");return h(),y(b,null,[o(u,{position:[Math.min(e(t).width.value,e(t).height.value)/2*.05,Math.min(e(t).width.value,e(t).height.value)/2*.05,0]},{default:r(()=>[o(c,{args:[Math.min(e(t).width.value,e(t).height.value)/2*.9,360]},null,8,["args"]),o(d,{vertexShader:T,fragmentShader:l,uniforms:a,blending:e(g),transparent:!0},null,8,["blending"])]),_:1},8,["position"]),o(u,{position:[Math.min(e(t).width.value,e(t).height.value)/2*.05,Math.min(e(t).width.value,e(t).height.value)/2*.05,0],renderOrder:0},{default:r(()=>[o(c,{args:[Math.min(e(t).width.value,e(t).height.value)/2*.9,360]},null,8,["args"]),o(d,{vertexShader:T,fragmentShader:p,uniforms:a,blending:e(g),colorWrite:!1,depthWrite:!1,depthTest:!1,stencilWrite:!0,stencilRef:1,stencilFunc:e(H),stencilFail:e(S),stencilZFail:e(S),stencilZPass:e(N)},null,8,["blending","stencilFunc","stencilFail","stencilZFail","stencilZPass"])]),_:1},8,["position"]),o(V,{mask:1})],64)}}}),v=i=>($("data-v-01cfbdb8"),i=i(),A(),i),W=v(()=>s("h1",{id:"hello",tabindex:"-1"},[m("Hello! "),s("a",{class:"header-anchor",href:"#hello","aria-label":'Permalink to "Hello!"'},"​")],-1)),Z=v(()=>s("p",null,[m("I'm Anthony, or The Paper Pilot, and welcome to my "),s("a",{href:"/garden/digital-gardens/"},"digital garden"),m("!")],-1)),j={class:"hero-wrapper"},D=v(()=>s("svg",null,[s("filter",{id:"displacementFilter"},[s("feTurbulence",{type:"turbulence",baseFrequency:"0.01",numOctaves:"5",result:"turbulence"}),s("feDisplacementMap",{in2:"turbulence",in:"SourceGraphic",scale:"100",xChannelSelector:"R",yChannelSelector:"G"})])],-1)),K=v(()=>s("p",null,"This is a public website collecting all my (public) thoughts and projects all in one place. There are a lot of pages here, that link to each other wiki-style. I suggest starting your browsing with one of the recommended pages that most closely align with your interests 😃.",-1)),X=JSON.parse('{"title":"Hello!","description":"","frontmatter":{"title":"Hello!","prev":false,"next":false},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),q={name:"index.md"},z=Object.assign(q,{setup(i){const t=U(0);function a(l){t.value=l.pageX/window.innerWidth-.5}return F(()=>{window.addEventListener("mousemove",a)}),P(()=>{window.removeEventListener("mousemove",a)}),(l,p)=>{const _=n("TresOrthographicCamera"),f=n("TresAmbientLight"),c=n("TresTorusGeometry"),d=n("TresMeshBasicMaterial"),u=n("TresMesh");return h(),y("div",null,[W,Z,s("div",j,[o(e(E),{stencil:!0},{default:r(()=>[o(_,{position:[0,0,10]}),o(f,{intensity:1}),o(u,null,{default:r(()=>[o(c,{args:[1,.5,16,32]}),o(d,{color:"orange"})]),_:1}),(h(),B(I,null,{default:r(()=>[o(L)]),_:1}))]),_:1}),s("img",{class:"hero",src:O,style:k(`--x-offset: ${t.value*20}%`)},null,4)]),D,K])}}}),Y=C(z,[["__scopeId","data-v-01cfbdb8"]]);export{X as __pageData,Y as default};
