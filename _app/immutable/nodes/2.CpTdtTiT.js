import{a as O,t as P,n as me,c as Oe}from"../chunks/disclose-version.DLSybsdX.js";import"../chunks/legacy.iegT-WuC.js";import{a5 as Le,b as Ce,h as E,M as ee,J as Ge,I as Fe,an as ge,K as Me,L as oe,N as ae,c as W,au as q,O as ye,a as be,P as Re,F as ce,av as De,aw as He,am as Pe,ax as Ve,d as We,a6 as Ye,aj as Be,aa as ze,a2 as Ue,A as ve,ay as qe,az as Ke,aA as Je,ag as Xe,H as Qe,aB as Ze,aC as $e,aD as je,p as ea,aE as U,aF as aa,v as h,w as u,x as b,t as S,m as _,g as sa,aG as M,q as D,C as I,aH as ta,f as fe,aI as de}from"../chunks/runtime.RGVKy-so.js";import{s as T,a as ra,e as pe}from"../chunks/render.XVFcx8M5.js";import{p as H,i as te,s as na}from"../chunks/props.DAo7Hr9K.js";import{b as ia}from"../chunks/paths.Ch89Baxt.js";let ue=!1;function la(){ue||(ue=!0,document.addEventListener("reset",a=>{Promise.resolve().then(()=>{var e;if(!a.defaultPrevented)for(const s of a.target.elements)(e=s.__on_r)==null||e.call(s)})},{capture:!0}))}function oa(a,e){return e}function ca(a,e,s,t){for(var i=[],c=e.length,f=0;f<c;f++)He(e[f].e,i,!0);var m=c>0&&i.length===0&&s!==null;if(m){var p=s.parentNode;Pe(p),p.append(s),t.clear(),G(a,e[0].prev,e[c-1].next)}Ve(i,()=>{for(var g=0;g<c;g++){var y=e[g];m||(t.delete(y.k),G(a,y.prev,y.next)),We(y.e,!m)}})}function va(a,e,s,t,i,c=null){var f=a,m={flags:e,items:new Map,first:null};{var p=a;f=E?ee(Ye(p)):p.appendChild(Le())}E&&Ge();var g=null,y=!1;Ce(()=>{var n=s(),v=Fe(n)?n:n==null?[]:ge(n),l=v.length;if(y&&l===0)return;y=l===0;let r=!1;if(E){var d=f.data===Me;d!==(l===0)&&(f=oe(),ee(f),ae(!1),r=!0)}if(E){for(var w=null,k,o=0;o<l;o++){if(W.nodeType===8&&W.data===Be){f=W,r=!0,ae(!1);break}var x=v[o],F=t(x,o);k=we(W,m,w,null,x,F,o,i,e),m.items.set(F,k),w=k}l>0&&ee(oe())}if(!E){var L=ze;fa(v,m,f,i,e,(L.f&q)!==0,t)}c!==null&&(l===0?g?ye(g):g=be(()=>c(f)):g!==null&&Re(g,()=>{g=null})),r&&ae(!0),s()}),E&&(f=W)}function fa(a,e,s,t,i,c,f,m){var p=a.length,g=e.items,y=e.first,n=y,v,l=null,r=[],d=[],w,k,o,x;for(x=0;x<p;x+=1){if(w=a[x],k=f(w,x),o=g.get(k),o===void 0){var F=n?n.e.nodes_start:s;l=we(F,e,l,l===null?e.first:l.next,w,k,x,t,i),g.set(k,l),r=[],d=[],n=l.next;continue}if(da(o,w,x),o.e.f&q&&ye(o.e),o!==n){if(v!==void 0&&v.has(o)){if(r.length<d.length){var L=d[0],A;l=L.prev;var R=r[0],C=r[r.length-1];for(A=0;A<r.length;A+=1)_e(r[A],L,s);for(A=0;A<d.length;A+=1)v.delete(d[A]);G(e,R.prev,C.next),G(e,l,R),G(e,C,L),n=L,l=C,x-=1,r=[],d=[]}else v.delete(o),_e(o,n,s),G(e,o.prev,o.next),G(e,o,l===null?e.first:l.next),G(e,l,o),l=o;continue}for(r=[],d=[];n!==null&&n.k!==k;)(c||!(n.e.f&q))&&(v??(v=new Set)).add(n),d.push(n),n=n.next;if(n===null)continue;o=n}r.push(o),l=o,n=o.next}if(n!==null||v!==void 0){for(var V=v===void 0?[]:ge(v);n!==null;)(c||!(n.e.f&q))&&V.push(n),n=n.next;var B=V.length;if(B>0){var K=p===0?s:null;ca(e,V,K,g)}}ce.first=e.first&&e.first.e,ce.last=l&&l.e}function da(a,e,s,t){De(a.v,e),a.i=s}function we(a,e,s,t,i,c,f,m,p,g){var y=(p&Ke)!==0,n=(p&Je)===0,v=y?n?Ue(i):ve(i):i,l=p&qe?ve(f):f,r={i:l,v,k:c,a:null,e:null,prev:s,next:t};try{return r.e=be(()=>m(a,v,l),E),r.e.prev=s&&s.e,r.e.next=t&&t.e,s===null?e.first=r:(s.next=r,s.e.next=r.e),t!==null&&(t.prev=r,t.e.prev=r.e),r}finally{}}function _e(a,e,s){for(var t=a.next?a.next.e.nodes_start:s,i=e?e.e.nodes_start:s,c=a.e.nodes_start;c!==t;){var f=Xe(c);i.before(c),c=f}}function G(a,e,s){e===null?a.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}function pa(a){if(E){var e=!1,s=()=>{if(!e){if(e=!0,a.hasAttribute("value")){var t=a.value;Y(a,"value",null),a.value=t}if(a.hasAttribute("checked")){var i=a.checked;Y(a,"checked",null),a.checked=i}}};a.__on_r=s,Ze(s),la()}}function ua(a,e){var s=a.__attributes??(a.__attributes={});s.value===(s.value=e??void 0)||a.value===e&&(e!==0||a.nodeName!=="PROGRESS")||(a.value=e)}function Y(a,e,s,t){var i=a.__attributes??(a.__attributes={});E&&(i[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||i[e]!==(i[e]=s)&&(e==="style"&&"__styles"in a&&(a.__styles={}),e==="loading"&&(a[je]=s),s==null?a.removeAttribute(e):typeof s!="string"&&_a(a).includes(e)?a[e]=s:a.setAttribute(e,s))}var he=new Map;function _a(a){var e=he.get(a.nodeName);if(e)return e;he.set(a.nodeName,e=[]);for(var s,t=a,i=Element.prototype;i!==t;){s=$e(t);for(var c in s)s[c].set&&e.push(c);t=Qe(t)}return e}function se(a,e){var s=a.__className,t=ha(e);E&&a.className===t?a.__className=t:(s!==t||E&&a.className!==t)&&(e==null?a.removeAttribute("class"):a.className=t,a.__className=t)}function ha(a){return a??""}function ma(a){return function(...e){var s=e[0];return s.preventDefault(),a==null?void 0:a.apply(this,e)}}const ga=!0,Fa=Object.freeze(Object.defineProperty({__proto__:null,prerender:ga},Symbol.toStringTag,{value:"Module"}));var ya=me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svelte-1cabm5y"><path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>'),ba=me('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svelte-1cabm5y"><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>'),wa=P('<div class="container svelte-1cabm5y"><div><div class="line svelte-1cabm5y"><div class="arrow svelte-1cabm5y"></div></div> <div class="numbers svelte-1cabm5y"><span> </span> <span> </span></div></div> <div class="data svelte-1cabm5y"><div class="naming-info svelte-1cabm5y"><h2 class="name svelte-1cabm5y"> </h2> <span class="symbol svelte-1cabm5y"> </span></div> <div class="performance-info svelte-1cabm5y"><span class="price svelte-1cabm5y"> </span> <div class="change svelte-1cabm5y"><span><!> </span> <span> </span></div></div> <div class="price-history svelte-1cabm5y"><div class="price-history-item"><span class="price-description svelte-1cabm5y">Open</span> </div> <div class="price-history-item"><span class="price-description svelte-1cabm5y">High</span> </div> <div class="price-history-item"><span class="price-description svelte-1cabm5y">Low</span> </div></div></div></div>');function ka(a,e){ea(e,!1);const s=M(),t=M();let i=H(e,"high",8),c=H(e,"low",8),f=H(e,"name",8),m=H(e,"open",8),p=H(e,"price",8),g=H(e,"symbol",8),y=M(),n=M();function v(N){return N.toFixed(2)}U(()=>(D(p()),D(m())),()=>{I(s,p()-m())}),U(()=>_(s),()=>{I(t,_(s)>=0)}),U(()=>(D(m()),_(s)),()=>{m()===0?_(s)>0?I(y,100):_(s)<0?I(y,-100):I(y,0):I(y,_(s)/m()*100)}),U(()=>(D(i()),D(c()),D(p())),()=>{let N=i()-c();N===0?I(n,50):I(n,(p()-c())/N*100)}),aa();var l=wa(),r=h(l),d=h(r),w=h(d);u(d);var k=b(d,2),o=h(k),x=h(o,!0);S(()=>T(x,v(i()))),u(o);var F=b(o,2),L=h(F,!0);S(()=>T(L,v(c()))),u(F),u(k),u(r);var A=b(r,2),R=h(A),C=h(R),V=h(C,!0);u(C);var B=b(C,2),K=h(B,!0);u(B),u(R);var J=b(R,2),X=h(J),ke=h(X,!0);S(()=>T(ke,v(p()))),u(X);var re=b(X,2),z=h(re),ne=h(z);{var xe=N=>{var j=ya();O(N,j)},Ie=N=>{var j=ba();O(N,j)};te(ne,N=>{_(t)?N(xe):N(Ie,!1)})}var Ae=b(ne);S(()=>T(Ae,` ${v(_(s))??""}`)),u(z);var Q=b(z,2),Ne=h(Q);S(()=>T(Ne,`(${v(_(y))??""}%)`)),u(Q),u(re),u(J);var ie=b(J,2),Z=h(ie),Ee=b(h(Z));S(()=>T(Ee,` ${v(m())??""}`)),u(Z);var $=b(Z,2),Te=b(h($));S(()=>T(Te,` ${v(i())??""}`)),u($);var le=b($,2),Se=b(h(le));S(()=>T(Se,` ${v(c())??""}`)),u(le),u(ie),u(A),u(l),S(()=>{se(r,`thermometer ${(_(t)?"positive-thermometer":"negative-thermometer")??""} svelte-1cabm5y`),Y(w,"style",`bottom:calc(${_(n)??""}% - 6px)`),Y(C,"title",f()),T(V,f()),T(K,g()),se(z,`${(_(t)?"positive-absolute-change":"negative-absolute-change")??""} svelte-1cabm5y`),se(Q,`${(_(t)?"positive-percent-change":"negative-percent-change")??""} svelte-1cabm5y`)}),O(a,l),sa()}var xa=P('<meta name="description" content="Simple web application for a user to add basic stock tickers to a dashboard."> <link rel="icon"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""> <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&amp;display=swap" rel="stylesheet">',1),Ia=P('<p class="error-message svelte-1h2i9cs">This stock is already on your dashboard.</p>'),Aa=P(`<p class="error-message svelte-1h2i9cs">Stock not found (they're hardcoded - <a href="https://github.com/codyatwork/svelte-stock-watcher#the-stocks-are-hard-coded-here-are-the-ones-included" target="_blank" rel="noopener">see the available stocks here</a>).</p>`),Na=P('<div class="stock-wrapper svelte-1h2i9cs"><!></div>'),Ea=P('<div class="container svelte-1h2i9cs"><h1 class="heading svelte-1h2i9cs">Stock Watcher</h1> <form class="add-input-group svelte-1h2i9cs"><input class="add-input svelte-1h2i9cs" type="text" placeholder="Enter stock symbol"> <button class="add-button svelte-1h2i9cs">Add<span class="verbose-button-text svelte-1h2i9cs">&nbsp;Stock</span></button></form> <!> <div class="stocks svelte-1h2i9cs"></div></div>');function Ma(a){const e={GOOG:{high:709.28,low:689.47,name:"Alphabet Inc. CL C",open:691,price:706.32,symbol:"GOOG"},YHOO:{high:29.66,low:29.06,name:"Yahoo! Inc",open:29.28,price:29.27,symbol:"YHOO"},AIG:{high:53.47,low:52.28,name:"American International Group Inc",open:52.06,price:53.08,symbol:"AIG"},UWTIF:{high:1.74,low:1.5,name:"VelocityShares 3x Long Crude ETN",open:1.37,price:1.61,symbol:"UWTIF"},DWTIF:{high:297.5,low:245.59,name:"3x Inverse Crude",open:307.1,price:253.41,symbol:"DWTIF"},GRPN:{high:4.13,low:3.6,name:"Groupon Inc",open:4.08,price:3.74,symbol:"GRPN"}},s={duplicate:"duplicate",notFound:"notFound"};let t=M(null),i=M(""),c=M([]);function f(){e[_(i)]?_(c).some(r=>r.symbol===_(i))?I(t,s.duplicate):(I(c,[..._(c),e[_(i)]]),I(t,null),I(i,"")):I(t,s.notFound)}var m=Ea();ra(r=>{var d=xa();ta.title="Svelte Stock Watcher";var w=b(fe(d),2);Y(w,"href",`${ia??""}/favicon.png`),de(6),O(r,d)});var p=b(h(m),2),g=h(p);pa(g),de(2),u(p);var y=b(p,2);{var n=r=>{var d=Ia();O(r,d)},v=r=>{var d=Oe(),w=fe(d);{var k=o=>{var x=Aa();O(o,x)};te(w,o=>{_(t)===s.notFound&&o(k)},!0)}O(r,d)};te(y,r=>{_(t)===s.duplicate?r(n):r(v,!1)})}var l=b(y,2);va(l,5,()=>_(c),oa,(r,d)=>{var w=Na(),k=h(w);ka(k,na(()=>_(d))),u(w),O(r,w)}),u(l),u(m),S(()=>ua(g,_(i))),pe("input",g,r=>I(i,r.target.value.toUpperCase())),pe("submit",p,ma(f)),O(a,m)}export{Ma as component,Fa as universal};
