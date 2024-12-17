import{a9 as m,X as L,aa as M,D as H,ab as V,ac as F,ad as $,H as X,a5 as j,b as z,ae as G,h as g,af as B,ag as N,M as y,L as S,c as h,a6 as P,ah as R,ai as D,I as J,aj as K,ak as Q,al as U,am as Z,an as x,ao as ee,a as re,p as te,g as ae,j as ne,n as A,k as se,a4 as ie,l as ue,B as oe}from"./runtime.DMzSFz_F.js";import{b as le}from"./disclose-version.DpXVpbQK.js";const ce=["touchstart","touchmove"];function fe(e){return ce.includes(e)}function de(e){var r=M,a=H;m(null),L(null);try{return e()}finally{m(r),L(a)}}const _e=new Set,C=new Set;function he(e,r,a,n){function s(t){if(n.capture||w.call(r,t),!t.cancelBubble)return de(()=>a.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?F(()=>{r.addEventListener(e,s,n)}):r.addEventListener(e,s,n),s}function we(e,r,a,n,s){var t={capture:n,passive:s},l=he(e,r,a,t);(r===document.body||r===window||r===document)&&V(()=>{r.removeEventListener(e,l,t)})}function w(e){var I;var r=this,a=r.ownerDocument,n=e.type,s=((I=e.composedPath)==null?void 0:I.call(e))||[],t=s[0]||e.target,l=0,b=e.__root;if(b){var d=s.indexOf(b);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var v=s.indexOf(r);if(v===-1)return;d<=v&&(l=d)}if(t=s[l]||e.target,t!==r){$(e,"currentTarget",{configurable:!0,get(){return t||a}});var k=M,c=H;m(null),L(null);try{for(var i,u=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var _=t["__"+n];if(_!==void 0&&!t.disabled)if(X(_)){var[Y,...q]=_;Y.apply(t,[e,...q])}else _.call(t,e)}catch(E){i?u.push(E):i=E}if(e.cancelBubble||f===r||f===null)break;t=f}if(i){for(let E of u)queueMicrotask(()=>{throw E});throw i}}finally{e.__root=r,delete e.currentTarget,m(k),L(c)}}}let o;function be(){o=void 0}function Ee(e){let r=null,a=g;var n;if(g){for(r=h,o===void 0&&(o=P(document.head));o!==null&&(o.nodeType!==8||o.data!==B);)o=N(o);o===null?y(!1):o=S(N(o))}g||(n=document.head.appendChild(j()));try{z(()=>e(n),G)}finally{a&&(y(!0),o=h,S(r))}}function Te(e,r){var a=r==null?"":typeof r=="object"?r+"":r;a!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=a,e.nodeValue=a==null?"":a+"")}function ve(e,r){return W(e,r)}function me(e,r){R(),r.intro=r.intro??!1;const a=r.target,n=g,s=h;try{for(var t=P(a);t&&(t.nodeType!==8||t.data!==B);)t=N(t);if(!t)throw D;y(!0),S(t),J();const l=W(e,{...r,anchor:t});if(h===null||h.nodeType!==8||h.data!==K)throw Q(),D;return y(!1),l}catch(l){if(l===D)return r.recover===!1&&U(),R(),Z(a),y(!1),ve(e,r);throw l}finally{y(n),S(s),be()}}const p=new Map;function W(e,{target:r,anchor:a,props:n={},events:s,context:t,intro:l=!0}){R();var b=new Set,d=c=>{for(var i=0;i<c.length;i++){var u=c[i];if(!b.has(u)){b.add(u);var f=fe(u);r.addEventListener(u,w,{passive:f});var _=p.get(u);_===void 0?(document.addEventListener(u,w,{passive:f}),p.set(u,1)):p.set(u,_+1)}}};d(x(_e)),C.add(d);var v=void 0,k=ee(()=>{var c=a??r.appendChild(j());return re(()=>{if(t){te({});var i=ne;i.c=t}s&&(n.$$events=s),g&&le(c,null),v=e(c,n)||{},g&&(H.nodes_end=h),t&&ae()}),()=>{var f;for(var i of b){r.removeEventListener(i,w);var u=p.get(i);--u===0?(document.removeEventListener(i,w),p.delete(i)):p.set(i,u)}C.delete(d),c!==a&&((f=c.parentNode)==null||f.removeChild(c))}});return O.set(v,k),v}let O=new WeakMap;function Le(e,r){const a=O.get(e);return a?(O.delete(e),a(r)):Promise.resolve()}function pe(e,r,a){if(e==null)return r(void 0),A;const n=se(()=>e.subscribe(r,a));return n.unsubscribe?()=>n.unsubscribe():n}let T=!1;function Se(e,r,a){const n=a[r]??(a[r]={store:null,source:ie(void 0),unsubscribe:A});if(n.store!==e)if(n.unsubscribe(),n.store=e??null,e==null)n.source.v=void 0,n.unsubscribe=A;else{var s=!0;n.unsubscribe=pe(e,t=>{s?n.source.v=t:oe(n.source,t)}),s=!1}return ue(n.source)}function ke(){const e={};return V(()=>{for(var r in e)e[r].unsubscribe()}),e}function De(e){var r=T;try{return T=!1,[e(),T]}finally{T=r}}export{Te as a,Se as b,De as c,Ee as d,we as e,me as h,ve as m,ke as s,Le as u};
