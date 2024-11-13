import{k as M,C as a,p as d,q as b,I as o,E as l,u as e,F as C,_ as T,r as U,o as F,m as P,Q as n,aP as O,x as k,D as I,ae as $,R as B,S as H,K as u}from"./chunks/framework.Sr2_9k8k.js";import{r as N,N as g,A as V,K as S,R as A,_ as R,V as E,n as w,t as G}from"./chunks/theme.D7x3qXxl.js";const x=`
varying vec2 vUv;

void main() {
  vec4 modelPosition = modelMatrix * vec4(position, 1.0);
  vec4 viewPosition = viewMatrix * modelPosition;
  gl_Position = projectionMatrix * viewPosition;
  vUv = uv / .8 - 0.1;
}
`,y=`
precision mediump float;
uniform vec3 uColor;
uniform float uTime;
uniform float uSeed;
uniform vec2 uMouse;
varying vec2 vUv;
`,L=M({__name:"Hole",setup(s){const{sizes:t}=N(),i={uColor:{value:new E(.23,.26,.32)},uSeed:{value:Math.random()*100}},r=`
${w}
${y}

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
`,v=`
${w}
${y}
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
`;return(h,m)=>{const p=a("TresCircleGeometry"),_=a("TresShaderMaterial"),f=a("TresMesh");return d(),b(C,null,[o(f,{position:[Math.min(e(t).width.value,e(t).height.value)/2*.05,Math.min(e(t).width.value,e(t).height.value)/2*.05,0]},{default:l(()=>[o(p,{args:[Math.min(e(t).width.value,e(t).height.value)/2*.9,360]},null,8,["args"]),o(_,{vertexShader:x,fragmentShader:r,uniforms:i,blending:e(g),transparent:!0},null,8,["blending"])]),_:1},8,["position"]),o(f,{position:[Math.min(e(t).width.value,e(t).height.value)/2*.05,Math.min(e(t).width.value,e(t).height.value)/2*.05,0],renderOrder:0},{default:l(()=>[o(p,{args:[Math.min(e(t).width.value,e(t).height.value)/2*.9,360]},null,8,["args"]),o(_,{vertexShader:x,fragmentShader:v,uniforms:i,blending:e(g),colorWrite:!1,depthWrite:!1,depthTest:!1,stencilWrite:!0,stencilRef:1,stencilFunc:e(V),stencilFail:e(S),stencilZFail:e(S),stencilZPass:e(A)},null,8,["blending","stencilFunc","stencilFail","stencilZFail","stencilZPass"])]),_:1},8,["position"]),o(R,{mask:1})],64)}}}),c=s=>(B("data-v-a285fdae"),s=s(),H(),s),W=c(()=>n("h1",{id:"hello",tabindex:"-1"},[u("Hello! "),n("a",{class:"header-anchor",href:"#hello","aria-label":'Permalink to "Hello!"'},"​")],-1)),Z=c(()=>n("p",null,[u("I'm Anthony, or The Paper Pilot, and welcome to my "),n("a",{href:"/garden/digital-gardens/"},"digital garden"),u("!")],-1)),j={class:"hero-wrapper"},D=c(()=>n("svg",null,[n("filter",{id:"displacementFilter"},[n("feTurbulence",{type:"turbulence",baseFrequency:"0.01",numOctaves:"5",result:"turbulence"}),n("feDisplacementMap",{in2:"turbulence",in:"SourceGraphic",scale:"100",xChannelSelector:"R",yChannelSelector:"G"})])],-1)),K=c(()=>n("p",null,"This is a public website collecting all my (public) thoughts and projects all in one place. There are a lot of pages here, that link to each other wiki-style. I suggest starting your browsing with one of the recommended pages that most closely align with your interests 😃.",-1)),X=JSON.parse('{"title":"Hello!","description":"","frontmatter":{"title":"Hello!","prev":false,"next":false},"headers":[],"relativePath":"index.md","filePath":"index.md"}'),q={name:"index.md"},z=Object.assign(q,{setup(s){const t=U(0);function i(r){t.value=r.pageX/window.innerWidth-.5}return F(()=>{window.addEventListener("mousemove",i)}),P(()=>{window.removeEventListener("mousemove",i)}),(r,v)=>{const h=a("TresOrthographicCamera"),m=a("TresAmbientLight");return d(),b("div",null,[W,Z,n("div",j,[o(e(G),{stencil:!0},{default:l(()=>[o(h,{position:[0,0,10]}),o(m,{intensity:1}),(d(),I($,null,{default:l(()=>[o(L)]),_:1}))]),_:1}),n("img",{class:"hero",src:O,style:k(`--x-offset: ${t.value*20}%`)},null,4)]),D,K])}}}),Y=T(z,[["__scopeId","data-v-a285fdae"]]);export{X as __pageData,Y as default};
