var Pn=Array.isArray,Zt=Array.prototype.indexOf,Fn=Array.from,qn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,zt=Object.getOwnPropertyDescriptors,Mn=Object.prototype,Ln=Array.prototype,Jt=Object.getPrototypeOf;function Yn(t){return typeof t=="function"}const jn=()=>{};function Hn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,yt=4,W=8,ut=16,k=32,P=64,U=128,E=256,V=512,v=1024,D=2048,C=4096,b=8192,X=16384,Wt=32768,gt=65536,Bn=1<<17,Xt=1<<19,Tt=1<<20,vt=Symbol("$state"),Un=Symbol("legacy props"),Vn=Symbol("");function mt(t){return t===this.v}function Qt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function At(t){return!Qt(t,this.v)}function tn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function nn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function rn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function en(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Gn(){throw new Error("https://svelte.dev/e/hydration_failed")}function $n(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Kn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Zn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function ln(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let Q=!1;function zn(){Q=!0}const Jn=1,Wn=2,Xn=16,Qn=1,tr=2,nr=4,rr=8,er=16,ar=1,lr=2,sn="[",un="[!",on="]",xt={},sr=Symbol(),ur="http://www.w3.org/1999/xhtml";function kt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let f=null;function pt(t){f=t}function or(t,n=!1,r){f={p:f,c:null,e:null,m:!1,s:t,x:null,l:null},Q&&!n&&(f.l={s:null,u:null,r1:[],r2:ot(!1)})}function fr(t){const n=f;if(n!==null){const s=n.e;if(s!==null){var r=o,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];Z(a.effect),K(a.reaction),Pt(a.fn)}}finally{Z(r),K(e)}}f=n.p,n.m=!0}return{}}function tt(){return!Q||f!==null&&f.l===null}function ot(t,n){var r={f:0,v:t,reactions:null,equals:mt,rv:0,wv:0};return r}function ir(t){return Rt(ot(t))}function fn(t,n=!1){var e;const r=ot(t);return n||(r.equals=At),Q&&f!==null&&f.l!==null&&((e=f.l).s??(e.s=[])).push(r),r}function _r(t,n=!1){return Rt(fn(t,n))}function Rt(t){return u!==null&&!w&&(u.f&y)!==0&&(A===null?An([t]):A.push(t)),t}function _n(t,n){return u!==null&&!w&&tt()&&(u.f&(y|ut))!==0&&(A===null||!A.includes(t))&&ln(),cn(t,n)}function cn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Ut(),Dt(t,D),tt()&&o!==null&&(o.f&v)!==0&&(o.f&(k|P))===0&&(x===null?xn([t]):x.push(t))),n}function Dt(t,n){var r=t.reactions;if(r!==null)for(var e=tt(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;(i&D)===0&&(!e&&s===o||(T(s,n),(i&(v|E))!==0&&((i&y)!==0?Dt(s,C):et(s))))}}let S=!1;function cr(t){S=t}let g;function L(t){if(t===null)throw kt(),xt;return g=t}function vr(){return L(N(g))}function pr(t){if(S){if(N(g)!==null)throw kt(),xt;g=t}}function hr(t=1){if(S){for(var n=t,r=g;n--;)r=N(r);g=r}}function dr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===on){if(t===0)return n;t-=1}else(r===sn||r===un)&&(t+=1)}var e=N(n);n.remove(),n=e}}var ht,vn,pn,It,St;function Er(){if(ht===void 0){ht=window,vn=document,pn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;It=ct(n,"firstChild").get,St=ct(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0,Text.prototype.__t=void 0}}function at(t=""){return document.createTextNode(t)}function lt(t){return It.call(t)}function N(t){return St.call(t)}function wr(t,n){if(!S)return lt(t);var r=lt(g);if(r===null)r=g.appendChild(at());else if(n&&r.nodeType!==3){var e=at();return r==null||r.before(e),L(e),e}return L(r),r}function yr(t,n){if(!S){var r=lt(t);return r instanceof Comment&&r.data===""?N(r):r}return g}function gr(t,n=1,r=!1){let e=S?g:t;for(var l;n--;)l=e,e=N(e);if(!S)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=at();return e===null?l==null||l.after(s):e.before(s),L(s),s}return L(e),e}function Tr(t){t.textContent=""}function Ot(t){var n=y|D,r=u!==null&&(u.f&y)!==0?u:null;return o===null||r!==null&&(r.f&E)!==0?n|=E:o.f|=Tt,{ctx:f,deps:null,effects:null,equals:mt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??o}}function mr(t){const n=Ot(t);return n.equals=At,n}function Ct(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)O(n[r])}}function hn(t){for(var n=t.parent;n!==null;){if((n.f&y)===0)return n;n=n.parent}return null}function dn(t){var n,r=o;Z(hn(t));try{Ct(t),n=Gt(t)}finally{Z(r)}return n}function Nt(t){var n=dn(t),r=(R||(t.f&E)!==0)&&t.deps!==null?C:v;T(t,r),t.equals(n)||(t.v=n,t.wv=Ut())}function bt(t){o===null&&u===null&&rn(),u!==null&&(u.f&E)!==0&&o===null&&nn(),it&&tn()}function En(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var l=o,a={ctx:f,deps:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{rt(a),a.f|=Wt}catch(_){throw O(a),_}else n!==null&&et(a);var s=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(Tt|U))===0;if(!s&&e&&(l!==null&&En(a,l),u!==null&&(u.f&y)!==0)){var i=u;(i.effects??(i.effects=[])).push(a)}return a}function Ar(t){const n=F(W,null,!1);return T(n,v),n.teardown=t,n}function xr(t){bt();var n=o!==null&&(o.f&k)!==0&&f!==null&&!f.m;if(n){var r=f;(r.e??(r.e=[])).push({fn:t,effect:o,reaction:u})}else{var e=Pt(t);return e}}function kr(t){return bt(),ft(t)}function Rr(t){const n=F(P,t,!0);return(r={})=>new Promise(e=>{r.outro?gn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Pt(t){return F(yt,t,!1)}function Dr(t,n){var r=f,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ft(()=>{t(),!e.ran&&(e.ran=!0,_n(r.l.r2,!0),Nn(n))})}function Ir(){var t=f;ft(()=>{if(Kt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;(r.f&v)!==0&&T(r,C),q(r)&&rt(r),n.ran=!1}t.l.r2.v=!1}})}function ft(t){return F(W,t,!0)}function Sr(t,n=[],r=Ot){const e=n.map(r);return wn(()=>t(...e.map(Kt)))}function wn(t,n=0){return F(W|ut|n,t,!0)}function Or(t,n=!0){return F(W|k,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=it,e=u;Et(!0),K(null);try{n.call(null)}finally{Et(r),K(e)}}}function qt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;(r.f&P)!==0?r.parent=null:O(r,n),r=e}}function yn(t){for(var n=t.first;n!==null;){var r=n.next;(n.f&k)===0&&O(n),n=r}}function O(t,n=!0){var r=!1;if((n||(t.f&Xt)!==0)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:N(e);e.remove(),e=a}r=!0}qt(t,n&&!r),J(t,0),T(t,X);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Ft(t);var i=t.parent;i!==null&&i.first!==null&&Mt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Mt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function gn(t,n){var r=[];Lt(t,r,!0),Tn(r,()=>{O(t),n&&n()})}function Tn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Lt(t,n,r){if((t.f&b)===0){if(t.f^=b,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&gt)!==0||(e.f&k)!==0;Lt(e,n,a?r:!1),e=l}}}function Cr(t){Yt(t,!0)}function Yt(t,n){if((t.f&b)!==0){t.f^=b,(t.f&v)===0&&(t.f^=v),q(t)&&(T(t,D),et(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&gt)!==0||(r.f&k)!==0;Yt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}const mn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let Y=[],j=[];function jt(){var t=Y;Y=[],wt(t)}function Ht(){var t=j;j=[],wt(t)}function Nr(t){Y.length===0&&queueMicrotask(jt),Y.push(t)}function br(t){j.length===0&&mn(Ht),j.push(t)}function dt(){Y.length>0&&jt(),j.length>0&&Ht()}let B=!1,G=!1,$=null,I=!1,it=!1;function Et(t){it=t}let M=[];let u=null,w=!1;function K(t){u=t}let o=null;function Z(t){o=t}let A=null;function An(t){A=t}let c=null,d=0,x=null;function xn(t){x=t}let Bt=1,z=0,R=!1;function Ut(){return++Bt}function q(t){var p;var n=t.f;if((n&D)!==0)return!0;if((n&C)!==0){var r=t.deps,e=(n&E)!==0;if(r!==null){var l,a,s=(n&V)!==0,i=e&&o!==null&&!R,_=r.length;if(s||i){var m=t,H=m.parent;for(l=0;l<_;l++)a=r[l],(s||!((p=a==null?void 0:a.reactions)!=null&&p.includes(m)))&&(a.reactions??(a.reactions=[])).push(m);s&&(m.f^=V),i&&H!==null&&(H.f&E)===0&&(m.f^=E)}for(l=0;l<_;l++)if(a=r[l],q(a)&&Nt(a),a.wv>t.wv)return!0}(!e||o!==null&&!R)&&T(t,v)}return!1}function kn(t,n){for(var r=n;r!==null;){if((r.f&U)!==0)try{r.fn(t);return}catch{r.f^=U}r=r.parent}throw B=!1,t}function Rn(t){return(t.f&X)===0&&(t.parent===null||(t.parent.f&U)===0)}function nt(t,n,r,e){if(B){if(r===null&&(B=!1),Rn(n))throw t;return}r!==null&&(B=!0);{kn(t,n);return}}function Vt(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];(a.f&y)!==0?Vt(a,n,!1):n===a&&(r?T(a,D):(a.f&v)!==0&&T(a,C),et(a))}}function Gt(t){var _t;var n=c,r=d,e=x,l=u,a=R,s=A,i=f,_=w,m=t.f;c=null,d=0,x=null,R=(m&E)!==0&&(w||!I||u===null),u=(m&(k|P))===0?t:null,A=null,pt(t.ctx),w=!1,z++;try{var H=(0,t.fn)(),p=t.deps;if(c!==null){var h;if(J(t,d),p!==null&&d>0)for(p.length=d+c.length,h=0;h<c.length;h++)p[d+h]=c[h];else t.deps=p=c;if(!R)for(h=d;h<p.length;h++)((_t=p[h]).reactions??(_t.reactions=[])).push(t)}else p!==null&&d<p.length&&(J(t,d),p.length=d);if(tt()&&x!==null&&!w&&p!==null&&(t.f&(y|C|D))===0)for(h=0;h<x.length;h++)Vt(x[h],t);return l!==null&&z++,H}finally{c=n,d=r,x=e,u=l,R=a,A=s,pt(i),w=_}}function Dn(t,n){let r=n.reactions;if(r!==null){var e=Zt.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&(n.f&y)!==0&&(c===null||!c.includes(n))&&(T(n,C),(n.f&(E|V))===0&&(n.f^=V),Ct(n),J(n,0))}function J(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Dn(t,r[e])}function rt(t){var n=t.f;if((n&X)===0){T(t,v);var r=o,e=f,l=I;o=t,I=!0;try{(n&ut)!==0?yn(t):qt(t),Ft(t);var a=Gt(t);t.teardown=typeof a=="function"?a:null,t.wv=Bt;var s=t.deps,i}catch(_){nt(_,t,r,e||t.ctx)}finally{I=l,o=r}}}function In(){try{en()}catch(t){if($!==null)nt(t,$,null);else throw t}}function $t(){var t=I;try{var n=0;for(I=!0;M.length>0;){n++>1e3&&In();var r=M,e=r.length;M=[];for(var l=0;l<e;l++){var a=On(r[l]);Sn(a)}}}finally{G=!1,I=t,$=null}}function Sn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if((e.f&(X|b))===0)try{q(e)&&(rt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Mt(e):e.fn=null))}catch(l){nt(l,e,null,e.ctx)}}}function et(t){G||(G=!0,queueMicrotask($t));for(var n=$=t;n.parent!==null;){n=n.parent;var r=n.f;if((r&(P|k))!==0){if((r&v)===0)return;n.f^=v}}M.push(n)}function On(t){for(var n=[],r=t;r!==null;){var e=r.f,l=(e&(k|P))!==0,a=l&&(e&v)!==0;if(!a&&(e&b)===0){if((e&yt)!==0)n.push(r);else if(l)r.f^=v;else{var s=u;try{u=r,q(r)&&rt(r)}catch(m){nt(m,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function Cn(t){var n;for(dt();M.length>0;)G=!0,$t(),dt();return n}async function Pr(){await Promise.resolve(),Cn()}function Kt(t){var n=t.f,r=(n&y)!==0;if(u!==null&&!w){A!==null&&A.includes(t)&&an();var e=u.deps;t.rv<z&&(t.rv=z,c===null&&e!==null&&e[d]===t?d++:c===null?c=[t]:(!R||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&E)===0&&(l.f^=E)}return r&&(l=t,q(l)&&Nt(l)),t.v}function Nn(t){var n=w;try{return w=!0,t()}finally{w=n}}const bn=-7169;function T(t,n){t.f=t.f&bn|n}function Fr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=Jt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=zt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{mr as $,ot as A,Kn as B,_n as C,ct as D,gt as E,o as F,Zn as G,Jt as H,Pn as I,vr as J,sn as K,un as L,dr as M,L as N,cr as O,Cr as P,gn as Q,$n as R,vt as S,Bn as T,sr as U,nr as V,At as W,Qn as X,tr as Y,rr as Z,Un as _,Or as a,fn as a0,er as a1,Yn as a2,at as a3,lt as a4,pn as a5,ar as a6,lr as a7,K as a8,Z as a9,ur as aA,br as aB,zt as aC,Vn as aD,Dr as aE,Ir as aF,_r as aG,vn as aH,hr as aI,Qt as aJ,u as aa,Ar as ab,Nr as ac,qn as ad,Xt as ae,N as af,Er as ag,xt as ah,on as ai,kt as aj,Gn as ak,Tr as al,Fn as am,Rr as an,Pt as ao,ft as ap,Cn as aq,Pr as ar,ir as as,b as at,cn as au,Lt as av,Tn as aw,Wn as ax,Jn as ay,Xn as az,wn as b,g as c,O as d,zn as e,yr as f,f as g,S as h,Nn as i,kr as j,Kt as k,Q as l,Hn as m,jn as n,Fr as o,Ot as p,or as q,wt as r,fr as s,Sr as t,xr as u,wr as v,pr as w,gr as x,Mn as y,Ln as z};
