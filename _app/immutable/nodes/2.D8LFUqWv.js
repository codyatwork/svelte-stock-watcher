import{a as S,t as H,n as he,c as De}from"../chunks/Danji7LW.js";import"../chunks/DjF0LssL.js";import{a2 as He,b as Pe,h as I,M as Z,J as Ve,k as p,K as We,L as ie,N as j,c as V,O as me,a as ge,P as Ye,at as $,am as ye,F as le,au as Be,av as ze,al as Ue,aw as qe,d as Ke,a3 as Je,_ as be,ai as Xe,$ as Qe,A as oe,ax as Ze,ay as je,az as $e,af as ea,I as aa,H as sa,aA as ra,aB as ta,aC as na,q as ia,aD as z,aE as la,v as m,w as _,x as k,t as we,s as oa,aF as F,C as A,o as R,aG as ca,f as ce,aH as ve}from"../chunks/DO_qT4an.js";import{s as N,a as va,e as fe}from"../chunks/CbFQ8bhS.js";import{p as D,i as ae,s as fa}from"../chunks/BfS1DK9J.js";import{b as da}from"../chunks/Cvl739F8.js";let de=!1;function pa(){de||(de=!0,document.addEventListener("reset",a=>{Promise.resolve().then(()=>{var e;if(!a.defaultPrevented)for(const s of a.target.elements)(e=s.__on_r)==null||e.call(s)})},{capture:!0}))}function ua(a,e){return e}function _a(a,e,s,r){for(var i=[],o=e.length,d=0;d<o;d++)ze(e[d].e,i,!0);var v=o>0&&i.length===0&&s!==null;if(v){var u=s.parentNode;Ue(u),u.append(s),r.clear(),C(a,e[0].prev,e[o-1].next)}qe(i,()=>{for(var g=0;g<o;g++){var n=e[g];v||(r.delete(n.k),C(a,n.prev,n.next)),Ke(n.e,!v)}})}function ha(a,e,s,r,i,o=null){var d=a,v={flags:e,items:new Map,first:null};{var u=a;d=I?Z(Je(u)):u.appendChild(He())}I&&Ve();var g=null,n=!1,b=be(()=>{var l=s();return aa(l)?l:l==null?[]:ye(l)});Pe(()=>{var l=p(b),f=l.length;if(n&&f===0)return;n=f===0;let t=!1;if(I){var y=d.data===We;y!==(f===0)&&(d=ie(),Z(d),j(!1),t=!0)}if(I){for(var w=null,c,h=0;h<f;h++){if(V.nodeType===8&&V.data===Xe){d=V,t=!0,j(!1);break}var O=l[h],E=r(O,h);c=ke(V,v,w,null,O,E,h,i,e,s),v.items.set(E,c),w=c}f>0&&Z(ie())}I||ma(l,v,d,i,e,r,s),o!==null&&(f===0?g?me(g):g=ge(()=>o(d)):g!==null&&Ye(g,()=>{g=null})),t&&j(!0),p(b)}),I&&(d=V)}function ma(a,e,s,r,i,o,d){var v=a.length,u=e.items,g=e.first,n=g,b,l=null,f=[],t=[],y,w,c,h;for(h=0;h<v;h+=1){if(y=a[h],w=o(y,h),c=u.get(w),c===void 0){var O=n?n.e.nodes_start:s;l=ke(O,e,l,l===null?e.first:l.next,y,w,h,r,i,d),u.set(w,l),f=[],t=[],n=l.next;continue}if(ga(c,y,h),c.e.f&$&&me(c.e),c!==n){if(b!==void 0&&b.has(c)){if(f.length<t.length){var E=t[0],T;l=E.prev;var P=f[0],G=f[f.length-1];for(T=0;T<f.length;T+=1)pe(f[T],E,s);for(T=0;T<t.length;T+=1)b.delete(t[T]);C(e,P.prev,G.next),C(e,l,P),C(e,G,E),n=E,l=G,h-=1,f=[],t=[]}else b.delete(c),pe(c,n,s),C(e,c.prev,c.next),C(e,c,l===null?e.first:l.next),C(e,l,c),l=c;continue}for(f=[],t=[];n!==null&&n.k!==w;)n.e.f&$||(b??(b=new Set)).add(n),t.push(n),n=n.next;if(n===null)continue;c=n}f.push(c),l=c,n=c.next}if(n!==null||b!==void 0){for(var L=b===void 0?[]:ye(b);n!==null;)n.e.f&$||L.push(n),n=n.next;var U=L.length;if(U>0){var Y=v===0?s:null;_a(e,L,Y,u)}}le.first=e.first&&e.first.e,le.last=l&&l.e}function ga(a,e,s,r){Be(a.v,e),a.i=s}function ke(a,e,s,r,i,o,d,v,u,g){var n=(u&je)!==0,b=(u&$e)===0,l=n?b?Qe(i):oe(i):i,f=u&Ze?oe(d):d,t={i:f,v:l,k:o,a:null,e:null,prev:s,next:r};try{return t.e=ge(()=>v(a,l,f,g),I),t.e.prev=s&&s.e,t.e.next=r&&r.e,s===null?e.first=t:(s.next=t,s.e.next=t.e),r!==null&&(r.prev=t,r.e.prev=t.e),t}finally{}}function pe(a,e,s){for(var r=a.next?a.next.e.nodes_start:s,i=e?e.e.nodes_start:s,o=a.e.nodes_start;o!==r;){var d=ea(o);i.before(o),o=d}}function C(a,e,s){e===null?a.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function xe(a){var e,s,r="";if(typeof a=="string"||typeof a=="number")r+=a;else if(typeof a=="object")if(Array.isArray(a)){var i=a.length;for(e=0;e<i;e++)a[e]&&(s=xe(a[e]))&&(r&&(r+=" "),r+=s)}else for(s in a)a[s]&&(r&&(r+=" "),r+=s);return r}function ya(){for(var a,e,s=0,r="",i=arguments.length;s<i;s++)(a=arguments[s])&&(e=xe(a))&&(r&&(r+=" "),r+=e);return r}function ue(a){return typeof a=="object"?ya(a):a??""}function ba(a,e,s){var r=a==null?"":""+a;return r=r?r+" "+e:e,r===""?null:r}function ee(a,e,s,r,i,o){var d=a.__className;if(I||d!==s){var v=ba(s,r);(!I||v!==a.getAttribute("class"))&&(v==null?a.removeAttribute("class"):a.className=v),a.__className=s}return o}function wa(a){if(I){var e=!1,s=()=>{if(!e){if(e=!0,a.hasAttribute("value")){var r=a.value;W(a,"value",null),a.value=r}if(a.hasAttribute("checked")){var i=a.checked;W(a,"checked",null),a.checked=i}}};a.__on_r=s,ra(s),pa()}}function ka(a,e){var s=a.__attributes??(a.__attributes={});s.value===(s.value=e??void 0)||a.value===e&&(e!==0||a.nodeName!=="PROGRESS")||(a.value=e??"")}function W(a,e,s,r){var i=a.__attributes??(a.__attributes={});I&&(i[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||i[e]!==(i[e]=s)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[na]=s),s==null?a.removeAttribute(e):typeof s!="string"&&xa(a).includes(e)?a[e]=s:a.setAttribute(e,s))}var _e=new Map;function xa(a){var e=_e.get(a.nodeName);if(e)return e;_e.set(a.nodeName,e=[]);for(var s,r=a,i=Element.prototype;i!==r;){s=ta(r);for(var o in s)s[o].set&&e.push(o);r=sa(r)}return e}function Aa(a){return function(...e){var s=e[0];return s.preventDefault(),a==null?void 0:a.apply(this,e)}}const Ia=!0,Wa=Object.freeze(Object.defineProperty({__proto__:null,prerender:Ia},Symbol.toStringTag,{value:"Module"}));var Ea=he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svelte-1cabm5y"><path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>'),Ta=he('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svelte-1cabm5y"><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>'),Na=H('<div class="container svelte-1cabm5y"><div><div class="line svelte-1cabm5y"><div class="arrow svelte-1cabm5y"></div></div> <div class="numbers svelte-1cabm5y"><span> </span> <span> </span></div></div> <div class="data svelte-1cabm5y"><div class="naming-info svelte-1cabm5y"><h2 class="name svelte-1cabm5y"> </h2> <span class="symbol svelte-1cabm5y"> </span></div> <div class="performance-info svelte-1cabm5y"><span class="price svelte-1cabm5y"> </span> <div class="change svelte-1cabm5y"><span><!> </span> <span> </span></div></div> <div class="price-history svelte-1cabm5y"><div class="price-history-item"><span class="price-description svelte-1cabm5y">Open</span> </div> <div class="price-history-item"><span class="price-description svelte-1cabm5y">High</span> </div> <div class="price-history-item"><span class="price-description svelte-1cabm5y">Low</span> </div></div></div></div>');function Sa(a,e){ia(e,!1);const s=F(),r=F();let i=D(e,"high",8),o=D(e,"low",8),d=D(e,"name",8),v=D(e,"open",8),u=D(e,"price",8),g=D(e,"symbol",8),n=F(),b=F();function l(x){return x.toFixed(2)}z(()=>(R(u()),R(v())),()=>{A(s,u()-v())}),z(()=>p(s),()=>{A(r,p(s)>=0)}),z(()=>(R(v()),p(s)),()=>{v()===0?p(s)>0?A(n,100):p(s)<0?A(n,-100):A(n,0):A(n,p(s)/v()*100)}),z(()=>(R(i()),R(o()),R(u())),()=>{let x=i()-o();x===0?A(b,50):A(b,(u()-o())/x*100)}),la();var f=Na(),t=m(f),y=m(t),w=m(y);_(y);var c=k(y,2),h=m(c),O=m(h,!0);_(h);var E=k(h,2),T=m(E,!0);_(E),_(c),_(t);var P=k(t,2),G=m(P),L=m(G),U=m(L,!0);_(L);var Y=k(L,2),Ae=m(Y,!0);_(Y),_(G);var q=k(G,2),K=m(q),Ie=m(K,!0);_(K);var se=k(K,2),B=m(se),re=m(B);{var Ee=x=>{var M=Ea();S(x,M)},Te=x=>{var M=Ta();S(x,M)};ae(re,x=>{p(r)?x(Ee):x(Te,!1)})}var Ne=k(re);_(B);var J=k(B,2),Se=m(J);_(J),_(se),_(q);var te=k(q,2),X=m(te),Oe=k(m(X));_(X);var Q=k(X,2),Le=k(m(Q));_(Q);var ne=k(Q,2),Ce=k(m(ne));_(ne),_(te),_(P),_(f),we((x,M,Ge,Fe,Me,Re)=>{ee(t,1,`thermometer ${(p(r)?"positive-thermometer":"negative-thermometer")??""}`,"svelte-1cabm5y"),W(w,"style",`bottom:calc(${p(b)??""}% - 6px)`),N(O,x),N(T,M),W(L,"title",d()),N(U,d()),N(Ae,g()),N(Ie,Ge),ee(B,1,ue(p(r)?"positive-absolute-change":"negative-absolute-change"),"svelte-1cabm5y"),N(Ne,` ${Fe??""}`),ee(J,1,ue(p(r)?"positive-percent-change":"negative-percent-change"),"svelte-1cabm5y"),N(Se,`(${Me??""}%)`),N(Oe,` ${Re??""}`),N(Le,` ${x??""}`),N(Ce,` ${M??""}`)},[()=>l(i()),()=>l(o()),()=>l(u()),()=>l(p(s)),()=>l(p(n)),()=>l(v())],be),S(a,f),oa()}var Oa=H('<meta name="description" content="Simple web application for a user to add basic stock tickers to a dashboard."> <link rel="icon"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""> <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&amp;display=swap" rel="stylesheet">',1),La=H('<p class="error-message svelte-1h2i9cs">This stock is already on your dashboard.</p>'),Ca=H(`<p class="error-message svelte-1h2i9cs">Stock not found (they're hardcoded - <a href="https://github.com/codyatwork/svelte-stock-watcher#the-stocks-are-hard-coded-here-are-the-ones-included" target="_blank" rel="noopener">see the available stocks here</a>).</p>`),Ga=H('<div class="stock-wrapper svelte-1h2i9cs"><!></div>'),Fa=H('<div class="container svelte-1h2i9cs"><h1 class="heading svelte-1h2i9cs">Stock Watcher</h1> <form class="add-input-group svelte-1h2i9cs"><input class="add-input svelte-1h2i9cs" type="text" placeholder="Enter stock symbol"> <button class="add-button svelte-1h2i9cs">Add<span class="verbose-button-text svelte-1h2i9cs">&nbsp;Stock</span></button></form> <!> <div class="stocks svelte-1h2i9cs"></div></div>');function Ya(a){const e={GOOG:{high:709.28,low:689.47,name:"Alphabet Inc. CL C",open:691,price:706.32,symbol:"GOOG"},YHOO:{high:29.66,low:29.06,name:"Yahoo! Inc",open:29.28,price:29.27,symbol:"YHOO"},AIG:{high:53.47,low:52.28,name:"American International Group Inc",open:52.06,price:53.08,symbol:"AIG"},UWTIF:{high:1.74,low:1.5,name:"VelocityShares 3x Long Crude ETN",open:1.37,price:1.61,symbol:"UWTIF"},DWTIF:{high:297.5,low:245.59,name:"3x Inverse Crude",open:307.1,price:253.41,symbol:"DWTIF"},GRPN:{high:4.13,low:3.6,name:"Groupon Inc",open:4.08,price:3.74,symbol:"GRPN"}},s={duplicate:"duplicate",notFound:"notFound"};let r=F(null),i=F(""),o=F([]);function d(){e[p(i)]?p(o).some(t=>t.symbol===p(i))?A(r,s.duplicate):(A(o,[...p(o),e[p(i)]]),A(r,null),A(i,"")):A(r,s.notFound)}var v=Fa();va(t=>{var y=Oa();ca.title="Svelte Stock Watcher";var w=k(ce(y),2);W(w,"href",`${da??""}/favicon.png`),ve(6),S(t,y)});var u=k(m(v),2),g=m(u);wa(g),ve(2),_(u);var n=k(u,2);{var b=t=>{var y=La();S(t,y)},l=t=>{var y=De(),w=ce(y);{var c=h=>{var O=Ca();S(h,O)};ae(w,h=>{p(r)===s.notFound&&h(c)},!0)}S(t,y)};ae(n,t=>{p(r)===s.duplicate?t(b):t(l,!1)})}var f=k(n,2);ha(f,5,()=>p(o),ua,(t,y)=>{var w=Ga(),c=m(w);Sa(c,fa(()=>p(y))),_(w),S(t,w)}),_(f),_(v),we(()=>ka(g,p(i))),fe("input",g,t=>A(i,t.target.value.toUpperCase())),fe("submit",u,Aa(d)),S(a,v)}export{Ya as component,Wa as universal};
