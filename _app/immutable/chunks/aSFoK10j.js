import{a7 as m,a8 as T,a9 as C,F as D,aa as W,ab as Y,ac as j,I as B,a2 as H,b as $,ad as J,h as w,ae as M,af as R,N as g,M as N,c as h,a3 as V,ag as k,ah as L,J as z,ai as G,aj as K,ak as Q,al as U,am as X,an as Z,a as x,q as ee,s as ae,g as te}from"./BDq6qOn0.js";import{b as re}from"./khncdOz5.js";const ne=["touchstart","touchmove"];function ie(e){return ne.includes(e)}function se(e){var a=C,r=D;m(null),T(null);try{return e()}finally{m(a),T(r)}}const oe=new Set,I=new Set;function ue(e,a,r,i={}){function s(t){if(i.capture||b.call(a,t),!t.cancelBubble)return se(()=>r==null?void 0:r.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Y(()=>{a.addEventListener(e,s,i)}):a.addEventListener(e,s,i),s}function _e(e,a,r,i,s){var t={capture:i,passive:s},f=ue(e,a,r,t);(a===document.body||a===window||a===document)&&W(()=>{a.removeEventListener(e,f,t)})}function b(e){var O;var a=this,r=a.ownerDocument,i=e.type,s=((O=e.composedPath)==null?void 0:O.call(e))||[],t=s[0]||e.target,f=0,v=e.__root;if(v){var c=s.indexOf(v);if(c!==-1&&(a===document||a===window)){e.__root=a;return}var y=s.indexOf(a);if(y===-1)return;c<=y&&(f=c)}if(t=s[f]||e.target,t!==a){j(e,"currentTarget",{configurable:!0,get(){return t||r}});var S=C,l=D;m(null),T(null);try{for(var n,o=[];t!==null;){var d=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+i];if(_!==void 0&&(!t.disabled||e.target===t))if(B(_)){var[F,...P]=_;F.apply(t,[e,...P])}else _.call(t,e)}catch(E){n?o.push(E):n=E}if(e.cancelBubble||d===a||d===null)break;t=d}if(n){for(let E of o)queueMicrotask(()=>{throw E});throw n}}finally{e.__root=a,delete e.currentTarget,m(S),T(l)}}}let u;function fe(){u=void 0}function he(e){let a=null,r=w;var i;if(w){for(a=h,u===void 0&&(u=V(document.head));u!==null&&(u.nodeType!==8||u.data!==M);)u=R(u);u===null?g(!1):u=N(R(u))}w||(i=document.head.appendChild(H()));try{$(()=>e(i),J)}finally{r&&(g(!0),u=h,N(a))}}function ve(e,a){var r=a==null?"":typeof a=="object"?a+"":a;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r+"")}function le(e,a){return q(e,a)}function ye(e,a){k(),a.intro=a.intro??!1;const r=a.target,i=w,s=h;try{for(var t=V(r);t&&(t.nodeType!==8||t.data!==M);)t=R(t);if(!t)throw L;g(!0),N(t),z();const f=q(e,{...a,anchor:t});if(h===null||h.nodeType!==8||h.data!==G)throw K(),L;return g(!1),f}catch(f){if(f===L)return a.recover===!1&&Q(),k(),U(r),g(!1),le(e,a);throw f}finally{g(i),N(s),fe()}}const p=new Map;function q(e,{target:a,anchor:r,props:i={},events:s,context:t,intro:f=!0}){k();var v=new Set,c=l=>{for(var n=0;n<l.length;n++){var o=l[n];if(!v.has(o)){v.add(o);var d=ie(o);a.addEventListener(o,b,{passive:d});var _=p.get(o);_===void 0?(document.addEventListener(o,b,{passive:d}),p.set(o,1)):p.set(o,_+1)}}};c(X(oe)),I.add(c);var y=void 0,S=Z(()=>{var l=r??a.appendChild(H());return x(()=>{if(t){ee({});var n=te;n.c=t}s&&(i.$$events=s),w&&re(l,null),y=e(l,i)||{},w&&(D.nodes_end=h),t&&ae()}),()=>{var d;for(var n of v){a.removeEventListener(n,b);var o=p.get(n);--o===0?(document.removeEventListener(n,b),p.delete(n)):p.set(n,o)}I.delete(c),l!==r&&((d=l.parentNode)==null||d.removeChild(l))}});return A.set(y,S),y}let A=new WeakMap;function pe(e,a){const r=A.get(e);return r?(A.delete(e),r(a)):Promise.resolve()}export{he as a,_e as e,ye as h,le as m,ve as s,pe as u};
