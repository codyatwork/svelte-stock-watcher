import{a9 as m,Y as T,aa as C,F as D,ab as W,ac as j,ad as q,I as B,a5 as H,b as $,ae as J,h as w,af as M,ag as R,N as g,M as N,c as h,a6 as V,ah as k,ai as L,J as z,aj as G,ak as K,al as Q,am as U,an as X,ao as Z,a as x,p as ee,g as ae,i as re}from"./runtime.RGVKy-so.js";import{b as te}from"./disclose-version.DLSybsdX.js";const ne=["touchstart","touchmove"];function ie(e){return ne.includes(e)}function se(e){var a=C,t=D;m(null),T(null);try{return e()}finally{m(a),T(t)}}const oe=new Set,I=new Set;function ue(e,a,t,i){function s(r){if(i.capture||b.call(a,r),!r.cancelBubble)return se(()=>t.call(this,r))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?j(()=>{a.addEventListener(e,s,i)}):a.addEventListener(e,s,i),s}function _e(e,a,t,i,s){var r={capture:i,passive:s},l=ue(e,a,t,r);(a===document.body||a===window||a===document)&&W(()=>{a.removeEventListener(e,l,r)})}function b(e){var O;var a=this,t=a.ownerDocument,i=e.type,s=((O=e.composedPath)==null?void 0:O.call(e))||[],r=s[0]||e.target,l=0,v=e.__root;if(v){var c=s.indexOf(v);if(c!==-1&&(a===document||a===window)){e.__root=a;return}var p=s.indexOf(a);if(p===-1)return;c<=p&&(l=c)}if(r=s[l]||e.target,r!==a){q(e,"currentTarget",{configurable:!0,get(){return r||t}});var S=C,d=D;m(null),T(null);try{for(var n,o=[];r!==null;){var f=r.assignedSlot||r.parentNode||r.host||null;try{var _=r["__"+i];if(_!==void 0&&!r.disabled)if(B(_)){var[F,...P]=_;F.apply(r,[e,...P])}else _.call(r,e)}catch(E){n?o.push(E):n=E}if(e.cancelBubble||f===a||f===null)break;r=f}if(n){for(let E of o)queueMicrotask(()=>{throw E});throw n}}finally{e.__root=a,delete e.currentTarget,m(S),T(d)}}}let u;function le(){u=void 0}function he(e){let a=null,t=w;var i;if(w){for(a=h,u===void 0&&(u=V(document.head));u!==null&&(u.nodeType!==8||u.data!==M);)u=R(u);u===null?g(!1):u=N(R(u))}w||(i=document.head.appendChild(H()));try{$(()=>e(i),J)}finally{t&&(g(!0),u=h,N(a))}}function ve(e,a){var t=a==null?"":typeof a=="object"?a+"":a;t!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=t,e.nodeValue=t==null?"":t+"")}function de(e,a){return Y(e,a)}function pe(e,a){k(),a.intro=a.intro??!1;const t=a.target,i=w,s=h;try{for(var r=V(t);r&&(r.nodeType!==8||r.data!==M);)r=R(r);if(!r)throw L;g(!0),N(r),z();const l=Y(e,{...a,anchor:r});if(h===null||h.nodeType!==8||h.data!==G)throw K(),L;return g(!1),l}catch(l){if(l===L)return a.recover===!1&&Q(),k(),U(t),g(!1),de(e,a);throw l}finally{g(i),N(s),le()}}const y=new Map;function Y(e,{target:a,anchor:t,props:i={},events:s,context:r,intro:l=!0}){k();var v=new Set,c=d=>{for(var n=0;n<d.length;n++){var o=d[n];if(!v.has(o)){v.add(o);var f=ie(o);a.addEventListener(o,b,{passive:f});var _=y.get(o);_===void 0?(document.addEventListener(o,b,{passive:f}),y.set(o,1)):y.set(o,_+1)}}};c(X(oe)),I.add(c);var p=void 0,S=Z(()=>{var d=t??a.appendChild(H());return x(()=>{if(r){ee({});var n=re;n.c=r}s&&(i.$$events=s),w&&te(d,null),p=e(d,i)||{},w&&(D.nodes_end=h),r&&ae()}),()=>{var f;for(var n of v){a.removeEventListener(n,b);var o=y.get(n);--o===0?(document.removeEventListener(n,b),y.delete(n)):y.set(n,o)}I.delete(c),d!==t&&((f=d.parentNode)==null||f.removeChild(d))}});return A.set(p,S),p}let A=new WeakMap;function ye(e,a){const t=A.get(e);return t?(A.delete(e),t(a)):Promise.resolve()}export{he as a,_e as e,pe as h,de as m,ve as s,ye as u};
