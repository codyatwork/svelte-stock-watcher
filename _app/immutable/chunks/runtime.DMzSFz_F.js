var Ln=Array.isArray,Mn=Array.from,Yn=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,Xt=Object.getOwnPropertyDescriptors,Hn=Object.prototype,jn=Array.prototype,Qt=Object.getPrototypeOf;function Bn(t){return typeof t=="function"}const Un=()=>{};function Vn(t){return t()}function wt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,Tt=4,B=8,ut=16,g=32,W=64,nt=128,D=256,$=512,h=1024,k=2048,q=4096,b=8192,P=16384,tn=32768,mt=65536,Gn=1<<17,nn=1<<19,gt=1<<20,ht=Symbol("$state"),$n=Symbol("legacy props"),Kn=Symbol("");function At(t){return t===this.v}function rn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function kt(t){return!rn(t,this.v)}function en(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function sn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function ln(t){throw new Error("https://svelte.dev/e/effect_orphan")}function an(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Wn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function un(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function on(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Xn(){X=!0}const Qn=1,tr=2,nr=16,rr=1,er=2,sr=4,lr=8,ar=16,ur=1,or=2,fn="[",_n="[!",cn="]",xt={},ir=Symbol();function ot(t,n){var r={f:0,v:t,reactions:null,equals:At,version:0};return r}function fr(t){return Rt(ot(t))}function vn(t,n=!1){var e;const r=ot(t);return n||(r.equals=kt),X&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function _r(t,n=!1){return Rt(vn(t,n))}function Rt(t){return o!==null&&o.f&y&&(m===null?In([t]):m.push(t)),t}function pn(t,n){return o!==null&&ct()&&o.f&(y|ut)&&(m===null||!m.includes(t))&&on(),hn(t,n)}function hn(t,n){return t.equals(n)||(t.v=n,t.version=$t(),It(t,k),ct()&&u!==null&&u.f&h&&!(u.f&g)&&(v!==null&&v.includes(t)?(T(u,k),tt(u)):A===null?Sn([t]):A.push(t))),n}function It(t,n){var r=t.reactions;if(r!==null)for(var e=ct(),s=r.length,l=0;l<s;l++){var a=r[l],f=a.f;f&k||!e&&a===u||(T(a,n),f&(h|D)&&(f&y?It(a,q):tt(a)))}}function St(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let I=!1;function cr(t){I=t}let w;function M(t){if(t===null)throw St(),xt;return w=t}function vr(){return M(O(w))}function pr(t){if(I){if(O(w)!==null)throw St(),xt;w=t}}function hr(t=1){if(I){for(var n=t,r=w;n--;)r=O(r);w=r}}function dr(){for(var t=0,n=w;;){if(n.nodeType===8){var r=n.data;if(r===cn){if(t===0)return n;t-=1}else(r===fn||r===_n)&&(t+=1)}var e=O(n);n.remove(),n=e}}var dt,dn,Dt,Ot;function Er(){if(dt===void 0){dt=window,dn=document;var t=Element.prototype,n=Node.prototype;Dt=pt(n,"firstChild").get,Ot=pt(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function rt(t=""){return document.createTextNode(t)}function et(t){return Dt.call(t)}function O(t){return Ot.call(t)}function yr(t,n){if(!I)return et(t);var r=et(w);if(r===null)r=w.appendChild(rt());else if(n&&r.nodeType!==3){var e=rt();return r==null||r.before(e),M(e),e}return M(r),r}function wr(t,n){if(!I){var r=et(t);return r instanceof Comment&&r.data===""?O(r):r}return w}function Tr(t,n=1,r=!1){let e=I?w:t;for(var s;n--;)s=e,e=O(e);if(!I)return e;var l=e==null?void 0:e.nodeType;if(r&&l!==3){var a=rt();return e===null?s==null||s.after(a):e.before(a),M(a),a}return M(e),e}function mr(t){t.textContent=""}function En(t){var n=y|k;u===null?n|=D:u.f|=gt;var r=o!==null&&o.f&y?o:null;const e={children:null,ctx:i,deps:null,equals:At,f:n,fn:t,reactions:null,v:null,version:0,parent:r??u};return r!==null&&(r.children??(r.children=[])).push(e),e}function gr(t){const n=En(t);return n.equals=kt,n}function Ct(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?it(e):S(e)}}}function yn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Nt(t){var n,r=u;J(yn(t));try{Ct(t),n=Kt(t)}finally{J(r)}return n}function bt(t){var n=Nt(t),r=(R||t.f&D)&&t.deps!==null?q:h;T(t,r),t.equals(n)||(t.v=n,t.version=$t())}function it(t){Ct(t),j(t,0),T(t,P),t.v=t.children=t.deps=t.ctx=t.reactions=null}function qt(t){u===null&&o===null&&ln(),o!==null&&o.f&D&&sn(),_t&&en()}function wn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var s=(t&W)!==0,l=u,a={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|k,first:null,fn:n,last:null,next:null,parent:s?null:l,prev:null,teardown:null,transitions:null,version:0};if(r){var f=C;try{Et(!0),U(a),a.f|=tn}catch(_){throw S(a),_}finally{Et(f)}}else n!==null&&tt(a);var p=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&gt)===0;if(!p&&!s&&e&&(l!==null&&wn(a,l),o!==null&&o.f&y)){var d=o;(d.children??(d.children=[])).push(a)}return a}function Ar(t){const n=F(B,null,!1);return T(n,h),n.teardown=t,n}function kr(t){qt();var n=u!==null&&(u.f&g)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:u,reaction:o})}else{var e=Pt(t);return e}}function xr(t){return qt(),ft(t)}function Rr(t){const n=F(W,t,!0);return(r={})=>new Promise(e=>{r.outro?gn(n,()=>{S(n),e(void 0)}):(S(n),e(void 0))})}function Pt(t){return F(Tt,t,!1)}function Ir(t,n){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ft(()=>{t(),!e.ran&&(e.ran=!0,pn(r.l.r2,!0),Pn(n))})}function Sr(){var t=i;ft(()=>{if(qn(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&h&&T(r,q),L(r)&&U(r),n.ran=!1}t.l.r2.v=!1}})}function ft(t){return F(B,t,!0)}function Dr(t){return Tn(t)}function Tn(t,n=0){return F(B|ut|n,t,!0)}function Or(t,n=!0){return F(B|g,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=_t,e=o;yt(!0),z(null);try{n.call(null)}finally{yt(r),z(e)}}}function Lt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)it(n[r])}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;S(r,n),r=e}}function mn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&g||S(n),n=r}}function S(t,n=!0){var r=!1;if((n||t.f&nn)&&t.nodes_start!==null){for(var e=t.nodes_start,s=t.nodes_end;e!==null;){var l=e===s?null:O(e);e.remove(),e=l}r=!0}Mt(t,n&&!r),Lt(t),j(t,0),T(t,P);var a=t.transitions;if(a!==null)for(const p of a)p.stop();Ft(t);var f=t.parent;f!==null&&f.first!==null&&Yt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Yt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function gn(t,n){var r=[];Ht(t,r,!0),An(r,()=>{S(t),n&&n()})}function An(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var s of t)s.out(e)}else n()}function Ht(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var s=e.next,l=(e.f&mt)!==0||(e.f&g)!==0;Ht(e,n,l?r:!1),e=s}}}function Cr(t){jt(t,!0)}function jt(t,n){if(t.f&b){L(t)&&U(t),t.f^=b;for(var r=t.first;r!==null;){var e=r.next,s=(r.f&mt)!==0||(r.f&g)!==0;jt(r,s?n:!1),r=e}if(t.transitions!==null)for(const l of t.transitions)(l.is_global||n)&&l.in()}}const kn=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let K=!1,Z=!1,st=[],lt=[];function Bt(){K=!1;const t=st.slice();st=[],wt(t)}function Ut(){Z=!1;const t=lt.slice();lt=[],wt(t)}function Nr(t){K||(K=!0,queueMicrotask(Bt)),st.push(t)}function br(t){Z||(Z=!0,kn(Ut)),lt.push(t)}function xn(){K&&Bt(),Z&&Ut()}const Vt=0,Rn=1;let V=!1,G=Vt,Y=!1,H=null,C=!1,_t=!1;function Et(t){C=t}function yt(t){_t=t}let x=[],N=0;let o=null;function z(t){o=t}let u=null;function J(t){u=t}let m=null;function In(t){m=t}let v=null,E=0,A=null;function Sn(t){A=t}let Gt=0,R=!1,i=null;function $t(){return++Gt}function ct(){return!X||i!==null&&i.l===null}function L(t){var a,f;var n=t.f;if(n&k)return!0;if(n&q){var r=t.deps,e=(n&D)!==0;if(r!==null){var s;if(n&$){for(s=0;s<r.length;s++)((a=r[s]).reactions??(a.reactions=[])).push(t);t.f^=$}for(s=0;s<r.length;s++){var l=r[s];if(L(l)&&bt(l),e&&u!==null&&!R&&!((f=l==null?void 0:l.reactions)!=null&&f.includes(t))&&(l.reactions??(l.reactions=[])).push(t),l.version>t.version)return!0}}(!e||u!==null&&!R)&&T(t,h)}return!1}function Dn(t,n){for(var r=n;r!==null;){if(r.f&nt)try{r.fn(t);return}catch{r.f^=nt}r=r.parent}throw V=!1,t}function On(t){return(t.f&P)===0&&(t.parent===null||(t.parent.f&nt)===0)}function Q(t,n,r,e){if(V){if(r===null&&(V=!1),On(n))throw t;return}r!==null&&(V=!0);{Dn(t,n);return}}function Kt(t){var vt;var n=v,r=E,e=A,s=o,l=R,a=m,f=i,p=t.f;v=null,E=0,A=null,o=p&(g|W)?null:t,R=!C&&(p&D)!==0,m=null,i=t.ctx;try{var d=(0,t.fn)(),_=t.deps;if(v!==null){var c;if(j(t,E),_!==null&&E>0)for(_.length=E+v.length,c=0;c<v.length;c++)_[E+c]=v[c];else t.deps=_=v;if(!R)for(c=E;c<_.length;c++)((vt=_[c]).reactions??(vt.reactions=[])).push(t)}else _!==null&&E<_.length&&(j(t,E),_.length=E);return d}finally{v=n,E=r,A=e,o=s,R=l,m=a,i=f}}function Cn(t,n){let r=n.reactions;if(r!==null){var e=r.indexOf(t);if(e!==-1){var s=r.length-1;s===0?r=n.reactions=null:(r[e]=r[s],r.pop())}}r===null&&n.f&y&&(v===null||!v.includes(n))&&(T(n,q),n.f&(D|$)||(n.f^=$),j(n,0))}function j(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Cn(t,r[e])}function U(t){var n=t.f;if(!(n&P)){T(t,h);var r=u,e=i;u=t;try{n&ut?mn(t):Mt(t),Lt(t),Ft(t);var s=Kt(t);t.teardown=typeof s=="function"?s:null,t.version=Gt}catch(l){Q(l,t,r,e||t.ctx)}finally{u=r}}}function Zt(){if(N>1e3){N=0;try{an()}catch(t){if(H!==null)Q(t,H,null);else throw t}}N++}function zt(t){var n=t.length;if(n!==0){Zt();var r=C;C=!0;try{for(var e=0;e<n;e++){var s=t[e];s.f&h||(s.f^=h);var l=[];Jt(s,l),Nn(l)}}finally{C=r}}}function Nn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(P|b)))try{L(e)&&(U(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Yt(e):e.fn=null))}catch(s){Q(s,e,null,e.ctx)}}}function bn(){if(Y=!1,N>1001)return;const t=x;x=[],zt(t),Y||(N=0,H=null)}function tt(t){G===Vt&&(Y||(Y=!0,queueMicrotask(bn))),H=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(W|g)){if(!(r&h))return;n.f^=h}}x.push(n)}function Jt(t,n){var r=t.first,e=[];t:for(;r!==null;){var s=r.f,l=(s&g)!==0,a=l&&(s&h)!==0,f=r.next;if(!a&&!(s&b))if(s&B){if(l)r.f^=h;else try{L(r)&&U(r)}catch(c){Q(c,r,null,r.ctx)}var p=r.first;if(p!==null){r=p;continue}}else s&Tt&&e.push(r);if(f===null){let c=r.parent;for(;c!==null;){if(t===c)break t;var d=c.next;if(d!==null){r=d;continue t}c=c.parent}}r=f}for(var _=0;_<e.length;_++)p=e[_],n.push(p),Jt(p,n)}function Wt(t){var n=G,r=x;try{Zt();const s=[];G=Rn,x=s,Y=!1,zt(r);var e=t==null?void 0:t();return xn(),(x.length>0||s.length>0)&&Wt(),N=0,H=null,e}finally{G=n,x=r}}async function qr(){await Promise.resolve(),Wt()}function qn(t){var _;var n=t.f,r=(n&y)!==0;if(r&&n&P){var e=Nt(t);return it(t),e}if(o!==null){m!==null&&m.includes(t)&&un();var s=o.deps;v===null&&s!==null&&s[E]===t?E++:v===null?v=[t]:v.push(t),A!==null&&u!==null&&u.f&h&&!(u.f&g)&&A.includes(t)&&(T(u,k),tt(u))}else if(r&&t.deps===null)for(var l=t,a=l.parent,f=l;a!==null;)if(a.f&y){var p=a;f=p,a=p.parent}else{var d=a;(_=d.deriveds)!=null&&_.includes(f)||(d.deriveds??(d.deriveds=[])).push(f);break}return r&&(l=t,L(l)&&bt(l)),t.v}function Pn(t){const n=o;try{return o=null,t()}finally{o=n}}const Fn=~(k|q|h);function T(t,n){t.f=t.f&Fn|n}function Pr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(i.l={s:null,u:null,r1:[],r2:ot(!1)})}function Fr(t){const n=i;if(n!==null){const a=n.e;if(a!==null){var r=u,e=o;n.e=null;try{for(var s=0;s<a.length;s++){var l=a[s];J(l.effect),z(l.reaction),Pt(l.fn)}}finally{J(r),z(e)}}i=n.p,n.m=!0}return{}}function Lr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(ht in t)at(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&ht in r&&at(r)}}}function at(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{at(t[e],n)}catch{}const r=Qt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Xt(r);for(let s in e){const l=e[s].get;if(l)try{l.call(t)}catch{}}}}}export{lr as $,Jn as A,pn as B,pt as C,u as D,mt as E,Wn as F,Qt as G,Ln as H,vr as I,_n as J,dr as K,M as L,cr as M,Cr as N,gn as O,zn as P,Gn as Q,sr as R,ht as S,kt as T,ir as U,g as V,W,J as X,rr as Y,X as Z,er as _,Or as a,$n as a0,gr as a1,Bn as a2,ar as a3,vn as a4,rt as a5,et as a6,ur as a7,or as a8,z as a9,nr as aA,br as aB,Xt as aC,Kn as aD,Ir as aE,Sr as aF,_r as aG,dn as aH,hr as aI,rn as aJ,o as aa,Ar as ab,Nr as ac,Yn as ad,nn as ae,fn as af,O as ag,Er as ah,xt as ai,cn as aj,St as ak,Zn as al,mr as am,Mn as an,Rr as ao,Pt as ap,ft as aq,Wt as ar,qr as as,fr as at,b as au,hn as av,Ht as aw,An as ax,tr as ay,Qn as az,Tn as b,w as c,S as d,Xn as e,wr as f,Fr as g,I as h,kr as i,i as j,Pn as k,qn as l,Vn as m,Un as n,Lr as o,Pr as p,En as q,wt as r,yr as s,Dr as t,xr as u,pr as v,Tr as w,Hn as x,jn as y,ot as z};
