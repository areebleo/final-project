import{e as I,r as B,c as v,o as oe,a as se,i as ye,w as ht,R as qt,h as x,t as mt,s as je,b as Tt,d as kt,Q as be,f as Ge,g as K,j as St,k as U,u as Lt,l as _t,m as L,n as Je,p as Ze,q as _e,v as Ne,x as $t,y as xt,z as et,A as tt,B as Pt,C as we,D as Bt,E as ve,F as Rt,G as ke,H as Ae,I as nt,J as Qe,K as Ke,L as Ie,M as ot,N as zt,O as Se,P as Mt,S as bt,_ as gt,T as he,U as $e,V as D,W as E,X as Et,Y as me,Z as Ue,$ as lt,a0 as Dt,a1 as yt,a2 as Ot,a3 as At,a4 as Qt,a5 as It,a6 as Vt}from"./index.77dc75a7.js";import{u as Ve,a as Xe,r as Ft,c as Ht,b as Wt,d as jt,e as Nt,f as Kt,g as Le,h as Ut,i as Xt,j as Yt,k as Gt,l as Fe,Q as rt,m as Ye,n as it,o as ut,p as Jt}from"./QItemSection.97ceaf6b.js";import{u as Zt}from"./uid.42677368.js";import{u as ea,a as ta}from"./use-dark.42617f0a.js";import{Q as aa}from"./QItem.81a971f7.js";let na=0;const oa=["click","keydown"],la={icon:String,label:[Number,String],alert:[Boolean,String],alertIcon:String,name:{type:[Number,String],default:()=>`t_${na++}`},noCaps:Boolean,tabindex:[String,Number],disable:Boolean,contentClass:String,ripple:{type:[Boolean,Object],default:!0}};function ra(e,r,l,o){const t=ye(mt,I);if(t===I)return console.error("QTab/QRouteTab component needs to be child of QTabs"),I;const{proxy:n}=K(),s=B(null),C=B(null),f=B(null),c=v(()=>e.disable===!0||e.ripple===!1?!1:Object.assign({keyCodes:[13,32],early:!0},e.ripple===!0?{}:e.ripple)),i=v(()=>t.currentModel.value===e.name),R=v(()=>"q-tab relative-position self-stretch flex flex-center text-center"+(i.value===!0?" q-tab--active"+(t.tabProps.value.activeClass?" "+t.tabProps.value.activeClass:"")+(t.tabProps.value.activeColor?` text-${t.tabProps.value.activeColor}`:"")+(t.tabProps.value.activeBgColor?` bg-${t.tabProps.value.activeBgColor}`:""):" q-tab--inactive")+(e.icon&&e.label&&t.tabProps.value.inlineLabel===!1?" q-tab--full":"")+(e.noCaps===!0||t.tabProps.value.noCaps===!0?" q-tab--no-caps":"")+(e.disable===!0?" disabled":" q-focusable q-hoverable cursor-pointer")+(o!==void 0?o.linkClass.value:"")),S=v(()=>"q-tab__content self-stretch flex-center relative-position q-anchor--skip non-selectable "+(t.tabProps.value.inlineLabel===!0?"row no-wrap q-tab__content--inline":"column")+(e.contentClass!==void 0?` ${e.contentClass}`:"")),b=v(()=>e.disable===!0||t.hasFocus.value===!0||i.value===!1&&t.hasActiveTab.value===!0?-1:e.tabindex||0);function w(g,y){if(y!==!0&&s.value!==null&&s.value.focus(),e.disable===!0){o!==void 0&&o.hasRouterLink.value===!0&&je(g);return}if(o===void 0){t.updateModel({name:e.name}),l("click",g);return}if(o.hasRouterLink.value===!0){const d=(q={})=>{let M;const O=q.to===void 0||St(q.to,e.to)===!0?t.avoidRouteWatcher=Zt():null;return o.navigateToRouterLink(g,{...q,returnRouterError:!0}).catch(A=>{M=A}).then(A=>{if(O===t.avoidRouteWatcher&&(t.avoidRouteWatcher=!1,M===void 0&&(A===void 0||A.message.startsWith("Avoided redundant navigation")===!0)&&t.updateModel({name:e.name})),q.returnRouterError===!0)return M!==void 0?Promise.reject(M):A})};l("click",g,d),g.defaultPrevented!==!0&&d();return}l("click",g)}function P(g){Tt(g,[13,32])?w(g,!0):kt(g)!==!0&&g.keyCode>=35&&g.keyCode<=40&&g.altKey!==!0&&g.metaKey!==!0&&t.onKbdNavigate(g.keyCode,n.$el)===!0&&je(g),l("keydown",g)}function z(){const g=t.tabProps.value.narrowIndicator,y=[],d=x("div",{ref:f,class:["q-tab__indicator",t.tabProps.value.indicatorClass]});e.icon!==void 0&&y.push(x(be,{class:"q-tab__icon",name:e.icon})),e.label!==void 0&&y.push(x("div",{class:"q-tab__label"},e.label)),e.alert!==!1&&y.push(e.alertIcon!==void 0?x(be,{class:"q-tab__alert-icon",color:e.alert!==!0?e.alert:void 0,name:e.alertIcon}):x("div",{class:"q-tab__alert"+(e.alert!==!0?` text-${e.alert}`:"")})),g===!0&&y.push(d);const q=[x("div",{class:"q-focus-helper",tabindex:-1,ref:s}),x("div",{class:S.value},Ge(r.default,y))];return g===!1&&q.push(d),q}const T={name:v(()=>e.name),rootRef:C,tabIndicatorRef:f,routeData:o};oe(()=>{t.unregisterTab(T)}),se(()=>{t.registerTab(T)});function p(g,y){const d={ref:C,class:R.value,tabindex:b.value,role:"tab","aria-selected":i.value===!0?"true":"false","aria-disabled":e.disable===!0?"true":void 0,onClick:w,onKeydown:P,...y};return ht(x(g,d,z()),[[qt,c.value]])}return{renderTab:p,$tabs:t}}var ia=U({name:"QRouteTab",props:{...Lt,...la},emits:oa,setup(e,{slots:r,emit:l}){const o=_t({useDisableForRouterLinkProps:!1}),{renderTab:t,$tabs:n}=ra(e,r,l,{exact:v(()=>e.exact),...o});return L(()=>`${e.name} | ${e.exact} | ${(o.resolvedLink.value||{}).href}`,()=>{n.verifyRouteModel()}),()=>t(o.linkTag.value,o.linkAttrs.value)}});function ua(){const e=B(!Je.value);return e.value===!1&&se(()=>{e.value=!0}),e}const wt=typeof ResizeObserver!="undefined",st=wt===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var ge=U({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:r}){let l=null,o,t={width:-1,height:-1};function n(f){f===!0||e.debounce===0||e.debounce==="0"?s():l===null&&(l=setTimeout(s,e.debounce))}function s(){if(l!==null&&(clearTimeout(l),l=null),o){const{offsetWidth:f,offsetHeight:c}=o;(f!==t.width||c!==t.height)&&(t={width:f,height:c},r("resize",t))}}const{proxy:C}=K();if(wt===!0){let f;const c=i=>{o=C.$el.parentNode,o?(f=new ResizeObserver(n),f.observe(o),s()):i!==!0&&_e(()=>{c(!0)})};return se(()=>{c()}),oe(()=>{l!==null&&clearTimeout(l),f!==void 0&&(f.disconnect!==void 0?f.disconnect():o&&f.unobserve(o))}),Ze}else{let i=function(){l!==null&&(clearTimeout(l),l=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",n,Ne.passive),c=void 0)},R=function(){i(),o&&o.contentDocument&&(c=o.contentDocument.defaultView,c.addEventListener("resize",n,Ne.passive),s())};const f=ua();let c;return se(()=>{_e(()=>{o=C.$el,o&&R()})}),oe(i),C.trigger=n,()=>{if(f.value===!0)return x("object",{style:st.style,tabindex:-1,type:"text/html",data:st.url,"aria-hidden":"true",onLoad:R})}}}});function sa(e,r,l){const o=l===!0?["left","right"]:["top","bottom"];return`absolute-${r===!0?o[0]:o[1]}${e?` text-${e}`:""}`}const ca=["left","center","right","justify"];var da=U({name:"QTabs",props:{modelValue:[Number,String],align:{type:String,default:"center",validator:e=>ca.includes(e)},breakpoint:{type:[String,Number],default:600},vertical:Boolean,shrink:Boolean,stretch:Boolean,activeClass:String,activeColor:String,activeBgColor:String,indicatorColor:String,leftIcon:String,rightIcon:String,outsideArrows:Boolean,mobileArrows:Boolean,switchIndicator:Boolean,narrowIndicator:Boolean,inlineLabel:Boolean,noCaps:Boolean,dense:Boolean,contentClass:String,"onUpdate:modelValue":[Function,Array]},setup(e,{slots:r,emit:l}){const{proxy:o}=K(),{$q:t}=o,{registerTick:n}=Ve(),{registerTick:s}=Ve(),{registerTick:C}=Ve(),{registerTimeout:f,removeTimeout:c}=Xe(),{registerTimeout:i,removeTimeout:R}=Xe(),S=B(null),b=B(null),w=B(e.modelValue),P=B(!1),z=B(!0),T=B(!1),p=B(!1),g=[],y=B(0),d=B(!1);let q=null,M=null,O;const A=v(()=>({activeClass:e.activeClass,activeColor:e.activeColor,activeBgColor:e.activeBgColor,indicatorClass:sa(e.indicatorColor,e.switchIndicator,e.vertical),narrowIndicator:e.narrowIndicator,inlineLabel:e.inlineLabel,noCaps:e.noCaps})),H=v(()=>{const u=y.value,h=w.value;for(let a=0;a<u;a++)if(g[a].name.value===h)return!0;return!1}),X=v(()=>`q-tabs__content--align-${P.value===!0?"left":p.value===!0?"justify":e.align}`),pe=v(()=>`q-tabs row no-wrap items-center q-tabs--${P.value===!0?"":"not-"}scrollable q-tabs--${e.vertical===!0?"vertical":"horizontal"} q-tabs__arrows--${e.outsideArrows===!0?"outside":"inside"} q-tabs--mobile-with${e.mobileArrows===!0?"":"out"}-arrows`+(e.dense===!0?" q-tabs--dense":"")+(e.shrink===!0?" col-shrink":"")+(e.stretch===!0?" self-stretch":"")),Y=v(()=>"q-tabs__content scroll--mobile row no-wrap items-center self-stretch hide-scrollbar relative-position "+X.value+(e.contentClass!==void 0?` ${e.contentClass}`:"")),G=v(()=>e.vertical===!0?{container:"height",content:"offsetHeight",scroll:"scrollHeight"}:{container:"width",content:"offsetWidth",scroll:"scrollWidth"}),le=v(()=>e.vertical!==!0&&t.lang.rtl===!0),J=v(()=>Ft===!1&&le.value===!0);L(le,ae),L(()=>e.modelValue,u=>{re({name:u,setCurrent:!0,skipEmit:!0})}),L(()=>e.outsideArrows,Z);function re({name:u,setCurrent:h,skipEmit:a}){w.value!==u&&(a!==!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",u),(h===!0||e["onUpdate:modelValue"]===void 0)&&(xe(w.value,u),w.value=u))}function Z(){n(()=>{ee({width:S.value.offsetWidth,height:S.value.offsetHeight})})}function ee(u){if(G.value===void 0||b.value===null)return;const h=u[G.value.container],a=Math.min(b.value[G.value.scroll],Array.prototype.reduce.call(b.value.children,(k,_)=>k+(_[G.value.content]||0),0)),m=h>0&&a>h;P.value=m,m===!0&&s(ae),p.value=h<parseInt(e.breakpoint,10)}function xe(u,h){const a=u!=null&&u!==""?g.find(k=>k.name.value===u):null,m=h!=null&&h!==""?g.find(k=>k.name.value===h):null;if(a&&m){const k=a.tabIndicatorRef.value,_=m.tabIndicatorRef.value;q!==null&&(clearTimeout(q),q=null),k.style.transition="none",k.style.transform="none",_.style.transition="none",_.style.transform="none";const $=k.getBoundingClientRect(),Q=_.getBoundingClientRect();_.style.transform=e.vertical===!0?`translate3d(0,${$.top-Q.top}px,0) scale3d(1,${Q.height?$.height/Q.height:1},1)`:`translate3d(${$.left-Q.left}px,0,0) scale3d(${Q.width?$.width/Q.width:1},1,1)`,C(()=>{q=setTimeout(()=>{q=null,_.style.transition="transform .25s cubic-bezier(.4, 0, .2, 1)",_.style.transform="none"},70)})}m&&P.value===!0&&te(m.rootRef.value)}function te(u){const{left:h,width:a,top:m,height:k}=b.value.getBoundingClientRect(),_=u.getBoundingClientRect();let $=e.vertical===!0?_.top-m:_.left-h;if($<0){b.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.floor($),ae();return}$+=e.vertical===!0?_.height-k:_.width-a,$>0&&(b.value[e.vertical===!0?"scrollTop":"scrollLeft"]+=Math.ceil($),ae())}function ae(){const u=b.value;if(u===null)return;const h=u.getBoundingClientRect(),a=e.vertical===!0?u.scrollTop:Math.abs(u.scrollLeft);le.value===!0?(z.value=Math.ceil(a+h.width)<u.scrollWidth-1,T.value=a>0):(z.value=a>0,T.value=e.vertical===!0?Math.ceil(a+h.height)<u.scrollHeight:Math.ceil(a+h.width)<u.scrollWidth)}function ce(u){M!==null&&clearInterval(M),M=setInterval(()=>{Re(u)===!0&&j()},5)}function Ce(){ce(J.value===!0?Number.MAX_SAFE_INTEGER:0)}function qe(){ce(J.value===!0?0:Number.MAX_SAFE_INTEGER)}function j(){M!==null&&(clearInterval(M),M=null)}function Pe(u,h){const a=Array.prototype.filter.call(b.value.children,Q=>Q===h||Q.matches&&Q.matches(".q-tab.q-focusable")===!0),m=a.length;if(m===0)return;if(u===36)return te(a[0]),a[0].focus(),!0;if(u===35)return te(a[m-1]),a[m-1].focus(),!0;const k=u===(e.vertical===!0?38:37),_=u===(e.vertical===!0?40:39),$=k===!0?-1:_===!0?1:void 0;if($!==void 0){const Q=le.value===!0?-1:1,N=a.indexOf(h)+$*Q;return N>=0&&N<m&&(te(a[N]),a[N].focus({preventScroll:!0})),!0}}const Be=v(()=>J.value===!0?{get:u=>Math.abs(u.scrollLeft),set:(u,h)=>{u.scrollLeft=-h}}:e.vertical===!0?{get:u=>u.scrollTop,set:(u,h)=>{u.scrollTop=h}}:{get:u=>u.scrollLeft,set:(u,h)=>{u.scrollLeft=h}});function Re(u){const h=b.value,{get:a,set:m}=Be.value;let k=!1,_=a(h);const $=u<_?-1:1;return _+=$*5,_<0?(k=!0,_=0):($===-1&&_<=u||$===1&&_>=u)&&(k=!0,_=u),m(h,_),ae(),k}function Te(u,h){for(const a in u)if(u[a]!==h[a])return!1;return!0}function ze(){let u=null,h={matchedLen:0,queryDiff:9999,hrefLen:0};const a=g.filter($=>$.routeData!==void 0&&$.routeData.hasRouterLink.value===!0),{hash:m,query:k}=o.$route,_=Object.keys(k).length;for(const $ of a){const Q=$.routeData.exact.value===!0;if($.routeData[Q===!0?"linkIsExactActive":"linkIsActive"].value!==!0)continue;const{hash:N,query:De,matched:pt,href:Ct}=$.routeData.resolvedLink.value,Oe=Object.keys(De).length;if(Q===!0){if(N!==m||Oe!==_||Te(k,De)===!1)continue;u=$.name.value;break}if(N!==""&&N!==m||Oe!==0&&Te(De,k)===!1)continue;const ne={matchedLen:pt.length,queryDiff:_-Oe,hrefLen:Ct.length-N.length};if(ne.matchedLen>h.matchedLen){u=$.name.value,h=ne;continue}else if(ne.matchedLen!==h.matchedLen)continue;if(ne.queryDiff<h.queryDiff)u=$.name.value,h=ne;else if(ne.queryDiff!==h.queryDiff)continue;ne.hrefLen>h.hrefLen&&(u=$.name.value,h=ne)}u===null&&g.some($=>$.routeData===void 0&&$.name.value===w.value)===!0||re({name:u,setCurrent:!0})}function de(u){if(c(),d.value!==!0&&S.value!==null&&u.target&&typeof u.target.closest=="function"){const h=u.target.closest(".q-tab");h&&S.value.contains(h)===!0&&(d.value=!0,P.value===!0&&te(h))}}function V(){f(()=>{d.value=!1},30)}function F(){fe.avoidRouteWatcher===!1?i(ze):R()}function ie(){if(O===void 0){const u=L(()=>o.$route.fullPath,F);O=()=>{u(),O=void 0}}}function Me(u){g.push(u),y.value++,Z(),u.routeData===void 0||o.$route===void 0?i(()=>{if(P.value===!0){const h=w.value,a=h!=null&&h!==""?g.find(m=>m.name.value===h):null;a&&te(a.rootRef.value)}}):(ie(),u.routeData.hasRouterLink.value===!0&&F())}function Ee(u){g.splice(g.indexOf(u),1),y.value--,Z(),O!==void 0&&u.routeData!==void 0&&(g.every(h=>h.routeData===void 0)===!0&&O(),F())}const fe={currentModel:w,tabProps:A,hasFocus:d,hasActiveTab:H,registerTab:Me,unregisterTab:Ee,verifyRouteModel:F,updateModel:re,onKbdNavigate:Pe,avoidRouteWatcher:!1};tt(mt,fe);function ue(){q!==null&&clearTimeout(q),j(),O!==void 0&&O()}let W;return oe(ue),$t(()=>{W=O!==void 0,ue()}),xt(()=>{W===!0&&ie(),Z()}),()=>x("div",{ref:S,class:pe.value,role:"tablist",onFocusin:de,onFocusout:V},[x(ge,{onResize:ee}),x("div",{ref:b,class:Y.value,onScroll:ae},et(r.default)),x(be,{class:"q-tabs__arrow q-tabs__arrow--left absolute q-tab__icon"+(z.value===!0?"":" q-tabs__arrow--faded"),name:e.leftIcon||t.iconSet.tabs[e.vertical===!0?"up":"left"],onMousedownPassive:Ce,onTouchstartPassive:Ce,onMouseupPassive:j,onMouseleavePassive:j,onTouchendPassive:j}),x(be,{class:"q-tabs__arrow q-tabs__arrow--right absolute q-tab__icon"+(T.value===!0?"":" q-tabs__arrow--faded"),name:e.rightIcon||t.iconSet.tabs[e.vertical===!0?"down":"right"],onMousedownPassive:qe,onTouchstartPassive:qe,onMouseupPassive:j,onMouseleavePassive:j,onTouchendPassive:j})])}}),fa=U({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:l}){const{proxy:{$q:o}}=K(),t=ye(we,I);if(t===I)return console.error("QHeader needs to be child of QLayout"),I;const n=B(parseInt(e.heightHint,10)),s=B(!0),C=v(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||o.platform.is.ios&&t.isContainer.value===!0),f=v(()=>{if(e.modelValue!==!0)return 0;if(C.value===!0)return s.value===!0?n.value:0;const p=n.value-t.scroll.value.position;return p>0?p:0}),c=v(()=>e.modelValue!==!0||C.value===!0&&s.value!==!0),i=v(()=>e.modelValue===!0&&c.value===!0&&e.reveal===!0),R=v(()=>"q-header q-layout__section--marginal "+(C.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(c.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),S=v(()=>{const p=t.rows.value.top,g={};return p[0]==="l"&&t.left.space===!0&&(g[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),p[2]==="r"&&t.right.space===!0&&(g[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),g});function b(p,g){t.update("header",p,g)}function w(p,g){p.value!==g&&(p.value=g)}function P({height:p}){w(n,p),b("size",p)}function z(p){i.value===!0&&w(s,!0),l("focusin",p)}L(()=>e.modelValue,p=>{b("space",p),w(s,!0),t.animate()}),L(f,p=>{b("offset",p)}),L(()=>e.reveal,p=>{p===!1&&w(s,e.modelValue)}),L(s,p=>{t.animate(),l("reveal",p)}),L(t.scroll,p=>{e.reveal===!0&&w(s,p.direction==="up"||p.position<=e.revealOffset||p.position-p.inflectionPoint<100)});const T={};return t.instances.header=T,e.modelValue===!0&&b("size",n.value),b("space",e.modelValue),b("offset",f.value),oe(()=>{t.instances.header===T&&(t.instances.header=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const p=Pt(r.default,[]);return e.elevated===!0&&p.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),p.push(x(ge,{debounce:0,onResize:P})),x("header",{class:R.value,style:S.value,onFocusin:z},p)}}});const at={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},va=Object.keys(at);at.all=!0;function ct(e){const r={};for(const l of va)e[l]===!0&&(r[l]=!0);return Object.keys(r).length===0?at:(r.horizontal===!0?r.left=r.right=!0:r.left===!0&&r.right===!0&&(r.horizontal=!0),r.vertical===!0?r.up=r.down=!0:r.up===!0&&r.down===!0&&(r.vertical=!0),r.horizontal===!0&&r.vertical===!0&&(r.all=!0),r)}function dt(e,r){return r.event===void 0&&e.target!==void 0&&e.target.draggable!==!0&&typeof r.handler=="function"&&e.target.nodeName.toUpperCase()!=="INPUT"&&(e.qClonedBy===void 0||e.qClonedBy.indexOf(r.uid)===-1)}function He(e,r,l){const o=Ke(e);let t,n=o.left-r.event.x,s=o.top-r.event.y,C=Math.abs(n),f=Math.abs(s);const c=r.direction;c.horizontal===!0&&c.vertical!==!0?t=n<0?"left":"right":c.horizontal!==!0&&c.vertical===!0?t=s<0?"up":"down":c.up===!0&&s<0?(t="up",C>f&&(c.left===!0&&n<0?t="left":c.right===!0&&n>0&&(t="right"))):c.down===!0&&s>0?(t="down",C>f&&(c.left===!0&&n<0?t="left":c.right===!0&&n>0&&(t="right"))):c.left===!0&&n<0?(t="left",C<f&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down"))):c.right===!0&&n>0&&(t="right",C<f&&(c.up===!0&&s<0?t="up":c.down===!0&&s>0&&(t="down")));let i=!1;if(t===void 0&&l===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};t=r.event.lastDir,i=!0,t==="left"||t==="right"?(o.left-=n,C=0,n=0):(o.top-=s,f=0,s=0)}return{synthetic:i,payload:{evt:e,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:o,direction:t,isFirst:r.event.isFirst,isFinal:l===!0,duration:Date.now()-r.event.time,distance:{x:C,y:f},offset:{x:n,y:s},delta:{x:o.left-r.event.lastX,y:o.top-r.event.lastY}}}}let ha=0;var We=Bt({name:"touch-pan",beforeMount(e,{value:r,modifiers:l}){if(l.mouse!==!0&&ve.has.touch!==!0)return;function o(n,s){l.mouse===!0&&s===!0?je(n):(l.stop===!0&&Qe(n),l.prevent===!0&&nt(n))}const t={uid:"qvtp_"+ha++,handler:r,modifiers:l,direction:ct(l),noop:Ze,mouseStart(n){dt(n,t)&&Rt(n)&&(ke(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(dt(n,t)){const s=n.target;ke(t,"temp",[[s,"touchmove","move","notPassiveCapture"],[s,"touchcancel","end","passiveCapture"],[s,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,s){if(ve.is.firefox===!0&&Ae(e,!0),t.lastEvt=n,s===!0||l.stop===!0){if(t.direction.all!==!0&&(s!==!0||t.modifiers.mouseAllDir!==!0&&t.modifiers.mousealldir!==!0)){const c=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&nt(c),n.cancelBubble===!0&&Qe(c),Object.assign(c,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:c}}Qe(n)}const{left:C,top:f}=Ke(n);t.event={x:C,y:f,time:Date.now(),mouse:s===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:C,lastY:f}},move(n){if(t.event===void 0)return;const s=Ke(n),C=s.left-t.event.x,f=s.top-t.event.y;if(C===0&&f===0)return;t.lastEvt=n;const c=t.event.mouse===!0,i=()=>{o(n,c);let b;l.preserveCursor!==!0&&l.preservecursor!==!0&&(b=document.documentElement.style.cursor||"",document.documentElement.style.cursor="grabbing"),c===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),Ht(),t.styleCleanup=w=>{if(t.styleCleanup=void 0,b!==void 0&&(document.documentElement.style.cursor=b),document.body.classList.remove("non-selectable"),c===!0){const P=()=>{document.body.classList.remove("no-pointer-events--children")};w!==void 0?setTimeout(()=>{P(),w()},50):P()}else w!==void 0&&w()}};if(t.event.detected===!0){t.event.isFirst!==!0&&o(n,t.event.mouse);const{payload:b,synthetic:w}=He(n,t,!1);b!==void 0&&(t.handler(b)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&i(),t.event.lastX=b.position.left,t.event.lastY=b.position.top,t.event.lastDir=w===!0?void 0:b.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||c===!0&&(t.modifiers.mouseAllDir===!0||t.modifiers.mousealldir===!0)){i(),t.event.detected=!0,t.move(n);return}const R=Math.abs(C),S=Math.abs(f);R!==S&&(t.direction.horizontal===!0&&R>S||t.direction.vertical===!0&&R<S||t.direction.up===!0&&R<S&&f<0||t.direction.down===!0&&R<S&&f>0||t.direction.left===!0&&R>S&&C<0||t.direction.right===!0&&R>S&&C>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,s){if(t.event!==void 0){if(Ie(t,"temp"),ve.is.firefox===!0&&Ae(e,!1),s===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(He(n===void 0?t.lastEvt:n,t).payload);const{payload:C}=He(n===void 0?t.lastEvt:n,t,!0),f=()=>{t.handler(C)};t.styleCleanup!==void 0?t.styleCleanup(f):f()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};if(e.__qtouchpan=t,l.mouse===!0){const n=l.mouseCapture===!0||l.mousecapture===!0?"Capture":"";ke(t,"main",[[e,"mousedown","mouseStart",`passive${n}`]])}ve.has.touch===!0&&ke(t,"main",[[e,"touchstart","touchStart",`passive${l.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const l=e.__qtouchpan;l!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&l.end(),l.handler=r.value),l.direction=ct(r.modifiers))},beforeUnmount(e){const r=e.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),Ie(r,"main"),Ie(r,"temp"),ve.is.firefox===!0&&Ae(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchpan)}});const ft=150;var ma=U({name:"QDrawer",inheritAttrs:!1,props:{...Wt,...ea,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...jt,"onLayout","miniState"],setup(e,{slots:r,emit:l,attrs:o}){const t=K(),{proxy:{$q:n}}=t,s=ta(e,n),{preventBodyScroll:C}=Ut(),{registerTimeout:f,removeTimeout:c}=Xe(),i=ye(we,I);if(i===I)return console.error("QDrawer needs to be child of QLayout"),I;let R,S=null,b;const w=B(e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint),P=v(()=>e.mini===!0&&w.value!==!0),z=v(()=>P.value===!0?e.miniWidth:e.width),T=B(e.showIfAbove===!0&&w.value===!1?!0:e.modelValue===!0),p=v(()=>e.persistent!==!0&&(w.value===!0||xe.value===!0));function g(a,m){if(M(),a!==!1&&i.animate(),V(0),w.value===!0){const k=i.instances[J.value];k!==void 0&&k.belowBreakpoint===!0&&k.hide(!1),F(1),i.isContainer.value!==!0&&C(!0)}else F(0),a!==!1&&ie(!1);f(()=>{a!==!1&&ie(!0),m!==!0&&l("show",a)},ft)}function y(a,m){O(),a!==!1&&i.animate(),F(0),V(X.value*z.value),ue(),m!==!0?f(()=>{l("hide",a)},ft):c()}const{show:d,hide:q}=Nt({showing:T,hideOnRouteChange:p,handleShow:g,handleHide:y}),{addToHistory:M,removeFromHistory:O}=Kt(T,q,p),A={belowBreakpoint:w,hide:q},H=v(()=>e.side==="right"),X=v(()=>(n.lang.rtl===!0?-1:1)*(H.value===!0?1:-1)),pe=B(0),Y=B(!1),G=B(!1),le=B(z.value*X.value),J=v(()=>H.value===!0?"left":"right"),re=v(()=>T.value===!0&&w.value===!1&&e.overlay===!1?e.miniToOverlay===!0?e.miniWidth:z.value:0),Z=v(()=>e.overlay===!0||e.miniToOverlay===!0||i.view.value.indexOf(H.value?"R":"L")>-1||n.platform.is.ios===!0&&i.isContainer.value===!0),ee=v(()=>e.overlay===!1&&T.value===!0&&w.value===!1),xe=v(()=>e.overlay===!0&&T.value===!0&&w.value===!1),te=v(()=>"fullscreen q-drawer__backdrop"+(T.value===!1&&Y.value===!1?" hidden":"")),ae=v(()=>({backgroundColor:`rgba(0,0,0,${pe.value*.4})`})),ce=v(()=>H.value===!0?i.rows.value.top[2]==="r":i.rows.value.top[0]==="l"),Ce=v(()=>H.value===!0?i.rows.value.bottom[2]==="r":i.rows.value.bottom[0]==="l"),qe=v(()=>{const a={};return i.header.space===!0&&ce.value===!1&&(Z.value===!0?a.top=`${i.header.offset}px`:i.header.space===!0&&(a.top=`${i.header.size}px`)),i.footer.space===!0&&Ce.value===!1&&(Z.value===!0?a.bottom=`${i.footer.offset}px`:i.footer.space===!0&&(a.bottom=`${i.footer.size}px`)),a}),j=v(()=>{const a={width:`${z.value}px`,transform:`translateX(${le.value}px)`};return w.value===!0?a:Object.assign(a,qe.value)}),Pe=v(()=>"q-drawer__content fit "+(i.isContainer.value!==!0?"scroll":"overflow-auto")),Be=v(()=>`q-drawer q-drawer--${e.side}`+(G.value===!0?" q-drawer--mini-animate":"")+(e.bordered===!0?" q-drawer--bordered":"")+(s.value===!0?" q-drawer--dark q-dark":"")+(Y.value===!0?" no-transition":T.value===!0?"":" q-layout--prevent-focus")+(w.value===!0?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":` q-drawer--${P.value===!0?"mini":"standard"}`+(Z.value===!0||ee.value!==!0?" fixed":"")+(e.overlay===!0||e.miniToOverlay===!0?" q-drawer--on-top":"")+(ce.value===!0?" q-drawer--top-padding":""))),Re=v(()=>{const a=n.lang.rtl===!0?e.side:J.value;return[[We,Ee,void 0,{[a]:!0,mouse:!0}]]}),Te=v(()=>{const a=n.lang.rtl===!0?J.value:e.side;return[[We,fe,void 0,{[a]:!0,mouse:!0}]]}),ze=v(()=>{const a=n.lang.rtl===!0?J.value:e.side;return[[We,fe,void 0,{[a]:!0,mouse:!0,mouseAllDir:!0}]]});function de(){u(w,e.behavior==="mobile"||e.behavior!=="desktop"&&i.totalWidth.value<=e.breakpoint)}L(w,a=>{a===!0?(R=T.value,T.value===!0&&q(!1)):e.overlay===!1&&e.behavior!=="mobile"&&R!==!1&&(T.value===!0?(V(0),F(0),ue()):d(!1))}),L(()=>e.side,(a,m)=>{i.instances[m]===A&&(i.instances[m]=void 0,i[m].space=!1,i[m].offset=0),i.instances[a]=A,i[a].size=z.value,i[a].space=ee.value,i[a].offset=re.value}),L(i.totalWidth,()=>{(i.isContainer.value===!0||document.qScrollPrevented!==!0)&&de()}),L(()=>e.behavior+e.breakpoint,de),L(i.isContainer,a=>{T.value===!0&&C(a!==!0),a===!0&&de()}),L(i.scrollbarWidth,()=>{V(T.value===!0?0:void 0)}),L(re,a=>{W("offset",a)}),L(ee,a=>{l("onLayout",a),W("space",a)}),L(H,()=>{V()}),L(z,a=>{V(),h(e.miniToOverlay,a)}),L(()=>e.miniToOverlay,a=>{h(a,z.value)}),L(()=>n.lang.rtl,()=>{V()}),L(()=>e.mini,()=>{e.modelValue===!0&&(Me(),i.animate())}),L(P,a=>{l("miniState",a)});function V(a){a===void 0?_e(()=>{a=T.value===!0?0:z.value,V(X.value*a)}):(i.isContainer.value===!0&&H.value===!0&&(w.value===!0||Math.abs(a)===z.value)&&(a+=X.value*i.scrollbarWidth.value),le.value=a)}function F(a){pe.value=a}function ie(a){const m=a===!0?"remove":i.isContainer.value!==!0?"add":"";m!==""&&document.body.classList[m]("q-body--drawer-toggle")}function Me(){S!==null&&clearTimeout(S),t.proxy&&t.proxy.$el&&t.proxy.$el.classList.add("q-drawer--mini-animate"),G.value=!0,S=setTimeout(()=>{S=null,G.value=!1,t&&t.proxy&&t.proxy.$el&&t.proxy.$el.classList.remove("q-drawer--mini-animate")},150)}function Ee(a){if(T.value!==!1)return;const m=z.value,k=Le(a.distance.x,0,m);if(a.isFinal===!0){k>=Math.min(75,m)===!0?d():(i.animate(),F(0),V(X.value*m)),Y.value=!1;return}V((n.lang.rtl===!0?H.value!==!0:H.value)?Math.max(m-k,0):Math.min(0,k-m)),F(Le(k/m,0,1)),a.isFirst===!0&&(Y.value=!0)}function fe(a){if(T.value!==!0)return;const m=z.value,k=a.direction===e.side,_=(n.lang.rtl===!0?k!==!0:k)?Le(a.distance.x,0,m):0;if(a.isFinal===!0){Math.abs(_)<Math.min(75,m)===!0?(i.animate(),F(1),V(0)):q(),Y.value=!1;return}V(X.value*_),F(Le(1-_/m,0,1)),a.isFirst===!0&&(Y.value=!0)}function ue(){C(!1),ie(!0)}function W(a,m){i.update(e.side,a,m)}function u(a,m){a.value!==m&&(a.value=m)}function h(a,m){W("size",a===!0?e.miniWidth:m)}return i.instances[e.side]=A,h(e.miniToOverlay,z.value),W("space",ee.value),W("offset",re.value),e.showIfAbove===!0&&e.modelValue!==!0&&T.value===!0&&e["onUpdate:modelValue"]!==void 0&&l("update:modelValue",!0),se(()=>{l("onLayout",ee.value),l("miniState",P.value),R=e.showIfAbove===!0;const a=()=>{(T.value===!0?g:y)(!1,!0)};if(i.totalWidth.value!==0){_e(a);return}b=L(i.totalWidth,()=>{b(),b=void 0,T.value===!1&&e.showIfAbove===!0&&w.value===!1?d(!1):a()})}),oe(()=>{b!==void 0&&b(),S!==null&&(clearTimeout(S),S=null),T.value===!0&&ue(),i.instances[e.side]===A&&(i.instances[e.side]=void 0,W("size",0),W("offset",0),W("space",!1))}),()=>{const a=[];w.value===!0&&(e.noSwipeOpen===!1&&a.push(ht(x("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),Re.value)),a.push(ot("div",{ref:"backdrop",class:te.value,style:ae.value,"aria-hidden":"true",onClick:q},void 0,"backdrop",e.noSwipeBackdrop!==!0&&T.value===!0,()=>ze.value)));const m=P.value===!0&&r.mini!==void 0,k=[x("div",{...o,key:""+m,class:[Pe.value,o.class]},m===!0?r.mini():et(r.default))];return e.elevated===!0&&T.value===!0&&k.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(ot("aside",{ref:"content",class:Be.value,style:j.value},k,"contentclose",e.noSwipeClose!==!0&&w.value===!0,()=>Te.value)),x("div",{class:"q-drawer-container"},a)}}}),ba=U({name:"QPageContainer",setup(e,{slots:r}){const{proxy:{$q:l}}=K(),o=ye(we,I);if(o===I)return console.error("QPageContainer needs to be child of QLayout"),I;tt(zt,!0);const t=v(()=>{const n={};return o.header.space===!0&&(n.paddingTop=`${o.header.size}px`),o.right.space===!0&&(n[`padding${l.lang.rtl===!0?"Left":"Right"}`]=`${o.right.size}px`),o.footer.space===!0&&(n.paddingBottom=`${o.footer.size}px`),o.left.space===!0&&(n[`padding${l.lang.rtl===!0?"Right":"Left"}`]=`${o.left.size}px`),n});return()=>x("div",{class:"q-page-container",style:t.value},et(r.default))}}),ga=U({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:r,emit:l}){const{proxy:{$q:o}}=K(),t=ye(we,I);if(t===I)return console.error("QFooter needs to be child of QLayout"),I;const n=B(parseInt(e.heightHint,10)),s=B(!0),C=B(Je.value===!0||t.isContainer.value===!0?0:window.innerHeight),f=v(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||o.platform.is.ios&&t.isContainer.value===!0),c=v(()=>t.isContainer.value===!0?t.containerHeight.value:C.value),i=v(()=>{if(e.modelValue!==!0)return 0;if(f.value===!0)return s.value===!0?n.value:0;const d=t.scroll.value.position+c.value+n.value-t.height.value;return d>0?d:0}),R=v(()=>e.modelValue!==!0||f.value===!0&&s.value!==!0),S=v(()=>e.modelValue===!0&&R.value===!0&&e.reveal===!0),b=v(()=>"q-footer q-layout__section--marginal "+(f.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(R.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(f.value!==!0?" hidden":""):"")),w=v(()=>{const d=t.rows.value.bottom,q={};return d[0]==="l"&&t.left.space===!0&&(q[o.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),d[2]==="r"&&t.right.space===!0&&(q[o.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),q});function P(d,q){t.update("footer",d,q)}function z(d,q){d.value!==q&&(d.value=q)}function T({height:d}){z(n,d),P("size",d)}function p(){if(e.reveal!==!0)return;const{direction:d,position:q,inflectionPoint:M}=t.scroll.value;z(s,d==="up"||q-M<100||t.height.value-c.value-q-n.value<300)}function g(d){S.value===!0&&z(s,!0),l("focusin",d)}L(()=>e.modelValue,d=>{P("space",d),z(s,!0),t.animate()}),L(i,d=>{P("offset",d)}),L(()=>e.reveal,d=>{d===!1&&z(s,e.modelValue)}),L(s,d=>{t.animate(),l("reveal",d)}),L([n,t.scroll,t.height],p),L(()=>o.screen.height,d=>{t.isContainer.value!==!0&&z(C,d)});const y={};return t.instances.footer=y,e.modelValue===!0&&P("size",n.value),P("space",e.modelValue),P("offset",i.value),oe(()=>{t.instances.footer===y&&(t.instances.footer=void 0,P("size",0),P("offset",0),P("space",!1))}),()=>{const d=Ge(r.default,[x(ge,{debounce:0,onResize:T})]);return e.elevated===!0&&d.push(x("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),x("footer",{class:b.value,style:w.value,onFocusin:g},d)}}});const{passive:vt}=Ne,ya=["both","horizontal","vertical"];var wa=U({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ya.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:r}){const l={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,t,n;L(()=>e.scrollTarget,()=>{f(),C()});function s(){o!==null&&o();const R=Math.max(0,Yt(t)),S=Gt(t),b={top:R-l.position.top,left:S-l.position.left};if(e.axis==="vertical"&&b.top===0||e.axis==="horizontal"&&b.left===0)return;const w=Math.abs(b.top)>=Math.abs(b.left)?b.top<0?"up":"down":b.left<0?"left":"right";l.position={top:R,left:S},l.directionChanged=l.direction!==w,l.delta=b,l.directionChanged===!0&&(l.direction=w,l.inflectionPoint=l.position),r("scroll",{...l})}function C(){t=Xt(n,e.scrollTarget),t.addEventListener("scroll",c,vt),c(!0)}function f(){t!==void 0&&(t.removeEventListener("scroll",c,vt),t=void 0)}function c(R){if(R===!0||e.debounce===0||e.debounce==="0")s();else if(o===null){const[S,b]=e.debounce?[setTimeout(s,e.debounce),clearTimeout]:[requestAnimationFrame(s),cancelAnimationFrame];o=()=>{b(S),o=null}}}const{proxy:i}=K();return L(()=>i.$q.lang.rtl,s),se(()=>{n=i.$el.parentNode,C()}),oe(()=>{o!==null&&o(),f()}),Object.assign(i,{trigger:c,getPosition:()=>l}),Ze}}),pa=U({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:r,emit:l}){const{proxy:{$q:o}}=K(),t=B(null),n=B(o.screen.height),s=B(e.container===!0?0:o.screen.width),C=B({position:0,direction:"down",inflectionPoint:0}),f=B(0),c=B(Je.value===!0?0:Fe()),i=v(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),R=v(()=>e.container===!1?{minHeight:o.screen.height+"px"}:null),S=v(()=>c.value!==0?{[o.lang.rtl===!0?"left":"right"]:`${c.value}px`}:null),b=v(()=>c.value!==0?{[o.lang.rtl===!0?"right":"left"]:0,[o.lang.rtl===!0?"left":"right"]:`-${c.value}px`,width:`calc(100% + ${c.value}px)`}:null);function w(y){if(e.container===!0||document.qScrollPrevented!==!0){const d={position:y.position.top,direction:y.direction,directionChanged:y.directionChanged,inflectionPoint:y.inflectionPoint.top,delta:y.delta.top};C.value=d,e.onScroll!==void 0&&l("scroll",d)}}function P(y){const{height:d,width:q}=y;let M=!1;n.value!==d&&(M=!0,n.value=d,e.onScrollHeight!==void 0&&l("scrollHeight",d),T()),s.value!==q&&(M=!0,s.value=q),M===!0&&e.onResize!==void 0&&l("resize",y)}function z({height:y}){f.value!==y&&(f.value=y,T())}function T(){if(e.container===!0){const y=n.value>f.value?Fe():0;c.value!==y&&(c.value=y)}}let p=null;const g={instances:{},view:v(()=>e.view),isContainer:v(()=>e.container),rootRef:t,height:n,containerHeight:f,scrollbarWidth:c,totalWidth:v(()=>s.value+c.value),rows:v(()=>{const y=e.view.toLowerCase().split(" ");return{top:y[0].split(""),middle:y[1].split(""),bottom:y[2].split("")}}),header:Se({size:0,offset:0,space:!1}),right:Se({size:300,offset:0,space:!1}),footer:Se({size:0,offset:0,space:!1}),left:Se({size:300,offset:0,space:!1}),scroll:C,animate(){p!==null?clearTimeout(p):document.body.classList.add("q-body--layout-animate"),p=setTimeout(()=>{p=null,document.body.classList.remove("q-body--layout-animate")},155)},update(y,d,q){g[y][d]=q}};if(tt(we,g),Fe()>0){let q=function(){y=null,d.classList.remove("hide-scrollbar")},M=function(){if(y===null){if(d.scrollHeight>o.screen.height)return;d.classList.add("hide-scrollbar")}else clearTimeout(y);y=setTimeout(q,300)},O=function(A){y!==null&&A==="remove"&&(clearTimeout(y),q()),window[`${A}EventListener`]("resize",M)},y=null;const d=document.body;L(()=>e.container!==!0?"add":"remove",O),e.container!==!0&&O("add"),Mt(()=>{O("remove")})}return()=>{const y=Ge(r.default,[x(wa,{onScroll:w}),x(ge,{onResize:P})]),d=x("div",{class:i.value,style:R.value,ref:e.container===!0?void 0:t,tabindex:-1},y);return e.container===!0?x("div",{class:"q-layout-container overflow-hidden",ref:t},[x(ge,{onResize:z}),x("div",{class:"absolute-full",style:S.value},[x("div",{class:"scroll",style:b.value},[d])])]):d}}});const Ca=bt({name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}});function qa(e,r,l,o,t,n){return he(),$e(aa,{clickable:"",tag:"a",target:"_blank",href:e.link},{default:D(()=>[e.icon?(he(),$e(rt,{key:0,avatar:""},{default:D(()=>[E(be,{name:e.icon},null,8,["name"])]),_:1})):Et("",!0),E(rt,null,{default:D(()=>[E(Ye,null,{default:D(()=>[me(Ue(e.title),1)]),_:1}),E(Ye,{caption:""},{default:D(()=>[me(Ue(e.caption),1)]),_:1})]),_:1})]),_:1},8,["href"])}var Ta=gt(Ca,[["render",qa]]);const ka=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Project Github",caption:"github.com/dricera/final-project",icon:"code",link:"https://github.com/Dricera/final-project"},{title:"Framework Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],Sa=bt({name:"MainLayout",components:{EssentialLink:Ta},setup(){const e=B(!1);return{essentialLinks:ka,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),La=yt("img",{src:"https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg"},null,-1);function _a(e,r,l,o,t,n){const s=lt("EssentialLink"),C=lt("router-view");return he(),$e(pa,{view:"lHh LpR lfr",dark:""},{default:D(()=>[E(fa,{elevated:"",reveal:"",class:"bg-primary","height-hint":"98"},{default:D(()=>[E(it,null,{default:D(()=>[E(Dt,{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu",onClick:e.toggleLeftDrawer},null,8,["onClick"]),E(ut,{align:"center"},{default:D(()=>[me(" Work in Progress \u{1F9D1}\u200D\u{1F4BB} ")]),_:1}),yt("div",null,"Quasar v"+Ue(e.$q.version),1)]),_:1}),E(da,{align:"justify"},{default:D(()=>[E(ia,{to:"/home",label:"Ticket Dashboard"})]),_:1})]),_:1}),E(ma,{modelValue:e.leftDrawerOpen,"onUpdate:modelValue":r[0]||(r[0]=f=>e.leftDrawerOpen=f),"show-if-above":"",bordered:""},{default:D(()=>[E(Jt,null,{default:D(()=>[E(Ye,{header:""},{default:D(()=>[me(" Essential Links ")]),_:1}),(he(!0),Ot(Qt,null,At(e.essentialLinks,f=>(he(),$e(s,Vt({key:f.title},f),null,16))),128))]),_:1})]),_:1},8,["modelValue"]),E(ba,null,{default:D(()=>[E(C)]),_:1}),E(ga,{reveal:"",bordered:"",class:"bg-grey-8 text-white"},{default:D(()=>[E(it,null,{default:D(()=>[E(ut,null,{default:D(()=>[E(It,null,{default:D(()=>[La]),_:1}),me(" Made with \u{1F49A} and jank code ")]),_:1})]),_:1})]),_:1})]),_:1})}var za=gt(Sa,[["render",_a]]);export{za as default};