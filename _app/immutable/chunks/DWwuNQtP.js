import{S as D,y as V,z as J,A as w,B as Q,C as y,D as S,U as o,m as P,F,G as W,H as X,I as k,b as ee,h as C,J as re,E as te,K as ne,L as ae,M as ie,N as j,O as q,a as M,P as U,c as fe,Q as se,R as ue,T as le,V as _e,j as K,W as de,X as ve,Y as G,Z as ce,l as oe,_ as he,$ as be,a0 as z,s as H,a1 as ge,a2 as ye,a3 as N,a4 as Pe}from"./BBE7JU09.js";function I(r,i=null,u){if(typeof r!="object"||r===null||D in r)return r;const f=X(r);if(f!==V&&f!==J)return r;var t=new Map,d=k(r),h=w(0);d&&t.set("length",w(r.length));var g;return new Proxy(r,{defineProperty(l,e,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&Q();var s=t.get(e);return s===void 0?(s=w(n.value),t.set(e,s)):y(s,I(n.value,g)),!0},deleteProperty(l,e){var n=t.get(e);if(n===void 0)e in l&&t.set(e,w(o));else{if(d&&typeof e=="string"){var s=t.get("length"),a=Number(e);Number.isInteger(a)&&a<s.v&&y(s,a)}y(n,o),Z(h)}return!0},get(l,e,n){var c;if(e===D)return r;var s=t.get(e),a=e in l;if(s===void 0&&(!a||(c=S(l,e))!=null&&c.writable)&&(s=w(I(a?l[e]:o,g)),t.set(e,s)),s!==void 0){var _=P(s);return _===o?void 0:_}return Reflect.get(l,e,n)},getOwnPropertyDescriptor(l,e){var n=Reflect.getOwnPropertyDescriptor(l,e);if(n&&"value"in n){var s=t.get(e);s&&(n.value=P(s))}else if(n===void 0){var a=t.get(e),_=a==null?void 0:a.v;if(a!==void 0&&_!==o)return{enumerable:!0,configurable:!0,value:_,writable:!0}}return n},has(l,e){var _;if(e===D)return!0;var n=t.get(e),s=n!==void 0&&n.v!==o||Reflect.has(l,e);if(n!==void 0||F!==null&&(!s||(_=S(l,e))!=null&&_.writable)){n===void 0&&(n=w(s?I(l[e],g):o),t.set(e,n));var a=P(n);if(a===o)return!1}return s},set(l,e,n,s){var R;var a=t.get(e),_=e in l;if(d&&e==="length")for(var c=n;c<a.v;c+=1){var m=t.get(c+"");m!==void 0?y(m,o):c in l&&(m=w(o),t.set(c+"",m))}a===void 0?(!_||(R=S(l,e))!=null&&R.writable)&&(a=w(void 0),y(a,I(n,g)),t.set(e,a)):(_=a.v!==o,y(a,I(n,g)));var b=Reflect.getOwnPropertyDescriptor(l,e);if(b!=null&&b.set&&b.set.call(s,n),!_){if(d&&typeof e=="string"){var O=t.get("length"),T=Number(e);Number.isInteger(T)&&T>=O.v&&y(O,T+1)}Z(h)}return!0},ownKeys(l){P(h);var e=Reflect.ownKeys(l).filter(a=>{var _=t.get(a);return _===void 0||_.v!==o});for(var[n,s]of t)s.v!==o&&!(n in l)&&e.push(n);return e},setPrototypeOf(){W()}})}function Z(r,i=1){y(r,r.v+i)}function Ee(r,i,u=!1){C&&re();var f=r,t=null,d=null,h=o,g=u?te:0,l=!1;const e=(s,a=!0)=>{l=!0,n(a,s)},n=(s,a)=>{if(h===(h=s))return;let _=!1;if(C){const c=f.data===ne;!!h===c&&(f=ae(),ie(f),j(!1),_=!0)}h?(t?q(t):a&&(t=M(()=>a(f))),d&&U(d,()=>{d=null})):(d?q(d):a&&(d=M(()=>a(f))),t&&U(t,()=>{t=null})),_&&j(!0)};ee(()=>{l=!1,i(e),l||n(null,null)},g),C&&(f=fe)}let p=!1;function we(r){var i=p;try{return p=!1,[r(),p]}finally{p=i}}const me={get(r,i){let u=r.props.length;for(;u--;){let f=r.props[u];if(N(f)&&(f=f()),typeof f=="object"&&f!==null&&i in f)return f[i]}},set(r,i,u){let f=r.props.length;for(;f--;){let t=r.props[f];N(t)&&(t=t());const d=S(t,i);if(d&&d.set)return d.set(u),!0}return!1},getOwnPropertyDescriptor(r,i){let u=r.props.length;for(;u--;){let f=r.props[u];if(N(f)&&(f=f()),typeof f=="object"&&f!==null&&i in f){const t=S(f,i);return t&&!t.configurable&&(t.configurable=!0),t}}},has(r,i){if(i===D||i===z)return!1;for(let u of r.props)if(N(u)&&(u=u()),u!=null&&i in u)return!0;return!1},ownKeys(r){const i=[];for(let u of r.props){N(u)&&(u=u());for(const f in u)i.includes(f)||i.push(f)}return i}};function Ie(...r){return new Proxy({props:r},me)}function $(r){for(var i=F,u=F;i!==null&&!(i.f&(de|ve));)i=i.parent;try{return G(i),r()}finally{G(u)}}function Se(r,i,u,f){var Y;var t=(u&ce)!==0,d=!oe||(u&he)!==0,h=(u&be)!==0,g=(u&Pe)!==0,l=!1,e;h?[e,l]=we(()=>r[i]):e=r[i];var n=D in r||z in r,s=h&&(((Y=S(r,i))==null?void 0:Y.set)??(n&&i in r&&(v=>r[i]=v)))||void 0,a=f,_=!0,c=!1,m=()=>(c=!0,_&&(_=!1,g?a=K(f):a=f),a);e===void 0&&f!==void 0&&(s&&d&&se(),e=m(),s&&s(e));var b;if(d)b=()=>{var v=r[i];return v===void 0?m():(_=!0,c=!1,v)};else{var O=$(()=>(t?H:ge)(()=>r[i]));O.f|=ue,b=()=>{var v=P(O);return v!==void 0&&(a=void 0),v===void 0?a:v}}if(!(u&le))return b;if(s){var T=r.$$legacy;return function(v,E){return arguments.length>0?((!d||!E||T||l)&&s(E?b():v),v):b()}}var R=!1,B=!1,L=ye(e),A=$(()=>H(()=>{var v=b(),E=P(L);return R?(R=!1,B=!0,E):(B=!1,L.v=v)}));return t||(A.equals=_e),function(v,E){if(arguments.length>0){const x=E?P(A):d&&h?I(v):v;return A.equals(x)||(R=!0,y(L,x),c&&a!==void 0&&(a=x),K(()=>P(A))),v}return P(A)}}export{I as a,Ee as i,Se as p,Ie as s};
