import{a9 as m,X as L,aa as M,D as H,ab as V,ac as P,ad as $,H as X,a5 as j,b as z,ae as G,h as g,af as B,ag as N,M as y,L as S,c as b,a6 as W,ah as R,ai as D,I as J,aj as K,ak as Q,al as U,am as Z,an as x,ao as ee,a as re,p as te,g as ae,j as ne,n as A,k as se,a4 as ie,l as ue,B as oe}from"./runtime.BIZ8dVZ_.js";import{b as fe}from"./disclose-version.DAE2QkmW.js";function ce(e){var r=M,n=H;m(null),L(null);try{return e()}finally{m(r),L(n)}}const le=new Set,C=new Set;function de(e,r,n,a){function s(t){if(a.capture||w.call(r,t),!t.cancelBubble)return ce(()=>n.call(this,t))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?P(()=>{r.addEventListener(e,s,a)}):r.addEventListener(e,s,a),s}function we(e,r,n,a,s){var t={capture:a,passive:s},f=de(e,r,n,t);(r===document.body||r===window||r===document)&&V(()=>{r.removeEventListener(e,f,t)})}function w(e){var I;var r=this,n=r.ownerDocument,a=e.type,s=((I=e.composedPath)==null?void 0:I.call(e))||[],t=s[0]||e.target,f=0,v=e.__root;if(v){var d=s.indexOf(v);if(d!==-1&&(r===document||r===window)){e.__root=r;return}var _=s.indexOf(r);if(_===-1)return;d<=_&&(f=d)}if(t=s[f]||e.target,t!==r){$(e,"currentTarget",{configurable:!0,get(){return t||n}});var k=M,c=H;m(null),L(null);try{for(var i,u=[];t!==null;){var l=t.assignedSlot||t.parentNode||t.host||null;try{var h=t["__"+a];if(h!==void 0&&!t.disabled)if(X(h)){var[q,...F]=h;q.apply(t,[e,...F])}else h.call(t,e)}catch(E){i?u.push(E):i=E}if(e.cancelBubble||l===r||l===null)break;t=l}if(i){for(let E of u)queueMicrotask(()=>{throw E});throw i}}finally{e.__root=r,delete e.currentTarget,m(k),L(c)}}}let o;function _e(){o=void 0}function Ee(e){let r=null,n=g;var a;if(g){for(r=b,o===void 0&&(o=W(document.head));o!==null&&(o.nodeType!==8||o.data!==B);)o=N(o);o===null?y(!1):o=S(N(o))}g||(a=document.head.appendChild(j()));try{z(()=>e(a),G)}finally{n&&(y(!0),o=b,S(r))}}const he=["touchstart","touchmove"];function be(e){return he.includes(e)}function Te(e,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function ve(e,r){return Y(e,r)}function me(e,r){R(),r.intro=r.intro??!1;const n=r.target,a=g,s=b;try{for(var t=W(n);t&&(t.nodeType!==8||t.data!==B);)t=N(t);if(!t)throw D;y(!0),S(t),J();const f=Y(e,{...r,anchor:t});if(b===null||b.nodeType!==8||b.data!==K)throw Q(),D;return y(!1),f}catch(f){if(f===D)return r.recover===!1&&U(),R(),Z(n),y(!1),ve(e,r);throw f}finally{y(a),S(s),_e()}}const p=new Map;function Y(e,{target:r,anchor:n,props:a={},events:s,context:t,intro:f=!0}){R();var v=new Set,d=c=>{for(var i=0;i<c.length;i++){var u=c[i];if(!v.has(u)){v.add(u);var l=be(u);r.addEventListener(u,w,{passive:l});var h=p.get(u);h===void 0?(document.addEventListener(u,w,{passive:l}),p.set(u,1)):p.set(u,h+1)}}};d(x(le)),C.add(d);var _=void 0,k=ee(()=>{var c=n??r.appendChild(j());return re(()=>{if(t){te({});var i=ne;i.c=t}s&&(a.$$events=s),g&&fe(c,null),_=e(c,a)||{},g&&(H.nodes_end=b),t&&ae()}),()=>{var l;for(var i of v){r.removeEventListener(i,w);var u=p.get(i);--u===0?(document.removeEventListener(i,w),p.delete(i)):p.set(i,u)}C.delete(d),O.delete(_),c!==n&&((l=c.parentNode)==null||l.removeChild(c))}});return O.set(_,k),_}let O=new WeakMap;function Le(e){const r=O.get(e);r&&r()}function pe(e,r,n){if(e==null)return r(void 0),A;const a=se(()=>e.subscribe(r,n));return a.unsubscribe?()=>a.unsubscribe():a}let T=!1;function Se(e,r,n){const a=n[r]??(n[r]={store:null,source:ie(void 0),unsubscribe:A});if(a.store!==e)if(a.unsubscribe(),a.store=e??null,e==null)a.source.v=void 0,a.unsubscribe=A;else{var s=!0;a.unsubscribe=pe(e,t=>{s?a.source.v=t:oe(a.source,t)}),s=!1}return ue(a.source)}function ke(){const e={};return V(()=>{for(var r in e)e[r].unsubscribe()}),e}function De(e){var r=T;try{return T=!1,[e(),T]}finally{T=r}}export{Te as a,Se as b,De as c,Ee as d,we as e,me as h,ve as m,ke as s,Le as u};
