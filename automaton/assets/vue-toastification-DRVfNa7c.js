import"./vue-DgzSkNHi.js";import{X as y,bi as mt,bo as pt,aR as o,A as u,aC as X,aA as b,y as p,bN as I,ay as L,b3 as V,P as M,bf as x,z as R,G as S,F as A,bh as vt,bS as gt,b0 as Tt,m as yt,a$ as F,Q as Ct,b1 as C,a7 as bt,am as Ot,az as St,x as _t}from"./@vue-CCfogNd1.js";var Et=Object.defineProperty,H=Object.getOwnPropertySymbols,Bt=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,k=(t,e,s)=>e in t?Et(t,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):t[e]=s,W=(t,e)=>{for(var s in e||(e={}))Bt.call(e,s)&&k(t,s,e[s]);if(H)for(var s of H(e))It.call(e,s)&&k(t,s,e[s]);return t},D=t=>typeof t=="function",w=t=>typeof t=="string",q=t=>w(t)&&t.trim().length>0,Dt=t=>typeof t=="number",T=t=>typeof t>"u",O=t=>typeof t=="object"&&t!==null,wt=t=>h(t,"tag")&&q(t.tag),J=t=>window.TouchEvent&&t instanceof TouchEvent,K=t=>h(t,"component")&&Q(t.component),Rt=t=>D(t)||O(t),Q=t=>!T(t)&&(w(t)||Rt(t)||K(t)),U=t=>O(t)&&["height","width","right","left","top","bottom"].every(e=>Dt(t[e])),h=(t,e)=>(O(t)||D(t))&&e in t,Pt=(t=>()=>t++)(0);function P(t){return J(t)?t.targetTouches[0].clientX:t.clientX}function z(t){return J(t)?t.targetTouches[0].clientY:t.clientY}var At=t=>{T(t.remove)?t.parentNode&&t.parentNode.removeChild(t):t.remove()},_=t=>K(t)?_(t.component):wt(t)?y({render(){return t}}):typeof t=="string"?t:mt(pt(t)),Nt=t=>{if(typeof t=="string")return t;const e=h(t,"props")&&O(t.props)?t.props:{},s=h(t,"listeners")&&O(t.listeners)?t.listeners:{};return{component:_(t),props:e,listeners:s}},Lt=()=>typeof window<"u",$=class{constructor(){this.allHandlers={}}getHandlers(t){return this.allHandlers[t]||[]}on(t,e){const s=this.getHandlers(t);s.push(e),this.allHandlers[t]=s}off(t,e){const s=this.getHandlers(t);s.splice(s.indexOf(e)>>>0,1)}emit(t,e){this.getHandlers(t).forEach(a=>a(e))}},Vt=t=>["on","off","emit"].every(e=>h(t,e)&&D(t[e])),i;(function(t){t.SUCCESS="success",t.ERROR="error",t.WARNING="warning",t.INFO="info",t.DEFAULT="default"})(i||(i={}));var B;(function(t){t.TOP_LEFT="top-left",t.TOP_CENTER="top-center",t.TOP_RIGHT="top-right",t.BOTTOM_LEFT="bottom-left",t.BOTTOM_CENTER="bottom-center",t.BOTTOM_RIGHT="bottom-right"})(B||(B={}));var l;(function(t){t.ADD="add",t.DISMISS="dismiss",t.UPDATE="update",t.CLEAR="clear",t.UPDATE_DEFAULTS="update_defaults"})(l||(l={}));var d="Vue-Toastification",c={type:{type:String,default:i.DEFAULT},classNames:{type:[String,Array],default:()=>[]},trueBoolean:{type:Boolean,default:!0}},Y={type:c.type,customIcon:{type:[String,Boolean,Object,Function],default:!0}},E={component:{type:[String,Object,Function,Boolean],default:"button"},classNames:c.classNames,showOnHover:{type:Boolean,default:!1},ariaLabel:{type:String,default:"close"}},N={timeout:{type:[Number,Boolean],default:5e3},hideProgressBar:{type:Boolean,default:!1},isRunning:{type:Boolean,default:!1}},Z={transition:{type:[Object,String],default:`${d}__bounce`}},Mt={position:{type:String,default:B.TOP_RIGHT},draggable:c.trueBoolean,draggablePercent:{type:Number,default:.6},pauseOnFocusLoss:c.trueBoolean,pauseOnHover:c.trueBoolean,closeOnClick:c.trueBoolean,timeout:N.timeout,hideProgressBar:N.hideProgressBar,toastClassName:c.classNames,bodyClassName:c.classNames,icon:Y.customIcon,closeButton:E.component,closeButtonClassName:E.classNames,showCloseButtonOnHover:E.showOnHover,accessibility:{type:Object,default:()=>({toastRole:"alert",closeButtonLabel:"close"})},rtl:{type:Boolean,default:!1},eventBus:{type:Object,required:!1,default:()=>new $}},$t={id:{type:[String,Number],required:!0,default:0},type:c.type,content:{type:[String,Object,Function],required:!0,default:""},onClick:{type:Function,default:void 0},onClose:{type:Function,default:void 0}},Ft={container:{type:[Object,Function],default:()=>document.body},newestOnTop:c.trueBoolean,maxToasts:{type:Number,default:20},transition:Z.transition,toastDefaults:Object,filterBeforeCreate:{type:Function,default:t=>t},filterToasts:{type:Function,default:t=>t},containerClassName:c.classNames,onMounted:Function,shareAppContext:[Boolean,Object]},f={CORE_TOAST:Mt,TOAST:$t,CONTAINER:Ft,PROGRESS_BAR:N,ICON:Y,TRANSITION:Z,CLOSE_BUTTON:E},tt=y({name:"VtProgressBar",props:f.PROGRESS_BAR,data(){return{hasClass:!0}},computed:{style(){return{animationDuration:`${this.timeout}ms`,animationPlayState:this.isRunning?"running":"paused",opacity:this.hideProgressBar?0:1}},cpClass(){return this.hasClass?`${d}__progress-bar`:""}},watch:{timeout(){this.hasClass=!1,this.$nextTick(()=>this.hasClass=!0)}},mounted(){this.$el.addEventListener("animationend",this.animationEnded)},beforeUnmount(){this.$el.removeEventListener("animationend",this.animationEnded)},methods:{animationEnded(){this.$emit("close-toast")}}});function Ht(t,e){return o(),u("div",{style:X(t.style),class:b(t.cpClass)},null,6)}tt.render=Ht;var kt=tt,et=y({name:"VtCloseButton",props:f.CLOSE_BUTTON,computed:{buttonComponent(){return this.component!==!1?_(this.component):"button"},classes(){const t=[`${d}__close-button`];return this.showOnHover&&t.push("show-on-hover"),t.concat(this.classNames)}}}),Ut=M(" × ");function zt(t,e){return o(),p(V(t.buttonComponent),L({"aria-label":t.ariaLabel,class:t.classes},t.$attrs),{default:I(()=>[Ut]),_:1},16,["aria-label","class"])}et.render=zt;var jt=et,st={},Gt={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"check-circle",class:"svg-inline--fa fa-check-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Xt=S("path",{fill:"currentColor",d:"M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"},null,-1),xt=[Xt];function Wt(t,e){return o(),u("svg",Gt,xt)}st.render=Wt;var qt=st,nt={},Jt={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"info-circle",class:"svg-inline--fa fa-info-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},Kt=S("path",{fill:"currentColor",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"},null,-1),Qt=[Kt];function Yt(t,e){return o(),u("svg",Jt,Qt)}nt.render=Yt;var j=nt,at={},Zt={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-circle",class:"svg-inline--fa fa-exclamation-circle fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},te=S("path",{fill:"currentColor",d:"M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),ee=[te];function se(t,e){return o(),u("svg",Zt,ee)}at.render=se;var ne=at,ot={},ae={"aria-hidden":"true",focusable:"false","data-prefix":"fas","data-icon":"exclamation-triangle",class:"svg-inline--fa fa-exclamation-triangle fa-w-18",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 576 512"},oe=S("path",{fill:"currentColor",d:"M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"},null,-1),re=[oe];function ie(t,e){return o(),u("svg",ae,re)}ot.render=ie;var le=ot,rt=y({name:"VtIcon",props:f.ICON,computed:{customIconChildren(){return h(this.customIcon,"iconChildren")?this.trimValue(this.customIcon.iconChildren):""},customIconClass(){return w(this.customIcon)?this.trimValue(this.customIcon):h(this.customIcon,"iconClass")?this.trimValue(this.customIcon.iconClass):""},customIconTag(){return h(this.customIcon,"iconTag")?this.trimValue(this.customIcon.iconTag,"i"):"i"},hasCustomIcon(){return this.customIconClass.length>0},component(){return this.hasCustomIcon?this.customIconTag:Q(this.customIcon)?_(this.customIcon):this.iconTypeComponent},iconTypeComponent(){return{[i.DEFAULT]:j,[i.INFO]:j,[i.SUCCESS]:qt,[i.ERROR]:le,[i.WARNING]:ne}[this.type]},iconClasses(){const t=[`${d}__icon`];return this.hasCustomIcon?t.concat(this.customIconClass):t}},methods:{trimValue(t,e=""){return q(t)?t.trim():e}}});function ce(t,e){return o(),p(V(t.component),{class:b(t.iconClasses)},{default:I(()=>[M(x(t.customIconChildren),1)]),_:1},8,["class"])}rt.render=ce;var ue=rt,it=y({name:"VtToast",components:{ProgressBar:kt,CloseButton:jt,Icon:ue},inheritAttrs:!1,props:Object.assign({},f.CORE_TOAST,f.TOAST),data(){return{isRunning:!0,disableTransitions:!1,beingDragged:!1,dragStart:0,dragPos:{x:0,y:0},dragRect:{}}},computed:{classes(){const t=[`${d}__toast`,`${d}__toast--${this.type}`,`${this.position}`].concat(this.toastClassName);return this.disableTransitions&&t.push("disable-transition"),this.rtl&&t.push(`${d}__toast--rtl`),t},bodyClasses(){return[`${d}__toast-${w(this.content)?"body":"component-body"}`].concat(this.bodyClassName)},draggableStyle(){return this.dragStart===this.dragPos.x?{}:this.beingDragged?{transform:`translateX(${this.dragDelta}px)`,opacity:1-Math.abs(this.dragDelta/this.removalDistance)}:{transition:"transform 0.2s, opacity 0.2s",transform:"translateX(0)",opacity:1}},dragDelta(){return this.beingDragged?this.dragPos.x-this.dragStart:0},removalDistance(){return U(this.dragRect)?(this.dragRect.right-this.dragRect.left)*this.draggablePercent:0}},mounted(){this.draggable&&this.draggableSetup(),this.pauseOnFocusLoss&&this.focusSetup()},beforeUnmount(){this.draggable&&this.draggableCleanup(),this.pauseOnFocusLoss&&this.focusCleanup()},methods:{hasProp:h,getVueComponentFromObj:_,closeToast(){this.eventBus.emit(l.DISMISS,this.id)},clickHandler(){this.onClick&&this.onClick(this.closeToast),this.closeOnClick&&(!this.beingDragged||this.dragStart===this.dragPos.x)&&this.closeToast()},timeoutHandler(){this.closeToast()},hoverPause(){this.pauseOnHover&&(this.isRunning=!1)},hoverPlay(){this.pauseOnHover&&(this.isRunning=!0)},focusPause(){this.isRunning=!1},focusPlay(){this.isRunning=!0},focusSetup(){addEventListener("blur",this.focusPause),addEventListener("focus",this.focusPlay)},focusCleanup(){removeEventListener("blur",this.focusPause),removeEventListener("focus",this.focusPlay)},draggableSetup(){const t=this.$el;t.addEventListener("touchstart",this.onDragStart,{passive:!0}),t.addEventListener("mousedown",this.onDragStart),addEventListener("touchmove",this.onDragMove,{passive:!1}),addEventListener("mousemove",this.onDragMove),addEventListener("touchend",this.onDragEnd),addEventListener("mouseup",this.onDragEnd)},draggableCleanup(){const t=this.$el;t.removeEventListener("touchstart",this.onDragStart),t.removeEventListener("mousedown",this.onDragStart),removeEventListener("touchmove",this.onDragMove),removeEventListener("mousemove",this.onDragMove),removeEventListener("touchend",this.onDragEnd),removeEventListener("mouseup",this.onDragEnd)},onDragStart(t){this.beingDragged=!0,this.dragPos={x:P(t),y:z(t)},this.dragStart=P(t),this.dragRect=this.$el.getBoundingClientRect()},onDragMove(t){this.beingDragged&&(t.preventDefault(),this.isRunning&&(this.isRunning=!1),this.dragPos={x:P(t),y:z(t)})},onDragEnd(){this.beingDragged&&(Math.abs(this.dragDelta)>=this.removalDistance?(this.disableTransitions=!0,this.$nextTick(()=>this.closeToast())):setTimeout(()=>{this.beingDragged=!1,U(this.dragRect)&&this.pauseOnHover&&this.dragRect.bottom>=this.dragPos.y&&this.dragPos.y>=this.dragRect.top&&this.dragRect.left<=this.dragPos.x&&this.dragPos.x<=this.dragRect.right?this.isRunning=!1:this.isRunning=!0}))}}}),de=["role"];function he(t,e){const s=C("Icon"),a=C("CloseButton"),v=C("ProgressBar");return o(),u("div",{class:b(t.classes),style:X(t.draggableStyle),onClick:e[0]||(e[0]=(...n)=>t.clickHandler&&t.clickHandler(...n)),onMouseenter:e[1]||(e[1]=(...n)=>t.hoverPause&&t.hoverPause(...n)),onMouseleave:e[2]||(e[2]=(...n)=>t.hoverPlay&&t.hoverPlay(...n))},[t.icon?(o(),p(s,{key:0,"custom-icon":t.icon,type:t.type},null,8,["custom-icon","type"])):R("v-if",!0),S("div",{role:t.accessibility.toastRole||"alert",class:b(t.bodyClasses)},[typeof t.content=="string"?(o(),u(A,{key:0},[M(x(t.content),1)],2112)):(o(),p(V(t.getVueComponentFromObj(t.content)),L({key:1,"toast-id":t.id},t.hasProp(t.content,"props")?t.content.props:{},vt(t.hasProp(t.content,"listeners")?t.content.listeners:{}),{onCloseToast:t.closeToast}),null,16,["toast-id","onCloseToast"]))],10,de),t.closeButton?(o(),p(a,{key:1,component:t.closeButton,"class-names":t.closeButtonClassName,"show-on-hover":t.showCloseButtonOnHover,"aria-label":t.accessibility.closeButtonLabel,onClick:gt(t.closeToast,["stop"])},null,8,["component","class-names","show-on-hover","aria-label","onClick"])):R("v-if",!0),t.timeout?(o(),p(v,{key:2,"is-running":t.isRunning,"hide-progress-bar":t.hideProgressBar,timeout:t.timeout,onCloseToast:t.timeoutHandler},null,8,["is-running","hide-progress-bar","timeout","onCloseToast"])):R("v-if",!0)],38)}it.render=he;var fe=it,lt=y({name:"VtTransition",props:f.TRANSITION,emits:["leave"],methods:{hasProp:h,leave(t){t instanceof HTMLElement&&(t.style.left=t.offsetLeft+"px",t.style.top=t.offsetTop+"px",t.style.width=getComputedStyle(t).width,t.style.position="absolute")}}});function me(t,e){return o(),p(yt,{tag:"div","enter-active-class":t.transition.enter?t.transition.enter:`${t.transition}-enter-active`,"move-class":t.transition.move?t.transition.move:`${t.transition}-move`,"leave-active-class":t.transition.leave?t.transition.leave:`${t.transition}-leave-active`,onLeave:t.leave},{default:I(()=>[Tt(t.$slots,"default")]),_:3},8,["enter-active-class","move-class","leave-active-class","onLeave"])}lt.render=me;var pe=lt,ct=y({name:"VueToastification",devtools:{hide:!0},components:{Toast:fe,VtTransition:pe},props:Object.assign({},f.CORE_TOAST,f.CONTAINER,f.TRANSITION),data(){return{count:0,positions:Object.values(B),toasts:{},defaults:{}}},computed:{toastArray(){return Object.values(this.toasts)},filteredToasts(){return this.defaults.filterToasts(this.toastArray)}},beforeMount(){const t=this.eventBus;t.on(l.ADD,this.addToast),t.on(l.CLEAR,this.clearToasts),t.on(l.DISMISS,this.dismissToast),t.on(l.UPDATE,this.updateToast),t.on(l.UPDATE_DEFAULTS,this.updateDefaults),this.defaults=this.$props},mounted(){this.setup(this.container)},methods:{async setup(t){D(t)&&(t=await t()),At(this.$el),t.appendChild(this.$el)},setToast(t){T(t.id)||(this.toasts[t.id]=t)},addToast(t){t.content=Nt(t.content);const e=Object.assign({},this.defaults,t.type&&this.defaults.toastDefaults&&this.defaults.toastDefaults[t.type],t),s=this.defaults.filterBeforeCreate(e,this.toastArray);s&&this.setToast(s)},dismissToast(t){const e=this.toasts[t];!T(e)&&!T(e.onClose)&&e.onClose(),delete this.toasts[t]},clearToasts(){Object.keys(this.toasts).forEach(t=>{this.dismissToast(t)})},getPositionToasts(t){const e=this.filteredToasts.filter(s=>s.position===t).slice(0,this.defaults.maxToasts);return this.defaults.newestOnTop?e.reverse():e},updateDefaults(t){T(t.container)||this.setup(t.container),this.defaults=Object.assign({},this.defaults,t)},updateToast({id:t,options:e,create:s}){this.toasts[t]?(e.timeout&&e.timeout===this.toasts[t].timeout&&e.timeout++,this.setToast(Object.assign({},this.toasts[t],e))):s&&this.addToast(Object.assign({},{id:t},e))},getClasses(t){return[`${d}__container`,t].concat(this.defaults.containerClassName)}}});function ve(t,e){const s=C("Toast"),a=C("VtTransition");return o(),u("div",null,[(o(!0),u(A,null,F(t.positions,v=>(o(),u("div",{key:v},[Ct(a,{transition:t.defaults.transition,class:b(t.getClasses(v))},{default:I(()=>[(o(!0),u(A,null,F(t.getPositionToasts(v),n=>(o(),p(s,L({key:n.id},n),null,16))),128))]),_:2},1032,["transition","class"])]))),128))])}ct.render=ve;var ge=ct,G=(t={},e=!0)=>{const s=t.eventBus=t.eventBus||new $;e&&St(()=>{const n=_t(ge,W({},t)),r=n.mount(document.createElement("div")),g=t.onMounted;if(T(g)||g(r,n),t.shareAppContext){const m=t.shareAppContext;m===!0?console.warn(`[${d}] App to share context with was not provided.`):(n._context.components=m._context.components,n._context.directives=m._context.directives,n._context.mixins=m._context.mixins,n._context.provides=m._context.provides,n.config.globalProperties=m.config.globalProperties)}});const a=(n,r)=>{const g=Object.assign({},{id:Pt(),type:i.DEFAULT},r,{content:n});return s.emit(l.ADD,g),g.id};a.clear=()=>s.emit(l.CLEAR,void 0),a.updateDefaults=n=>{s.emit(l.UPDATE_DEFAULTS,n)},a.dismiss=n=>{s.emit(l.DISMISS,n)};function v(n,{content:r,options:g},m=!1){const ft=Object.assign({},g,{content:r});s.emit(l.UPDATE,{id:n,options:ft,create:m})}return a.update=v,a.success=(n,r)=>a(n,Object.assign({},r,{type:i.SUCCESS})),a.info=(n,r)=>a(n,Object.assign({},r,{type:i.INFO})),a.error=(n,r)=>a(n,Object.assign({},r,{type:i.ERROR})),a.warning=(n,r)=>a(n,Object.assign({},r,{type:i.WARNING})),a},Te=()=>{const t=()=>console.warn(`[${d}] This plugin does not support SSR!`);return new Proxy(t,{get(){return t}})};function ut(t){return Lt()?Vt(t)?G({eventBus:t},!1):G(t,!0):Te()}var dt=Symbol("VueToastification"),ht=new $,ye=(t,e)=>{(e==null?void 0:e.shareAppContext)===!0&&(e.shareAppContext=t);const s=ut(W({eventBus:ht},e));t.provide(dt,s)},Oe=t=>{const e=bt()?Ot(dt,void 0):void 0;return e||ut(ht)},Se=ye;export{Se as s,Oe as u};
