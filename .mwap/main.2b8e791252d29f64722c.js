(()=>{"use strict";var I={363:(r,s,t)=>{t.r(s),t.d(s,{default:()=>p});var e=t(761),d=t(266);const u=(0,d.D8)(()=>Promise.all([t.e(216),t.e(346)]).then(t.bind(t,341)),{__chunkId:"pages_docs_tsx"});function l(o){return e.createElement(u,o)}const f=(0,d.D8)(()=>Promise.all([t.e(216),t.e(646)]).then(t.bind(t,677)),{__chunkId:"pages_home_tsx"});function a(o){return e.createElement(f,o)}const p=[{component:a,exact:!0,path:"/"},{component:l,path:"/docs/:article"},{component:l,path:"/docs"}]},816:(r,s,t)=>{var e=t(761),d=t(886),u=t(10),l=t(552);class f extends e.Component{constructor(v){super(v),this.state={error:void 0}}static getDerivedStateFromError(v){return{error:v}}render(){return this.state.error?(console.error(this.state.error),e.createElement("h1",null,"Internal Error")):this.props.children}}let a=t(485),p=t(363);const o=()=>{const g=a&&a.default||a,v=p&&p.default||p,y=(0,e.useMemo)(()=>v.map(E=>e.createElement(l.AW,{key:E.path,component:E.component,exact:E.exact,path:E.path})),[v]);return e.createElement(f,null,e.createElement(g,null,e.createElement(l.rs,null,y)))},m=()=>{const g=c();return n(()=>{const v=g.listen(()=>{window.scrollTo(0,0)});return()=>{v()}},[g]),null};var b=t(211),h=t(846),k=t.n(h),C=(g,v,y)=>new Promise((E,N)=>{var O=w=>{try{x(y.next(w))}catch(P){N(P)}},S=w=>{try{x(y.throw(w))}catch(P){N(P)}},x=w=>w.done?E(w.value):Promise.resolve(w.value).then(O,S);x((y=y.apply(g,v)).next())});const D=typeof document!="undefined"?document.querySelector('script[type="__SSR_DATA__"]'):null,M=D?JSON.parse(decodeURI(D.innerHTML)):[],A=new Map(M.map(g=>{let{id:v}=g;return[v,function(y,E){if(y==null)return{};var N,O,S={},x=Object.keys(y);for(O=0;O<x.length;O++)E.indexOf(N=x[O])>=0||(S[N]=y[N]);return S}(g,["id"])]}));typeof window!="undefined"&&(window.loadersCache=A);const L=(g,v)=>{const y=(0,b.JT)(g,v||{}),E=A.get(y);if(E){if(E.preRenderData||E.promise)return E.preRenderData||E.promise;if(E.error)throw E.error}return((N,O,S)=>{const x=fetch(`/.mwap/loader/${O}/${btoa(k()(S))}.json`).then(w=>{if(!w.ok)throw new Error(`Failed to load data for loader: ${N}`);return w}).then(w=>w.json()).then(w=>(A.set(N,{preRenderData:w}),w)).catch(w=>{throw A.set(N,{error:w}),w});return A.set(N,{promise:x}),x})(y,g,v||{})},R=()=>e.createElement(b.XL,{getData:L},e.createElement(o,null));(()=>C(void 0,null,function*(){const g=document.querySelector('script[type="__ASYNC_CHUNKS__"]'),v=g?JSON.parse(decodeURI(g.innerHTML)):[];let y=new Set(v),E=Object.keys(window.__ASYNC_PRELOAD__||{});for(;y.size>0&&E.some(O=>y.has(O));)yield Promise.all(v.map(O=>{var S;if((S=window.__ASYNC_PRELOAD__)!=null&&S[O]){y.delete(O);const x=window.__ASYNC_PRELOAD__[O];return delete window.__ASYNC_PRELOAD__[O],x().catch(w=>console.error("Error loading chunk",O,w))}})),E=Object.keys(window.__ASYNC_PRELOAD__||{});const N=document.getElementById("__mwap__");(0,e.hydrate)(e.createElement(e.Suspense,{fallback:""},e.createElement(d.B,null,e.createElement(u.VK,null,e.createElement(R,null)))),N)}))()},485:(r,s,t)=>{t.r(s),t.d(s,{default:()=>o});var e=t(761),d=t(886),u=t(494),l=t(10);const f=()=>e.createElement("header",{className:"flex flex-wrap max-w-2xl px-4 py-4 mx-auto mb-4"},e.createElement(l.rU,{to:"/",className:"inline-flex items-center p-2 hover:bg-yellow-100"},e.createElement("svg",{className:"inline-block w-5 h-5 mr-3 bg-black"},e.createElement("path",{d:"M0 0h19v19H0z"})),e.createElement("span",{className:"text-lg font-semibold"},"@mwap")),e.createElement("nav",{className:"inline-flex items-center justify-end flex-grow"},e.createElement("a",{className:"p-2 mr-2 text-xs font-semibold text-gray-700",href:"https://github.com/jacob-ebey/mwap"},"Source"),e.createElement("a",{href:"https://twitter.com/ebey_jacob",className:"p-2 text-xs font-semibold text-white bg-black"},"Follow Me"))),a="/.mwap/".replace(".mwap/","")||0,p=()=>e.createElement(d.q,null,e.createElement("meta",{charSet:"UTF-8"}),e.createElement("meta",{"http-equiv":"X-UA-Compatible",content:"IE=edge"}),e.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}),e.createElement("link",{rel:"apple-touch-icon",sizes:"180x180",href:`${a}apple-touch-icon.png`}),e.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:`${a}favicon-32x32.png`}),e.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:`${a}favicon-16x16.png`}),e.createElement("link",{rel:"manifest",href:`${a}site.webmanifest`})),o=({children:m})=>e.createElement(e.Fragment,null,e.createElement(u.pU,null),e.createElement(d.q,{htmlAttributes:{lang:"en"},defaultTitle:"@mwap docs",titleTemplate:"%s | @mwap docs"},e.createElement("meta",{name:"description",content:"An example demonstrating tailwindcss within the @mwap framework."})),e.createElement(p,null),e.createElement(f,null),e.createElement(e.Suspense,{fallback:""},m))},266:(r,s,t)=>{t.d(s,{TV:()=>d,D8:()=>l});var e=t(761);const d=(0,e.createContext)(null),u=({children:f,chunks:a})=>_.createElement(d.Provider,{value:{chunks:a}},f),l=(f,a)=>{let p,o;const m=()=>(p||(p=Promise.resolve(f()).then(h=>{o=(h==null?void 0:h.default)||h,a!=null&&a.__chunkId&&typeof window!="undefined"&&(window.__DYNAMIC_COMPONENTS__=window.__DYNAMIC_COMPONENTS__||{},window.__DYNAMIC_COMPONENTS__[a.__chunkId]=o)})),p);a!=null&&a.__chunkId&&typeof window!="undefined"&&(window.__ASYNC_PRELOAD__=window.__ASYNC_PRELOAD__||{},window.__ASYNC_PRELOAD__[a.__chunkId]=window.__ASYNC_PRELOAD__[a.__chunkId]||m);const b=h=>{const k=(0,e.useContext)(d);if(k&&a!=null&&a.__chunkId&&k.chunks.add(a.__chunkId),a!=null&&a.__chunkId&&typeof window!="undefined"&&(window.__DYNAMIC_COMPONENTS__=window.__DYNAMIC_COMPONENTS__||{},o=o||window.__DYNAMIC_COMPONENTS__[a.__chunkId]),o)return(0,e.createElement)(o,h);throw m(),p};return b.load=m,b}},211:(r,s,t)=>{t.d(s,{XL:()=>f,JT:()=>p,U2:()=>a});var e=t(761),d=t(846),u=t.n(d);const l=(0,e.createContext)(null),f=({children:o,getData:m})=>e.createElement(l.Provider,{value:{getData:m}},o),a=(o,m)=>{const{getData:b}=(0,e.useContext)(l),h=b(o,m||{});if("then"in h)throw h;return h},p=(o,m)=>`{ "id": ${JSON.stringify(o)}, "params": ${u()(m)} }`},494:(r,s,t)=>{t.d(s,{U2:()=>l.U2,SV:()=>a,pU:()=>p});var e=t(761),d=t(552),u=t(266),l=t(211);function f(o,m){return(f=Object.setPrototypeOf||function(b,h){return b.__proto__=h,b})(o,m)}var a=function(o){var m,b;function h(k){var C;return(C=o.call(this,k)||this).state={error:void 0},C}return b=o,(m=h).prototype=Object.create(b.prototype),m.prototype.constructor=m,f(m,b),h.getDerivedStateFromError=function(k){return{error:k}},h.prototype.render=function(){var k=this;return this.state.error?(console.error(this.state.error),e.createElement("h1",null,"Internal Error")):this.props.children},h}(e.Component);t(485),t(363);var p=function(){var o=(0,d.k6)();return(0,e.useEffect)(function(){var m=o.listen(function(){window.scrollTo(0,0)});return function(){m()}},[o]),null}}},T={};function i(r){var s=T[r];if(s!==void 0)return s.exports;var t=T[r]={exports:{}};return I[r](t,t.exports,i),t.exports}i.m=I,(()=>{var r=[];i.O=(s,t,e,d)=>{if(t){d=d||0;for(var u=r.length;u>0&&r[u-1][2]>d;u--)r[u]=r[u-1];r[u]=[t,e,d];return}for(var l=Infinity,u=0;u<r.length;u++){for(var[t,e,d]=r[u],f=!0,a=0;a<t.length;a++)(d&!1||l>=d)&&Object.keys(i.O).every(h=>i.O[h](t[a]))?t.splice(a--,1):(f=!1,d<l&&(l=d));f&&(r.splice(u--,1),s=e())}return s}})(),(()=>{i.n=r=>{var s=r&&r.__esModule?()=>r.default:()=>r;return i.d(s,{a:s}),s}})(),(()=>{i.d=(r,s)=>{for(var t in s)i.o(s,t)&&!i.o(r,t)&&Object.defineProperty(r,t,{enumerable:!0,get:s[t]})}})(),(()=>{i.f={},i.e=r=>Promise.all(Object.keys(i.f).reduce((s,t)=>(i.f[t](r,s),s),[]))})(),(()=>{i.u=r=>""+r+"."+{"35":"f591b78ad0b1685cd41d","126":"b43bc2a538758375b874","296":"5fa4515545568e168a2b","346":"0a842bb6006042a02022","460":"c85d44fbdf7c2a17ac1e","621":"13c98e7bb467f5a09a43","646":"b62485e2ec2ecbf069e3"}[r]+".js"})(),(()=>{i.miniCssF=r=>{}})(),(()=>{i.g=function(){if(typeof globalThis=="object")return globalThis;try{return this||new Function("return this")()}catch(r){if(typeof window=="object")return window}}()})(),(()=>{i.o=(r,s)=>Object.prototype.hasOwnProperty.call(r,s)})(),(()=>{var r={},s="@mwap/docs:";i.l=(t,e,d,u)=>{if(r[t]){r[t].push(e);return}var l,f;if(d!==void 0)for(var a=document.getElementsByTagName("script"),p=0;p<a.length;p++){var o=a[p];if(o.getAttribute("src")==t||o.getAttribute("data-webpack")==s+d){l=o;break}}l||(f=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.setAttribute("data-webpack",s+d),l.src=t),r[t]=[e];var m=(h,k)=>{l.onerror=l.onload=null,clearTimeout(b);var C=r[t];if(delete r[t],l.parentNode&&l.parentNode.removeChild(l),C&&C.forEach(D=>D(k)),h)return h(k)},b=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),f&&document.head.appendChild(l)}})(),(()=>{i.r=r=>{typeof Symbol!="undefined"&&Symbol.toStringTag&&Object.defineProperty(r,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(r,"__esModule",{value:!0})}})(),(()=>{i.p="/.mwap/"})(),(()=>{var r={179:0};i.f.j=(e,d)=>{var u=i.o(r,e)?r[e]:void 0;if(u!==0)if(u)d.push(u[2]);else{var l=new Promise((o,m)=>u=r[e]=[o,m]);d.push(u[2]=l);var f=i.p+i.u(e),a=new Error,p=o=>{if(i.o(r,e)&&(u=r[e],u!==0&&(r[e]=void 0),u)){var m=o&&(o.type==="load"?"missing":o.type),b=o&&o.target&&o.target.src;a.message="Loading chunk "+e+` failed.
(`+m+": "+b+")",a.name="ChunkLoadError",a.type=m,a.request=b,u[1](a)}};i.l(f,p,"chunk-"+e,e)}},i.O.j=e=>r[e]===0;var s=(e,d)=>{var[u,l,f]=d,a,p,o=0;for(a in l)i.o(l,a)&&(i.m[a]=l[a]);for(f&&f(i),e&&e(d);o<u.length;o++)p=u[o],i.o(r,p)&&r[p]&&r[p][0](),r[u[o]]=0;i.O()},t=self.webpackChunk_mwap_docs=self.webpackChunk_mwap_docs||[];t.forEach(s.bind(null,0)),t.push=s.bind(null,t.push.bind(t))})();var j=i.O(void 0,[216],()=>i(816));j=i.O(j)})();
