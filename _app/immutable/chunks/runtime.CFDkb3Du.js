var Pn=Array.isArray,Ln=Array.from,Mn=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,Yn=Object.prototype,Hn=Array.prototype,Qt=Object.getPrototypeOf;function jn(t){return typeof t=="function"}const Bn=()=>{};function Un(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Tt=4,B=8,ut=16,g=32,W=64,nt=128,I=256,$=512,h=1024,k=2048,b=4096,N=8192,q=16384,tn=32768,mt=65536,Vn=1<<17,nn=1<<19,gt=1<<20,ht=Symbol("$state"),Gn=Symbol("legacy props"),$n=Symbol("");function At(t){return t===this.v}function rn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function kt(t){return!rn(t,this.v)}function en(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ln(t){throw new Error("https://svelte.dev/e/effect_orphan")}function an(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Kn(){throw new Error("https://svelte.dev/e/hydration_failed")}function Zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function zn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Jn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Wn(){X=!0}function ot(t){return{f:0,v:t,reactions:null,equals:At,version:0}}function Xn(t){return xt(ot(t))}function fn(t,n=!1){var e;const r=ot(t);return n||(r.equals=kt),X&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function Qn(t,n=!1){return xt(fn(t,n))}function xt(t){return o!==null&&o.f&y&&(m===null?Rn([t]):m.push(t)),t}function _n(t,n){return o!==null&&ct()&&o.f&(y|ut)&&(m===null||!m.includes(t))&&on(),cn(t,n)}function cn(t,n){return t.equals(n)||(t.v=n,t.version=$t(),Rt(t,k),ct()&&u!==null&&u.f&h&&!(u.f&g)&&(v!==null&&v.includes(t)?(T(u,k),tt(u)):A===null?In([t]):A.push(t))),n}function Rt(t,n){var r=t.reactions;if(r!==null)for(var e=ct(),s=r.length,l=0;l<s;l++){var a=r[l],f=a.f;f&k||!e&&a===u||(T(a,n),f&(h|I)&&(f&y?Rt(a,b):tt(a)))}}function It(t){console.warn("https://svelte.dev/e/hydration_mismatch")}const tr=1,nr=2,rr=16,er=1,sr=2,lr=4,ar=8,ur=16,or=1,ir=2,vn="[",pn="[!",hn="]",St={},fr=Symbol();let R=!1;function _r(t){R=t}let w;function M(t){if(t===null)throw It(),St;return w=t}function cr(){return M(S(w))}function vr(t){if(R){if(S(w)!==null)throw It(),St;w=t}}function pr(t=1){if(R){for(var n=t,r=w;n--;)r=S(r);w=r}}function hr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===hn){if(t===0)return n;t-=1}else(r===vn||r===pn)&&(t+=1)}var e=S(n);n.remove(),n=e}}var dt,dn,Dt,Ot;function dr(){if(dt===void 0){dt=window,dn=document;var t=Element.prototype,n=Node.prototype;Dt=pt(n,"firstChild").get,Ot=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Dt.call(t)}function S(t){return Ot.call(t)}function Er(t,n){if(!R)return et(t);var r=et(w);if(r===null)r=w.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),M(e),e}return M(r),r}function yr(t,n){if(!R){var r=et(t);return r instanceof Comment&&r.data===""?S(r):r}return w}function wr(t,n=1,r=!1){let e=R?w:t;for(var s;n--;)s=e,e=S(e);if(!R)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=rt();return e===null?s==null||s.after(a):e.before(a),M(a),a}return M(e),e}function Tr(t){t.textContent=""}function En(t){var n=y|k;u===null?n|=I:u.f|=gt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:i,deps:null,equals:At,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function mr(t){const n=En(t);return n.equals=kt,n}function Ct(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?it(e):P(e)}}}function yn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Nt(t){var n,r=u;J(yn(t));try{Ct(t),n=Kt(t)}finally{J(r)}return n}function bt(t){var n=Nt(t),r=(D||t.f&I)&&t.deps!==null?b:h;T(t,r),t.equals(n)||(t.v=n,t.version=$t())}function it(t){Ct(t),j(t,0),T(t,q),t.v=t.children=t.deps=t.ctx=t.reactions=null}function qt(t){u===null&&o===null&&ln(),o!==null&&o.f&I&&sn(),_t&&en()}function wn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&W)!==0,l=u,a={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var f=O;try{Et(!0),U(a),a.f|=tn}catch(_){throw P(a),_}finally{Et(f)}}else n!==null&&tt(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&gt)===0;if(!p&&!s&&e&&(l!==null&&wn(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function gr(t){const n=F(B,null,!1);return T(n,h),n.teardown=t,n}function Ar(t){qt();var n=u!==null&&(u.f&g)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Ft(t);return e}}function kr(t){return qt(),ft(t)}function xr(t){const n=F(W,t,!0);return()=>{P(n)}}function Ft(t){return F(Tt,t,!1)}function Rr(t,n,r,e){var s=i,l={effect:null,ran:!1};s.l.r1.push(l),l.effect=ft(()=>{t(),!l.ran&&(l.ran=!0,_n(s.l.r2,!0),qn(n))})}function Ir(){var t=i;ft(()=>{if(bn(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&h&&T(r,b),L(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function ft(t){return F(B,t,!0)}function Sr(t){return Tn(t)}function Tn(t,n=0){return F(B|ut|n,t,!0)}function Dr(t,n=!0){return F(B|g,t,!0,n)}function Pt(t){var n=t.teardown;if(n!==null){const r=_t,e=o;yt(!0),z(null);try{n.call(null)}finally{yt(r),z(e)}}}function Lt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)it(n[r])}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;P(r,n),r=e}}function mn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&g||P(n),n=r}}function P(t,n=!0){var r=!1;if((n||t.f&nn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:S(e);e.remove(),e=l}r=!0}Mt(t,n&&!r),Lt(t),j(t,0),T(t,q);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Pt(t);var f=t.parent;f!==null&&f.first!==null&&Yt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Yt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Or(t,n){var r=[];Ht(t,r,!0),gn(r,()=>{P(t),n&&n()})}function gn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ht(t,n,r){if(!(t.f&N)){if(t.f^=N,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&mt)!==0||(e.f&g)!==0;Ht(e,n,l?r:!1),e=s}}}function Cr(t){jt(t,!0)}function jt(t,n){if(t.f&N){L(t)&&U(t),t.f^=N;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&mt)!==0||(r.f&g)!==0;jt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const An=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let K=!1,Z=!1,st=[],lt=[];function Bt(){K=!1;const t=st.slice();st=[],wt(t)}function Ut(){Z=!1;const t=lt.slice();lt=[],wt(t)}function Nr(t){K||(K=!0,queueMicrotask(Bt)),st.push(t)}function br(t){Z||(Z=!0,An(Ut)),lt.push(t)}function kn(){K&&Bt(),Z&&Ut()}const Vt=0,xn=1;let V=!1,G=Vt,Y=!1,H=null,O=!1,_t=!1;function Et(t){O=t}function yt(t){_t=t}let x=[],C=0;let o=null;function z(t){o=t}let u=null;function J(t){u=t}let m=null;function Rn(t){m=t}let v=null,E=0,A=null;function In(t){A=t}let Gt=0,D=!1,i=null;function $t(){return++Gt}function ct(){return!X||i!==null&&i.l===null}function L(t){var a,f;var n=t.f;if(n&k)return!0;if(n&b){var r=t.deps,e=(n&I)!==0;if(r!==null){var s;if(n&$){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=$}for(s=0;s<r.length;s++){var l=r[s];if(L(l)&&bt(l),e&&u!==null&&!D&&!((f=l==null?void 0:l.reactions)!=null&&f.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}e||T(t,h)}return!1}function Sn(t,n){for(var r=n;r!==null;){if(r.f&nt)try{r.fn(t);return}catch{r.f^=nt}r=r.parent}throw V=!1,t}function Dn(t){return(t.f&q)===0&&(t.parent===null||(t.parent.f&nt)===0)}function Q(t,n,r,e){if(V){if(r===null&&(V=!1),Dn(n))throw t;return}r!==null&&(V=!0);{Sn(t,n);return}}function Kt(t){var vt;var n=v,r=E,e=A,s=o,l=D,a=m,f=i,p=t.f;v=null,E=0,A=null,o=p&(g|W)?null:t,D=!O&&(p&I)!==0,m=null,i=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(j(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!D)for(c=E;c<_.length;c++)((vt=_[c]).reactions??(vt.reactions=[])).push(t)}else _!==null&&E<_.length&&(j(t,E),_.length=E);return d}finally{v=n,E=r,A=e,o=s,D=l,m=a,i=f}}function On(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(T(n,b),n.f&(I|$)||(n.f^=$),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)On(t,r[e])}function U(t){var n=t.f;if(!(n&q)){T(t,h);var r=u,e=i;u=t;try{n&ut?mn(t):Mt(t),Lt(t),Pt(t);var s=Kt(t);t.teardown=typeof s=="function"?s:null,t.version=Gt}catch(l){Q(l,t,r,e||t.ctx)}finally{u=r}}}function Zt(){if(C>1e3){C=0;try{an()}catch(t){if(H!==null)Q(t,H,null);else throw t}}C++}function zt(t){var n=t.length;if(n!==0){Zt();var r=O;O=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Jt(s,l),Cn(l)}}finally{O=r}}}function Cn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(q|N)))try{L(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Yt(e):e.fn=null))}catch(s){Q(s,e,null,e.ctx)}}}function Nn(){if(Y=!1,C>1001)return;const t=x;x=[],zt(t),Y||(C=0,H=null)}function tt(t){G===Vt&&(Y||(Y=!0,queueMicrotask(Nn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|g)){if(!(r&h))return;n.f^=h}}x.push(n)}function Jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&g)!==0,a=l&&(s&h)!==0,f=r.next;if(!a&&!(s&N))if(s&B){if(l)r.f^=h;else try{L(r)&&U(r)}catch(c){Q(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&Tt&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Jt(p,n)}function Wt(t){var n=G,r=x;try{Zt();const s=[];G=xn,x=s,Y=!1,zt(r);var e=t==null?void 0:t();return kn(),(x.length>0||s.length>0)&&Wt(),C=0,H=null,e}finally{G=n,x=r}}async function qr(){await Promise.resolve(),Wt()}function bn(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&q){var e=Nt(t);return it(t),e}if(o!==null){m!==null&&m.includes(t)&&un();var s=o.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),A!==null&&u!==null&&u.f&h&&!(u.f&g)&&A.includes(t)&&(T(u,k),tt(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,f=l;a!==null;)if(a.f&y){var p=a;f=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(l=t,L(l)&&bt(l)),t.v}function qn(t){const n=o;try{return o=null,t()}finally{o=n}}const Fn=~(k|b|h);function T(t,n){t.f=t.f&Fn|n}function Fr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(i.l={s:null,u:null,r1:[],r2:ot(!1)})}function Pr(t){const n=i;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];J(l.effect),z(l.reaction),Ft(l.fn)}}finally{J(r),z(e)}}i=n.p,n.m=!0}return{}}function Lr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=Qt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Xt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{ar as $,zn as A,_n as B,pt as C,u as D,mt as E,Jn as F,Qt as G,Pn as H,cr as I,pn as J,hr as K,M as L,_r as M,Cr as N,Or as O,Zn as P,Vn as Q,lr as R,ht as S,kt as T,fr as U,g as V,W,J as X,er as Y,X as Z,sr as _,Dr as a,Gn as a0,mr as a1,jn as a2,ur as a3,fn as a4,rt as a5,et as a6,or as a7,ir as a8,z as a9,rr as aA,br as aB,Xt as aC,$n as aD,Rr as aE,Ir as aF,Qn as aG,dn as aH,pr as aI,rn as aJ,o as aa,gr as ab,Nr as ac,Mn as ad,nn as ae,vn as af,S as ag,dr as ah,St as ai,hn as aj,It as ak,Kn as al,Tr as am,Ln as an,xr as ao,Ft as ap,ft as aq,Wt as ar,qr as as,Xn as at,N as au,cn as av,Ht as aw,gn as ax,nr as ay,tr as az,Tn as b,w as c,P as d,Wn as e,yr as f,Pr as g,R as h,Ar as i,i as j,qn as k,bn as l,Un as m,Bn as n,Lr as o,Fr as p,En as q,wt as r,Er as s,Sr as t,kr as u,vr as v,wr as w,Yn as x,Hn as y,ot as z};
