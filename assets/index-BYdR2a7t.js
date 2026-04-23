(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Ml(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ce={},Mr=[],Qt=()=>{},Qf=()=>!1,xo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Mo=n=>n.startsWith("onUpdate:"),ct=Object.assign,Ll=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},zm=Object.prototype.hasOwnProperty,be=(n,e)=>zm.call(n,e),ae=Array.isArray,Lr=n=>li(n)==="[object Map]",Jf=n=>li(n)==="[object Set]",Uu=n=>li(n)==="[object Date]",ue=n=>typeof n=="function",Le=n=>typeof n=="string",tn=n=>typeof n=="symbol",Re=n=>n!==null&&typeof n=="object",Xf=n=>(Re(n)||ue(n))&&ue(n.then)&&ue(n.catch),Yf=Object.prototype.toString,li=n=>Yf.call(n),Wm=n=>li(n).slice(8,-1),Zf=n=>li(n)==="[object Object]",Fl=n=>Le(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Os=Ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Km=/-\w/g,xt=Lo(n=>n.replace(Km,e=>e.slice(1).toUpperCase())),Gm=/\B([A-Z])/g,Zn=Lo(n=>n.replace(Gm,"-$1").toLowerCase()),ed=Lo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Pa=Lo(n=>n?`on${ed(n)}`:""),Gt=(n,e)=>!Object.is(n,e),Gi=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},td=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Ul=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Bu;const Fo=()=>Bu||(Bu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Uo(n){if(ae(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Le(r)?Ym(r):Uo(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Le(n)||Re(n))return n}const Qm=/;(?![^(]*\))/g,Jm=/:([^]+)/,Xm=/\/\*[^]*?\*\//g;function Ym(n){const e={};return n.replace(Xm,"").split(Qm).forEach(t=>{if(t){const r=t.split(Jm);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ks(n){let e="";if(Le(n))e=n;else if(ae(n))for(let t=0;t<n.length;t++){const r=Ks(n[t]);r&&(e+=r+" ")}else if(Re(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Zm="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",e_=Ml(Zm);function nd(n){return!!n||n===""}function t_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=Bl(n[r],e[r]);return t}function Bl(n,e){if(n===e)return!0;let t=Uu(n),r=Uu(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=tn(n),r=tn(e),t||r)return n===e;if(t=ae(n),r=ae(e),t||r)return t&&r?t_(n,e):!1;if(t=Re(n),r=Re(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Bl(n[a],e[a]))return!1}}return String(n)===String(e)}const rd=n=>!!(n&&n.__v_isRef===!0),Rt=n=>Le(n)?n:n==null?"":ae(n)||Re(n)&&(n.toString===Yf||!ue(n.toString))?rd(n)?Rt(n.value):JSON.stringify(n,sd,2):String(n),sd=(n,e)=>rd(e)?sd(n,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Ca(r,i)+" =>"]=s,t),{})}:Jf(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Ca(t))}:tn(e)?Ca(e):Re(e)&&!ae(e)&&!Zf(e)?String(e):e,Ca=(n,e="")=>{var t;return tn(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let st;class n_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=st,!e&&st&&(this.index=(st.scopes||(st.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=st;try{return st=this,e()}finally{st=t}}}on(){++this._on===1&&(this.prevScope=st,st=this)}off(){if(this._on>0&&--this._on===0){if(st===this)st=this.prevScope;else{let e=st;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function r_(){return st}let ke;const ka=new WeakSet;class id{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,st&&st.active&&st.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ka.has(this)&&(ka.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ad(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ju(this),ld(this);const e=ke,t=Mt;ke=this,Mt=!0;try{return this.fn()}finally{cd(this),ke=e,Mt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ql(e);this.deps=this.depsTail=void 0,ju(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ka.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){el(this)&&this.run()}get dirty(){return el(this)}}let od=0,xs,Ms;function ad(n,e=!1){if(n.flags|=8,e){n.next=Ms,Ms=n;return}n.next=xs,xs=n}function jl(){od++}function $l(){if(--od>0)return;if(Ms){let e=Ms;for(Ms=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;xs;){let e=xs;for(xs=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function ld(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function cd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),ql(r),s_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function el(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(ud(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function ud(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Gs)||(n.globalVersion=Gs,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!el(n))))return;n.flags|=2;const e=n.dep,t=ke,r=Mt;ke=n,Mt=!0;try{ld(n);const s=n.fn(n._value);(e.version===0||Gt(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{ke=t,Mt=r,cd(n),n.flags&=-3}}function ql(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)ql(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function s_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Mt=!0;const hd=[];function yn(){hd.push(Mt),Mt=!1}function vn(){const n=hd.pop();Mt=n===void 0?!0:n}function ju(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=ke;ke=void 0;try{e()}finally{ke=t}}}let Gs=0;class i_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Hl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!ke||!Mt||ke===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==ke)t=this.activeLink=new i_(ke,this),ke.deps?(t.prevDep=ke.depsTail,ke.depsTail.nextDep=t,ke.depsTail=t):ke.deps=ke.depsTail=t,fd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=ke.depsTail,t.nextDep=void 0,ke.depsTail.nextDep=t,ke.depsTail=t,ke.deps===t&&(ke.deps=r)}return t}trigger(e){this.version++,Gs++,this.notify(e)}notify(e){jl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{$l()}}}function fd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)fd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const tl=new WeakMap,fr=Symbol(""),nl=Symbol(""),Qs=Symbol("");function ot(n,e,t){if(Mt&&ke){let r=tl.get(n);r||tl.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new Hl),s.map=r,s.key=t),s.track()}}function fn(n,e,t,r,s,i){const a=tl.get(n);if(!a){Gs++;return}const l=c=>{c&&c.trigger()};if(jl(),e==="clear")a.forEach(l);else{const c=ae(n),h=c&&Fl(t);if(c&&t==="length"){const d=Number(r);a.forEach((g,m)=>{(m==="length"||m===Qs||!tn(m)&&m>=d)&&l(g)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),h&&l(a.get(Qs)),e){case"add":c?h&&l(a.get("length")):(l(a.get(fr)),Lr(n)&&l(a.get(nl)));break;case"delete":c||(l(a.get(fr)),Lr(n)&&l(a.get(nl)));break;case"set":Lr(n)&&l(a.get(fr));break}}$l()}function Cr(n){const e=Ae(n);return e===n?e:(ot(e,"iterate",Qs),kt(n)?e:e.map(Ft))}function Bo(n){return ot(n=Ae(n),"iterate",Qs),n}function Wt(n,e){return En(n)?zr(dr(n)?Ft(e):e):Ft(e)}const o_={__proto__:null,[Symbol.iterator](){return Va(this,Symbol.iterator,n=>Wt(this,n))},concat(...n){return Cr(this).concat(...n.map(e=>ae(e)?Cr(e):e))},entries(){return Va(this,"entries",n=>(n[1]=Wt(this,n[1]),n))},every(n,e){return cn(this,"every",n,e,void 0,arguments)},filter(n,e){return cn(this,"filter",n,e,t=>t.map(r=>Wt(this,r)),arguments)},find(n,e){return cn(this,"find",n,e,t=>Wt(this,t),arguments)},findIndex(n,e){return cn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return cn(this,"findLast",n,e,t=>Wt(this,t),arguments)},findLastIndex(n,e){return cn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return cn(this,"forEach",n,e,void 0,arguments)},includes(...n){return Da(this,"includes",n)},indexOf(...n){return Da(this,"indexOf",n)},join(n){return Cr(this).join(n)},lastIndexOf(...n){return Da(this,"lastIndexOf",n)},map(n,e){return cn(this,"map",n,e,void 0,arguments)},pop(){return As(this,"pop")},push(...n){return As(this,"push",n)},reduce(n,...e){return $u(this,"reduce",n,e)},reduceRight(n,...e){return $u(this,"reduceRight",n,e)},shift(){return As(this,"shift")},some(n,e){return cn(this,"some",n,e,void 0,arguments)},splice(...n){return As(this,"splice",n)},toReversed(){return Cr(this).toReversed()},toSorted(n){return Cr(this).toSorted(n)},toSpliced(...n){return Cr(this).toSpliced(...n)},unshift(...n){return As(this,"unshift",n)},values(){return Va(this,"values",n=>Wt(this,n))}};function Va(n,e,t){const r=Bo(n),s=r[e]();return r!==n&&!kt(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const a_=Array.prototype;function cn(n,e,t,r,s,i){const a=Bo(n),l=a!==n&&!kt(n),c=a[e];if(c!==a_[e]){const g=c.apply(n,i);return l?Ft(g):g}let h=t;a!==n&&(l?h=function(g,m){return t.call(this,Wt(n,g),m,n)}:t.length>2&&(h=function(g,m){return t.call(this,g,m,n)}));const d=c.call(a,h,r);return l&&s?s(d):d}function $u(n,e,t,r){const s=Bo(n),i=s!==n&&!kt(n);let a=t,l=!1;s!==n&&(i?(l=r.length===0,a=function(h,d,g){return l&&(l=!1,h=Wt(n,h)),t.call(this,h,Wt(n,d),g,n)}):t.length>3&&(a=function(h,d,g){return t.call(this,h,d,g,n)}));const c=s[e](a,...r);return l?Wt(n,c):c}function Da(n,e,t){const r=Ae(n);ot(r,"iterate",Qs);const s=r[e](...t);return(s===-1||s===!1)&&Gl(t[0])?(t[0]=Ae(t[0]),r[e](...t)):s}function As(n,e,t=[]){yn(),jl();const r=Ae(n)[e].apply(n,t);return $l(),vn(),r}const l_=Ml("__proto__,__v_isRef,__isVue"),dd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(tn));function c_(n){tn(n)||(n=String(n));const e=Ae(this);return ot(e,"has",n),e.hasOwnProperty(n)}class pd{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?v_:yd:i?_d:md).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=ae(e);if(!s){let c;if(a&&(c=o_[t]))return c;if(t==="hasOwnProperty")return c_}const l=Reflect.get(e,t,lt(e)?e:r);if((tn(t)?dd.has(t):l_(t))||(s||ot(e,"get",t),i))return l;if(lt(l)){const c=a&&Fl(t)?l:l.value;return s&&Re(c)?sl(c):c}return Re(l)?s?sl(l):Wl(l):l}}class gd extends pd{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=ae(e)&&Fl(t);if(!this._isShallow){const h=En(i);if(!kt(r)&&!En(r)&&(i=Ae(i),r=Ae(r)),!a&&lt(i)&&!lt(r))return h||(i.value=r),!0}const l=a?Number(t)<e.length:be(e,t),c=Reflect.set(e,t,r,lt(e)?e:s);return e===Ae(s)&&(l?Gt(r,i)&&fn(e,"set",t,r):fn(e,"add",t,r)),c}deleteProperty(e,t){const r=be(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&fn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!tn(t)||!dd.has(t))&&ot(e,"has",t),r}ownKeys(e){return ot(e,"iterate",ae(e)?"length":fr),Reflect.ownKeys(e)}}class u_ extends pd{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const h_=new gd,f_=new u_,d_=new gd(!0);const rl=n=>n,Ui=n=>Reflect.getPrototypeOf(n);function p_(n,e,t){return function(...r){const s=this.__v_raw,i=Ae(s),a=Lr(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,h=s[n](...r),d=t?rl:e?zr:Ft;return!e&&ot(i,"iterate",c?nl:fr),ct(Object.create(h),{next(){const{value:g,done:m}=h.next();return m?{value:g,done:m}:{value:l?[d(g[0]),d(g[1])]:d(g),done:m}}})}}function Bi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function g_(n,e){const t={get(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);n||(Gt(s,l)&&ot(a,"get",s),ot(a,"get",l));const{has:c}=Ui(a),h=e?rl:n?zr:Ft;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&ot(Ae(s),"iterate",fr),s.size},has(s){const i=this.__v_raw,a=Ae(i),l=Ae(s);return n||(Gt(s,l)&&ot(a,"has",s),ot(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=Ae(l),h=e?rl:n?zr:Ft;return!n&&ot(c,"iterate",fr),l.forEach((d,g)=>s.call(i,h(d),h(g),a))}};return ct(t,n?{add:Bi("add"),set:Bi("set"),delete:Bi("delete"),clear:Bi("clear")}:{add(s){const i=Ae(this),a=Ui(i),l=Ae(s),c=!e&&!kt(s)&&!En(s)?l:s;return a.has.call(i,c)||Gt(s,c)&&a.has.call(i,s)||Gt(l,c)&&a.has.call(i,l)||(i.add(c),fn(i,"add",c,c)),this},set(s,i){!e&&!kt(i)&&!En(i)&&(i=Ae(i));const a=Ae(this),{has:l,get:c}=Ui(a);let h=l.call(a,s);h||(s=Ae(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?Gt(i,d)&&fn(a,"set",s,i):fn(a,"add",s,i),this},delete(s){const i=Ae(this),{has:a,get:l}=Ui(i);let c=a.call(i,s);c||(s=Ae(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&fn(i,"delete",s,void 0),h},clear(){const s=Ae(this),i=s.size!==0,a=s.clear();return i&&fn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=p_(s,n,e)}),t}function zl(n,e){const t=g_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(be(t,s)&&s in r?t:r,s,i)}const m_={get:zl(!1,!1)},__={get:zl(!1,!0)},y_={get:zl(!0,!1)};const md=new WeakMap,_d=new WeakMap,yd=new WeakMap,v_=new WeakMap;function E_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function T_(n){return n.__v_skip||!Object.isExtensible(n)?0:E_(Wm(n))}function Wl(n){return En(n)?n:Kl(n,!1,h_,m_,md)}function I_(n){return Kl(n,!1,d_,__,_d)}function sl(n){return Kl(n,!0,f_,y_,yd)}function Kl(n,e,t,r,s){if(!Re(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=T_(n);if(i===0)return n;const a=s.get(n);if(a)return a;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function dr(n){return En(n)?dr(n.__v_raw):!!(n&&n.__v_isReactive)}function En(n){return!!(n&&n.__v_isReadonly)}function kt(n){return!!(n&&n.__v_isShallow)}function Gl(n){return n?!!n.__v_raw:!1}function Ae(n){const e=n&&n.__v_raw;return e?Ae(e):n}function w_(n){return!be(n,"__v_skip")&&Object.isExtensible(n)&&td(n,"__v_skip",!0),n}const Ft=n=>Re(n)?Wl(n):n,zr=n=>Re(n)?sl(n):n;function lt(n){return n?n.__v_isRef===!0:!1}function $t(n){return A_(n,!1)}function A_(n,e){return lt(n)?n:new b_(n,e)}class b_{constructor(e,t){this.dep=new Hl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:Ae(e),this._value=t?e:Ft(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||kt(e)||En(e);e=r?e:Ae(e),Gt(e,t)&&(this._rawValue=e,this._value=r?e:Ft(e),this.dep.trigger())}}function S_(n){return lt(n)?n.value:n}const R_={get:(n,e,t)=>e==="__v_raw"?n:S_(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return lt(s)&&!lt(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function vd(n){return dr(n)?n:new Proxy(n,R_)}class P_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Hl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gs-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&ke!==this)return ad(this,!0),!0}get value(){const e=this.dep.track();return ud(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function C_(n,e,t=!1){let r,s;return ue(n)?r=n:(r=n.get,s=n.set),new P_(r,s,t)}const ji={},co=new WeakMap;let lr;function k_(n,e=!1,t=lr){if(t){let r=co.get(t);r||co.set(t,r=[]),r.push(n)}}function V_(n,e,t=Ce){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,h=z=>s?z:kt(z)||s===!1||s===0?dn(z,1):dn(z);let d,g,m,b,V=!1,k=!1;if(lt(n)?(g=()=>n.value,V=kt(n)):dr(n)?(g=()=>h(n),V=!0):ae(n)?(k=!0,V=n.some(z=>dr(z)||kt(z)),g=()=>n.map(z=>{if(lt(z))return z.value;if(dr(z))return h(z);if(ue(z))return c?c(z,2):z()})):ue(n)?e?g=c?()=>c(n,2):n:g=()=>{if(m){yn();try{m()}finally{vn()}}const z=lr;lr=d;try{return c?c(n,3,[b]):n(b)}finally{lr=z}}:g=Qt,e&&s){const z=g,me=s===!0?1/0:s;g=()=>dn(z(),me)}const N=r_(),G=()=>{d.stop(),N&&N.active&&Ll(N.effects,d)};if(i&&e){const z=e;e=(...me)=>{z(...me),G()}}let $=k?new Array(n.length).fill(ji):ji;const Q=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const me=d.run();if(s||V||(k?me.some((ve,I)=>Gt(ve,$[I])):Gt(me,$))){m&&m();const ve=lr;lr=d;try{const I=[me,$===ji?void 0:k&&$[0]===ji?[]:$,b];$=me,c?c(e,3,I):e(...I)}finally{lr=ve}}}else d.run()};return l&&l(Q),d=new id(g),d.scheduler=a?()=>a(Q,!1):Q,b=z=>k_(z,!1,d),m=d.onStop=()=>{const z=co.get(d);if(z){if(c)c(z,4);else for(const me of z)me();co.delete(d)}},e?r?Q(!0):$=d.run():a?a(Q.bind(null,!0),!0):d.run(),G.pause=d.pause.bind(d),G.resume=d.resume.bind(d),G.stop=G,G}function dn(n,e=1/0,t){if(e<=0||!Re(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,lt(n))dn(n.value,e,t);else if(ae(n))for(let r=0;r<n.length;r++)dn(n[r],e,t);else if(Jf(n)||Lr(n))n.forEach(r=>{dn(r,e,t)});else if(Zf(n)){for(const r in n)dn(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&dn(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ci(n,e,t,r){try{return r?n(...r):n()}catch(s){jo(s,e,t)}}function nn(n,e,t,r){if(ue(n)){const s=ci(n,e,t,r);return s&&Xf(s)&&s.catch(i=>{jo(i,e,t)}),s}if(ae(n)){const s=[];for(let i=0;i<n.length;i++)s.push(nn(n[i],e,t,r));return s}}function jo(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ce;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](n,c,h)===!1)return}l=l.parent}if(i){yn(),ci(i,null,10,[n,c,h]),vn();return}}D_(n,t,s,r,a)}function D_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const dt=[];let Ht=-1;const Fr=[];let On=null,kr=0;const Ed=Promise.resolve();let uo=null;function N_(n){const e=uo||Ed;return n?e.then(this?n.bind(this):n):e}function O_(n){let e=Ht+1,t=dt.length;for(;e<t;){const r=e+t>>>1,s=dt[r],i=Js(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Ql(n){if(!(n.flags&1)){const e=Js(n),t=dt[dt.length-1];!t||!(n.flags&2)&&e>=Js(t)?dt.push(n):dt.splice(O_(e),0,n),n.flags|=1,Td()}}function Td(){uo||(uo=Ed.then(wd))}function x_(n){ae(n)?Fr.push(...n):On&&n.id===-1?On.splice(kr+1,0,n):n.flags&1||(Fr.push(n),n.flags|=1),Td()}function qu(n,e,t=Ht+1){for(;t<dt.length;t++){const r=dt[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;dt.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Id(n){if(Fr.length){const e=[...new Set(Fr)].sort((t,r)=>Js(t)-Js(r));if(Fr.length=0,On){On.push(...e);return}for(On=e,kr=0;kr<On.length;kr++){const t=On[kr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}On=null,kr=0}}const Js=n=>n.id==null?n.flags&2?-1:1/0:n.id;function wd(n){try{for(Ht=0;Ht<dt.length;Ht++){const e=dt[Ht];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ci(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ht<dt.length;Ht++){const e=dt[Ht];e&&(e.flags&=-2)}Ht=-1,dt.length=0,Id(),uo=null,(dt.length||Fr.length)&&wd()}}let Ct=null,Ad=null;function ho(n){const e=Ct;return Ct=n,Ad=n&&n.type.__scopeId||null,e}function M_(n,e=Ct,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&eh(-1);const i=ho(e);let a;try{a=n(...s)}finally{ho(i),r._d&&eh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function L_(n,e){if(Ct===null)return n;const t=zo(Ct),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=Ce]=e[s];i&&(ue(i)&&(i={mounted:i,updated:i}),i.deep&&dn(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function or(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(yn(),nn(c,t,8,[n.el,l,n,e]),vn())}}function F_(n,e){if(pt){let t=pt.provides;const r=pt.parent&&pt.parent.provides;r===t&&(t=pt.provides=Object.create(r)),t[n]=e}}function Qi(n,e,t=!1){const r=Fy();if(r||Ur){let s=Ur?Ur._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ue(e)?e.call(r&&r.proxy):e}}const U_=Symbol.for("v-scx"),B_=()=>Qi(U_);function Ji(n,e,t){return bd(n,e,t)}function bd(n,e,t=Ce){const{immediate:r,deep:s,flush:i,once:a}=t,l=ct({},t),c=e&&r||!e&&i!=="post";let h;if(Ys){if(i==="sync"){const b=B_();h=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=Qt,b.resume=Qt,b.pause=Qt,b}}const d=pt;l.call=(b,V,k)=>nn(b,d,V,k);let g=!1;i==="post"?l.scheduler=b=>{mt(b,d&&d.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(b,V)=>{V?b():Ql(b)}),l.augmentJob=b=>{e&&(b.flags|=4),g&&(b.flags|=2,d&&(b.id=d.uid,b.i=d))};const m=V_(n,e,l);return Ys&&(h?h.push(m):c&&m()),m}function j_(n,e,t){const r=this.proxy,s=Le(n)?n.includes(".")?Sd(r,n):()=>r[n]:n.bind(r,r);let i;ue(e)?i=e:(i=e.handler,t=e);const a=ui(this),l=bd(s,i.bind(r),t);return a(),l}function Sd(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const $_=Symbol("_vte"),q_=n=>n.__isTeleport,H_=Symbol("_leaveCb");function Jl(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Jl(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Rd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Hu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const fo=new WeakMap;function Ls(n,e,t,r,s=!1){if(ae(n)){n.forEach((k,N)=>Ls(k,e&&(ae(e)?e[N]:e),t,r,s));return}if(Fs(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ls(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?zo(r.component):r.el,a=s?null:i,{i:l,r:c}=n,h=e&&e.r,d=l.refs===Ce?l.refs={}:l.refs,g=l.setupState,m=Ae(g),b=g===Ce?Qf:k=>Hu(d,k)?!1:be(m,k),V=(k,N)=>!(N&&Hu(d,N));if(h!=null&&h!==c){if(zu(e),Le(h))d[h]=null,b(h)&&(g[h]=null);else if(lt(h)){const k=e;V(h,k.k)&&(h.value=null),k.k&&(d[k.k]=null)}}if(ue(c))ci(c,l,12,[a,d]);else{const k=Le(c),N=lt(c);if(k||N){const G=()=>{if(n.f){const $=k?b(c)?g[c]:d[c]:V()||!n.k?c.value:d[n.k];if(s)ae($)&&Ll($,i);else if(ae($))$.includes(i)||$.push(i);else if(k)d[c]=[i],b(c)&&(g[c]=d[c]);else{const Q=[i];V(c,n.k)&&(c.value=Q),n.k&&(d[n.k]=Q)}}else k?(d[c]=a,b(c)&&(g[c]=a)):N&&(V(c,n.k)&&(c.value=a),n.k&&(d[n.k]=a))};if(a){const $=()=>{G(),fo.delete(n)};$.id=-1,fo.set(n,$),mt($,t)}else zu(n),G()}}}function zu(n){const e=fo.get(n);e&&(e.flags|=8,fo.delete(n))}Fo().requestIdleCallback;Fo().cancelIdleCallback;const Fs=n=>!!n.type.__asyncLoader,Pd=n=>n.type.__isKeepAlive;function z_(n,e){Cd(n,"a",e)}function W_(n,e){Cd(n,"da",e)}function Cd(n,e,t=pt){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if($o(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Pd(s.parent.vnode)&&K_(r,e,t,s),s=s.parent}}function K_(n,e,t,r){const s=$o(e,n,r,!0);Xl(()=>{Ll(r[e],s)},t)}function $o(n,e,t=pt,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{yn();const l=ui(t),c=nn(e,t,n,a);return l(),vn(),c});return r?s.unshift(i):s.push(i),i}}const bn=n=>(e,t=pt)=>{(!Ys||n==="sp")&&$o(n,(...r)=>e(...r),t)},G_=bn("bm"),kd=bn("m"),Q_=bn("bu"),J_=bn("u"),X_=bn("bum"),Xl=bn("um"),Y_=bn("sp"),Z_=bn("rtg"),ey=bn("rtc");function ty(n,e=pt){$o("ec",n,e)}const ny=Symbol.for("v-ndc");function ry(n,e,t,r){let s;const i=t,a=ae(n);if(a||Le(n)){const l=a&&dr(n);let c=!1,h=!1;l&&(c=!kt(n),h=En(n),n=Bo(n)),s=new Array(n.length);for(let d=0,g=n.length;d<g;d++)s[d]=e(c?h?zr(Ft(n[d])):Ft(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(Re(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(n[d],d,c,i)}}else s=[];return s}const il=n=>n?Yd(n)?zo(n):il(n.parent):null,Us=ct(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>il(n.parent),$root:n=>il(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Dd(n),$forceUpdate:n=>n.f||(n.f=()=>{Ql(n.update)}),$nextTick:n=>n.n||(n.n=N_.bind(n.proxy)),$watch:n=>j_.bind(n)}),Na=(n,e)=>n!==Ce&&!n.__isScriptSetup&&be(n,e),sy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Na(r,e))return a[e]=1,r[e];if(s!==Ce&&be(s,e))return a[e]=2,s[e];if(be(i,e))return a[e]=3,i[e];if(t!==Ce&&be(t,e))return a[e]=4,t[e];ol&&(a[e]=0)}}const h=Us[e];let d,g;if(h)return e==="$attrs"&&ot(n.attrs,"get",""),h(n);if((d=l.__cssModules)&&(d=d[e]))return d;if(t!==Ce&&be(t,e))return a[e]=4,t[e];if(g=c.config.globalProperties,be(g,e))return g[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Na(s,e)?(s[e]=t,!0):r!==Ce&&be(r,e)?(r[e]=t,!0):be(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},l){let c;return!!(t[l]||n!==Ce&&l[0]!=="$"&&be(n,l)||Na(e,l)||be(i,l)||be(r,l)||be(Us,l)||be(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:be(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Wu(n){return ae(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ol=!0;function iy(n){const e=Dd(n),t=n.proxy,r=n.ctx;ol=!1,e.beforeCreate&&Ku(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:g,mounted:m,beforeUpdate:b,updated:V,activated:k,deactivated:N,beforeDestroy:G,beforeUnmount:$,destroyed:Q,unmounted:z,render:me,renderTracked:ve,renderTriggered:I,errorCaptured:_,serverPrefetch:v,expose:T,inheritAttrs:A,components:S,directives:E,filters:Ze}=e;if(h&&oy(h,r,null),a)for(const Te in a){const _e=a[Te];ue(_e)&&(r[Te]=_e.bind(t))}if(s){const Te=s.call(t,t);Re(Te)&&(n.data=Wl(Te))}if(ol=!0,i)for(const Te in i){const _e=i[Te],Y=ue(_e)?_e.bind(t,t):ue(_e.get)?_e.get.bind(t,t):Qt,W=!ue(_e)&&ue(_e.set)?_e.set.bind(t):Qt,de=Yi({get:Y,set:W});Object.defineProperty(r,Te,{enumerable:!0,configurable:!0,get:()=>de.value,set:te=>de.value=te})}if(l)for(const Te in l)Vd(l[Te],r,t,Te);if(c){const Te=ue(c)?c.call(t):c;Reflect.ownKeys(Te).forEach(_e=>{F_(_e,Te[_e])})}d&&Ku(d,n,"c");function $e(Te,_e){ae(_e)?_e.forEach(Y=>Te(Y.bind(t))):_e&&Te(_e.bind(t))}if($e(G_,g),$e(kd,m),$e(Q_,b),$e(J_,V),$e(z_,k),$e(W_,N),$e(ty,_),$e(ey,ve),$e(Z_,I),$e(X_,$),$e(Xl,z),$e(Y_,v),ae(T))if(T.length){const Te=n.exposed||(n.exposed={});T.forEach(_e=>{Object.defineProperty(Te,_e,{get:()=>t[_e],set:Y=>t[_e]=Y,enumerable:!0})})}else n.exposed||(n.exposed={});me&&n.render===Qt&&(n.render=me),A!=null&&(n.inheritAttrs=A),S&&(n.components=S),E&&(n.directives=E),v&&Rd(n)}function oy(n,e,t=Qt){ae(n)&&(n=al(n));for(const r in n){const s=n[r];let i;Re(s)?"default"in s?i=Qi(s.from||r,s.default,!0):i=Qi(s.from||r):i=Qi(s),lt(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Ku(n,e,t){nn(ae(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Vd(n,e,t,r){let s=r.includes(".")?Sd(t,r):()=>t[r];if(Le(n)){const i=e[n];ue(i)&&Ji(s,i)}else if(ue(n))Ji(s,n.bind(t));else if(Re(n))if(ae(n))n.forEach(i=>Vd(i,e,t,r));else{const i=ue(n.handler)?n.handler.bind(t):e[n.handler];ue(i)&&Ji(s,i,n)}}function Dd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>po(c,h,a,!0)),po(c,e,a)),Re(e)&&i.set(e,c),c}function po(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&po(n,i,t,!0),s&&s.forEach(a=>po(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=ay[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const ay={data:Gu,props:Qu,emits:Qu,methods:Ps,computed:Ps,beforeCreate:ft,created:ft,beforeMount:ft,mounted:ft,beforeUpdate:ft,updated:ft,beforeDestroy:ft,beforeUnmount:ft,destroyed:ft,unmounted:ft,activated:ft,deactivated:ft,errorCaptured:ft,serverPrefetch:ft,components:Ps,directives:Ps,watch:cy,provide:Gu,inject:ly};function Gu(n,e){return e?n?function(){return ct(ue(n)?n.call(this,this):n,ue(e)?e.call(this,this):e)}:e:n}function ly(n,e){return Ps(al(n),al(e))}function al(n){if(ae(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ft(n,e){return n?[...new Set([].concat(n,e))]:e}function Ps(n,e){return n?ct(Object.create(null),n,e):e}function Qu(n,e){return n?ae(n)&&ae(e)?[...new Set([...n,...e])]:ct(Object.create(null),Wu(n),Wu(e??{})):e}function cy(n,e){if(!n)return e;if(!e)return n;const t=ct(Object.create(null),n);for(const r in e)t[r]=ft(n[r],e[r]);return t}function Nd(){return{app:null,config:{isNativeTag:Qf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let uy=0;function hy(n,e){return function(r,s=null){ue(r)||(r=ct({},r)),s!=null&&!Re(s)&&(s=null);const i=Nd(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:uy++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Hy,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&ue(d.install)?(a.add(d),d.install(h,...g)):ue(d)&&(a.add(d),d(h,...g))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,g){return g?(i.components[d]=g,h):i.components[d]},directive(d,g){return g?(i.directives[d]=g,h):i.directives[d]},mount(d,g,m){if(!c){const b=h._ceVNode||_n(r,s);return b.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),n(b,d,m),c=!0,h._container=d,d.__vue_app__=h,zo(b.component)}},onUnmount(d){l.push(d)},unmount(){c&&(nn(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,g){return i.provides[d]=g,h},runWithContext(d){const g=Ur;Ur=h;try{return d()}finally{Ur=g}}};return h}}let Ur=null;const fy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${xt(e)}Modifiers`]||n[`${Zn(e)}Modifiers`];function dy(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ce;let s=t;const i=e.startsWith("update:"),a=i&&fy(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Le(d)?d.trim():d)),a.number&&(s=t.map(Ul)));let l,c=r[l=Pa(e)]||r[l=Pa(xt(e))];!c&&i&&(c=r[l=Pa(Zn(e))]),c&&nn(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,nn(h,n,6,s)}}const py=new WeakMap;function Od(n,e,t=!1){const r=t?py:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!ue(n)){const c=h=>{const d=Od(h,e,!0);d&&(l=!0,ct(a,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(Re(n)&&r.set(n,null),null):(ae(i)?i.forEach(c=>a[c]=null):ct(a,i),Re(n)&&r.set(n,a),a)}function qo(n,e){return!n||!xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),be(n,e[0].toLowerCase()+e.slice(1))||be(n,Zn(e))||be(n,e))}function Ju(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:g,data:m,setupState:b,ctx:V,inheritAttrs:k}=n,N=ho(n);let G,$;try{if(t.shapeFlag&4){const z=s||r,me=z;G=Kt(h.call(me,z,d,g,b,m,V)),$=l}else{const z=e;G=Kt(z.length>1?z(g,{attrs:l,slots:a,emit:c}):z(g,null)),$=e.props?l:gy(l)}}catch(z){Bs.length=0,jo(z,n,1),G=_n(zn)}let Q=G;if($&&k!==!1){const z=Object.keys($),{shapeFlag:me}=Q;z.length&&me&7&&(i&&z.some(Mo)&&($=my($,i)),Q=Wr(Q,$,!1,!0))}return t.dirs&&(Q=Wr(Q,null,!1,!0),Q.dirs=Q.dirs?Q.dirs.concat(t.dirs):t.dirs),t.transition&&Jl(Q,t.transition),G=Q,ho(N),G}const gy=n=>{let e;for(const t in n)(t==="class"||t==="style"||xo(t))&&((e||(e={}))[t]=n[t]);return e},my=(n,e)=>{const t={};for(const r in n)(!Mo(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function _y(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Xu(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const m=d[g];if(xd(a,r,m)&&!qo(h,m))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?Xu(r,a,h):!0:!!a;return!1}function Xu(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(xd(e,n,i)&&!qo(t,i))return!0}return!1}function xd(n,e,t){const r=n[t],s=e[t];return t==="style"&&Re(r)&&Re(s)?!Bl(r,s):r!==s}function yy({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const Md={},Ld=()=>Object.create(Md),Fd=n=>Object.getPrototypeOf(n)===Md;function vy(n,e,t,r=!1){const s={},i=Ld();n.propsDefaults=Object.create(null),Ud(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:I_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Ey(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=Ae(s),[c]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let g=0;g<d.length;g++){let m=d[g];if(qo(n.emitsOptions,m))continue;const b=e[m];if(c)if(be(i,m))b!==i[m]&&(i[m]=b,h=!0);else{const V=xt(m);s[V]=ll(c,l,V,b,n,!1)}else b!==i[m]&&(i[m]=b,h=!0)}}}else{Ud(n,e,s,i)&&(h=!0);let d;for(const g in l)(!e||!be(e,g)&&((d=Zn(g))===g||!be(e,d)))&&(c?t&&(t[g]!==void 0||t[d]!==void 0)&&(s[g]=ll(c,l,g,void 0,n,!0)):delete s[g]);if(i!==l)for(const g in i)(!e||!be(e,g))&&(delete i[g],h=!0)}h&&fn(n.attrs,"set","")}function Ud(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(Os(c))continue;const h=e[c];let d;s&&be(s,d=xt(c))?!i||!i.includes(d)?t[d]=h:(l||(l={}))[d]=h:qo(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=Ae(t),h=l||Ce;for(let d=0;d<i.length;d++){const g=i[d];t[g]=ll(s,c,g,h[g],n,!be(h,g))}}return a}function ll(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=be(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ue(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=ui(s);r=h[t]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Zn(t))&&(r=!0))}return r}const Ty=new WeakMap;function Bd(n,e,t=!1){const r=t?Ty:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!ue(n)){const d=g=>{c=!0;const[m,b]=Bd(g,e,!0);ct(a,m),b&&l.push(...b)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!c)return Re(n)&&r.set(n,Mr),Mr;if(ae(i))for(let d=0;d<i.length;d++){const g=xt(i[d]);Yu(g)&&(a[g]=Ce)}else if(i)for(const d in i){const g=xt(d);if(Yu(g)){const m=i[d],b=a[g]=ae(m)||ue(m)?{type:m}:ct({},m),V=b.type;let k=!1,N=!0;if(ae(V))for(let G=0;G<V.length;++G){const $=V[G],Q=ue($)&&$.name;if(Q==="Boolean"){k=!0;break}else Q==="String"&&(N=!1)}else k=ue(V)&&V.name==="Boolean";b[0]=k,b[1]=N,(k||be(b,"default"))&&l.push(g)}}const h=[a,l];return Re(n)&&r.set(n,h),h}function Yu(n){return n[0]!=="$"&&!Os(n)}const Yl=n=>n==="_"||n==="_ctx"||n==="$stable",Zl=n=>ae(n)?n.map(Kt):[Kt(n)],Iy=(n,e,t)=>{if(e._n)return e;const r=M_((...s)=>Zl(e(...s)),t);return r._c=!1,r},jd=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Yl(s))continue;const i=n[s];if(ue(i))e[s]=Iy(s,i,r);else if(i!=null){const a=Zl(i);e[s]=()=>a}}},$d=(n,e)=>{const t=Zl(e);n.slots.default=()=>t},qd=(n,e,t)=>{for(const r in e)(t||!Yl(r))&&(n[r]=e[r])},wy=(n,e,t)=>{const r=n.slots=Ld();if(n.vnode.shapeFlag&32){const s=e._;s?(qd(r,e,t),t&&td(r,"_",s,!0)):jd(e,r)}else e&&$d(n,e)},Ay=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=Ce;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:qd(s,e,t):(i=!e.$stable,jd(e,s)),a=e}else e&&($d(n,e),a={default:1});if(i)for(const l in s)!Yl(l)&&a[l]==null&&delete s[l]},mt=Cy;function by(n){return Sy(n)}function Sy(n,e){const t=Fo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:g,nextSibling:m,setScopeId:b=Qt,insertStaticContent:V}=n,k=(y,w,C,F=null,x=null,L=null,q=void 0,j=null,U=!!w.dynamicChildren)=>{if(y===w)return;y&&!bs(y,w)&&(F=At(y),te(y,x,L,!0),y=null),w.patchFlag===-2&&(U=!1,w.dynamicChildren=null);const{type:M,ref:ee,shapeFlag:H}=w;switch(M){case Ho:N(y,w,C,F);break;case zn:G(y,w,C,F);break;case xa:y==null&&$(w,C,F,q);break;case Dt:S(y,w,C,F,x,L,q,j,U);break;default:H&1?me(y,w,C,F,x,L,q,j,U):H&6?E(y,w,C,F,x,L,q,j,U):(H&64||H&128)&&M.process(y,w,C,F,x,L,q,j,U,jt)}ee!=null&&x?Ls(ee,y&&y.ref,L,w||y,!w):ee==null&&y&&y.ref!=null&&Ls(y.ref,null,L,y,!0)},N=(y,w,C,F)=>{if(y==null)r(w.el=l(w.children),C,F);else{const x=w.el=y.el;w.children!==y.children&&h(x,w.children)}},G=(y,w,C,F)=>{y==null?r(w.el=c(w.children||""),C,F):w.el=y.el},$=(y,w,C,F)=>{[y.el,y.anchor]=V(y.children,w,C,F,y.el,y.anchor)},Q=({el:y,anchor:w},C,F)=>{let x;for(;y&&y!==w;)x=m(y),r(y,C,F),y=x;r(w,C,F)},z=({el:y,anchor:w})=>{let C;for(;y&&y!==w;)C=m(y),s(y),y=C;s(w)},me=(y,w,C,F,x,L,q,j,U)=>{if(w.type==="svg"?q="svg":w.type==="math"&&(q="mathml"),y==null)ve(w,C,F,x,L,q,j,U);else{const M=y.el&&y.el._isVueCE?y.el:null;try{M&&M._beginPatch(),v(y,w,x,L,q,j,U)}finally{M&&M._endPatch()}}},ve=(y,w,C,F,x,L,q,j)=>{let U,M;const{props:ee,shapeFlag:H,transition:X,dirs:ne}=y;if(U=y.el=a(y.type,L,ee&&ee.is,ee),H&8?d(U,y.children):H&16&&_(y.children,U,null,F,x,Oa(y,L),q,j),ne&&or(y,null,F,"created"),I(U,y,y.scopeId,q,F),ee){for(const ce in ee)ce!=="value"&&!Os(ce)&&i(U,ce,null,ee[ce],L,F);"value"in ee&&i(U,"value",null,ee.value,L),(M=ee.onVnodeBeforeMount)&&qt(M,F,y)}ne&&or(y,null,F,"beforeMount");const re=Ry(x,X);re&&X.beforeEnter(U),r(U,w,C),((M=ee&&ee.onVnodeMounted)||re||ne)&&mt(()=>{try{M&&qt(M,F,y),re&&X.enter(U),ne&&or(y,null,F,"mounted")}finally{}},x)},I=(y,w,C,F,x)=>{if(C&&b(y,C),F)for(let L=0;L<F.length;L++)b(y,F[L]);if(x){let L=x.subTree;if(w===L||Kd(L.type)&&(L.ssContent===w||L.ssFallback===w)){const q=x.vnode;I(y,q,q.scopeId,q.slotScopeIds,x.parent)}}},_=(y,w,C,F,x,L,q,j,U=0)=>{for(let M=U;M<y.length;M++){const ee=y[M]=j?hn(y[M]):Kt(y[M]);k(null,ee,w,C,F,x,L,q,j)}},v=(y,w,C,F,x,L,q)=>{const j=w.el=y.el;let{patchFlag:U,dynamicChildren:M,dirs:ee}=w;U|=y.patchFlag&16;const H=y.props||Ce,X=w.props||Ce;let ne;if(C&&ar(C,!1),(ne=X.onVnodeBeforeUpdate)&&qt(ne,C,w,y),ee&&or(w,y,C,"beforeUpdate"),C&&ar(C,!0),(H.innerHTML&&X.innerHTML==null||H.textContent&&X.textContent==null)&&d(j,""),M?T(y.dynamicChildren,M,j,C,F,Oa(w,x),L):q||_e(y,w,j,null,C,F,Oa(w,x),L,!1),U>0){if(U&16)A(j,H,X,C,x);else if(U&2&&H.class!==X.class&&i(j,"class",null,X.class,x),U&4&&i(j,"style",H.style,X.style,x),U&8){const re=w.dynamicProps;for(let ce=0;ce<re.length;ce++){const we=re[ce],Oe=H[we],Ue=X[we];(Ue!==Oe||we==="value")&&i(j,we,Oe,Ue,x,C)}}U&1&&y.children!==w.children&&d(j,w.children)}else!q&&M==null&&A(j,H,X,C,x);((ne=X.onVnodeUpdated)||ee)&&mt(()=>{ne&&qt(ne,C,w,y),ee&&or(w,y,C,"updated")},F)},T=(y,w,C,F,x,L,q)=>{for(let j=0;j<w.length;j++){const U=y[j],M=w[j],ee=U.el&&(U.type===Dt||!bs(U,M)||U.shapeFlag&198)?g(U.el):C;k(U,M,ee,null,F,x,L,q,!0)}},A=(y,w,C,F,x)=>{if(w!==C){if(w!==Ce)for(const L in w)!Os(L)&&!(L in C)&&i(y,L,w[L],null,x,F);for(const L in C){if(Os(L))continue;const q=C[L],j=w[L];q!==j&&L!=="value"&&i(y,L,j,q,x,F)}"value"in C&&i(y,"value",w.value,C.value,x)}},S=(y,w,C,F,x,L,q,j,U)=>{const M=w.el=y?y.el:l(""),ee=w.anchor=y?y.anchor:l("");let{patchFlag:H,dynamicChildren:X,slotScopeIds:ne}=w;ne&&(j=j?j.concat(ne):ne),y==null?(r(M,C,F),r(ee,C,F),_(w.children||[],C,ee,x,L,q,j,U)):H>0&&H&64&&X&&y.dynamicChildren&&y.dynamicChildren.length===X.length?(T(y.dynamicChildren,X,C,x,L,q,j),(w.key!=null||x&&w===x.subTree)&&Hd(y,w,!0)):_e(y,w,C,ee,x,L,q,j,U)},E=(y,w,C,F,x,L,q,j,U)=>{w.slotScopeIds=j,y==null?w.shapeFlag&512?x.ctx.activate(w,C,F,q,U):Ze(w,C,F,x,L,q,U):Ut(y,w,U)},Ze=(y,w,C,F,x,L,q)=>{const j=y.component=Ly(y,F,x);if(Pd(y)&&(j.ctx.renderer=jt),Uy(j,!1,q),j.asyncDep){if(x&&x.registerDep(j,$e,q),!y.el){const U=j.subTree=_n(zn);G(null,U,w,C),y.placeholder=U.el}}else $e(j,y,w,C,x,L,q)},Ut=(y,w,C)=>{const F=w.component=y.component;if(_y(y,w,C))if(F.asyncDep&&!F.asyncResolved){Te(F,w,C);return}else F.next=w,F.update();else w.el=y.el,F.vnode=w},$e=(y,w,C,F,x,L,q)=>{const j=()=>{if(y.isMounted){let{next:H,bu:X,u:ne,parent:re,vnode:ce}=y;{const et=zd(y);if(et){H&&(H.el=ce.el,Te(y,H,q)),et.asyncDep.then(()=>{mt(()=>{y.isUnmounted||M()},x)});return}}let we=H,Oe;ar(y,!1),H?(H.el=ce.el,Te(y,H,q)):H=ce,X&&Gi(X),(Oe=H.props&&H.props.onVnodeBeforeUpdate)&&qt(Oe,re,H,ce),ar(y,!0);const Ue=Ju(y),bt=y.subTree;y.subTree=Ue,k(bt,Ue,g(bt.el),At(bt),y,x,L),H.el=Ue.el,we===null&&yy(y,Ue.el),ne&&mt(ne,x),(Oe=H.props&&H.props.onVnodeUpdated)&&mt(()=>qt(Oe,re,H,ce),x)}else{let H;const{el:X,props:ne}=w,{bm:re,m:ce,parent:we,root:Oe,type:Ue}=y,bt=Fs(w);ar(y,!1),re&&Gi(re),!bt&&(H=ne&&ne.onVnodeBeforeMount)&&qt(H,we,w),ar(y,!0);{Oe.ce&&Oe.ce._hasShadowRoot()&&Oe.ce._injectChildStyle(Ue,y.parent?y.parent.type:void 0);const et=y.subTree=Ju(y);k(null,et,C,F,y,x,L),w.el=et.el}if(ce&&mt(ce,x),!bt&&(H=ne&&ne.onVnodeMounted)){const et=w;mt(()=>qt(H,we,et),x)}(w.shapeFlag&256||we&&Fs(we.vnode)&&we.vnode.shapeFlag&256)&&y.a&&mt(y.a,x),y.isMounted=!0,w=C=F=null}};y.scope.on();const U=y.effect=new id(j);y.scope.off();const M=y.update=U.run.bind(U),ee=y.job=U.runIfDirty.bind(U);ee.i=y,ee.id=y.uid,U.scheduler=()=>Ql(ee),ar(y,!0),M()},Te=(y,w,C)=>{w.component=y;const F=y.vnode.props;y.vnode=w,y.next=null,Ey(y,w.props,F,C),Ay(y,w.children,C),yn(),qu(y),vn()},_e=(y,w,C,F,x,L,q,j,U=!1)=>{const M=y&&y.children,ee=y?y.shapeFlag:0,H=w.children,{patchFlag:X,shapeFlag:ne}=w;if(X>0){if(X&128){W(M,H,C,F,x,L,q,j,U);return}else if(X&256){Y(M,H,C,F,x,L,q,j,U);return}}ne&8?(ee&16&&Bt(M,x,L),H!==M&&d(C,H)):ee&16?ne&16?W(M,H,C,F,x,L,q,j,U):Bt(M,x,L,!0):(ee&8&&d(C,""),ne&16&&_(H,C,F,x,L,q,j,U))},Y=(y,w,C,F,x,L,q,j,U)=>{y=y||Mr,w=w||Mr;const M=y.length,ee=w.length,H=Math.min(M,ee);let X;for(X=0;X<H;X++){const ne=w[X]=U?hn(w[X]):Kt(w[X]);k(y[X],ne,C,null,x,L,q,j,U)}M>ee?Bt(y,x,L,!0,!1,H):_(w,C,F,x,L,q,j,U,H)},W=(y,w,C,F,x,L,q,j,U)=>{let M=0;const ee=w.length;let H=y.length-1,X=ee-1;for(;M<=H&&M<=X;){const ne=y[M],re=w[M]=U?hn(w[M]):Kt(w[M]);if(bs(ne,re))k(ne,re,C,null,x,L,q,j,U);else break;M++}for(;M<=H&&M<=X;){const ne=y[H],re=w[X]=U?hn(w[X]):Kt(w[X]);if(bs(ne,re))k(ne,re,C,null,x,L,q,j,U);else break;H--,X--}if(M>H){if(M<=X){const ne=X+1,re=ne<ee?w[ne].el:F;for(;M<=X;)k(null,w[M]=U?hn(w[M]):Kt(w[M]),C,re,x,L,q,j,U),M++}}else if(M>X)for(;M<=H;)te(y[M],x,L,!0),M++;else{const ne=M,re=M,ce=new Map;for(M=re;M<=X;M++){const Ge=w[M]=U?hn(w[M]):Kt(w[M]);Ge.key!=null&&ce.set(Ge.key,M)}let we,Oe=0;const Ue=X-re+1;let bt=!1,et=0;const Pn=new Array(Ue);for(M=0;M<Ue;M++)Pn[M]=0;for(M=ne;M<=H;M++){const Ge=y[M];if(Oe>=Ue){te(Ge,x,L,!0);continue}let St;if(Ge.key!=null)St=ce.get(Ge.key);else for(we=re;we<=X;we++)if(Pn[we-re]===0&&bs(Ge,w[we])){St=we;break}St===void 0?te(Ge,x,L,!0):(Pn[St-re]=M+1,St>=et?et=St:bt=!0,k(Ge,w[St],C,null,x,L,q,j,U),Oe++)}const hs=bt?Py(Pn):Mr;for(we=hs.length-1,M=Ue-1;M>=0;M--){const Ge=re+M,St=w[Ge],wi=w[Ge+1],Ar=Ge+1<ee?wi.el||Wd(wi):F;Pn[M]===0?k(null,St,C,Ar,x,L,q,j,U):bt&&(we<0||M!==hs[we]?de(St,C,Ar,2):we--)}}},de=(y,w,C,F,x=null)=>{const{el:L,type:q,transition:j,children:U,shapeFlag:M}=y;if(M&6){de(y.component.subTree,w,C,F);return}if(M&128){y.suspense.move(w,C,F);return}if(M&64){q.move(y,w,C,jt);return}if(q===Dt){r(L,w,C);for(let H=0;H<U.length;H++)de(U[H],w,C,F);r(y.anchor,w,C);return}if(q===xa){Q(y,w,C);return}if(F!==2&&M&1&&j)if(F===0)j.beforeEnter(L),r(L,w,C),mt(()=>j.enter(L),x);else{const{leave:H,delayLeave:X,afterLeave:ne}=j,re=()=>{y.ctx.isUnmounted?s(L):r(L,w,C)},ce=()=>{L._isLeaving&&L[H_](!0),H(L,()=>{re(),ne&&ne()})};X?X(L,re,ce):ce()}else r(L,w,C)},te=(y,w,C,F=!1,x=!1)=>{const{type:L,props:q,ref:j,children:U,dynamicChildren:M,shapeFlag:ee,patchFlag:H,dirs:X,cacheIndex:ne,memo:re}=y;if(H===-2&&(x=!1),j!=null&&(yn(),Ls(j,null,C,y,!0),vn()),ne!=null&&(w.renderCache[ne]=void 0),ee&256){w.ctx.deactivate(y);return}const ce=ee&1&&X,we=!Fs(y);let Oe;if(we&&(Oe=q&&q.onVnodeBeforeUnmount)&&qt(Oe,w,y),ee&6)Rn(y.component,C,F);else{if(ee&128){y.suspense.unmount(C,F);return}ce&&or(y,null,w,"beforeUnmount"),ee&64?y.type.remove(y,w,C,jt,F):M&&!M.hasOnce&&(L!==Dt||H>0&&H&64)?Bt(M,w,C,!1,!0):(L===Dt&&H&384||!x&&ee&16)&&Bt(U,w,C),F&&Ie(y)}const Ue=re!=null&&ne==null;(we&&(Oe=q&&q.onVnodeUnmounted)||ce||Ue)&&mt(()=>{Oe&&qt(Oe,w,y),ce&&or(y,null,w,"unmounted"),Ue&&(y.el=null)},C)},Ie=y=>{const{type:w,el:C,anchor:F,transition:x}=y;if(w===Dt){ls(C,F);return}if(w===xa){z(y);return}const L=()=>{s(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(y.shapeFlag&1&&x&&!x.persisted){const{leave:q,delayLeave:j}=x,U=()=>q(C,L);j?j(y.el,L,U):U()}else L()},ls=(y,w)=>{let C;for(;y!==w;)C=m(y),s(y),y=C;s(w)},Rn=(y,w,C)=>{const{bum:F,scope:x,job:L,subTree:q,um:j,m:U,a:M}=y;Zu(U),Zu(M),F&&Gi(F),x.stop(),L&&(L.flags|=8,te(q,y,w,C)),j&&mt(j,w),mt(()=>{y.isUnmounted=!0},w)},Bt=(y,w,C,F=!1,x=!1,L=0)=>{for(let q=L;q<y.length;q++)te(y[q],w,C,F,x)},At=y=>{if(y.shapeFlag&6)return At(y.component.subTree);if(y.shapeFlag&128)return y.suspense.next();const w=m(y.anchor||y.el),C=w&&w[$_];return C?m(C):w};let cs=!1;const Ii=(y,w,C)=>{let F;y==null?w._vnode&&(te(w._vnode,null,null,!0),F=w._vnode.component):k(w._vnode||null,y,w,null,null,null,C),w._vnode=y,cs||(cs=!0,qu(F),Id(),cs=!1)},jt={p:k,um:te,m:de,r:Ie,mt:Ze,mc:_,pc:_e,pbc:T,n:At,o:n};return{render:Ii,hydrate:void 0,createApp:hy(Ii)}}function Oa({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ar({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ry(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Hd(n,e,t=!1){const r=n.children,s=e.children;if(ae(r)&&ae(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=hn(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&Hd(a,l)),l.type===Ho&&(l.patchFlag===-1&&(l=s[i]=hn(l)),l.el=a.el),l.type===zn&&!l.el&&(l.el=a.el)}}function Py(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<h?i=l+1:a=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function zd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:zd(e)}function Zu(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Wd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Wd(e.subTree):null}const Kd=n=>n.__isSuspense;function Cy(n,e){e&&e.pendingBranch?ae(n)?e.effects.push(...n):e.effects.push(n):x_(n)}const Dt=Symbol.for("v-fgt"),Ho=Symbol.for("v-txt"),zn=Symbol.for("v-cmt"),xa=Symbol.for("v-stc"),Bs=[];let Tt=null;function gt(n=!1){Bs.push(Tt=n?null:[])}function ky(){Bs.pop(),Tt=Bs[Bs.length-1]||null}let Xs=1;function eh(n,e=!1){Xs+=n,n<0&&Tt&&e&&(Tt.hasOnce=!0)}function Gd(n){return n.dynamicChildren=Xs>0?Tt||Mr:null,ky(),Xs>0&&Tt&&Tt.push(n),n}function Et(n,e,t,r,s,i){return Gd(he(n,e,t,r,s,i,!0))}function Vy(n,e,t,r,s){return Gd(_n(n,e,t,r,s,!0))}function Qd(n){return n?n.__v_isVNode===!0:!1}function bs(n,e){return n.type===e.type&&n.key===e.key}const Jd=({key:n})=>n??null,Xi=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Le(n)||lt(n)||ue(n)?{i:Ct,r:n,k:e,f:!!t}:n:null);function he(n,e=null,t=null,r=0,s=null,i=n===Dt?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Jd(e),ref:e&&Xi(e),scopeId:Ad,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ct};return l?(ec(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Le(t)?8:16),Xs>0&&!a&&Tt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&Tt.push(c),c}const _n=Dy;function Dy(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===ny)&&(n=zn),Qd(n)){const l=Wr(n,e,!0);return t&&ec(l,t),Xs>0&&!i&&Tt&&(l.shapeFlag&6?Tt[Tt.indexOf(n)]=l:Tt.push(l)),l.patchFlag=-2,l}if(qy(n)&&(n=n.__vccOpts),e){e=Ny(e);let{class:l,style:c}=e;l&&!Le(l)&&(e.class=Ks(l)),Re(c)&&(Gl(c)&&!ae(c)&&(c=ct({},c)),e.style=Uo(c))}const a=Le(n)?1:Kd(n)?128:q_(n)?64:Re(n)?4:ue(n)?2:0;return he(n,e,t,r,s,a,i,!0)}function Ny(n){return n?Gl(n)||Fd(n)?ct({},n):n:null}function Wr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,h=e?Oy(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&Jd(h),ref:e&&e.ref?t&&i?ae(i)?i.concat(Xi(e)):[i,Xi(e)]:Xi(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Dt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Wr(n.ssContent),ssFallback:n.ssFallback&&Wr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&Jl(d,c.clone(d)),d}function Xd(n=" ",e=0){return _n(Ho,null,n,e)}function Ma(n="",e=!1){return e?(gt(),Vy(zn,null,n)):_n(zn,null,n)}function Kt(n){return n==null||typeof n=="boolean"?_n(zn):ae(n)?_n(Dt,null,n.slice()):Qd(n)?hn(n):_n(Ho,null,String(n))}function hn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Wr(n)}function ec(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ae(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),ec(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Fd(e)?e._ctx=Ct:s===3&&Ct&&(Ct.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ue(e)?(e={default:e,_ctx:Ct},t=32):(e=String(e),r&64?(t=16,e=[Xd(e)]):t=8);n.children=e,n.shapeFlag|=t}function Oy(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ks([e.class,r.class]));else if(s==="style")e.style=Uo([e.style,r.style]);else if(xo(s)){const i=e[s],a=r[s];a&&i!==a&&!(ae(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!Mo(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function qt(n,e,t,r=null){nn(n,e,7,[t,r])}const xy=Nd();let My=0;function Ly(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||xy,i={uid:My++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new n_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Bd(r,s),emitsOptions:Od(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=dy.bind(null,i),n.ce&&n.ce(i),i}let pt=null;const Fy=()=>pt||Ct;let go,cl;{const n=Fo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};go=e("__VUE_INSTANCE_SETTERS__",t=>pt=t),cl=e("__VUE_SSR_SETTERS__",t=>Ys=t)}const ui=n=>{const e=pt;return go(n),n.scope.on(),()=>{n.scope.off(),go(e)}},th=()=>{pt&&pt.scope.off(),go(null)};function Yd(n){return n.vnode.shapeFlag&4}let Ys=!1;function Uy(n,e=!1,t=!1){e&&cl(e);const{props:r,children:s}=n.vnode,i=Yd(n);vy(n,r,i,e),wy(n,s,t||e);const a=i?By(n,e):void 0;return e&&cl(!1),a}function By(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,sy);const{setup:r}=t;if(r){yn();const s=n.setupContext=r.length>1?$y(n):null,i=ui(n),a=ci(r,n,0,[n.props,s]),l=Xf(a);if(vn(),i(),(l||n.sp)&&!Fs(n)&&Rd(n),l){if(a.then(th,th),e)return a.then(c=>{nh(n,c)}).catch(c=>{jo(c,n,0)});n.asyncDep=a}else nh(n,a)}else Zd(n)}function nh(n,e,t){ue(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Re(e)&&(n.setupState=vd(e)),Zd(n)}function Zd(n,e,t){const r=n.type;n.render||(n.render=r.render||Qt);{const s=ui(n);yn();try{iy(n)}finally{vn(),s()}}}const jy={get(n,e){return ot(n,"get",""),n[e]}};function $y(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,jy),slots:n.slots,emit:n.emit,expose:e}}function zo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(vd(w_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Us)return Us[t](n)},has(e,t){return t in e||t in Us}})):n.proxy}function qy(n){return ue(n)&&"__vccOpts"in n}const Yi=(n,e)=>C_(n,e,Ys),Hy="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ul;const rh=typeof window<"u"&&window.trustedTypes;if(rh)try{ul=rh.createPolicy("vue",{createHTML:n=>n})}catch{}const ep=ul?n=>ul.createHTML(n):n=>n,zy="http://www.w3.org/2000/svg",Wy="http://www.w3.org/1998/Math/MathML",un=typeof document<"u"?document:null,sh=un&&un.createElement("template"),Ky={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?un.createElementNS(zy,n):e==="mathml"?un.createElementNS(Wy,n):t?un.createElement(n,{is:t}):un.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>un.createTextNode(n),createComment:n=>un.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>un.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{sh.innerHTML=ep(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=sh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},Gy=Symbol("_vtc");function Qy(n,e,t){const r=n[Gy];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ih=Symbol("_vod"),Jy=Symbol("_vsh"),Xy=Symbol(""),Yy=/(?:^|;)\s*display\s*:/;function Zy(n,e,t){const r=n.style,s=Le(t);let i=!1;if(t&&!s){if(e)if(Le(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&Cs(r,l,"")}else for(const a in e)t[a]==null&&Cs(r,a,"");for(const a in t){a==="display"&&(i=!0);const l=t[a];l!=null?tv(n,a,!Le(e)&&e?e[a]:void 0,l)||Cs(r,a,l):Cs(r,a,"")}}else if(s){if(e!==t){const a=r[Xy];a&&(t+=";"+a),r.cssText=t,i=Yy.test(t)}}else e&&n.removeAttribute("style");ih in n&&(n[ih]=i?r.display:"",n[Jy]&&(r.display="none"))}const oh=/\s*!important$/;function Cs(n,e,t){if(ae(t))t.forEach(r=>Cs(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=ev(n,e);oh.test(t)?n.setProperty(Zn(r),t.replace(oh,""),"important"):n[r]=t}}const ah=["Webkit","Moz","ms"],La={};function ev(n,e){const t=La[e];if(t)return t;let r=xt(e);if(r!=="filter"&&r in n)return La[e]=r;r=ed(r);for(let s=0;s<ah.length;s++){const i=ah[s]+r;if(i in n)return La[e]=i}return e}function tv(n,e,t,r){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Le(r)&&t===r}const lh="http://www.w3.org/1999/xlink";function ch(n,e,t,r,s,i=e_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(lh,e.slice(6,e.length)):n.setAttributeNS(lh,e,t):t==null||i&&!nd(t)?n.removeAttribute(e):n.setAttribute(e,i?"":tn(t)?String(t):t)}function uh(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?ep(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=nd(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function Vr(n,e,t,r){n.addEventListener(e,t,r)}function nv(n,e,t,r){n.removeEventListener(e,t,r)}const hh=Symbol("_vei");function rv(n,e,t,r,s=null){const i=n[hh]||(n[hh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=sv(e);if(r){const h=i[e]=av(r,s);Vr(n,l,h,c)}else a&&(nv(n,l,a,c),i[e]=void 0)}}const fh=/(?:Once|Passive|Capture)$/;function sv(n){let e;if(fh.test(n)){e={};let r;for(;r=n.match(fh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Zn(n.slice(2)),e]}let Fa=0;const iv=Promise.resolve(),ov=()=>Fa||(iv.then(()=>Fa=0),Fa=Date.now());function av(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;nn(lv(r,t.value),e,5,[r])};return t.value=n,t.attached=ov(),t}function lv(n,e){if(ae(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const dh=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,cv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?Qy(n,r,a):e==="style"?Zy(n,t,r):xo(e)?Mo(e)||rv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):uv(n,e,r,a))?(uh(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&ch(n,e,r,a,i,e!=="value")):n._isVueCE&&(hv(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Le(r)))?uh(n,xt(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),ch(n,e,r,a))};function uv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&dh(e)&&ue(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return dh(e)&&Le(t)?!1:e in n}function hv(n,e){const t=n._def.props;if(!t)return!1;const r=xt(e);return Array.isArray(t)?t.some(s=>xt(s)===r):Object.keys(t).some(s=>xt(s)===r)}const ph=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ae(e)?t=>Gi(e,t):e};function fv(n){n.target.composing=!0}function gh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Ua=Symbol("_assign");function mh(n,e,t){return e&&(n=n.trim()),t&&(n=Ul(n)),n}const dv={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Ua]=ph(s);const i=r||s.props&&s.props.type==="number";Vr(n,e?"change":"input",a=>{a.target.composing||n[Ua](mh(n.value,t,i))}),(t||i)&&Vr(n,"change",()=>{n.value=mh(n.value,t,i)}),e||(Vr(n,"compositionstart",fv),Vr(n,"compositionend",gh),Vr(n,"change",gh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Ua]=ph(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?Ul(n.value):n.value,c=e??"";if(l===c)return;const h=n.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c)}},pv=["ctrl","shift","alt","meta"],gv={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>pv.some(t=>n[`${t}Key`]&&!e.includes(t))},Ba=(n,e)=>{if(!n)return n;const t=n._withMods||(n._withMods={}),r=e.join(".");return t[r]||(t[r]=((s,...i)=>{for(let a=0;a<e.length;a++){const l=gv[e[a]];if(l&&l(s,e))return}return n(s,...i)}))},mv={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},_v=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=(s=>{if(!("key"in s))return;const i=Zn(s.key);if(e.some(a=>a===i||mv[a]===i))return n(s)}))},yv=ct({patchProp:cv},Ky);let _h;function vv(){return _h||(_h=by(yv))}const Ev=((...n)=>{const e=vv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Iv(r);if(!s)return;const i=e._component;!ue(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,Tv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function Tv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Iv(n){return Le(n)?document.querySelector(n):n}const wv=()=>{};var yh={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tp=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Av=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},np={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,d=i>>2,g=(i&3)<<4|l>>4;let m=(l&15)<<2|h>>6,b=h&63;c||(b=64,a||(m=64)),r.push(t[d],t[g],t[m],t[b])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(tp(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Av(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new bv;const m=i<<2|l>>4;if(r.push(m),h!==64){const b=l<<4&240|h>>2;if(r.push(b),g!==64){const V=h<<6&192|g;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sv=function(n){const e=tp(n);return np.encodeByteArray(e,!0)},mo=function(n){return Sv(n).replace(/\./g,"")},rp=function(n){try{return np.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pv=()=>Rv().__FIREBASE_DEFAULTS__,Cv=()=>{if(typeof process>"u"||typeof yh>"u")return;const n=yh.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kv=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&rp(n[1]);return e&&JSON.parse(e)},Wo=()=>{try{return wv()||Pv()||Cv()||kv()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},sp=n=>{var e,t;return(t=(e=Wo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},Vv=n=>{const e=sp(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ip=()=>{var n;return(n=Wo())===null||n===void 0?void 0:n.config},op=n=>{var e;return(e=Wo())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ts(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ap(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[mo(JSON.stringify(t)),mo(JSON.stringify(a)),""].join(".")}const js={};function Ov(){const n={prod:[],emulator:[]};for(const e of Object.keys(js))js[e]?n.emulator.push(e):n.prod.push(e);return n}function xv(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let vh=!1;function lp(n,e){if(typeof window>"u"||typeof document>"u"||!ts(window.location.host)||js[n]===e||js[n]||vh)return;js[n]=e;function t(m){return`__firebase__banner__${m}`}const r="__firebase__banner",i=Ov().prod.length>0;function a(){const m=document.getElementById(r);m&&m.remove()}function l(m){m.style.display="flex",m.style.background="#7faaf0",m.style.position="fixed",m.style.bottom="5px",m.style.left="5px",m.style.padding=".5em",m.style.borderRadius="5px",m.style.alignItems="center"}function c(m,b){m.setAttribute("width","24"),m.setAttribute("id",b),m.setAttribute("height","24"),m.setAttribute("viewBox","0 0 24 24"),m.setAttribute("fill","none"),m.style.marginLeft="-6px"}function h(){const m=document.createElement("span");return m.style.cursor="pointer",m.style.marginLeft="16px",m.style.fontSize="24px",m.innerHTML=" &times;",m.onclick=()=>{vh=!0,a()},m}function d(m,b){m.setAttribute("id",b),m.innerText="Learn more",m.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",m.setAttribute("target","__blank"),m.style.paddingLeft="5px",m.style.textDecoration="underline"}function g(){const m=xv(r),b=t("text"),V=document.getElementById(b)||document.createElement("span"),k=t("learnmore"),N=document.getElementById(k)||document.createElement("a"),G=t("preprendIcon"),$=document.getElementById(G)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(m.created){const Q=m.element;l(Q),d(N,k);const z=h();c($,G),Q.append($,V,N,z),document.body.appendChild(Q)}i?(V.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):($.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",b)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Mv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ut())}function Lv(){var n;const e=(n=Wo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Uv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Bv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function jv(){const n=ut();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function $v(){return!Lv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function qv(){try{return typeof indexedDB=="object"}catch{return!1}}function Hv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="FirebaseError";class Sn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=zv,Object.setPrototypeOf(this,Sn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hi.prototype.create)}}class hi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Wv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new Sn(s,l,r)}}function Wv(n,e){return n.replace(Kv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Kv=/\{\$([^}]+)}/g;function Gv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function _r(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Eh(i)&&Eh(a)){if(!_r(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Eh(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Qv(n,e){const t=new Jv(n,e);return t.subscribe.bind(t)}class Jv{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Xv(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=ja),s.error===void 0&&(s.error=ja),s.complete===void 0&&(s.complete=ja);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Xv(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function ja(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n){return n&&n._delegate?n._delegate:n}class yr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yv{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Dv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eE(e))try{this.getOrInitializeService({instanceIdentifier:cr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=cr){return this.instances.has(e)}getOptions(e=cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zv(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=cr){return this.component?this.component.multipleInstances?e:cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zv(n){return n===cr?void 0:n}function eE(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Yv(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(pe||(pe={}));const nE={debug:pe.DEBUG,verbose:pe.VERBOSE,info:pe.INFO,warn:pe.WARN,error:pe.ERROR,silent:pe.SILENT},rE=pe.INFO,sE={[pe.DEBUG]:"log",[pe.VERBOSE]:"log",[pe.INFO]:"info",[pe.WARN]:"warn",[pe.ERROR]:"error"},iE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=sE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class tc{constructor(e){this.name=e,this._logLevel=rE,this._logHandler=iE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in pe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,pe.DEBUG,...e),this._logHandler(this,pe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,pe.VERBOSE,...e),this._logHandler(this,pe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,pe.INFO,...e),this._logHandler(this,pe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,pe.WARN,...e),this._logHandler(this,pe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,pe.ERROR,...e),this._logHandler(this,pe.ERROR,...e)}}const oE=(n,e)=>e.some(t=>n instanceof t);let Th,Ih;function aE(){return Th||(Th=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lE(){return Ih||(Ih=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const cp=new WeakMap,hl=new WeakMap,up=new WeakMap,$a=new WeakMap,nc=new WeakMap;function cE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(Un(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&cp.set(t,n)}).catch(()=>{}),nc.set(e,n),e}function uE(n){if(hl.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});hl.set(n,e)}let fl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return hl.get(n);if(e==="objectStoreNames")return n.objectStoreNames||up.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Un(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hE(n){fl=n(fl)}function fE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(qa(this),e,...t);return up.set(r,e.sort?e.sort():[e]),Un(r)}:lE().includes(n)?function(...e){return n.apply(qa(this),e),Un(cp.get(this))}:function(...e){return Un(n.apply(qa(this),e))}}function dE(n){return typeof n=="function"?fE(n):(n instanceof IDBTransaction&&uE(n),oE(n,aE())?new Proxy(n,fl):n)}function Un(n){if(n instanceof IDBRequest)return cE(n);if($a.has(n))return $a.get(n);const e=dE(n);return e!==n&&($a.set(n,e),nc.set(e,n)),e}const qa=n=>nc.get(n);function pE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=Un(a);return r&&a.addEventListener("upgradeneeded",c=>{r(Un(a.result),c.oldVersion,c.newVersion,Un(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const gE=["get","getKey","getAll","getAllKeys","count"],mE=["put","add","delete","clear"],Ha=new Map;function wh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Ha.get(e))return Ha.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=mE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||gE.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return Ha.set(e,i),i}hE(n=>({...n,get:(e,t,r)=>wh(e,t)||n.get(e,t,r),has:(e,t)=>!!wh(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _E{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(yE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function yE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dl="@firebase/app",Ah="0.13.2";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tn=new tc("@firebase/app"),vE="@firebase/app-compat",EE="@firebase/analytics-compat",TE="@firebase/analytics",IE="@firebase/app-check-compat",wE="@firebase/app-check",AE="@firebase/auth",bE="@firebase/auth-compat",SE="@firebase/database",RE="@firebase/data-connect",PE="@firebase/database-compat",CE="@firebase/functions",kE="@firebase/functions-compat",VE="@firebase/installations",DE="@firebase/installations-compat",NE="@firebase/messaging",OE="@firebase/messaging-compat",xE="@firebase/performance",ME="@firebase/performance-compat",LE="@firebase/remote-config",FE="@firebase/remote-config-compat",UE="@firebase/storage",BE="@firebase/storage-compat",jE="@firebase/firestore",$E="@firebase/ai",qE="@firebase/firestore-compat",HE="firebase",zE="11.10.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl="[DEFAULT]",WE={[dl]:"fire-core",[vE]:"fire-core-compat",[TE]:"fire-analytics",[EE]:"fire-analytics-compat",[wE]:"fire-app-check",[IE]:"fire-app-check-compat",[AE]:"fire-auth",[bE]:"fire-auth-compat",[SE]:"fire-rtdb",[RE]:"fire-data-connect",[PE]:"fire-rtdb-compat",[CE]:"fire-fn",[kE]:"fire-fn-compat",[VE]:"fire-iid",[DE]:"fire-iid-compat",[NE]:"fire-fcm",[OE]:"fire-fcm-compat",[xE]:"fire-perf",[ME]:"fire-perf-compat",[LE]:"fire-rc",[FE]:"fire-rc-compat",[UE]:"fire-gcs",[BE]:"fire-gcs-compat",[jE]:"fire-fst",[qE]:"fire-fst-compat",[$E]:"fire-vertex","fire-js":"fire-js",[HE]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o=new Map,KE=new Map,gl=new Map;function bh(n,e){try{n.container.addComponent(e)}catch(t){Tn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kr(n){const e=n.name;if(gl.has(e))return Tn.debug(`There were multiple attempts to register component ${e}.`),!1;gl.set(e,n);for(const t of _o.values())bh(t,n);for(const t of KE.values())bh(t,n);return!0}function rc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Nt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Bn=new hi("app","Firebase",GE);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new yr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Bn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ns=zE;function hp(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Bn.create("bad-app-name",{appName:String(s)});if(t||(t=ip()),!t)throw Bn.create("no-options");const i=_o.get(s);if(i){if(_r(t,i.options)&&_r(r,i.config))return i;throw Bn.create("duplicate-app",{appName:s})}const a=new tE(s);for(const c of gl.values())a.addComponent(c);const l=new QE(t,r,a);return _o.set(s,l),l}function fp(n=pl){const e=_o.get(n);if(!e&&n===pl&&ip())return hp();if(!e)throw Bn.create("no-app",{appName:n});return e}function jn(n,e,t){var r;let s=(r=WE[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Tn.warn(l.join(" "));return}Kr(new yr(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JE="firebase-heartbeat-database",XE=1,Zs="firebase-heartbeat-store";let za=null;function dp(){return za||(za=pE(JE,XE,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Zs)}catch(t){console.warn(t)}}}}).catch(n=>{throw Bn.create("idb-open",{originalErrorMessage:n.message})})),za}async function YE(n){try{const t=(await dp()).transaction(Zs),r=await t.objectStore(Zs).get(pp(n));return await t.done,r}catch(e){if(e instanceof Sn)Tn.warn(e.message);else{const t=Bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Tn.warn(t.message)}}}async function Sh(n,e){try{const r=(await dp()).transaction(Zs,"readwrite");await r.objectStore(Zs).put(e,pp(n)),await r.done}catch(t){if(t instanceof Sn)Tn.warn(t.message);else{const r=Bn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Tn.warn(r.message)}}}function pp(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZE=1024,eT=30;class tT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=Rh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>eT){const a=sT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){Tn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Rh(),{heartbeatsToSend:r,unsentEntries:s}=nT(this._heartbeatsCache.heartbeats),i=mo(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return Tn.warn(t),""}}}function Rh(){return new Date().toISOString().substring(0,10)}function nT(n,e=ZE){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Ph(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Ph(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class rT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return qv()?Hv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await YE(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Sh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Ph(n){return mo(JSON.stringify({version:2,heartbeats:n})).length}function sT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iT(n){Kr(new yr("platform-logger",e=>new _E(e),"PRIVATE")),Kr(new yr("heartbeat",e=>new tT(e),"PRIVATE")),jn(dl,Ah,n),jn(dl,Ah,"esm2017"),jn("fire-js","")}iT("");function sc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function gp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const oT=gp,mp=new hi("auth","Firebase",gp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yo=new tc("@firebase/auth");function aT(n,...e){yo.logLevel<=pe.WARN&&yo.warn(`Auth (${ns}): ${n}`,...e)}function Zi(n,...e){yo.logLevel<=pe.ERROR&&yo.error(`Auth (${ns}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(n,...e){throw oc(n,...e)}function Lt(n,...e){return oc(n,...e)}function ic(n,e,t){const r=Object.assign(Object.assign({},oT()),{[e]:t});return new hi("auth","Firebase",r).create(e,{appName:n.name})}function pr(n){return ic(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function lT(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&rn(n,"argument-error"),ic(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function oc(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return mp.create(n,...e)}function ie(n,e,...t){if(!n)throw oc(e,...t)}function gn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Zi(e),new Error(e)}function In(n,e){n||gn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ml(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function cT(){return Ch()==="http:"||Ch()==="https:"}function Ch(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(cT()||Uv()||"connection"in navigator)?navigator.onLine:!0}function hT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e,t){this.shortDelay=e,this.longDelay=t,In(t>e,"Short delay should be less than long delay!"),this.isMobile=Mv()||Bv()}get(){return uT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ac(n,e){In(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dT=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],pT=new di(3e4,6e4);function lc(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function rs(n,e,t,r,s={}){return yp(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=fi(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return Fv()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ts(n.emulatorConfig.host)&&(h.credentials="include"),_p.fetch()(await vp(n,n.config.apiHost,t,l),h)})}async function yp(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},fT),e);try{const s=new mT(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw $i(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $i(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw $i(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw $i(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw ic(n,d,h);rn(n,d)}}catch(s){if(s instanceof Sn)throw s;rn(n,"network-request-failed",{message:String(s)})}}async function gT(n,e,t,r,s={}){const i=await rs(n,e,t,r,s);return"mfaPendingCredential"in i&&rn(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function vp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?ac(n.config,s):`${n.config.apiScheme}://${s}`;return dT.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class mT{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Lt(this.auth,"network-request-failed")),pT.get())})}}function $i(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Lt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _T(n,e){return rs(n,"POST","/v1/accounts:delete",e)}async function vo(n,e){return rs(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $s(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yT(n,e=!1){const t=We(n),r=await t.getIdToken(e),s=cc(r);ie(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:$s(Wa(s.auth_time)),issuedAtTime:$s(Wa(s.iat)),expirationTime:$s(Wa(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Wa(n){return Number(n)*1e3}function cc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Zi("JWT malformed, contained fewer than 3 sections"),null;try{const s=rp(t);return s?JSON.parse(s):(Zi("Failed to decode base64 JWT payload"),null)}catch(s){return Zi("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function kh(n){const e=cc(n);return ie(e,"internal-error"),ie(typeof e.exp<"u","internal-error"),ie(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ei(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Sn&&vT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function vT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ET{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$s(this.lastLoginAt),this.creationTime=$s(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(n){var e;const t=n.auth,r=await n.getIdToken(),s=await ei(n,vo(t,{idToken:r}));ie(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Ep(i.providerUserInfo):[],l=IT(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new _l(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,g)}async function TT(n){const e=We(n);await Eo(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function IT(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Ep(n){return n.map(e=>{var{providerId:t}=e,r=sc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wT(n,e){const t=await yp(n,{},async()=>{const r=fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await vp(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&ts(n.emulatorConfig.host)&&(c.credentials="include"),_p.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function AT(n,e){return rs(n,"POST","/v2/accounts:revokeToken",lc(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ie(e.idToken,"internal-error"),ie(typeof e.idToken<"u","internal-error"),ie(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ie(e.length!==0,"internal-error");const t=kh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ie(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await wT(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Br;return r&&(ie(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ie(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ie(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(n,e){ie(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ot{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=sc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ET(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new _l(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ei(this,this.stsTokenManager.getToken(this.auth,e));return ie(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return yT(this,e)}reload(){return TT(this)}_assign(e){this!==e&&(ie(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ie(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await Eo(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Nt(this.auth.app))return Promise.reject(pr(this.auth));const e=await this.getIdToken();return await ei(this,_T(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,d;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,m=(s=t.email)!==null&&s!==void 0?s:void 0,b=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=t.photoURL)!==null&&a!==void 0?a:void 0,k=(l=t.tenantId)!==null&&l!==void 0?l:void 0,N=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,G=(h=t.createdAt)!==null&&h!==void 0?h:void 0,$=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:Q,emailVerified:z,isAnonymous:me,providerData:ve,stsTokenManager:I}=t;ie(Q&&I,e,"internal-error");const _=Br.fromJSON(this.name,I);ie(typeof Q=="string",e,"internal-error"),Dn(g,e.name),Dn(m,e.name),ie(typeof z=="boolean",e,"internal-error"),ie(typeof me=="boolean",e,"internal-error"),Dn(b,e.name),Dn(V,e.name),Dn(k,e.name),Dn(N,e.name),Dn(G,e.name),Dn($,e.name);const v=new Ot({uid:Q,auth:e,email:m,emailVerified:z,displayName:g,isAnonymous:me,photoURL:V,phoneNumber:b,tenantId:k,stsTokenManager:_,createdAt:G,lastLoginAt:$});return ve&&Array.isArray(ve)&&(v.providerData=ve.map(T=>Object.assign({},T))),N&&(v._redirectEventId=N),v}static async _fromIdTokenResponse(e,t,r=!1){const s=new Br;s.updateFromServerResponse(t);const i=new Ot({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Eo(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ie(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Ep(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Br;l.updateFromIdToken(r);const c=new Ot({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new _l(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vh=new Map;function mn(n){In(n instanceof Function,"Expected a class definition");let e=Vh.get(n);return e?(In(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Vh.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Tp.type="NONE";const Dh=Tp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eo(n,e,t){return`firebase:${n}:${e}:${t}`}class jr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=eo(this.userKey,s.apiKey,i),this.fullPersistenceKey=eo("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await vo(this.auth,{idToken:e}).catch(()=>{});return t?Ot._fromGetAccountInfoResponse(this.auth,t,e):null}return Ot._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new jr(mn(Dh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||mn(Dh);const a=eo(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const d=await h._get(a);if(d){let g;if(typeof d=="string"){const m=await vo(e,{idToken:d}).catch(()=>{});if(!m)break;g=await Ot._fromGetAccountInfoResponse(e,m,d)}else g=Ot._fromJSON(e,d);h!==i&&(l=g),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new jr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new jr(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(bp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ip(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Rp(e))return"Blackberry";if(Pp(e))return"Webos";if(wp(e))return"Safari";if((e.includes("chrome/")||Ap(e))&&!e.includes("edge/"))return"Chrome";if(Sp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ip(n=ut()){return/firefox\//i.test(n)}function wp(n=ut()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ap(n=ut()){return/crios\//i.test(n)}function bp(n=ut()){return/iemobile/i.test(n)}function Sp(n=ut()){return/android/i.test(n)}function Rp(n=ut()){return/blackberry/i.test(n)}function Pp(n=ut()){return/webos/i.test(n)}function uc(n=ut()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function bT(n=ut()){var e;return uc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ST(){return jv()&&document.documentMode===10}function Cp(n=ut()){return uc(n)||Sp(n)||Pp(n)||Rp(n)||/windows phone/i.test(n)||bp(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(n,e=[]){let t;switch(n){case"Browser":t=Nh(ut());break;case"Worker":t=`${Nh(ut())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ns}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PT(n,e={}){return rs(n,"GET","/v2/passwordPolicy",lc(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CT=6;class kT{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:CT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oh(this),this.idTokenSubscription=new Oh(this),this.beforeStateQueue=new RT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=mp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=mn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await vo(this,{idToken:e}),r=await Ot._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Nt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ie(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Eo(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Nt(this.app))return Promise.reject(pr(this));const t=e?We(e):null;return t&&ie(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ie(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Nt(this.app)?Promise.reject(pr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Nt(this.app)?Promise.reject(pr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(mn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await PT(this),t=new kT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new hi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await AT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&mn(e)||this._popupRedirectResolver;ie(t,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[mn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ie(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ie(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=kp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Nt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&aT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ko(n){return We(n)}class Oh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qv(t=>this.observer=t)}get next(){return ie(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function DT(n){hc=n}function NT(n){return hc.loadJS(n)}function OT(){return hc.gapiScript}function xT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function MT(n,e){const t=rc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(_r(i,e??{}))return s;rn(s,"already-initialized")}return t.initialize({options:e})}function LT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(mn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function FT(n,e,t){const r=Ko(n);ie(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Vp(e),{host:a,port:l}=UT(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ie(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ie(_r(h,r.config.emulator)&&_r(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ts(a)?(ap(`${i}//${a}${c}`),lp("Auth",!0)):BT()}function Vp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function UT(n){const e=Vp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:xh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:xh(a)}}}function xh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function BT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gn("not implemented")}_getIdTokenResponse(e){return gn("not implemented")}_linkToIdToken(e,t){return gn("not implemented")}_getReauthenticationResolver(e){return gn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $r(n,e){return gT(n,"POST","/v1/accounts:signInWithIdp",lc(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jT="http://localhost";class vr extends Dp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new vr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rn("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=sc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new vr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return $r(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,$r(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$r(e,t)}buildRequest(){const e={requestUri:jT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi extends fc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn extends pi{constructor(){super("facebook.com")}static credential(e){return vr._fromParams({providerId:xn.PROVIDER_ID,signInMethod:xn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return xn.credentialFromTaggedObject(e)}static credentialFromError(e){return xn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return xn.credential(e.oauthAccessToken)}catch{return null}}}xn.FACEBOOK_SIGN_IN_METHOD="facebook.com";xn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pn extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return vr._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return pn.credential(t,r)}catch{return null}}}pn.GOOGLE_SIGN_IN_METHOD="google.com";pn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends pi{constructor(){super("github.com")}static credential(e){return vr._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Mn.credential(e.oauthAccessToken)}catch{return null}}}Mn.GITHUB_SIGN_IN_METHOD="github.com";Mn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends pi{constructor(){super("twitter.com")}static credential(e,t){return vr._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Ln.credential(t,r)}catch{return null}}}Ln.TWITTER_SIGN_IN_METHOD="twitter.com";Ln.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await Ot._fromIdTokenResponse(e,r,s),a=Mh(r);return new Gr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Mh(r);return new Gr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Mh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class To extends Sn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,To.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new To(e,t,r,s)}}function Np(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?To._fromErrorAndOperation(n,i,e,r):i})}async function $T(n,e,t=!1){const r=await ei(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Gr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qT(n,e,t=!1){const{auth:r}=n;if(Nt(r.app))return Promise.reject(pr(r));const s="reauthenticate";try{const i=await ei(n,Np(r,s,e,n),t);ie(i.idToken,r,"internal-error");const a=cc(i.idToken);ie(a,r,"internal-error");const{sub:l}=a;return ie(n.uid===l,r,"user-mismatch"),Gr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rn(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT(n,e,t=!1){if(Nt(n.app))return Promise.reject(pr(n));const r="signIn",s=await Np(n,r,e),i=await Gr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function zT(n,e,t,r){return We(n).onIdTokenChanged(e,t,r)}function WT(n,e,t){return We(n).beforeAuthStateChanged(e,t)}function KT(n,e,t,r){return We(n).onAuthStateChanged(e,t,r)}function GT(n){return We(n).signOut()}const Io="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Op{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Io,"1"),this.storage.removeItem(Io),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QT=1e3,JT=10;class xp extends Op{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Cp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);ST()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,JT):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},QT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}xp.type="LOCAL";const XT=xp;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mp extends Op{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Mp.type="SESSION";const Lp=Mp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YT(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Go(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await YT(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=dc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const m=g;if(m.data.eventId===h)switch(m.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(m.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(){return window}function eI(n){Jt().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fp(){return typeof Jt().WorkerGlobalScope<"u"&&typeof Jt().importScripts=="function"}async function tI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function nI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function rI(){return Fp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Up="firebaseLocalStorageDb",sI=1,wo="firebaseLocalStorage",Bp="fbase_key";class gi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qo(n,e){return n.transaction([wo],e?"readwrite":"readonly").objectStore(wo)}function iI(){const n=indexedDB.deleteDatabase(Up);return new gi(n).toPromise()}function yl(){const n=indexedDB.open(Up,sI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(wo,{keyPath:Bp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(wo)?e(r):(r.close(),await iI(),e(await yl()))})})}async function Lh(n,e,t){const r=Qo(n,!0).put({[Bp]:e,value:t});return new gi(r).toPromise()}async function oI(n,e){const t=Qo(n,!1).get(e),r=await new gi(t).toPromise();return r===void 0?null:r.value}function Fh(n,e){const t=Qo(n,!0).delete(e);return new gi(t).toPromise()}const aI=800,lI=3;class jp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>lI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Fp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(rI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await tI(),!this.activeServiceWorker)return;this.sender=new ZT(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||nI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yl();return await Lh(e,Io,"1"),await Fh(e,Io),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Lh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>oI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Fh(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qo(s,!1).getAll();return new gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),aI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}jp.type="LOCAL";const cI=jp;new di(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $p(n,e){return e?mn(e):(ie(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pc extends Dp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $r(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $r(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $r(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function uI(n){return HT(n.auth,new pc(n),n.bypassAuthState)}function hI(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),qT(t,new pc(n),n.bypassAuthState)}async function fI(n){const{auth:e,user:t}=n;return ie(t,e,"internal-error"),$T(t,new pc(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return uI;case"linkViaPopup":case"linkViaRedirect":return fI;case"reauthViaPopup":case"reauthViaRedirect":return hI;default:rn(this.auth,"internal-error")}}resolve(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){In(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=new di(2e3,1e4);async function pI(n,e,t){if(Nt(n.app))return Promise.reject(Lt(n,"operation-not-supported-in-this-environment"));const r=Ko(n);lT(n,e,fc);const s=$p(r,t);return new ur(r,"signInViaPopup",e,s).executeNotNull()}class ur extends qp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,ur.currentPopupAction&&ur.currentPopupAction.cancel(),ur.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ie(e,this.auth,"internal-error"),e}async onExecution(){In(this.filter.length===1,"Popup operations only handle one event");const e=dc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ur.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,dI.get())};e()}}ur.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gI="pendingRedirect",to=new Map;class mI extends qp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=to.get(this.auth._key());if(!e){try{const r=await _I(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}to.set(this.auth._key(),e)}return this.bypassAuthState||to.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function _I(n,e){const t=EI(e),r=vI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function yI(n,e){to.set(n._key(),e)}function vI(n){return mn(n._redirectPersistence)}function EI(n){return eo(gI,n.config.apiKey,n.name)}async function TI(n,e,t=!1){if(Nt(n.app))return Promise.reject(pr(n));const r=Ko(n),s=$p(r,e),a=await new mI(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=600*1e3;class wI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!AI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Hp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Lt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=II&&this.cachedEventUids.clear(),this.cachedEventUids.has(Uh(e))}saveEventToCache(e){this.cachedEventUids.add(Uh(e)),this.lastProcessedEventTime=Date.now()}}function Uh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Hp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function AI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Hp(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bI(n,e={}){return rs(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,RI=/^https?/;async function PI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await bI(n);for(const t of e)try{if(CI(t))return}catch{}rn(n,"unauthorized-domain")}function CI(n){const e=ml(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!RI.test(t))return!1;if(SI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=new di(3e4,6e4);function Bh(){const n=Jt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function VI(n){return new Promise((e,t)=>{var r,s,i;function a(){Bh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Bh(),t(Lt(n,"network-request-failed"))},timeout:kI.get()})}if(!((s=(r=Jt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Jt().gapi)===null||i===void 0)&&i.load)a();else{const l=xT("iframefcb");return Jt()[l]=()=>{gapi.load?a():t(Lt(n,"network-request-failed"))},NT(`${OT()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw no=null,e})}let no=null;function DI(n){return no=no||VI(n),no}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NI=new di(5e3,15e3),OI="__/auth/iframe",xI="emulator/auth/iframe",MI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},LI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function FI(n){const e=n.config;ie(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ac(e,xI):`https://${n.config.authDomain}/${OI}`,r={apiKey:e.apiKey,appName:n.name,v:ns},s=LI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${fi(r).slice(1)}`}async function UI(n){const e=await DI(n),t=Jt().gapi;return ie(t,n,"internal-error"),e.open({where:document.body,url:FI(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:MI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Lt(n,"network-request-failed"),l=Jt().setTimeout(()=>{i(a)},NI.get());function c(){Jt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jI=500,$I=600,qI="_blank",HI="http://localhost";class jh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zI(n,e,t,r=jI,s=$I){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},BI),{width:r.toString(),height:s.toString(),top:i,left:a}),h=ut().toLowerCase();t&&(l=Ap(h)?qI:t),Ip(h)&&(e=e||HI,c.scrollbars="yes");const d=Object.entries(c).reduce((m,[b,V])=>`${m}${b}=${V},`,"");if(bT(h)&&l!=="_self")return WI(e||"",l),new jh(null);const g=window.open(e||"",l,d);ie(g,n,"popup-blocked");try{g.focus()}catch{}return new jh(g)}function WI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KI="__/auth/handler",GI="emulator/auth/handler",QI=encodeURIComponent("fac");async function $h(n,e,t,r,s,i){ie(n.config.authDomain,n,"auth-domain-config-required"),ie(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ns,eventId:s};if(e instanceof fc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Gv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof pi){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),h=c?`#${QI}=${encodeURIComponent(c)}`:"";return`${JI(n)}?${fi(l).slice(1)}${h}`}function JI({config:n}){return n.emulator?ac(n,GI):`https://${n.authDomain}/${KI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ka="webStorageSupport";class XI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Lp,this._completeRedirectFn=TI,this._overrideRedirectResult=yI}async _openPopup(e,t,r,s){var i;In((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await $h(e,t,r,ml(),s);return zI(e,a,dc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await $h(e,t,r,ml(),s);return eI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(In(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await UI(e),r=new wI(e);return t.register("authEvent",s=>(ie(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Ka,{type:Ka},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Ka];a!==void 0&&t(!!a),rn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=PI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return Cp()||wp()||uc()}}const YI=XI;var qh="@firebase/auth",Hh="1.10.8";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ie(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ew(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function tw(n){Kr(new yr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ie(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:kp(n)},h=new VT(r,s,i,c);return LT(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Kr(new yr("auth-internal",e=>{const t=Ko(e.getProvider("auth").getImmediate());return(r=>new ZI(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),jn(qh,Hh,ew(n)),jn(qh,Hh,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nw=300,rw=op("authIdTokenMaxAge")||nw;let zh=null;const sw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>rw)return;const s=t==null?void 0:t.token;zh!==s&&(zh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function iw(n=fp()){const e=rc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=MT(n,{popupRedirectResolver:YI,persistence:[cI,XT,Lp]}),r=op("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=sw(i.toString());WT(t,a,()=>a(t.currentUser)),zT(t,l=>a(l))}}const s=sp("auth");return s&&FT(t,`http://${s}`),t}function ow(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}DT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Lt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",ow().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});tw("Browser");var Wh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var $n,zp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(I,_){function v(){}v.prototype=_.prototype,I.D=_.prototype,I.prototype=new v,I.prototype.constructor=I,I.C=function(T,A,S){for(var E=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)E[Ze-2]=arguments[Ze];return _.prototype[A].apply(T,E)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(I,_,v){v||(v=0);var T=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)T[A]=_.charCodeAt(v++)|_.charCodeAt(v++)<<8|_.charCodeAt(v++)<<16|_.charCodeAt(v++)<<24;else for(A=0;16>A;++A)T[A]=_[v++]|_[v++]<<8|_[v++]<<16|_[v++]<<24;_=I.g[0],v=I.g[1],A=I.g[2];var S=I.g[3],E=_+(S^v&(A^S))+T[0]+3614090360&4294967295;_=v+(E<<7&4294967295|E>>>25),E=S+(A^_&(v^A))+T[1]+3905402710&4294967295,S=_+(E<<12&4294967295|E>>>20),E=A+(v^S&(_^v))+T[2]+606105819&4294967295,A=S+(E<<17&4294967295|E>>>15),E=v+(_^A&(S^_))+T[3]+3250441966&4294967295,v=A+(E<<22&4294967295|E>>>10),E=_+(S^v&(A^S))+T[4]+4118548399&4294967295,_=v+(E<<7&4294967295|E>>>25),E=S+(A^_&(v^A))+T[5]+1200080426&4294967295,S=_+(E<<12&4294967295|E>>>20),E=A+(v^S&(_^v))+T[6]+2821735955&4294967295,A=S+(E<<17&4294967295|E>>>15),E=v+(_^A&(S^_))+T[7]+4249261313&4294967295,v=A+(E<<22&4294967295|E>>>10),E=_+(S^v&(A^S))+T[8]+1770035416&4294967295,_=v+(E<<7&4294967295|E>>>25),E=S+(A^_&(v^A))+T[9]+2336552879&4294967295,S=_+(E<<12&4294967295|E>>>20),E=A+(v^S&(_^v))+T[10]+4294925233&4294967295,A=S+(E<<17&4294967295|E>>>15),E=v+(_^A&(S^_))+T[11]+2304563134&4294967295,v=A+(E<<22&4294967295|E>>>10),E=_+(S^v&(A^S))+T[12]+1804603682&4294967295,_=v+(E<<7&4294967295|E>>>25),E=S+(A^_&(v^A))+T[13]+4254626195&4294967295,S=_+(E<<12&4294967295|E>>>20),E=A+(v^S&(_^v))+T[14]+2792965006&4294967295,A=S+(E<<17&4294967295|E>>>15),E=v+(_^A&(S^_))+T[15]+1236535329&4294967295,v=A+(E<<22&4294967295|E>>>10),E=_+(A^S&(v^A))+T[1]+4129170786&4294967295,_=v+(E<<5&4294967295|E>>>27),E=S+(v^A&(_^v))+T[6]+3225465664&4294967295,S=_+(E<<9&4294967295|E>>>23),E=A+(_^v&(S^_))+T[11]+643717713&4294967295,A=S+(E<<14&4294967295|E>>>18),E=v+(S^_&(A^S))+T[0]+3921069994&4294967295,v=A+(E<<20&4294967295|E>>>12),E=_+(A^S&(v^A))+T[5]+3593408605&4294967295,_=v+(E<<5&4294967295|E>>>27),E=S+(v^A&(_^v))+T[10]+38016083&4294967295,S=_+(E<<9&4294967295|E>>>23),E=A+(_^v&(S^_))+T[15]+3634488961&4294967295,A=S+(E<<14&4294967295|E>>>18),E=v+(S^_&(A^S))+T[4]+3889429448&4294967295,v=A+(E<<20&4294967295|E>>>12),E=_+(A^S&(v^A))+T[9]+568446438&4294967295,_=v+(E<<5&4294967295|E>>>27),E=S+(v^A&(_^v))+T[14]+3275163606&4294967295,S=_+(E<<9&4294967295|E>>>23),E=A+(_^v&(S^_))+T[3]+4107603335&4294967295,A=S+(E<<14&4294967295|E>>>18),E=v+(S^_&(A^S))+T[8]+1163531501&4294967295,v=A+(E<<20&4294967295|E>>>12),E=_+(A^S&(v^A))+T[13]+2850285829&4294967295,_=v+(E<<5&4294967295|E>>>27),E=S+(v^A&(_^v))+T[2]+4243563512&4294967295,S=_+(E<<9&4294967295|E>>>23),E=A+(_^v&(S^_))+T[7]+1735328473&4294967295,A=S+(E<<14&4294967295|E>>>18),E=v+(S^_&(A^S))+T[12]+2368359562&4294967295,v=A+(E<<20&4294967295|E>>>12),E=_+(v^A^S)+T[5]+4294588738&4294967295,_=v+(E<<4&4294967295|E>>>28),E=S+(_^v^A)+T[8]+2272392833&4294967295,S=_+(E<<11&4294967295|E>>>21),E=A+(S^_^v)+T[11]+1839030562&4294967295,A=S+(E<<16&4294967295|E>>>16),E=v+(A^S^_)+T[14]+4259657740&4294967295,v=A+(E<<23&4294967295|E>>>9),E=_+(v^A^S)+T[1]+2763975236&4294967295,_=v+(E<<4&4294967295|E>>>28),E=S+(_^v^A)+T[4]+1272893353&4294967295,S=_+(E<<11&4294967295|E>>>21),E=A+(S^_^v)+T[7]+4139469664&4294967295,A=S+(E<<16&4294967295|E>>>16),E=v+(A^S^_)+T[10]+3200236656&4294967295,v=A+(E<<23&4294967295|E>>>9),E=_+(v^A^S)+T[13]+681279174&4294967295,_=v+(E<<4&4294967295|E>>>28),E=S+(_^v^A)+T[0]+3936430074&4294967295,S=_+(E<<11&4294967295|E>>>21),E=A+(S^_^v)+T[3]+3572445317&4294967295,A=S+(E<<16&4294967295|E>>>16),E=v+(A^S^_)+T[6]+76029189&4294967295,v=A+(E<<23&4294967295|E>>>9),E=_+(v^A^S)+T[9]+3654602809&4294967295,_=v+(E<<4&4294967295|E>>>28),E=S+(_^v^A)+T[12]+3873151461&4294967295,S=_+(E<<11&4294967295|E>>>21),E=A+(S^_^v)+T[15]+530742520&4294967295,A=S+(E<<16&4294967295|E>>>16),E=v+(A^S^_)+T[2]+3299628645&4294967295,v=A+(E<<23&4294967295|E>>>9),E=_+(A^(v|~S))+T[0]+4096336452&4294967295,_=v+(E<<6&4294967295|E>>>26),E=S+(v^(_|~A))+T[7]+1126891415&4294967295,S=_+(E<<10&4294967295|E>>>22),E=A+(_^(S|~v))+T[14]+2878612391&4294967295,A=S+(E<<15&4294967295|E>>>17),E=v+(S^(A|~_))+T[5]+4237533241&4294967295,v=A+(E<<21&4294967295|E>>>11),E=_+(A^(v|~S))+T[12]+1700485571&4294967295,_=v+(E<<6&4294967295|E>>>26),E=S+(v^(_|~A))+T[3]+2399980690&4294967295,S=_+(E<<10&4294967295|E>>>22),E=A+(_^(S|~v))+T[10]+4293915773&4294967295,A=S+(E<<15&4294967295|E>>>17),E=v+(S^(A|~_))+T[1]+2240044497&4294967295,v=A+(E<<21&4294967295|E>>>11),E=_+(A^(v|~S))+T[8]+1873313359&4294967295,_=v+(E<<6&4294967295|E>>>26),E=S+(v^(_|~A))+T[15]+4264355552&4294967295,S=_+(E<<10&4294967295|E>>>22),E=A+(_^(S|~v))+T[6]+2734768916&4294967295,A=S+(E<<15&4294967295|E>>>17),E=v+(S^(A|~_))+T[13]+1309151649&4294967295,v=A+(E<<21&4294967295|E>>>11),E=_+(A^(v|~S))+T[4]+4149444226&4294967295,_=v+(E<<6&4294967295|E>>>26),E=S+(v^(_|~A))+T[11]+3174756917&4294967295,S=_+(E<<10&4294967295|E>>>22),E=A+(_^(S|~v))+T[2]+718787259&4294967295,A=S+(E<<15&4294967295|E>>>17),E=v+(S^(A|~_))+T[9]+3951481745&4294967295,I.g[0]=I.g[0]+_&4294967295,I.g[1]=I.g[1]+(A+(E<<21&4294967295|E>>>11))&4294967295,I.g[2]=I.g[2]+A&4294967295,I.g[3]=I.g[3]+S&4294967295}r.prototype.u=function(I,_){_===void 0&&(_=I.length);for(var v=_-this.blockSize,T=this.B,A=this.h,S=0;S<_;){if(A==0)for(;S<=v;)s(this,I,S),S+=this.blockSize;if(typeof I=="string"){for(;S<_;)if(T[A++]=I.charCodeAt(S++),A==this.blockSize){s(this,T),A=0;break}}else for(;S<_;)if(T[A++]=I[S++],A==this.blockSize){s(this,T),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var I=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);I[0]=128;for(var _=1;_<I.length-8;++_)I[_]=0;var v=8*this.o;for(_=I.length-8;_<I.length;++_)I[_]=v&255,v/=256;for(this.u(I),I=Array(16),_=v=0;4>_;++_)for(var T=0;32>T;T+=8)I[v++]=this.g[_]>>>T&255;return I};function i(I,_){var v=l;return Object.prototype.hasOwnProperty.call(v,I)?v[I]:v[I]=_(I)}function a(I,_){this.h=_;for(var v=[],T=!0,A=I.length-1;0<=A;A--){var S=I[A]|0;T&&S==_||(v[A]=S,T=!1)}this.g=v}var l={};function c(I){return-128<=I&&128>I?i(I,function(_){return new a([_|0],0>_?-1:0)}):new a([I|0],0>I?-1:0)}function h(I){if(isNaN(I)||!isFinite(I))return g;if(0>I)return N(h(-I));for(var _=[],v=1,T=0;I>=v;T++)_[T]=I/v|0,v*=4294967296;return new a(_,0)}function d(I,_){if(I.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(I.charAt(0)=="-")return N(d(I.substring(1),_));if(0<=I.indexOf("-"))throw Error('number format error: interior "-" character');for(var v=h(Math.pow(_,8)),T=g,A=0;A<I.length;A+=8){var S=Math.min(8,I.length-A),E=parseInt(I.substring(A,A+S),_);8>S?(S=h(Math.pow(_,S)),T=T.j(S).add(h(E))):(T=T.j(v),T=T.add(h(E)))}return T}var g=c(0),m=c(1),b=c(16777216);n=a.prototype,n.m=function(){if(k(this))return-N(this).m();for(var I=0,_=1,v=0;v<this.g.length;v++){var T=this.i(v);I+=(0<=T?T:4294967296+T)*_,_*=4294967296}return I},n.toString=function(I){if(I=I||10,2>I||36<I)throw Error("radix out of range: "+I);if(V(this))return"0";if(k(this))return"-"+N(this).toString(I);for(var _=h(Math.pow(I,6)),v=this,T="";;){var A=z(v,_).g;v=G(v,A.j(_));var S=((0<v.g.length?v.g[0]:v.h)>>>0).toString(I);if(v=A,V(v))return S+T;for(;6>S.length;)S="0"+S;T=S+T}},n.i=function(I){return 0>I?0:I<this.g.length?this.g[I]:this.h};function V(I){if(I.h!=0)return!1;for(var _=0;_<I.g.length;_++)if(I.g[_]!=0)return!1;return!0}function k(I){return I.h==-1}n.l=function(I){return I=G(this,I),k(I)?-1:V(I)?0:1};function N(I){for(var _=I.g.length,v=[],T=0;T<_;T++)v[T]=~I.g[T];return new a(v,~I.h).add(m)}n.abs=function(){return k(this)?N(this):this},n.add=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],T=0,A=0;A<=_;A++){var S=T+(this.i(A)&65535)+(I.i(A)&65535),E=(S>>>16)+(this.i(A)>>>16)+(I.i(A)>>>16);T=E>>>16,S&=65535,E&=65535,v[A]=E<<16|S}return new a(v,v[v.length-1]&-2147483648?-1:0)};function G(I,_){return I.add(N(_))}n.j=function(I){if(V(this)||V(I))return g;if(k(this))return k(I)?N(this).j(N(I)):N(N(this).j(I));if(k(I))return N(this.j(N(I)));if(0>this.l(b)&&0>I.l(b))return h(this.m()*I.m());for(var _=this.g.length+I.g.length,v=[],T=0;T<2*_;T++)v[T]=0;for(T=0;T<this.g.length;T++)for(var A=0;A<I.g.length;A++){var S=this.i(T)>>>16,E=this.i(T)&65535,Ze=I.i(A)>>>16,Ut=I.i(A)&65535;v[2*T+2*A]+=E*Ut,$(v,2*T+2*A),v[2*T+2*A+1]+=S*Ut,$(v,2*T+2*A+1),v[2*T+2*A+1]+=E*Ze,$(v,2*T+2*A+1),v[2*T+2*A+2]+=S*Ze,$(v,2*T+2*A+2)}for(T=0;T<_;T++)v[T]=v[2*T+1]<<16|v[2*T];for(T=_;T<2*_;T++)v[T]=0;return new a(v,0)};function $(I,_){for(;(I[_]&65535)!=I[_];)I[_+1]+=I[_]>>>16,I[_]&=65535,_++}function Q(I,_){this.g=I,this.h=_}function z(I,_){if(V(_))throw Error("division by zero");if(V(I))return new Q(g,g);if(k(I))return _=z(N(I),_),new Q(N(_.g),N(_.h));if(k(_))return _=z(I,N(_)),new Q(N(_.g),_.h);if(30<I.g.length){if(k(I)||k(_))throw Error("slowDivide_ only works with positive integers.");for(var v=m,T=_;0>=T.l(I);)v=me(v),T=me(T);var A=ve(v,1),S=ve(T,1);for(T=ve(T,2),v=ve(v,2);!V(T);){var E=S.add(T);0>=E.l(I)&&(A=A.add(v),S=E),T=ve(T,1),v=ve(v,1)}return _=G(I,A.j(_)),new Q(A,_)}for(A=g;0<=I.l(_);){for(v=Math.max(1,Math.floor(I.m()/_.m())),T=Math.ceil(Math.log(v)/Math.LN2),T=48>=T?1:Math.pow(2,T-48),S=h(v),E=S.j(_);k(E)||0<E.l(I);)v-=T,S=h(v),E=S.j(_);V(S)&&(S=m),A=A.add(S),I=G(I,E)}return new Q(A,I)}n.A=function(I){return z(this,I).h},n.and=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)&I.i(T);return new a(v,this.h&I.h)},n.or=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)|I.i(T);return new a(v,this.h|I.h)},n.xor=function(I){for(var _=Math.max(this.g.length,I.g.length),v=[],T=0;T<_;T++)v[T]=this.i(T)^I.i(T);return new a(v,this.h^I.h)};function me(I){for(var _=I.g.length+1,v=[],T=0;T<_;T++)v[T]=I.i(T)<<1|I.i(T-1)>>>31;return new a(v,I.h)}function ve(I,_){var v=_>>5;_%=32;for(var T=I.g.length-v,A=[],S=0;S<T;S++)A[S]=0<_?I.i(S+v)>>>_|I.i(S+v+1)<<32-_:I.i(S+v);return new a(A,I.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,zp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,$n=a}).apply(typeof Wh<"u"?Wh:typeof self<"u"?self:typeof window<"u"?window:{});var qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wp,ks,Kp,ro,vl,Gp,Qp,Jp;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof qi=="object"&&qi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in f))break e;f=f[R]}o=o[o.length-1],p=f[o],u=u(p),u!=p&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,p=!1,R={next:function(){if(!p&&f<o.length){var P=f++;return{value:u(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function g(o,u,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function m(o,u,f){return m=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,m.apply(null,arguments)}function b(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,R,P){for(var B=Array(arguments.length-2),Pe=2;Pe<arguments.length;Pe++)B[Pe-2]=arguments[Pe];return u.prototype[R].apply(p,B)}}function k(o){const u=o.length;if(0<u){const f=Array(u);for(let p=0;p<u;p++)f[p]=o[p];return f}return[]}function N(o,u){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(c(p)){const R=o.length||0,P=p.length||0;o.length=R+P;for(let B=0;B<P;B++)o[R+B]=p[B]}else o.push(p)}}class G{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(o){return/^[\s\xa0]*$/.test(o)}function Q(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var me=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ve(o,u,f){for(const p in o)u.call(f,o[p],p,o)}function I(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function _(o){const u={};for(const f in o)u[f]=o[f];return u}const v="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function T(o,u){let f,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(f in p)o[f]=p[f];for(let P=0;P<v.length;P++)f=v[P],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function A(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function S(o){l.setTimeout(()=>{throw o},0)}function E(){var o=Y;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class Ze{constructor(){this.h=this.g=null}add(u,f){const p=Ut.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var Ut=new G(()=>new $e,o=>o.reset());class $e{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Te,_e=!1,Y=new Ze,W=()=>{const o=l.Promise.resolve(void 0);Te=()=>{o.then(de)}};var de=()=>{for(var o;o=E();){try{o.h.call(o.g)}catch(f){S(f)}var u=Ut;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}_e=!1};function te(){this.s=this.s,this.C=this.C}te.prototype.s=!1,te.prototype.ma=function(){this.s||(this.s=!0,this.N())},te.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function Ie(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}Ie.prototype.h=function(){this.defaultPrevented=!0};var ls=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o})();function Rn(o,u){if(Ie.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(me){e:{try{z(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:Bt[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Rn.aa.h.call(this)}}V(Rn,Ie);var Bt={2:"touch",3:"pen",4:"mouse"};Rn.prototype.h=function(){Rn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var At="closure_listenable_"+(1e6*Math.random()|0),cs=0;function Ii(o,u,f,p,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=R,this.key=++cs,this.da=this.fa=!1}function jt(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function us(o){this.src=o,this.g={},this.h=0}us.prototype.add=function(o,u,f,p,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var B=w(o,u,p,R);return-1<B?(u=o[B],f||(u.fa=!1)):(u=new Ii(u,this.src,P,!!p,R),u.fa=f,o.push(u)),u};function y(o,u){var f=u.type;if(f in o.g){var p=o.g[f],R=Array.prototype.indexOf.call(p,u,void 0),P;(P=0<=R)&&Array.prototype.splice.call(p,R,1),P&&(jt(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function w(o,u,f,p){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==p)return R}return-1}var C="closure_lm_"+(1e6*Math.random()|0),F={};function x(o,u,f,p,R){if(Array.isArray(u)){for(var P=0;P<u.length;P++)x(o,u[P],f,p,R);return null}return f=ne(f),o&&o[At]?o.K(u,f,h(p)?!!p.capture:!1,R):L(o,u,f,!1,p,R)}function L(o,u,f,p,R,P){if(!u)throw Error("Invalid event type");var B=h(R)?!!R.capture:!!R,Pe=H(o);if(Pe||(o[C]=Pe=new us(o)),f=Pe.add(u,f,p,B,P),f.proxy)return f;if(p=q(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)ls||(R=B),R===void 0&&(R=!1),o.addEventListener(u.toString(),p,R);else if(o.attachEvent)o.attachEvent(M(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function q(){function o(f){return u.call(o.src,o.listener,f)}const u=ee;return o}function j(o,u,f,p,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)j(o,u[P],f,p,R);else p=h(p)?!!p.capture:!!p,f=ne(f),o&&o[At]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],f=w(P,f,p,R),-1<f&&(jt(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=H(o))&&(u=o.g[u.toString()],o=-1,u&&(o=w(u,f,p,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[At])y(u.i,o);else{var f=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(f,p,o.capture):u.detachEvent?u.detachEvent(M(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=H(u))?(y(f,o),f.h==0&&(f.src=null,u[C]=null)):jt(o)}}}function M(o){return o in F?F[o]:F[o]="on"+o}function ee(o,u){if(o.da)o=!0;else{u=new Rn(u,this);var f=o.listener,p=o.ha||o.src;o.fa&&U(o),o=f.call(p,u)}return o}function H(o){return o=o[C],o instanceof us?o:null}var X="__closure_events_fn_"+(1e9*Math.random()>>>0);function ne(o){return typeof o=="function"?o:(o[X]||(o[X]=function(u){return o.handleEvent(u)}),o[X])}function re(){te.call(this),this.i=new us(this),this.M=this,this.F=null}V(re,te),re.prototype[At]=!0,re.prototype.removeEventListener=function(o,u,f,p){j(this,o,u,f,p)};function ce(o,u){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new Ie(u,o);else if(u instanceof Ie)u.target=u.target||o;else{var R=u;u=new Ie(p,o),T(u,R)}if(R=!0,f)for(var P=f.length-1;0<=P;P--){var B=u.g=f[P];R=we(B,p,!0,u)&&R}if(B=u.g=o,R=we(B,p,!0,u)&&R,R=we(B,p,!1,u)&&R,f)for(P=0;P<f.length;P++)B=u.g=f[P],R=we(B,p,!1,u)&&R}re.prototype.N=function(){if(re.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],p=0;p<f.length;p++)jt(f[p]);delete o.g[u],o.h--}}this.F=null},re.prototype.K=function(o,u,f,p){return this.i.add(String(o),u,!1,f,p)},re.prototype.L=function(o,u,f,p){return this.i.add(String(o),u,!0,f,p)};function we(o,u,f,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,P=0;P<u.length;++P){var B=u[P];if(B&&!B.da&&B.capture==f){var Pe=B.listener,Qe=B.ha||B.src;B.fa&&y(o.i,B),R=Pe.call(Qe,p)!==!1&&R}}return R&&!p.defaultPrevented}function Oe(o,u,f){if(typeof o=="function")f&&(o=m(o,f));else if(o&&typeof o.handleEvent=="function")o=m(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Ue(o){o.g=Oe(()=>{o.g=null,o.i&&(o.i=!1,Ue(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class bt extends te{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Ue(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function et(o){te.call(this),this.h=o,this.g={}}V(et,te);var Pn=[];function hs(o){ve(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}et.prototype.N=function(){et.aa.N.call(this),hs(this)},et.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ge=l.JSON.stringify,St=l.JSON.parse,wi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ar(){}Ar.prototype.h=null;function Gc(o){return o.h||(o.h=o.i())}function Qc(){}var fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function pa(){Ie.call(this,"d")}V(pa,Ie);function ga(){Ie.call(this,"c")}V(ga,Ie);var nr={},Jc=null;function Ai(){return Jc=Jc||new re}nr.La="serverreachability";function Xc(o){Ie.call(this,nr.La,o)}V(Xc,Ie);function ds(o){const u=Ai();ce(u,new Xc(u))}nr.STAT_EVENT="statevent";function Yc(o,u){Ie.call(this,nr.STAT_EVENT,o),this.stat=u}V(Yc,Ie);function ht(o){const u=Ai();ce(u,new Yc(u,o))}nr.Ma="timingevent";function Zc(o,u){Ie.call(this,nr.Ma,o),this.size=u}V(Zc,Ie);function ps(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function gs(){this.g=!0}gs.prototype.xa=function(){this.g=!1};function Im(o,u,f,p,R,P){o.info(function(){if(o.g)if(P)for(var B="",Pe=P.split("&"),Qe=0;Qe<Pe.length;Qe++){var Ee=Pe[Qe].split("=");if(1<Ee.length){var tt=Ee[0];Ee=Ee[1];var nt=tt.split("_");B=2<=nt.length&&nt[1]=="type"?B+(tt+"="+Ee+"&"):B+(tt+"=redacted&")}}else B=null;else B=P;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+f+`
`+B})}function wm(o,u,f,p,R,P,B){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+f+`
`+P+" "+B})}function br(o,u,f,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+bm(o,f)+(p?" "+p:"")})}function Am(o,u){o.info(function(){return"TIMEOUT: "+u})}gs.prototype.info=function(){};function bm(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return Ge(f)}catch{return u}}var bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},eu={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ma;function Si(){}V(Si,Ar),Si.prototype.g=function(){return new XMLHttpRequest},Si.prototype.i=function(){return{}},ma=new Si;function Cn(o,u,f,p){this.j=o,this.i=u,this.l=f,this.R=p||1,this.U=new et(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new tu}function tu(){this.i=null,this.g="",this.h=!1}var nu={},_a={};function ya(o,u,f){o.L=1,o.v=ki(an(u)),o.m=f,o.P=!0,ru(o,null)}function ru(o,u){o.F=Date.now(),Ri(o),o.A=an(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),_u(f.i,"t",p),o.C=0,f=o.j.J,o.h=new tu,o.g=xu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new bt(m(o.Y,o,o.g),o.O)),u=o.U,f=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(Pn[0]=R.toString()),R=Pn);for(var P=0;P<R.length;P++){var B=x(f,R[P],p||u.handleEvent,!1,u.h||u);if(!B)break;u.g[B.key]=B}u=o.H?_(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ds(),Im(o.i,o.u,o.A,o.l,o.R,o.m)}Cn.prototype.ca=function(o){o=o.target;const u=this.M;u&&ln(o)==3?u.j():this.Y(o)},Cn.prototype.Y=function(o){try{if(o==this.g)e:{const nt=ln(this.g);var u=this.g.Ba();const Pr=this.g.Z();if(!(3>nt)&&(nt!=3||this.g&&(this.h.h||this.g.oa()||Au(this.g)))){this.J||nt!=4||u==7||(u==8||0>=Pr?ds(3):ds(2)),va(this);var f=this.g.Z();this.X=f;t:if(su(this)){var p=Au(this.g);o="";var R=p.length,P=ln(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rr(this),ms(this);var B="";break t}this.h.i=new l.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(P&&u==R-1)});p.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,wm(this.i,this.u,this.A,this.l,this.R,nt,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Pe,Qe=this.g;if((Pe=Qe.g?Qe.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Pe)){var Ee=Pe;break t}}Ee=null}if(f=Ee)br(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ea(this,f);else{this.o=!1,this.s=3,ht(12),rr(this),ms(this);break e}}if(this.P){f=!0;let Vt;for(;!this.J&&this.C<B.length;)if(Vt=Sm(this,B),Vt==_a){nt==4&&(this.s=4,ht(14),f=!1),br(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==nu){this.s=4,ht(15),br(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else br(this.i,this.l,Vt,null),Ea(this,Vt);if(su(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),nt!=4||B.length!=0||this.h.h||(this.s=1,ht(16),f=!1),this.o=this.o&&f,!f)br(this.i,this.l,B,"[Invalid Chunked Response]"),rr(this),ms(this);else if(0<B.length&&!this.W){this.W=!0;var tt=this.j;tt.g==this&&tt.ba&&!tt.M&&(tt.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),Sa(tt),tt.M=!0,ht(11))}}else br(this.i,this.l,B,null),Ea(this,B);nt==4&&rr(this),this.o&&!this.J&&(nt==4?Vu(this.j,this):(this.o=!1,Ri(this)))}else qm(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,ht(12)):(this.s=0,ht(13)),rr(this),ms(this)}}}catch{}finally{}};function su(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Sm(o,u){var f=o.C,p=u.indexOf(`
`,f);return p==-1?_a:(f=Number(u.substring(f,p)),isNaN(f)?nu:(p+=1,p+f>u.length?_a:(u=u.slice(p,p+f),o.C=p+f,u)))}Cn.prototype.cancel=function(){this.J=!0,rr(this)};function Ri(o){o.S=Date.now()+o.I,iu(o,o.I)}function iu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ps(m(o.ba,o),u)}function va(o){o.B&&(l.clearTimeout(o.B),o.B=null)}Cn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Am(this.i,this.A),this.L!=2&&(ds(),ht(17)),rr(this),this.s=2,ms(this)):iu(this,this.S-o)};function ms(o){o.j.G==0||o.J||Vu(o.j,o)}function rr(o){va(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,hs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function Ea(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Ta(f.h,o))){if(!o.K&&Ta(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Mi(f),Oi(f);else break e;ba(f),ht(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=ps(m(f.Za,f),6e3));if(1>=lu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else ir(f,11)}else if((o.K||f.g==o)&&Mi(f),!$(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let Ee=R[u];if(f.T=Ee[0],Ee=Ee[1],f.G==2)if(Ee[0]=="c"){f.K=Ee[1],f.ia=Ee[2];const tt=Ee[3];tt!=null&&(f.la=tt,f.j.info("VER="+f.la));const nt=Ee[4];nt!=null&&(f.Aa=nt,f.j.info("SVER="+f.Aa));const Pr=Ee[5];Pr!=null&&typeof Pr=="number"&&0<Pr&&(p=1.5*Pr,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Vt=o.g;if(Vt){const Fi=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fi){var P=p.h;P.g||Fi.indexOf("spdy")==-1&&Fi.indexOf("quic")==-1&&Fi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ia(P,P.h),P.h=null))}if(p.D){const Ra=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Ra&&(p.ya=Ra,Ve(p.I,p.D,Ra))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var B=o;if(p.qa=Ou(p,p.J?p.ia:null,p.W),B.K){cu(p.h,B);var Pe=B,Qe=p.L;Qe&&(Pe.I=Qe),Pe.B&&(va(Pe),Ri(Pe)),p.g=B}else Cu(p);0<f.i.length&&xi(f)}else Ee[0]!="stop"&&Ee[0]!="close"||ir(f,7);else f.G==3&&(Ee[0]=="stop"||Ee[0]=="close"?Ee[0]=="stop"?ir(f,7):Aa(f):Ee[0]!="noop"&&f.l&&f.l.ta(Ee),f.v=0)}}ds(4)}catch{}}var Rm=class{constructor(o,u){this.g=o,this.map=u}};function ou(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function au(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function lu(o){return o.h?1:o.g?o.g.size:0}function Ta(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ia(o,u){o.g?o.g.add(u):o.h=u}function cu(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}ou.prototype.cancel=function(){if(this.i=uu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function uu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return k(o.i)}function Pm(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,p=0;p<f;p++)u.push(o[p]);return u}u=[],f=0;for(p in o)u[f++]=o[p];return u}function Cm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const p in o)u[f++]=p;return u}}}function hu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=Cm(o),p=Pm(o),R=p.length,P=0;P<R;P++)u.call(void 0,p[P],f&&f[P],o)}var fu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function km(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),R=null;if(0<=p){var P=o[f].substring(0,p);R=o[f].substring(p+1)}else P=o[f];u(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function sr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof sr){this.h=o.h,Pi(this,o.j),this.o=o.o,this.g=o.g,Ci(this,o.s),this.l=o.l;var u=o.i,f=new vs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),du(this,f),this.m=o.m}else o&&(u=String(o).match(fu))?(this.h=!1,Pi(this,u[1]||"",!0),this.o=_s(u[2]||""),this.g=_s(u[3]||"",!0),Ci(this,u[4]),this.l=_s(u[5]||"",!0),du(this,u[6]||"",!0),this.m=_s(u[7]||"")):(this.h=!1,this.i=new vs(null,this.h))}sr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ys(u,pu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ys(u,pu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ys(f,f.charAt(0)=="/"?Nm:Dm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ys(f,xm)),o.join("")};function an(o){return new sr(o)}function Pi(o,u,f){o.j=f?_s(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ci(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function du(o,u,f){u instanceof vs?(o.i=u,Mm(o.i,o.h)):(f||(u=ys(u,Om)),o.i=new vs(u,o.h))}function Ve(o,u,f){o.i.set(u,f)}function ki(o){return Ve(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function _s(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ys(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Vm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Vm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var pu=/[#\/\?@]/g,Dm=/[#\?:]/g,Nm=/[#\?]/g,Om=/[#\?@]/g,xm=/#/g;function vs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function kn(o){o.g||(o.g=new Map,o.h=0,o.i&&km(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=vs.prototype,n.add=function(o,u){kn(this),this.i=null,o=Sr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function gu(o,u){kn(o),u=Sr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function mu(o,u){return kn(o),u=Sr(o,u),o.g.has(u)}n.forEach=function(o,u){kn(this),this.g.forEach(function(f,p){f.forEach(function(R){o.call(u,R,p,this)},this)},this)},n.na=function(){kn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let p=0;p<u.length;p++){const R=o[p];for(let P=0;P<R.length;P++)f.push(u[p])}return f},n.V=function(o){kn(this);let u=[];if(typeof o=="string")mu(this,o)&&(u=u.concat(this.g.get(Sr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return kn(this),this.i=null,o=Sr(this,o),mu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function _u(o,u,f){gu(o,u),0<f.length&&(o.i=null,o.g.set(Sr(o,u),k(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var p=u[f];const P=encodeURIComponent(String(p)),B=this.V(p);for(p=0;p<B.length;p++){var R=P;B[p]!==""&&(R+="="+encodeURIComponent(String(B[p]))),o.push(R)}}return this.i=o.join("&")};function Sr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function Mm(o,u){u&&!o.j&&(kn(o),o.i=null,o.g.forEach(function(f,p){var R=p.toLowerCase();p!=R&&(gu(this,p),_u(this,R,f))},o)),o.j=u}function Lm(o,u){const f=new gs;if(l.Image){const p=new Image;p.onload=b(Vn,f,"TestLoadImage: loaded",!0,u,p),p.onerror=b(Vn,f,"TestLoadImage: error",!1,u,p),p.onabort=b(Vn,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=b(Vn,f,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Fm(o,u){const f=new gs,p=new AbortController,R=setTimeout(()=>{p.abort(),Vn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(R),P.ok?Vn(f,"TestPingServer: ok",!0,u):Vn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Vn(f,"TestPingServer: error",!1,u)})}function Vn(o,u,f,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(f)}catch{}}function Um(){this.g=new wi}function Bm(o,u,f){const p=f||"";try{hu(o,function(R,P){let B=R;h(R)&&(B=Ge(R)),u.push(p+P+"="+encodeURIComponent(B))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function Vi(o){this.l=o.Ub||null,this.j=o.eb||!1}V(Vi,Ar),Vi.prototype.g=function(){return new Di(this.l,this.j)},Vi.prototype.i=(function(o){return function(){return o}})({});function Di(o,u){re.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Di,re),n=Di.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ts(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Es(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;yu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function yu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Es(this):Ts(this),this.readyState==3&&yu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Es(this))},n.Qa=function(o){this.g&&(this.response=o,Es(this))},n.ga=function(){this.g&&Es(this)};function Es(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ts(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Ts(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function vu(o){let u="";return ve(o,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function wa(o,u,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=vu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Ve(o,u,f))}function Me(o){re.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Me,re);var jm=/^https?$/i,$m=["POST","PUT"];n=Me.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ma.g(),this.v=this.o?Gc(this.o):Gc(ma),this.g.onreadystatechange=m(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Eu(this,P);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)f.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())f.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call($m,u,void 0))||p||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,B]of f)this.g.setRequestHeader(P,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{wu(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Eu(this,P)}};function Eu(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,Tu(o),Ni(o)}function Tu(o){o.A||(o.A=!0,ce(o,"complete"),ce(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,ce(this,"complete"),ce(this,"abort"),Ni(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ni(this,!0)),Me.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Iu(this):this.bb())},n.bb=function(){Iu(this)};function Iu(o){if(o.h&&typeof a<"u"&&(!o.v[1]||ln(o)!=4||o.Z()!=2)){if(o.u&&ln(o)==4)Oe(o.Ea,0,o);else if(ce(o,"readystatechange"),ln(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var p;if(p=B===0){var R=String(o.D).match(fu)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!jm.test(R?R.toLowerCase():"")}f=p}if(f)ce(o,"complete"),ce(o,"success");else{o.m=6;try{var P=2<ln(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",Tu(o)}}finally{Ni(o)}}}}function Ni(o,u){if(o.g){wu(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||ce(o,"ready");try{f.onreadystatechange=p}catch{}}}function wu(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function ln(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<ln(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),St(u)}};function Au(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function qm(o){const u={};o=(o.g&&2<=ln(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if($(o[p]))continue;var f=A(o[p]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[R]||[];u[R]=P,P.push(f)}I(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Is(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function bu(o){this.Aa=0,this.i=[],this.j=new gs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Is("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Is("baseRetryDelayMs",5e3,o),this.cb=Is("retryDelaySeedMs",1e4,o),this.Wa=Is("forwardChannelMaxRetries",2,o),this.wa=Is("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new ou(o&&o.concurrentRequestLimit),this.Da=new Um,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=bu.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,p){ht(0),this.W=o,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=Ou(this,null,this.W),xi(this)};function Aa(o){if(Su(o),o.G==3){var u=o.U++,f=an(o.I);if(Ve(f,"SID",o.K),Ve(f,"RID",u),Ve(f,"TYPE","terminate"),ws(o,f),u=new Cn(o,o.j,u),u.L=2,u.v=ki(an(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=xu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ri(u)}Nu(o)}function Oi(o){o.g&&(Sa(o),o.g.cancel(),o.g=null)}function Su(o){Oi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Mi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function xi(o){if(!au(o.h)&&!o.s){o.s=!0;var u=o.Ga;Te||W(),_e||(Te(),_e=!0),Y.add(u,o),o.B=0}}function Hm(o,u){return lu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ps(m(o.Ga,o,u),Du(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new Cn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=_(P),T(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Pu(this,R,u),f=an(this.I),Ve(f,"RID",o),Ve(f,"CVER",22),this.D&&Ve(f,"X-HTTP-Session-Id",this.D),ws(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(vu(P)))+"&"+u:this.m&&wa(f,this.m,P)),Ia(this.h,R),this.Ua&&Ve(f,"TYPE","init"),this.P?(Ve(f,"$req",u),Ve(f,"SID","null"),R.T=!0,ya(R,f,null)):ya(R,f,u),this.G=2}}else this.G==3&&(o?Ru(this,o):this.i.length==0||au(this.h)||Ru(this))};function Ru(o,u){var f;u?f=u.l:f=o.U++;const p=an(o.I);Ve(p,"SID",o.K),Ve(p,"RID",f),Ve(p,"AID",o.T),ws(o,p),o.m&&o.o&&wa(p,o.m,o.o),f=new Cn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Pu(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ia(o.h,f),ya(f,p,u)}function ws(o,u){o.H&&ve(o.H,function(f,p){Ve(u,p,f)}),o.l&&hu({},function(f,p){Ve(u,p,f)})}function Pu(o,u,f){f=Math.min(o.i.length,f);var p=o.l?m(o.l.Na,o.l,o):null;e:{var R=o.i;let P=-1;for(;;){const B=["count="+f];P==-1?0<f?(P=R[0].g,B.push("ofs="+P)):P=0:B.push("ofs="+P);let Pe=!0;for(let Qe=0;Qe<f;Qe++){let Ee=R[Qe].g;const tt=R[Qe].map;if(Ee-=P,0>Ee)P=Math.max(0,R[Qe].g-100),Pe=!1;else try{Bm(tt,B,"req"+Ee+"_")}catch{p&&p(tt)}}if(Pe){p=B.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,p}function Cu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Te||W(),_e||(Te(),_e=!0),Y.add(u,o),o.v=0}}function ba(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ps(m(o.Fa,o),Du(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,ku(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ps(m(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ht(10),Oi(this),ku(this))};function Sa(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function ku(o){o.g=new Cn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=an(o.qa);Ve(u,"RID","rpc"),Ve(u,"SID",o.K),Ve(u,"AID",o.T),Ve(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Ve(u,"TO",o.ja),Ve(u,"TYPE","xmlhttp"),ws(o,u),o.m&&o.o&&wa(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=ki(an(u)),f.m=null,f.P=!0,ru(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Oi(this),ba(this),ht(19))};function Mi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function Vu(o,u){var f=null;if(o.g==u){Mi(o),Sa(o),o.g=null;var p=2}else if(Ta(o.h,u))f=u.D,cu(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;p=Ai(),ce(p,new Zc(p,f)),xi(o)}else Cu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&Hm(o,u)||p==2&&ba(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:ir(o,5);break;case 4:ir(o,10);break;case 3:ir(o,6);break;default:ir(o,2)}}}function Du(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function ir(o,u){if(o.j.info("Error code "+u),u==2){var f=m(o.fb,o),p=o.Xa;const R=!p;p=new sr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Pi(p,"https"),ki(p),R?Lm(p.toString(),f):Fm(p.toString(),f)}else ht(2);o.G=0,o.l&&o.l.sa(u),Nu(o),Su(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ht(2)):(this.j.info("Failed to ping google.com"),ht(1))};function Nu(o){if(o.G=0,o.ka=[],o.l){const u=uu(o.h);(u.length!=0||o.i.length!=0)&&(N(o.ka,u),N(o.ka,o.i),o.h.i.length=0,k(o.i),o.i.length=0),o.l.ra()}}function Ou(o,u,f){var p=f instanceof sr?an(f):new sr(f);if(p.g!="")u&&(p.g=u+"."+p.g),Ci(p,p.s);else{var R=l.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var P=new sr(null);p&&Pi(P,p),u&&(P.g=u),R&&Ci(P,R),f&&(P.l=f),p=P}return f=o.D,u=o.ya,f&&u&&Ve(p,f,u),Ve(p,"VER",o.la),ws(o,p),p}function xu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Me(new Vi({eb:f})):new Me(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Mu(){}n=Mu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Li(){}Li.prototype.g=function(o,u){return new vt(o,u)};function vt(o,u){re.call(this),this.g=new bu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!$(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Rr(this)}V(vt,re),vt.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},vt.prototype.close=function(){Aa(this.g)},vt.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Ge(o),o=f);u.i.push(new Rm(u.Ya++,o)),u.G==3&&xi(u)},vt.prototype.N=function(){this.g.l=null,delete this.j,Aa(this.g),delete this.g,vt.aa.N.call(this)};function Lu(o){pa.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(Lu,pa);function Fu(){ga.call(this),this.status=1}V(Fu,ga);function Rr(o){this.g=o}V(Rr,Mu),Rr.prototype.ua=function(){ce(this.g,"a")},Rr.prototype.ta=function(o){ce(this.g,new Lu(o))},Rr.prototype.sa=function(o){ce(this.g,new Fu)},Rr.prototype.ra=function(){ce(this.g,"b")},Li.prototype.createWebChannel=Li.prototype.g,vt.prototype.send=vt.prototype.o,vt.prototype.open=vt.prototype.m,vt.prototype.close=vt.prototype.close,Jp=function(){return new Li},Qp=function(){return Ai()},Gp=nr,vl={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bi.NO_ERROR=0,bi.TIMEOUT=8,bi.HTTP_ERROR=6,ro=bi,eu.COMPLETE="complete",Kp=eu,Qc.EventType=fs,fs.OPEN="a",fs.CLOSE="b",fs.ERROR="c",fs.MESSAGE="d",re.prototype.listen=re.prototype.K,ks=Qc,Me.prototype.listenOnce=Me.prototype.L,Me.prototype.getLastError=Me.prototype.Ka,Me.prototype.getLastErrorCode=Me.prototype.Ba,Me.prototype.getStatus=Me.prototype.Z,Me.prototype.getResponseJson=Me.prototype.Oa,Me.prototype.getResponseText=Me.prototype.oa,Me.prototype.send=Me.prototype.ea,Me.prototype.setWithCredentials=Me.prototype.Ha,Wp=Me}).apply(typeof qi<"u"?qi:typeof self<"u"?self:typeof window<"u"?window:{});const Kh="@firebase/firestore",Gh="4.8.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}it.UNAUTHENTICATED=new it(null),it.GOOGLE_CREDENTIALS=new it("google-credentials-uid"),it.FIRST_PARTY=new it("first-party-uid"),it.MOCK_USER=new it("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ss="11.10.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er=new tc("@firebase/firestore");function Dr(){return Er.logLevel}function K(n,...e){if(Er.logLevel<=pe.DEBUG){const t=e.map(gc);Er.debug(`Firestore (${ss}): ${n}`,...t)}}function wn(n,...e){if(Er.logLevel<=pe.ERROR){const t=e.map(gc);Er.error(`Firestore (${ss}): ${n}`,...t)}}function Wn(n,...e){if(Er.logLevel<=pe.WARN){const t=e.map(gc);Er.warn(`Firestore (${ss}): ${n}`,...t)}}function gc(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Xp(n,r,t)}function Xp(n,e,t){let r=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw wn(r),new Error(r)}function Se(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||Xp(e,s,r)}function le(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends Sn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yp{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class aw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(it.UNAUTHENTICATED)))}shutdown(){}}class lw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class cw{constructor(e){this.t=e,this.currentUser=it.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Se(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new gr,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new gr)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string",31837,{l:r}),new Yp(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string",2055,{h:e}),new it(e)}}class uw{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=it.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class hw{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new uw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(it.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Qh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class fw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Nt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Se(this.o===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Qh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Se(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Qh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=dw(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function fe(n,e){return n<e?-1:n>e?1:0}function El(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return fe(r,s);{const i=Zp(),a=pw(i.encode(Jh(n,t)),i.encode(Jh(e,t)));return a!==0?a:fe(r,s)}}t+=r>65535?2:1}return fe(n.length,e.length)}function Jh(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function pw(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return fe(n[t],e[t]);return fe(n.length,e.length)}function Qr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xh="__name__";class zt{constructor(e,t,r){t===void 0?t=0:t>e.length&&se(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&se(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return zt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof zt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=zt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return fe(e.length,t.length)}static compareSegments(e,t){const r=zt.isNumericId(e),s=zt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?zt.extractNumericId(e).compare(zt.extractNumericId(t)):El(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return $n.fromString(e.substring(4,e.length-2))}}class De extends zt{construct(e,t,r){return new De(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new J(O.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new De(t)}static emptyPath(){return new De([])}}const gw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Xe extends zt{construct(e,t,r){return new Xe(e,t,r)}static isValidIdentifier(e){return gw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Xe.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Xh}static keyField(){return new Xe([Xh])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new J(O.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new J(O.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new J(O.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new J(O.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Xe(t)}static emptyPath(){return new Xe([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(e){this.path=e}static fromPath(e){return new Z(De.fromString(e))}static fromName(e){return new Z(De.fromString(e).popFirst(5))}static empty(){return new Z(De.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&De.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return De.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Z(new De(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eg(n,e,t){if(!t)throw new J(O.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function mw(n,e,t,r){if(e===!0&&r===!0)throw new J(O.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Yh(n){if(!Z.isDocumentKey(n))throw new J(O.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Zh(n){if(Z.isDocumentKey(n))throw new J(O.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function tg(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function _c(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":se(12329,{type:typeof n})}function qn(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new J(O.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=_c(n);throw new J(O.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function je(n,e){const t={typeString:n};return e&&(t.value=e),t}function mi(n,e){if(!tg(n))throw new J(O.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new J(O.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=-62135596800,tf=1e6;class Ne{static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*tf);return new Ne(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(O.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<ef)throw new J(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(O.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/tf}_compareTo(e){return this.seconds===e.seconds?fe(this.nanoseconds,e.nanoseconds):fe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ne._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(mi(e,Ne._jsonSchema))return new Ne(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-ef;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ne._jsonSchemaVersion="firestore/timestamp/1.0",Ne._jsonSchema={type:je("string",Ne._jsonSchemaVersion),seconds:je("number"),nanoseconds:je("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{static fromTimestamp(e){return new oe(e)}static min(){return new oe(new Ne(0,0))}static max(){return new oe(new Ne(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ti=-1;function _w(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=oe.fromTimestamp(r===1e9?new Ne(t+1,0):new Ne(t,r));return new Kn(s,Z.empty(),e)}function yw(n){return new Kn(n.readTime,n.key,ti)}class Kn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Kn(oe.min(),Z.empty(),ti)}static max(){return new Kn(oe.max(),Z.empty(),ti)}}function vw(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Z.comparator(n.documentKey,e.documentKey),t!==0?t:fe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ew="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Tw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function is(n){if(n.code!==O.FAILED_PRECONDITION||n.message!==Ew)throw n;K("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&se(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new D(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof D?t:D.resolve(t)}catch(t){return D.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):D.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):D.reject(t)}static resolve(e){return new D(((t,r)=>{t(e)}))}static reject(e){return new D(((t,r)=>{r(e)}))}static waitFor(e){return new D(((t,r)=>{let s=0,i=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&t()}),(c=>r(c)))})),a=!0,i===s&&t()}))}static or(e){let t=D.resolve(!1);for(const r of e)t=t.next((s=>s?D.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new D(((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next((d=>{a[h]=d,++l,l===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,t){return new D(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function Iw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function os(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Jo.ue=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc=-1;function Xo(n){return n==null}function Ao(n){return n===0&&1/n==-1/0}function ww(n){return typeof n=="number"&&Number.isInteger(n)&&!Ao(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ng="";function Aw(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=nf(e)),e=bw(n.get(t),e);return nf(e)}function bw(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case ng:t+="";break;default:t+=i}}return t}function nf(n){return n+ng+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function er(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function rg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xe{constructor(e,t){this.comparator=e,this.root=t||Je.EMPTY}insert(e,t){return new xe(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Je.BLACK,null,null))}remove(e){return new xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Je.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hi(this.root,e,this.comparator,!0)}}class Hi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Je{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Je.RED,this.left=s??Je.EMPTY,this.right=i??Je.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Je(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Je.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Je.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Je.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Je.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw se(43730,{key:this.key,value:this.value});if(this.right.isRed())throw se(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw se(27949);return e+(this.isRed()?0:1)}}Je.EMPTY=null,Je.RED=!0,Je.BLACK=!1;Je.EMPTY=new class{constructor(){this.size=0}get key(){throw se(57766)}get value(){throw se(16141)}get color(){throw se(16727)}get left(){throw se(29726)}get right(){throw se(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Je(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.comparator=e,this.data=new xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new sf(this.data.getIterator())}getIteratorFrom(e){return new sf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof ze)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ze(this.comparator);return t.data=e,t}}class sf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It{constructor(e){this.fields=e,e.sort(Xe.comparator)}static empty(){return new It([])}unionWith(e){let t=new ze(Xe.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new It(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ye{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new sg("Invalid base64 string: "+i):i}})(e);return new Ye(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Ye(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return fe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ye.EMPTY_BYTE_STRING=new Ye("");const Sw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Gn(n){if(Se(!!n,39018),typeof n=="string"){let e=0;const t=Sw.exec(n);if(Se(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Fe(n.seconds),nanos:Fe(n.nanos)}}function Fe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Qn(n){return typeof n=="string"?Ye.fromBase64String(n):Ye.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ig="server_timestamp",og="__type__",ag="__previous_value__",lg="__local_write_time__";function vc(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[og])===null||t===void 0?void 0:t.stringValue)===ig}function Yo(n){const e=n.mapValue.fields[ag];return vc(e)?Yo(e):e}function ni(n){const e=Gn(n.mapValue.fields[lg].timestampValue);return new Ne(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,t,r,s,i,a,l,c,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d}}const bo="(default)";class ri{constructor(e,t){this.projectId=e,this.database=t||bo}static empty(){return new ri("","")}get isDefaultDatabase(){return this.database===bo}isEqual(e){return e instanceof ri&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg="__type__",Pw="__max__",zi={mapValue:{}},ug="__vector__",So="value";function Jn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?vc(n)?4:kw(n)?9007199254740991:Cw(n)?10:11:se(28295,{value:n})}function sn(n,e){if(n===e)return!0;const t=Jn(n);if(t!==Jn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ni(n).isEqual(ni(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Gn(s.timestampValue),l=Gn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return Qn(s.bytesValue).isEqual(Qn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return Fe(s.geoPointValue.latitude)===Fe(i.geoPointValue.latitude)&&Fe(s.geoPointValue.longitude)===Fe(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return Fe(s.integerValue)===Fe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=Fe(s.doubleValue),l=Fe(i.doubleValue);return a===l?Ao(a)===Ao(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Qr(n.arrayValue.values||[],e.arrayValue.values||[],sn);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(rf(a)!==rf(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!sn(a[c],l[c])))return!1;return!0})(n,e);default:return se(52216,{left:n})}}function si(n,e){return(n.values||[]).find((t=>sn(t,e)))!==void 0}function Jr(n,e){if(n===e)return 0;const t=Jn(n),r=Jn(e);if(t!==r)return fe(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return fe(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=Fe(i.integerValue||i.doubleValue),c=Fe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(n,e);case 3:return of(n.timestampValue,e.timestampValue);case 4:return of(ni(n),ni(e));case 5:return El(n.stringValue,e.stringValue);case 6:return(function(i,a){const l=Qn(i),c=Qn(a);return l.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=fe(l[h],c[h]);if(d!==0)return d}return fe(l.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=fe(Fe(i.latitude),Fe(a.latitude));return l!==0?l:fe(Fe(i.longitude),Fe(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return af(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var l,c,h,d;const g=i.fields||{},m=a.fields||{},b=(l=g[So])===null||l===void 0?void 0:l.arrayValue,V=(c=m[So])===null||c===void 0?void 0:c.arrayValue,k=fe(((h=b==null?void 0:b.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return k!==0?k:af(b,V)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===zi.mapValue&&a===zi.mapValue)return 0;if(i===zi.mapValue)return 1;if(a===zi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let g=0;g<c.length&&g<d.length;++g){const m=El(c[g],d[g]);if(m!==0)return m;const b=Jr(l[c[g]],h[d[g]]);if(b!==0)return b}return fe(c.length,d.length)})(n.mapValue,e.mapValue);default:throw se(23264,{le:t})}}function of(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return fe(n,e);const t=Gn(n),r=Gn(e),s=fe(t.seconds,r.seconds);return s!==0?s:fe(t.nanos,r.nanos)}function af(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Jr(t[s],r[s]);if(i)return i}return fe(t.length,r.length)}function Xr(n){return Tl(n)}function Tl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Gn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return Qn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return Z.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=Tl(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${Tl(t.fields[a])}`;return s+"}"})(n.mapValue):se(61005,{value:n})}function so(n){switch(Jn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Yo(n);return e?16+so(e):16;case 5:return 2*n.stringValue.length;case 6:return Qn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+so(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return er(r.fields,((i,a)=>{s+=i.length+so(a)})),s})(n.mapValue);default:throw se(13486,{value:n})}}function Il(n){return!!n&&"integerValue"in n}function Ec(n){return!!n&&"arrayValue"in n}function lf(n){return!!n&&"nullValue"in n}function cf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function io(n){return!!n&&"mapValue"in n}function Cw(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[cg])===null||t===void 0?void 0:t.stringValue)===ug}function qs(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return er(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=qs(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=qs(n.arrayValue.values[t]);return e}return Object.assign({},n)}function kw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Pw}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yt{constructor(e){this.value=e}static empty(){return new yt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!io(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=qs(t)}setAll(e){let t=Xe.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=qs(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());io(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return sn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];io(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){er(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new yt(qs(this.value))}}function hg(n){const e=[];return er(n.fields,((t,r)=>{const s=new Xe([t]);if(io(r)){const i=hg(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new It(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new at(e,0,oe.min(),oe.min(),oe.min(),yt.empty(),0)}static newFoundDocument(e,t,r,s){return new at(e,1,t,oe.min(),r,s,0)}static newNoDocument(e,t){return new at(e,2,t,oe.min(),oe.min(),yt.empty(),0)}static newUnknownDocument(e,t){return new at(e,3,t,oe.min(),oe.min(),yt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(oe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=yt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=yt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=oe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof at&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new at(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t){this.position=e,this.inclusive=t}}function uf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=Z.comparator(Z.fromName(a.referenceValue),t.key):r=Jr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function hf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!sn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Po{constructor(e,t="asc"){this.field=e,this.dir=t}}function Vw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fg{}class qe extends fg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Nw(e,t,r):t==="array-contains"?new Mw(e,r):t==="in"?new Lw(e,r):t==="not-in"?new Fw(e,r):t==="array-contains-any"?new Uw(e,r):new qe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Ow(e,r):new xw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Jr(t,this.value)):t!==null&&Jn(this.value)===Jn(t)&&this.matchesComparison(Jr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return se(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class on extends fg{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new on(e,t)}matches(e){return dg(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function dg(n){return n.op==="and"}function pg(n){return Dw(n)&&dg(n)}function Dw(n){for(const e of n.filters)if(e instanceof on)return!1;return!0}function wl(n){if(n instanceof qe)return n.field.canonicalString()+n.op.toString()+Xr(n.value);if(pg(n))return n.filters.map((e=>wl(e))).join(",");{const e=n.filters.map((t=>wl(t))).join(",");return`${n.op}(${e})`}}function gg(n,e){return n instanceof qe?(function(r,s){return s instanceof qe&&r.op===s.op&&r.field.isEqual(s.field)&&sn(r.value,s.value)})(n,e):n instanceof on?(function(r,s){return s instanceof on&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&gg(a,s.filters[l])),!0):!1})(n,e):void se(19439)}function mg(n){return n instanceof qe?(function(t){return`${t.field.canonicalString()} ${t.op} ${Xr(t.value)}`})(n):n instanceof on?(function(t){return t.op.toString()+" {"+t.getFilters().map(mg).join(" ,")+"}"})(n):"Filter"}class Nw extends qe{constructor(e,t,r){super(e,t,r),this.key=Z.fromName(r.referenceValue)}matches(e){const t=Z.comparator(e.key,this.key);return this.matchesComparison(t)}}class Ow extends qe{constructor(e,t){super(e,"in",t),this.keys=_g("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class xw extends qe{constructor(e,t){super(e,"not-in",t),this.keys=_g("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function _g(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>Z.fromName(r.referenceValue)))}class Mw extends qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ec(t)&&si(t.arrayValue,this.value)}}class Lw extends qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&si(this.value.arrayValue,t)}}class Fw extends qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(si(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!si(this.value.arrayValue,t)}}class Uw extends qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ec(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>si(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bw{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Pe=null}}function ff(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Bw(n,e,t,r,s,i,a)}function Tc(n){const e=le(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>wl(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Xo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Xr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Xr(r))).join(",")),e.Pe=t}return e.Pe}function Ic(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Vw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!gg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!hf(n.startAt,e.startAt)&&hf(n.endAt,e.endAt)}function Al(n){return Z.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zo{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function jw(n,e,t,r,s,i,a,l){return new Zo(n,e,t,r,s,i,a,l)}function wc(n){return new Zo(n)}function df(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function $w(n){return n.collectionGroup!==null}function Hs(n){const e=le(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new ze(Xe.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new Po(i,r))})),t.has(Xe.keyField().canonicalString())||e.Te.push(new Po(Xe.keyField(),r))}return e.Te}function Xt(n){const e=le(n);return e.Ie||(e.Ie=qw(e,Hs(n))),e.Ie}function qw(n,e){if(n.limitType==="F")return ff(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new Po(s.field,i)}));const t=n.endAt?new Ro(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Ro(n.startAt.position,n.startAt.inclusive):null;return ff(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function bl(n,e,t){return new Zo(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ea(n,e){return Ic(Xt(n),Xt(e))&&n.limitType===e.limitType}function yg(n){return`${Tc(Xt(n))}|lt:${n.limitType}`}function Nr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>mg(s))).join(", ")}]`),Xo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Xr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Xr(s))).join(",")),`Target(${r})`})(Xt(n))}; limitType=${n.limitType})`}function ta(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):Z.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of Hs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,c){const h=uf(a,l,c);return a.inclusive?h<=0:h<0})(r.startAt,Hs(r),s)||r.endAt&&!(function(a,l,c){const h=uf(a,l,c);return a.inclusive?h>=0:h>0})(r.endAt,Hs(r),s))})(n,e)}function Hw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function vg(n){return(e,t)=>{let r=!1;for(const s of Hs(n)){const i=zw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function zw(n,e,t){const r=n.field.isKeyField()?Z.comparator(e.key,t.key):(function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Jr(c,h):se(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return se(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){er(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return rg(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ww=new xe(Z.comparator);function An(){return Ww}const Eg=new xe(Z.comparator);function Vs(...n){let e=Eg;for(const t of n)e=e.insert(t.key,t);return e}function Tg(n){let e=Eg;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function hr(){return zs()}function Ig(){return zs()}function zs(){return new Ir((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Kw=new xe(Z.comparator),Gw=new ze(Z.comparator);function ge(...n){let e=Gw;for(const t of n)e=e.add(t);return e}const Qw=new ze(fe);function Jw(){return Qw}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ao(e)?"-0":e}}function wg(n){return{integerValue:""+n}}function Xw(n,e){return ww(e)?wg(e):Ac(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class na{constructor(){this._=void 0}}function Yw(n,e,t){return n instanceof ii?(function(s,i){const a={fields:{[og]:{stringValue:ig},[lg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&vc(i)&&(i=Yo(i)),i&&(a.fields[ag]=i),{mapValue:a}})(t,e):n instanceof oi?bg(n,e):n instanceof ai?Sg(n,e):(function(s,i){const a=Ag(s,i),l=pf(a)+pf(s.Ee);return Il(a)&&Il(s.Ee)?wg(l):Ac(s.serializer,l)})(n,e)}function Zw(n,e,t){return n instanceof oi?bg(n,e):n instanceof ai?Sg(n,e):t}function Ag(n,e){return n instanceof Co?(function(r){return Il(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ii extends na{}class oi extends na{constructor(e){super(),this.elements=e}}function bg(n,e){const t=Rg(e);for(const r of n.elements)t.some((s=>sn(s,r)))||t.push(r);return{arrayValue:{values:t}}}class ai extends na{constructor(e){super(),this.elements=e}}function Sg(n,e){let t=Rg(e);for(const r of n.elements)t=t.filter((s=>!sn(s,r)));return{arrayValue:{values:t}}}class Co extends na{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function pf(n){return Fe(n.integerValue||n.doubleValue)}function Rg(n){return Ec(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eA{constructor(e,t){this.field=e,this.transform=t}}function tA(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof oi&&s instanceof oi||r instanceof ai&&s instanceof ai?Qr(r.elements,s.elements,sn):r instanceof Co&&s instanceof Co?sn(r.Ee,s.Ee):r instanceof ii&&s instanceof ii})(n.transform,e.transform)}class nA{constructor(e,t){this.version=e,this.transformResults=t}}class wt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new wt}static exists(e){return new wt(void 0,e)}static updateTime(e){return new wt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function oo(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ra{}function Pg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new sa(n.key,wt.none()):new _i(n.key,n.data,wt.none());{const t=n.data,r=yt.empty();let s=new ze(Xe.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new tr(n.key,r,new It(s.toArray()),wt.none())}}function rA(n,e,t){n instanceof _i?(function(s,i,a){const l=s.value.clone(),c=mf(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof tr?(function(s,i,a){if(!oo(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=mf(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Cg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function Ws(n,e,t,r){return n instanceof _i?(function(i,a,l,c){if(!oo(i.precondition,a))return l;const h=i.value.clone(),d=_f(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof tr?(function(i,a,l,c){if(!oo(i.precondition,a))return l;const h=_f(i.fieldTransforms,c,a),d=a.data;return d.setAll(Cg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,e,t,r):(function(i,a,l){return oo(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function sA(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=Ag(r.transform,s||null);i!=null&&(t===null&&(t=yt.empty()),t.set(r.field,i))}return t||null}function gf(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qr(r,s,((i,a)=>tA(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _i extends ra{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class tr extends ra{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Cg(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function mf(n,e,t){const r=new Map;Se(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,Zw(a,l,t[s]))}return r}function _f(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,Yw(i,a,e))}return r}class sa extends ra{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class iA extends ra{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oA{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&rA(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Ws(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Ws(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Ig();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=Pg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(oe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),ge())}isEqual(e){return this.batchId===e.batchId&&Qr(this.mutations,e.mutations,((t,r)=>gf(t,r)))&&Qr(this.baseMutations,e.baseMutations,((t,r)=>gf(t,r)))}}class bc{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Se(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return Kw})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new bc(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Be,ye;function cA(n){switch(n){case O.OK:return se(64938);case O.CANCELLED:case O.UNKNOWN:case O.DEADLINE_EXCEEDED:case O.RESOURCE_EXHAUSTED:case O.INTERNAL:case O.UNAVAILABLE:case O.UNAUTHENTICATED:return!1;case O.INVALID_ARGUMENT:case O.NOT_FOUND:case O.ALREADY_EXISTS:case O.PERMISSION_DENIED:case O.FAILED_PRECONDITION:case O.ABORTED:case O.OUT_OF_RANGE:case O.UNIMPLEMENTED:case O.DATA_LOSS:return!0;default:return se(15467,{code:n})}}function kg(n){if(n===void 0)return wn("GRPC error has no .code"),O.UNKNOWN;switch(n){case Be.OK:return O.OK;case Be.CANCELLED:return O.CANCELLED;case Be.UNKNOWN:return O.UNKNOWN;case Be.DEADLINE_EXCEEDED:return O.DEADLINE_EXCEEDED;case Be.RESOURCE_EXHAUSTED:return O.RESOURCE_EXHAUSTED;case Be.INTERNAL:return O.INTERNAL;case Be.UNAVAILABLE:return O.UNAVAILABLE;case Be.UNAUTHENTICATED:return O.UNAUTHENTICATED;case Be.INVALID_ARGUMENT:return O.INVALID_ARGUMENT;case Be.NOT_FOUND:return O.NOT_FOUND;case Be.ALREADY_EXISTS:return O.ALREADY_EXISTS;case Be.PERMISSION_DENIED:return O.PERMISSION_DENIED;case Be.FAILED_PRECONDITION:return O.FAILED_PRECONDITION;case Be.ABORTED:return O.ABORTED;case Be.OUT_OF_RANGE:return O.OUT_OF_RANGE;case Be.UNIMPLEMENTED:return O.UNIMPLEMENTED;case Be.DATA_LOSS:return O.DATA_LOSS;default:return se(39323,{code:n})}}(ye=Be||(Be={}))[ye.OK=0]="OK",ye[ye.CANCELLED=1]="CANCELLED",ye[ye.UNKNOWN=2]="UNKNOWN",ye[ye.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ye[ye.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ye[ye.NOT_FOUND=5]="NOT_FOUND",ye[ye.ALREADY_EXISTS=6]="ALREADY_EXISTS",ye[ye.PERMISSION_DENIED=7]="PERMISSION_DENIED",ye[ye.UNAUTHENTICATED=16]="UNAUTHENTICATED",ye[ye.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ye[ye.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ye[ye.ABORTED=10]="ABORTED",ye[ye.OUT_OF_RANGE=11]="OUT_OF_RANGE",ye[ye.UNIMPLEMENTED=12]="UNIMPLEMENTED",ye[ye.INTERNAL=13]="INTERNAL",ye[ye.UNAVAILABLE=14]="UNAVAILABLE",ye[ye.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uA=new $n([4294967295,4294967295],0);function yf(n){const e=Zp().encode(n),t=new zp;return t.update(e),new Uint8Array(t.digest())}function vf(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new $n([t,r],0),new $n([s,i],0)]}class Sc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new Ds(`Invalid padding: ${t}`);if(r<0)throw new Ds(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new Ds(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new Ds(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=$n.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply($n.fromNumber(r)));return s.compare(uA)===1&&(s=new $n([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=yf(e),[r,s]=vf(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new Sc(i,s,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.fe===0)return;const t=yf(e),[r,s]=vf(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class Ds extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,yi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ia(oe.min(),s,new xe(fe),An(),ge())}}class yi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new yi(r,t,ge(),ge(),ge())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Vg{constructor(e,t){this.targetId=e,this.De=t}}class Dg{constructor(e,t,r=Ye.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class Ef{constructor(){this.ve=0,this.Ce=Tf(),this.Fe=Ye.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=ge(),t=ge(),r=ge();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:se(38017,{changeType:i})}})),new yi(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Tf()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Se(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class hA{constructor(e){this.We=e,this.Ge=new Map,this.ze=An(),this.je=Wi(),this.Je=Wi(),this.He=new xe(fe)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:se(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Al(i))if(r===0){const a=new Z(i.path);this.Xe(t,a,at.newNoDocument(a,oe.min()))}else Se(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const l=this._t(e),c=l?this.ut(l,e,a):1;if(c!==0){this.rt(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=Qn(r).toUint8Array()}catch(c){if(c instanceof sg)return Wn("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new Sc(a,s,i)}catch(c){return Wn(c instanceof Ds?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const l=this.st(a);if(l){if(i.current&&Al(l.target)){const c=new Z(l.target.path);this.Tt(c).has(a)||this.It(a,c)||this.Xe(a,c,at.newNoDocument(c,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=ge();this.Je.forEach(((i,a)=>{let l=!0;a.forEachWhile((c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new ia(e,t,this.He,this.ze,r);return this.ze=An(),this.je=Wi(),this.Je=Wi(),this.He=new xe(fe),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Ef,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new ze(fe),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new ze(fe),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||K("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ef),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Wi(){return new xe(Z.comparator)}function Tf(){return new xe(Z.comparator)}const fA={asc:"ASCENDING",desc:"DESCENDING"},dA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},pA={and:"AND",or:"OR"};class gA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Sl(n,e){return n.useProto3Json||Xo(e)?e:{value:e}}function ko(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ng(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function mA(n,e){return ko(n,e.toTimestamp())}function Yt(n){return Se(!!n,49232),oe.fromTimestamp((function(t){const r=Gn(t);return new Ne(r.seconds,r.nanos)})(n))}function Rc(n,e){return Rl(n,e).canonicalString()}function Rl(n,e){const t=(function(s){return new De(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function Og(n){const e=De.fromString(n);return Se(Ug(e),10190,{key:e.toString()}),e}function Pl(n,e){return Rc(n.databaseId,e.path)}function Ga(n,e){const t=Og(e);if(t.get(1)!==n.databaseId.projectId)throw new J(O.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new J(O.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Z(Mg(t))}function xg(n,e){return Rc(n.databaseId,e)}function _A(n){const e=Og(n);return e.length===4?De.emptyPath():Mg(e)}function Cl(n){return new De(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Mg(n){return Se(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function If(n,e,t){return{name:Pl(n,e),fields:t.value.mapValue.fields}}function yA(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:se(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Se(d===void 0||typeof d=="string",58123),Ye.fromBase64String(d||"")):(Se(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Ye.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const d=h.code===void 0?O.UNKNOWN:kg(h.code);return new J(d,h.message||"")})(a);t=new Dg(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Ga(n,r.document.name),i=Yt(r.document.updateTime),a=r.document.createTime?Yt(r.document.createTime):oe.min(),l=new yt({mapValue:{fields:r.document.fields}}),c=at.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];t=new ao(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Ga(n,r.document),i=r.readTime?Yt(r.readTime):oe.min(),a=at.newNoDocument(s,i),l=r.removedTargetIds||[];t=new ao([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Ga(n,r.document),i=r.removedTargetIds||[];t=new ao([],i,s,null)}else{if(!("filter"in e))return se(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new lA(s,i),l=r.targetId;t=new Vg(l,a)}}return t}function vA(n,e){let t;if(e instanceof _i)t={update:If(n,e.key,e.value)};else if(e instanceof sa)t={delete:Pl(n,e.key)};else if(e instanceof tr)t={update:If(n,e.key,e.data),updateMask:PA(e.fieldMask)};else{if(!(e instanceof iA))return se(16599,{Rt:e.type});t={verify:Pl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const l=a.transform;if(l instanceof ii)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof oi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ai)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Co)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw se(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:mA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:se(27497)})(n,e.precondition)),t}function EA(n,e){return n&&n.length>0?(Se(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Yt(s.updateTime):Yt(i);return a.isEqual(oe.min())&&(a=Yt(i)),new nA(a,s.transformResults||[])})(t,e)))):[]}function TA(n,e){return{documents:[xg(n,e.path)]}}function IA(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=xg(n,s);const i=(function(h){if(h.length!==0)return Fg(on.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(m){return{field:Or(m.field),direction:bA(m.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Sl(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:s}}function wA(n){let e=_A(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Se(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(g){const m=Lg(g);return m instanceof on&&pg(m)?m.getFilters():[m]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((m=>(function(V){return new Po(xr(V.field),(function(N){switch(N){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(m)))})(t.orderBy));let l=null;t.limit&&(l=(function(g){let m;return m=typeof g=="object"?g.value:g,Xo(m)?null:m})(t.limit));let c=null;t.startAt&&(c=(function(g){const m=!!g.before,b=g.values||[];return new Ro(b,m)})(t.startAt));let h=null;return t.endAt&&(h=(function(g){const m=!g.before,b=g.values||[];return new Ro(b,m)})(t.endAt)),jw(e,s,a,i,l,"F",c,h)}function AA(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return se(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Lg(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=xr(t.unaryFilter.field);return qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xr(t.unaryFilter.field);return qe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xr(t.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xr(t.unaryFilter.field);return qe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return se(61313);default:return se(60726)}})(n):n.fieldFilter!==void 0?(function(t){return qe.create(xr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return se(58110);default:return se(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return on.create(t.compositeFilter.filters.map((r=>Lg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return se(1026)}})(t.compositeFilter.op))})(n):se(30097,{filter:n})}function bA(n){return fA[n]}function SA(n){return dA[n]}function RA(n){return pA[n]}function Or(n){return{fieldPath:n.canonicalString()}}function xr(n){return Xe.fromServerFormat(n.fieldPath)}function Fg(n){return n instanceof qe?(function(t){if(t.op==="=="){if(cf(t.value))return{unaryFilter:{field:Or(t.field),op:"IS_NAN"}};if(lf(t.value))return{unaryFilter:{field:Or(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(cf(t.value))return{unaryFilter:{field:Or(t.field),op:"IS_NOT_NAN"}};if(lf(t.value))return{unaryFilter:{field:Or(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Or(t.field),op:SA(t.op),value:t.value}}})(n):n instanceof on?(function(t){const r=t.getFilters().map((s=>Fg(s)));return r.length===1?r[0]:{compositeFilter:{op:RA(t.op),filters:r}}})(n):se(54877,{filter:n})}function PA(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Ug(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e,t,r,s,i=oe.min(),a=oe.min(),l=Ye.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new Fn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Fn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.gt=e}}function kA(n){const e=wA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?bl(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VA{constructor(){this.Dn=new DA}addToCollectionParentIndex(e,t){return this.Dn.add(t),D.resolve()}getCollectionParents(e,t){return D.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return D.resolve()}deleteFieldIndex(e,t){return D.resolve()}deleteAllFieldIndexes(e){return D.resolve()}createTargetIndexes(e,t){return D.resolve()}getDocumentsMatchingTarget(e,t){return D.resolve(null)}getIndexType(e,t){return D.resolve(0)}getFieldIndexes(e,t){return D.resolve([])}getNextCollectionGroupToUpdate(e){return D.resolve(null)}getMinOffset(e,t){return D.resolve(Kn.min())}getMinOffsetFromCollectionGroup(e,t){return D.resolve(Kn.min())}updateCollectionGroup(e,t,r){return D.resolve()}updateIndexEntries(e,t){return D.resolve()}}class DA{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new ze(De.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new ze(De.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Bg=41943040;class _t{static withCacheSize(e){return new _t(e,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */_t.DEFAULT_COLLECTION_PERCENTILE=10,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,_t.DEFAULT=new _t(Bg,_t.DEFAULT_COLLECTION_PERCENTILE,_t.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),_t.DISABLED=new _t(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yr{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Yr(0)}static ur(){return new Yr(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Af="LruGarbageCollector",NA=1048576;function bf([n,e],[t,r]){const s=fe(n,t);return s===0?fe(e,r):s}class OA{constructor(e){this.Tr=e,this.buffer=new ze(bf),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();bf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class xA{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){K(Af,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){os(t)?K(Af,"Ignoring IndexedDB error during garbage collection: ",t):await is(t)}await this.Rr(3e5)}))}}class MA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return D.resolve(Jo.ue);const r=new OA(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),D.resolve(wf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wf):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,l=Date.now(),this.removeTargets(e,r,t)))).next((g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(h=Date.now(),Dr()<=pe.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),D.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function LA(n,e){return new MA(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FA{constructor(){this.changes=new Ir((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,at.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?D.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UA{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&Ws(r.mutation,s,It.empty(),Ne.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,ge()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=ge()){const s=hr();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Vs();return i.forEach(((l,c)=>{a=a.insert(l,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=hr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,ge())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,s){let i=An();const a=zs(),l=(function(){return zs()})();return t.forEach(((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof tr)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),Ws(d.mutation,h,d.mutation.getFieldMask(),Ne.now())):a.set(h.key,It.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((h,d)=>a.set(h,d))),t.forEach(((h,d)=>{var g;return l.set(h,new UA(d,(g=a.get(h))!==null&&g!==void 0?g:null))})),l)))}recalculateAndSaveOverlays(e,t){const r=zs();let s=new xe(((a,l)=>a-l)),i=ge();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((c=>{const h=t.get(c);if(h===null)return;let d=r.get(c)||It.empty();d=l.applyToLocalView(h,d),r.set(c,d);const g=(s.get(l.batchId)||ge()).add(c);s=s.insert(l.batchId,g)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,g=Ig();d.forEach((m=>{if(!i.has(m)){const b=Pg(t.get(m),r.get(m));b!==null&&g.set(m,b),i=i.add(m)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return D.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return Z.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):$w(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):D.resolve(hr());let l=ti,c=i;return a.next((h=>D.forEach(h,((d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(e,d).next((m=>{c=c.insert(d,m)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,c,h,ge()))).next((d=>({batchId:l,changes:Tg(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Z(t)).next((r=>{let s=Vs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Vs();return this.indexManager.getCollectionParents(e,i).next((l=>D.forEach(l,(c=>{const h=(function(g,m){return new Zo(m,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((g,m)=>{a=a.insert(g,m)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,at.newInvalidDocument(d)))}));let l=Vs();return a.forEach(((c,h)=>{const d=i.get(c);d!==void 0&&Ws(d.mutation,h,It.empty(),Ne.now()),ta(t,h)&&(l=l.insert(c,h))})),l}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jA{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return D.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Yt(s.createTime)}})(t)),D.resolve()}getNamedQuery(e,t){return D.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:kA(s.bundledQuery),readTime:Yt(s.readTime)}})(t)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $A{constructor(){this.overlays=new xe(Z.comparator),this.kr=new Map}getOverlay(e,t){return D.resolve(this.overlays.get(t))}getOverlays(e,t){const r=hr();return D.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),D.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),D.resolve()}getOverlaysForCollection(e,t,r){const s=hr(),i=t.length+1,a=new Z(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return D.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new xe(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=hr(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=hr(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,d)=>l.set(h,d))),!(l.size()>=s)););return D.resolve(l)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new aA(t,r));let i=this.kr.get(t);i===void 0&&(i=ge(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qA{constructor(){this.sessionToken=Ye.EMPTY_BYTE_STRING}getSessionToken(e){return D.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,D.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pc{constructor(){this.qr=new ze(Ke.Qr),this.$r=new ze(Ke.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new Ke(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new Ke(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new Z(new De([])),r=new Ke(t,e),s=new Ke(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new Z(new De([])),r=new Ke(t,e),s=new Ke(t,e+1);let i=ge();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new Ke(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ke{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return Z.comparator(e.key,t.key)||fe(e.Hr,t.Hr)}static Ur(e,t){return fe(e.Hr,t.Hr)||Z.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new ze(Ke.Qr)}checkEmpty(e){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new oA(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Yr=this.Yr.add(new Ke(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return D.resolve(a)}lookupMutationBatch(e,t){return D.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?yc:this.er-1)}getAllMutationBatches(e){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ke(t,0),s=new Ke(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const l=this.Zr(a.Hr);i.push(l)})),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new ze(fe);return t.forEach((s=>{const i=new Ke(s,0),a=new Ke(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(l=>{r=r.add(l.Hr)}))})),D.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;Z.isDocumentKey(i)||(i=i.child(""));const a=new Ke(new Z(i),0);let l=new ze(fe);return this.Yr.forEachWhile((c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Hr)),!0)}),a),D.resolve(this.ei(l))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Se(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return D.forEach(t.mutations,(s=>{const i=new Ke(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new Ke(t,0),s=this.Yr.firstAfterOrEqual(r);return D.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,D.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zA{constructor(e){this.ni=e,this.docs=(function(){return new xe(Z.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return D.resolve(r?r.document.mutableCopy():at.newInvalidDocument(t))}getEntries(e,t){let r=An();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():at.newInvalidDocument(s))})),D.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=An();const a=t.path,l=new Z(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||vw(yw(d),r)<=0||(s.has(d.key)||ta(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(e,t,r,s){se(9500)}ri(e,t){return D.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new WA(this)}getSize(e){return D.resolve(this.size)}}class WA extends FA{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),D.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA{constructor(e){this.persistence=e,this.ii=new Ir((t=>Tc(t)),Ic),this.lastRemoteSnapshotVersion=oe.min(),this.highestTargetId=0,this.si=0,this.oi=new Pc,this.targetCount=0,this._i=Yr.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),D.resolve()}getLastRemoteSnapshotVersion(e){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return D.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),D.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Yr(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,D.resolve()}updateTargetData(e,t){return this.hr(t),D.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,D.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),D.waitFor(i).next((()=>s))}getTargetCount(e){return D.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return D.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),D.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),D.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),D.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return D.resolve(r)}containsKey(e,t){return D.resolve(this.oi.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jg{constructor(e,t){this.ai={},this.overlays={},this.ui=new Jo(0),this.ci=!1,this.ci=!0,this.li=new qA,this.referenceDelegate=e(this),this.hi=new KA(this),this.indexManager=new VA,this.remoteDocumentCache=(function(s){return new zA(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new CA(t),this.Ti=new jA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new $A,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new HA(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){K("MemoryPersistence","Starting transaction:",e);const s=new GA(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return D.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class GA extends Tw{constructor(e){super(),this.currentSequenceNumber=e}}class Cc{constructor(e){this.persistence=e,this.Ai=new Pc,this.Ri=null}static Vi(e){return new Cc(e)}get mi(){if(this.Ri)return this.Ri;throw se(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),D.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),D.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),D.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.mi,(r=>{const s=Z.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,oe.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return D.or([()=>D.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class Vo{constructor(e,t){this.persistence=e,this.gi=new Ir((r=>Aw(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=LA(this,t)}static Vi(e,t){return new Vo(e,t)}Ii(){}di(e){return D.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return D.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?D.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((l=>{l||(r++,i.removeEntry(a,oe.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),D.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),D.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=so(e.data.value)),t}Sr(e,t,r){return D.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return D.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=ge(),s=ge();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new kc(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return $v()?8:Iw(ut())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new QA;return this.ws(e,t,a).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,t,a,l.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Dr()<=pe.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Nr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),D.resolve()):(Dr()<=pe.DEBUG&&K("QueryEngine","Query:",Nr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Dr()<=pe.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Nr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Xt(t))):D.resolve())}ps(e,t){if(df(t))return D.resolve(null);let r=Xt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=bl(t,null,"F"),r=Xt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=ge(...i);return this.gs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const h=this.bs(t,l);return this.Ds(t,h,a,c.readTime)?this.ps(e,bl(t,null,"F")):this.vs(e,h,t,c)}))))})))))}ys(e,t,r,s){return df(t)||s.isEqual(oe.min())?D.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?D.resolve(null):(Dr()<=pe.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Nr(t)),this.vs(e,a,t,_w(s,ti)).next((l=>l)))}))}bs(e,t){let r=new ze(vg(e));return t.forEach(((s,i)=>{ta(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Dr()<=pe.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Nr(t)),this.gs.getDocumentsMatchingQuery(e,t,Kn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vc="LocalStore",XA=3e8;class YA{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new xe(fe),this.Ms=new Ir((i=>Tc(i)),Ic),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new BA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function ZA(n,e,t,r){return new YA(n,e,t,r)}async function $g(n,e){const t=le(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let c=ge();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function e0(n,e){const t=le(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,h,d){const g=h.batch,m=g.keys();let b=D.resolve();return m.forEach((V=>{b=b.next((()=>d.getEntry(c,V))).next((k=>{const N=h.docVersions.get(V);Se(N!==null,48541),k.version.compareTo(N)<0&&(g.applyToRemoteDocument(k,h),k.isValidDocument()&&(k.setReadTime(h.commitVersion),d.addEntry(k)))}))})),b.next((()=>l.mutationQueue.removeMutationBatch(c,g)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=ge();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function qg(n){const e=le(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function t0(n,e){const t=le(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const l=[];e.targetChanges.forEach(((d,g)=>{const m=s.get(g);if(!m)return;l.push(t.hi.removeMatchingKeys(i,d.removedDocuments,g).next((()=>t.hi.addMatchingKeys(i,d.addedDocuments,g))));let b=m.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?b=b.withResumeToken(Ye.EMPTY_BYTE_STRING,oe.min()).withLastLimboFreeSnapshotVersion(oe.min()):d.resumeToken.approximateByteSize()>0&&(b=b.withResumeToken(d.resumeToken,r)),s=s.insert(g,b),(function(k,N,G){return k.resumeToken.approximateByteSize()===0||N.snapshotVersion.toMicroseconds()-k.snapshotVersion.toMicroseconds()>=XA?!0:G.addedDocuments.size+G.modifiedDocuments.size+G.removedDocuments.size>0})(m,b,d)&&l.push(t.hi.updateTargetData(i,b))}));let c=An(),h=ge();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),l.push(n0(i,a,e.documentUpdates).next((d=>{c=d.Ls,h=d.ks}))),!r.isEqual(oe.min())){const d=t.hi.getLastRemoteSnapshotVersion(i).next((g=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(d)}return D.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,c,h))).next((()=>c))})).then((i=>(t.Fs=s,i)))}function n0(n,e,t){let r=ge(),s=ge();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=An();return t.forEach(((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(oe.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):K(Vc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)})),{Ls:a,ks:s}}))}function r0(n,e){const t=le(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=yc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function s0(n,e){const t=le(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,D.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new Fn(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function kl(n,e,t){const r=le(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!os(a))throw a;K(Vc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function Sf(n,e,t){const r=le(n);let s=oe.min(),i=ge();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,h,d){const g=le(c),m=g.Ms.get(d);return m!==void 0?D.resolve(g.Fs.get(m)):g.hi.getTargetData(h,d)})(r,a,Xt(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:oe.min(),t?i:ge()))).next((l=>(i0(r,Hw(e),l),{documents:l,qs:i})))))}function i0(n,e,t){let r=n.xs.get(e)||oe.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Rf{constructor(){this.activeTargetIds=Jw()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class o0{constructor(){this.Fo=new Rf,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Rf,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{xo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf="ConnectivityMonitor";class Cf{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){K(Pf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){K(Pf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ki=null;function Vl(){return Ki===null?Ki=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ki++,"0x"+Ki.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qa="RestConnection",l0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class c0{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===bo?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Vl(),l=this.Go(e,t.toUriEncodedString());K(Qa,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:h}=new URL(l),d=ts(h);return this.jo(e,l,c,r,d).then((g=>(K(Qa,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw Wn(Qa,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ss})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=l0[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt="WebChannelConnection";class h0 extends c0{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Vl();return new Promise(((l,c)=>{const h=new Wp;h.setWithCredentials(!0),h.listenOnce(Kp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case ro.NO_ERROR:const g=h.getResponseJson();K(rt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case ro.TIMEOUT:K(rt,`RPC '${e}' ${a} timed out`),c(new J(O.DEADLINE_EXCEEDED,"Request time out"));break;case ro.HTTP_ERROR:const m=h.getStatus();if(K(rt,`RPC '${e}' ${a} failed with status:`,m,"response text:",h.getResponseText()),m>0){let b=h.getResponseJson();Array.isArray(b)&&(b=b[0]);const V=b==null?void 0:b.error;if(V&&V.status&&V.message){const k=(function(G){const $=G.toLowerCase().replace(/_/g,"-");return Object.values(O).indexOf($)>=0?$:O.UNKNOWN})(V.status);c(new J(k,V.message))}else c(new J(O.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new J(O.UNAVAILABLE,"Connection failed."));break;default:se(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{K(rt,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);K(rt,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)}))}P_(e,t,r){const s=Vl(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=Jp(),l=Qp(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");K(rt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const g=a.createWebChannel(d,c);this.T_(g);let m=!1,b=!1;const V=new u0({Ho:N=>{b?K(rt,`Not sending because RPC '${e}' stream ${s} is closed:`,N):(m||(K(rt,`Opening RPC '${e}' stream ${s} transport.`),g.open(),m=!0),K(rt,`RPC '${e}' stream ${s} sending:`,N),g.send(N))},Yo:()=>g.close()}),k=(N,G,$)=>{N.listen(G,(Q=>{try{$(Q)}catch(z){setTimeout((()=>{throw z}),0)}}))};return k(g,ks.EventType.OPEN,(()=>{b||(K(rt,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),k(g,ks.EventType.CLOSE,(()=>{b||(b=!0,K(rt,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(g))})),k(g,ks.EventType.ERROR,(N=>{b||(b=!0,Wn(rt,`RPC '${e}' stream ${s} transport errored. Name:`,N.name,"Message:",N.message),V.__(new J(O.UNAVAILABLE,"The operation could not be completed")))})),k(g,ks.EventType.MESSAGE,(N=>{var G;if(!b){const $=N.data[0];Se(!!$,16349);const Q=$,z=(Q==null?void 0:Q.error)||((G=Q[0])===null||G===void 0?void 0:G.error);if(z){K(rt,`RPC '${e}' stream ${s} received error:`,z);const me=z.status;let ve=(function(v){const T=Be[v];if(T!==void 0)return kg(T)})(me),I=z.message;ve===void 0&&(ve=O.INTERNAL,I="Unknown error status: "+me+" with message "+z.message),b=!0,V.__(new J(ve,I)),g.close()}else K(rt,`RPC '${e}' stream ${s} received:`,$),V.a_($)}})),k(l,Gp.STAT_EVENT,(N=>{N.stat===vl.PROXY?K(rt,`RPC '${e}' stream ${s} detected buffering proxy`):N.stat===vl.NOPROXY&&K(rt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Ja(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n){return new gA(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kf="PersistentStream";class zg{constructor(e,t,r,s,i,a,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Hg(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===O.RESOURCE_EXHAUSTED?(wn(t.toString()),wn("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===O.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new J(O.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return K(kf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(K(kf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class f0 extends zg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=yA(this.serializer,e),r=(function(i){if(!("targetChange"in i))return oe.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?oe.min():a.readTime?Yt(a.readTime):oe.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Cl(this.serializer),t.addTarget=(function(i,a){let l;const c=a.target;if(l=Al(c)?{documents:TA(i,c)}:{query:IA(i,c).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Ng(i,a.resumeToken);const h=Sl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(oe.min())>0){l.readTime=ko(i,a.snapshotVersion.toTimestamp());const h=Sl(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=AA(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Cl(this.serializer),t.removeTarget=e,this.k_(t)}}class d0 extends zg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Se(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Se(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Se(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=EA(e.writeResults,e.commitTime),r=Yt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Cl(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>vA(this.serializer,r)))};this.k_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p0{}class g0 extends p0{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new J(O.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,Rl(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new J(O.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(e,Rl(t,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===O.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new J(O.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class m0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(wn(t),this._a=!1):K("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr="RemoteStore";class _0{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{wr(this)&&(K(Tr,"Restarting streams for network reachability change."),await(async function(c){const h=le(c);h.Ia.add(4),await vi(h),h.Aa.set("Unknown"),h.Ia.delete(4),await aa(h)})(this))}))})),this.Aa=new m0(r,s)}}async function aa(n){if(wr(n))for(const e of n.da)await e(!0)}async function vi(n){for(const e of n.da)await e(!1)}function Wg(n,e){const t=le(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),xc(t)?Oc(t):as(t).x_()&&Nc(t,e))}function Dc(n,e){const t=le(n),r=as(t);t.Ta.delete(e),r.x_()&&Kg(t,e),t.Ta.size===0&&(r.x_()?r.B_():wr(t)&&t.Aa.set("Unknown"))}function Nc(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(oe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}as(n).H_(e)}function Kg(n,e){n.Ra.$e(e),as(n).Y_(e)}function Oc(n){n.Ra=new hA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),as(n).start(),n.Aa.aa()}function xc(n){return wr(n)&&!as(n).M_()&&n.Ta.size>0}function wr(n){return le(n).Ia.size===0}function Gg(n){n.Ra=void 0}async function y0(n){n.Aa.set("Online")}async function v0(n){n.Ta.forEach(((e,t)=>{Nc(n,e)}))}async function E0(n,e){Gg(n),xc(n)?(n.Aa.la(e),Oc(n)):n.Aa.set("Unknown")}async function T0(n,e,t){if(n.Aa.set("Online"),e instanceof Dg&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ta.delete(l),s.Ra.removeTarget(l))})(n,e)}catch(r){K(Tr,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Do(n,r)}else if(e instanceof ao?n.Ra.Ye(e):e instanceof Vg?n.Ra.it(e):n.Ra.et(e),!t.isEqual(oe.min()))try{const r=await qg(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const l=i.Ra.Pt(a);return l.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(c.resumeToken,a))}})),l.targetMismatches.forEach(((c,h)=>{const d=i.Ta.get(c);if(!d)return;i.Ta.set(c,d.withResumeToken(Ye.EMPTY_BYTE_STRING,d.snapshotVersion)),Kg(i,c);const g=new Fn(d.target,c,h,d.sequenceNumber);Nc(i,g)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){K(Tr,"Failed to raise snapshot:",r),await Do(n,r)}}async function Do(n,e,t){if(!os(e))throw e;n.Ia.add(1),await vi(n),n.Aa.set("Offline"),t||(t=()=>qg(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{K(Tr,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await aa(n)}))}function Qg(n,e){return e().catch((t=>Do(n,t,e)))}async function la(n){const e=le(n),t=Xn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:yc;for(;I0(e);)try{const s=await r0(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,w0(e,s)}catch(s){await Do(e,s)}Jg(e)&&Xg(e)}function I0(n){return wr(n)&&n.Pa.length<10}function w0(n,e){n.Pa.push(e);const t=Xn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function Jg(n){return wr(n)&&!Xn(n).M_()&&n.Pa.length>0}function Xg(n){Xn(n).start()}async function A0(n){Xn(n).na()}async function b0(n){const e=Xn(n);for(const t of n.Pa)e.X_(t.mutations)}async function S0(n,e,t){const r=n.Pa.shift(),s=bc.from(r,e,t);await Qg(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await la(n)}async function R0(n,e){e&&Xn(n).Z_&&await(async function(r,s){if((function(a){return cA(a)&&a!==O.ABORTED})(s.code)){const i=r.Pa.shift();Xn(r).N_(),await Qg(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await la(r)}})(n,e),Jg(n)&&Xg(n)}async function Vf(n,e){const t=le(n);t.asyncQueue.verifyOperationInProgress(),K(Tr,"RemoteStore received new credentials");const r=wr(t);t.Ia.add(3),await vi(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await aa(t)}async function P0(n,e){const t=le(n);e?(t.Ia.delete(2),await aa(t)):e||(t.Ia.add(2),await vi(t),t.Aa.set("Unknown"))}function as(n){return n.Va||(n.Va=(function(t,r,s){const i=le(t);return i.ia(),new f0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:y0.bind(null,n),e_:v0.bind(null,n),n_:E0.bind(null,n),J_:T0.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),xc(n)?Oc(n):n.Aa.set("Unknown")):(await n.Va.stop(),Gg(n))}))),n.Va}function Xn(n){return n.ma||(n.ma=(function(t,r,s){const i=le(t);return i.ia(),new d0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:A0.bind(null,n),n_:R0.bind(null,n),ea:b0.bind(null,n),ta:S0.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await la(n)):(await n.ma.stop(),n.Pa.length>0&&(K(Tr,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new Mc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new J(O.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Lc(n,e){if(wn("AsyncQueue",`${e}: ${n}`),os(n))return new J(O.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{static emptySet(e){return new qr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||Z.comparator(t.key,r.key):(t,r)=>Z.comparator(t.key,r.key),this.keyedMap=Vs(),this.sortedSet=new xe(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new qr;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Df{constructor(){this.fa=new xe(Z.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):se(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Zr{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Zr(e,t,qr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ea(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C0{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class k0{constructor(){this.queries=Nf(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=le(t),i=s.queries;s.queries=Nf(),i.forEach(((a,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new J(O.ABORTED,"Firestore shutting down"))}}function Nf(){return new Ir((n=>yg(n)),ea)}async function V0(n,e){const t=le(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new C0,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Lc(a,`Initialization of query '${Nr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Fc(t)}async function D0(n,e){const t=le(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function N0(n,e){const t=le(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.wa)l.Ca(s)&&(r=!0);a.ya=s}}r&&Fc(t)}function O0(n,e,t){const r=le(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function Fc(n){n.Da.forEach((e=>{e.next()}))}var Dl,Of;(Of=Dl||(Dl={})).Fa="default",Of.Cache="cache";class x0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Zr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Dl.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(e){this.key=e}}class Zg{constructor(e){this.key=e}}class M0{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=ge(),this.mutatedKeys=ge(),this.Xa=vg(e),this.eu=new qr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Df,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,g)=>{const m=s.get(d),b=ta(this.query,g)?g:null,V=!!m&&this.mutatedKeys.has(m.key),k=!!b&&(b.hasLocalMutations||this.mutatedKeys.has(b.key)&&b.hasCommittedMutations);let N=!1;m&&b?m.data.isEqual(b.data)?V!==k&&(r.track({type:3,doc:b}),N=!0):this.iu(m,b)||(r.track({type:2,doc:b}),N=!0,(c&&this.Xa(b,c)>0||h&&this.Xa(b,h)<0)&&(l=!0)):!m&&b?(r.track({type:0,doc:b}),N=!0):m&&!b&&(r.track({type:1,doc:m}),N=!0,(c||h)&&(l=!0)),N&&(b?(a=a.add(b),i=k?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:l,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,g)=>(function(b,V){const k=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return se(20277,{At:N})}};return k(b)-k(V)})(d.type,g.type)||this.Xa(d.doc,g.doc))),this.su(r),s=s!=null&&s;const l=t&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,h=c!==this.Ya;return this.Ya=c,a.length!==0||h?{snapshot:new Zr(this.query,e.eu,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Df,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=ge(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new Zg(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new Yg(r))})),t}uu(e){this.Ha=e.qs,this.Za=ge();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Zr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Uc="SyncEngine";class L0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class F0{constructor(e){this.key=e,this.lu=!1}}class U0{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Ir((l=>yg(l)),ea),this.Tu=new Map,this.Iu=new Set,this.du=new xe(Z.comparator),this.Eu=new Map,this.Au=new Pc,this.Ru={},this.Vu=new Map,this.mu=Yr.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function B0(n,e,t=!0){const r=im(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await em(r,e,t,!0),s}async function j0(n,e){const t=im(n);await em(t,e,!0,!1)}async function em(n,e,t,r){const s=await s0(n.localStore,Xt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await $0(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Wg(n.remoteStore,s),l}async function $0(n,e,t,r,s){n.gu=(g,m,b)=>(async function(k,N,G,$){let Q=N.view.nu(G);Q.Ds&&(Q=await Sf(k.localStore,N.query,!1).then((({documents:I})=>N.view.nu(I,Q))));const z=$&&$.targetChanges.get(N.targetId),me=$&&$.targetMismatches.get(N.targetId)!=null,ve=N.view.applyChanges(Q,k.isPrimaryClient,z,me);return Mf(k,N.targetId,ve._u),ve.snapshot})(n,g,m,b);const i=await Sf(n.localStore,e,!0),a=new M0(e,i.qs),l=a.nu(i.documents),c=yi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);Mf(n,t,h._u);const d=new L0(e,t,a);return n.Pu.set(e,d),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function q0(n,e,t){const r=le(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!ea(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await kl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&Dc(r.remoteStore,s.targetId),Nl(r,s.targetId)})).catch(is)):(Nl(r,s.targetId),await kl(r.localStore,s.targetId,!0))}async function H0(n,e){const t=le(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Dc(t.remoteStore,r.targetId))}async function z0(n,e,t){const r=Y0(n);try{const s=await(function(a,l){const c=le(a),h=Ne.now(),d=l.reduce(((b,V)=>b.add(V.key)),ge());let g,m;return c.persistence.runTransaction("Locally write mutations","readwrite",(b=>{let V=An(),k=ge();return c.Os.getEntries(b,d).next((N=>{V=N,V.forEach(((G,$)=>{$.isValidDocument()||(k=k.add(G))}))})).next((()=>c.localDocuments.getOverlayedDocuments(b,V))).next((N=>{g=N;const G=[];for(const $ of l){const Q=sA($,g.get($.key).overlayedDocument);Q!=null&&G.push(new tr($.key,Q,hg(Q.value.mapValue),wt.exists(!0)))}return c.mutationQueue.addMutationBatch(b,h,G,l)})).next((N=>{m=N;const G=N.applyToLocalDocumentSet(g,k);return c.documentOverlayCache.saveOverlays(b,N.batchId,G)}))})).then((()=>({batchId:m.batchId,changes:Tg(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,c){let h=a.Ru[a.currentUser.toKey()];h||(h=new xe(fe)),h=h.insert(l,c),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,t),await Ei(r,s.changes),await la(r.remoteStore)}catch(s){const i=Lc(s,"Failed to persist write");t.reject(i)}}async function tm(n,e){const t=le(n);try{const r=await t0(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(Se(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Se(a.lu,14607):s.removedDocuments.size>0&&(Se(a.lu,42227),a.lu=!1))})),await Ei(t,r,e)}catch(r){await is(r)}}function xf(n,e,t){const r=le(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const c=le(a);c.onlineState=l;let h=!1;c.queries.forEach(((d,g)=>{for(const m of g.wa)m.va(l)&&(h=!0)})),h&&Fc(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function W0(n,e,t){const r=le(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new xe(Z.comparator);a=a.insert(i,at.newNoDocument(i,oe.min()));const l=ge().add(i),c=new ia(oe.min(),new Map,new xe(fe),a,l);await tm(r,c),r.du=r.du.remove(i),r.Eu.delete(e),Bc(r)}else await kl(r.localStore,e,!1).then((()=>Nl(r,e,t))).catch(is)}async function K0(n,e){const t=le(n),r=e.batch.batchId;try{const s=await e0(t.localStore,e);rm(t,r,null),nm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ei(t,s)}catch(s){await is(s)}}async function G0(n,e,t){const r=le(n);try{const s=await(function(a,l){const c=le(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next((g=>(Se(g!==null,37113),d=g.keys(),c.mutationQueue.removeMutationBatch(h,g)))).next((()=>c.mutationQueue.performConsistencyCheck(h))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>c.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);rm(r,e,t),nm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ei(r,s)}catch(s){await is(s)}}function nm(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function rm(n,e,t){const r=le(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function Nl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||sm(n,r)}))}function sm(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Dc(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Bc(n))}function Mf(n,e,t){for(const r of t)r instanceof Yg?(n.Au.addReference(r.key,e),Q0(n,r)):r instanceof Zg?(K(Uc,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||sm(n,r.key)):se(19791,{yu:r})}function Q0(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(K(Uc,"New document in limbo: "+t),n.Iu.add(r),Bc(n))}function Bc(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new Z(De.fromString(e)),r=n.mu.next();n.Eu.set(r,new F0(t)),n.du=n.du.insert(t,r),Wg(n.remoteStore,new Fn(Xt(wc(t.path)),r,"TargetPurposeLimboResolution",Jo.ue))}}async function Ei(n,e,t){const r=le(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{a.push(r.gu(c,e,t).then((h=>{var d;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){s.push(h);const g=kc.Es(c.targetId,h);i.push(g)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(c,h){const d=le(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>D.forEach(h,(m=>D.forEach(m.Is,(b=>d.persistence.referenceDelegate.addReference(g,m.targetId,b))).next((()=>D.forEach(m.ds,(b=>d.persistence.referenceDelegate.removeReference(g,m.targetId,b)))))))))}catch(g){if(!os(g))throw g;K(Vc,"Failed to update sequence numbers: "+g)}for(const g of h){const m=g.targetId;if(!g.fromCache){const b=d.Fs.get(m),V=b.snapshotVersion,k=b.withLastLimboFreeSnapshotVersion(V);d.Fs=d.Fs.insert(m,k)}}})(r.localStore,i))}async function J0(n,e){const t=le(n);if(!t.currentUser.isEqual(e)){K(Uc,"User change. New user:",e.toKey());const r=await $g(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new J(O.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ei(t,r.Bs)}}function X0(n,e){const t=le(n),r=t.Eu.get(e);if(r&&r.lu)return ge().add(r.key);{let s=ge();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const l=t.Pu.get(a);s=s.unionWith(l.view.tu)}return s}}function im(n){const e=le(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=tm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=X0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=W0.bind(null,e),e.hu.J_=N0.bind(null,e.eventManager),e.hu.pu=O0.bind(null,e.eventManager),e}function Y0(n){const e=le(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=K0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=G0.bind(null,e),e}class No{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=oa(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return ZA(this.persistence,new JA,e.initialUser,this.serializer)}Du(e){return new jg(Cc.Vi,this.serializer)}bu(e){return new o0}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}No.provider={build:()=>new No};class Z0 extends No{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Se(this.persistence.referenceDelegate instanceof Vo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new xA(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?_t.withCacheSize(this.cacheSizeBytes):_t.DEFAULT;return new jg((r=>Vo.Vi(r,t)),this.serializer)}}class Ol{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=J0.bind(null,this.syncEngine),await P0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new k0})()}createDatastore(e){const t=oa(e.databaseInfo.databaseId),r=(function(i){return new h0(i)})(e.databaseInfo);return(function(i,a,l,c){return new g0(i,a,l,c)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,l){return new _0(r,s,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>xf(this.syncEngine,t,0)),(function(){return Cf.C()?new Cf:new a0})())}createSyncEngine(e,t){return(function(s,i,a,l,c,h,d){const g=new U0(s,i,a,l,c,h);return d&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=le(s);K(Tr,"RemoteStore shutting down."),i.Ia.add(5),await vi(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Ol.provider={build:()=>new Ol};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):wn("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yn="FirestoreClient";class tb{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=it.UNAUTHENTICATED,this.clientId=mc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{K(Yn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(K(Yn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Lc(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Xa(n,e){n.asyncQueue.verifyOperationInProgress(),K(Yn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await $g(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{Wn("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{K("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{Wn("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function Lf(n,e){n.asyncQueue.verifyOperationInProgress();const t=await nb(n);K(Yn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Vf(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Vf(e.remoteStore,s))),n._onlineComponents=e}async function nb(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K(Yn,"Using user provided OfflineComponentProvider");try{await Xa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===O.FAILED_PRECONDITION||s.code===O.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;Wn("Error using user provided cache. Falling back to memory cache: "+t),await Xa(n,new No)}}else K(Yn,"Using default OfflineComponentProvider"),await Xa(n,new Z0(void 0));return n._offlineComponents}async function om(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K(Yn,"Using user provided OnlineComponentProvider"),await Lf(n,n._uninitializedComponentsProvider._online)):(K(Yn,"Using default OnlineComponentProvider"),await Lf(n,new Ol))),n._onlineComponents}function rb(n){return om(n).then((e=>e.syncEngine))}async function Ff(n){const e=await om(n),t=e.eventManager;return t.onListen=B0.bind(null,e.syncEngine),t.onUnlisten=q0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=j0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=H0.bind(null,e.syncEngine),t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uf=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="firestore.googleapis.com",Bf=!0;class jf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new J(O.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=lm,this.ssl=Bf}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:Bf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Bg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<NA)throw new J(O.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}mw("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=am((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new J(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new J(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new J(O.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class ca{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new jf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(O.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new J(O.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new jf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new aw;switch(r.type){case"firstParty":return new hw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new J(O.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Uf.get(t);r&&(K("ComponentProvider","Removing Datastore"),Uf.delete(t),r.terminate())})(this),Promise.resolve()}}function sb(n,e,t,r={}){var s;n=qn(n,ca);const i=ts(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i&&(ap(`https://${c}`),lp("Firestore",!0)),a.host!==lm&&a.host!==c&&Wn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!_r(h,l)&&(n._setSettings(h),r.mockUserToken)){let d,g;if(typeof r.mockUserToken=="string")d=r.mockUserToken,g=it.MOCK_USER;else{d=Nv(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const m=r.mockUserToken.sub||r.mockUserToken.user_id;if(!m)throw new J(O.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new it(m)}n._authCredentials=new lw(new Yp(d,g))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new ua(this.firestore,e,this._query)}}class He{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Hn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new He(this.firestore,e,this._key)}toJSON(){return{type:He._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(mi(t,He._jsonSchema))return new He(e,r||null,new Z(De.fromString(t.referencePath)))}}He._jsonSchemaVersion="firestore/documentReference/1.0",He._jsonSchema={type:je("string",He._jsonSchemaVersion),referencePath:je("string")};class Hn extends ua{constructor(e,t,r){super(e,t,wc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new He(this.firestore,null,new Z(e))}withConverter(e){return new Hn(this.firestore,e,this._path)}}function $f(n,e,...t){if(n=We(n),eg("collection","path",e),n instanceof ca){const r=De.fromString(e,...t);return Zh(r),new Hn(n,null,r)}{if(!(n instanceof He||n instanceof Hn))throw new J(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(De.fromString(e,...t));return Zh(r),new Hn(n.firestore,null,r)}}function Ss(n,e,...t){if(n=We(n),arguments.length===1&&(e=mc.newId()),eg("doc","path",e),n instanceof ca){const r=De.fromString(e,...t);return Yh(r),new He(n,null,new Z(r))}{if(!(n instanceof He||n instanceof Hn))throw new J(O.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(De.fromString(e,...t));return Yh(r),new He(n.firestore,n instanceof Hn?n.converter:null,new Z(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qf="AsyncQueue";class Hf{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Hg(this,"async_queue_retry"),this.oc=()=>{const r=Ja();r&&K(qf,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Ja();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ja();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new gr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!os(e))throw e;K(qf,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,wn("INTERNAL UNHANDLED ERROR: ",zf(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=Mc.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&se(47125,{hc:zf(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function zf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class es extends ca{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Hf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Hf(e),this._firestoreClient=void 0,await e}}}function ib(n,e){const t=typeof n=="object"?n:fp(),r=typeof n=="string"?n:bo,s=rc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=Vv("firestore");i&&sb(s,...i)}return s}function jc(n){if(n._terminated)throw new J(O.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||ob(n),n._firestoreClient}function ob(n){var e,t,r;const s=n._freezeSettings(),i=(function(l,c,h,d){return new Rw(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,am(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new tb(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pt(Ye.fromBase64String(e))}catch(t){throw new J(O.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Pt(Ye.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(mi(e,Pt._jsonSchema))return Pt.fromBase64String(e.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:je("string",Pt._jsonSchemaVersion),bytes:je("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new J(O.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Xe(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(O.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(O.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return fe(this._lat,e._lat)||fe(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Zt._jsonSchemaVersion}}static fromJSON(e){if(mi(e,Zt._jsonSchema))return new Zt(e.latitude,e.longitude)}}Zt._jsonSchemaVersion="firestore/geoPoint/1.0",Zt._jsonSchema={type:je("string",Zt._jsonSchemaVersion),latitude:je("number"),longitude:je("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class en{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:en._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(mi(e,en._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new en(e.vectorValues);throw new J(O.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}en._jsonSchemaVersion="firestore/vectorValue/1.0",en._jsonSchema={type:je("string",en._jsonSchemaVersion),vectorValues:je("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=/^__.*__$/;class lb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new tr(e,this.data,this.fieldMask,t,this.fieldTransforms):new _i(e,this.data,t,this.fieldTransforms)}}class cm{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new tr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function um(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw se(40011,{Ec:n})}}class $c{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new $c(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Oo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(um(this.Ec)&&ab.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class cb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||oa(e)}Dc(e,t,r,s=!1){return new $c({Ec:e,methodName:t,bc:r,path:Xe.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function hm(n){const e=n._freezeSettings(),t=oa(n._databaseId);return new cb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function ub(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);Hc("Data must be an object, but it was:",a,r);const l=pm(r,a);let c,h;if(i.merge)c=new It(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const m=xl(e,g,t);if(!a.contains(m))throw new J(O.INVALID_ARGUMENT,`Field '${m}' is specified in your field mask but missing from your input data.`);mm(d,m)||d.push(m)}c=new It(d),h=a.fieldTransforms.filter((g=>c.covers(g.field)))}else c=null,h=a.fieldTransforms;return new lb(new yt(l),c,h)}class fa extends ha{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof fa}}class qc extends ha{_toFieldTransform(e){return new eA(e.path,new ii)}isEqual(e){return e instanceof qc}}function fm(n,e,t,r){const s=n.Dc(1,e,t);Hc("Data must be an object, but it was:",s,r);const i=[],a=yt.empty();er(r,((c,h)=>{const d=zc(e,c,t);h=We(h);const g=s.gc(d);if(h instanceof fa)i.push(d);else{const m=da(h,g);m!=null&&(i.push(d),a.set(d,m))}}));const l=new It(i);return new cm(a,l,s.fieldTransforms)}function dm(n,e,t,r,s,i){const a=n.Dc(1,e,t),l=[xl(e,r,t)],c=[s];if(i.length%2!=0)throw new J(O.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let m=0;m<i.length;m+=2)l.push(xl(e,i[m])),c.push(i[m+1]);const h=[],d=yt.empty();for(let m=l.length-1;m>=0;--m)if(!mm(h,l[m])){const b=l[m];let V=c[m];V=We(V);const k=a.gc(b);if(V instanceof fa)h.push(b);else{const N=da(V,k);N!=null&&(h.push(b),d.set(b,N))}}const g=new It(h);return new cm(d,g,a.fieldTransforms)}function da(n,e){if(gm(n=We(n)))return Hc("Unsupported field value:",e,n),pm(n,e);if(n instanceof ha)return(function(r,s){if(!um(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let c=da(l,s.yc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=We(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xw(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ne.fromDate(r);return{timestampValue:ko(s.serializer,i)}}if(r instanceof Ne){const i=new Ne(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:ko(s.serializer,i)}}if(r instanceof Zt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Pt)return{bytesValue:Ng(s.serializer,r._byteString)};if(r instanceof He){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Rc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof en)return(function(a,l){return{mapValue:{fields:{[cg]:{stringValue:ug},[So]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return Ac(l.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${_c(r)}`)})(n,e)}function pm(n,e){const t={};return rg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):er(n,((r,s)=>{const i=da(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function gm(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ne||n instanceof Zt||n instanceof Pt||n instanceof He||n instanceof ha||n instanceof en)}function Hc(n,e,t){if(!gm(t)||!tg(t)){const r=_c(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function xl(n,e,t){if((e=We(e))instanceof Ti)return e._internalPath;if(typeof e=="string")return zc(n,e);throw Oo("Field path arguments must be of type string or ",n,!1,void 0,t)}const hb=new RegExp("[~\\*/\\[\\]]");function zc(n,e,t){if(e.search(hb)>=0)throw Oo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new Ti(...e.split("."))._internalPath}catch{throw Oo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Oo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new J(O.INVALID_ARGUMENT,l+n+c)}function mm(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new He(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ym("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class fb extends _m{data(){return super.data()}}function ym(n,e){return typeof e=="string"?zc(n,e):e instanceof Ti?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function db(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new J(O.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class pb{convertValue(e,t="none"){switch(Jn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Fe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Qn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw se(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return er(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[So].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>Fe(a.doubleValue)));return new en(i)}convertGeoPoint(e){return new Zt(Fe(e.latitude),Fe(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Yo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ni(e));default:return null}}convertTimestamp(e){const t=Gn(e);return new Ne(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=De.fromString(e);Se(Ug(r),9688,{name:e});const s=new ri(r.get(1),r.get(3)),i=new Z(r.popFirst(5));return s.isEqual(t)||wn(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gb(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class Ns{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class mr extends _m{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new lo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ym("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(O.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=mr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}mr._jsonSchemaVersion="firestore/documentSnapshot/1.0",mr._jsonSchema={type:je("string",mr._jsonSchemaVersion),bundleSource:je("string","DocumentSnapshot"),bundleName:je("string"),bundle:je("string")};class lo extends mr{data(e={}){return super.data(e)}}class Hr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ns(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new lo(this._firestore,this._userDataWriter,r.key,r,new Ns(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(O.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const c=new lo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ns(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new lo(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ns(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:mb(l.type),doc:c,oldIndex:h,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(O.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Hr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=mc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function mb(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return se(61501,{type:n})}}Hr._jsonSchemaVersion="firestore/querySnapshot/1.0",Hr._jsonSchema={type:je("string",Hr._jsonSchemaVersion),bundleSource:je("string","QuerySnapshot"),bundleName:je("string"),bundle:je("string")};class vm extends pb{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new He(this.firestore,null,t)}}function _b(n,e,t,...r){n=qn(n,He);const s=qn(n.firestore,es),i=hm(s);let a;return a=typeof(e=We(e))=="string"||e instanceof Ti?dm(i,"updateDoc",n._key,e,t,r):fm(i,"updateDoc",n._key,e),Wc(s,[a.toMutation(n._key,wt.exists(!0))])}function yb(n){return Wc(qn(n.firestore,es),[new sa(n._key,wt.none())])}function vb(n,...e){var t,r,s;n=We(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Wf(e[a])||(i=e[a++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Wf(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let c,h,d;if(n instanceof He)h=qn(n.firestore,es),d=wc(n._key.path),c={next:g=>{e[a]&&e[a](Eb(h,n,g))},error:e[a+1],complete:e[a+2]};else{const g=qn(n,ua);h=qn(g.firestore,es),d=g._query;const m=new vm(h);c={next:b=>{e[a]&&e[a](new Hr(h,m,g,b))},error:e[a+1],complete:e[a+2]},db(n._query)}return(function(m,b,V,k){const N=new eb(k),G=new x0(b,N,V);return m.asyncQueue.enqueueAndForget((async()=>V0(await Ff(m),G))),()=>{N.Ou(),m.asyncQueue.enqueueAndForget((async()=>D0(await Ff(m),G)))}})(jc(h),d,l,c)}function Wc(n,e){return(function(r,s){const i=new gr;return r.asyncQueue.enqueueAndForget((async()=>z0(await rb(r),s,i))),i.promise})(jc(n),e)}function Eb(n,e,t){const r=t.docs.get(e._key),s=new vm(n);return new mr(n,s,e._key,r,new Ns(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tb{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=hm(e)}set(e,t,r){this._verifyNotCommitted();const s=Ya(e,this._firestore),i=gb(s.converter,t,r),a=ub(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(a.toMutation(s._key,wt.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=Ya(e,this._firestore);let a;return a=typeof(t=We(t))=="string"||t instanceof Ti?dm(this._dataReader,"WriteBatch.update",i._key,t,r,s):fm(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(a.toMutation(i._key,wt.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Ya(e,this._firestore);return this._mutations=this._mutations.concat(new sa(t._key,wt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new J(O.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Ya(n,e){if((n=We(n)).firestore!==e)throw new J(O.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}function Za(){return new qc("serverTimestamp")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kf(n){return jc(n=qn(n,es)),new Tb(n,(e=>Wc(n,e)))}(function(e,t=!0){(function(s){ss=s})(ns),Kr(new yr("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new es(new cw(r.getProvider("auth-internal")),new fw(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new J(O.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ri(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),jn(Kh,Gh,e),jn(Kh,Gh,"esm2017")})();var Ib="firebase",wb="11.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */jn(Ib,wb,"app");const Ab={apiKey:"AIzaSyB6kGON2V4RWRp8Q4T1agPEWTC777aBMBE",authDomain:"nasdaq-checklist-marlon.firebaseapp.com",projectId:"nasdaq-checklist-marlon",storageBucket:"nasdaq-checklist-marlon.firebasestorage.app",messagingSenderId:"508391209615",appId:"1:508391209615:web:fb8e89880e2a60c81ecefa"},Em=hp(Ab),Kc=iw(Em),Nn=ib(Em),Tm=new pn;Tm.setCustomParameters({prompt:"select_account"});function bb(){return pI(Kc,Tm)}function Sb(){return GT(Kc)}const Rb={class:"page-shell"},Pb={class:"app-card"},Cb={class:"hero-row"},kb={class:"tts-row"},Vb=["title"],Db={key:0,class:"tts-icon"},Nb={key:1,class:"tts-icon"},Ob={key:2,class:"tts-icon"},xb=["disabled"],Mb={key:0,class:"auth-panel"},Lb=["src","alt"],Fb={class:"auth-copy"},Ub=["disabled"],Bb=["disabled"],jb={key:0,class:"error-banner"},$b={class:"stats-row"},qb={class:"stat-pill"},Hb={class:"stat-pill"},zb={class:"input-row"},Wb=["disabled"],Kb={class:"progress-header"},Gb={class:"progress-track"},Qb={key:1,class:"task-list"},Jb=["onDragstart","onDragenter","onDrop"],Xb=["aria-pressed","onClick"],Yb=["onClick"],Zb={key:2,class:"empty-state"},Rs=10,Gf="nasdaq-mentor-guest-checklist",eS={__name:"App",setup(n){const e=$t(null),t=$t(!1),r=$t(!1),s=$t(""),i=$t(""),a=$t([]);let l=null;const c=$t(null),h=$t(null);function d(Y){c.value=Y}function g(Y){c.value!==null&&(h.value=Y)}function m(){c.value=null,h.value=null}async function b(Y){const W=c.value;if(c.value=null,h.value=null,W===null||W===Y)return;const de=[...a.value],[te]=de.splice(W,1);de.splice(Y,0,te),a.value=de,e.value&&await V()}async function V(){const Y=Kf(Nn);a.value.forEach((W,de)=>{Y.update(Ss(Nn,"users",e.value.uid,"tasks",W.id),{order:de})}),await Y.commit()}const k=$t(!0),N=$t(!1);let G=null;function $(Y){if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const W=new SpeechSynthesisUtterance(Y);W.lang="es-ES",W.rate=.95,W.onstart=()=>{N.value=!0},W.onend=()=>{N.value=!1},W.onerror=()=>{N.value=!1},window.speechSynthesis.speak(W)}function Q(){const Y=a.value.filter(te=>te.completed),W=a.value.filter(te=>!te.completed),de=[];return Y.length&&de.push(`Tareas completadas: ${Y.map(te=>te.title).join(". ")}.`),W.length&&de.push(`Tareas pendientes: ${W.map(te=>te.title).join(". ")}.`),de.length?de.join(" "):"No hay tareas registradas para hoy."}function z(){G=setInterval(()=>{if(!k.value)return;const Y=new Date,W=Y.getMinutes();Y.getSeconds()===0&&W%5===0&&$(Q())},1e3)}function me(){G&&(clearInterval(G),G=null)}function ve(){$(Q())}const I=Yi(()=>a.value.filter(Y=>Y.completed).length),_=Yi(()=>a.value.length-I.value),v=Yi(()=>a.value.length?Math.round(I.value/a.value.length*100):0);function T(){const Y=localStorage.getItem(Gf);if(!Y){a.value=[];return}try{const W=JSON.parse(Y);a.value=Array.isArray(W)?W.slice(0,Rs):[]}catch{a.value=[]}}function A(){localStorage.setItem(Gf,JSON.stringify(a.value))}function S(){l&&(l(),l=null)}function E(Y){S(),l=vb($f(Nn,"users",Y,"tasks"),W=>{const de=W.docs.map(te=>({id:te.id,title:te.data().title??"",completed:!!te.data().completed,order:te.data().order??null,createdAt:te.data().createdAt}));de.sort((te,Ie)=>{var Bt,At;if(te.order!==null&&Ie.order!==null)return te.order-Ie.order;if(te.order!==null)return-1;if(Ie.order!==null)return 1;const ls=((Bt=te.createdAt)==null?void 0:Bt.toMillis())??0;return(((At=Ie.createdAt)==null?void 0:At.toMillis())??0)-ls}),a.value=de})}async function Ze(){const Y=i.value.trim();if(!(!Y||a.value.length>=Rs)){if(e.value){const W=Kf(Nn),de=Ss($f(Nn,"users",e.value.uid,"tasks"));W.set(de,{title:Y,completed:!1,createdAt:Za(),updatedAt:Za(),order:0}),a.value.forEach((te,Ie)=>{W.update(Ss(Nn,"users",e.value.uid,"tasks",te.id),{order:Ie+1})}),await W.commit()}else a.value.unshift({id:crypto.randomUUID(),title:Y,completed:!1});i.value=""}}async function Ut(Y){if(e.value){const W=a.value.find(de=>de.id===Y);if(!W)return;await _b(Ss(Nn,"users",e.value.uid,"tasks",Y),{completed:!W.completed,updatedAt:Za()});return}a.value=a.value.map(W=>W.id!==Y?W:{...W,completed:!W.completed})}async function $e(Y){if(e.value){await yb(Ss(Nn,"users",e.value.uid,"tasks",Y));return}a.value=a.value.filter(W=>W.id!==Y)}async function Te(){r.value=!0,s.value="";try{await bb()}catch(Y){s.value="No se pudo iniciar sesion con Google.",console.error(Y)}finally{r.value=!1}}async function _e(){r.value=!0,s.value="";try{await Sb()}catch(Y){s.value="No se pudo cerrar sesion.",console.error(Y)}finally{r.value=!1}}return Ji(a,()=>{e.value||A()},{deep:!0}),Xl(()=>{me(),S(),"speechSynthesis"in window&&window.speechSynthesis.cancel()}),kd(()=>{z(),KT(Kc,Y=>{if(S(),e.value=Y,t.value=!0,Y){E(Y.uid);return}T()})}),(Y,W)=>(gt(),Et("main",Rb,[he("section",Pb,[he("div",Cb,[he("div",null,[W[3]||(W[3]=he("p",{class:"eyebrow"},"Checklist",-1)),W[4]||(W[4]=he("h1",null,"Tareas del dia",-1)),W[5]||(W[5]=he("p",{class:"subcopy"}," Organiza tu enfoque diario y marca tu progreso con una cuenta de Google. ",-1)),he("div",kb,[he("button",{class:Ks(["tts-toggle",{active:k.value}]),title:k.value?"Desactivar voz":"Activar voz",onClick:W[0]||(W[0]=de=>k.value=!k.value)},[N.value?(gt(),Et("span",Db,"🔊")):k.value?(gt(),Et("span",Nb,"🔔")):(gt(),Et("span",Ob,"🔕")),Xd(" "+Rt(k.value?"Voz activada":"Voz desactivada"),1)],10,Vb),he("button",{class:"tts-preview",disabled:!a.value.length,onClick:ve}," Probar ahora ",8,xb)])]),t.value?(gt(),Et("div",Mb,[e.value?(gt(),Et(Dt,{key:0},[e.value.photoURL?(gt(),Et("img",{key:0,src:e.value.photoURL,alt:e.value.displayName||"Usuario",class:"avatar"},null,8,Lb)):Ma("",!0),he("div",Fb,[he("strong",null,Rt(e.value.displayName),1),he("span",null,Rt(e.value.email),1)]),he("button",{class:"ghost-button",disabled:r.value,onClick:_e}," Salir ",8,Ub)],64)):(gt(),Et("button",{key:1,class:"google-button",disabled:r.value,onClick:Te},Rt(r.value?"Conectando...":"Iniciar sesion con Google"),9,Bb))])):Ma("",!0)]),s.value?(gt(),Et("p",jb,Rt(s.value),1)):Ma("",!0),he("div",$b,[he("div",qb,[W[6]||(W[6]=he("span",null,"Completadas",-1)),he("strong",null,Rt(I.value),1)]),he("div",Hb,[W[7]||(W[7]=he("span",null,"Pendientes",-1)),he("strong",null,Rt(_.value),1)]),he("div",{class:"stat-pill"},[W[8]||(W[8]=he("span",null,"Maximo",-1)),he("strong",null,Rt(Rs))])]),he("div",zb,[L_(he("input",{"onUpdate:modelValue":W[1]||(W[1]=de=>i.value=de),class:"task-input",type:"text",maxlength:"120",placeholder:"Ejemplo: Esperar confirmacion en zona",onKeydown:_v(Ze,["enter"])},null,544),[[dv,i.value]]),he("button",{class:"primary-button",disabled:a.value.length>=Rs,onClick:Ze}," Agregar ",8,Wb)]),he("p",{class:"helper-text"},"Puedes crear hasta "+Rt(Rs)+" tareas para el dia."),he("div",Kb,[W[9]||(W[9]=he("span",null,"Progreso",-1)),he("strong",null,Rt(v.value)+"%",1)]),he("div",Gb,[he("div",{class:"progress-fill",style:Uo({width:`${v.value}%`})},null,4)]),a.value.length?(gt(),Et("div",Qb,[(gt(!0),Et(Dt,null,ry(a.value,(de,te)=>(gt(),Et("article",{key:de.id,class:Ks(["task-card",{complete:de.completed,dragging:c.value===te,"drag-over":h.value===te&&c.value!==te}]),draggable:"true",onDragstart:Ie=>d(te),onDragenter:Ba(Ie=>g(te),["prevent"]),onDragover:W[2]||(W[2]=Ba(()=>{},["prevent"])),onDrop:Ba(Ie=>b(te),["prevent"]),onDragend:m},[W[11]||(W[11]=he("span",{class:"drag-handle",title:"Arrastrar para reordenar"},"⠿",-1)),he("button",{class:"toggle-button","aria-pressed":de.completed,onClick:Ie=>Ut(de.id)},[...W[10]||(W[10]=[he("span",{class:"toggle-indicator"},null,-1)])],8,Xb),he("p",null,Rt(de.title),1),he("button",{class:"remove-button",onClick:Ie=>$e(de.id)},"×",8,Yb)],42,Jb))),128))])):(gt(),Et("div",Zb,[...W[12]||(W[12]=[he("p",null,"No hay tareas todavia. Inicia con una meta concreta para hoy.",-1)])]))])]))}};Ev(eS).mount("#app");
