var Bn=Array.isArray,ln=Array.prototype.indexOf,Un=Array.from,Vn=Object.defineProperty,Et=Object.getOwnPropertyDescriptor,sn=Object.getOwnPropertyDescriptors,Gn=Object.prototype,$n=Array.prototype,an=Object.getPrototypeOf;function Kn(t){return typeof t=="function"}const Zn=()=>{};function zn(t){return t()}function gt(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,At=4,V=8,_t=16,x=32,G=64,Z=128,N=256,z=512,p=1024,R=2048,D=4096,F=8192,L=16384,un=32768,kt=65536,Jn=1<<17,on=1<<19,xt=1<<20,yt=Symbol("$state"),Wn=Symbol("legacy props"),Xn=Symbol("");function Rt(t){return t===this.v}function fn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Dt(t){return!fn(t,this.v)}function _n(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function cn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function vn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function pn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Qn(){throw new Error("https://svelte.dev/e/hydration_failed")}function tr(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function nr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function rr(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function hn(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function dn(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let nt=!1;function er(){nt=!0}const lr=1,sr=2,ar=16,ur=1,or=2,ir=4,fr=8,_r=16,cr=1,vr=2,En="[",yn="[!",wn="]",It={},pr=Symbol();function ct(t,n){var r={f:0,v:t,reactions:null,equals:Rt,rv:0,wv:0};return r}function hr(t){return St(ct(t))}function mn(t,n=!1){var e;const r=ct(t);return n||(r.equals=Dt),nt&&i!==null&&i.l!==null&&((e=i.l).s??(e.s=[])).push(r),r}function dr(t,n=!1){return St(mn(t,n))}function St(t){return u!==null&&!k&&u.f&y&&(g===null?bn([t]):g.push(t)),t}function Tn(t,n){return u!==null&&!k&&rt()&&u.f&(y|_t)&&(g===null||!g.includes(t))&&dn(),gn(t,n)}function gn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Jt(),Ot(t,R),rt()&&f!==null&&f.f&p&&!(f.f&(x|G))&&(A===null?qn([t]):A.push(t))),n}function Ot(t,n){var r=t.reactions;if(r!==null)for(var e=rt(),l=r.length,s=0;s<l;s++){var a=r[s],o=a.f;o&R||!e&&a===f||(w(a,n),o&(p|N)&&(o&y?Ot(a,D):st(a)))}}function Ct(t){console.warn("https://svelte.dev/e/hydration_mismatch")}let O=!1;function Er(t){O=t}let m;function H(t){if(t===null)throw Ct(),It;return m=t}function yr(){return H(b(m))}function wr(t){if(O){if(b(m)!==null)throw Ct(),It;m=t}}function mr(t=1){if(O){for(var n=t,r=m;n--;)r=b(r);m=r}}function Tr(){for(var t=0,n=m;;){if(n.nodeType===8){var r=n.data;if(r===wn){if(t===0)return n;t-=1}else(r===En||r===yn)&&(t+=1)}var e=b(n);n.remove(),n=e}}var wt,An,Nt,bt;function gr(){if(wt===void 0){wt=window,An=document;var t=Element.prototype,n=Node.prototype;Nt=Et(n,"firstChild").get,bt=Et(n,"nextSibling").get,t.__click=void 0,t.__className="",t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function at(t=""){return document.createTextNode(t)}function ut(t){return Nt.call(t)}function b(t){return bt.call(t)}function Ar(t,n){if(!O)return ut(t);var r=ut(m);if(r===null)r=m.appendChild(at());else if(n&&r.nodeType!==3){var e=at();return r==null||r.before(e),H(e),e}return H(r),r}function kr(t,n){if(!O){var r=ut(t);return r instanceof Comment&&r.data===""?b(r):r}return m}function xr(t,n=1,r=!1){let e=O?m:t;for(var l;n--;)l=e,e=b(e);if(!O)return e;var s=e==null?void 0:e.nodeType;if(r&&s!==3){var a=at();return e===null?l==null||l.after(a):e.before(a),H(a),a}return H(e),e}function Rr(t){t.textContent=""}function qt(t){var n=y|R;f===null?n|=N:f.f|=xt;var r=u!==null&&u.f&y?u:null;const e={children:null,ctx:i,deps:null,equals:Rt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f};return r!==null&&(r.children??(r.children=[])).push(e),e}function Dr(t){const n=qt(t);return n.equals=Dt,n}function Pt(t){var n=t.children;if(n!==null){t.children=null;for(var r=0;r<n.length;r+=1){var e=n[r];e.f&y?vt(e):C(e)}}}function kn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function Ft(t){var n,r=f;Q(kn(t));try{Pt(t),n=Xt(t)}finally{Q(r)}return n}function Lt(t){var n=Ft(t),r=(S||t.f&N)&&t.deps!==null?D:p;w(t,r),t.equals(n)||(t.v=n,t.wv=Jt())}function vt(t){Pt(t),U(t,0),w(t,L),t.v=t.children=t.deps=t.ctx=t.reactions=null}function Mt(t){f===null&&u===null&&vn(),u!==null&&u.f&N&&cn(),ht&&_n()}function xn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function M(t,n,r,e=!0){var l=(t&G)!==0,s=f,a={ctx:i,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:t|R,first:null,fn:n,last:null,next:null,parent:l?null:s,prev:null,teardown:null,transitions:null,wv:0};if(r){var o=q;try{mt(!0),lt(a),a.f|=un}catch(T){throw C(a),T}finally{mt(o)}}else n!==null&&st(a);var _=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(xt|Z))===0;if(!_&&!l&&e&&(s!==null&&xn(a,s),u!==null&&u.f&y)){var c=u;(c.children??(c.children=[])).push(a)}return a}function Ir(t){const n=M(V,null,!1);return w(n,p),n.teardown=t,n}function Sr(t){Mt();var n=f!==null&&(f.f&x)!==0&&i!==null&&!i.m;if(n){var r=i;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Yt(t);return e}}function Or(t){return Mt(),pt(t)}function Cr(t){const n=M(G,t,!0);return(r={})=>new Promise(e=>{r.outro?In(n,()=>{C(n),e(void 0)}):(C(n),e(void 0))})}function Yt(t){return M(At,t,!1)}function Nr(t,n){var r=i,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=pt(()=>{t(),!e.ran&&(e.ran=!0,Tn(r.l.r2,!0),Hn(n))})}function br(){var t=i;pt(()=>{if(en(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&p&&w(r,D),Y(r)&&lt(r),n.ran=!1}t.l.r2.v=!1}})}function pt(t){return M(V,t,!0)}function qr(t,n=[],r=qt){const e=n.map(r);return Rn(()=>t(...e.map(en)))}function Rn(t,n=0){return M(V|_t|n,t,!0)}function Pr(t,n=!0){return M(V|x,t,!0,n)}function Ht(t){var n=t.teardown;if(n!==null){const r=ht,e=u;Tt(!0),X(null);try{n.call(null)}finally{Tt(r),X(e)}}}function jt(t){var n=t.deriveds;if(n!==null){t.deriveds=null;for(var r=0;r<n.length;r+=1)vt(n[r])}}function Bt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;C(r,n),r=e}}function Dn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&x||C(n),n=r}}function C(t,n=!0){var r=!1;if((n||t.f&on)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var s=e===l?null:b(e);e.remove(),e=s}r=!0}Bt(t,n&&!r),jt(t),U(t,0),w(t,L);var a=t.transitions;if(a!==null)for(const _ of a)_.stop();Ht(t);var o=t.parent;o!==null&&o.first!==null&&Ut(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Ut(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function In(t,n){var r=[];Vt(t,r,!0),Sn(r,()=>{C(t),n&&n()})}function Sn(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function Vt(t,n,r){if(!(t.f&F)){if(t.f^=F,t.transitions!==null)for(const a of t.transitions)(a.is_global||r)&&n.push(a);for(var e=t.first;e!==null;){var l=e.next,s=(e.f&kt)!==0||(e.f&x)!==0;Vt(e,n,s?r:!1),e=l}}}function Fr(t){Gt(t,!0)}function Gt(t,n){if(t.f&F){t.f^=F,t.f&p||(t.f^=p),Y(t)&&(w(t,R),st(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&kt)!==0||(r.f&x)!==0;Gt(r,l?n:!1),r=e}if(t.transitions!==null)for(const s of t.transitions)(s.is_global||n)&&s.in()}}const On=typeof requestIdleCallback>"u"?t=>setTimeout(t,1):requestIdleCallback;let J=!1,W=!1,ot=[],it=[];function $t(){J=!1;const t=ot.slice();ot=[],gt(t)}function Kt(){W=!1;const t=it.slice();it=[],gt(t)}function Lr(t){J||(J=!0,queueMicrotask($t)),ot.push(t)}function Mr(t){W||(W=!0,On(Kt)),it.push(t)}function Cn(){J&&$t(),W&&Kt()}const Zt=0,Nn=1;let $=!1,K=Zt,j=!1,B=null,q=!1,ht=!1;function mt(t){q=t}function Tt(t){ht=t}let I=[],P=0;let u=null,k=!1;function X(t){u=t}let f=null;function Q(t){f=t}let g=null;function bn(t){g=t}let h=null,E=0,A=null;function qn(t){A=t}let zt=1,tt=0,S=!1,i=null;function Jt(){return++zt}function rt(){return!nt||i!==null&&i.l===null}function Y(t){var c;var n=t.f;if(n&R)return!0;if(n&D){var r=t.deps,e=(n&N)!==0;if(r!==null){var l,s,a=(n&z)!==0,o=e&&f!==null&&!S,_=r.length;if(a||o){for(l=0;l<_;l++)s=r[l],(a||!((c=s==null?void 0:s.reactions)!=null&&c.includes(t)))&&(s.reactions??(s.reactions=[])).push(t);a&&(t.f^=z)}for(l=0;l<_;l++)if(s=r[l],Y(s)&&Lt(s),s.wv>t.wv)return!0}(!e||f!==null&&!S)&&w(t,p)}return!1}function Pn(t,n){for(var r=n;r!==null;){if(r.f&Z)try{r.fn(t);return}catch{r.f^=Z}r=r.parent}throw $=!1,t}function Fn(t){return(t.f&L)===0&&(t.parent===null||(t.parent.f&Z)===0)}function et(t,n,r,e){if($){if(r===null&&($=!1),Fn(n))throw t;return}r!==null&&($=!0);{Pn(t,n);return}}function Wt(t,n,r=0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var s=e[l];s.f&y?Wt(s,n,r+1):n===s&&(r===0?w(s,R):s.f&p&&w(s,D),st(s))}}function Xt(t){var dt;var n=h,r=E,e=A,l=u,s=S,a=g,o=i,_=k,c=t.f;h=null,E=0,A=null,u=c&(x|G)?null:t,S=!q&&(c&N)!==0,g=null,i=t.ctx,k=!1,tt++;try{var T=(0,t.fn)(),v=t.deps;if(h!==null){var d;if(U(t,E),v!==null&&E>0)for(v.length=E+h.length,d=0;d<h.length;d++)v[E+d]=h[d];else t.deps=v=h;if(!S)for(d=E;d<v.length;d++)((dt=v[d]).reactions??(dt.reactions=[])).push(t)}else v!==null&&E<v.length&&(U(t,E),v.length=E);if(rt()&&A!==null&&!(t.f&(y|D|R)))for(d=0;d<A.length;d++)Wt(A[d],t);return l!==null&&tt++,T}finally{h=n,E=r,A=e,u=l,S=s,g=a,i=o,k=_}}function Ln(t,n){let r=n.reactions;if(r!==null){var e=ln.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(h===null||!h.includes(n))&&(w(n,D),n.f&(N|z)||(n.f^=z),U(n,0))}function U(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)Ln(t,r[e])}function lt(t){var n=t.f;if(!(n&L)){w(t,p);var r=f,e=i;f=t;try{n&_t?Dn(t):Bt(t),jt(t),Ht(t);var l=Xt(t);t.teardown=typeof l=="function"?l:null,t.wv=zt;var s=t.deps,a}catch(o){et(o,t,r,e||t.ctx)}finally{f=r}}}function Qt(){if(P>1e3){P=0;try{pn()}catch(t){if(B!==null)et(t,B,null);else throw t}}P++}function tn(t){var n=t.length;if(n!==0){Qt();var r=q;q=!0;try{for(var e=0;e<n;e++){var l=t[e];l.f&p||(l.f^=p);var s=[];nn(l,s),Mn(s)}}finally{q=r}}}function Mn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(L|F)))try{Y(e)&&(lt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Ut(e):e.fn=null))}catch(l){et(l,e,null,e.ctx)}}}function Yn(){if(j=!1,P>1001)return;const t=I;I=[],tn(t),j||(P=0,B=null)}function st(t){K===Zt&&(j||(j=!0,queueMicrotask(Yn))),B=t;for(var n=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(G|x)){if(!(r&p))return;n.f^=p}}I.push(n)}function nn(t,n){var r=t.first,e=[];t:for(;r!==null;){var l=r.f,s=(l&x)!==0,a=s&&(l&p)!==0,o=r.next;if(!a&&!(l&F))if(l&V){if(s)r.f^=p;else try{Y(r)&&lt(r)}catch(v){et(v,r,null,r.ctx)}var _=r.first;if(_!==null){r=_;continue}}else l&At&&e.push(r);if(o===null){let v=r.parent;for(;v!==null;){if(t===v)break t;var c=v.next;if(c!==null){r=c;continue t}v=v.parent}}r=o}for(var T=0;T<e.length;T++)_=e[T],n.push(_),nn(_,n)}function rn(t){var n=K,r=I;try{Qt();const l=[];K=Nn,I=l,j=!1,tn(r);var e=t==null?void 0:t();return Cn(),(I.length>0||l.length>0)&&rn(),P=0,B=null,e}finally{K=n,I=r}}async function Yr(){await Promise.resolve(),rn()}function en(t){var T;var n=t.f,r=(n&y)!==0;if(r&&n&L){var e=Ft(t);return vt(t),e}if(u!==null&&!k){g!==null&&g.includes(t)&&hn();var l=u.deps;t.rv<tt&&(t.rv=tt,h===null&&l!==null&&l[E]===t?E++:h===null?h=[t]:h.push(t))}else if(r&&t.deps===null)for(var s=t,a=s.parent,o=s;a!==null;)if(a.f&y){var _=a;o=_,a=_.parent}else{var c=a;(T=c.deriveds)!=null&&T.includes(o)||(c.deriveds??(c.deriveds=[])).push(o);break}return r&&(s=t,Y(s)&&Lt(s)),t.v}function Hn(t){var n=k;try{return k=!0,t()}finally{k=n}}const jn=~(R|D|p);function w(t,n){t.f=t.f&jn|n}function Hr(t,n=!1,r){i={p:i,c:null,e:null,m:!1,s:t,x:null,l:null},nt&&!n&&(i.l={s:null,u:null,r1:[],r2:ct(!1)})}function jr(t){const n=i;if(n!==null){const a=n.e;if(a!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<a.length;l++){var s=a[l];Q(s.effect),X(s.reaction),Yt(s.fn)}}finally{Q(r),X(e)}}i=n.p,n.m=!0}return{}}function Br(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(yt in t)ft(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&yt in r&&ft(r)}}}function ft(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{ft(t[e],n)}catch{}const r=an(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=sn(r);for(let l in e){const s=e[l].get;if(s)try{s.call(t)}catch{}}}}}export{fr as $,ct as A,nr as B,Tn as C,Et as D,kt as E,f as F,rr as G,an as H,Bn as I,yr as J,yn as K,Tr as L,H as M,Er as N,Fr as O,In as P,tr as Q,Jn as R,yt as S,ir as T,pr as U,Dt as V,x as W,G as X,Q as Y,ur as Z,or as _,Pr as a,Wn as a0,Dr as a1,mn as a2,Kn as a3,_r as a4,at as a5,ut as a6,cr as a7,vr as a8,X as a9,ar as aA,Mr as aB,Xn as aC,sn as aD,Nr as aE,br as aF,dr as aG,An as aH,mr as aI,fn as aJ,u as aa,Ir as ab,Lr as ac,Vn as ad,on as ae,En as af,b as ag,gr as ah,It as ai,wn as aj,Ct as ak,Qn as al,Rr as am,Un as an,Cr as ao,Yt as ap,pt as aq,rn as ar,Yr as as,hr as at,F as au,gn as av,Vt as aw,Sn as ax,sr as ay,lr as az,Rn as b,m as c,C as d,er as e,kr as f,jr as g,O as h,i,Hn as j,Or as k,nt as l,en as m,Zn as n,zn as o,Hr as p,Br as q,gt as r,qt as s,qr as t,Sr as u,Ar as v,wr as w,xr as x,Gn as y,$n as z};
