import{a as S,t as C,c as Se}from"../chunks/disclose-version.Bw8p9h5V.js";import{_ as Le,b as Oe,h as A,y as Q,w as Ce,t as Ge,a9 as ge,H as De,x as ce,z as Z,c as P,u as ye,a as be,v as Fe,as as j,m as oe,at as Me,au as He,av as Re,T as Pe,s as ve,aw as Ve,ax as We,a8 as Ye,ay as ze,d as Be,a2 as Ue,a5 as $e,a1 as qe,r as de,az as Ke,aA as Xe,aB as Je,p as Qe,aC as z,aD as Ze,ak as g,al as _,am as y,aj as E,l as h,e as je,aE as D,j as x,ai as H,aF as ea,f as fe,aG as pe}from"../chunks/runtime.CrrSyvfs.js";import{s as T,a as aa,e as ue}from"../chunks/render.BeBlzOLR.js";import{p as R,i as se,s as sa}from"../chunks/props.DKsGPZYy.js";import{b as ra}from"../chunks/paths.Jj3uXRaI.js";let ee=null;function ta(a,e){return e}function na(a,e,s,r){for(var l=[],o=e.length,f=0;f<o;f++)We(e[f].e,l,!0);var u=o>0&&l.length===0&&s!==null;if(u){var m=s.parentNode;Ye(m),m.append(s),r.clear(),O(a,e[0].prev,e[o-1].next)}ze(l,()=>{for(var t=0;t<o;t++){var d=e[t];u||(r.delete(d.k),O(a,d.prev,d.next)),Be(d.e,!u)}})}function la(a,e,s,r,l,o=null){var f=a,u={flags:e,items:new Map,first:null};{var m=a;f=A?Q(Ue(m)):m.appendChild(Le())}A&&Ce();var t=null,d=!1;Oe(()=>{var v=s(),n=Ge(v)?v:v==null?[]:ge(v),i=n.length;if(d&&i===0)return;d=i===0;let c=!1;if(A){var b=f.data===De;b!==(i===0)&&(f=ce(),Q(f),Z(!1),c=!0)}if(A){for(var p=null,w,I=0;I<i;I++){if(P.nodeType===8&&P.data===$e){f=P,c=!0,Z(!1);break}var N=n[I],k=r(N,I);w=we(P,u,p,null,N,k,I,l,e),u.items.set(k,w),p=w}i>0&&Q(ce())}A||ia(n,u,f,l,e,r),o!==null&&(i===0?t?ye(t):t=be(()=>o(f)):t!==null&&Fe(t,()=>{t=null})),c&&Z(!0),s()}),A&&(f=P)}function ia(a,e,s,r,l,o){var f=a.length,u=e.items,m=e.first,t=m,d,v=null,n=[],i=[],c,b,p,w;for(w=0;w<f;w+=1){if(c=a[w],b=o(c,w),p=u.get(b),p===void 0){var I=t?t.e.nodes_start:s;v=we(I,e,v,v===null?e.first:v.next,c,b,w,r,l),u.set(b,v),n=[],i=[],t=v.next;continue}if(ca(p,c,w),p.e.f&j&&ye(p.e),p!==t){if(d!==void 0&&d.has(p)){if(n.length<i.length){var N=i[0],k;v=N.prev;var W=n[0],F=n[n.length-1];for(k=0;k<n.length;k+=1)_e(n[k],N,s);for(k=0;k<i.length;k+=1)d.delete(i[k]);O(e,W.prev,F.next),O(e,v,W),O(e,F,N),t=N,v=F,w-=1,n=[],i=[]}else d.delete(p),_e(p,t,s),O(e,p.prev,p.next),O(e,p,v===null?e.first:v.next),O(e,v,p),v=p;continue}for(n=[],i=[];t!==null&&t.k!==b;)t.e.f&j||(d??(d=new Set)).add(t),i.push(t),t=t.next;if(t===null)continue;p=t}n.push(p),v=p,t=p.next}if(t!==null||d!==void 0){for(var G=d===void 0?[]:ge(d);t!==null;)t.e.f&j||G.push(t),t=t.next;var M=G.length;if(M>0){var B=f===0?s:null;na(e,G,B,u)}}oe.first=e.first&&e.first.e,oe.last=v&&v.e}function ca(a,e,s,r){Me(a.v,e),a.i=s}function we(a,e,s,r,l,o,f,u,m){var t=ee;try{var d=(m&He)!==0,v=(m&Re)===0,n=d?v?Pe(l):ve(l):l,i=m&Ve?ve(f):f,c={i,v:n,k:o,a:null,e:null,prev:s,next:r};return ee=c,c.e=be(()=>u(a,n,i),A),c.e.prev=s&&s.e,c.e.next=r&&r.e,s===null?e.first=c:(s.next=c,s.e.next=c.e),r!==null&&(r.prev=c,r.e.prev=c.e),c}finally{ee=t}}function _e(a,e,s){for(var r=a.next?a.next.e.nodes_start:s,l=e?e.e.nodes_start:s,o=a.e.nodes_start;o!==r;){var f=qe(o);l.before(o),o=f}}function O(a,e,s){e===null?a.first=s:(e.next=s,e.e.next=s&&s.e),s!==null&&(s.prev=e,s.e.prev=e&&e.e)}let he=!1;function oa(){he||(he=!0,document.addEventListener("reset",a=>{Promise.resolve().then(()=>{var e;if(!a.defaultPrevented)for(const s of a.target.elements)(e=s.__on_r)==null||e.call(s)})},{capture:!0}))}function va(a){if(A){var e=!1,s=()=>{if(!e){if(e=!0,a.hasAttribute("value")){var r=a.value;V(a,"value",null),a.value=r}if(a.hasAttribute("checked")){var l=a.checked;V(a,"checked",null),a.checked=l}}};a.__on_r=s,Ke(s),oa()}}function da(a,e){var s=a.__attributes??(a.__attributes={});s.value===(s.value=e)||a.value===e||(a.value=e)}function V(a,e,s,r){var l=a.__attributes??(a.__attributes={});A&&(l[e]=a.getAttribute(e),e==="src"||e==="srcset"||e==="href"&&a.nodeName==="LINK")||l[e]!==(l[e]=s)&&(e==="loading"&&(a[Je]=s),s==null?a.removeAttribute(e):typeof s!="string"&&fa(a).includes(e)?a[e]=s:a.setAttribute(e,s))}var me=new Map;function fa(a){var e=me.get(a.nodeName);if(e)return e;me.set(a.nodeName,e=[]);for(var s,r=de(a),l=Element.prototype;l!==r;){s=Xe(r);for(var o in s)s[o].set&&e.push(o);r=de(r)}return e}function ae(a,e){var s=a.__className,r=pa(e);A&&a.className===r?a.__className=r:(s!==r||A&&a.className!==r)&&(e==null?a.removeAttribute("class"):a.className=r,a.__className=r)}function pa(a){return a??""}function ua(a){return function(...e){var s=e[0];return s.preventDefault(),a==null?void 0:a.apply(this,e)}}const _a=!0,La=Object.freeze(Object.defineProperty({__proto__:null,prerender:_a},Symbol.toStringTag,{value:"Module"}));var ha=C('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svelte-1cabm5y"><path d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path></svg>'),ma=C('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svelte-1cabm5y"><path d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path></svg>'),ga=C('<div class="container svelte-1cabm5y"><div><div class="line svelte-1cabm5y"><div class="arrow svelte-1cabm5y"></div></div> <div class="numbers svelte-1cabm5y"><span> </span> <span> </span></div></div> <div class="data svelte-1cabm5y"><div class="naming-info svelte-1cabm5y"><h2 class="name svelte-1cabm5y"> </h2> <span class="symbol svelte-1cabm5y"> </span></div> <div class="performance-info svelte-1cabm5y"><span class="price svelte-1cabm5y"> </span> <div class="change svelte-1cabm5y"><span><!> </span> <span> </span></div></div> <div class="price-history svelte-1cabm5y"><div class="price-history-item"><span class="price-description svelte-1cabm5y">Open</span> </div> <div class="price-history-item"><span class="price-description svelte-1cabm5y">High</span> </div> <div class="price-history-item"><span class="price-description svelte-1cabm5y">Low</span> </div></div></div></div>');function ya(a,e){Qe(e,!1);const s=D(),r=D();let l=R(e,"high",8),o=R(e,"low",8),f=R(e,"name",8),u=R(e,"open",8),m=R(e,"price",8),t=R(e,"symbol",8),d=D(),v=D();function n(L){return L.toFixed(2)}z(()=>(H(m()),H(u())),()=>{x(s,m()-u())}),z(()=>h(s),()=>{x(r,h(s)>=0)}),z(()=>(H(u()),h(s)),()=>{u()===0?h(s)>0?x(d,100):h(s)<0?x(d,-100):x(d,0):x(d,h(s)/u()*100)}),z(()=>(H(l()),H(o()),H(m())),()=>{let L=l()-o();L===0?x(v,50):x(v,(m()-o())/L*100)}),Ze();var i=ga(),c=g(i),b=g(c),p=g(b);_(b);var w=y(b,2),I=g(w),N=g(I);E(()=>T(N,n(l()))),_(I);var k=y(I,2),W=g(k);E(()=>T(W,n(o()))),_(k),_(w),_(c);var F=y(c,2),G=g(F),M=g(G),B=g(M);_(M);var re=y(M,2),ke=g(re);_(re),_(G);var U=y(G,2),$=g(U),xe=g($);E(()=>T(xe,n(m()))),_($);var te=y($,2),Y=g(te),ne=g(Y);se(ne,()=>h(r),L=>{var J=ha();S(L,J)},L=>{var J=ma();S(L,J)});var Ie=y(ne);E(()=>T(Ie,` ${n(h(s))??""}`)),_(Y);var q=y(Y,2),Ae=g(q);E(()=>T(Ae,`(${n(h(d))??""}%)`)),_(q),_(te),_(U);var le=y(U,2),K=g(le),Te=y(g(K));E(()=>T(Te,` ${n(u())??""}`)),_(K);var X=y(K,2),Ee=y(g(X));E(()=>T(Ee,` ${n(l())??""}`)),_(X);var ie=y(X,2),Ne=y(g(ie));E(()=>T(Ne,` ${n(o())??""}`)),_(ie),_(le),_(F),_(i),E(()=>{ae(c,`thermometer ${(h(r)?"positive-thermometer":"negative-thermometer")??""} svelte-1cabm5y`),V(p,"style",`bottom:calc(${h(v)??""}% - 6px)`),V(M,"title",f()),T(B,f()),T(ke,t()),ae(Y,`${(h(r)?"positive-absolute-change":"negative-absolute-change")??""} svelte-1cabm5y`),ae(q,`${(h(r)?"positive-percent-change":"negative-percent-change")??""} svelte-1cabm5y`)}),S(a,i),je()}var ba=C('<meta name="description" content="Simple web application for a user to add basic stock tickers to a dashboard."> <link rel="icon"> <link rel="preconnect" href="https://fonts.googleapis.com"> <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin=""> <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&amp;display=swap" rel="stylesheet">',1),wa=C('<p class="error-message svelte-1h2i9cs">This stock is already on your dashboard.</p>'),ka=C(`<p class="error-message svelte-1h2i9cs">Stock not found (they're hardcoded - <a href="https://github.com/codyatwork/svelte-stock-watcher#the-stocks-are-hard-coded-here-are-the-ones-included" target="_blank" rel="noopener">see the available stocks here</a>).</p>`),xa=C('<div class="stock-wrapper svelte-1h2i9cs"><!></div>'),Ia=C('<div class="container svelte-1h2i9cs"><h1 class="heading svelte-1h2i9cs">Stock Watcher</h1> <form class="add-input-group svelte-1h2i9cs"><input class="add-input svelte-1h2i9cs" type="text" placeholder="Enter stock symbol"> <button class="add-button svelte-1h2i9cs">Add<span class="verbose-button-text svelte-1h2i9cs">&nbsp;Stock</span></button></form> <!> <div class="stocks svelte-1h2i9cs"></div></div>');function Oa(a){const e={GOOG:{high:709.28,low:689.47,name:"Alphabet Inc. CL C",open:691,price:706.32,symbol:"GOOG"},YHOO:{high:29.66,low:29.06,name:"Yahoo! Inc",open:29.28,price:29.27,symbol:"YHOO"},AIG:{high:53.47,low:52.28,name:"American International Group Inc",open:52.06,price:53.08,symbol:"AIG"},UWTIF:{high:1.74,low:1.5,name:"VelocityShares 3x Long Crude ETN",open:1.37,price:1.61,symbol:"UWTIF"},DWTIF:{high:297.5,low:245.59,name:"3x Inverse Crude",open:307.1,price:253.41,symbol:"DWTIF"},GRPN:{high:4.13,low:3.6,name:"Groupon Inc",open:4.08,price:3.74,symbol:"GRPN"}},s={duplicate:"duplicate",notFound:"notFound"};let r=D(null),l=D(""),o=D([]);function f(){e[h(l)]?h(o).some(n=>n.symbol===h(l))?x(r,s.duplicate):(x(o,[...h(o),e[h(l)]]),x(r,null),x(l,"")):x(r,s.notFound)}var u=Ia();aa(n=>{var i=ba();ea.title="Svelte Stock Watcher";var c=y(fe(i),2);V(c,"href",`${ra??""}/favicon.png`),pe(6),S(n,i)});var m=y(g(u),2),t=g(m);va(t),pe(2),_(m);var d=y(m,2);se(d,()=>h(r)===s.duplicate,n=>{var i=wa();S(n,i)},n=>{var i=Se(),c=fe(i);se(c,()=>h(r)===s.notFound,b=>{var p=ka();S(b,p)},null,!0),S(n,i)});var v=y(d,2);la(v,5,()=>h(o),ta,(n,i)=>{var c=xa(),b=g(c);ya(b,sa(()=>h(i))),_(c),S(n,c)}),_(v),_(u),E(()=>da(t,h(l))),ue("input",t,n=>x(l,n.target.value.toUpperCase())),ue("submit",m,ua(f)),S(a,u)}export{Oa as component,La as universal};
