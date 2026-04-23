(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();/**
* @vue/shared v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function xl(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const be={},Mr=[],zt=()=>{},td=()=>!1,xo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Mo=n=>n.startsWith("onUpdate:"),at=Object.assign,Ml=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},Xm=Object.prototype.hasOwnProperty,Ee=(n,e)=>Xm.call(n,e),se=Array.isArray,Lr=n=>li(n)==="[object Map]",nd=n=>li(n)==="[object Set]",qu=n=>li(n)==="[object Date]",ae=n=>typeof n=="function",Oe=n=>typeof n=="string",Xt=n=>typeof n=="symbol",we=n=>n!==null&&typeof n=="object",rd=n=>(we(n)||ae(n))&&ae(n.then)&&ae(n.catch),sd=Object.prototype.toString,li=n=>sd.call(n),Ym=n=>li(n).slice(8,-1),id=n=>li(n)==="[object Object]",Ll=n=>Oe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Ns=xl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Lo=n=>{const e=Object.create(null);return(t=>e[t]||(e[t]=n(t)))},Zm=/-\w/g,Dt=Lo(n=>n.replace(Zm,e=>e.slice(1).toUpperCase())),e_=/\B([A-Z])/g,Qn=Lo(n=>n.replace(e_,"-$1").toLowerCase()),od=Lo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Ra=Lo(n=>n?`on${od(n)}`:""),Ht=(n,e)=>!Object.is(n,e),Qi=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},ad=(n,e,t,r=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:r,value:t})},Fl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Hu;const Fo=()=>Hu||(Hu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Uo(n){if(se(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Oe(r)?s_(r):Uo(r);if(s)for(const i in s)e[i]=s[i]}return e}else if(Oe(n)||we(n))return n}const t_=/;(?![^(]*\))/g,n_=/:([^]+)/,r_=/\/\*[^]*?\*\//g;function s_(n){const e={};return n.replace(r_,"").split(t_).forEach(t=>{if(t){const r=t.split(n_);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function Ws(n){let e="";if(Oe(n))e=n;else if(se(n))for(let t=0;t<n.length;t++){const r=Ws(n[t]);r&&(e+=r+" ")}else if(we(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const i_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",o_=xl(i_);function ld(n){return!!n||n===""}function a_(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=Ul(n[r],e[r]);return t}function Ul(n,e){if(n===e)return!0;let t=qu(n),r=qu(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=Xt(n),r=Xt(e),t||r)return n===e;if(t=se(n),r=se(e),t||r)return t&&r?a_(n,e):!1;if(t=we(n),r=we(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=e.hasOwnProperty(a);if(l&&!c||!l&&c||!Ul(n[a],e[a]))return!1}}return String(n)===String(e)}const cd=n=>!!(n&&n.__v_isRef===!0),wt=n=>Oe(n)?n:n==null?"":se(n)||we(n)&&(n.toString===sd||!ae(n.toString))?cd(n)?wt(n.value):JSON.stringify(n,ud,2):String(n),ud=(n,e)=>cd(e)?ud(n,e.value):Lr(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s],i)=>(t[Pa(r,i)+" =>"]=s,t),{})}:nd(e)?{[`Set(${e.size})`]:[...e.values()].map(t=>Pa(t))}:Xt(e)?Pa(e):we(e)&&!se(e)&&!id(e)?String(e):e,Pa=(n,e="")=>{var t;return Xt(n)?`Symbol(${(t=n.description)!=null?t:e})`:n};/**
* @vue/reactivity v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let nt;class l_{constructor(e=!1){this.detached=e,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.__v_skip=!0,this.parent=nt,!e&&nt&&(this.index=(nt.scopes||(nt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=nt;try{return nt=this,e()}finally{nt=t}}}on(){++this._on===1&&(this.prevScope=nt,nt=this)}off(){if(this._on>0&&--this._on===0){if(nt===this)nt=this.prevScope;else{let e=nt;for(;e;){if(e.prevScope===this){e.prevScope=this.prevScope;break}e=e.prevScope}}this.prevScope=void 0}}stop(e){if(this._active){this._active=!1;let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(this.effects.length=0,t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function c_(){return nt}let Se;const Ca=new WeakSet;class hd{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,nt&&nt.active&&nt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ca.has(this)&&(Ca.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||dd(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zu(this),pd(this);const e=Se,t=Nt;Se=this,Nt=!0;try{return this.fn()}finally{gd(this),Se=e,Nt=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)$l(e);this.deps=this.depsTail=void 0,zu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ca.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Xa(this)&&this.run()}get dirty(){return Xa(this)}}let fd=0,Os,xs;function dd(n,e=!1){if(n.flags|=8,e){n.next=xs,xs=n;return}n.next=Os,Os=n}function Bl(){fd++}function jl(){if(--fd>0)return;if(xs){let e=xs;for(xs=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Os;){let e=Os;for(Os=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(r){n||(n=r)}e=t}}if(n)throw n}function pd(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gd(n){let e,t=n.depsTail,r=t;for(;r;){const s=r.prevDep;r.version===-1?(r===t&&(t=s),$l(r),u_(r)):e=r,r.dep.activeLink=r.prevActiveLink,r.prevActiveLink=void 0,r=s}n.deps=e,n.depsTail=t}function Xa(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(md(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function md(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ks)||(n.globalVersion=Ks,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Xa(n))))return;n.flags|=2;const e=n.dep,t=Se,r=Nt;Se=n,Nt=!0;try{pd(n);const s=n.fn(n._value);(e.version===0||Ht(s,n._value))&&(n.flags|=128,n._value=s,e.version++)}catch(s){throw e.version++,s}finally{Se=t,Nt=r,gd(n),n.flags&=-3}}function $l(n,e=!1){const{dep:t,prevSub:r,nextSub:s}=n;if(r&&(r.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=r,n.nextSub=void 0),t.subs===n&&(t.subs=r,!r&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)$l(i,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function u_(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let Nt=!0;const _d=[];function gn(){_d.push(Nt),Nt=!1}function mn(){const n=_d.pop();Nt=n===void 0?!0:n}function zu(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=Se;Se=void 0;try{e()}finally{Se=t}}}let Ks=0;class h_{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ql{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(e){if(!Se||!Nt||Se===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Se)t=this.activeLink=new h_(Se,this),Se.deps?(t.prevDep=Se.depsTail,Se.depsTail.nextDep=t,Se.depsTail=t):Se.deps=Se.depsTail=t,yd(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const r=t.nextDep;r.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=r),t.prevDep=Se.depsTail,t.nextDep=void 0,Se.depsTail.nextDep=t,Se.depsTail=t,Se.deps===t&&(Se.deps=r)}return t}trigger(e){this.version++,Ks++,this.notify(e)}notify(e){Bl();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{jl()}}}function yd(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let r=e.deps;r;r=r.nextDep)yd(r)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Ya=new WeakMap,hr=Symbol(""),Za=Symbol(""),Gs=Symbol("");function st(n,e,t){if(Nt&&Se){let r=Ya.get(n);r||Ya.set(n,r=new Map);let s=r.get(t);s||(r.set(t,s=new ql),s.map=r,s.key=t),s.track()}}function cn(n,e,t,r,s,i){const a=Ya.get(n);if(!a){Ks++;return}const l=c=>{c&&c.trigger()};if(Bl(),e==="clear")a.forEach(l);else{const c=se(n),h=c&&Ll(t);if(c&&t==="length"){const d=Number(r);a.forEach((g,_)=>{(_==="length"||_===Gs||!Xt(_)&&_>=d)&&l(g)})}else switch((t!==void 0||a.has(void 0))&&l(a.get(t)),h&&l(a.get(Gs)),e){case"add":c?h&&l(a.get("length")):(l(a.get(hr)),Lr(n)&&l(a.get(Za)));break;case"delete":c||(l(a.get(hr)),Lr(n)&&l(a.get(Za)));break;case"set":Lr(n)&&l(a.get(hr));break}}jl()}function Cr(n){const e=ve(n);return e===n?e:(st(e,"iterate",Gs),St(n)?e:e.map(Mt))}function Bo(n){return st(n=ve(n),"iterate",Gs),n}function $t(n,e){return _n(n)?zr(fr(n)?Mt(e):e):Mt(e)}const f_={__proto__:null,[Symbol.iterator](){return Va(this,Symbol.iterator,n=>$t(this,n))},concat(...n){return Cr(this).concat(...n.map(e=>se(e)?Cr(e):e))},entries(){return Va(this,"entries",n=>(n[1]=$t(this,n[1]),n))},every(n,e){return on(this,"every",n,e,void 0,arguments)},filter(n,e){return on(this,"filter",n,e,t=>t.map(r=>$t(this,r)),arguments)},find(n,e){return on(this,"find",n,e,t=>$t(this,t),arguments)},findIndex(n,e){return on(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return on(this,"findLast",n,e,t=>$t(this,t),arguments)},findLastIndex(n,e){return on(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return on(this,"forEach",n,e,void 0,arguments)},includes(...n){return ka(this,"includes",n)},indexOf(...n){return ka(this,"indexOf",n)},join(n){return Cr(this).join(n)},lastIndexOf(...n){return ka(this,"lastIndexOf",n)},map(n,e){return on(this,"map",n,e,void 0,arguments)},pop(){return As(this,"pop")},push(...n){return As(this,"push",n)},reduce(n,...e){return Wu(this,"reduce",n,e)},reduceRight(n,...e){return Wu(this,"reduceRight",n,e)},shift(){return As(this,"shift")},some(n,e){return on(this,"some",n,e,void 0,arguments)},splice(...n){return As(this,"splice",n)},toReversed(){return Cr(this).toReversed()},toSorted(n){return Cr(this).toSorted(n)},toSpliced(...n){return Cr(this).toSpliced(...n)},unshift(...n){return As(this,"unshift",n)},values(){return Va(this,"values",n=>$t(this,n))}};function Va(n,e,t){const r=Bo(n),s=r[e]();return r!==n&&!St(n)&&(s._next=s.next,s.next=()=>{const i=s._next();return i.done||(i.value=t(i.value)),i}),s}const d_=Array.prototype;function on(n,e,t,r,s,i){const a=Bo(n),l=a!==n&&!St(n),c=a[e];if(c!==d_[e]){const g=c.apply(n,i);return l?Mt(g):g}let h=t;a!==n&&(l?h=function(g,_){return t.call(this,$t(n,g),_,n)}:t.length>2&&(h=function(g,_){return t.call(this,g,_,n)}));const d=c.call(a,h,r);return l&&s?s(d):d}function Wu(n,e,t,r){const s=Bo(n),i=s!==n&&!St(n);let a=t,l=!1;s!==n&&(i?(l=r.length===0,a=function(h,d,g){return l&&(l=!1,h=$t(n,h)),t.call(this,h,$t(n,d),g,n)}):t.length>3&&(a=function(h,d,g){return t.call(this,h,d,g,n)}));const c=s[e](a,...r);return l?$t(n,c):c}function ka(n,e,t){const r=ve(n);st(r,"iterate",Gs);const s=r[e](...t);return(s===-1||s===!1)&&Kl(t[0])?(t[0]=ve(t[0]),r[e](...t)):s}function As(n,e,t=[]){gn(),Bl();const r=ve(n)[e].apply(n,t);return jl(),mn(),r}const p_=xl("__proto__,__v_isRef,__isVue"),vd=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Xt));function g_(n){Xt(n)||(n=String(n));const e=ve(this);return st(e,"has",n),e.hasOwnProperty(n)}class Ed{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,r){if(t==="__v_skip")return e.__v_skip;const s=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!s;if(t==="__v_isReadonly")return s;if(t==="__v_isShallow")return i;if(t==="__v_raw")return r===(s?i?b_:Ad:i?wd:Id).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(r)?e:void 0;const a=se(e);if(!s){let c;if(a&&(c=f_[t]))return c;if(t==="hasOwnProperty")return g_}const l=Reflect.get(e,t,ot(e)?e:r);if((Xt(t)?vd.has(t):p_(t))||(s||st(e,"get",t),i))return l;if(ot(l)){const c=a&&Ll(t)?l:l.value;return s&&we(c)?tl(c):c}return we(l)?s?tl(l):zl(l):l}}class Td extends Ed{constructor(e=!1){super(!1,e)}set(e,t,r,s){let i=e[t];const a=se(e)&&Ll(t);if(!this._isShallow){const h=_n(i);if(!St(r)&&!_n(r)&&(i=ve(i),r=ve(r)),!a&&ot(i)&&!ot(r))return h||(i.value=r),!0}const l=a?Number(t)<e.length:Ee(e,t),c=Reflect.set(e,t,r,ot(e)?e:s);return e===ve(s)&&(l?Ht(r,i)&&cn(e,"set",t,r):cn(e,"add",t,r)),c}deleteProperty(e,t){const r=Ee(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&r&&cn(e,"delete",t,void 0),s}has(e,t){const r=Reflect.has(e,t);return(!Xt(t)||!vd.has(t))&&st(e,"has",t),r}ownKeys(e){return st(e,"iterate",se(e)?"length":hr),Reflect.ownKeys(e)}}class m_ extends Ed{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const __=new Td,y_=new m_,v_=new Td(!0);const el=n=>n,Ui=n=>Reflect.getPrototypeOf(n);function E_(n,e,t){return function(...r){const s=this.__v_raw,i=ve(s),a=Lr(i),l=n==="entries"||n===Symbol.iterator&&a,c=n==="keys"&&a,h=s[n](...r),d=t?el:e?zr:Mt;return!e&&st(i,"iterate",c?Za:hr),at(Object.create(h),{next(){const{value:g,done:_}=h.next();return _?{value:g,done:_}:{value:l?[d(g[0]),d(g[1])]:d(g),done:_}}})}}function Bi(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function T_(n,e){const t={get(s){const i=this.__v_raw,a=ve(i),l=ve(s);n||(Ht(s,l)&&st(a,"get",s),st(a,"get",l));const{has:c}=Ui(a),h=e?el:n?zr:Mt;if(c.call(a,s))return h(i.get(s));if(c.call(a,l))return h(i.get(l));i!==a&&i.get(s)},get size(){const s=this.__v_raw;return!n&&st(ve(s),"iterate",hr),s.size},has(s){const i=this.__v_raw,a=ve(i),l=ve(s);return n||(Ht(s,l)&&st(a,"has",s),st(a,"has",l)),s===l?i.has(s):i.has(s)||i.has(l)},forEach(s,i){const a=this,l=a.__v_raw,c=ve(l),h=e?el:n?zr:Mt;return!n&&st(c,"iterate",hr),l.forEach((d,g)=>s.call(i,h(d),h(g),a))}};return at(t,n?{add:Bi("add"),set:Bi("set"),delete:Bi("delete"),clear:Bi("clear")}:{add(s){const i=ve(this),a=Ui(i),l=ve(s),c=!e&&!St(s)&&!_n(s)?l:s;return a.has.call(i,c)||Ht(s,c)&&a.has.call(i,s)||Ht(l,c)&&a.has.call(i,l)||(i.add(c),cn(i,"add",c,c)),this},set(s,i){!e&&!St(i)&&!_n(i)&&(i=ve(i));const a=ve(this),{has:l,get:c}=Ui(a);let h=l.call(a,s);h||(s=ve(s),h=l.call(a,s));const d=c.call(a,s);return a.set(s,i),h?Ht(i,d)&&cn(a,"set",s,i):cn(a,"add",s,i),this},delete(s){const i=ve(this),{has:a,get:l}=Ui(i);let c=a.call(i,s);c||(s=ve(s),c=a.call(i,s)),l&&l.call(i,s);const h=i.delete(s);return c&&cn(i,"delete",s,void 0),h},clear(){const s=ve(this),i=s.size!==0,a=s.clear();return i&&cn(s,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=E_(s,n,e)}),t}function Hl(n,e){const t=T_(n,e);return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(Ee(t,s)&&s in r?t:r,s,i)}const I_={get:Hl(!1,!1)},w_={get:Hl(!1,!0)},A_={get:Hl(!0,!1)};const Id=new WeakMap,wd=new WeakMap,Ad=new WeakMap,b_=new WeakMap;function S_(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function R_(n){return n.__v_skip||!Object.isExtensible(n)?0:S_(Ym(n))}function zl(n){return _n(n)?n:Wl(n,!1,__,I_,Id)}function P_(n){return Wl(n,!1,v_,w_,wd)}function tl(n){return Wl(n,!0,y_,A_,Ad)}function Wl(n,e,t,r,s){if(!we(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=R_(n);if(i===0)return n;const a=s.get(n);if(a)return a;const l=new Proxy(n,i===2?r:t);return s.set(n,l),l}function fr(n){return _n(n)?fr(n.__v_raw):!!(n&&n.__v_isReactive)}function _n(n){return!!(n&&n.__v_isReadonly)}function St(n){return!!(n&&n.__v_isShallow)}function Kl(n){return n?!!n.__v_raw:!1}function ve(n){const e=n&&n.__v_raw;return e?ve(e):n}function C_(n){return!Ee(n,"__v_skip")&&Object.isExtensible(n)&&ad(n,"__v_skip",!0),n}const Mt=n=>we(n)?zl(n):n,zr=n=>we(n)?tl(n):n;function ot(n){return n?n.__v_isRef===!0:!1}function Pn(n){return V_(n,!1)}function V_(n,e){return ot(n)?n:new k_(n,e)}class k_{constructor(e,t){this.dep=new ql,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:ve(e),this._value=t?e:Mt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,r=this.__v_isShallow||St(e)||_n(e);e=r?e:ve(e),Ht(e,t)&&(this._rawValue=e,this._value=r?e:Mt(e),this.dep.trigger())}}function D_(n){return ot(n)?n.value:n}const N_={get:(n,e,t)=>e==="__v_raw"?n:D_(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return ot(s)&&!ot(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function bd(n){return fr(n)?n:new Proxy(n,N_)}class O_{constructor(e,t,r){this.fn=e,this.setter=t,this._value=void 0,this.dep=new ql(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ks-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=r}notify(){if(this.flags|=16,!(this.flags&8)&&Se!==this)return dd(this,!0),!0}get value(){const e=this.dep.track();return md(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function x_(n,e,t=!1){let r,s;return ae(n)?r=n:(r=n.get,s=n.set),new O_(r,s,t)}const ji={},uo=new WeakMap;let ar;function M_(n,e=!1,t=ar){if(t){let r=uo.get(t);r||uo.set(t,r=[]),r.push(n)}}function L_(n,e,t=be){const{immediate:r,deep:s,once:i,scheduler:a,augmentJob:l,call:c}=t,h=z=>s?z:St(z)||s===!1||s===0?un(z,1):un(z);let d,g,_,S,V=!1,D=!1;if(ot(n)?(g=()=>n.value,V=St(n)):fr(n)?(g=()=>h(n),V=!0):se(n)?(D=!0,V=n.some(z=>fr(z)||St(z)),g=()=>n.map(z=>{if(ot(z))return z.value;if(fr(z))return h(z);if(ae(z))return c?c(z,2):z()})):ae(n)?e?g=c?()=>c(n,2):n:g=()=>{if(_){gn();try{_()}finally{mn()}}const z=ar;ar=d;try{return c?c(n,3,[S]):n(S)}finally{ar=z}}:g=zt,e&&s){const z=g,ue=s===!0?1/0:s;g=()=>un(z(),ue)}const O=c_(),Q=()=>{d.stop(),O&&O.active&&Ml(O.effects,d)};if(i&&e){const z=e;e=(...ue)=>{z(...ue),Q()}}let $=D?new Array(n.length).fill(ji):ji;const G=z=>{if(!(!(d.flags&1)||!d.dirty&&!z))if(e){const ue=d.run();if(s||V||(D?ue.some((ge,w)=>Ht(ge,$[w])):Ht(ue,$))){_&&_();const ge=ar;ar=d;try{const w=[ue,$===ji?void 0:D&&$[0]===ji?[]:$,S];$=ue,c?c(e,3,w):e(...w)}finally{ar=ge}}}else d.run()};return l&&l(G),d=new hd(g),d.scheduler=a?()=>a(G,!1):G,S=z=>M_(z,!1,d),_=d.onStop=()=>{const z=uo.get(d);if(z){if(c)c(z,4);else for(const ue of z)ue();uo.delete(d)}},e?r?G(!0):$=d.run():a?a(G.bind(null,!0),!0):d.run(),Q.pause=d.pause.bind(d),Q.resume=d.resume.bind(d),Q.stop=Q,Q}function un(n,e=1/0,t){if(e<=0||!we(n)||n.__v_skip||(t=t||new Map,(t.get(n)||0)>=e))return n;if(t.set(n,e),e--,ot(n))un(n.value,e,t);else if(se(n))for(let r=0;r<n.length;r++)un(n[r],e,t);else if(nd(n)||Lr(n))n.forEach(r=>{un(r,e,t)});else if(id(n)){for(const r in n)un(n[r],e,t);for(const r of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,r)&&un(n[r],e,t)}return n}/**
* @vue/runtime-core v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ci(n,e,t,r){try{return r?n(...r):n()}catch(s){jo(s,e,t)}}function Yt(n,e,t,r){if(ae(n)){const s=ci(n,e,t,r);return s&&rd(s)&&s.catch(i=>{jo(i,e,t)}),s}if(se(n)){const s=[];for(let i=0;i<n.length;i++)s.push(Yt(n[i],e,t,r));return s}}function jo(n,e,t,r=!0){const s=e?e.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||be;if(e){let l=e.parent;const c=e.proxy,h=`https://vuejs.org/error-reference/#runtime-${t}`;for(;l;){const d=l.ec;if(d){for(let g=0;g<d.length;g++)if(d[g](n,c,h)===!1)return}l=l.parent}if(i){gn(),ci(i,null,10,[n,c,h]),mn();return}}F_(n,t,s,r,a)}function F_(n,e,t,r=!0,s=!1){if(s)throw n;console.error(n)}const ht=[];let Bt=-1;const Fr=[];let Vn=null,Vr=0;const Sd=Promise.resolve();let ho=null;function U_(n){const e=ho||Sd;return n?e.then(this?n.bind(this):n):e}function B_(n){let e=Bt+1,t=ht.length;for(;e<t;){const r=e+t>>>1,s=ht[r],i=Qs(s);i<n||i===n&&s.flags&2?e=r+1:t=r}return e}function Gl(n){if(!(n.flags&1)){const e=Qs(n),t=ht[ht.length-1];!t||!(n.flags&2)&&e>=Qs(t)?ht.push(n):ht.splice(B_(e),0,n),n.flags|=1,Rd()}}function Rd(){ho||(ho=Sd.then(Cd))}function j_(n){se(n)?Fr.push(...n):Vn&&n.id===-1?Vn.splice(Vr+1,0,n):n.flags&1||(Fr.push(n),n.flags|=1),Rd()}function Ku(n,e,t=Bt+1){for(;t<ht.length;t++){const r=ht[t];if(r&&r.flags&2){if(n&&r.id!==n.uid)continue;ht.splice(t,1),t--,r.flags&4&&(r.flags&=-2),r(),r.flags&4||(r.flags&=-2)}}}function Pd(n){if(Fr.length){const e=[...new Set(Fr)].sort((t,r)=>Qs(t)-Qs(r));if(Fr.length=0,Vn){Vn.push(...e);return}for(Vn=e,Vr=0;Vr<Vn.length;Vr++){const t=Vn[Vr];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Vn=null,Vr=0}}const Qs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Cd(n){try{for(Bt=0;Bt<ht.length;Bt++){const e=ht[Bt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ci(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Bt<ht.length;Bt++){const e=ht[Bt];e&&(e.flags&=-2)}Bt=-1,ht.length=0,Pd(),ho=null,(ht.length||Fr.length)&&Cd()}}let bt=null,Vd=null;function fo(n){const e=bt;return bt=n,Vd=n&&n.type.__scopeId||null,e}function $_(n,e=bt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&sh(-1);const i=fo(e);let a;try{a=n(...s)}finally{fo(i),r._d&&sh(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function q_(n,e){if(bt===null)return n;const t=zo(bt),r=n.dirs||(n.dirs=[]);for(let s=0;s<e.length;s++){let[i,a,l,c=be]=e[s];i&&(ae(i)&&(i={mounted:i,updated:i}),i.deep&&un(a),r.push({dir:i,instance:t,value:a,oldValue:void 0,arg:l,modifiers:c}))}return n}function ir(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let a=0;a<s.length;a++){const l=s[a];i&&(l.oldValue=i[a].value);let c=l.dir[r];c&&(gn(),Yt(c,t,8,[n.el,l,n,e]),mn())}}function H_(n,e){if(ft){let t=ft.provides;const r=ft.parent&&ft.parent.provides;r===t&&(t=ft.provides=Object.create(r)),t[n]=e}}function Ji(n,e,t=!1){const r=Hy();if(r||Ur){let s=Ur?Ur._context.provides:r?r.parent==null||r.ce?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ae(e)?e.call(r&&r.proxy):e}}const z_=Symbol.for("v-scx"),W_=()=>Ji(z_);function Xi(n,e,t){return kd(n,e,t)}function kd(n,e,t=be){const{immediate:r,deep:s,flush:i,once:a}=t,l=at({},t),c=e&&r||!e&&i!=="post";let h;if(Xs){if(i==="sync"){const S=W_();h=S.__watcherHandles||(S.__watcherHandles=[])}else if(!c){const S=()=>{};return S.stop=zt,S.resume=zt,S.pause=zt,S}}const d=ft;l.call=(S,V,D)=>Yt(S,d,V,D);let g=!1;i==="post"?l.scheduler=S=>{pt(S,d&&d.suspense)}:i!=="sync"&&(g=!0,l.scheduler=(S,V)=>{V?S():Gl(S)}),l.augmentJob=S=>{e&&(S.flags|=4),g&&(S.flags|=2,d&&(S.id=d.uid,S.i=d))};const _=L_(n,e,l);return Xs&&(h?h.push(_):c&&_()),_}function K_(n,e,t){const r=this.proxy,s=Oe(n)?n.includes(".")?Dd(r,n):()=>r[n]:n.bind(r,r);let i;ae(e)?i=e:(i=e.handler,t=e);const a=ui(this),l=kd(s,i.bind(r),t);return a(),l}function Dd(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}const G_=Symbol("_vte"),Q_=n=>n.__isTeleport,J_=Symbol("_leaveCb");function Ql(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Ql(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Nd(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function Gu(n,e){let t;return!!((t=Object.getOwnPropertyDescriptor(n,e))&&!t.configurable)}const po=new WeakMap;function Ms(n,e,t,r,s=!1){if(se(n)){n.forEach((D,O)=>Ms(D,e&&(se(e)?e[O]:e),t,r,s));return}if(Ls(r)&&!s){r.shapeFlag&512&&r.type.__asyncResolved&&r.component.subTree.component&&Ms(n,e,t,r.component.subTree);return}const i=r.shapeFlag&4?zo(r.component):r.el,a=s?null:i,{i:l,r:c}=n,h=e&&e.r,d=l.refs===be?l.refs={}:l.refs,g=l.setupState,_=ve(g),S=g===be?td:D=>Gu(d,D)?!1:Ee(_,D),V=(D,O)=>!(O&&Gu(d,O));if(h!=null&&h!==c){if(Qu(e),Oe(h))d[h]=null,S(h)&&(g[h]=null);else if(ot(h)){const D=e;V(h,D.k)&&(h.value=null),D.k&&(d[D.k]=null)}}if(ae(c))ci(c,l,12,[a,d]);else{const D=Oe(c),O=ot(c);if(D||O){const Q=()=>{if(n.f){const $=D?S(c)?g[c]:d[c]:V()||!n.k?c.value:d[n.k];if(s)se($)&&Ml($,i);else if(se($))$.includes(i)||$.push(i);else if(D)d[c]=[i],S(c)&&(g[c]=d[c]);else{const G=[i];V(c,n.k)&&(c.value=G),n.k&&(d[n.k]=G)}}else D?(d[c]=a,S(c)&&(g[c]=a)):O&&(V(c,n.k)&&(c.value=a),n.k&&(d[n.k]=a))};if(a){const $=()=>{Q(),po.delete(n)};$.id=-1,po.set(n,$),pt($,t)}else Qu(n),Q()}}}function Qu(n){const e=po.get(n);e&&(e.flags|=8,po.delete(n))}Fo().requestIdleCallback;Fo().cancelIdleCallback;const Ls=n=>!!n.type.__asyncLoader,Od=n=>n.type.__isKeepAlive;function X_(n,e){xd(n,"a",e)}function Y_(n,e){xd(n,"da",e)}function xd(n,e,t=ft){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if($o(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Od(s.parent.vnode)&&Z_(r,e,t,s),s=s.parent}}function Z_(n,e,t,r){const s=$o(e,n,r,!0);Jl(()=>{Ml(r[e],s)},t)}function $o(n,e,t=ft,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...a)=>{gn();const l=ui(t),c=Yt(e,t,n,a);return l(),mn(),c});return r?s.unshift(i):s.push(i),i}}const In=n=>(e,t=ft)=>{(!Xs||n==="sp")&&$o(n,(...r)=>e(...r),t)},ey=In("bm"),Md=In("m"),ty=In("bu"),ny=In("u"),ry=In("bum"),Jl=In("um"),sy=In("sp"),iy=In("rtg"),oy=In("rtc");function ay(n,e=ft){$o("ec",n,e)}const ly=Symbol.for("v-ndc");function cy(n,e,t,r){let s;const i=t,a=se(n);if(a||Oe(n)){const l=a&&fr(n);let c=!1,h=!1;l&&(c=!St(n),h=_n(n),n=Bo(n)),s=new Array(n.length);for(let d=0,g=n.length;d<g;d++)s[d]=e(c?h?zr(Mt(n[d])):Mt(n[d]):n[d],d,void 0,i)}else if(typeof n=="number"){s=new Array(n);for(let l=0;l<n;l++)s[l]=e(l+1,l,void 0,i)}else if(we(n))if(n[Symbol.iterator])s=Array.from(n,(l,c)=>e(l,c,void 0,i));else{const l=Object.keys(n);s=new Array(l.length);for(let c=0,h=l.length;c<h;c++){const d=l[c];s[c]=e(n[d],d,c,i)}}else s=[];return s}const nl=n=>n?sp(n)?zo(n):nl(n.parent):null,Fs=at(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>nl(n.parent),$root:n=>nl(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Fd(n),$forceUpdate:n=>n.f||(n.f=()=>{Gl(n.update)}),$nextTick:n=>n.n||(n.n=U_.bind(n.proxy)),$watch:n=>K_.bind(n)}),Da=(n,e)=>n!==be&&!n.__isScriptSetup&&Ee(n,e),uy={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:r,data:s,props:i,accessCache:a,type:l,appContext:c}=n;if(e[0]!=="$"){const _=a[e];if(_!==void 0)switch(_){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Da(r,e))return a[e]=1,r[e];if(s!==be&&Ee(s,e))return a[e]=2,s[e];if(Ee(i,e))return a[e]=3,i[e];if(t!==be&&Ee(t,e))return a[e]=4,t[e];rl&&(a[e]=0)}}const h=Fs[e];let d,g;if(h)return e==="$attrs"&&st(n.attrs,"get",""),h(n);if((d=l.__cssModules)&&(d=d[e]))return d;if(t!==be&&Ee(t,e))return a[e]=4,t[e];if(g=c.config.globalProperties,Ee(g,e))return g[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Da(s,e)?(s[e]=t,!0):r!==be&&Ee(r,e)?(r[e]=t,!0):Ee(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,props:i,type:a}},l){let c;return!!(t[l]||n!==be&&l[0]!=="$"&&Ee(n,l)||Da(e,l)||Ee(i,l)||Ee(r,l)||Ee(Fs,l)||Ee(s.config.globalProperties,l)||(c=a.__cssModules)&&c[l])},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ee(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function Ju(n){return se(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let rl=!0;function hy(n){const e=Fd(n),t=n.proxy,r=n.ctx;rl=!1,e.beforeCreate&&Xu(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:a,watch:l,provide:c,inject:h,created:d,beforeMount:g,mounted:_,beforeUpdate:S,updated:V,activated:D,deactivated:O,beforeDestroy:Q,beforeUnmount:$,destroyed:G,unmounted:z,render:ue,renderTracked:ge,renderTriggered:w,errorCaptured:y,serverPrefetch:E,expose:I,inheritAttrs:b,components:T,directives:m,filters:pe}=e;if(h&&fy(h,r,null),a)for(const Ie in a){const me=a[Ie];ae(me)&&(r[Ie]=me.bind(t))}if(s){const Ie=s.call(t,t);we(Ie)&&(n.data=zl(Ie))}if(rl=!0,i)for(const Ie in i){const me=i[Ie],Rt=ae(me)?me.bind(t,t):ae(me.get)?me.get.bind(t,t):zt,Yn=!ae(me)&&ae(me.set)?me.set.bind(t):zt,tn=Zi({get:Rt,set:Yn});Object.defineProperty(r,Ie,{enumerable:!0,configurable:!0,get:()=>tn.value,set:je=>tn.value=je})}if(l)for(const Ie in l)Ld(l[Ie],r,t,Ie);if(c){const Ie=ae(c)?c.call(t):c;Reflect.ownKeys(Ie).forEach(me=>{H_(me,Ie[me])})}d&&Xu(d,n,"c");function We(Ie,me){se(me)?me.forEach(Rt=>Ie(Rt.bind(t))):me&&Ie(me.bind(t))}if(We(ey,g),We(Md,_),We(ty,S),We(ny,V),We(X_,D),We(Y_,O),We(ay,y),We(oy,ge),We(iy,w),We(ry,$),We(Jl,z),We(sy,E),se(I))if(I.length){const Ie=n.exposed||(n.exposed={});I.forEach(me=>{Object.defineProperty(Ie,me,{get:()=>t[me],set:Rt=>t[me]=Rt,enumerable:!0})})}else n.exposed||(n.exposed={});ue&&n.render===zt&&(n.render=ue),b!=null&&(n.inheritAttrs=b),T&&(n.components=T),m&&(n.directives=m),E&&Nd(n)}function fy(n,e,t=zt){se(n)&&(n=sl(n));for(const r in n){const s=n[r];let i;we(s)?"default"in s?i=Ji(s.from||r,s.default,!0):i=Ji(s.from||r):i=Ji(s),ot(i)?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>i.value,set:a=>i.value=a}):e[r]=i}}function Xu(n,e,t){Yt(se(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ld(n,e,t,r){let s=r.includes(".")?Dd(t,r):()=>t[r];if(Oe(n)){const i=e[n];ae(i)&&Xi(s,i)}else if(ae(n))Xi(s,n.bind(t));else if(we(n))if(se(n))n.forEach(i=>Ld(i,e,t,r));else{const i=ae(n.handler)?n.handler.bind(t):e[n.handler];ae(i)&&Xi(s,i,n)}}function Fd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:a}}=n.appContext,l=i.get(e);let c;return l?c=l:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(h=>go(c,h,a,!0)),go(c,e,a)),we(e)&&i.set(e,c),c}function go(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&go(n,i,t,!0),s&&s.forEach(a=>go(n,a,t,!0));for(const a in e)if(!(r&&a==="expose")){const l=dy[a]||t&&t[a];n[a]=l?l(n[a],e[a]):e[a]}return n}const dy={data:Yu,props:Zu,emits:Zu,methods:Rs,computed:Rs,beforeCreate:ut,created:ut,beforeMount:ut,mounted:ut,beforeUpdate:ut,updated:ut,beforeDestroy:ut,beforeUnmount:ut,destroyed:ut,unmounted:ut,activated:ut,deactivated:ut,errorCaptured:ut,serverPrefetch:ut,components:Rs,directives:Rs,watch:gy,provide:Yu,inject:py};function Yu(n,e){return e?n?function(){return at(ae(n)?n.call(this,this):n,ae(e)?e.call(this,this):e)}:e:n}function py(n,e){return Rs(sl(n),sl(e))}function sl(n){if(se(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function ut(n,e){return n?[...new Set([].concat(n,e))]:e}function Rs(n,e){return n?at(Object.create(null),n,e):e}function Zu(n,e){return n?se(n)&&se(e)?[...new Set([...n,...e])]:at(Object.create(null),Ju(n),Ju(e??{})):e}function gy(n,e){if(!n)return e;if(!e)return n;const t=at(Object.create(null),n);for(const r in e)t[r]=ut(n[r],e[r]);return t}function Ud(){return{app:null,config:{isNativeTag:td,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let my=0;function _y(n,e){return function(r,s=null){ae(r)||(r=at({},r)),s!=null&&!we(s)&&(s=null);const i=Ud(),a=new WeakSet,l=[];let c=!1;const h=i.app={_uid:my++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:Jy,get config(){return i.config},set config(d){},use(d,...g){return a.has(d)||(d&&ae(d.install)?(a.add(d),d.install(h,...g)):ae(d)&&(a.add(d),d(h,...g))),h},mixin(d){return i.mixins.includes(d)||i.mixins.push(d),h},component(d,g){return g?(i.components[d]=g,h):i.components[d]},directive(d,g){return g?(i.directives[d]=g,h):i.directives[d]},mount(d,g,_){if(!c){const S=h._ceVNode||pn(r,s);return S.appContext=i,_===!0?_="svg":_===!1&&(_=void 0),n(S,d,_),c=!0,h._container=d,d.__vue_app__=h,zo(S.component)}},onUnmount(d){l.push(d)},unmount(){c&&(Yt(l,h._instance,16),n(null,h._container),delete h._container.__vue_app__)},provide(d,g){return i.provides[d]=g,h},runWithContext(d){const g=Ur;Ur=h;try{return d()}finally{Ur=g}}};return h}}let Ur=null;const yy=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Dt(e)}Modifiers`]||n[`${Qn(e)}Modifiers`];function vy(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||be;let s=t;const i=e.startsWith("update:"),a=i&&yy(r,e.slice(7));a&&(a.trim&&(s=t.map(d=>Oe(d)?d.trim():d)),a.number&&(s=t.map(Fl)));let l,c=r[l=Ra(e)]||r[l=Ra(Dt(e))];!c&&i&&(c=r[l=Ra(Qn(e))]),c&&Yt(c,n,6,s);const h=r[l+"Once"];if(h){if(!n.emitted)n.emitted={};else if(n.emitted[l])return;n.emitted[l]=!0,Yt(h,n,6,s)}}const Ey=new WeakMap;function Bd(n,e,t=!1){const r=t?Ey:e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let a={},l=!1;if(!ae(n)){const c=h=>{const d=Bd(h,e,!0);d&&(l=!0,at(a,d))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!l?(we(n)&&r.set(n,null),null):(se(i)?i.forEach(c=>a[c]=null):at(a,i),we(n)&&r.set(n,a),a)}function qo(n,e){return!n||!xo(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ee(n,e[0].toLowerCase()+e.slice(1))||Ee(n,Qn(e))||Ee(n,e))}function eh(n){const{type:e,vnode:t,proxy:r,withProxy:s,propsOptions:[i],slots:a,attrs:l,emit:c,render:h,renderCache:d,props:g,data:_,setupState:S,ctx:V,inheritAttrs:D}=n,O=fo(n);let Q,$;try{if(t.shapeFlag&4){const z=s||r,ue=z;Q=qt(h.call(ue,z,d,g,S,_,V)),$=l}else{const z=e;Q=qt(z.length>1?z(g,{attrs:l,slots:a,emit:c}):z(g,null)),$=e.props?l:Ty(l)}}catch(z){Us.length=0,jo(z,n,1),Q=pn(jn)}let G=Q;if($&&D!==!1){const z=Object.keys($),{shapeFlag:ue}=G;z.length&&ue&7&&(i&&z.some(Mo)&&($=Iy($,i)),G=Wr(G,$,!1,!0))}return t.dirs&&(G=Wr(G,null,!1,!0),G.dirs=G.dirs?G.dirs.concat(t.dirs):t.dirs),t.transition&&Ql(G,t.transition),Q=G,fo(O),Q}const Ty=n=>{let e;for(const t in n)(t==="class"||t==="style"||xo(t))&&((e||(e={}))[t]=n[t]);return e},Iy=(n,e)=>{const t={};for(const r in n)(!Mo(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function wy(n,e,t){const{props:r,children:s,component:i}=n,{props:a,children:l,patchFlag:c}=e,h=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?th(r,a,h):!!a;if(c&8){const d=e.dynamicProps;for(let g=0;g<d.length;g++){const _=d[g];if(jd(a,r,_)&&!qo(h,_))return!0}}}else return(s||l)&&(!l||!l.$stable)?!0:r===a?!1:r?a?th(r,a,h):!0:!!a;return!1}function th(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(jd(e,n,i)&&!qo(t,i))return!0}return!1}function jd(n,e,t){const r=n[t],s=e[t];return t==="style"&&we(r)&&we(s)?!Ul(r,s):r!==s}function Ay({vnode:n,parent:e,suspense:t},r){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=r,n=s),s===n)(n=e.vnode).el=r,e=e.parent;else break}t&&t.activeBranch===n&&(t.vnode.el=r)}const $d={},qd=()=>Object.create($d),Hd=n=>Object.getPrototypeOf(n)===$d;function by(n,e,t,r=!1){const s={},i=qd();n.propsDefaults=Object.create(null),zd(n,e,s,i);for(const a in n.propsOptions[0])a in s||(s[a]=void 0);t?n.props=r?s:P_(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function Sy(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:a}}=n,l=ve(s),[c]=n.propsOptions;let h=!1;if((r||a>0)&&!(a&16)){if(a&8){const d=n.vnode.dynamicProps;for(let g=0;g<d.length;g++){let _=d[g];if(qo(n.emitsOptions,_))continue;const S=e[_];if(c)if(Ee(i,_))S!==i[_]&&(i[_]=S,h=!0);else{const V=Dt(_);s[V]=il(c,l,V,S,n,!1)}else S!==i[_]&&(i[_]=S,h=!0)}}}else{zd(n,e,s,i)&&(h=!0);let d;for(const g in l)(!e||!Ee(e,g)&&((d=Qn(g))===g||!Ee(e,d)))&&(c?t&&(t[g]!==void 0||t[d]!==void 0)&&(s[g]=il(c,l,g,void 0,n,!0)):delete s[g]);if(i!==l)for(const g in i)(!e||!Ee(e,g))&&(delete i[g],h=!0)}h&&cn(n.attrs,"set","")}function zd(n,e,t,r){const[s,i]=n.propsOptions;let a=!1,l;if(e)for(let c in e){if(Ns(c))continue;const h=e[c];let d;s&&Ee(s,d=Dt(c))?!i||!i.includes(d)?t[d]=h:(l||(l={}))[d]=h:qo(n.emitsOptions,c)||(!(c in r)||h!==r[c])&&(r[c]=h,a=!0)}if(i){const c=ve(t),h=l||be;for(let d=0;d<i.length;d++){const g=i[d];t[g]=il(s,c,g,h[g],n,!Ee(h,g))}}return a}function il(n,e,t,r,s,i){const a=n[t];if(a!=null){const l=Ee(a,"default");if(l&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&ae(c)){const{propsDefaults:h}=s;if(t in h)r=h[t];else{const d=ui(s);r=h[t]=c.call(null,e),d()}}else r=c;s.ce&&s.ce._setProp(t,r)}a[0]&&(i&&!l?r=!1:a[1]&&(r===""||r===Qn(t))&&(r=!0))}return r}const Ry=new WeakMap;function Wd(n,e,t=!1){const r=t?Ry:e.propsCache,s=r.get(n);if(s)return s;const i=n.props,a={},l=[];let c=!1;if(!ae(n)){const d=g=>{c=!0;const[_,S]=Wd(g,e,!0);at(a,_),S&&l.push(...S)};!t&&e.mixins.length&&e.mixins.forEach(d),n.extends&&d(n.extends),n.mixins&&n.mixins.forEach(d)}if(!i&&!c)return we(n)&&r.set(n,Mr),Mr;if(se(i))for(let d=0;d<i.length;d++){const g=Dt(i[d]);nh(g)&&(a[g]=be)}else if(i)for(const d in i){const g=Dt(d);if(nh(g)){const _=i[d],S=a[g]=se(_)||ae(_)?{type:_}:at({},_),V=S.type;let D=!1,O=!0;if(se(V))for(let Q=0;Q<V.length;++Q){const $=V[Q],G=ae($)&&$.name;if(G==="Boolean"){D=!0;break}else G==="String"&&(O=!1)}else D=ae(V)&&V.name==="Boolean";S[0]=D,S[1]=O,(D||Ee(S,"default"))&&l.push(g)}}const h=[a,l];return we(n)&&r.set(n,h),h}function nh(n){return n[0]!=="$"&&!Ns(n)}const Xl=n=>n==="_"||n==="_ctx"||n==="$stable",Yl=n=>se(n)?n.map(qt):[qt(n)],Py=(n,e,t)=>{if(e._n)return e;const r=$_((...s)=>Yl(e(...s)),t);return r._c=!1,r},Kd=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Xl(s))continue;const i=n[s];if(ae(i))e[s]=Py(s,i,r);else if(i!=null){const a=Yl(i);e[s]=()=>a}}},Gd=(n,e)=>{const t=Yl(e);n.slots.default=()=>t},Qd=(n,e,t)=>{for(const r in e)(t||!Xl(r))&&(n[r]=e[r])},Cy=(n,e,t)=>{const r=n.slots=qd();if(n.vnode.shapeFlag&32){const s=e._;s?(Qd(r,e,t),t&&ad(r,"_",s,!0)):Kd(e,r)}else e&&Gd(n,e)},Vy=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,a=be;if(r.shapeFlag&32){const l=e._;l?t&&l===1?i=!1:Qd(s,e,t):(i=!e.$stable,Kd(e,s)),a=e}else e&&(Gd(n,e),a={default:1});if(i)for(const l in s)!Xl(l)&&a[l]==null&&delete s[l]},pt=xy;function ky(n){return Dy(n)}function Dy(n,e){const t=Fo();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:a,createText:l,createComment:c,setText:h,setElementText:d,parentNode:g,nextSibling:_,setScopeId:S=zt,insertStaticContent:V}=n,D=(v,A,C,F=null,x=null,L=null,q=void 0,j=null,U=!!A.dynamicChildren)=>{if(v===A)return;v&&!bs(v,A)&&(F=nn(v),je(v,x,L,!0),v=null),A.patchFlag===-2&&(U=!1,A.dynamicChildren=null);const{type:M,ref:Y,shapeFlag:H}=A;switch(M){case Ho:O(v,A,C,F);break;case jn:Q(v,A,C,F);break;case Oa:v==null&&$(A,C,F,q);break;case Ct:T(v,A,C,F,x,L,q,j,U);break;default:H&1?ue(v,A,C,F,x,L,q,j,U):H&6?m(v,A,C,F,x,L,q,j,U):(H&64||H&128)&&M.process(v,A,C,F,x,L,q,j,U,Ft)}Y!=null&&x?Ms(Y,v&&v.ref,L,A||v,!A):Y==null&&v&&v.ref!=null&&Ms(v.ref,null,L,v,!0)},O=(v,A,C,F)=>{if(v==null)r(A.el=l(A.children),C,F);else{const x=A.el=v.el;A.children!==v.children&&h(x,A.children)}},Q=(v,A,C,F)=>{v==null?r(A.el=c(A.children||""),C,F):A.el=v.el},$=(v,A,C,F)=>{[v.el,v.anchor]=V(v.children,A,C,F,v.el,v.anchor)},G=({el:v,anchor:A},C,F)=>{let x;for(;v&&v!==A;)x=_(v),r(v,C,F),v=x;r(A,C,F)},z=({el:v,anchor:A})=>{let C;for(;v&&v!==A;)C=_(v),s(v),v=C;s(A)},ue=(v,A,C,F,x,L,q,j,U)=>{if(A.type==="svg"?q="svg":A.type==="math"&&(q="mathml"),v==null)ge(A,C,F,x,L,q,j,U);else{const M=v.el&&v.el._isVueCE?v.el:null;try{M&&M._beginPatch(),E(v,A,x,L,q,j,U)}finally{M&&M._endPatch()}}},ge=(v,A,C,F,x,L,q,j)=>{let U,M;const{props:Y,shapeFlag:H,transition:J,dirs:Z}=v;if(U=v.el=a(v.type,L,Y&&Y.is,Y),H&8?d(U,v.children):H&16&&y(v.children,U,null,F,x,Na(v,L),q,j),Z&&ir(v,null,F,"created"),w(U,v,v.scopeId,q,F),Y){for(const oe in Y)oe!=="value"&&!Ns(oe)&&i(U,oe,null,Y[oe],L,F);"value"in Y&&i(U,"value",null,Y.value,L),(M=Y.onVnodeBeforeMount)&&Ut(M,F,v)}Z&&ir(v,null,F,"beforeMount");const ee=Ny(x,J);ee&&J.beforeEnter(U),r(U,A,C),((M=Y&&Y.onVnodeMounted)||ee||Z)&&pt(()=>{try{M&&Ut(M,F,v),ee&&J.enter(U),Z&&ir(v,null,F,"mounted")}finally{}},x)},w=(v,A,C,F,x)=>{if(C&&S(v,C),F)for(let L=0;L<F.length;L++)S(v,F[L]);if(x){let L=x.subTree;if(A===L||Zd(L.type)&&(L.ssContent===A||L.ssFallback===A)){const q=x.vnode;w(v,q,q.scopeId,q.slotScopeIds,x.parent)}}},y=(v,A,C,F,x,L,q,j,U=0)=>{for(let M=U;M<v.length;M++){const Y=v[M]=j?ln(v[M]):qt(v[M]);D(null,Y,A,C,F,x,L,q,j)}},E=(v,A,C,F,x,L,q)=>{const j=A.el=v.el;let{patchFlag:U,dynamicChildren:M,dirs:Y}=A;U|=v.patchFlag&16;const H=v.props||be,J=A.props||be;let Z;if(C&&or(C,!1),(Z=J.onVnodeBeforeUpdate)&&Ut(Z,C,A,v),Y&&ir(A,v,C,"beforeUpdate"),C&&or(C,!0),(H.innerHTML&&J.innerHTML==null||H.textContent&&J.textContent==null)&&d(j,""),M?I(v.dynamicChildren,M,j,C,F,Na(A,x),L):q||me(v,A,j,null,C,F,Na(A,x),L,!1),U>0){if(U&16)b(j,H,J,C,x);else if(U&2&&H.class!==J.class&&i(j,"class",null,J.class,x),U&4&&i(j,"style",H.style,J.style,x),U&8){const ee=A.dynamicProps;for(let oe=0;oe<ee.length;oe++){const ye=ee[oe],Ve=H[ye],Me=J[ye];(Me!==Ve||ye==="value")&&i(j,ye,Ve,Me,x,C)}}U&1&&v.children!==A.children&&d(j,A.children)}else!q&&M==null&&b(j,H,J,C,x);((Z=J.onVnodeUpdated)||Y)&&pt(()=>{Z&&Ut(Z,C,A,v),Y&&ir(A,v,C,"updated")},F)},I=(v,A,C,F,x,L,q)=>{for(let j=0;j<A.length;j++){const U=v[j],M=A[j],Y=U.el&&(U.type===Ct||!bs(U,M)||U.shapeFlag&198)?g(U.el):C;D(U,M,Y,null,F,x,L,q,!0)}},b=(v,A,C,F,x)=>{if(A!==C){if(A!==be)for(const L in A)!Ns(L)&&!(L in C)&&i(v,L,A[L],null,x,F);for(const L in C){if(Ns(L))continue;const q=C[L],j=A[L];q!==j&&L!=="value"&&i(v,L,j,q,x,F)}"value"in C&&i(v,"value",A.value,C.value,x)}},T=(v,A,C,F,x,L,q,j,U)=>{const M=A.el=v?v.el:l(""),Y=A.anchor=v?v.anchor:l("");let{patchFlag:H,dynamicChildren:J,slotScopeIds:Z}=A;Z&&(j=j?j.concat(Z):Z),v==null?(r(M,C,F),r(Y,C,F),y(A.children||[],C,Y,x,L,q,j,U)):H>0&&H&64&&J&&v.dynamicChildren&&v.dynamicChildren.length===J.length?(I(v.dynamicChildren,J,C,x,L,q,j),(A.key!=null||x&&A===x.subTree)&&Jd(v,A,!0)):me(v,A,C,Y,x,L,q,j,U)},m=(v,A,C,F,x,L,q,j,U)=>{A.slotScopeIds=j,v==null?A.shapeFlag&512?x.ctx.activate(A,C,F,q,U):pe(A,C,F,x,L,q,U):De(v,A,U)},pe=(v,A,C,F,x,L,q)=>{const j=v.component=qy(v,F,x);if(Od(v)&&(j.ctx.renderer=Ft),zy(j,!1,q),j.asyncDep){if(x&&x.registerDep(j,We,q),!v.el){const U=j.subTree=pn(jn);Q(null,U,A,C),v.placeholder=U.el}}else We(j,v,A,C,x,L,q)},De=(v,A,C)=>{const F=A.component=v.component;if(wy(v,A,C))if(F.asyncDep&&!F.asyncResolved){Ie(F,A,C);return}else F.next=A,F.update();else A.el=v.el,F.vnode=A},We=(v,A,C,F,x,L,q)=>{const j=()=>{if(v.isMounted){let{next:H,bu:J,u:Z,parent:ee,vnode:oe}=v;{const Ye=Xd(v);if(Ye){H&&(H.el=oe.el,Ie(v,H,q)),Ye.asyncDep.then(()=>{pt(()=>{v.isUnmounted||M()},x)});return}}let ye=H,Ve;or(v,!1),H?(H.el=oe.el,Ie(v,H,q)):H=oe,J&&Qi(J),(Ve=H.props&&H.props.onVnodeBeforeUpdate)&&Ut(Ve,ee,H,oe),or(v,!0);const Me=eh(v),Tt=v.subTree;v.subTree=Me,D(Tt,Me,g(Tt.el),nn(Tt),v,x,L),H.el=Me.el,ye===null&&Ay(v,Me.el),Z&&pt(Z,x),(Ve=H.props&&H.props.onVnodeUpdated)&&pt(()=>Ut(Ve,ee,H,oe),x)}else{let H;const{el:J,props:Z}=A,{bm:ee,m:oe,parent:ye,root:Ve,type:Me}=v,Tt=Ls(A);or(v,!1),ee&&Qi(ee),!Tt&&(H=Z&&Z.onVnodeBeforeMount)&&Ut(H,ye,A),or(v,!0);{Ve.ce&&Ve.ce._hasShadowRoot()&&Ve.ce._injectChildStyle(Me,v.parent?v.parent.type:void 0);const Ye=v.subTree=eh(v);D(null,Ye,C,F,v,x,L),A.el=Ye.el}if(oe&&pt(oe,x),!Tt&&(H=Z&&Z.onVnodeMounted)){const Ye=A;pt(()=>Ut(H,ye,Ye),x)}(A.shapeFlag&256||ye&&Ls(ye.vnode)&&ye.vnode.shapeFlag&256)&&v.a&&pt(v.a,x),v.isMounted=!0,A=C=F=null}};v.scope.on();const U=v.effect=new hd(j);v.scope.off();const M=v.update=U.run.bind(U),Y=v.job=U.runIfDirty.bind(U);Y.i=v,Y.id=v.uid,U.scheduler=()=>Gl(Y),or(v,!0),M()},Ie=(v,A,C)=>{A.component=v;const F=v.vnode.props;v.vnode=A,v.next=null,Sy(v,A.props,F,C),Vy(v,A.children,C),gn(),Ku(v),mn()},me=(v,A,C,F,x,L,q,j,U=!1)=>{const M=v&&v.children,Y=v?v.shapeFlag:0,H=A.children,{patchFlag:J,shapeFlag:Z}=A;if(J>0){if(J&128){Yn(M,H,C,F,x,L,q,j,U);return}else if(J&256){Rt(M,H,C,F,x,L,q,j,U);return}}Z&8?(Y&16&&er(M,x,L),H!==M&&d(C,H)):Y&16?Z&16?Yn(M,H,C,F,x,L,q,j,U):er(M,x,L,!0):(Y&8&&d(C,""),Z&16&&y(H,C,F,x,L,q,j,U))},Rt=(v,A,C,F,x,L,q,j,U)=>{v=v||Mr,A=A||Mr;const M=v.length,Y=A.length,H=Math.min(M,Y);let J;for(J=0;J<H;J++){const Z=A[J]=U?ln(A[J]):qt(A[J]);D(v[J],Z,C,null,x,L,q,j,U)}M>Y?er(v,x,L,!0,!1,H):y(A,C,F,x,L,q,j,U,H)},Yn=(v,A,C,F,x,L,q,j,U)=>{let M=0;const Y=A.length;let H=v.length-1,J=Y-1;for(;M<=H&&M<=J;){const Z=v[M],ee=A[M]=U?ln(A[M]):qt(A[M]);if(bs(Z,ee))D(Z,ee,C,null,x,L,q,j,U);else break;M++}for(;M<=H&&M<=J;){const Z=v[H],ee=A[J]=U?ln(A[J]):qt(A[J]);if(bs(Z,ee))D(Z,ee,C,null,x,L,q,j,U);else break;H--,J--}if(M>H){if(M<=J){const Z=J+1,ee=Z<Y?A[Z].el:F;for(;M<=J;)D(null,A[M]=U?ln(A[M]):qt(A[M]),C,ee,x,L,q,j,U),M++}}else if(M>J)for(;M<=H;)je(v[M],x,L,!0),M++;else{const Z=M,ee=M,oe=new Map;for(M=ee;M<=J;M++){const Ke=A[M]=U?ln(A[M]):qt(A[M]);Ke.key!=null&&oe.set(Ke.key,M)}let ye,Ve=0;const Me=J-ee+1;let Tt=!1,Ye=0;const An=new Array(Me);for(M=0;M<Me;M++)An[M]=0;for(M=Z;M<=H;M++){const Ke=v[M];if(Ve>=Me){je(Ke,x,L,!0);continue}let It;if(Ke.key!=null)It=oe.get(Ke.key);else for(ye=ee;ye<=J;ye++)if(An[ye-ee]===0&&bs(Ke,A[ye])){It=ye;break}It===void 0?je(Ke,x,L,!0):(An[It-ee]=M+1,It>=Ye?Ye=It:Tt=!0,D(Ke,A[It],C,null,x,L,q,j,U),Ve++)}const hs=Tt?Oy(An):Mr;for(ye=hs.length-1,M=Me-1;M>=0;M--){const Ke=ee+M,It=A[Ke],wi=A[Ke+1],Ar=Ke+1<Y?wi.el||Yd(wi):F;An[M]===0?D(null,It,C,Ar,x,L,q,j,U):Tt&&(ye<0||M!==hs[ye]?tn(It,C,Ar,2):ye--)}}},tn=(v,A,C,F,x=null)=>{const{el:L,type:q,transition:j,children:U,shapeFlag:M}=v;if(M&6){tn(v.component.subTree,A,C,F);return}if(M&128){v.suspense.move(A,C,F);return}if(M&64){q.move(v,A,C,Ft);return}if(q===Ct){r(L,A,C);for(let H=0;H<U.length;H++)tn(U[H],A,C,F);r(v.anchor,A,C);return}if(q===Oa){G(v,A,C);return}if(F!==2&&M&1&&j)if(F===0)j.beforeEnter(L),r(L,A,C),pt(()=>j.enter(L),x);else{const{leave:H,delayLeave:J,afterLeave:Z}=j,ee=()=>{v.ctx.isUnmounted?s(L):r(L,A,C)},oe=()=>{L._isLeaving&&L[J_](!0),H(L,()=>{ee(),Z&&Z()})};J?J(L,ee,oe):oe()}else r(L,A,C)},je=(v,A,C,F=!1,x=!1)=>{const{type:L,props:q,ref:j,children:U,dynamicChildren:M,shapeFlag:Y,patchFlag:H,dirs:J,cacheIndex:Z,memo:ee}=v;if(H===-2&&(x=!1),j!=null&&(gn(),Ms(j,null,C,v,!0),mn()),Z!=null&&(A.renderCache[Z]=void 0),Y&256){A.ctx.deactivate(v);return}const oe=Y&1&&J,ye=!Ls(v);let Ve;if(ye&&(Ve=q&&q.onVnodeBeforeUnmount)&&Ut(Ve,A,v),Y&6)Zn(v.component,C,F);else{if(Y&128){v.suspense.unmount(C,F);return}oe&&ir(v,null,A,"beforeUnmount"),Y&64?v.type.remove(v,A,C,Ft,F):M&&!M.hasOnce&&(L!==Ct||H>0&&H&64)?er(M,A,C,!1,!0):(L===Ct&&H&384||!x&&Y&16)&&er(U,A,C),F&&$e(v)}const Me=ee!=null&&Z==null;(ye&&(Ve=q&&q.onVnodeUnmounted)||oe||Me)&&pt(()=>{Ve&&Ut(Ve,A,v),oe&&ir(v,null,A,"unmounted"),Me&&(v.el=null)},C)},$e=v=>{const{type:A,el:C,anchor:F,transition:x}=v;if(A===Ct){fa(C,F);return}if(A===Oa){z(v);return}const L=()=>{s(C),x&&!x.persisted&&x.afterLeave&&x.afterLeave()};if(v.shapeFlag&1&&x&&!x.persisted){const{leave:q,delayLeave:j}=x,U=()=>q(C,L);j?j(v.el,L,U):U()}else L()},fa=(v,A)=>{let C;for(;v!==A;)C=_(v),s(v),v=C;s(A)},Zn=(v,A,C)=>{const{bum:F,scope:x,job:L,subTree:q,um:j,m:U,a:M}=v;rh(U),rh(M),F&&Qi(F),x.stop(),L&&(L.flags|=8,je(q,v,A,C)),j&&pt(j,A),pt(()=>{v.isUnmounted=!0},A)},er=(v,A,C,F=!1,x=!1,L=0)=>{for(let q=L;q<v.length;q++)je(v[q],A,C,F,x)},nn=v=>{if(v.shapeFlag&6)return nn(v.component.subTree);if(v.shapeFlag&128)return v.suspense.next();const A=_(v.anchor||v.el),C=A&&A[G_];return C?_(C):A};let cs=!1;const Ii=(v,A,C)=>{let F;v==null?A._vnode&&(je(A._vnode,null,null,!0),F=A._vnode.component):D(A._vnode||null,v,A,null,null,null,C),A._vnode=v,cs||(cs=!0,Ku(F),Pd(),cs=!1)},Ft={p:D,um:je,m:tn,r:$e,mt:pe,mc:y,pc:me,pbc:I,n:nn,o:n};return{render:Ii,hydrate:void 0,createApp:_y(Ii)}}function Na({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function or({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function Ny(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function Jd(n,e,t=!1){const r=n.children,s=e.children;if(se(r)&&se(s))for(let i=0;i<r.length;i++){const a=r[i];let l=s[i];l.shapeFlag&1&&!l.dynamicChildren&&((l.patchFlag<=0||l.patchFlag===32)&&(l=s[i]=ln(s[i]),l.el=a.el),!t&&l.patchFlag!==-2&&Jd(a,l)),l.type===Ho&&(l.patchFlag===-1&&(l=s[i]=ln(l)),l.el=a.el),l.type===jn&&!l.el&&(l.el=a.el)}}function Oy(n){const e=n.slice(),t=[0];let r,s,i,a,l;const c=n.length;for(r=0;r<c;r++){const h=n[r];if(h!==0){if(s=t[t.length-1],n[s]<h){e[r]=s,t.push(r);continue}for(i=0,a=t.length-1;i<a;)l=i+a>>1,n[t[l]]<h?i=l+1:a=l;h<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,a=t[i-1];i-- >0;)t[i]=a,a=e[a];return t}function Xd(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Xd(e)}function rh(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}function Yd(n){if(n.placeholder)return n.placeholder;const e=n.component;return e?Yd(e.subTree):null}const Zd=n=>n.__isSuspense;function xy(n,e){e&&e.pendingBranch?se(n)?e.effects.push(...n):e.effects.push(n):j_(n)}const Ct=Symbol.for("v-fgt"),Ho=Symbol.for("v-txt"),jn=Symbol.for("v-cmt"),Oa=Symbol.for("v-stc"),Us=[];let vt=null;function dt(n=!1){Us.push(vt=n?null:[])}function My(){Us.pop(),vt=Us[Us.length-1]||null}let Js=1;function sh(n,e=!1){Js+=n,n<0&&vt&&e&&(vt.hasOnce=!0)}function ep(n){return n.dynamicChildren=Js>0?vt||Mr:null,My(),Js>0&&vt&&vt.push(n),n}function yt(n,e,t,r,s,i){return ep(le(n,e,t,r,s,i,!0))}function Ly(n,e,t,r,s){return ep(pn(n,e,t,r,s,!0))}function tp(n){return n?n.__v_isVNode===!0:!1}function bs(n,e){return n.type===e.type&&n.key===e.key}const np=({key:n})=>n??null,Yi=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?Oe(n)||ot(n)||ae(n)?{i:bt,r:n,k:e,f:!!t}:n:null);function le(n,e=null,t=null,r=0,s=null,i=n===Ct?0:1,a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&np(e),ref:e&&Yi(e),scopeId:Vd,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return l?(Zl(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Oe(t)?8:16),Js>0&&!a&&vt&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&vt.push(c),c}const pn=Fy;function Fy(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===ly)&&(n=jn),tp(n)){const l=Wr(n,e,!0);return t&&Zl(l,t),Js>0&&!i&&vt&&(l.shapeFlag&6?vt[vt.indexOf(n)]=l:vt.push(l)),l.patchFlag=-2,l}if(Qy(n)&&(n=n.__vccOpts),e){e=Uy(e);let{class:l,style:c}=e;l&&!Oe(l)&&(e.class=Ws(l)),we(c)&&(Kl(c)&&!se(c)&&(c=at({},c)),e.style=Uo(c))}const a=Oe(n)?1:Zd(n)?128:Q_(n)?64:we(n)?4:ae(n)?2:0;return le(n,e,t,r,s,a,i,!0)}function Uy(n){return n?Kl(n)||Hd(n)?at({},n):n:null}function Wr(n,e,t=!1,r=!1){const{props:s,ref:i,patchFlag:a,children:l,transition:c}=n,h=e?By(s||{},e):s,d={__v_isVNode:!0,__v_skip:!0,type:n.type,props:h,key:h&&np(h),ref:e&&e.ref?t&&i?se(i)?i.concat(Yi(e)):[i,Yi(e)]:Yi(e):i,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:l,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Ct?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:c,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Wr(n.ssContent),ssFallback:n.ssFallback&&Wr(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return c&&r&&Ql(d,c.clone(d)),d}function rp(n=" ",e=0){return pn(Ho,null,n,e)}function xa(n="",e=!1){return e?(dt(),Ly(jn,null,n)):pn(jn,null,n)}function qt(n){return n==null||typeof n=="boolean"?pn(jn):se(n)?pn(Ct,null,n.slice()):tp(n)?ln(n):pn(Ho,null,String(n))}function ln(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Wr(n)}function Zl(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(se(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Zl(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!Hd(e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ae(e)?(e={default:e,_ctx:bt},t=32):(e=String(e),r&64?(t=16,e=[rp(e)]):t=8);n.children=e,n.shapeFlag|=t}function By(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=Ws([e.class,r.class]));else if(s==="style")e.style=Uo([e.style,r.style]);else if(xo(s)){const i=e[s],a=r[s];a&&i!==a&&!(se(i)&&i.includes(a))?e[s]=i?[].concat(i,a):a:a==null&&i==null&&!Mo(s)&&(e[s]=a)}else s!==""&&(e[s]=r[s])}return e}function Ut(n,e,t,r=null){Yt(n,e,7,[t,r])}const jy=Ud();let $y=0;function qy(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||jy,i={uid:$y++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new l_(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wd(r,s),emitsOptions:Bd(r,s),emit:null,emitted:null,propsDefaults:be,inheritAttrs:r.inheritAttrs,ctx:be,data:be,props:be,attrs:be,slots:be,refs:be,setupState:be,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=vy.bind(null,i),n.ce&&n.ce(i),i}let ft=null;const Hy=()=>ft||bt;let mo,ol;{const n=Fo(),e=(t,r)=>{let s;return(s=n[t])||(s=n[t]=[]),s.push(r),i=>{s.length>1?s.forEach(a=>a(i)):s[0](i)}};mo=e("__VUE_INSTANCE_SETTERS__",t=>ft=t),ol=e("__VUE_SSR_SETTERS__",t=>Xs=t)}const ui=n=>{const e=ft;return mo(n),n.scope.on(),()=>{n.scope.off(),mo(e)}},ih=()=>{ft&&ft.scope.off(),mo(null)};function sp(n){return n.vnode.shapeFlag&4}let Xs=!1;function zy(n,e=!1,t=!1){e&&ol(e);const{props:r,children:s}=n.vnode,i=sp(n);by(n,r,i,e),Cy(n,s,t||e);const a=i?Wy(n,e):void 0;return e&&ol(!1),a}function Wy(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,uy);const{setup:r}=t;if(r){gn();const s=n.setupContext=r.length>1?Gy(n):null,i=ui(n),a=ci(r,n,0,[n.props,s]),l=rd(a);if(mn(),i(),(l||n.sp)&&!Ls(n)&&Nd(n),l){if(a.then(ih,ih),e)return a.then(c=>{oh(n,c)}).catch(c=>{jo(c,n,0)});n.asyncDep=a}else oh(n,a)}else ip(n)}function oh(n,e,t){ae(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:we(e)&&(n.setupState=bd(e)),ip(n)}function ip(n,e,t){const r=n.type;n.render||(n.render=r.render||zt);{const s=ui(n);gn();try{hy(n)}finally{mn(),s()}}}const Ky={get(n,e){return st(n,"get",""),n[e]}};function Gy(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,Ky),slots:n.slots,emit:n.emit,expose:e}}function zo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(bd(C_(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Fs)return Fs[t](n)},has(e,t){return t in e||t in Fs}})):n.proxy}function Qy(n){return ae(n)&&"__vccOpts"in n}const Zi=(n,e)=>x_(n,e,Xs),Jy="3.5.33";/**
* @vue/runtime-dom v3.5.33
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let al;const ah=typeof window<"u"&&window.trustedTypes;if(ah)try{al=ah.createPolicy("vue",{createHTML:n=>n})}catch{}const op=al?n=>al.createHTML(n):n=>n,Xy="http://www.w3.org/2000/svg",Yy="http://www.w3.org/1998/Math/MathML",an=typeof document<"u"?document:null,lh=an&&an.createElement("template"),Zy={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e==="svg"?an.createElementNS(Xy,n):e==="mathml"?an.createElementNS(Yy,n):t?an.createElement(n,{is:t}):an.createElement(n);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>an.createTextNode(n),createComment:n=>an.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>an.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const a=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{lh.innerHTML=op(r==="svg"?`<svg>${n}</svg>`:r==="mathml"?`<math>${n}</math>`:n);const l=lh.content;if(r==="svg"||r==="mathml"){const c=l.firstChild;for(;c.firstChild;)l.appendChild(c.firstChild);l.removeChild(c)}e.insertBefore(l,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},ev=Symbol("_vtc");function tv(n,e,t){const r=n[ev];r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ch=Symbol("_vod"),nv=Symbol("_vsh"),rv=Symbol(""),sv=/(?:^|;)\s*display\s*:/;function iv(n,e,t){const r=n.style,s=Oe(t);let i=!1;if(t&&!s){if(e)if(Oe(e))for(const a of e.split(";")){const l=a.slice(0,a.indexOf(":")).trim();t[l]==null&&Ps(r,l,"")}else for(const a in e)t[a]==null&&Ps(r,a,"");for(const a in t){a==="display"&&(i=!0);const l=t[a];l!=null?av(n,a,!Oe(e)&&e?e[a]:void 0,l)||Ps(r,a,l):Ps(r,a,"")}}else if(s){if(e!==t){const a=r[rv];a&&(t+=";"+a),r.cssText=t,i=sv.test(t)}}else e&&n.removeAttribute("style");ch in n&&(n[ch]=i?r.display:"",n[nv]&&(r.display="none"))}const uh=/\s*!important$/;function Ps(n,e,t){if(se(t))t.forEach(r=>Ps(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=ov(n,e);uh.test(t)?n.setProperty(Qn(r),t.replace(uh,""),"important"):n[r]=t}}const hh=["Webkit","Moz","ms"],Ma={};function ov(n,e){const t=Ma[e];if(t)return t;let r=Dt(e);if(r!=="filter"&&r in n)return Ma[e]=r;r=od(r);for(let s=0;s<hh.length;s++){const i=hh[s]+r;if(i in n)return Ma[e]=i}return e}function av(n,e,t,r){return n.tagName==="TEXTAREA"&&(e==="width"||e==="height")&&Oe(r)&&t===r}const fh="http://www.w3.org/1999/xlink";function dh(n,e,t,r,s,i=o_(e)){r&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(fh,e.slice(6,e.length)):n.setAttributeNS(fh,e,t):t==null||i&&!ld(t)?n.removeAttribute(e):n.setAttribute(e,i?"":Xt(t)?String(t):t)}function ph(n,e,t,r,s){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?op(t):t);return}const i=n.tagName;if(e==="value"&&i!=="PROGRESS"&&!i.includes("-")){const l=i==="OPTION"?n.getAttribute("value")||"":n.value,c=t==null?n.type==="checkbox"?"on":"":String(t);(l!==c||!("_value"in n))&&(n.value=c),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=ld(t):t==null&&l==="string"?(t="",a=!0):l==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(s||e)}function kr(n,e,t,r){n.addEventListener(e,t,r)}function lv(n,e,t,r){n.removeEventListener(e,t,r)}const gh=Symbol("_vei");function cv(n,e,t,r,s=null){const i=n[gh]||(n[gh]={}),a=i[e];if(r&&a)a.value=r;else{const[l,c]=uv(e);if(r){const h=i[e]=dv(r,s);kr(n,l,h,c)}else a&&(lv(n,l,a,c),i[e]=void 0)}}const mh=/(?:Once|Passive|Capture)$/;function uv(n){let e;if(mh.test(n)){e={};let r;for(;r=n.match(mh);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Qn(n.slice(2)),e]}let La=0;const hv=Promise.resolve(),fv=()=>La||(hv.then(()=>La=0),La=Date.now());function dv(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Yt(pv(r,t.value),e,5,[r])};return t.value=n,t.attached=fv(),t}function pv(n,e){if(se(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const _h=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,gv=(n,e,t,r,s,i)=>{const a=s==="svg";e==="class"?tv(n,r,a):e==="style"?iv(n,t,r):xo(e)?Mo(e)||cv(n,e,t,r,i):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):mv(n,e,r,a))?(ph(n,e,r),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&dh(n,e,r,a,i,e!=="value")):n._isVueCE&&(_v(n,e)||n._def.__asyncLoader&&(/[A-Z]/.test(e)||!Oe(r)))?ph(n,Dt(e),r,i,e):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),dh(n,e,r,a))};function mv(n,e,t,r){if(r)return!!(e==="innerHTML"||e==="textContent"||e in n&&_h(e)&&ae(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="autocorrect"||e==="sandbox"&&n.tagName==="IFRAME"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return _h(e)&&Oe(t)?!1:e in n}function _v(n,e){const t=n._def.props;if(!t)return!1;const r=Dt(e);return Array.isArray(t)?t.some(s=>Dt(s)===r):Object.keys(t).some(s=>Dt(s)===r)}const yh=n=>{const e=n.props["onUpdate:modelValue"]||!1;return se(e)?t=>Qi(e,t):e};function yv(n){n.target.composing=!0}function vh(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Fa=Symbol("_assign");function Eh(n,e,t){return e&&(n=n.trim()),t&&(n=Fl(n)),n}const vv={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n[Fa]=yh(s);const i=r||s.props&&s.props.type==="number";kr(n,e?"change":"input",a=>{a.target.composing||n[Fa](Eh(n.value,t,i))}),(t||i)&&kr(n,"change",()=>{n.value=Eh(n.value,t,i)}),e||(kr(n,"compositionstart",yv),kr(n,"compositionend",vh),kr(n,"change",vh))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,oldValue:t,modifiers:{lazy:r,trim:s,number:i}},a){if(n[Fa]=yh(a),n.composing)return;const l=(i||n.type==="number")&&!/^0\d/.test(n.value)?Fl(n.value):n.value,c=e??"";if(l===c)return;const h=n.getRootNode();(h instanceof Document||h instanceof ShadowRoot)&&h.activeElement===n&&n.type!=="range"&&(r&&e===t||s&&n.value.trim()===c)||(n.value=c)}},Ev={esc:"escape",space:" ",up:"arrow-up",left:"arrow-left",right:"arrow-right",down:"arrow-down",delete:"backspace"},Tv=(n,e)=>{const t=n._withKeys||(n._withKeys={}),r=e.join(".");return t[r]||(t[r]=(s=>{if(!("key"in s))return;const i=Qn(s.key);if(e.some(a=>a===i||Ev[a]===i))return n(s)}))},Iv=at({patchProp:gv},Zy);let Th;function wv(){return Th||(Th=ky(Iv))}const Av=((...n)=>{const e=wv().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=Sv(r);if(!s)return;const i=e._component;!ae(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const a=t(s,!1,bv(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),a},e});function bv(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Sv(n){return Oe(n)?document.querySelector(n):n}const Rv=()=>{};var Ih={};/**
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
 */const ap=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Pv=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],a=n[t++],l=n[t++],c=((s&7)<<18|(i&63)<<12|(a&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],a=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|a&63)}}return e.join("")},lp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],a=s+1<n.length,l=a?n[s+1]:0,c=s+2<n.length,h=c?n[s+2]:0,d=i>>2,g=(i&3)<<4|l>>4;let _=(l&15)<<2|h>>6,S=h&63;c||(S=64,a||(_=64)),r.push(t[d],t[g],t[_],t[S])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(ap(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Pv(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],l=s<n.length?t[n.charAt(s)]:0;++s;const h=s<n.length?t[n.charAt(s)]:64;++s;const g=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||l==null||h==null||g==null)throw new Cv;const _=i<<2|l>>4;if(r.push(_),h!==64){const S=l<<4&240|h>>2;if(r.push(S),g!==64){const V=h<<6&192|g;r.push(V)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Cv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Vv=function(n){const e=ap(n);return lp.encodeByteArray(e,!0)},_o=function(n){return Vv(n).replace(/\./g,"")},cp=function(n){try{return lp.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function kv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dv=()=>kv().__FIREBASE_DEFAULTS__,Nv=()=>{if(typeof process>"u"||typeof Ih>"u")return;const n=Ih.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ov=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&cp(n[1]);return e&&JSON.parse(e)},Wo=()=>{try{return Rv()||Dv()||Nv()||Ov()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},up=n=>{var e,t;return(t=(e=Wo())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},xv=n=>{const e=up(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},hp=()=>{var n;return(n=Wo())===null||n===void 0?void 0:n.config},fp=n=>{var e;return(e=Wo())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class Mv{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function ts(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function dp(n){return(await fetch(n,{credentials:"include"})).ok}/**
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
 */function Lv(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const a=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n);return[_o(JSON.stringify(t)),_o(JSON.stringify(a)),""].join(".")}const Bs={};function Fv(){const n={prod:[],emulator:[]};for(const e of Object.keys(Bs))Bs[e]?n.emulator.push(e):n.prod.push(e);return n}function Uv(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let wh=!1;function pp(n,e){if(typeof window>"u"||typeof document>"u"||!ts(window.location.host)||Bs[n]===e||Bs[n]||wh)return;Bs[n]=e;function t(_){return`__firebase__banner__${_}`}const r="__firebase__banner",i=Fv().prod.length>0;function a(){const _=document.getElementById(r);_&&_.remove()}function l(_){_.style.display="flex",_.style.background="#7faaf0",_.style.position="fixed",_.style.bottom="5px",_.style.left="5px",_.style.padding=".5em",_.style.borderRadius="5px",_.style.alignItems="center"}function c(_,S){_.setAttribute("width","24"),_.setAttribute("id",S),_.setAttribute("height","24"),_.setAttribute("viewBox","0 0 24 24"),_.setAttribute("fill","none"),_.style.marginLeft="-6px"}function h(){const _=document.createElement("span");return _.style.cursor="pointer",_.style.marginLeft="16px",_.style.fontSize="24px",_.innerHTML=" &times;",_.onclick=()=>{wh=!0,a()},_}function d(_,S){_.setAttribute("id",S),_.innerText="Learn more",_.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",_.setAttribute("target","__blank"),_.style.paddingLeft="5px",_.style.textDecoration="underline"}function g(){const _=Uv(r),S=t("text"),V=document.getElementById(S)||document.createElement("span"),D=t("learnmore"),O=document.getElementById(D)||document.createElement("a"),Q=t("preprendIcon"),$=document.getElementById(Q)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(_.created){const G=_.element;l(G),d(O,D);const z=h();c($,Q),G.append($,V,O,z),document.body.appendChild(G)}i?(V.innerText="Preview backend disconnected.",$.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
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
</defs>`,V.innerText="Preview backend running in this workspace."),V.setAttribute("id",S)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",g):g()}/**
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
 */function lt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Bv(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(lt())}function jv(){var n;const e=(n=Wo())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function $v(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function qv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Hv(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function zv(){const n=lt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Wv(){return!jv()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Kv(){try{return typeof indexedDB=="object"}catch{return!1}}function Gv(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const Qv="FirebaseError";class wn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Qv,Object.setPrototypeOf(this,wn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,hi.prototype.create)}}class hi{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],a=i?Jv(i,r):"Error",l=`${this.serviceName}: ${a} (${s}).`;return new wn(s,l,r)}}function Jv(n,e){return n.replace(Xv,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const Xv=/\{\$([^}]+)}/g;function Yv(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function mr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],a=e[s];if(Ah(i)&&Ah(a)){if(!mr(i,a))return!1}else if(i!==a)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function Ah(n){return n!==null&&typeof n=="object"}/**
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
 */function fi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zv(n,e){const t=new eE(n,e);return t.subscribe.bind(t)}class eE{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");tE(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ua),s.error===void 0&&(s.error=Ua),s.complete===void 0&&(s.complete=Ua);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function tE(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ua(){}/**
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
 */function ze(n){return n&&n._delegate?n._delegate:n}class _r{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const lr="[DEFAULT]";/**
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
 */class nE{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Mv;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(sE(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,a]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(i);r===l&&a.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const a=this.instances.get(s);return a&&e(a,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:rE(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function rE(n){return n===lr?void 0:n}function sE(n){return n.instantiationMode==="EAGER"}/**
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
 */class iE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new nE(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var he;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(he||(he={}));const oE={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},aE=he.INFO,lE={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},cE=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=lE[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class ec{constructor(e){this.name=e,this._logLevel=aE,this._logHandler=cE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?oE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const uE=(n,e)=>e.some(t=>n instanceof t);let bh,Sh;function hE(){return bh||(bh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function fE(){return Sh||(Sh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const gp=new WeakMap,ll=new WeakMap,mp=new WeakMap,Ba=new WeakMap,tc=new WeakMap;function dE(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",a)},i=()=>{t(xn(n.result)),s()},a=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",a)});return e.then(t=>{t instanceof IDBCursor&&gp.set(t,n)}).catch(()=>{}),tc.set(e,n),e}function pE(n){if(ll.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",a),n.removeEventListener("abort",a)},i=()=>{t(),s()},a=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",a),n.addEventListener("abort",a)});ll.set(n,e)}let cl={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return ll.get(n);if(e==="objectStoreNames")return n.objectStoreNames||mp.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return xn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function gE(n){cl=n(cl)}function mE(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(ja(this),e,...t);return mp.set(r,e.sort?e.sort():[e]),xn(r)}:fE().includes(n)?function(...e){return n.apply(ja(this),e),xn(gp.get(this))}:function(...e){return xn(n.apply(ja(this),e))}}function _E(n){return typeof n=="function"?mE(n):(n instanceof IDBTransaction&&pE(n),uE(n,hE())?new Proxy(n,cl):n)}function xn(n){if(n instanceof IDBRequest)return dE(n);if(Ba.has(n))return Ba.get(n);const e=_E(n);return e!==n&&(Ba.set(n,e),tc.set(e,n)),e}const ja=n=>tc.get(n);function yE(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const a=indexedDB.open(n,e),l=xn(a);return r&&a.addEventListener("upgradeneeded",c=>{r(xn(a.result),c.oldVersion,c.newVersion,xn(a.transaction),c)}),t&&a.addEventListener("blocked",c=>t(c.oldVersion,c.newVersion,c)),l.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",h=>s(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const vE=["get","getKey","getAll","getAllKeys","count"],EE=["put","add","delete","clear"],$a=new Map;function Rh(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if($a.get(e))return $a.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=EE.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||vE.includes(t)))return;const i=async function(a,...l){const c=this.transaction(a,s?"readwrite":"readonly");let h=c.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[t](...l),s&&c.done]))[0]};return $a.set(e,i),i}gE(n=>({...n,get:(e,t,r)=>Rh(e,t)||n.get(e,t,r),has:(e,t)=>!!Rh(e,t)||n.has(e,t)}));/**
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
 */class TE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(IE(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function IE(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ul="@firebase/app",Ph="0.13.2";/**
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
 */const yn=new ec("@firebase/app"),wE="@firebase/app-compat",AE="@firebase/analytics-compat",bE="@firebase/analytics",SE="@firebase/app-check-compat",RE="@firebase/app-check",PE="@firebase/auth",CE="@firebase/auth-compat",VE="@firebase/database",kE="@firebase/data-connect",DE="@firebase/database-compat",NE="@firebase/functions",OE="@firebase/functions-compat",xE="@firebase/installations",ME="@firebase/installations-compat",LE="@firebase/messaging",FE="@firebase/messaging-compat",UE="@firebase/performance",BE="@firebase/performance-compat",jE="@firebase/remote-config",$E="@firebase/remote-config-compat",qE="@firebase/storage",HE="@firebase/storage-compat",zE="@firebase/firestore",WE="@firebase/ai",KE="@firebase/firestore-compat",GE="firebase",QE="11.10.0";/**
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
 */const hl="[DEFAULT]",JE={[ul]:"fire-core",[wE]:"fire-core-compat",[bE]:"fire-analytics",[AE]:"fire-analytics-compat",[RE]:"fire-app-check",[SE]:"fire-app-check-compat",[PE]:"fire-auth",[CE]:"fire-auth-compat",[VE]:"fire-rtdb",[kE]:"fire-data-connect",[DE]:"fire-rtdb-compat",[NE]:"fire-fn",[OE]:"fire-fn-compat",[xE]:"fire-iid",[ME]:"fire-iid-compat",[LE]:"fire-fcm",[FE]:"fire-fcm-compat",[UE]:"fire-perf",[BE]:"fire-perf-compat",[jE]:"fire-rc",[$E]:"fire-rc-compat",[qE]:"fire-gcs",[HE]:"fire-gcs-compat",[zE]:"fire-fst",[KE]:"fire-fst-compat",[WE]:"fire-vertex","fire-js":"fire-js",[GE]:"fire-js-all"};/**
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
 */const yo=new Map,XE=new Map,fl=new Map;function Ch(n,e){try{n.container.addComponent(e)}catch(t){yn.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Kr(n){const e=n.name;if(fl.has(e))return yn.debug(`There were multiple attempts to register component ${e}.`),!1;fl.set(e,n);for(const t of yo.values())Ch(t,n);for(const t of XE.values())Ch(t,n);return!0}function nc(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function Vt(n){return n==null?!1:n.settings!==void 0}/**
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
 */const YE={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Mn=new hi("app","Firebase",YE);/**
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
 */class ZE{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new _r("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Mn.create("app-deleted",{appName:this._name})}}/**
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
 */const ns=QE;function _p(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:hl,automaticDataCollectionEnabled:!0},e),s=r.name;if(typeof s!="string"||!s)throw Mn.create("bad-app-name",{appName:String(s)});if(t||(t=hp()),!t)throw Mn.create("no-options");const i=yo.get(s);if(i){if(mr(t,i.options)&&mr(r,i.config))return i;throw Mn.create("duplicate-app",{appName:s})}const a=new iE(s);for(const c of fl.values())a.addComponent(c);const l=new ZE(t,r,a);return yo.set(s,l),l}function yp(n=hl){const e=yo.get(n);if(!e&&n===hl&&hp())return _p();if(!e)throw Mn.create("no-app",{appName:n});return e}function Ln(n,e,t){var r;let s=(r=JE[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const l=[`Unable to register library "${s}" with version "${e}":`];i&&l.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&a&&l.push("and"),a&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),yn.warn(l.join(" "));return}Kr(new _r(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const eT="firebase-heartbeat-database",tT=1,Ys="firebase-heartbeat-store";let qa=null;function vp(){return qa||(qa=yE(eT,tT,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Ys)}catch(t){console.warn(t)}}}}).catch(n=>{throw Mn.create("idb-open",{originalErrorMessage:n.message})})),qa}async function nT(n){try{const t=(await vp()).transaction(Ys),r=await t.objectStore(Ys).get(Ep(n));return await t.done,r}catch(e){if(e instanceof wn)yn.warn(e.message);else{const t=Mn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});yn.warn(t.message)}}}async function Vh(n,e){try{const r=(await vp()).transaction(Ys,"readwrite");await r.objectStore(Ys).put(e,Ep(n)),await r.done}catch(t){if(t instanceof wn)yn.warn(t.message);else{const r=Mn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});yn.warn(r.message)}}}function Ep(n){return`${n.name}!${n.options.appId}`}/**
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
 */const rT=1024,sT=30;class iT{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new aT(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=kh();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(a=>a.date===i))return;if(this._heartbeatsCache.heartbeats.push({date:i,agent:s}),this._heartbeatsCache.heartbeats.length>sT){const a=lT(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(a,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){yn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=kh(),{heartbeatsToSend:r,unsentEntries:s}=oT(this._heartbeatsCache.heartbeats),i=_o(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(t){return yn.warn(t),""}}}function kh(){return new Date().toISOString().substring(0,10)}function oT(n,e=rT){const t=[];let r=n.slice();for(const s of n){const i=t.find(a=>a.agent===s.agent);if(i){if(i.dates.push(s.date),Dh(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Dh(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class aT{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kv()?Gv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await nT(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Vh(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Dh(n){return _o(JSON.stringify({version:2,heartbeats:n})).length}function lT(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
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
 */function cT(n){Kr(new _r("platform-logger",e=>new TE(e),"PRIVATE")),Kr(new _r("heartbeat",e=>new iT(e),"PRIVATE")),Ln(ul,Ph,n),Ln(ul,Ph,"esm2017"),Ln("fire-js","")}cT("");function rc(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}function Tp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const uT=Tp,Ip=new hi("auth","Firebase",Tp());/**
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
 */const vo=new ec("@firebase/auth");function hT(n,...e){vo.logLevel<=he.WARN&&vo.warn(`Auth (${ns}): ${n}`,...e)}function eo(n,...e){vo.logLevel<=he.ERROR&&vo.error(`Auth (${ns}): ${n}`,...e)}/**
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
 */function Zt(n,...e){throw ic(n,...e)}function Ot(n,...e){return ic(n,...e)}function sc(n,e,t){const r=Object.assign(Object.assign({},uT()),{[e]:t});return new hi("auth","Firebase",r).create(e,{appName:n.name})}function dr(n){return sc(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function fT(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&Zt(n,"argument-error"),sc(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function ic(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Ip.create(n,...e)}function ne(n,e,...t){if(!n)throw ic(e,...t)}function fn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw eo(e),new Error(e)}function vn(n,e){n||fn(e)}/**
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
 */function dl(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function dT(){return Nh()==="http:"||Nh()==="https:"}function Nh(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function pT(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(dT()||qv()||"connection"in navigator)?navigator.onLine:!0}function gT(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class di{constructor(e,t){this.shortDelay=e,this.longDelay=t,vn(t>e,"Short delay should be less than long delay!"),this.isMobile=Bv()||Hv()}get(){return pT()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function oc(n,e){vn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class wp{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;fn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;fn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;fn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const mT={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const _T=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],yT=new di(3e4,6e4);function ac(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function rs(n,e,t,r,s={}){return Ap(n,s,async()=>{let i={},a={};r&&(e==="GET"?a=r:i={body:JSON.stringify(r)});const l=fi(Object.assign({key:n.config.apiKey},a)).slice(1),c=await n._getAdditionalHeaders();c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode);const h=Object.assign({method:e,headers:c},i);return $v()||(h.referrerPolicy="no-referrer"),n.emulatorConfig&&ts(n.emulatorConfig.host)&&(h.credentials="include"),wp.fetch()(await bp(n,n.config.apiHost,t,l),h)})}async function Ap(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},mT),e);try{const s=new ET(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const a=await i.json();if("needConfirmation"in a)throw $i(n,"account-exists-with-different-credential",a);if(i.ok&&!("errorMessage"in a))return a;{const l=i.ok?a.errorMessage:a.error.message,[c,h]=l.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw $i(n,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw $i(n,"email-already-in-use",a);if(c==="USER_DISABLED")throw $i(n,"user-disabled",a);const d=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw sc(n,d,h);Zt(n,d)}}catch(s){if(s instanceof wn)throw s;Zt(n,"network-request-failed",{message:String(s)})}}async function vT(n,e,t,r,s={}){const i=await rs(n,e,t,r,s);return"mfaPendingCredential"in i&&Zt(n,"multi-factor-auth-required",{_serverResponse:i}),i}async function bp(n,e,t,r){const s=`${e}${t}?${r}`,i=n,a=i.config.emulator?oc(n.config,s):`${n.config.apiScheme}://${s}`;return _T.includes(t)&&(await i._persistenceManagerAvailable,i._getPersistenceType()==="COOKIE")?i._getPersistence()._getFinalTarget(a).toString():a}class ET{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Ot(this.auth,"network-request-failed")),yT.get())})}}function $i(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=Ot(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function TT(n,e){return rs(n,"POST","/v1/accounts:delete",e)}async function Eo(n,e){return rs(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function js(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function IT(n,e=!1){const t=ze(n),r=await t.getIdToken(e),s=lc(r);ne(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,a=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:js(Ha(s.auth_time)),issuedAtTime:js(Ha(s.iat)),expirationTime:js(Ha(s.exp)),signInProvider:a||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function Ha(n){return Number(n)*1e3}function lc(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return eo("JWT malformed, contained fewer than 3 sections"),null;try{const s=cp(t);return s?JSON.parse(s):(eo("Failed to decode base64 JWT payload"),null)}catch(s){return eo("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Oh(n){const e=lc(n);return ne(e,"internal-error"),ne(typeof e.exp<"u","internal-error"),ne(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Zs(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof wn&&wT(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wT({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class AT{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class pl{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=js(this.lastLoginAt),this.creationTime=js(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function To(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Zs(n,Eo(t,{idToken:r}));ne(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const a=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Sp(i.providerUserInfo):[],l=ST(n.providerData,a),c=n.isAnonymous,h=!(n.email&&i.passwordHash)&&!(l!=null&&l.length),d=c?h:!1,g={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:l,metadata:new pl(i.createdAt,i.lastLoginAt),isAnonymous:d};Object.assign(n,g)}async function bT(n){const e=ze(n);await To(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ST(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Sp(n){return n.map(e=>{var{providerId:t}=e,r=rc(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function RT(n,e){const t=await Ap(n,{},async()=>{const r=fi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,a=await bp(n,s,"/v1/token",`key=${i}`),l=await n._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const c={method:"POST",headers:l,body:r};return n.emulatorConfig&&ts(n.emulatorConfig.host)&&(c.credentials="include"),wp.fetch()(a,c)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function PT(n,e){return rs(n,"POST","/v2/accounts:revokeToken",ac(n,e))}/**
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
 */class Br{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ne(e.idToken,"internal-error"),ne(typeof e.idToken<"u","internal-error"),ne(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Oh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ne(e.length!==0,"internal-error");const t=Oh(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ne(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await RT(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,a=new Br;return r&&(ne(typeof r=="string","internal-error",{appName:e}),a.refreshToken=r),s&&(ne(typeof s=="string","internal-error",{appName:e}),a.accessToken=s),i&&(ne(typeof i=="number","internal-error",{appName:e}),a.expirationTime=i),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Br,this.toJSON())}_performRefresh(){return fn("not implemented")}}/**
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
 */function Cn(n,e){ne(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class kt{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=rc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new AT(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new pl(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Zs(this,this.stsTokenManager.getToken(this.auth,e));return ne(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return IT(this,e)}reload(){return bT(this)}_assign(e){this!==e&&(ne(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new kt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){ne(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await To(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Vt(this.auth.app))return Promise.reject(dr(this.auth));const e=await this.getIdToken();return await Zs(this,TT(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,a,l,c,h,d;const g=(r=t.displayName)!==null&&r!==void 0?r:void 0,_=(s=t.email)!==null&&s!==void 0?s:void 0,S=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,V=(a=t.photoURL)!==null&&a!==void 0?a:void 0,D=(l=t.tenantId)!==null&&l!==void 0?l:void 0,O=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,Q=(h=t.createdAt)!==null&&h!==void 0?h:void 0,$=(d=t.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:G,emailVerified:z,isAnonymous:ue,providerData:ge,stsTokenManager:w}=t;ne(G&&w,e,"internal-error");const y=Br.fromJSON(this.name,w);ne(typeof G=="string",e,"internal-error"),Cn(g,e.name),Cn(_,e.name),ne(typeof z=="boolean",e,"internal-error"),ne(typeof ue=="boolean",e,"internal-error"),Cn(S,e.name),Cn(V,e.name),Cn(D,e.name),Cn(O,e.name),Cn(Q,e.name),Cn($,e.name);const E=new kt({uid:G,auth:e,email:_,emailVerified:z,displayName:g,isAnonymous:ue,photoURL:V,phoneNumber:S,tenantId:D,stsTokenManager:y,createdAt:Q,lastLoginAt:$});return ge&&Array.isArray(ge)&&(E.providerData=ge.map(I=>Object.assign({},I))),O&&(E._redirectEventId=O),E}static async _fromIdTokenResponse(e,t,r=!1){const s=new Br;s.updateFromServerResponse(t);const i=new kt({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await To(i),i}static async _fromGetAccountInfoResponse(e,t,r){const s=t.users[0];ne(s.localId!==void 0,"internal-error");const i=s.providerUserInfo!==void 0?Sp(s.providerUserInfo):[],a=!(s.email&&s.passwordHash)&&!(i!=null&&i.length),l=new Br;l.updateFromIdToken(r);const c=new kt({uid:s.localId,auth:e,stsTokenManager:l,isAnonymous:a}),h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:i,metadata:new pl(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(i!=null&&i.length)};return Object.assign(c,h),c}}/**
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
 */const xh=new Map;function dn(n){vn(n instanceof Function,"Expected a class definition");let e=xh.get(n);return e?(vn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,xh.set(n,e),e)}/**
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
 */class Rp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Rp.type="NONE";const Mh=Rp;/**
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
 */function to(n,e,t){return`firebase:${n}:${e}:${t}`}class jr{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=to(this.userKey,s.apiKey,i),this.fullPersistenceKey=to("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Eo(this.auth,{idToken:e}).catch(()=>{});return t?kt._fromGetAccountInfoResponse(this.auth,t,e):null}return kt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new jr(dn(Mh),e,r);const s=(await Promise.all(t.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=s[0]||dn(Mh);const a=to(r,e.config.apiKey,e.name);let l=null;for(const h of t)try{const d=await h._get(a);if(d){let g;if(typeof d=="string"){const _=await Eo(e,{idToken:d}).catch(()=>{});if(!_)break;g=await kt._fromGetAccountInfoResponse(e,_,d)}else g=kt._fromJSON(e,d);h!==i&&(l=g),i=h;break}}catch{}const c=s.filter(h=>h._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new jr(i,e,r):(i=c[0],l&&await i._set(a,l.toJSON()),await Promise.all(t.map(async h=>{if(h!==i)try{await h._remove(a)}catch{}})),new jr(i,e,r))}}/**
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
 */function Lh(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(kp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Pp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Np(e))return"Blackberry";if(Op(e))return"Webos";if(Cp(e))return"Safari";if((e.includes("chrome/")||Vp(e))&&!e.includes("edge/"))return"Chrome";if(Dp(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Pp(n=lt()){return/firefox\//i.test(n)}function Cp(n=lt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Vp(n=lt()){return/crios\//i.test(n)}function kp(n=lt()){return/iemobile/i.test(n)}function Dp(n=lt()){return/android/i.test(n)}function Np(n=lt()){return/blackberry/i.test(n)}function Op(n=lt()){return/webos/i.test(n)}function cc(n=lt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function CT(n=lt()){var e;return cc(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function VT(){return zv()&&document.documentMode===10}function xp(n=lt()){return cc(n)||Dp(n)||Op(n)||Np(n)||/windows phone/i.test(n)||kp(n)}/**
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
 */function Mp(n,e=[]){let t;switch(n){case"Browser":t=Lh(lt());break;case"Worker":t=`${Lh(lt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${ns}/${r}`}/**
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
 */class kT{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((a,l)=>{try{const c=e(i);a(c)}catch(c){l(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function DT(n,e={}){return rs(n,"GET","/v2/passwordPolicy",ac(n,e))}/**
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
 */const NT=6;class OT{constructor(e){var t,r,s,i;const a=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=a.minPasswordLength)!==null&&t!==void 0?t:NT,a.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=a.maxPasswordLength),a.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=a.containsLowercaseCharacter),a.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=a.containsUppercaseCharacter),a.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=a.containsNumericCharacter),a.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=a.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(i=e.forceUpgradeOnSignin)!==null&&i!==void 0?i:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,r,s,i,a,l;const c={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,c),this.validatePasswordCharacterOptions(e,c),c.isValid&&(c.isValid=(t=c.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),c.isValid&&(c.isValid=(r=c.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),c.isValid&&(c.isValid=(s=c.containsLowercaseLetter)!==null&&s!==void 0?s:!0),c.isValid&&(c.isValid=(i=c.containsUppercaseLetter)!==null&&i!==void 0?i:!0),c.isValid&&(c.isValid=(a=c.containsNumericCharacter)!==null&&a!==void 0?a:!0),c.isValid&&(c.isValid=(l=c.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),c}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let s=0;s<e.length;s++)r=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,s,i){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=i))}}/**
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
 */class xT{constructor(e,t,r,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Fh(this),this.idTokenSubscription=new Fh(this),this.beforeStateQueue=new kT(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ip,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(i=>this._resolvePersistenceManagerAvailable=i)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=dn(t)),this._initializationPromise=this.queue(async()=>{var r,s,i;if(!this._deleted&&(this.persistenceManager=await jr.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Eo(this,{idToken:e}),r=await kt._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(Vt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,l=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!a||a===l)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(a){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return ne(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await To(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=gT()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Vt(this.app))return Promise.reject(dr(this));const t=e?ze(e):null;return t&&ne(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ne(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Vt(this.app)?Promise.reject(dr(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Vt(this.app)?Promise.reject(dr(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await DT(this),t=new OT(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new hi("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await PT(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&dn(e)||this._popupRedirectResolver;ne(t,this,"argument-error"),this.redirectPersistenceManager=await jr.create(this,[dn(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t);let a=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(ne(l,this,"internal-error"),l.then(()=>{a||i(this.currentUser)}),typeof t=="function"){const c=e.addObserver(t,r,s);return()=>{a=!0,c()}}else{const c=e.addObserver(t);return()=>{a=!0,c()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ne(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Mp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(t["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(Vt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&hT(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ko(n){return ze(n)}class Fh{constructor(e){this.auth=e,this.observer=null,this.addObserver=Zv(t=>this.observer=t)}get next(){return ne(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let uc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function MT(n){uc=n}function LT(n){return uc.loadJS(n)}function FT(){return uc.gapiScript}function UT(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */function BT(n,e){const t=nc(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(mr(i,e??{}))return s;Zt(s,"already-initialized")}return t.initialize({options:e})}function jT(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(dn);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $T(n,e,t){const r=Ko(n);ne(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!1,i=Lp(e),{host:a,port:l}=qT(e),c=l===null?"":`:${l}`,h={url:`${i}//${a}${c}/`},d=Object.freeze({host:a,port:l,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!r._canInitEmulator){ne(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ne(mr(h,r.config.emulator)&&mr(d,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=d,r.settings.appVerificationDisabledForTesting=!0,ts(a)?(dp(`${i}//${a}${c}`),pp("Auth",!0)):HT()}function Lp(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function qT(n){const e=Lp(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Uh(r.substr(i.length+1))}}else{const[i,a]=r.split(":");return{host:i,port:Uh(a)}}}function Uh(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function HT(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class Fp{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return fn("not implemented")}_getIdTokenResponse(e){return fn("not implemented")}_linkToIdToken(e,t){return fn("not implemented")}_getReauthenticationResolver(e){return fn("not implemented")}}/**
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
 */async function $r(n,e){return vT(n,"POST","/v1/accounts:signInWithIdp",ac(n,e))}/**
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
 */const zT="http://localhost";class yr extends Fp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new yr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Zt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=rc(t,["providerId","signInMethod"]);if(!r||!s)return null;const a=new yr(r,s);return a.idToken=i.idToken||void 0,a.accessToken=i.accessToken||void 0,a.secret=i.secret,a.nonce=i.nonce,a.pendingToken=i.pendingToken||null,a}_getIdTokenResponse(e){const t=this.buildRequest();return $r(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,$r(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,$r(e,t)}buildRequest(){const e={requestUri:zT,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=fi(t)}return e}}/**
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
 */class hc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class pi extends hc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class kn extends pi{constructor(){super("facebook.com")}static credential(e){return yr._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return kn.credential(e.oauthAccessToken)}catch{return null}}}kn.FACEBOOK_SIGN_IN_METHOD="facebook.com";kn.PROVIDER_ID="facebook.com";/**
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
 */class hn extends pi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return yr._fromParams({providerId:hn.PROVIDER_ID,signInMethod:hn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return hn.credentialFromTaggedObject(e)}static credentialFromError(e){return hn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return hn.credential(t,r)}catch{return null}}}hn.GOOGLE_SIGN_IN_METHOD="google.com";hn.PROVIDER_ID="google.com";/**
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
 */class Dn extends pi{constructor(){super("github.com")}static credential(e){return yr._fromParams({providerId:Dn.PROVIDER_ID,signInMethod:Dn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Dn.credentialFromTaggedObject(e)}static credentialFromError(e){return Dn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Dn.credential(e.oauthAccessToken)}catch{return null}}}Dn.GITHUB_SIGN_IN_METHOD="github.com";Dn.PROVIDER_ID="github.com";/**
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
 */class Nn extends pi{constructor(){super("twitter.com")}static credential(e,t){return yr._fromParams({providerId:Nn.PROVIDER_ID,signInMethod:Nn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Nn.credentialFromTaggedObject(e)}static credentialFromError(e){return Nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Nn.credential(t,r)}catch{return null}}}Nn.TWITTER_SIGN_IN_METHOD="twitter.com";Nn.PROVIDER_ID="twitter.com";/**
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
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await kt._fromIdTokenResponse(e,r,s),a=Bh(r);return new Gr({user:i,providerId:a,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Bh(r);return new Gr({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Bh(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */class Io extends wn{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,Io.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new Io(e,t,r,s)}}function Up(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?Io._fromErrorAndOperation(n,i,e,r):i})}async function WT(n,e,t=!1){const r=await Zs(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Gr._forOperation(n,"link",r)}/**
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
 */async function KT(n,e,t=!1){const{auth:r}=n;if(Vt(r.app))return Promise.reject(dr(r));const s="reauthenticate";try{const i=await Zs(n,Up(r,s,e,n),t);ne(i.idToken,r,"internal-error");const a=lc(i.idToken);ne(a,r,"internal-error");const{sub:l}=a;return ne(n.uid===l,r,"user-mismatch"),Gr._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&Zt(r,"user-mismatch"),i}}/**
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
 */async function GT(n,e,t=!1){if(Vt(n.app))return Promise.reject(dr(n));const r="signIn",s=await Up(n,r,e),i=await Gr._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}function QT(n,e,t,r){return ze(n).onIdTokenChanged(e,t,r)}function JT(n,e,t){return ze(n).beforeAuthStateChanged(e,t)}function XT(n,e,t,r){return ze(n).onAuthStateChanged(e,t,r)}function YT(n){return ze(n).signOut()}const wo="__sak";/**
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
 */class Bp{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(wo,"1"),this.storage.removeItem(wo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const ZT=1e3,eI=10;class jp extends Bp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=xp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((a,l,c)=>{this.notifyListeners(a,c)});return}const r=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const a=this.storage.getItem(r);!t&&this.localCache[r]===a||this.notifyListeners(r,a)},i=this.storage.getItem(r);VT()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,eI):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},ZT)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}jp.type="LOCAL";const tI=jp;/**
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
 */class $p extends Bp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$p.type="SESSION";const qp=$p;/**
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
 */function nI(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class Go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new Go(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,a=this.handlersMap[s];if(!(a!=null&&a.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const l=Array.from(a).map(async h=>h(t.origin,i)),c=await nI(l);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
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
 */function fc(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class rI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,a;return new Promise((l,c)=>{const h=fc("",20);s.port1.start();const d=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:s,onMessage(g){const _=g;if(_.data.eventId===h)switch(_.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),l(_.data.response);break;default:clearTimeout(d),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(a),s.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:e,eventId:h,data:t},[s.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
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
 */function Wt(){return window}function sI(n){Wt().location.href=n}/**
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
 */function Hp(){return typeof Wt().WorkerGlobalScope<"u"&&typeof Wt().importScripts=="function"}async function iI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function oI(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function aI(){return Hp()?self:null}/**
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
 */const zp="firebaseLocalStorageDb",lI=1,Ao="firebaseLocalStorage",Wp="fbase_key";class gi{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qo(n,e){return n.transaction([Ao],e?"readwrite":"readonly").objectStore(Ao)}function cI(){const n=indexedDB.deleteDatabase(zp);return new gi(n).toPromise()}function gl(){const n=indexedDB.open(zp,lI);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ao,{keyPath:Wp})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ao)?e(r):(r.close(),await cI(),e(await gl()))})})}async function jh(n,e,t){const r=Qo(n,!0).put({[Wp]:e,value:t});return new gi(r).toPromise()}async function uI(n,e){const t=Qo(n,!1).get(e),r=await new gi(t).toPromise();return r===void 0?null:r.value}function $h(n,e){const t=Qo(n,!0).delete(e);return new gi(t).toPromise()}const hI=800,fI=3;class Kp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await gl(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>fI)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Hp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(aI()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await iI(),!this.activeServiceWorker)return;this.sender=new rI(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||oI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await gl();return await jh(e,wo,"1"),await $h(e,wo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>jh(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>uI(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>$h(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Qo(s,!1).getAll();return new gi(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),hI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Kp.type="LOCAL";const dI=Kp;new di(3e4,6e4);/**
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
 */function Gp(n,e){return e?dn(e):(ne(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class dc extends Fp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return $r(e,this._buildIdpRequest())}_linkToIdToken(e,t){return $r(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return $r(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function pI(n){return GT(n.auth,new dc(n),n.bypassAuthState)}function gI(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),KT(t,new dc(n),n.bypassAuthState)}async function mI(n){const{auth:e,user:t}=n;return ne(t,e,"internal-error"),WT(t,new dc(n),n.bypassAuthState)}/**
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
 */class Qp{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:a,type:l}=e;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(c))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return pI;case"linkViaPopup":case"linkViaRedirect":return mI;case"reauthViaPopup":case"reauthViaRedirect":return gI;default:Zt(this.auth,"internal-error")}}resolve(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){vn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const _I=new di(2e3,1e4);async function yI(n,e,t){if(Vt(n.app))return Promise.reject(Ot(n,"operation-not-supported-in-this-environment"));const r=Ko(n);fT(n,e,hc);const s=Gp(r,t);return new cr(r,"signInViaPopup",e,s).executeNotNull()}class cr extends Qp{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,cr.currentPopupAction&&cr.currentPopupAction.cancel(),cr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ne(e,this.auth,"internal-error"),e}async onExecution(){vn(this.filter.length===1,"Popup operations only handle one event");const e=fc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,_I.get())};e()}}cr.currentPopupAction=null;/**
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
 */const vI="pendingRedirect",no=new Map;class EI extends Qp{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=no.get(this.auth._key());if(!e){try{const r=await TI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}no.set(this.auth._key(),e)}return this.bypassAuthState||no.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TI(n,e){const t=AI(e),r=wI(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}function II(n,e){no.set(n._key(),e)}function wI(n){return dn(n._redirectPersistence)}function AI(n){return to(vI,n.config.apiKey,n.name)}async function bI(n,e,t=!1){if(Vt(n.app))return Promise.reject(dr(n));const r=Ko(n),s=Gp(r,e),a=await new EI(r,s,t).execute();return a&&!t&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,e)),a}/**
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
 */const SI=600*1e3;class RI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!PI(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!Jp(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(Ot(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=SI&&this.cachedEventUids.clear(),this.cachedEventUids.has(qh(e))}saveEventToCache(e){this.cachedEventUids.add(qh(e)),this.lastProcessedEventTime=Date.now()}}function qh(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Jp({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function PI(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Jp(n);default:return!1}}/**
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
 */async function CI(n,e={}){return rs(n,"GET","/v1/projects",e)}/**
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
 */const VI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,kI=/^https?/;async function DI(n){if(n.config.emulator)return;const{authorizedDomains:e}=await CI(n);for(const t of e)try{if(NI(t))return}catch{}Zt(n,"unauthorized-domain")}function NI(n){const e=dl(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const a=new URL(n);return a.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&a.hostname===r}if(!kI.test(t))return!1;if(VI.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const OI=new di(3e4,6e4);function Hh(){const n=Wt().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function xI(n){return new Promise((e,t)=>{var r,s,i;function a(){Hh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Hh(),t(Ot(n,"network-request-failed"))},timeout:OI.get()})}if(!((s=(r=Wt().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Wt().gapi)===null||i===void 0)&&i.load)a();else{const l=UT("iframefcb");return Wt()[l]=()=>{gapi.load?a():t(Ot(n,"network-request-failed"))},LT(`${FT()}?onload=${l}`).catch(c=>t(c))}}).catch(e=>{throw ro=null,e})}let ro=null;function MI(n){return ro=ro||xI(n),ro}/**
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
 */const LI=new di(5e3,15e3),FI="__/auth/iframe",UI="emulator/auth/iframe",BI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $I(n){const e=n.config;ne(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?oc(e,UI):`https://${n.config.authDomain}/${FI}`,r={apiKey:e.apiKey,appName:n.name,v:ns},s=jI.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${fi(r).slice(1)}`}async function qI(n){const e=await MI(n),t=Wt().gapi;return ne(t,n,"internal-error"),e.open({where:document.body,url:$I(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:BI,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const a=Ot(n,"network-request-failed"),l=Wt().setTimeout(()=>{i(a)},LI.get());function c(){Wt().clearTimeout(l),s(r)}r.ping(c).then(c,()=>{i(a)})}))}/**
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
 */const HI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},zI=500,WI=600,KI="_blank",GI="http://localhost";class zh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function QI(n,e,t,r=zI,s=WI){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const c=Object.assign(Object.assign({},HI),{width:r.toString(),height:s.toString(),top:i,left:a}),h=lt().toLowerCase();t&&(l=Vp(h)?KI:t),Pp(h)&&(e=e||GI,c.scrollbars="yes");const d=Object.entries(c).reduce((_,[S,V])=>`${_}${S}=${V},`,"");if(CT(h)&&l!=="_self")return JI(e||"",l),new zh(null);const g=window.open(e||"",l,d);ne(g,n,"popup-blocked");try{g.focus()}catch{}return new zh(g)}function JI(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const XI="__/auth/handler",YI="emulator/auth/handler",ZI=encodeURIComponent("fac");async function Wh(n,e,t,r,s,i){ne(n.config.authDomain,n,"auth-domain-config-required"),ne(n.config.apiKey,n,"invalid-api-key");const a={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:ns,eventId:s};if(e instanceof hc){e.setDefaultLanguage(n.languageCode),a.providerId=e.providerId||"",Yv(e.getCustomParameters())||(a.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,g]of Object.entries({}))a[d]=g}if(e instanceof pi){const d=e.getScopes().filter(g=>g!=="");d.length>0&&(a.scopes=d.join(","))}n.tenantId&&(a.tid=n.tenantId);const l=a;for(const d of Object.keys(l))l[d]===void 0&&delete l[d];const c=await n._getAppCheckToken(),h=c?`#${ZI}=${encodeURIComponent(c)}`:"";return`${ew(n)}?${fi(l).slice(1)}${h}`}function ew({config:n}){return n.emulator?oc(n,YI):`https://${n.authDomain}/${XI}`}/**
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
 */const za="webStorageSupport";class tw{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=qp,this._completeRedirectFn=bI,this._overrideRedirectResult=II}async _openPopup(e,t,r,s){var i;vn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const a=await Wh(e,t,r,dl(),s);return QI(e,a,fc())}async _openRedirect(e,t,r,s){await this._originValidation(e);const i=await Wh(e,t,r,dl(),s);return sI(i),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(vn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await qI(e),r=new RI(e);return t.register("authEvent",s=>(ne(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(za,{type:za},s=>{var i;const a=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[za];a!==void 0&&t(!!a),Zt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=DI(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xp()||Cp()||cc()}}const nw=tw;var Kh="@firebase/auth",Gh="1.10.8";/**
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
 */class rw{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ne(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function sw(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function iw(n){Kr(new _r("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),i=e.getProvider("app-check-internal"),{apiKey:a,authDomain:l}=r.options;ne(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:l,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Mp(n)},h=new xT(r,s,i,c);return jT(h,t),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Kr(new _r("auth-internal",e=>{const t=Ko(e.getProvider("auth").getImmediate());return(r=>new rw(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ln(Kh,Gh,sw(n)),Ln(Kh,Gh,"esm2017")}/**
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
 */const ow=300,aw=fp("authIdTokenMaxAge")||ow;let Qh=null;const lw=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>aw)return;const s=t==null?void 0:t.token;Qh!==s&&(Qh=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function cw(n=yp()){const e=nc(n,"auth");if(e.isInitialized())return e.getImmediate();const t=BT(n,{popupRedirectResolver:nw,persistence:[dI,tI,qp]}),r=fp("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const i=new URL(r,location.origin);if(location.origin===i.origin){const a=lw(i.toString());JT(t,a,()=>a(t.currentUser)),QT(t,l=>a(l))}}const s=up("auth");return s&&$T(t,`http://${s}`),t}function uw(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}MT({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=Ot("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",uw().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});iw("Browser");var Jh=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Fn,Xp;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(w,y){function E(){}E.prototype=y.prototype,w.D=y.prototype,w.prototype=new E,w.prototype.constructor=w,w.C=function(I,b,T){for(var m=Array(arguments.length-2),pe=2;pe<arguments.length;pe++)m[pe-2]=arguments[pe];return y.prototype[b].apply(I,m)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,t),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(w,y,E){E||(E=0);var I=Array(16);if(typeof y=="string")for(var b=0;16>b;++b)I[b]=y.charCodeAt(E++)|y.charCodeAt(E++)<<8|y.charCodeAt(E++)<<16|y.charCodeAt(E++)<<24;else for(b=0;16>b;++b)I[b]=y[E++]|y[E++]<<8|y[E++]<<16|y[E++]<<24;y=w.g[0],E=w.g[1],b=w.g[2];var T=w.g[3],m=y+(T^E&(b^T))+I[0]+3614090360&4294967295;y=E+(m<<7&4294967295|m>>>25),m=T+(b^y&(E^b))+I[1]+3905402710&4294967295,T=y+(m<<12&4294967295|m>>>20),m=b+(E^T&(y^E))+I[2]+606105819&4294967295,b=T+(m<<17&4294967295|m>>>15),m=E+(y^b&(T^y))+I[3]+3250441966&4294967295,E=b+(m<<22&4294967295|m>>>10),m=y+(T^E&(b^T))+I[4]+4118548399&4294967295,y=E+(m<<7&4294967295|m>>>25),m=T+(b^y&(E^b))+I[5]+1200080426&4294967295,T=y+(m<<12&4294967295|m>>>20),m=b+(E^T&(y^E))+I[6]+2821735955&4294967295,b=T+(m<<17&4294967295|m>>>15),m=E+(y^b&(T^y))+I[7]+4249261313&4294967295,E=b+(m<<22&4294967295|m>>>10),m=y+(T^E&(b^T))+I[8]+1770035416&4294967295,y=E+(m<<7&4294967295|m>>>25),m=T+(b^y&(E^b))+I[9]+2336552879&4294967295,T=y+(m<<12&4294967295|m>>>20),m=b+(E^T&(y^E))+I[10]+4294925233&4294967295,b=T+(m<<17&4294967295|m>>>15),m=E+(y^b&(T^y))+I[11]+2304563134&4294967295,E=b+(m<<22&4294967295|m>>>10),m=y+(T^E&(b^T))+I[12]+1804603682&4294967295,y=E+(m<<7&4294967295|m>>>25),m=T+(b^y&(E^b))+I[13]+4254626195&4294967295,T=y+(m<<12&4294967295|m>>>20),m=b+(E^T&(y^E))+I[14]+2792965006&4294967295,b=T+(m<<17&4294967295|m>>>15),m=E+(y^b&(T^y))+I[15]+1236535329&4294967295,E=b+(m<<22&4294967295|m>>>10),m=y+(b^T&(E^b))+I[1]+4129170786&4294967295,y=E+(m<<5&4294967295|m>>>27),m=T+(E^b&(y^E))+I[6]+3225465664&4294967295,T=y+(m<<9&4294967295|m>>>23),m=b+(y^E&(T^y))+I[11]+643717713&4294967295,b=T+(m<<14&4294967295|m>>>18),m=E+(T^y&(b^T))+I[0]+3921069994&4294967295,E=b+(m<<20&4294967295|m>>>12),m=y+(b^T&(E^b))+I[5]+3593408605&4294967295,y=E+(m<<5&4294967295|m>>>27),m=T+(E^b&(y^E))+I[10]+38016083&4294967295,T=y+(m<<9&4294967295|m>>>23),m=b+(y^E&(T^y))+I[15]+3634488961&4294967295,b=T+(m<<14&4294967295|m>>>18),m=E+(T^y&(b^T))+I[4]+3889429448&4294967295,E=b+(m<<20&4294967295|m>>>12),m=y+(b^T&(E^b))+I[9]+568446438&4294967295,y=E+(m<<5&4294967295|m>>>27),m=T+(E^b&(y^E))+I[14]+3275163606&4294967295,T=y+(m<<9&4294967295|m>>>23),m=b+(y^E&(T^y))+I[3]+4107603335&4294967295,b=T+(m<<14&4294967295|m>>>18),m=E+(T^y&(b^T))+I[8]+1163531501&4294967295,E=b+(m<<20&4294967295|m>>>12),m=y+(b^T&(E^b))+I[13]+2850285829&4294967295,y=E+(m<<5&4294967295|m>>>27),m=T+(E^b&(y^E))+I[2]+4243563512&4294967295,T=y+(m<<9&4294967295|m>>>23),m=b+(y^E&(T^y))+I[7]+1735328473&4294967295,b=T+(m<<14&4294967295|m>>>18),m=E+(T^y&(b^T))+I[12]+2368359562&4294967295,E=b+(m<<20&4294967295|m>>>12),m=y+(E^b^T)+I[5]+4294588738&4294967295,y=E+(m<<4&4294967295|m>>>28),m=T+(y^E^b)+I[8]+2272392833&4294967295,T=y+(m<<11&4294967295|m>>>21),m=b+(T^y^E)+I[11]+1839030562&4294967295,b=T+(m<<16&4294967295|m>>>16),m=E+(b^T^y)+I[14]+4259657740&4294967295,E=b+(m<<23&4294967295|m>>>9),m=y+(E^b^T)+I[1]+2763975236&4294967295,y=E+(m<<4&4294967295|m>>>28),m=T+(y^E^b)+I[4]+1272893353&4294967295,T=y+(m<<11&4294967295|m>>>21),m=b+(T^y^E)+I[7]+4139469664&4294967295,b=T+(m<<16&4294967295|m>>>16),m=E+(b^T^y)+I[10]+3200236656&4294967295,E=b+(m<<23&4294967295|m>>>9),m=y+(E^b^T)+I[13]+681279174&4294967295,y=E+(m<<4&4294967295|m>>>28),m=T+(y^E^b)+I[0]+3936430074&4294967295,T=y+(m<<11&4294967295|m>>>21),m=b+(T^y^E)+I[3]+3572445317&4294967295,b=T+(m<<16&4294967295|m>>>16),m=E+(b^T^y)+I[6]+76029189&4294967295,E=b+(m<<23&4294967295|m>>>9),m=y+(E^b^T)+I[9]+3654602809&4294967295,y=E+(m<<4&4294967295|m>>>28),m=T+(y^E^b)+I[12]+3873151461&4294967295,T=y+(m<<11&4294967295|m>>>21),m=b+(T^y^E)+I[15]+530742520&4294967295,b=T+(m<<16&4294967295|m>>>16),m=E+(b^T^y)+I[2]+3299628645&4294967295,E=b+(m<<23&4294967295|m>>>9),m=y+(b^(E|~T))+I[0]+4096336452&4294967295,y=E+(m<<6&4294967295|m>>>26),m=T+(E^(y|~b))+I[7]+1126891415&4294967295,T=y+(m<<10&4294967295|m>>>22),m=b+(y^(T|~E))+I[14]+2878612391&4294967295,b=T+(m<<15&4294967295|m>>>17),m=E+(T^(b|~y))+I[5]+4237533241&4294967295,E=b+(m<<21&4294967295|m>>>11),m=y+(b^(E|~T))+I[12]+1700485571&4294967295,y=E+(m<<6&4294967295|m>>>26),m=T+(E^(y|~b))+I[3]+2399980690&4294967295,T=y+(m<<10&4294967295|m>>>22),m=b+(y^(T|~E))+I[10]+4293915773&4294967295,b=T+(m<<15&4294967295|m>>>17),m=E+(T^(b|~y))+I[1]+2240044497&4294967295,E=b+(m<<21&4294967295|m>>>11),m=y+(b^(E|~T))+I[8]+1873313359&4294967295,y=E+(m<<6&4294967295|m>>>26),m=T+(E^(y|~b))+I[15]+4264355552&4294967295,T=y+(m<<10&4294967295|m>>>22),m=b+(y^(T|~E))+I[6]+2734768916&4294967295,b=T+(m<<15&4294967295|m>>>17),m=E+(T^(b|~y))+I[13]+1309151649&4294967295,E=b+(m<<21&4294967295|m>>>11),m=y+(b^(E|~T))+I[4]+4149444226&4294967295,y=E+(m<<6&4294967295|m>>>26),m=T+(E^(y|~b))+I[11]+3174756917&4294967295,T=y+(m<<10&4294967295|m>>>22),m=b+(y^(T|~E))+I[2]+718787259&4294967295,b=T+(m<<15&4294967295|m>>>17),m=E+(T^(b|~y))+I[9]+3951481745&4294967295,w.g[0]=w.g[0]+y&4294967295,w.g[1]=w.g[1]+(b+(m<<21&4294967295|m>>>11))&4294967295,w.g[2]=w.g[2]+b&4294967295,w.g[3]=w.g[3]+T&4294967295}r.prototype.u=function(w,y){y===void 0&&(y=w.length);for(var E=y-this.blockSize,I=this.B,b=this.h,T=0;T<y;){if(b==0)for(;T<=E;)s(this,w,T),T+=this.blockSize;if(typeof w=="string"){for(;T<y;)if(I[b++]=w.charCodeAt(T++),b==this.blockSize){s(this,I),b=0;break}}else for(;T<y;)if(I[b++]=w[T++],b==this.blockSize){s(this,I),b=0;break}}this.h=b,this.o+=y},r.prototype.v=function(){var w=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);w[0]=128;for(var y=1;y<w.length-8;++y)w[y]=0;var E=8*this.o;for(y=w.length-8;y<w.length;++y)w[y]=E&255,E/=256;for(this.u(w),w=Array(16),y=E=0;4>y;++y)for(var I=0;32>I;I+=8)w[E++]=this.g[y]>>>I&255;return w};function i(w,y){var E=l;return Object.prototype.hasOwnProperty.call(E,w)?E[w]:E[w]=y(w)}function a(w,y){this.h=y;for(var E=[],I=!0,b=w.length-1;0<=b;b--){var T=w[b]|0;I&&T==y||(E[b]=T,I=!1)}this.g=E}var l={};function c(w){return-128<=w&&128>w?i(w,function(y){return new a([y|0],0>y?-1:0)}):new a([w|0],0>w?-1:0)}function h(w){if(isNaN(w)||!isFinite(w))return g;if(0>w)return O(h(-w));for(var y=[],E=1,I=0;w>=E;I++)y[I]=w/E|0,E*=4294967296;return new a(y,0)}function d(w,y){if(w.length==0)throw Error("number format error: empty string");if(y=y||10,2>y||36<y)throw Error("radix out of range: "+y);if(w.charAt(0)=="-")return O(d(w.substring(1),y));if(0<=w.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(y,8)),I=g,b=0;b<w.length;b+=8){var T=Math.min(8,w.length-b),m=parseInt(w.substring(b,b+T),y);8>T?(T=h(Math.pow(y,T)),I=I.j(T).add(h(m))):(I=I.j(E),I=I.add(h(m)))}return I}var g=c(0),_=c(1),S=c(16777216);n=a.prototype,n.m=function(){if(D(this))return-O(this).m();for(var w=0,y=1,E=0;E<this.g.length;E++){var I=this.i(E);w+=(0<=I?I:4294967296+I)*y,y*=4294967296}return w},n.toString=function(w){if(w=w||10,2>w||36<w)throw Error("radix out of range: "+w);if(V(this))return"0";if(D(this))return"-"+O(this).toString(w);for(var y=h(Math.pow(w,6)),E=this,I="";;){var b=z(E,y).g;E=Q(E,b.j(y));var T=((0<E.g.length?E.g[0]:E.h)>>>0).toString(w);if(E=b,V(E))return T+I;for(;6>T.length;)T="0"+T;I=T+I}},n.i=function(w){return 0>w?0:w<this.g.length?this.g[w]:this.h};function V(w){if(w.h!=0)return!1;for(var y=0;y<w.g.length;y++)if(w.g[y]!=0)return!1;return!0}function D(w){return w.h==-1}n.l=function(w){return w=Q(this,w),D(w)?-1:V(w)?0:1};function O(w){for(var y=w.g.length,E=[],I=0;I<y;I++)E[I]=~w.g[I];return new a(E,~w.h).add(_)}n.abs=function(){return D(this)?O(this):this},n.add=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],I=0,b=0;b<=y;b++){var T=I+(this.i(b)&65535)+(w.i(b)&65535),m=(T>>>16)+(this.i(b)>>>16)+(w.i(b)>>>16);I=m>>>16,T&=65535,m&=65535,E[b]=m<<16|T}return new a(E,E[E.length-1]&-2147483648?-1:0)};function Q(w,y){return w.add(O(y))}n.j=function(w){if(V(this)||V(w))return g;if(D(this))return D(w)?O(this).j(O(w)):O(O(this).j(w));if(D(w))return O(this.j(O(w)));if(0>this.l(S)&&0>w.l(S))return h(this.m()*w.m());for(var y=this.g.length+w.g.length,E=[],I=0;I<2*y;I++)E[I]=0;for(I=0;I<this.g.length;I++)for(var b=0;b<w.g.length;b++){var T=this.i(I)>>>16,m=this.i(I)&65535,pe=w.i(b)>>>16,De=w.i(b)&65535;E[2*I+2*b]+=m*De,$(E,2*I+2*b),E[2*I+2*b+1]+=T*De,$(E,2*I+2*b+1),E[2*I+2*b+1]+=m*pe,$(E,2*I+2*b+1),E[2*I+2*b+2]+=T*pe,$(E,2*I+2*b+2)}for(I=0;I<y;I++)E[I]=E[2*I+1]<<16|E[2*I];for(I=y;I<2*y;I++)E[I]=0;return new a(E,0)};function $(w,y){for(;(w[y]&65535)!=w[y];)w[y+1]+=w[y]>>>16,w[y]&=65535,y++}function G(w,y){this.g=w,this.h=y}function z(w,y){if(V(y))throw Error("division by zero");if(V(w))return new G(g,g);if(D(w))return y=z(O(w),y),new G(O(y.g),O(y.h));if(D(y))return y=z(w,O(y)),new G(O(y.g),y.h);if(30<w.g.length){if(D(w)||D(y))throw Error("slowDivide_ only works with positive integers.");for(var E=_,I=y;0>=I.l(w);)E=ue(E),I=ue(I);var b=ge(E,1),T=ge(I,1);for(I=ge(I,2),E=ge(E,2);!V(I);){var m=T.add(I);0>=m.l(w)&&(b=b.add(E),T=m),I=ge(I,1),E=ge(E,1)}return y=Q(w,b.j(y)),new G(b,y)}for(b=g;0<=w.l(y);){for(E=Math.max(1,Math.floor(w.m()/y.m())),I=Math.ceil(Math.log(E)/Math.LN2),I=48>=I?1:Math.pow(2,I-48),T=h(E),m=T.j(y);D(m)||0<m.l(w);)E-=I,T=h(E),m=T.j(y);V(T)&&(T=_),b=b.add(T),w=Q(w,m)}return new G(b,w)}n.A=function(w){return z(this,w).h},n.and=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)&w.i(I);return new a(E,this.h&w.h)},n.or=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)|w.i(I);return new a(E,this.h|w.h)},n.xor=function(w){for(var y=Math.max(this.g.length,w.g.length),E=[],I=0;I<y;I++)E[I]=this.i(I)^w.i(I);return new a(E,this.h^w.h)};function ue(w){for(var y=w.g.length+1,E=[],I=0;I<y;I++)E[I]=w.i(I)<<1|w.i(I-1)>>>31;return new a(E,w.h)}function ge(w,y){var E=y>>5;y%=32;for(var I=w.g.length-E,b=[],T=0;T<I;T++)b[T]=0<y?w.i(T+E)>>>y|w.i(T+E+1)<<32-y:w.i(T+E);return new a(b,w.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,Xp=r,a.prototype.add=a.prototype.add,a.prototype.multiply=a.prototype.j,a.prototype.modulo=a.prototype.A,a.prototype.compare=a.prototype.l,a.prototype.toNumber=a.prototype.m,a.prototype.toString=a.prototype.toString,a.prototype.getBits=a.prototype.i,a.fromNumber=h,a.fromString=d,Fn=a}).apply(typeof Jh<"u"?Jh:typeof self<"u"?self:typeof window<"u"?window:{});var qi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Yp,Cs,Zp,so,ml,eg,tg,ng;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(o,u,f){return o==Array.prototype||o==Object.prototype||(o[u]=f.value),o};function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof qi=="object"&&qi];for(var u=0;u<o.length;++u){var f=o[u];if(f&&f.Math==Math)return f}throw Error("Cannot find global object")}var r=t(this);function s(o,u){if(u)e:{var f=r;o=o.split(".");for(var p=0;p<o.length-1;p++){var R=o[p];if(!(R in f))break e;f=f[R]}o=o[o.length-1],p=f[o],u=u(p),u!=p&&u!=null&&e(f,o,{configurable:!0,writable:!0,value:u})}}function i(o,u){o instanceof String&&(o+="");var f=0,p=!1,R={next:function(){if(!p&&f<o.length){var P=f++;return{value:u(P,o[P]),done:!1}}return p=!0,{done:!0,value:void 0}}};return R[Symbol.iterator]=function(){return R},R}s("Array.prototype.values",function(o){return o||function(){return i(this,function(u,f){return f})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},l=this||self;function c(o){var u=typeof o;return u=u!="object"?u:o?Array.isArray(o)?"array":u:"null",u=="array"||u=="object"&&typeof o.length=="number"}function h(o){var u=typeof o;return u=="object"&&o!=null||u=="function"}function d(o,u,f){return o.call.apply(o.bind,arguments)}function g(o,u,f){if(!o)throw Error();if(2<arguments.length){var p=Array.prototype.slice.call(arguments,2);return function(){var R=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(R,p),o.apply(u,R)}}return function(){return o.apply(u,arguments)}}function _(o,u,f){return _=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?d:g,_.apply(null,arguments)}function S(o,u){var f=Array.prototype.slice.call(arguments,1);return function(){var p=f.slice();return p.push.apply(p,arguments),o.apply(this,p)}}function V(o,u){function f(){}f.prototype=u.prototype,o.aa=u.prototype,o.prototype=new f,o.prototype.constructor=o,o.Qb=function(p,R,P){for(var B=Array(arguments.length-2),Ae=2;Ae<arguments.length;Ae++)B[Ae-2]=arguments[Ae];return u.prototype[R].apply(p,B)}}function D(o){const u=o.length;if(0<u){const f=Array(u);for(let p=0;p<u;p++)f[p]=o[p];return f}return[]}function O(o,u){for(let f=1;f<arguments.length;f++){const p=arguments[f];if(c(p)){const R=o.length||0,P=p.length||0;o.length=R+P;for(let B=0;B<P;B++)o[R+B]=p[B]}else o.push(p)}}class Q{constructor(u,f){this.i=u,this.j=f,this.h=0,this.g=null}get(){let u;return 0<this.h?(this.h--,u=this.g,this.g=u.next,u.next=null):u=this.i(),u}}function $(o){return/^[\s\xa0]*$/.test(o)}function G(){var o=l.navigator;return o&&(o=o.userAgent)?o:""}function z(o){return z[" "](o),o}z[" "]=function(){};var ue=G().indexOf("Gecko")!=-1&&!(G().toLowerCase().indexOf("webkit")!=-1&&G().indexOf("Edge")==-1)&&!(G().indexOf("Trident")!=-1||G().indexOf("MSIE")!=-1)&&G().indexOf("Edge")==-1;function ge(o,u,f){for(const p in o)u.call(f,o[p],p,o)}function w(o,u){for(const f in o)u.call(void 0,o[f],f,o)}function y(o){const u={};for(const f in o)u[f]=o[f];return u}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(o,u){let f,p;for(let R=1;R<arguments.length;R++){p=arguments[R];for(f in p)o[f]=p[f];for(let P=0;P<E.length;P++)f=E[P],Object.prototype.hasOwnProperty.call(p,f)&&(o[f]=p[f])}}function b(o){var u=1;o=o.split(":");const f=[];for(;0<u&&o.length;)f.push(o.shift()),u--;return o.length&&f.push(o.join(":")),f}function T(o){l.setTimeout(()=>{throw o},0)}function m(){var o=Rt;let u=null;return o.g&&(u=o.g,o.g=o.g.next,o.g||(o.h=null),u.next=null),u}class pe{constructor(){this.h=this.g=null}add(u,f){const p=De.get();p.set(u,f),this.h?this.h.next=p:this.g=p,this.h=p}}var De=new Q(()=>new We,o=>o.reset());class We{constructor(){this.next=this.g=this.h=null}set(u,f){this.h=u,this.g=f,this.next=null}reset(){this.next=this.g=this.h=null}}let Ie,me=!1,Rt=new pe,Yn=()=>{const o=l.Promise.resolve(void 0);Ie=()=>{o.then(tn)}};var tn=()=>{for(var o;o=m();){try{o.h.call(o.g)}catch(f){T(f)}var u=De;u.j(o),100>u.h&&(u.h++,o.next=u.g,u.g=o)}me=!1};function je(){this.s=this.s,this.C=this.C}je.prototype.s=!1,je.prototype.ma=function(){this.s||(this.s=!0,this.N())},je.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function $e(o,u){this.type=o,this.g=this.target=u,this.defaultPrevented=!1}$e.prototype.h=function(){this.defaultPrevented=!0};var fa=(function(){if(!l.addEventListener||!Object.defineProperty)return!1;var o=!1,u=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const f=()=>{};l.addEventListener("test",f,u),l.removeEventListener("test",f,u)}catch{}return o})();function Zn(o,u){if($e.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o){var f=this.type=o.type,p=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;if(this.target=o.target||o.srcElement,this.g=u,u=o.relatedTarget){if(ue){e:{try{z(u.nodeName);var R=!0;break e}catch{}R=!1}R||(u=null)}}else f=="mouseover"?u=o.fromElement:f=="mouseout"&&(u=o.toElement);this.relatedTarget=u,p?(this.clientX=p.clientX!==void 0?p.clientX:p.pageX,this.clientY=p.clientY!==void 0?p.clientY:p.pageY,this.screenX=p.screenX||0,this.screenY=p.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=typeof o.pointerType=="string"?o.pointerType:er[o.pointerType]||"",this.state=o.state,this.i=o,o.defaultPrevented&&Zn.aa.h.call(this)}}V(Zn,$e);var er={2:"touch",3:"pen",4:"mouse"};Zn.prototype.h=function(){Zn.aa.h.call(this);var o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var nn="closure_listenable_"+(1e6*Math.random()|0),cs=0;function Ii(o,u,f,p,R){this.listener=o,this.proxy=null,this.src=u,this.type=f,this.capture=!!p,this.ha=R,this.key=++cs,this.da=this.fa=!1}function Ft(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function us(o){this.src=o,this.g={},this.h=0}us.prototype.add=function(o,u,f,p,R){var P=o.toString();o=this.g[P],o||(o=this.g[P]=[],this.h++);var B=A(o,u,p,R);return-1<B?(u=o[B],f||(u.fa=!1)):(u=new Ii(u,this.src,P,!!p,R),u.fa=f,o.push(u)),u};function v(o,u){var f=u.type;if(f in o.g){var p=o.g[f],R=Array.prototype.indexOf.call(p,u,void 0),P;(P=0<=R)&&Array.prototype.splice.call(p,R,1),P&&(Ft(u),o.g[f].length==0&&(delete o.g[f],o.h--))}}function A(o,u,f,p){for(var R=0;R<o.length;++R){var P=o[R];if(!P.da&&P.listener==u&&P.capture==!!f&&P.ha==p)return R}return-1}var C="closure_lm_"+(1e6*Math.random()|0),F={};function x(o,u,f,p,R){if(Array.isArray(u)){for(var P=0;P<u.length;P++)x(o,u[P],f,p,R);return null}return f=Z(f),o&&o[nn]?o.K(u,f,h(p)?!!p.capture:!1,R):L(o,u,f,!1,p,R)}function L(o,u,f,p,R,P){if(!u)throw Error("Invalid event type");var B=h(R)?!!R.capture:!!R,Ae=H(o);if(Ae||(o[C]=Ae=new us(o)),f=Ae.add(u,f,p,B,P),f.proxy)return f;if(p=q(),f.proxy=p,p.src=o,p.listener=f,o.addEventListener)fa||(R=B),R===void 0&&(R=!1),o.addEventListener(u.toString(),p,R);else if(o.attachEvent)o.attachEvent(M(u.toString()),p);else if(o.addListener&&o.removeListener)o.addListener(p);else throw Error("addEventListener and attachEvent are unavailable.");return f}function q(){function o(f){return u.call(o.src,o.listener,f)}const u=Y;return o}function j(o,u,f,p,R){if(Array.isArray(u))for(var P=0;P<u.length;P++)j(o,u[P],f,p,R);else p=h(p)?!!p.capture:!!p,f=Z(f),o&&o[nn]?(o=o.i,u=String(u).toString(),u in o.g&&(P=o.g[u],f=A(P,f,p,R),-1<f&&(Ft(P[f]),Array.prototype.splice.call(P,f,1),P.length==0&&(delete o.g[u],o.h--)))):o&&(o=H(o))&&(u=o.g[u.toString()],o=-1,u&&(o=A(u,f,p,R)),(f=-1<o?u[o]:null)&&U(f))}function U(o){if(typeof o!="number"&&o&&!o.da){var u=o.src;if(u&&u[nn])v(u.i,o);else{var f=o.type,p=o.proxy;u.removeEventListener?u.removeEventListener(f,p,o.capture):u.detachEvent?u.detachEvent(M(f),p):u.addListener&&u.removeListener&&u.removeListener(p),(f=H(u))?(v(f,o),f.h==0&&(f.src=null,u[C]=null)):Ft(o)}}}function M(o){return o in F?F[o]:F[o]="on"+o}function Y(o,u){if(o.da)o=!0;else{u=new Zn(u,this);var f=o.listener,p=o.ha||o.src;o.fa&&U(o),o=f.call(p,u)}return o}function H(o){return o=o[C],o instanceof us?o:null}var J="__closure_events_fn_"+(1e9*Math.random()>>>0);function Z(o){return typeof o=="function"?o:(o[J]||(o[J]=function(u){return o.handleEvent(u)}),o[J])}function ee(){je.call(this),this.i=new us(this),this.M=this,this.F=null}V(ee,je),ee.prototype[nn]=!0,ee.prototype.removeEventListener=function(o,u,f,p){j(this,o,u,f,p)};function oe(o,u){var f,p=o.F;if(p)for(f=[];p;p=p.F)f.push(p);if(o=o.M,p=u.type||u,typeof u=="string")u=new $e(u,o);else if(u instanceof $e)u.target=u.target||o;else{var R=u;u=new $e(p,o),I(u,R)}if(R=!0,f)for(var P=f.length-1;0<=P;P--){var B=u.g=f[P];R=ye(B,p,!0,u)&&R}if(B=u.g=o,R=ye(B,p,!0,u)&&R,R=ye(B,p,!1,u)&&R,f)for(P=0;P<f.length;P++)B=u.g=f[P],R=ye(B,p,!1,u)&&R}ee.prototype.N=function(){if(ee.aa.N.call(this),this.i){var o=this.i,u;for(u in o.g){for(var f=o.g[u],p=0;p<f.length;p++)Ft(f[p]);delete o.g[u],o.h--}}this.F=null},ee.prototype.K=function(o,u,f,p){return this.i.add(String(o),u,!1,f,p)},ee.prototype.L=function(o,u,f,p){return this.i.add(String(o),u,!0,f,p)};function ye(o,u,f,p){if(u=o.i.g[String(u)],!u)return!0;u=u.concat();for(var R=!0,P=0;P<u.length;++P){var B=u[P];if(B&&!B.da&&B.capture==f){var Ae=B.listener,Ge=B.ha||B.src;B.fa&&v(o.i,B),R=Ae.call(Ge,p)!==!1&&R}}return R&&!p.defaultPrevented}function Ve(o,u,f){if(typeof o=="function")f&&(o=_(o,f));else if(o&&typeof o.handleEvent=="function")o=_(o.handleEvent,o);else throw Error("Invalid listener argument");return 2147483647<Number(u)?-1:l.setTimeout(o,u||0)}function Me(o){o.g=Ve(()=>{o.g=null,o.i&&(o.i=!1,Me(o))},o.l);const u=o.h;o.h=null,o.m.apply(null,u)}class Tt extends je{constructor(u,f){super(),this.m=u,this.l=f,this.h=null,this.i=!1,this.g=null}j(u){this.h=arguments,this.g?this.i=!0:Me(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(o){je.call(this),this.h=o,this.g={}}V(Ye,je);var An=[];function hs(o){ge(o.g,function(u,f){this.g.hasOwnProperty(f)&&U(u)},o),o.g={}}Ye.prototype.N=function(){Ye.aa.N.call(this),hs(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ke=l.JSON.stringify,It=l.JSON.parse,wi=class{stringify(o){return l.JSON.stringify(o,void 0)}parse(o){return l.JSON.parse(o,void 0)}};function Ar(){}Ar.prototype.h=null;function Yc(o){return o.h||(o.h=o.i())}function Zc(){}var fs={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function da(){$e.call(this,"d")}V(da,$e);function pa(){$e.call(this,"c")}V(pa,$e);var tr={},eu=null;function Ai(){return eu=eu||new ee}tr.La="serverreachability";function tu(o){$e.call(this,tr.La,o)}V(tu,$e);function ds(o){const u=Ai();oe(u,new tu(u))}tr.STAT_EVENT="statevent";function nu(o,u){$e.call(this,tr.STAT_EVENT,o),this.stat=u}V(nu,$e);function ct(o){const u=Ai();oe(u,new nu(u,o))}tr.Ma="timingevent";function ru(o,u){$e.call(this,tr.Ma,o),this.size=u}V(ru,$e);function ps(o,u){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){o()},u)}function gs(){this.g=!0}gs.prototype.xa=function(){this.g=!1};function Pm(o,u,f,p,R,P){o.info(function(){if(o.g)if(P)for(var B="",Ae=P.split("&"),Ge=0;Ge<Ae.length;Ge++){var _e=Ae[Ge].split("=");if(1<_e.length){var Ze=_e[0];_e=_e[1];var et=Ze.split("_");B=2<=et.length&&et[1]=="type"?B+(Ze+"="+_e+"&"):B+(Ze+"=redacted&")}}else B=null;else B=P;return"XMLHTTP REQ ("+p+") [attempt "+R+"]: "+u+`
`+f+`
`+B})}function Cm(o,u,f,p,R,P,B){o.info(function(){return"XMLHTTP RESP ("+p+") [ attempt "+R+"]: "+u+`
`+f+`
`+P+" "+B})}function br(o,u,f,p){o.info(function(){return"XMLHTTP TEXT ("+u+"): "+km(o,f)+(p?" "+p:"")})}function Vm(o,u){o.info(function(){return"TIMEOUT: "+u})}gs.prototype.info=function(){};function km(o,u){if(!o.g)return u;if(!u)return null;try{var f=JSON.parse(u);if(f){for(o=0;o<f.length;o++)if(Array.isArray(f[o])){var p=f[o];if(!(2>p.length)){var R=p[1];if(Array.isArray(R)&&!(1>R.length)){var P=R[0];if(P!="noop"&&P!="stop"&&P!="close")for(var B=1;B<R.length;B++)R[B]=""}}}}return Ke(f)}catch{return u}}var bi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},su={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},ga;function Si(){}V(Si,Ar),Si.prototype.g=function(){return new XMLHttpRequest},Si.prototype.i=function(){return{}},ga=new Si;function bn(o,u,f,p){this.j=o,this.i=u,this.l=f,this.R=p||1,this.U=new Ye(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new iu}function iu(){this.i=null,this.g="",this.h=!1}var ou={},ma={};function _a(o,u,f){o.L=1,o.v=Vi(rn(u)),o.m=f,o.P=!0,au(o,null)}function au(o,u){o.F=Date.now(),Ri(o),o.A=rn(o.v);var f=o.A,p=o.R;Array.isArray(p)||(p=[String(p)]),Tu(f.i,"t",p),o.C=0,f=o.j.J,o.h=new iu,o.g=Uu(o.j,f?u:null,!o.m),0<o.O&&(o.M=new Tt(_(o.Y,o,o.g),o.O)),u=o.U,f=o.g,p=o.ca;var R="readystatechange";Array.isArray(R)||(R&&(An[0]=R.toString()),R=An);for(var P=0;P<R.length;P++){var B=x(f,R[P],p||u.handleEvent,!1,u.h||u);if(!B)break;u.g[B.key]=B}u=o.H?y(o.H):{},o.m?(o.u||(o.u="POST"),u["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.A,o.u,o.m,u)):(o.u="GET",o.g.ea(o.A,o.u,null,u)),ds(),Pm(o.i,o.u,o.A,o.l,o.R,o.m)}bn.prototype.ca=function(o){o=o.target;const u=this.M;u&&sn(o)==3?u.j():this.Y(o)},bn.prototype.Y=function(o){try{if(o==this.g)e:{const et=sn(this.g);var u=this.g.Ba();const Pr=this.g.Z();if(!(3>et)&&(et!=3||this.g&&(this.h.h||this.g.oa()||Pu(this.g)))){this.J||et!=4||u==7||(u==8||0>=Pr?ds(3):ds(2)),ya(this);var f=this.g.Z();this.X=f;t:if(lu(this)){var p=Pu(this.g);o="";var R=p.length,P=sn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){nr(this),ms(this);var B="";break t}this.h.i=new l.TextDecoder}for(u=0;u<R;u++)this.h.h=!0,o+=this.h.i.decode(p[u],{stream:!(P&&u==R-1)});p.length=0,this.h.g+=o,this.C=0,B=this.h.g}else B=this.g.oa();if(this.o=f==200,Cm(this.i,this.u,this.A,this.l,this.R,et,f),this.o){if(this.T&&!this.K){t:{if(this.g){var Ae,Ge=this.g;if((Ae=Ge.g?Ge.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!$(Ae)){var _e=Ae;break t}}_e=null}if(f=_e)br(this.i,this.l,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,va(this,f);else{this.o=!1,this.s=3,ct(12),nr(this),ms(this);break e}}if(this.P){f=!0;let Pt;for(;!this.J&&this.C<B.length;)if(Pt=Dm(this,B),Pt==ma){et==4&&(this.s=4,ct(14),f=!1),br(this.i,this.l,null,"[Incomplete Response]");break}else if(Pt==ou){this.s=4,ct(15),br(this.i,this.l,B,"[Invalid Chunk]"),f=!1;break}else br(this.i,this.l,Pt,null),va(this,Pt);if(lu(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),et!=4||B.length!=0||this.h.h||(this.s=1,ct(16),f=!1),this.o=this.o&&f,!f)br(this.i,this.l,B,"[Invalid Chunked Response]"),nr(this),ms(this);else if(0<B.length&&!this.W){this.W=!0;var Ze=this.j;Ze.g==this&&Ze.ba&&!Ze.M&&(Ze.j.info("Great, no buffering proxy detected. Bytes received: "+B.length),ba(Ze),Ze.M=!0,ct(11))}}else br(this.i,this.l,B,null),va(this,B);et==4&&nr(this),this.o&&!this.J&&(et==4?xu(this.j,this):(this.o=!1,Ri(this)))}else Qm(this.g),f==400&&0<B.indexOf("Unknown SID")?(this.s=3,ct(12)):(this.s=0,ct(13)),nr(this),ms(this)}}}catch{}finally{}};function lu(o){return o.g?o.u=="GET"&&o.L!=2&&o.j.Ca:!1}function Dm(o,u){var f=o.C,p=u.indexOf(`
`,f);return p==-1?ma:(f=Number(u.substring(f,p)),isNaN(f)?ou:(p+=1,p+f>u.length?ma:(u=u.slice(p,p+f),o.C=p+f,u)))}bn.prototype.cancel=function(){this.J=!0,nr(this)};function Ri(o){o.S=Date.now()+o.I,cu(o,o.I)}function cu(o,u){if(o.B!=null)throw Error("WatchDog timer not null");o.B=ps(_(o.ba,o),u)}function ya(o){o.B&&(l.clearTimeout(o.B),o.B=null)}bn.prototype.ba=function(){this.B=null;const o=Date.now();0<=o-this.S?(Vm(this.i,this.A),this.L!=2&&(ds(),ct(17)),nr(this),this.s=2,ms(this)):cu(this,this.S-o)};function ms(o){o.j.G==0||o.J||xu(o.j,o)}function nr(o){ya(o);var u=o.M;u&&typeof u.ma=="function"&&u.ma(),o.M=null,hs(o.U),o.g&&(u=o.g,o.g=null,u.abort(),u.ma())}function va(o,u){try{var f=o.j;if(f.G!=0&&(f.g==o||Ea(f.h,o))){if(!o.K&&Ea(f.h,o)&&f.G==3){try{var p=f.Da.g.parse(u)}catch{p=null}if(Array.isArray(p)&&p.length==3){var R=p;if(R[0]==0){e:if(!f.u){if(f.g)if(f.g.F+3e3<o.F)Mi(f),Oi(f);else break e;Aa(f),ct(18)}}else f.za=R[1],0<f.za-f.T&&37500>R[2]&&f.F&&f.v==0&&!f.C&&(f.C=ps(_(f.Za,f),6e3));if(1>=fu(f.h)&&f.ca){try{f.ca()}catch{}f.ca=void 0}}else sr(f,11)}else if((o.K||f.g==o)&&Mi(f),!$(u))for(R=f.Da.g.parse(u),u=0;u<R.length;u++){let _e=R[u];if(f.T=_e[0],_e=_e[1],f.G==2)if(_e[0]=="c"){f.K=_e[1],f.ia=_e[2];const Ze=_e[3];Ze!=null&&(f.la=Ze,f.j.info("VER="+f.la));const et=_e[4];et!=null&&(f.Aa=et,f.j.info("SVER="+f.Aa));const Pr=_e[5];Pr!=null&&typeof Pr=="number"&&0<Pr&&(p=1.5*Pr,f.L=p,f.j.info("backChannelRequestTimeoutMs_="+p)),p=f;const Pt=o.g;if(Pt){const Fi=Pt.g?Pt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Fi){var P=p.h;P.g||Fi.indexOf("spdy")==-1&&Fi.indexOf("quic")==-1&&Fi.indexOf("h2")==-1||(P.j=P.l,P.g=new Set,P.h&&(Ta(P,P.h),P.h=null))}if(p.D){const Sa=Pt.g?Pt.g.getResponseHeader("X-HTTP-Session-Id"):null;Sa&&(p.ya=Sa,Pe(p.I,p.D,Sa))}}f.G=3,f.l&&f.l.ua(),f.ba&&(f.R=Date.now()-o.F,f.j.info("Handshake RTT: "+f.R+"ms")),p=f;var B=o;if(p.qa=Fu(p,p.J?p.ia:null,p.W),B.K){du(p.h,B);var Ae=B,Ge=p.L;Ge&&(Ae.I=Ge),Ae.B&&(ya(Ae),Ri(Ae)),p.g=B}else Nu(p);0<f.i.length&&xi(f)}else _e[0]!="stop"&&_e[0]!="close"||sr(f,7);else f.G==3&&(_e[0]=="stop"||_e[0]=="close"?_e[0]=="stop"?sr(f,7):wa(f):_e[0]!="noop"&&f.l&&f.l.ta(_e),f.v=0)}}ds(4)}catch{}}var Nm=class{constructor(o,u){this.g=o,this.map=u}};function uu(o){this.l=o||10,l.PerformanceNavigationTiming?(o=l.performance.getEntriesByType("navigation"),o=0<o.length&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function hu(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function fu(o){return o.h?1:o.g?o.g.size:0}function Ea(o,u){return o.h?o.h==u:o.g?o.g.has(u):!1}function Ta(o,u){o.g?o.g.add(u):o.h=u}function du(o,u){o.h&&o.h==u?o.h=null:o.g&&o.g.has(u)&&o.g.delete(u)}uu.prototype.cancel=function(){if(this.i=pu(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function pu(o){if(o.h!=null)return o.i.concat(o.h.D);if(o.g!=null&&o.g.size!==0){let u=o.i;for(const f of o.g.values())u=u.concat(f.D);return u}return D(o.i)}function Om(o){if(o.V&&typeof o.V=="function")return o.V();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(c(o)){for(var u=[],f=o.length,p=0;p<f;p++)u.push(o[p]);return u}u=[],f=0;for(p in o)u[f++]=o[p];return u}function xm(o){if(o.na&&typeof o.na=="function")return o.na();if(!o.V||typeof o.V!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(c(o)||typeof o=="string"){var u=[];o=o.length;for(var f=0;f<o;f++)u.push(f);return u}u=[],f=0;for(const p in o)u[f++]=p;return u}}}function gu(o,u){if(o.forEach&&typeof o.forEach=="function")o.forEach(u,void 0);else if(c(o)||typeof o=="string")Array.prototype.forEach.call(o,u,void 0);else for(var f=xm(o),p=Om(o),R=p.length,P=0;P<R;P++)u.call(void 0,p[P],f&&f[P],o)}var mu=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Mm(o,u){if(o){o=o.split("&");for(var f=0;f<o.length;f++){var p=o[f].indexOf("="),R=null;if(0<=p){var P=o[f].substring(0,p);R=o[f].substring(p+1)}else P=o[f];u(P,R?decodeURIComponent(R.replace(/\+/g," ")):"")}}}function rr(o){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,o instanceof rr){this.h=o.h,Pi(this,o.j),this.o=o.o,this.g=o.g,Ci(this,o.s),this.l=o.l;var u=o.i,f=new vs;f.i=u.i,u.g&&(f.g=new Map(u.g),f.h=u.h),_u(this,f),this.m=o.m}else o&&(u=String(o).match(mu))?(this.h=!1,Pi(this,u[1]||"",!0),this.o=_s(u[2]||""),this.g=_s(u[3]||"",!0),Ci(this,u[4]),this.l=_s(u[5]||"",!0),_u(this,u[6]||"",!0),this.m=_s(u[7]||"")):(this.h=!1,this.i=new vs(null,this.h))}rr.prototype.toString=function(){var o=[],u=this.j;u&&o.push(ys(u,yu,!0),":");var f=this.g;return(f||u=="file")&&(o.push("//"),(u=this.o)&&o.push(ys(u,yu,!0),"@"),o.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f=this.s,f!=null&&o.push(":",String(f))),(f=this.l)&&(this.g&&f.charAt(0)!="/"&&o.push("/"),o.push(ys(f,f.charAt(0)=="/"?Um:Fm,!0))),(f=this.i.toString())&&o.push("?",f),(f=this.m)&&o.push("#",ys(f,jm)),o.join("")};function rn(o){return new rr(o)}function Pi(o,u,f){o.j=f?_s(u,!0):u,o.j&&(o.j=o.j.replace(/:$/,""))}function Ci(o,u){if(u){if(u=Number(u),isNaN(u)||0>u)throw Error("Bad port number "+u);o.s=u}else o.s=null}function _u(o,u,f){u instanceof vs?(o.i=u,$m(o.i,o.h)):(f||(u=ys(u,Bm)),o.i=new vs(u,o.h))}function Pe(o,u,f){o.i.set(u,f)}function Vi(o){return Pe(o,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),o}function _s(o,u){return o?u?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function ys(o,u,f){return typeof o=="string"?(o=encodeURI(o).replace(u,Lm),f&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Lm(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var yu=/[#\/\?@]/g,Fm=/[#\?:]/g,Um=/[#\?]/g,Bm=/[#\?@]/g,jm=/#/g;function vs(o,u){this.h=this.g=null,this.i=o||null,this.j=!!u}function Sn(o){o.g||(o.g=new Map,o.h=0,o.i&&Mm(o.i,function(u,f){o.add(decodeURIComponent(u.replace(/\+/g," ")),f)}))}n=vs.prototype,n.add=function(o,u){Sn(this),this.i=null,o=Sr(this,o);var f=this.g.get(o);return f||this.g.set(o,f=[]),f.push(u),this.h+=1,this};function vu(o,u){Sn(o),u=Sr(o,u),o.g.has(u)&&(o.i=null,o.h-=o.g.get(u).length,o.g.delete(u))}function Eu(o,u){return Sn(o),u=Sr(o,u),o.g.has(u)}n.forEach=function(o,u){Sn(this),this.g.forEach(function(f,p){f.forEach(function(R){o.call(u,R,p,this)},this)},this)},n.na=function(){Sn(this);const o=Array.from(this.g.values()),u=Array.from(this.g.keys()),f=[];for(let p=0;p<u.length;p++){const R=o[p];for(let P=0;P<R.length;P++)f.push(u[p])}return f},n.V=function(o){Sn(this);let u=[];if(typeof o=="string")Eu(this,o)&&(u=u.concat(this.g.get(Sr(this,o))));else{o=Array.from(this.g.values());for(let f=0;f<o.length;f++)u=u.concat(o[f])}return u},n.set=function(o,u){return Sn(this),this.i=null,o=Sr(this,o),Eu(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[u]),this.h+=1,this},n.get=function(o,u){return o?(o=this.V(o),0<o.length?String(o[0]):u):u};function Tu(o,u,f){vu(o,u),0<f.length&&(o.i=null,o.g.set(Sr(o,u),D(f)),o.h+=f.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],u=Array.from(this.g.keys());for(var f=0;f<u.length;f++){var p=u[f];const P=encodeURIComponent(String(p)),B=this.V(p);for(p=0;p<B.length;p++){var R=P;B[p]!==""&&(R+="="+encodeURIComponent(String(B[p]))),o.push(R)}}return this.i=o.join("&")};function Sr(o,u){return u=String(u),o.j&&(u=u.toLowerCase()),u}function $m(o,u){u&&!o.j&&(Sn(o),o.i=null,o.g.forEach(function(f,p){var R=p.toLowerCase();p!=R&&(vu(this,p),Tu(this,R,f))},o)),o.j=u}function qm(o,u){const f=new gs;if(l.Image){const p=new Image;p.onload=S(Rn,f,"TestLoadImage: loaded",!0,u,p),p.onerror=S(Rn,f,"TestLoadImage: error",!1,u,p),p.onabort=S(Rn,f,"TestLoadImage: abort",!1,u,p),p.ontimeout=S(Rn,f,"TestLoadImage: timeout",!1,u,p),l.setTimeout(function(){p.ontimeout&&p.ontimeout()},1e4),p.src=o}else u(!1)}function Hm(o,u){const f=new gs,p=new AbortController,R=setTimeout(()=>{p.abort(),Rn(f,"TestPingServer: timeout",!1,u)},1e4);fetch(o,{signal:p.signal}).then(P=>{clearTimeout(R),P.ok?Rn(f,"TestPingServer: ok",!0,u):Rn(f,"TestPingServer: server error",!1,u)}).catch(()=>{clearTimeout(R),Rn(f,"TestPingServer: error",!1,u)})}function Rn(o,u,f,p,R){try{R&&(R.onload=null,R.onerror=null,R.onabort=null,R.ontimeout=null),p(f)}catch{}}function zm(){this.g=new wi}function Wm(o,u,f){const p=f||"";try{gu(o,function(R,P){let B=R;h(R)&&(B=Ke(R)),u.push(p+P+"="+encodeURIComponent(B))})}catch(R){throw u.push(p+"type="+encodeURIComponent("_badmap")),R}}function ki(o){this.l=o.Ub||null,this.j=o.eb||!1}V(ki,Ar),ki.prototype.g=function(){return new Di(this.l,this.j)},ki.prototype.i=(function(o){return function(){return o}})({});function Di(o,u){ee.call(this),this.D=o,this.o=u,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}V(Di,ee),n=Di.prototype,n.open=function(o,u){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=o,this.A=u,this.readyState=1,Ts(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const u={headers:this.u,method:this.B,credentials:this.m,cache:void 0};o&&(u.body=o),(this.D||l).fetch(new Request(this.A,u)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Es(this)),this.readyState=0},n.Sa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ts(this)),this.g&&(this.readyState=3,Ts(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Iu(this)}else o.text().then(this.Ra.bind(this),this.ga.bind(this))};function Iu(o){o.j.read().then(o.Pa.bind(o)).catch(o.ga.bind(o))}n.Pa=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var u=o.value?o.value:new Uint8Array(0);(u=this.v.decode(u,{stream:!o.done}))&&(this.response=this.responseText+=u)}o.done?Es(this):Ts(this),this.readyState==3&&Iu(this)}},n.Ra=function(o){this.g&&(this.response=this.responseText=o,Es(this))},n.Qa=function(o){this.g&&(this.response=o,Es(this))},n.ga=function(){this.g&&Es(this)};function Es(o){o.readyState=4,o.l=null,o.j=null,o.v=null,Ts(o)}n.setRequestHeader=function(o,u){this.u.append(o,u)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],u=this.h.entries();for(var f=u.next();!f.done;)f=f.value,o.push(f[0]+": "+f[1]),f=u.next();return o.join(`\r
`)};function Ts(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(Di.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function wu(o){let u="";return ge(o,function(f,p){u+=p,u+=":",u+=f,u+=`\r
`}),u}function Ia(o,u,f){e:{for(p in f){var p=!1;break e}p=!0}p||(f=wu(f),typeof o=="string"?f!=null&&encodeURIComponent(String(f)):Pe(o,u,f))}function Ne(o){ee.call(this),this.headers=new Map,this.o=o||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}V(Ne,ee);var Km=/^https?$/i,Gm=["POST","PUT"];n=Ne.prototype,n.Ha=function(o){this.J=o},n.ea=function(o,u,f,p){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);u=u?u.toUpperCase():"GET",this.D=o,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():ga.g(),this.v=this.o?Yc(this.o):Yc(ga),this.g.onreadystatechange=_(this.Ea,this);try{this.B=!0,this.g.open(u,String(o),!0),this.B=!1}catch(P){Au(this,P);return}if(o=f||"",f=new Map(this.headers),p)if(Object.getPrototypeOf(p)===Object.prototype)for(var R in p)f.set(R,p[R]);else if(typeof p.keys=="function"&&typeof p.get=="function")for(const P of p.keys())f.set(P,p.get(P));else throw Error("Unknown input type for opt_headers: "+String(p));p=Array.from(f.keys()).find(P=>P.toLowerCase()=="content-type"),R=l.FormData&&o instanceof l.FormData,!(0<=Array.prototype.indexOf.call(Gm,u,void 0))||p||R||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[P,B]of f)this.g.setRequestHeader(P,B);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ru(this),this.u=!0,this.g.send(o),this.u=!1}catch(P){Au(this,P)}};function Au(o,u){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=u,o.m=5,bu(o),Ni(o)}function bu(o){o.A||(o.A=!0,oe(o,"complete"),oe(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=o||7,oe(this,"complete"),oe(this,"abort"),Ni(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Ni(this,!0)),Ne.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Su(this):this.bb())},n.bb=function(){Su(this)};function Su(o){if(o.h&&typeof a<"u"&&(!o.v[1]||sn(o)!=4||o.Z()!=2)){if(o.u&&sn(o)==4)Ve(o.Ea,0,o);else if(oe(o,"readystatechange"),sn(o)==4){o.h=!1;try{const B=o.Z();e:switch(B){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var u=!0;break e;default:u=!1}var f;if(!(f=u)){var p;if(p=B===0){var R=String(o.D).match(mu)[1]||null;!R&&l.self&&l.self.location&&(R=l.self.location.protocol.slice(0,-1)),p=!Km.test(R?R.toLowerCase():"")}f=p}if(f)oe(o,"complete"),oe(o,"success");else{o.m=6;try{var P=2<sn(o)?o.g.statusText:""}catch{P=""}o.l=P+" ["+o.Z()+"]",bu(o)}}finally{Ni(o)}}}}function Ni(o,u){if(o.g){Ru(o);const f=o.g,p=o.v[0]?()=>{}:null;o.g=null,o.v=null,u||oe(o,"ready");try{f.onreadystatechange=p}catch{}}}function Ru(o){o.I&&(l.clearTimeout(o.I),o.I=null)}n.isActive=function(){return!!this.g};function sn(o){return o.g?o.g.readyState:0}n.Z=function(){try{return 2<sn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(o){if(this.g){var u=this.g.responseText;return o&&u.indexOf(o)==0&&(u=u.substring(o.length)),It(u)}};function Pu(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.H){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function Qm(o){const u={};o=(o.g&&2<=sn(o)&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let p=0;p<o.length;p++){if($(o[p]))continue;var f=b(o[p]);const R=f[0];if(f=f[1],typeof f!="string")continue;f=f.trim();const P=u[R]||[];u[R]=P,P.push(f)}w(u,function(p){return p.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Is(o,u,f){return f&&f.internalChannelParams&&f.internalChannelParams[o]||u}function Cu(o){this.Aa=0,this.i=[],this.j=new gs,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Is("failFast",!1,o),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Is("baseRetryDelayMs",5e3,o),this.cb=Is("retryDelaySeedMs",1e4,o),this.Wa=Is("forwardChannelMaxRetries",2,o),this.wa=Is("forwardChannelRequestTimeoutMs",2e4,o),this.pa=o&&o.xmlHttpFactory||void 0,this.Xa=o&&o.Tb||void 0,this.Ca=o&&o.useFetchStreams||!1,this.L=void 0,this.J=o&&o.supportsCrossDomainXhr||!1,this.K="",this.h=new uu(o&&o.concurrentRequestLimit),this.Da=new zm,this.P=o&&o.fastHandshake||!1,this.O=o&&o.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=o&&o.Rb||!1,o&&o.xa&&this.j.xa(),o&&o.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&o&&o.detectBufferingProxy||!1,this.ja=void 0,o&&o.longPollingTimeout&&0<o.longPollingTimeout&&(this.ja=o.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Cu.prototype,n.la=8,n.G=1,n.connect=function(o,u,f,p){ct(0),this.W=o,this.H=u||{},f&&p!==void 0&&(this.H.OSID=f,this.H.OAID=p),this.F=this.X,this.I=Fu(this,null,this.W),xi(this)};function wa(o){if(Vu(o),o.G==3){var u=o.U++,f=rn(o.I);if(Pe(f,"SID",o.K),Pe(f,"RID",u),Pe(f,"TYPE","terminate"),ws(o,f),u=new bn(o,o.j,u),u.L=2,u.v=Vi(rn(f)),f=!1,l.navigator&&l.navigator.sendBeacon)try{f=l.navigator.sendBeacon(u.v.toString(),"")}catch{}!f&&l.Image&&(new Image().src=u.v,f=!0),f||(u.g=Uu(u.j,null),u.g.ea(u.v)),u.F=Date.now(),Ri(u)}Lu(o)}function Oi(o){o.g&&(ba(o),o.g.cancel(),o.g=null)}function Vu(o){Oi(o),o.u&&(l.clearTimeout(o.u),o.u=null),Mi(o),o.h.cancel(),o.s&&(typeof o.s=="number"&&l.clearTimeout(o.s),o.s=null)}function xi(o){if(!hu(o.h)&&!o.s){o.s=!0;var u=o.Ga;Ie||Yn(),me||(Ie(),me=!0),Rt.add(u,o),o.B=0}}function Jm(o,u){return fu(o.h)>=o.h.j-(o.s?1:0)?!1:o.s?(o.i=u.D.concat(o.i),!0):o.G==1||o.G==2||o.B>=(o.Va?0:o.Wa)?!1:(o.s=ps(_(o.Ga,o,u),Mu(o,o.B)),o.B++,!0)}n.Ga=function(o){if(this.s)if(this.s=null,this.G==1){if(!o){this.U=Math.floor(1e5*Math.random()),o=this.U++;const R=new bn(this,this.j,o);let P=this.o;if(this.S&&(P?(P=y(P),I(P,this.S)):P=this.S),this.m!==null||this.O||(R.H=P,P=null),this.P)e:{for(var u=0,f=0;f<this.i.length;f++){t:{var p=this.i[f];if("__data__"in p.map&&(p=p.map.__data__,typeof p=="string")){p=p.length;break t}p=void 0}if(p===void 0)break;if(u+=p,4096<u){u=f;break e}if(u===4096||f===this.i.length-1){u=f+1;break e}}u=1e3}else u=1e3;u=Du(this,R,u),f=rn(this.I),Pe(f,"RID",o),Pe(f,"CVER",22),this.D&&Pe(f,"X-HTTP-Session-Id",this.D),ws(this,f),P&&(this.O?u="headers="+encodeURIComponent(String(wu(P)))+"&"+u:this.m&&Ia(f,this.m,P)),Ta(this.h,R),this.Ua&&Pe(f,"TYPE","init"),this.P?(Pe(f,"$req",u),Pe(f,"SID","null"),R.T=!0,_a(R,f,null)):_a(R,f,u),this.G=2}}else this.G==3&&(o?ku(this,o):this.i.length==0||hu(this.h)||ku(this))};function ku(o,u){var f;u?f=u.l:f=o.U++;const p=rn(o.I);Pe(p,"SID",o.K),Pe(p,"RID",f),Pe(p,"AID",o.T),ws(o,p),o.m&&o.o&&Ia(p,o.m,o.o),f=new bn(o,o.j,f,o.B+1),o.m===null&&(f.H=o.o),u&&(o.i=u.D.concat(o.i)),u=Du(o,f,1e3),f.I=Math.round(.5*o.wa)+Math.round(.5*o.wa*Math.random()),Ta(o.h,f),_a(f,p,u)}function ws(o,u){o.H&&ge(o.H,function(f,p){Pe(u,p,f)}),o.l&&gu({},function(f,p){Pe(u,p,f)})}function Du(o,u,f){f=Math.min(o.i.length,f);var p=o.l?_(o.l.Na,o.l,o):null;e:{var R=o.i;let P=-1;for(;;){const B=["count="+f];P==-1?0<f?(P=R[0].g,B.push("ofs="+P)):P=0:B.push("ofs="+P);let Ae=!0;for(let Ge=0;Ge<f;Ge++){let _e=R[Ge].g;const Ze=R[Ge].map;if(_e-=P,0>_e)P=Math.max(0,R[Ge].g-100),Ae=!1;else try{Wm(Ze,B,"req"+_e+"_")}catch{p&&p(Ze)}}if(Ae){p=B.join("&");break e}}}return o=o.i.splice(0,f),u.D=o,p}function Nu(o){if(!o.g&&!o.u){o.Y=1;var u=o.Fa;Ie||Yn(),me||(Ie(),me=!0),Rt.add(u,o),o.v=0}}function Aa(o){return o.g||o.u||3<=o.v?!1:(o.Y++,o.u=ps(_(o.Fa,o),Mu(o,o.v)),o.v++,!0)}n.Fa=function(){if(this.u=null,Ou(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var o=2*this.R;this.j.info("BP detection timer enabled: "+o),this.A=ps(_(this.ab,this),o)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,ct(10),Oi(this),Ou(this))};function ba(o){o.A!=null&&(l.clearTimeout(o.A),o.A=null)}function Ou(o){o.g=new bn(o,o.j,"rpc",o.Y),o.m===null&&(o.g.H=o.o),o.g.O=0;var u=rn(o.qa);Pe(u,"RID","rpc"),Pe(u,"SID",o.K),Pe(u,"AID",o.T),Pe(u,"CI",o.F?"0":"1"),!o.F&&o.ja&&Pe(u,"TO",o.ja),Pe(u,"TYPE","xmlhttp"),ws(o,u),o.m&&o.o&&Ia(u,o.m,o.o),o.L&&(o.g.I=o.L);var f=o.g;o=o.ia,f.L=1,f.v=Vi(rn(u)),f.m=null,f.P=!0,au(f,o)}n.Za=function(){this.C!=null&&(this.C=null,Oi(this),Aa(this),ct(19))};function Mi(o){o.C!=null&&(l.clearTimeout(o.C),o.C=null)}function xu(o,u){var f=null;if(o.g==u){Mi(o),ba(o),o.g=null;var p=2}else if(Ea(o.h,u))f=u.D,du(o.h,u),p=1;else return;if(o.G!=0){if(u.o)if(p==1){f=u.m?u.m.length:0,u=Date.now()-u.F;var R=o.B;p=Ai(),oe(p,new ru(p,f)),xi(o)}else Nu(o);else if(R=u.s,R==3||R==0&&0<u.X||!(p==1&&Jm(o,u)||p==2&&Aa(o)))switch(f&&0<f.length&&(u=o.h,u.i=u.i.concat(f)),R){case 1:sr(o,5);break;case 4:sr(o,10);break;case 3:sr(o,6);break;default:sr(o,2)}}}function Mu(o,u){let f=o.Ta+Math.floor(Math.random()*o.cb);return o.isActive()||(f*=2),f*u}function sr(o,u){if(o.j.info("Error code "+u),u==2){var f=_(o.fb,o),p=o.Xa;const R=!p;p=new rr(p||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Pi(p,"https"),Vi(p),R?qm(p.toString(),f):Hm(p.toString(),f)}else ct(2);o.G=0,o.l&&o.l.sa(u),Lu(o),Vu(o)}n.fb=function(o){o?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))};function Lu(o){if(o.G=0,o.ka=[],o.l){const u=pu(o.h);(u.length!=0||o.i.length!=0)&&(O(o.ka,u),O(o.ka,o.i),o.h.i.length=0,D(o.i),o.i.length=0),o.l.ra()}}function Fu(o,u,f){var p=f instanceof rr?rn(f):new rr(f);if(p.g!="")u&&(p.g=u+"."+p.g),Ci(p,p.s);else{var R=l.location;p=R.protocol,u=u?u+"."+R.hostname:R.hostname,R=+R.port;var P=new rr(null);p&&Pi(P,p),u&&(P.g=u),R&&Ci(P,R),f&&(P.l=f),p=P}return f=o.D,u=o.ya,f&&u&&Pe(p,f,u),Pe(p,"VER",o.la),ws(o,p),p}function Uu(o,u,f){if(u&&!o.J)throw Error("Can't create secondary domain capable XhrIo object.");return u=o.Ca&&!o.pa?new Ne(new ki({eb:f})):new Ne(o.pa),u.Ha(o.J),u}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Bu(){}n=Bu.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function Li(){}Li.prototype.g=function(o,u){return new _t(o,u)};function _t(o,u){ee.call(this),this.g=new Cu(u),this.l=o,this.h=u&&u.messageUrlParams||null,o=u&&u.messageHeaders||null,u&&u.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=u&&u.initMessageHeaders||null,u&&u.messageContentType&&(o?o["X-WebChannel-Content-Type"]=u.messageContentType:o={"X-WebChannel-Content-Type":u.messageContentType}),u&&u.va&&(o?o["X-WebChannel-Client-Profile"]=u.va:o={"X-WebChannel-Client-Profile":u.va}),this.g.S=o,(o=u&&u.Sb)&&!$(o)&&(this.g.m=o),this.v=u&&u.supportsCrossDomainXhr||!1,this.u=u&&u.sendRawJson||!1,(u=u&&u.httpSessionIdParam)&&!$(u)&&(this.g.D=u,o=this.h,o!==null&&u in o&&(o=this.h,u in o&&delete o[u])),this.j=new Rr(this)}V(_t,ee),_t.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},_t.prototype.close=function(){wa(this.g)},_t.prototype.o=function(o){var u=this.g;if(typeof o=="string"){var f={};f.__data__=o,o=f}else this.u&&(f={},f.__data__=Ke(o),o=f);u.i.push(new Nm(u.Ya++,o)),u.G==3&&xi(u)},_t.prototype.N=function(){this.g.l=null,delete this.j,wa(this.g),delete this.g,_t.aa.N.call(this)};function ju(o){da.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var u=o.__sm__;if(u){e:{for(const f in u){o=f;break e}o=void 0}(this.i=o)&&(o=this.i,u=u!==null&&o in u?u[o]:void 0),this.data=u}else this.data=o}V(ju,da);function $u(){pa.call(this),this.status=1}V($u,pa);function Rr(o){this.g=o}V(Rr,Bu),Rr.prototype.ua=function(){oe(this.g,"a")},Rr.prototype.ta=function(o){oe(this.g,new ju(o))},Rr.prototype.sa=function(o){oe(this.g,new $u)},Rr.prototype.ra=function(){oe(this.g,"b")},Li.prototype.createWebChannel=Li.prototype.g,_t.prototype.send=_t.prototype.o,_t.prototype.open=_t.prototype.m,_t.prototype.close=_t.prototype.close,ng=function(){return new Li},tg=function(){return Ai()},eg=tr,ml={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},bi.NO_ERROR=0,bi.TIMEOUT=8,bi.HTTP_ERROR=6,so=bi,su.COMPLETE="complete",Zp=su,Zc.EventType=fs,fs.OPEN="a",fs.CLOSE="b",fs.ERROR="c",fs.MESSAGE="d",ee.prototype.listen=ee.prototype.K,Cs=Zc,Ne.prototype.listenOnce=Ne.prototype.L,Ne.prototype.getLastError=Ne.prototype.Ka,Ne.prototype.getLastErrorCode=Ne.prototype.Ba,Ne.prototype.getStatus=Ne.prototype.Z,Ne.prototype.getResponseJson=Ne.prototype.Oa,Ne.prototype.getResponseText=Ne.prototype.oa,Ne.prototype.send=Ne.prototype.ea,Ne.prototype.setWithCredentials=Ne.prototype.Ha,Yp=Ne}).apply(typeof qi<"u"?qi:typeof self<"u"?self:typeof window<"u"?window:{});const Xh="@firebase/firestore",Yh="4.8.0";/**
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
 */class rt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}rt.UNAUTHENTICATED=new rt(null),rt.GOOGLE_CREDENTIALS=new rt("google-credentials-uid"),rt.FIRST_PARTY=new rt("first-party-uid"),rt.MOCK_USER=new rt("mock-user");/**
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
 */const vr=new ec("@firebase/firestore");function Dr(){return vr.logLevel}function K(n,...e){if(vr.logLevel<=he.DEBUG){const t=e.map(pc);vr.debug(`Firestore (${ss}): ${n}`,...t)}}function En(n,...e){if(vr.logLevel<=he.ERROR){const t=e.map(pc);vr.error(`Firestore (${ss}): ${n}`,...t)}}function $n(n,...e){if(vr.logLevel<=he.WARN){const t=e.map(pc);vr.warn(`Firestore (${ss}): ${n}`,...t)}}function pc(n){if(typeof n=="string")return n;try{/**
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
 */function te(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,rg(n,r,t)}function rg(n,e,t){let r=`FIRESTORE (${ss}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw En(r),new Error(r)}function Te(n,e,t,r){let s="Unexpected state";typeof t=="string"?s=t:r=t,n||rg(e,s,r)}function ie(n,e){return n}/**
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
 */const k={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class W extends wn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class pr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
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
 */class sg{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class hw{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(rt.UNAUTHENTICATED)))}shutdown(){}}class fw{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class dw{constructor(e){this.t=e,this.currentUser=rt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Te(this.o===void 0,42304);let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new pr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new pr,e.enqueueRetryable((()=>s(this.currentUser)))};const a=()=>{const c=i;e.enqueueRetryable((async()=>{await c.promise,await s(this.currentUser)}))},l=c=>{K("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.o&&(this.auth.addAuthTokenListener(this.o),a())};this.t.onInit((c=>l(c))),setTimeout((()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?l(c):(K("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new pr)}}),0),a()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(K("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Te(typeof r.accessToken=="string",31837,{l:r}),new sg(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Te(e===null||typeof e=="string",2055,{h:e}),new rt(e)}}class pw{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=rt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class gw{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new pw(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(rt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Zh{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class mw{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Vt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Te(this.o===void 0,3512);const r=i=>{i.error!=null&&K("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const a=i.token!==this.m;return this.m=i.token,K("FirebaseAppCheckTokenProvider",`Received ${a?"new":"existing"} token.`),a?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable((()=>r(i)))};const s=i=>{K("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((i=>s(i))),setTimeout((()=>{if(!this.appCheck){const i=this.V.getImmediate({optional:!0});i?s(i):K("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new Zh(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Te(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new Zh(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function _w(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */function ig(){return new TextEncoder}/**
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
 */class gc{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const s=_w(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%62))}return r}}function ce(n,e){return n<e?-1:n>e?1:0}function _l(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=n.codePointAt(t),s=e.codePointAt(t);if(r!==s){if(r<128&&s<128)return ce(r,s);{const i=ig(),a=yw(i.encode(ef(n,t)),i.encode(ef(e,t)));return a!==0?a:ce(r,s)}}t+=r>65535?2:1}return ce(n.length,e.length)}function ef(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function yw(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return ce(n[t],e[t]);return ce(n.length,e.length)}function Qr(n,e,t){return n.length===e.length&&n.every(((r,s)=>t(r,e[s])))}/**
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
 */const tf="__name__";class jt{constructor(e,t,r){t===void 0?t=0:t>e.length&&te(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&te(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return jt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof jt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=jt.compareSegments(e.get(s),t.get(s));if(i!==0)return i}return ce(e.length,t.length)}static compareSegments(e,t){const r=jt.isNumericId(e),s=jt.isNumericId(t);return r&&!s?-1:!r&&s?1:r&&s?jt.extractNumericId(e).compare(jt.extractNumericId(t)):_l(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Fn.fromString(e.substring(4,e.length-2))}}class Re extends jt{construct(e,t,r){return new Re(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new W(k.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((s=>s.length>0)))}return new Re(t)}static emptyPath(){return new Re([])}}const vw=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Je extends jt{construct(e,t,r){return new Je(e,t,r)}static isValidIdentifier(e){return vw.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Je.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===tf}static keyField(){return new Je([tf])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new W(k.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let a=!1;for(;s<e.length;){const l=e[s];if(l==="\\"){if(s+1===e.length)throw new W(k.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new W(k.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else l==="`"?(a=!a,s++):l!=="."||a?(r+=l,s++):(i(),s++)}if(i(),a)throw new W(k.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Je(t)}static emptyPath(){return new Je([])}}/**
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
 */class X{constructor(e){this.path=e}static fromPath(e){return new X(Re.fromString(e))}static fromName(e){return new X(Re.fromString(e).popFirst(5))}static empty(){return new X(Re.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Re.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return Re.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new X(new Re(e.slice()))}}/**
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
 */function og(n,e,t){if(!t)throw new W(k.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ew(n,e,t,r){if(e===!0&&r===!0)throw new W(k.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function nf(n){if(!X.isDocumentKey(n))throw new W(k.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function rf(n){if(X.isDocumentKey(n))throw new W(k.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function ag(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Jo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":te(12329,{type:typeof n})}function Un(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new W(k.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Jo(n);throw new W(k.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
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
 */function Ue(n,e){const t={typeString:n};return e&&(t.value=e),t}function mi(n,e){if(!ag(n))throw new W(k.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const s=e[r].typeString,i="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const a=n[r];if(s&&typeof a!==s){t=`JSON field '${r}' must be a ${s}.`;break}if(i!==void 0&&a!==i.value){t=`Expected '${r}' field to equal '${i.value}'`;break}}if(t)throw new W(k.INVALID_ARGUMENT,t);return!0}/**
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
 */const sf=-62135596800,of=1e6;class Ce{static now(){return Ce.fromMillis(Date.now())}static fromDate(e){return Ce.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*of);return new Ce(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new W(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new W(k.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<sf)throw new W(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new W(k.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/of}_compareTo(e){return this.seconds===e.seconds?ce(this.nanoseconds,e.nanoseconds):ce(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Ce._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(mi(e,Ce._jsonSchema))return new Ce(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-sf;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Ce._jsonSchemaVersion="firestore/timestamp/1.0",Ce._jsonSchema={type:Ue("string",Ce._jsonSchemaVersion),seconds:Ue("number"),nanoseconds:Ue("number")};/**
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
 */class re{static fromTimestamp(e){return new re(e)}static min(){return new re(new Ce(0,0))}static max(){return new re(new Ce(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ei=-1;function Tw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=re.fromTimestamp(r===1e9?new Ce(t+1,0):new Ce(t,r));return new qn(s,X.empty(),e)}function Iw(n){return new qn(n.readTime,n.key,ei)}class qn{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new qn(re.min(),X.empty(),ei)}static max(){return new qn(re.max(),X.empty(),ei)}}function ww(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=X.comparator(n.documentKey,e.documentKey),t!==0?t:ce(n.largestBatchId,e.largestBatchId))}/**
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
 */const Aw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class bw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
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
 */async function is(n){if(n.code!==k.FAILED_PRECONDITION||n.message!==Aw)throw n;K("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class N{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&te(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new N(((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof N?t:N.resolve(t)}catch(t){return N.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):N.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):N.reject(t)}static resolve(e){return new N(((t,r)=>{t(e)}))}static reject(e){return new N(((t,r)=>{r(e)}))}static waitFor(e){return new N(((t,r)=>{let s=0,i=0,a=!1;e.forEach((l=>{++s,l.next((()=>{++i,a&&i===s&&t()}),(c=>r(c)))})),a=!0,i===s&&t()}))}static or(e){let t=N.resolve(!1);for(const r of e)t=t.next((s=>s?N.resolve(s):r()));return t}static forEach(e,t){const r=[];return e.forEach(((s,i)=>{r.push(t.call(this,s,i))})),this.waitFor(r)}static mapArray(e,t){return new N(((r,s)=>{const i=e.length,a=new Array(i);let l=0;for(let c=0;c<i;c++){const h=c;t(e[h]).next((d=>{a[h]=d,++l,l===i&&r(a)}),(d=>s(d)))}}))}static doWhile(e,t){return new N(((r,s)=>{const i=()=>{e()===!0?t().next((()=>{i()}),s):r()};i()}))}}function Sw(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function os(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Xo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this._e(r),this.ae=r=>t.writeSequenceNumber(r))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}Xo.ue=-1;/**
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
 */const mc=-1;function Yo(n){return n==null}function bo(n){return n===0&&1/n==-1/0}function Rw(n){return typeof n=="number"&&Number.isInteger(n)&&!bo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */const lg="";function Pw(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=af(e)),e=Cw(n.get(t),e);return af(e)}function Cw(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case lg:t+="";break;default:t+=i}}return t}function af(n){return n+lg+""}/**
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
 */function lf(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Jn(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function cg(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class ke{constructor(e,t){this.comparator=e,this.root=t||Qe.EMPTY}insert(e,t){return new ke(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Qe.BLACK,null,null))}remove(e){return new ke(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Qe.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Hi(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Hi(this.root,e,this.comparator,!1)}getReverseIterator(){return new Hi(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Hi(this.root,e,this.comparator,!0)}}class Hi{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Qe{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??Qe.RED,this.left=s??Qe.EMPTY,this.right=i??Qe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new Qe(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Qe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Qe.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Qe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Qe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw te(43730,{key:this.key,value:this.value});if(this.right.isRed())throw te(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw te(27949);return e+(this.isRed()?0:1)}}Qe.EMPTY=null,Qe.RED=!0,Qe.BLACK=!1;Qe.EMPTY=new class{constructor(){this.size=0}get key(){throw te(57766)}get value(){throw te(16141)}get color(){throw te(16727)}get left(){throw te(29726)}get right(){throw te(36894)}copy(e,t,r,s,i){return this}insert(e,t,r){return new Qe(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class qe{constructor(e){this.comparator=e,this.data=new ke(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new cf(this.data.getIterator())}getIteratorFrom(e){return new cf(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof qe)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new qe(this.comparator);return t.data=e,t}}class cf{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Et{constructor(e){this.fields=e,e.sort(Je.comparator)}static empty(){return new Et([])}unionWith(e){let t=new qe(Je.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Et(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qr(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
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
 */class ug extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new ug("Invalid base64 string: "+i):i}})(e);return new Xe(t)}static fromUint8Array(e){const t=(function(s){let i="";for(let a=0;a<s.length;++a)i+=String.fromCharCode(s[a]);return i})(e);return new Xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let s=0;s<t.length;s++)r[s]=t.charCodeAt(s);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ce(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const Vw=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Hn(n){if(Te(!!n,39018),typeof n=="string"){let e=0;const t=Vw.exec(n);if(Te(!!t,46558,{timestamp:n}),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:xe(n.seconds),nanos:xe(n.nanos)}}function xe(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function zn(n){return typeof n=="string"?Xe.fromBase64String(n):Xe.fromUint8Array(n)}/**
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
 */const hg="server_timestamp",fg="__type__",dg="__previous_value__",pg="__local_write_time__";function _c(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[fg])===null||t===void 0?void 0:t.stringValue)===hg}function Zo(n){const e=n.mapValue.fields[dg];return _c(e)?Zo(e):e}function ti(n){const e=Hn(n.mapValue.fields[pg].timestampValue);return new Ce(e.seconds,e.nanos)}/**
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
 */class kw{constructor(e,t,r,s,i,a,l,c,h,d){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=a,this.autoDetectLongPolling=l,this.longPollingOptions=c,this.useFetchStreams=h,this.isUsingEmulator=d}}const So="(default)";class ni{constructor(e,t){this.projectId=e,this.database=t||So}static empty(){return new ni("","")}get isDefaultDatabase(){return this.database===So}isEqual(e){return e instanceof ni&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const gg="__type__",Dw="__max__",zi={mapValue:{}},mg="__vector__",Ro="value";function Wn(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?_c(n)?4:Ow(n)?9007199254740991:Nw(n)?10:11:te(28295,{value:n})}function en(n,e){if(n===e)return!0;const t=Wn(n);if(t!==Wn(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return ti(n).isEqual(ti(e));case 3:return(function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const a=Hn(s.timestampValue),l=Hn(i.timestampValue);return a.seconds===l.seconds&&a.nanos===l.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(s,i){return zn(s.bytesValue).isEqual(zn(i.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(s,i){return xe(s.geoPointValue.latitude)===xe(i.geoPointValue.latitude)&&xe(s.geoPointValue.longitude)===xe(i.geoPointValue.longitude)})(n,e);case 2:return(function(s,i){if("integerValue"in s&&"integerValue"in i)return xe(s.integerValue)===xe(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const a=xe(s.doubleValue),l=xe(i.doubleValue);return a===l?bo(a)===bo(l):isNaN(a)&&isNaN(l)}return!1})(n,e);case 9:return Qr(n.arrayValue.values||[],e.arrayValue.values||[],en);case 10:case 11:return(function(s,i){const a=s.mapValue.fields||{},l=i.mapValue.fields||{};if(lf(a)!==lf(l))return!1;for(const c in a)if(a.hasOwnProperty(c)&&(l[c]===void 0||!en(a[c],l[c])))return!1;return!0})(n,e);default:return te(52216,{left:n})}}function ri(n,e){return(n.values||[]).find((t=>en(t,e)))!==void 0}function Jr(n,e){if(n===e)return 0;const t=Wn(n),r=Wn(e);if(t!==r)return ce(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return ce(n.booleanValue,e.booleanValue);case 2:return(function(i,a){const l=xe(i.integerValue||i.doubleValue),c=xe(a.integerValue||a.doubleValue);return l<c?-1:l>c?1:l===c?0:isNaN(l)?isNaN(c)?0:-1:1})(n,e);case 3:return uf(n.timestampValue,e.timestampValue);case 4:return uf(ti(n),ti(e));case 5:return _l(n.stringValue,e.stringValue);case 6:return(function(i,a){const l=zn(i),c=zn(a);return l.compareTo(c)})(n.bytesValue,e.bytesValue);case 7:return(function(i,a){const l=i.split("/"),c=a.split("/");for(let h=0;h<l.length&&h<c.length;h++){const d=ce(l[h],c[h]);if(d!==0)return d}return ce(l.length,c.length)})(n.referenceValue,e.referenceValue);case 8:return(function(i,a){const l=ce(xe(i.latitude),xe(a.latitude));return l!==0?l:ce(xe(i.longitude),xe(a.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return hf(n.arrayValue,e.arrayValue);case 10:return(function(i,a){var l,c,h,d;const g=i.fields||{},_=a.fields||{},S=(l=g[Ro])===null||l===void 0?void 0:l.arrayValue,V=(c=_[Ro])===null||c===void 0?void 0:c.arrayValue,D=ce(((h=S==null?void 0:S.values)===null||h===void 0?void 0:h.length)||0,((d=V==null?void 0:V.values)===null||d===void 0?void 0:d.length)||0);return D!==0?D:hf(S,V)})(n.mapValue,e.mapValue);case 11:return(function(i,a){if(i===zi.mapValue&&a===zi.mapValue)return 0;if(i===zi.mapValue)return 1;if(a===zi.mapValue)return-1;const l=i.fields||{},c=Object.keys(l),h=a.fields||{},d=Object.keys(h);c.sort(),d.sort();for(let g=0;g<c.length&&g<d.length;++g){const _=_l(c[g],d[g]);if(_!==0)return _;const S=Jr(l[c[g]],h[d[g]]);if(S!==0)return S}return ce(c.length,d.length)})(n.mapValue,e.mapValue);default:throw te(23264,{le:t})}}function uf(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return ce(n,e);const t=Hn(n),r=Hn(e),s=ce(t.seconds,r.seconds);return s!==0?s:ce(t.nanos,r.nanos)}function hf(n,e){const t=n.values||[],r=e.values||[];for(let s=0;s<t.length&&s<r.length;++s){const i=Jr(t[s],r[s]);if(i)return i}return ce(t.length,r.length)}function Xr(n){return yl(n)}function yl(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=Hn(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return zn(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return X.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",s=!0;for(const i of t.values||[])s?s=!1:r+=",",r+=yl(i);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let s="{",i=!0;for(const a of r)i?i=!1:s+=",",s+=`${a}:${yl(t.fields[a])}`;return s+"}"})(n.mapValue):te(61005,{value:n})}function io(n){switch(Wn(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zo(n);return e?16+io(e):16;case 5:return 2*n.stringValue.length;case 6:return zn(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((s,i)=>s+io(i)),0)})(n.arrayValue);case 10:case 11:return(function(r){let s=0;return Jn(r.fields,((i,a)=>{s+=i.length+io(a)})),s})(n.mapValue);default:throw te(13486,{value:n})}}function ff(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function vl(n){return!!n&&"integerValue"in n}function yc(n){return!!n&&"arrayValue"in n}function df(n){return!!n&&"nullValue"in n}function pf(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function oo(n){return!!n&&"mapValue"in n}function Nw(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[gg])===null||t===void 0?void 0:t.stringValue)===mg}function $s(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Jn(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=$s(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=$s(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Ow(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Dw}/**
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
 */class mt{constructor(e){this.value=e}static empty(){return new mt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!oo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=$s(t)}setAll(e){let t=Je.emptyPath(),r={},s=[];e.forEach(((a,l)=>{if(!t.isImmediateParentOf(l)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=l.popLast()}a?r[l.lastSegment()]=$s(a):s.push(l.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());oo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return en(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];oo(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Jn(t,((s,i)=>e[s]=i));for(const s of r)delete e[s]}clone(){return new mt($s(this.value))}}function _g(n){const e=[];return Jn(n.fields,((t,r)=>{const s=new Je([t]);if(oo(r)){const i=_g(r.mapValue).fields;if(i.length===0)e.push(s);else for(const a of i)e.push(s.child(a))}else e.push(s)})),new Et(e)}/**
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
 */class it{constructor(e,t,r,s,i,a,l){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=a,this.documentState=l}static newInvalidDocument(e){return new it(e,0,re.min(),re.min(),re.min(),mt.empty(),0)}static newFoundDocument(e,t,r,s){return new it(e,1,t,re.min(),r,s,0)}static newNoDocument(e,t){return new it(e,2,t,re.min(),re.min(),mt.empty(),0)}static newUnknownDocument(e,t){return new it(e,3,t,re.min(),re.min(),mt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(re.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=mt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=mt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=re.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof it&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new it(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Po{constructor(e,t){this.position=e,this.inclusive=t}}function gf(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],a=n.position[s];if(i.field.isKeyField()?r=X.comparator(X.fromName(a.referenceValue),t.key):r=Jr(a,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function mf(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!en(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class si{constructor(e,t="asc"){this.field=e,this.dir=t}}function xw(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class yg{}class Fe extends yg{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Lw(e,t,r):t==="array-contains"?new Bw(e,r):t==="in"?new jw(e,r):t==="not-in"?new $w(e,r):t==="array-contains-any"?new qw(e,r):new Fe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Fw(e,r):new Uw(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(Jr(t,this.value)):t!==null&&Wn(this.value)===Wn(t)&&this.matchesComparison(Jr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return te(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Lt extends yg{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Lt(e,t)}matches(e){return vg(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function vg(n){return n.op==="and"}function Eg(n){return Mw(n)&&vg(n)}function Mw(n){for(const e of n.filters)if(e instanceof Lt)return!1;return!0}function El(n){if(n instanceof Fe)return n.field.canonicalString()+n.op.toString()+Xr(n.value);if(Eg(n))return n.filters.map((e=>El(e))).join(",");{const e=n.filters.map((t=>El(t))).join(",");return`${n.op}(${e})`}}function Tg(n,e){return n instanceof Fe?(function(r,s){return s instanceof Fe&&r.op===s.op&&r.field.isEqual(s.field)&&en(r.value,s.value)})(n,e):n instanceof Lt?(function(r,s){return s instanceof Lt&&r.op===s.op&&r.filters.length===s.filters.length?r.filters.reduce(((i,a,l)=>i&&Tg(a,s.filters[l])),!0):!1})(n,e):void te(19439)}function Ig(n){return n instanceof Fe?(function(t){return`${t.field.canonicalString()} ${t.op} ${Xr(t.value)}`})(n):n instanceof Lt?(function(t){return t.op.toString()+" {"+t.getFilters().map(Ig).join(" ,")+"}"})(n):"Filter"}class Lw extends Fe{constructor(e,t,r){super(e,t,r),this.key=X.fromName(r.referenceValue)}matches(e){const t=X.comparator(e.key,this.key);return this.matchesComparison(t)}}class Fw extends Fe{constructor(e,t){super(e,"in",t),this.keys=wg("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Uw extends Fe{constructor(e,t){super(e,"not-in",t),this.keys=wg("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function wg(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map((r=>X.fromName(r.referenceValue)))}class Bw extends Fe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return yc(t)&&ri(t.arrayValue,this.value)}}class jw extends Fe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ri(this.value.arrayValue,t)}}class $w extends Fe{constructor(e,t){super(e,"not-in",t)}matches(e){if(ri(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!ri(this.value.arrayValue,t)}}class qw extends Fe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!yc(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>ri(this.value.arrayValue,r)))}}/**
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
 */class Hw{constructor(e,t=null,r=[],s=[],i=null,a=null,l=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=a,this.endAt=l,this.Pe=null}}function _f(n,e=null,t=[],r=[],s=null,i=null,a=null){return new Hw(n,e,t,r,s,i,a)}function vc(n){const e=ie(n);if(e.Pe===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>El(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(i){return i.field.canonicalString()+i.dir})(r))).join(","),Yo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>Xr(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>Xr(r))).join(",")),e.Pe=t}return e.Pe}function Ec(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!xw(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Tg(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!mf(n.startAt,e.startAt)&&mf(n.endAt,e.endAt)}function Tl(n){return X.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
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
 */class as{constructor(e,t=null,r=[],s=[],i=null,a="F",l=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=a,this.startAt=l,this.endAt=c,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function zw(n,e,t,r,s,i,a,l){return new as(n,e,t,r,s,i,a,l)}function Tc(n){return new as(n)}function yf(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function Ag(n){return n.collectionGroup!==null}function qs(n){const e=ie(n);if(e.Te===null){e.Te=[];const t=new Set;for(const i of e.explicitOrderBy)e.Te.push(i),t.add(i.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(a){let l=new qe(Je.comparator);return a.filters.forEach((c=>{c.getFlattenedFilters().forEach((h=>{h.isInequality()&&(l=l.add(h.field))}))})),l})(e).forEach((i=>{t.has(i.canonicalString())||i.isKeyField()||e.Te.push(new si(i,r))})),t.has(Je.keyField().canonicalString())||e.Te.push(new si(Je.keyField(),r))}return e.Te}function Kt(n){const e=ie(n);return e.Ie||(e.Ie=Ww(e,qs(n))),e.Ie}function Ww(n,e){if(n.limitType==="F")return _f(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((s=>{const i=s.dir==="desc"?"asc":"desc";return new si(s.field,i)}));const t=n.endAt?new Po(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Po(n.startAt.position,n.startAt.inclusive):null;return _f(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Il(n,e){const t=n.filters.concat([e]);return new as(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function wl(n,e,t){return new as(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function ea(n,e){return Ec(Kt(n),Kt(e))&&n.limitType===e.limitType}function bg(n){return`${vc(Kt(n))}|lt:${n.limitType}`}function Nr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((s=>Ig(s))).join(", ")}]`),Yo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((s=>(function(a){return`${a.field.canonicalString()} (${a.dir})`})(s))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((s=>Xr(s))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((s=>Xr(s))).join(",")),`Target(${r})`})(Kt(n))}; limitType=${n.limitType})`}function ta(n,e){return e.isFoundDocument()&&(function(r,s){const i=s.key.path;return r.collectionGroup!==null?s.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(i):X.isDocumentKey(r.path)?r.path.isEqual(i):r.path.isImmediateParentOf(i)})(n,e)&&(function(r,s){for(const i of qs(r))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0})(n,e)&&(function(r,s){for(const i of r.filters)if(!i.matches(s))return!1;return!0})(n,e)&&(function(r,s){return!(r.startAt&&!(function(a,l,c){const h=gf(a,l,c);return a.inclusive?h<=0:h<0})(r.startAt,qs(r),s)||r.endAt&&!(function(a,l,c){const h=gf(a,l,c);return a.inclusive?h>=0:h>0})(r.endAt,qs(r),s))})(n,e)}function Kw(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Sg(n){return(e,t)=>{let r=!1;for(const s of qs(n)){const i=Gw(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function Gw(n,e,t){const r=n.field.isKeyField()?X.comparator(e.key,t.key):(function(i,a,l){const c=a.data.field(i),h=l.data.field(i);return c!==null&&h!==null?Jr(c,h):te(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return te(19790,{direction:n.dir})}}/**
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
 */class Tr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Jn(this.inner,((t,r)=>{for(const[s,i]of r)e(s,i)}))}isEmpty(){return cg(this.inner)}size(){return this.innerSize}}/**
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
 */const Qw=new ke(X.comparator);function Tn(){return Qw}const Rg=new ke(X.comparator);function Vs(...n){let e=Rg;for(const t of n)e=e.insert(t.key,t);return e}function Pg(n){let e=Rg;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function ur(){return Hs()}function Cg(){return Hs()}function Hs(){return new Tr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const Jw=new ke(X.comparator),Xw=new qe(X.comparator);function fe(...n){let e=Xw;for(const t of n)e=e.add(t);return e}const Yw=new qe(ce);function Zw(){return Yw}/**
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
 */function Ic(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bo(e)?"-0":e}}function Vg(n){return{integerValue:""+n}}function eA(n,e){return Rw(e)?Vg(e):Ic(n,e)}/**
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
 */class na{constructor(){this._=void 0}}function tA(n,e,t){return n instanceof ii?(function(s,i){const a={fields:{[fg]:{stringValue:hg},[pg]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&_c(i)&&(i=Zo(i)),i&&(a.fields[dg]=i),{mapValue:a}})(t,e):n instanceof oi?Dg(n,e):n instanceof ai?Ng(n,e):(function(s,i){const a=kg(s,i),l=vf(a)+vf(s.Ee);return vl(a)&&vl(s.Ee)?Vg(l):Ic(s.serializer,l)})(n,e)}function nA(n,e,t){return n instanceof oi?Dg(n,e):n instanceof ai?Ng(n,e):t}function kg(n,e){return n instanceof Co?(function(r){return vl(r)||(function(i){return!!i&&"doubleValue"in i})(r)})(e)?e:{integerValue:0}:null}class ii extends na{}class oi extends na{constructor(e){super(),this.elements=e}}function Dg(n,e){const t=Og(e);for(const r of n.elements)t.some((s=>en(s,r)))||t.push(r);return{arrayValue:{values:t}}}class ai extends na{constructor(e){super(),this.elements=e}}function Ng(n,e){let t=Og(e);for(const r of n.elements)t=t.filter((s=>!en(s,r)));return{arrayValue:{values:t}}}class Co extends na{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function vf(n){return xe(n.integerValue||n.doubleValue)}function Og(n){return yc(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class rA{constructor(e,t){this.field=e,this.transform=t}}function sA(n,e){return n.field.isEqual(e.field)&&(function(r,s){return r instanceof oi&&s instanceof oi||r instanceof ai&&s instanceof ai?Qr(r.elements,s.elements,en):r instanceof Co&&s instanceof Co?en(r.Ee,s.Ee):r instanceof ii&&s instanceof ii})(n.transform,e.transform)}class iA{constructor(e,t){this.version=e,this.transformResults=t}}class xt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xt}static exists(e){return new xt(void 0,e)}static updateTime(e){return new xt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ao(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class ra{}function xg(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new wc(n.key,xt.none()):new _i(n.key,n.data,xt.none());{const t=n.data,r=mt.empty();let s=new qe(Je.comparator);for(let i of e.fields)if(!s.has(i)){let a=t.field(i);a===null&&i.length>1&&(i=i.popLast(),a=t.field(i)),a===null?r.delete(i):r.set(i,a),s=s.add(i)}return new Xn(n.key,r,new Et(s.toArray()),xt.none())}}function oA(n,e,t){n instanceof _i?(function(s,i,a){const l=s.value.clone(),c=Tf(s.fieldTransforms,i,a.transformResults);l.setAll(c),i.convertToFoundDocument(a.version,l).setHasCommittedMutations()})(n,e,t):n instanceof Xn?(function(s,i,a){if(!ao(s.precondition,i))return void i.convertToUnknownDocument(a.version);const l=Tf(s.fieldTransforms,i,a.transformResults),c=i.data;c.setAll(Mg(s)),c.setAll(l),i.convertToFoundDocument(a.version,c).setHasCommittedMutations()})(n,e,t):(function(s,i,a){i.convertToNoDocument(a.version).setHasCommittedMutations()})(0,e,t)}function zs(n,e,t,r){return n instanceof _i?(function(i,a,l,c){if(!ao(i.precondition,a))return l;const h=i.value.clone(),d=If(i.fieldTransforms,c,a);return h.setAll(d),a.convertToFoundDocument(a.version,h).setHasLocalMutations(),null})(n,e,t,r):n instanceof Xn?(function(i,a,l,c){if(!ao(i.precondition,a))return l;const h=If(i.fieldTransforms,c,a),d=a.data;return d.setAll(Mg(i)),d.setAll(h),a.convertToFoundDocument(a.version,d).setHasLocalMutations(),l===null?null:l.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map((g=>g.field)))})(n,e,t,r):(function(i,a,l){return ao(i.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):l})(n,e,t)}function aA(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=kg(r.transform,s||null);i!=null&&(t===null&&(t=mt.empty()),t.set(r.field,i))}return t||null}function Ef(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,s){return r===void 0&&s===void 0||!(!r||!s)&&Qr(r,s,((i,a)=>sA(i,a)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class _i extends ra{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Xn extends ra{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Mg(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function Tf(n,e,t){const r=new Map;Te(n.length===t.length,32656,{Ae:t.length,Re:n.length});for(let s=0;s<t.length;s++){const i=n[s],a=i.transform,l=e.data.field(i.field);r.set(i.field,nA(a,l,t[s]))}return r}function If(n,e,t){const r=new Map;for(const s of n){const i=s.transform,a=t.data.field(s.field);r.set(s.field,tA(i,a,e))}return r}class wc extends ra{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class lA extends ra{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class cA{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&oA(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=zs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=zs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=Cg();return this.mutations.forEach((s=>{const i=e.get(s.key),a=i.overlayedDocument;let l=this.applyToLocalView(a,i.mutatedFields);l=t.has(s.key)?null:l;const c=xg(a,l);c!==null&&r.set(s.key,c),a.isValidDocument()||a.convertToNoDocument(re.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),fe())}isEqual(e){return this.batchId===e.batchId&&Qr(this.mutations,e.mutations,((t,r)=>Ef(t,r)))&&Qr(this.baseMutations,e.baseMutations,((t,r)=>Ef(t,r)))}}class Ac{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){Te(e.mutations.length===r.length,58842,{Ve:e.mutations.length,me:r.length});let s=(function(){return Jw})();const i=e.mutations;for(let a=0;a<i.length;a++)s=s.insert(i[a].key,r[a].version);return new Ac(e,t,r,s)}}/**
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
 */class uA{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class hA{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
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
 */var Le,de;function fA(n){switch(n){case k.OK:return te(64938);case k.CANCELLED:case k.UNKNOWN:case k.DEADLINE_EXCEEDED:case k.RESOURCE_EXHAUSTED:case k.INTERNAL:case k.UNAVAILABLE:case k.UNAUTHENTICATED:return!1;case k.INVALID_ARGUMENT:case k.NOT_FOUND:case k.ALREADY_EXISTS:case k.PERMISSION_DENIED:case k.FAILED_PRECONDITION:case k.ABORTED:case k.OUT_OF_RANGE:case k.UNIMPLEMENTED:case k.DATA_LOSS:return!0;default:return te(15467,{code:n})}}function Lg(n){if(n===void 0)return En("GRPC error has no .code"),k.UNKNOWN;switch(n){case Le.OK:return k.OK;case Le.CANCELLED:return k.CANCELLED;case Le.UNKNOWN:return k.UNKNOWN;case Le.DEADLINE_EXCEEDED:return k.DEADLINE_EXCEEDED;case Le.RESOURCE_EXHAUSTED:return k.RESOURCE_EXHAUSTED;case Le.INTERNAL:return k.INTERNAL;case Le.UNAVAILABLE:return k.UNAVAILABLE;case Le.UNAUTHENTICATED:return k.UNAUTHENTICATED;case Le.INVALID_ARGUMENT:return k.INVALID_ARGUMENT;case Le.NOT_FOUND:return k.NOT_FOUND;case Le.ALREADY_EXISTS:return k.ALREADY_EXISTS;case Le.PERMISSION_DENIED:return k.PERMISSION_DENIED;case Le.FAILED_PRECONDITION:return k.FAILED_PRECONDITION;case Le.ABORTED:return k.ABORTED;case Le.OUT_OF_RANGE:return k.OUT_OF_RANGE;case Le.UNIMPLEMENTED:return k.UNIMPLEMENTED;case Le.DATA_LOSS:return k.DATA_LOSS;default:return te(39323,{code:n})}}(de=Le||(Le={}))[de.OK=0]="OK",de[de.CANCELLED=1]="CANCELLED",de[de.UNKNOWN=2]="UNKNOWN",de[de.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",de[de.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",de[de.NOT_FOUND=5]="NOT_FOUND",de[de.ALREADY_EXISTS=6]="ALREADY_EXISTS",de[de.PERMISSION_DENIED=7]="PERMISSION_DENIED",de[de.UNAUTHENTICATED=16]="UNAUTHENTICATED",de[de.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",de[de.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",de[de.ABORTED=10]="ABORTED",de[de.OUT_OF_RANGE=11]="OUT_OF_RANGE",de[de.UNIMPLEMENTED=12]="UNIMPLEMENTED",de[de.INTERNAL=13]="INTERNAL",de[de.UNAVAILABLE=14]="UNAVAILABLE",de[de.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const dA=new Fn([4294967295,4294967295],0);function wf(n){const e=ig().encode(n),t=new Xp;return t.update(e),new Uint8Array(t.digest())}function Af(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),s=e.getUint32(8,!0),i=e.getUint32(12,!0);return[new Fn([t,r],0),new Fn([s,i],0)]}class bc{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new ks(`Invalid padding: ${t}`);if(r<0)throw new ks(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ks(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new ks(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=Fn.fromNumber(this.fe)}pe(e,t,r){let s=e.add(t.multiply(Fn.fromNumber(r)));return s.compare(dA)===1&&(s=new Fn([s.getBits(0),s.getBits(1)],0)),s.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.fe===0)return!1;const t=wf(e),[r,s]=Af(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);if(!this.ye(a))return!1}return!0}static create(e,t,r){const s=e%8==0?0:8-e%8,i=new Uint8Array(Math.ceil(e/8)),a=new bc(i,s,t);return r.forEach((l=>a.insert(l))),a}insert(e){if(this.fe===0)return;const t=wf(e),[r,s]=Af(t);for(let i=0;i<this.hashCount;i++){const a=this.pe(r,s,i);this.we(a)}}we(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class ks extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class sa{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,yi.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new sa(re.min(),s,new ke(ce),Tn(),fe())}}class yi{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new yi(r,t,fe(),fe(),fe())}}/**
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
 */class lo{constructor(e,t,r,s){this.Se=e,this.removedTargetIds=t,this.key=r,this.be=s}}class Fg{constructor(e,t){this.targetId=e,this.De=t}}class Ug{constructor(e,t,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class bf{constructor(){this.ve=0,this.Ce=Sf(),this.Fe=Xe.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=fe(),t=fe(),r=fe();return this.Ce.forEach(((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:te(38017,{changeType:i})}})),new yi(this.Fe,this.Me,e,t,r)}ke(){this.xe=!1,this.Ce=Sf()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,Te(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class pA{constructor(e){this.We=e,this.Ge=new Map,this.ze=Tn(),this.je=Wi(),this.Je=Wi(),this.He=new ke(ce)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,(t=>{const r=this.tt(t);switch(e.state){case 0:this.nt(t)&&r.Be(e.resumeToken);break;case 1:r.Ue(),r.Oe||r.ke(),r.Be(e.resumeToken);break;case 2:r.Ue(),r.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(r.Ke(),r.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),r.Be(e.resumeToken));break;default:te(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach(((r,s)=>{this.nt(s)&&t(s)}))}it(e){const t=e.targetId,r=e.De.count,s=this.st(t);if(s){const i=s.target;if(Tl(i))if(r===0){const a=new X(i.path);this.Xe(t,a,it.newNoDocument(a,re.min()))}else Te(r===1,20013,{expectedCount:r});else{const a=this.ot(t);if(a!==r){const l=this._t(e),c=l?this.ut(l,e,a):1;if(c!==0){this.rt(t);const h=c===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,h)}}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:s=0},hashCount:i=0}=t;let a,l;try{a=zn(r).toUint8Array()}catch(c){if(c instanceof ug)return $n("Decoding the base64 bloom filter in existence filter failed ("+c.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw c}try{l=new bc(a,s,i)}catch(c){return $n(c instanceof ks?"BloomFilter error: ":"Applying bloom filter failed: ",c),null}return l.fe===0?null:l}ut(e,t,r){return t.De.count===r-this.ht(e,t.targetId)?0:2}ht(e,t){const r=this.We.getRemoteKeysForTarget(t);let s=0;return r.forEach((i=>{const a=this.We.lt(),l=`projects/${a.projectId}/databases/${a.database}/documents/${i.path.canonicalString()}`;e.mightContain(l)||(this.Xe(t,i,null),s++)})),s}Pt(e){const t=new Map;this.Ge.forEach(((i,a)=>{const l=this.st(a);if(l){if(i.current&&Tl(l.target)){const c=new X(l.target.path);this.Tt(c).has(a)||this.It(a,c)||this.Xe(a,c,it.newNoDocument(c,e))}i.Ne&&(t.set(a,i.Le()),i.ke())}}));let r=fe();this.Je.forEach(((i,a)=>{let l=!0;a.forEachWhile((c=>{const h=this.st(c);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)})),l&&(r=r.add(i))})),this.ze.forEach(((i,a)=>a.setReadTime(e)));const s=new sa(e,t,this.He,this.ze,r);return this.ze=Tn(),this.je=Wi(),this.Je=Wi(),this.He=new ke(ce),s}Ze(e,t){if(!this.nt(e))return;const r=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,r),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,r){if(!this.nt(e))return;const s=this.tt(e);this.It(e,t)?s.qe(t,1):s.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),r&&(this.ze=this.ze.insert(t,r))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new bf,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new qe(ce),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new qe(ce),this.je=this.je.insert(e,t)),t}nt(e){const t=this.st(e)!==null;return t||K("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new bf),this.We.getRemoteKeysForTarget(e).forEach((t=>{this.Xe(e,t,null)}))}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Wi(){return new ke(X.comparator)}function Sf(){return new ke(X.comparator)}const gA={asc:"ASCENDING",desc:"DESCENDING"},mA={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},_A={and:"AND",or:"OR"};class yA{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Al(n,e){return n.useProto3Json||Yo(e)?e:{value:e}}function Vo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Bg(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function vA(n,e){return Vo(n,e.toTimestamp())}function Gt(n){return Te(!!n,49232),re.fromTimestamp((function(t){const r=Hn(t);return new Ce(r.seconds,r.nanos)})(n))}function Sc(n,e){return bl(n,e).canonicalString()}function bl(n,e){const t=(function(s){return new Re(["projects",s.projectId,"databases",s.database])})(n).child("documents");return e===void 0?t:t.child(e)}function jg(n){const e=Re.fromString(n);return Te(Wg(e),10190,{key:e.toString()}),e}function Sl(n,e){return Sc(n.databaseId,e.path)}function Wa(n,e){const t=jg(e);if(t.get(1)!==n.databaseId.projectId)throw new W(k.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new W(k.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new X(qg(t))}function $g(n,e){return Sc(n.databaseId,e)}function EA(n){const e=jg(n);return e.length===4?Re.emptyPath():qg(e)}function Rl(n){return new Re(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function qg(n){return Te(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function Rf(n,e,t){return{name:Sl(n,e),fields:t.value.mapValue.fields}}function TA(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:te(39313,{state:h})})(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=(function(h,d){return h.useProto3Json?(Te(d===void 0||typeof d=="string",58123),Xe.fromBase64String(d||"")):(Te(d===void 0||d instanceof Buffer||d instanceof Uint8Array,16193),Xe.fromUint8Array(d||new Uint8Array))})(n,e.targetChange.resumeToken),a=e.targetChange.cause,l=a&&(function(h){const d=h.code===void 0?k.UNKNOWN:Lg(h.code);return new W(d,h.message||"")})(a);t=new Ug(r,s,i,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Wa(n,r.document.name),i=Gt(r.document.updateTime),a=r.document.createTime?Gt(r.document.createTime):re.min(),l=new mt({mapValue:{fields:r.document.fields}}),c=it.newFoundDocument(s,i,a,l),h=r.targetIds||[],d=r.removedTargetIds||[];t=new lo(h,d,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Wa(n,r.document),i=r.readTime?Gt(r.readTime):re.min(),a=it.newNoDocument(s,i),l=r.removedTargetIds||[];t=new lo([],l,a.key,a)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Wa(n,r.document),i=r.removedTargetIds||[];t=new lo([],i,s,null)}else{if(!("filter"in e))return te(11601,{At:e});{e.filter;const r=e.filter;r.targetId;const{count:s=0,unchangedNames:i}=r,a=new hA(s,i),l=r.targetId;t=new Fg(l,a)}}return t}function IA(n,e){let t;if(e instanceof _i)t={update:Rf(n,e.key,e.value)};else if(e instanceof wc)t={delete:Sl(n,e.key)};else if(e instanceof Xn)t={update:Rf(n,e.key,e.data),updateMask:kA(e.fieldMask)};else{if(!(e instanceof lA))return te(16599,{Rt:e.type});t={verify:Sl(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(i,a){const l=a.transform;if(l instanceof ii)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(l instanceof oi)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:l.elements}};if(l instanceof ai)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:l.elements}};if(l instanceof Co)return{fieldPath:a.field.canonicalString(),increment:l.Ee};throw te(20930,{transform:a.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(s,i){return i.updateTime!==void 0?{updateTime:vA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:te(27497)})(n,e.precondition)),t}function wA(n,e){return n&&n.length>0?(Te(e!==void 0,14353),n.map((t=>(function(s,i){let a=s.updateTime?Gt(s.updateTime):Gt(i);return a.isEqual(re.min())&&(a=Gt(i)),new iA(a,s.transformResults||[])})(t,e)))):[]}function AA(n,e){return{documents:[$g(n,e.path)]}}function bA(n,e){const t={structuredQuery:{}},r=e.path;let s;e.collectionGroup!==null?(s=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=$g(n,s);const i=(function(h){if(h.length!==0)return zg(Lt.create(h,"and"))})(e.filters);i&&(t.structuredQuery.where=i);const a=(function(h){if(h.length!==0)return h.map((d=>(function(_){return{field:Or(_.field),direction:PA(_.dir)}})(d)))})(e.orderBy);a&&(t.structuredQuery.orderBy=a);const l=Al(n,e.limit);return l!==null&&(t.structuredQuery.limit=l),e.startAt&&(t.structuredQuery.startAt=(function(h){return{before:h.inclusive,values:h.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(h){return{before:!h.inclusive,values:h.position}})(e.endAt)),{Vt:t,parent:s}}function SA(n){let e=EA(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){Te(r===1,65062);const d=t.from[0];d.allDescendants?s=d.collectionId:e=e.child(d.collectionId)}let i=[];t.where&&(i=(function(g){const _=Hg(g);return _ instanceof Lt&&Eg(_)?_.getFilters():[_]})(t.where));let a=[];t.orderBy&&(a=(function(g){return g.map((_=>(function(V){return new si(xr(V.field),(function(O){switch(O){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(V.direction))})(_)))})(t.orderBy));let l=null;t.limit&&(l=(function(g){let _;return _=typeof g=="object"?g.value:g,Yo(_)?null:_})(t.limit));let c=null;t.startAt&&(c=(function(g){const _=!!g.before,S=g.values||[];return new Po(S,_)})(t.startAt));let h=null;return t.endAt&&(h=(function(g){const _=!g.before,S=g.values||[];return new Po(S,_)})(t.endAt)),zw(e,s,a,i,l,"F",c,h)}function RA(n,e){const t=(function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return te(28987,{purpose:s})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function Hg(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=xr(t.unaryFilter.field);return Fe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const s=xr(t.unaryFilter.field);return Fe.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=xr(t.unaryFilter.field);return Fe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=xr(t.unaryFilter.field);return Fe.create(a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return te(61313);default:return te(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Fe.create(xr(t.fieldFilter.field),(function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return te(58110);default:return te(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Lt.create(t.compositeFilter.filters.map((r=>Hg(r))),(function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return te(1026)}})(t.compositeFilter.op))})(n):te(30097,{filter:n})}function PA(n){return gA[n]}function CA(n){return mA[n]}function VA(n){return _A[n]}function Or(n){return{fieldPath:n.canonicalString()}}function xr(n){return Je.fromServerFormat(n.fieldPath)}function zg(n){return n instanceof Fe?(function(t){if(t.op==="=="){if(pf(t.value))return{unaryFilter:{field:Or(t.field),op:"IS_NAN"}};if(df(t.value))return{unaryFilter:{field:Or(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(pf(t.value))return{unaryFilter:{field:Or(t.field),op:"IS_NOT_NAN"}};if(df(t.value))return{unaryFilter:{field:Or(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Or(t.field),op:CA(t.op),value:t.value}}})(n):n instanceof Lt?(function(t){const r=t.getFilters().map((s=>zg(s)));return r.length===1?r[0]:{compositeFilter:{op:VA(t.op),filters:r}}})(n):te(54877,{filter:n})}function kA(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Wg(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class On{constructor(e,t,r,s,i=re.min(),a=re.min(),l=Xe.EMPTY_BYTE_STRING,c=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=a,this.resumeToken=l,this.expectedCount=c}withSequenceNumber(e){return new On(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new On(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
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
 */class DA{constructor(e){this.gt=e}}function NA(n){const e=SA({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?wl(e,e.limit,"L"):e}/**
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
 */class OA{constructor(){this.Dn=new xA}addToCollectionParentIndex(e,t){return this.Dn.add(t),N.resolve()}getCollectionParents(e,t){return N.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return N.resolve()}deleteFieldIndex(e,t){return N.resolve()}deleteAllFieldIndexes(e){return N.resolve()}createTargetIndexes(e,t){return N.resolve()}getDocumentsMatchingTarget(e,t){return N.resolve(null)}getIndexType(e,t){return N.resolve(0)}getFieldIndexes(e,t){return N.resolve([])}getNextCollectionGroupToUpdate(e){return N.resolve(null)}getMinOffset(e,t){return N.resolve(qn.min())}getMinOffsetFromCollectionGroup(e,t){return N.resolve(qn.min())}updateCollectionGroup(e,t,r){return N.resolve()}updateIndexEntries(e,t){return N.resolve()}}class xA{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new qe(Re.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new qe(Re.comparator)).toArray()}}/**
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
 */const Pf={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Kg=41943040;class gt{static withCacheSize(e){return new gt(e,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
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
 */gt.DEFAULT_COLLECTION_PERCENTILE=10,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,gt.DEFAULT=new gt(Kg,gt.DEFAULT_COLLECTION_PERCENTILE,gt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),gt.DISABLED=new gt(-1,0,0);/**
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
 */const Cf="LruGarbageCollector",MA=1048576;function Vf([n,e],[t,r]){const s=ce(n,t);return s===0?ce(e,r):s}class LA{constructor(e){this.Tr=e,this.buffer=new qe(Vf),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Vf(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class FA{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(e){K(Cf,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){os(t)?K(Cf,"Ignoring IndexedDB error during garbage collection: ",t):await is(t)}await this.Rr(3e5)}))}}class UA{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return N.resolve(Xo.ue);const r=new LA(t);return this.Vr.forEachTarget(e,(s=>r.Er(s.sequenceNumber))).next((()=>this.Vr.gr(e,(s=>r.Er(s))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.Vr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(K("LruGarbageCollector","Garbage collection skipped; disabled"),N.resolve(Pf)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(K("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Pf):this.pr(e,t)))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let r,s,i,a,l,c,h;const d=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((g=>(g>this.params.maximumSequenceNumbersToCollect?(K("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${g}`),s=this.params.maximumSequenceNumbersToCollect):s=g,a=Date.now(),this.nthSequenceNumber(e,s)))).next((g=>(r=g,l=Date.now(),this.removeTargets(e,r,t)))).next((g=>(i=g,c=Date.now(),this.removeOrphanedDocuments(e,r)))).next((g=>(h=Date.now(),Dr()<=he.DEBUG&&K("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${a-d}ms
	Determined least recently used ${s} in `+(l-a)+`ms
	Removed ${i} targets in `+(c-l)+`ms
	Removed ${g} documents in `+(h-c)+`ms
Total Duration: ${h-d}ms`),N.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:g}))))}}function BA(n,e){return new UA(n,e)}/**
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
 */class jA{constructor(){this.changes=new Tr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,it.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?N.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class $A{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class qA{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((s=>(r=s,this.remoteDocumentCache.getEntry(e,t)))).next((s=>(r!==null&&zs(r.mutation,s,Et.empty(),Ce.now()),s)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,fe()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=fe()){const s=ur();return this.populateOverlays(e,s,t).next((()=>this.computeViews(e,t,s,r).next((i=>{let a=Vs();return i.forEach(((l,c)=>{a=a.insert(l,c.overlayedDocument)})),a}))))}getOverlayedDocuments(e,t){const r=ur();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,fe())))}populateOverlays(e,t,r){const s=[];return r.forEach((i=>{t.has(i)||s.push(i)})),this.documentOverlayCache.getOverlays(e,s).next((i=>{i.forEach(((a,l)=>{t.set(a,l)}))}))}computeViews(e,t,r,s){let i=Tn();const a=Hs(),l=(function(){return Hs()})();return t.forEach(((c,h)=>{const d=r.get(h.key);s.has(h.key)&&(d===void 0||d.mutation instanceof Xn)?i=i.insert(h.key,h):d!==void 0?(a.set(h.key,d.mutation.getFieldMask()),zs(d.mutation,h,d.mutation.getFieldMask(),Ce.now())):a.set(h.key,Et.empty())})),this.recalculateAndSaveOverlays(e,i).next((c=>(c.forEach(((h,d)=>a.set(h,d))),t.forEach(((h,d)=>{var g;return l.set(h,new $A(d,(g=a.get(h))!==null&&g!==void 0?g:null))})),l)))}recalculateAndSaveOverlays(e,t){const r=Hs();let s=new ke(((a,l)=>a-l)),i=fe();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((a=>{for(const l of a)l.keys().forEach((c=>{const h=t.get(c);if(h===null)return;let d=r.get(c)||Et.empty();d=l.applyToLocalView(h,d),r.set(c,d);const g=(s.get(l.batchId)||fe()).add(c);s=s.insert(l.batchId,g)}))})).next((()=>{const a=[],l=s.getReverseIterator();for(;l.hasNext();){const c=l.getNext(),h=c.key,d=c.value,g=Cg();d.forEach((_=>{if(!i.has(_)){const S=xg(t.get(_),r.get(_));S!==null&&g.set(_,S),i=i.add(_)}})),a.push(this.documentOverlayCache.saveOverlays(e,h,g))}return N.waitFor(a)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,s){return(function(a){return X.isDocumentKey(a.path)&&a.collectionGroup===null&&a.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ag(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,s):this.getDocumentsMatchingCollectionQuery(e,t,r,s)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next((i=>{const a=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):N.resolve(ur());let l=ei,c=i;return a.next((h=>N.forEach(h,((d,g)=>(l<g.largestBatchId&&(l=g.largestBatchId),i.get(d)?N.resolve():this.remoteDocumentCache.getEntry(e,d).next((_=>{c=c.insert(d,_)}))))).next((()=>this.populateOverlays(e,h,i))).next((()=>this.computeViews(e,c,h,fe()))).next((d=>({batchId:l,changes:Pg(d)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new X(t)).next((r=>{let s=Vs();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,s){const i=t.collectionGroup;let a=Vs();return this.indexManager.getCollectionParents(e,i).next((l=>N.forEach(l,(c=>{const h=(function(g,_){return new as(_,null,g.explicitOrderBy.slice(),g.filters.slice(),g.limit,g.limitType,g.startAt,g.endAt)})(t,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,h,r,s).next((d=>{d.forEach(((g,_)=>{a=a.insert(g,_)}))}))})).next((()=>a))))}getDocumentsMatchingCollectionQuery(e,t,r,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((a=>(i=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,i,s)))).next((a=>{i.forEach(((c,h)=>{const d=h.getKey();a.get(d)===null&&(a=a.insert(d,it.newInvalidDocument(d)))}));let l=Vs();return a.forEach(((c,h)=>{const d=i.get(c);d!==void 0&&zs(d.mutation,h,Et.empty(),Ce.now()),ta(t,h)&&(l=l.insert(c,h))})),l}))}}/**
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
 */class HA{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return N.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,(function(s){return{id:s.id,version:s.version,createTime:Gt(s.createTime)}})(t)),N.resolve()}getNamedQuery(e,t){return N.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,(function(s){return{name:s.name,query:NA(s.bundledQuery),readTime:Gt(s.readTime)}})(t)),N.resolve()}}/**
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
 */class zA{constructor(){this.overlays=new ke(X.comparator),this.kr=new Map}getOverlay(e,t){return N.resolve(this.overlays.get(t))}getOverlays(e,t){const r=ur();return N.forEach(t,(s=>this.getOverlay(e,s).next((i=>{i!==null&&r.set(s,i)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((s,i)=>{this.wt(e,t,i)})),N.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.kr.get(r);return s!==void 0&&(s.forEach((i=>this.overlays=this.overlays.remove(i))),this.kr.delete(r)),N.resolve()}getOverlaysForCollection(e,t,r){const s=ur(),i=t.length+1,a=new X(t.child("")),l=this.overlays.getIteratorFrom(a);for(;l.hasNext();){const c=l.getNext().value,h=c.getKey();if(!t.isPrefixOf(h.path))break;h.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return N.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new ke(((h,d)=>h-d));const a=this.overlays.getIterator();for(;a.hasNext();){const h=a.getNext().value;if(h.getKey().getCollectionGroup()===t&&h.largestBatchId>r){let d=i.get(h.largestBatchId);d===null&&(d=ur(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const l=ur(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach(((h,d)=>l.set(h,d))),!(l.size()>=s)););return N.resolve(l)}wt(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const a=this.kr.get(s.largestBatchId).delete(r.key);this.kr.set(s.largestBatchId,a)}this.overlays=this.overlays.insert(r.key,new uA(t,r));let i=this.kr.get(t);i===void 0&&(i=fe(),this.kr.set(t,i)),this.kr.set(t,i.add(r.key))}}/**
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
 */class WA{constructor(){this.sessionToken=Xe.EMPTY_BYTE_STRING}getSessionToken(e){return N.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,N.resolve()}}/**
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
 */class Rc{constructor(){this.qr=new qe(He.Qr),this.$r=new qe(He.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const r=new He(e,t);this.qr=this.qr.add(r),this.$r=this.$r.add(r)}Kr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Wr(new He(e,t))}Gr(e,t){e.forEach((r=>this.removeReference(r,t)))}zr(e){const t=new X(new Re([])),r=new He(t,e),s=new He(t,e+1),i=[];return this.$r.forEachInRange([r,s],(a=>{this.Wr(a),i.push(a.key)})),i}jr(){this.qr.forEach((e=>this.Wr(e)))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new X(new Re([])),r=new He(t,e),s=new He(t,e+1);let i=fe();return this.$r.forEachInRange([r,s],(a=>{i=i.add(a.key)})),i}containsKey(e){const t=new He(e,0),r=this.qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class He{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return X.comparator(e.key,t.key)||ce(e.Hr,t.Hr)}static Ur(e,t){return ce(e.Hr,t.Hr)||X.comparator(e.key,t.key)}}/**
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
 */class KA{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new qe(He.Qr)}checkEmpty(e){return N.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const a=new cA(i,t,r,s);this.mutationQueue.push(a);for(const l of s)this.Yr=this.Yr.add(new He(l.key,i)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return N.resolve(a)}lookupMutationBatch(e,t){return N.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.Xr(r),i=s<0?0:s;return N.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return N.resolve(this.mutationQueue.length===0?mc:this.er-1)}getAllMutationBatches(e){return N.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new He(t,0),s=new He(t,Number.POSITIVE_INFINITY),i=[];return this.Yr.forEachInRange([r,s],(a=>{const l=this.Zr(a.Hr);i.push(l)})),N.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new qe(ce);return t.forEach((s=>{const i=new He(s,0),a=new He(s,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([i,a],(l=>{r=r.add(l.Hr)}))})),N.resolve(this.ei(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;X.isDocumentKey(i)||(i=i.child(""));const a=new He(new X(i),0);let l=new qe(ce);return this.Yr.forEachWhile((c=>{const h=c.key.path;return!!r.isPrefixOf(h)&&(h.length===s&&(l=l.add(c.Hr)),!0)}),a),N.resolve(this.ei(l))}ei(e){const t=[];return e.forEach((r=>{const s=this.Zr(r);s!==null&&t.push(s)})),t}removeMutationBatch(e,t){Te(this.ti(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Yr;return N.forEach(t.mutations,(s=>{const i=new He(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)})).next((()=>{this.Yr=r}))}rr(e){}containsKey(e,t){const r=new He(t,0),s=this.Yr.firstAfterOrEqual(r);return N.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,N.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class GA{constructor(e){this.ni=e,this.docs=(function(){return new ke(X.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,a=this.ni(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:a}),this.size+=a-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return N.resolve(r?r.document.mutableCopy():it.newInvalidDocument(t))}getEntries(e,t){let r=Tn();return t.forEach((s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():it.newInvalidDocument(s))})),N.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Tn();const a=t.path,l=new X(a.child("__id-9223372036854775808__")),c=this.docs.getIteratorFrom(l);for(;c.hasNext();){const{key:h,value:{document:d}}=c.getNext();if(!a.isPrefixOf(h.path))break;h.path.length>a.length+1||ww(Iw(d),r)<=0||(s.has(d.key)||ta(t,d))&&(i=i.insert(d.key,d.mutableCopy()))}return N.resolve(i)}getAllFromCollectionGroup(e,t,r,s){te(9500)}ri(e,t){return N.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new QA(this)}getSize(e){return N.resolve(this.size)}}class QA extends jA{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach(((r,s)=>{s.isValidDocument()?t.push(this.Or.addEntry(e,s)):this.Or.removeEntry(r)})),N.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}/**
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
 */class JA{constructor(e){this.persistence=e,this.ii=new Tr((t=>vc(t)),Ec),this.lastRemoteSnapshotVersion=re.min(),this.highestTargetId=0,this.si=0,this.oi=new Rc,this.targetCount=0,this._i=Yr.ar()}forEachTarget(e,t){return this.ii.forEach(((r,s)=>t(s))),N.resolve()}getLastRemoteSnapshotVersion(e){return N.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return N.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),N.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.si&&(this.si=t),N.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Yr(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,N.resolve()}updateTargetData(e,t){return this.hr(t),N.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,N.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.ii.forEach(((a,l)=>{l.sequenceNumber<=t&&r.get(l.targetId)===null&&(this.ii.delete(a),i.push(this.removeMatchingKeysForTargetId(e,l.targetId)),s++)})),N.waitFor(i).next((()=>s))}getTargetCount(e){return N.resolve(this.targetCount)}getTargetData(e,t){const r=this.ii.get(t)||null;return N.resolve(r)}addMatchingKeys(e,t,r){return this.oi.Kr(t,r),N.resolve()}removeMatchingKeys(e,t,r){this.oi.Gr(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach((a=>{i.push(s.markPotentiallyOrphaned(e,a))})),N.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),N.resolve()}getMatchingKeysForTargetId(e,t){const r=this.oi.Jr(t);return N.resolve(r)}containsKey(e,t){return N.resolve(this.oi.containsKey(t))}}/**
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
 */class Gg{constructor(e,t){this.ai={},this.overlays={},this.ui=new Xo(0),this.ci=!1,this.ci=!0,this.li=new WA,this.referenceDelegate=e(this),this.hi=new JA(this),this.indexManager=new OA,this.remoteDocumentCache=(function(s){return new GA(s)})((r=>this.referenceDelegate.Pi(r))),this.serializer=new DA(t),this.Ti=new HA(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new zA,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ai[e.toKey()];return r||(r=new KA(t,this.referenceDelegate),this.ai[e.toKey()]=r),r}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,r){K("MemoryPersistence","Starting transaction:",e);const s=new XA(this.ui.next());return this.referenceDelegate.Ii(),r(s).next((i=>this.referenceDelegate.di(s).next((()=>i)))).toPromise().then((i=>(s.raiseOnCommittedEvent(),i)))}Ei(e,t){return N.or(Object.values(this.ai).map((r=>()=>r.containsKey(e,t))))}}class XA extends bw{constructor(e){super(),this.currentSequenceNumber=e}}class Pc{constructor(e){this.persistence=e,this.Ai=new Rc,this.Ri=null}static Vi(e){return new Pc(e)}get mi(){if(this.Ri)return this.Ri;throw te(60996)}addReference(e,t,r){return this.Ai.addReference(r,t),this.mi.delete(r.toString()),N.resolve()}removeReference(e,t,r){return this.Ai.removeReference(r,t),this.mi.add(r.toString()),N.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),N.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach((s=>this.mi.add(s.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((s=>{s.forEach((i=>this.mi.add(i.toString())))})).next((()=>r.removeTargetData(e,t)))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return N.forEach(this.mi,(r=>{const s=X.fromPath(r);return this.fi(e,s).next((i=>{i||t.removeEntry(s,re.min())}))})).next((()=>(this.Ri=null,t.apply(e))))}updateLimboDocument(e,t){return this.fi(e,t).next((r=>{r?this.mi.delete(t.toString()):this.mi.add(t.toString())}))}Pi(e){return 0}fi(e,t){return N.or([()=>N.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class ko{constructor(e,t){this.persistence=e,this.gi=new Tr((r=>Pw(r.path)),((r,s)=>r.isEqual(s))),this.garbageCollector=BA(this,t)}static Vi(e,t){return new ko(e,t)}Ii(){}di(e){return N.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((s=>r+s))))}yr(e){let t=0;return this.gr(e,(r=>{t++})).next((()=>t))}gr(e,t){return N.forEach(this.gi,((r,s)=>this.Sr(e,r,s).next((i=>i?N.resolve():t(s)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const s=this.persistence.getRemoteDocumentCache(),i=s.newChangeBuffer();return s.ri(e,(a=>this.Sr(e,a,t).next((l=>{l||(r++,i.removeEntry(a,re.min()))})))).next((()=>i.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}removeReference(e,t,r){return this.gi.set(r,e.currentSequenceNumber),N.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),N.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=io(e.data.value)),t}Sr(e,t,r){return N.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.gi.get(t);return N.resolve(s!==void 0&&s>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
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
 */class Cc{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Is=r,this.ds=s}static Es(e,t){let r=fe(),s=fe();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Cc(e,t.fromCache,r,s)}}/**
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
 */class YA{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
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
 */class ZA{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Wv()?8:Sw(lt())>0?6:4})()}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,r,s){const i={result:null};return this.ps(e,t).next((a=>{i.result=a})).next((()=>{if(!i.result)return this.ys(e,t,s,r).next((a=>{i.result=a}))})).next((()=>{if(i.result)return;const a=new YA;return this.ws(e,t,a).next((l=>{if(i.result=l,this.Rs)return this.Ss(e,t,a,l.size)}))})).next((()=>i.result))}Ss(e,t,r,s){return r.documentReadCount<this.Vs?(Dr()<=he.DEBUG&&K("QueryEngine","SDK will not create cache indexes for query:",Nr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),N.resolve()):(Dr()<=he.DEBUG&&K("QueryEngine","Query:",Nr(t),"scans",r.documentReadCount,"local documents and returns",s,"documents as results."),r.documentReadCount>this.fs*s?(Dr()<=he.DEBUG&&K("QueryEngine","The SDK decides to create cache indexes for query:",Nr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Kt(t))):N.resolve())}ps(e,t){if(yf(t))return N.resolve(null);let r=Kt(t);return this.indexManager.getIndexType(e,r).next((s=>s===0?null:(t.limit!==null&&s===1&&(t=wl(t,null,"F"),r=Kt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((i=>{const a=fe(...i);return this.gs.getDocuments(e,a).next((l=>this.indexManager.getMinOffset(e,r).next((c=>{const h=this.bs(t,l);return this.Ds(t,h,a,c.readTime)?this.ps(e,wl(t,null,"F")):this.vs(e,h,t,c)}))))})))))}ys(e,t,r,s){return yf(t)||s.isEqual(re.min())?N.resolve(null):this.gs.getDocuments(e,r).next((i=>{const a=this.bs(t,i);return this.Ds(t,a,r,s)?N.resolve(null):(Dr()<=he.DEBUG&&K("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Nr(t)),this.vs(e,a,t,Tw(s,ei)).next((l=>l)))}))}bs(e,t){let r=new qe(Sg(e));return t.forEach(((s,i)=>{ta(e,i)&&(r=r.add(i))})),r}Ds(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}ws(e,t,r){return Dr()<=he.DEBUG&&K("QueryEngine","Using full collection scan to execute query:",Nr(t)),this.gs.getDocumentsMatchingQuery(e,t,qn.min(),r)}vs(e,t,r,s){return this.gs.getDocumentsMatchingQuery(e,r,s).next((i=>(t.forEach((a=>{i=i.insert(a.key,a)})),i)))}}/**
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
 */const Vc="LocalStore",e0=3e8;class t0{constructor(e,t,r,s){this.persistence=e,this.Cs=t,this.serializer=s,this.Fs=new ke(ce),this.Ms=new Tr((i=>vc(i)),Ec),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(r)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new qA(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Fs)))}}function n0(n,e,t,r){return new t0(n,e,t,r)}async function Qg(n,e){const t=ie(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next((i=>(s=i,t.Ns(e),t.mutationQueue.getAllMutationBatches(r)))).next((i=>{const a=[],l=[];let c=fe();for(const h of s){a.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}for(const h of i){l.push(h.batchId);for(const d of h.mutations)c=c.add(d.key)}return t.localDocuments.getDocuments(r,c).next((h=>({Bs:h,removedBatchIds:a,addedBatchIds:l})))}))}))}function r0(n,e){const t=ie(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const s=e.batch.keys(),i=t.Os.newChangeBuffer({trackRemovals:!0});return(function(l,c,h,d){const g=h.batch,_=g.keys();let S=N.resolve();return _.forEach((V=>{S=S.next((()=>d.getEntry(c,V))).next((D=>{const O=h.docVersions.get(V);Te(O!==null,48541),D.version.compareTo(O)<0&&(g.applyToRemoteDocument(D,h),D.isValidDocument()&&(D.setReadTime(h.commitVersion),d.addEntry(D)))}))})),S.next((()=>l.mutationQueue.removeMutationBatch(c,g)))})(t,r,e,i).next((()=>i.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(l){let c=fe();for(let h=0;h<l.mutationResults.length;++h)l.mutationResults[h].transformResults.length>0&&(c=c.add(l.batch.mutations[h].key));return c})(e)))).next((()=>t.localDocuments.getDocuments(r,s)))}))}function Jg(n){const e=ie(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.hi.getLastRemoteSnapshotVersion(t)))}function s0(n,e){const t=ie(n),r=e.snapshotVersion;let s=t.Fs;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(i=>{const a=t.Os.newChangeBuffer({trackRemovals:!0});s=t.Fs;const l=[];e.targetChanges.forEach(((d,g)=>{const _=s.get(g);if(!_)return;l.push(t.hi.removeMatchingKeys(i,d.removedDocuments,g).next((()=>t.hi.addMatchingKeys(i,d.addedDocuments,g))));let S=_.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.get(g)!==null?S=S.withResumeToken(Xe.EMPTY_BYTE_STRING,re.min()).withLastLimboFreeSnapshotVersion(re.min()):d.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(d.resumeToken,r)),s=s.insert(g,S),(function(D,O,Q){return D.resumeToken.approximateByteSize()===0||O.snapshotVersion.toMicroseconds()-D.snapshotVersion.toMicroseconds()>=e0?!0:Q.addedDocuments.size+Q.modifiedDocuments.size+Q.removedDocuments.size>0})(_,S,d)&&l.push(t.hi.updateTargetData(i,S))}));let c=Tn(),h=fe();if(e.documentUpdates.forEach((d=>{e.resolvedLimboDocuments.has(d)&&l.push(t.persistence.referenceDelegate.updateLimboDocument(i,d))})),l.push(i0(i,a,e.documentUpdates).next((d=>{c=d.Ls,h=d.ks}))),!r.isEqual(re.min())){const d=t.hi.getLastRemoteSnapshotVersion(i).next((g=>t.hi.setTargetsMetadata(i,i.currentSequenceNumber,r)));l.push(d)}return N.waitFor(l).next((()=>a.apply(i))).next((()=>t.localDocuments.getLocalViewOfDocuments(i,c,h))).next((()=>c))})).then((i=>(t.Fs=s,i)))}function i0(n,e,t){let r=fe(),s=fe();return t.forEach((i=>r=r.add(i))),e.getEntries(n,r).next((i=>{let a=Tn();return t.forEach(((l,c)=>{const h=i.get(l);c.isFoundDocument()!==h.isFoundDocument()&&(s=s.add(l)),c.isNoDocument()&&c.version.isEqual(re.min())?(e.removeEntry(l,c.readTime),a=a.insert(l,c)):!h.isValidDocument()||c.version.compareTo(h.version)>0||c.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(c),a=a.insert(l,c)):K(Vc,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",c.version)})),{Ls:a,ks:s}}))}function o0(n,e){const t=ie(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=mc),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function a0(n,e){const t=ie(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let s;return t.hi.getTargetData(r,e).next((i=>i?(s=i,N.resolve(s)):t.hi.allocateTargetId(r).next((a=>(s=new On(e,a,"TargetPurposeListen",r.currentSequenceNumber),t.hi.addTargetData(r,s).next((()=>s)))))))})).then((r=>{const s=t.Fs.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Fs=t.Fs.insert(r.targetId,r),t.Ms.set(e,r.targetId)),r}))}async function Pl(n,e,t){const r=ie(n),s=r.Fs.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,(a=>r.persistence.referenceDelegate.removeTarget(a,s)))}catch(a){if(!os(a))throw a;K(Vc,`Failed to update sequence numbers for target ${e}: ${a}`)}r.Fs=r.Fs.remove(e),r.Ms.delete(s.target)}function kf(n,e,t){const r=ie(n);let s=re.min(),i=fe();return r.persistence.runTransaction("Execute query","readwrite",(a=>(function(c,h,d){const g=ie(c),_=g.Ms.get(d);return _!==void 0?N.resolve(g.Fs.get(_)):g.hi.getTargetData(h,d)})(r,a,Kt(e)).next((l=>{if(l)return s=l.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(a,l.targetId).next((c=>{i=c}))})).next((()=>r.Cs.getDocumentsMatchingQuery(a,e,t?s:re.min(),t?i:fe()))).next((l=>(l0(r,Kw(e),l),{documents:l,qs:i})))))}function l0(n,e,t){let r=n.xs.get(e)||re.min();t.forEach(((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)})),n.xs.set(e,r)}class Df{constructor(){this.activeTargetIds=Zw()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class c0{constructor(){this.Fo=new Df,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,r){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new Df,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class u0{xo(e){}shutdown(){}}/**
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
 */const Nf="ConnectivityMonitor";class Of{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){K(Nf,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){K(Nf,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Ki=null;function Cl(){return Ki===null?Ki=(function(){return 268435456+Math.round(2147483648*Math.random())})():Ki++,"0x"+Ki.toString(16)}/**
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
 */const Ka="RestConnection",h0={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class f0{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${r}/databases/${s}`,this.Ko=this.databaseId.database===So?`project_id=${r}`:`project_id=${r}&database_id=${s}`}Wo(e,t,r,s,i){const a=Cl(),l=this.Go(e,t.toUriEncodedString());K(Ka,`Sending RPC '${e}' ${a}:`,l,r);const c={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(c,s,i);const{host:h}=new URL(l),d=ts(h);return this.jo(e,l,c,r,d).then((g=>(K(Ka,`Received RPC '${e}' ${a}: `,g),g)),(g=>{throw $n(Ka,`RPC '${e}' ${a} failed with error: `,g,"url: ",l,"request:",r),g}))}Jo(e,t,r,s,i,a){return this.Wo(e,t,r,s,i)}zo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+ss})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((s,i)=>e[i]=s)),r&&r.headers.forEach(((s,i)=>e[i]=s))}Go(e,t){const r=h0[e];return`${this.$o}/v1/${t}:${r}`}terminate(){}}/**
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
 */class d0{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}/**
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
 */const tt="WebChannelConnection";class p0 extends f0{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,r,s,i){const a=Cl();return new Promise(((l,c)=>{const h=new Yp;h.setWithCredentials(!0),h.listenOnce(Zp.COMPLETE,(()=>{try{switch(h.getLastErrorCode()){case so.NO_ERROR:const g=h.getResponseJson();K(tt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(g)),l(g);break;case so.TIMEOUT:K(tt,`RPC '${e}' ${a} timed out`),c(new W(k.DEADLINE_EXCEEDED,"Request time out"));break;case so.HTTP_ERROR:const _=h.getStatus();if(K(tt,`RPC '${e}' ${a} failed with status:`,_,"response text:",h.getResponseText()),_>0){let S=h.getResponseJson();Array.isArray(S)&&(S=S[0]);const V=S==null?void 0:S.error;if(V&&V.status&&V.message){const D=(function(Q){const $=Q.toLowerCase().replace(/_/g,"-");return Object.values(k).indexOf($)>=0?$:k.UNKNOWN})(V.status);c(new W(D,V.message))}else c(new W(k.UNKNOWN,"Server responded with status "+h.getStatus()))}else c(new W(k.UNAVAILABLE,"Connection failed."));break;default:te(9055,{c_:e,streamId:a,l_:h.getLastErrorCode(),h_:h.getLastError()})}}finally{K(tt,`RPC '${e}' ${a} completed.`)}}));const d=JSON.stringify(s);K(tt,`RPC '${e}' ${a} sending request:`,s),h.send(t,"POST",d,r,15)}))}P_(e,t,r){const s=Cl(),i=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=ng(),l=tg(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(c.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(c.useFetchStreams=!0),this.zo(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const d=i.join("");K(tt,`Creating RPC '${e}' stream ${s}: ${d}`,c);const g=a.createWebChannel(d,c);this.T_(g);let _=!1,S=!1;const V=new d0({Ho:O=>{S?K(tt,`Not sending because RPC '${e}' stream ${s} is closed:`,O):(_||(K(tt,`Opening RPC '${e}' stream ${s} transport.`),g.open(),_=!0),K(tt,`RPC '${e}' stream ${s} sending:`,O),g.send(O))},Yo:()=>g.close()}),D=(O,Q,$)=>{O.listen(Q,(G=>{try{$(G)}catch(z){setTimeout((()=>{throw z}),0)}}))};return D(g,Cs.EventType.OPEN,(()=>{S||(K(tt,`RPC '${e}' stream ${s} transport opened.`),V.s_())})),D(g,Cs.EventType.CLOSE,(()=>{S||(S=!0,K(tt,`RPC '${e}' stream ${s} transport closed`),V.__(),this.I_(g))})),D(g,Cs.EventType.ERROR,(O=>{S||(S=!0,$n(tt,`RPC '${e}' stream ${s} transport errored. Name:`,O.name,"Message:",O.message),V.__(new W(k.UNAVAILABLE,"The operation could not be completed")))})),D(g,Cs.EventType.MESSAGE,(O=>{var Q;if(!S){const $=O.data[0];Te(!!$,16349);const G=$,z=(G==null?void 0:G.error)||((Q=G[0])===null||Q===void 0?void 0:Q.error);if(z){K(tt,`RPC '${e}' stream ${s} received error:`,z);const ue=z.status;let ge=(function(E){const I=Le[E];if(I!==void 0)return Lg(I)})(ue),w=z.message;ge===void 0&&(ge=k.INTERNAL,w="Unknown error status: "+ue+" with message "+z.message),S=!0,V.__(new W(ge,w)),g.close()}else K(tt,`RPC '${e}' stream ${s} received:`,$),V.a_($)}})),D(l,eg.STAT_EVENT,(O=>{O.stat===ml.PROXY?K(tt,`RPC '${e}' stream ${s} detected buffering proxy`):O.stat===ml.NOPROXY&&K(tt,`RPC '${e}' stream ${s} detected no buffering proxy`)})),setTimeout((()=>{V.o_()}),0),V}terminate(){this.u_.forEach((e=>e.close())),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter((t=>t===e))}}function Ga(){return typeof document<"u"?document:null}/**
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
 */function ia(n){return new yA(n,!0)}/**
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
 */class Xg{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Fi=e,this.timerId=t,this.d_=r,this.E_=s,this.A_=i,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),r=Math.max(0,Date.now()-this.m_),s=Math.max(0,t-r);s>0&&K("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,s,(()=>(this.m_=Date.now(),e()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const xf="PersistentStream";class Yg{constructor(e,t,r,s,i,a,l,c){this.Fi=e,this.w_=r,this.S_=s,this.connection=i,this.authCredentialsProvider=a,this.appCheckCredentialsProvider=l,this.listener=c,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Xg(e,t)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,e!==4?this.F_.reset():t&&t.code===k.RESOURCE_EXHAUSTED?(En(t.toString()),En("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===k.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,s])=>{this.b_===t&&this.W_(r,s)}),(r=>{e((()=>{const s=new W(k.UNKNOWN,"Fetching auth token failed: "+r.message);return this.G_(s)}))}))}W_(e,t){const r=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo((()=>{r((()=>this.listener.Zo()))})),this.stream.e_((()=>{r((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((s=>{r((()=>this.G_(s)))})),this.stream.onMessage((s=>{r((()=>++this.C_==1?this.j_(s):this.onNext(s)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(e){return K(xf,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget((()=>this.b_===e?t():(K(xf,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class g0 extends Yg{constructor(e,t,r,s,i,a){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=TA(this.serializer,e),r=(function(i){if(!("targetChange"in i))return re.min();const a=i.targetChange;return a.targetIds&&a.targetIds.length?re.min():a.readTime?Gt(a.readTime):re.min()})(e);return this.listener.J_(t,r)}H_(e){const t={};t.database=Rl(this.serializer),t.addTarget=(function(i,a){let l;const c=a.target;if(l=Tl(c)?{documents:AA(i,c)}:{query:bA(i,c).Vt},l.targetId=a.targetId,a.resumeToken.approximateByteSize()>0){l.resumeToken=Bg(i,a.resumeToken);const h=Al(i,a.expectedCount);h!==null&&(l.expectedCount=h)}else if(a.snapshotVersion.compareTo(re.min())>0){l.readTime=Vo(i,a.snapshotVersion.toTimestamp());const h=Al(i,a.expectedCount);h!==null&&(l.expectedCount=h)}return l})(this.serializer,e);const r=RA(this.serializer,e);r&&(t.labels=r),this.k_(t)}Y_(e){const t={};t.database=Rl(this.serializer),t.removeTarget=e,this.k_(t)}}class m0 extends Yg{constructor(e,t,r,s,i,a){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,a),this.serializer=i}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return Te(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Te(!e.writeResults||e.writeResults.length===0,55816),this.listener.ea()}onNext(e){Te(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=wA(e.writeResults,e.commitTime),r=Gt(e.commitTime);return this.listener.ta(r,t)}na(){const e={};e.database=Rl(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>IA(this.serializer,r)))};this.k_(t)}}/**
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
 */class _0{}class y0 extends _0{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.ra=!1}ia(){if(this.ra)throw new W(k.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,a])=>this.connection.Wo(e,bl(t,r),s,i,a))).catch((i=>{throw i.name==="FirebaseError"?(i.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new W(k.UNKNOWN,i.toString())}))}Jo(e,t,r,s,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,l])=>this.connection.Jo(e,bl(t,r),s,a,l,i))).catch((a=>{throw a.name==="FirebaseError"?(a.code===k.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new W(k.UNKNOWN,a.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class v0{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(e){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,e==="Online"&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(En(t),this._a=!1):K("OnlineStateTracker",t)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const Er="RemoteStore";class E0{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=i,this.Ea.xo((a=>{r.enqueueAndForget((async()=>{Ir(this)&&(K(Er,"Restarting streams for network reachability change."),await(async function(c){const h=ie(c);h.Ia.add(4),await vi(h),h.Aa.set("Unknown"),h.Ia.delete(4),await oa(h)})(this))}))})),this.Aa=new v0(r,s)}}async function oa(n){if(Ir(n))for(const e of n.da)await e(!0)}async function vi(n){for(const e of n.da)await e(!1)}function Zg(n,e){const t=ie(n);t.Ta.has(e.targetId)||(t.Ta.set(e.targetId,e),Oc(t)?Nc(t):ls(t).x_()&&Dc(t,e))}function kc(n,e){const t=ie(n),r=ls(t);t.Ta.delete(e),r.x_()&&em(t,e),t.Ta.size===0&&(r.x_()?r.B_():Ir(t)&&t.Aa.set("Unknown"))}function Dc(n,e){if(n.Ra.$e(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(re.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}ls(n).H_(e)}function em(n,e){n.Ra.$e(e),ls(n).Y_(e)}function Nc(n){n.Ra=new pA({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>n.Ta.get(e)||null,lt:()=>n.datastore.serializer.databaseId}),ls(n).start(),n.Aa.aa()}function Oc(n){return Ir(n)&&!ls(n).M_()&&n.Ta.size>0}function Ir(n){return ie(n).Ia.size===0}function tm(n){n.Ra=void 0}async function T0(n){n.Aa.set("Online")}async function I0(n){n.Ta.forEach(((e,t)=>{Dc(n,e)}))}async function w0(n,e){tm(n),Oc(n)?(n.Aa.la(e),Nc(n)):n.Aa.set("Unknown")}async function A0(n,e,t){if(n.Aa.set("Online"),e instanceof Ug&&e.state===2&&e.cause)try{await(async function(s,i){const a=i.cause;for(const l of i.targetIds)s.Ta.has(l)&&(await s.remoteSyncer.rejectListen(l,a),s.Ta.delete(l),s.Ra.removeTarget(l))})(n,e)}catch(r){K(Er,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Do(n,r)}else if(e instanceof lo?n.Ra.Ye(e):e instanceof Fg?n.Ra.it(e):n.Ra.et(e),!t.isEqual(re.min()))try{const r=await Jg(n.localStore);t.compareTo(r)>=0&&await(function(i,a){const l=i.Ra.Pt(a);return l.targetChanges.forEach(((c,h)=>{if(c.resumeToken.approximateByteSize()>0){const d=i.Ta.get(h);d&&i.Ta.set(h,d.withResumeToken(c.resumeToken,a))}})),l.targetMismatches.forEach(((c,h)=>{const d=i.Ta.get(c);if(!d)return;i.Ta.set(c,d.withResumeToken(Xe.EMPTY_BYTE_STRING,d.snapshotVersion)),em(i,c);const g=new On(d.target,c,h,d.sequenceNumber);Dc(i,g)})),i.remoteSyncer.applyRemoteEvent(l)})(n,t)}catch(r){K(Er,"Failed to raise snapshot:",r),await Do(n,r)}}async function Do(n,e,t){if(!os(e))throw e;n.Ia.add(1),await vi(n),n.Aa.set("Offline"),t||(t=()=>Jg(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{K(Er,"Retrying IndexedDB access"),await t(),n.Ia.delete(1),await oa(n)}))}function nm(n,e){return e().catch((t=>Do(n,t,e)))}async function aa(n){const e=ie(n),t=Kn(e);let r=e.Pa.length>0?e.Pa[e.Pa.length-1].batchId:mc;for(;b0(e);)try{const s=await o0(e.localStore,r);if(s===null){e.Pa.length===0&&t.B_();break}r=s.batchId,S0(e,s)}catch(s){await Do(e,s)}rm(e)&&sm(e)}function b0(n){return Ir(n)&&n.Pa.length<10}function S0(n,e){n.Pa.push(e);const t=Kn(n);t.x_()&&t.Z_&&t.X_(e.mutations)}function rm(n){return Ir(n)&&!Kn(n).M_()&&n.Pa.length>0}function sm(n){Kn(n).start()}async function R0(n){Kn(n).na()}async function P0(n){const e=Kn(n);for(const t of n.Pa)e.X_(t.mutations)}async function C0(n,e,t){const r=n.Pa.shift(),s=Ac.from(r,e,t);await nm(n,(()=>n.remoteSyncer.applySuccessfulWrite(s))),await aa(n)}async function V0(n,e){e&&Kn(n).Z_&&await(async function(r,s){if((function(a){return fA(a)&&a!==k.ABORTED})(s.code)){const i=r.Pa.shift();Kn(r).N_(),await nm(r,(()=>r.remoteSyncer.rejectFailedWrite(i.batchId,s))),await aa(r)}})(n,e),rm(n)&&sm(n)}async function Mf(n,e){const t=ie(n);t.asyncQueue.verifyOperationInProgress(),K(Er,"RemoteStore received new credentials");const r=Ir(t);t.Ia.add(3),await vi(t),r&&t.Aa.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ia.delete(3),await oa(t)}async function k0(n,e){const t=ie(n);e?(t.Ia.delete(2),await oa(t)):e||(t.Ia.add(2),await vi(t),t.Aa.set("Unknown"))}function ls(n){return n.Va||(n.Va=(function(t,r,s){const i=ie(t);return i.ia(),new g0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:T0.bind(null,n),e_:I0.bind(null,n),n_:w0.bind(null,n),J_:A0.bind(null,n)}),n.da.push((async e=>{e?(n.Va.N_(),Oc(n)?Nc(n):n.Aa.set("Unknown")):(await n.Va.stop(),tm(n))}))),n.Va}function Kn(n){return n.ma||(n.ma=(function(t,r,s){const i=ie(t);return i.ia(),new m0(r,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)})(n.datastore,n.asyncQueue,{Zo:()=>Promise.resolve(),e_:R0.bind(null,n),n_:V0.bind(null,n),ea:P0.bind(null,n),ta:C0.bind(null,n)}),n.da.push((async e=>{e?(n.ma.N_(),await aa(n)):(await n.ma.stop(),n.Pa.length>0&&(K(Er,`Stopping write stream with ${n.Pa.length} pending writes`),n.Pa=[]))}))),n.ma}/**
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
 */class xc{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new pr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((a=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,s,i){const a=Date.now()+r,l=new xc(e,t,a,s,i);return l.start(r),l}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new W(k.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Mc(n,e){if(En("AsyncQueue",`${e}: ${n}`),os(n))return new W(k.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class qr{static emptySet(e){return new qr(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||X.comparator(t.key,r.key):(t,r)=>X.comparator(t.key,r.key),this.keyedMap=Vs(),this.sortedSet=new ke(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof qr)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Lf{constructor(){this.fa=new ke(X.comparator)}track(e){const t=e.doc.key,r=this.fa.get(t);r?e.type!==0&&r.type===3?this.fa=this.fa.insert(t,e):e.type===3&&r.type!==1?this.fa=this.fa.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.fa=this.fa.remove(t):e.type===1&&r.type===2?this.fa=this.fa.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):te(63341,{At:e,ga:r}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal(((t,r)=>{e.push(r)})),e}}class Zr{constructor(e,t,r,s,i,a,l,c,h){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=a,this.syncStateChanged=l,this.excludesMetadataChanges=c,this.hasCachedResults=h}static fromInitialDocuments(e,t,r,s,i){const a=[];return t.forEach((l=>{a.push({type:0,doc:l})})),new Zr(e,t,qr.emptySet(t),a,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&ea(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class D0{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((e=>e.ba()))}}class N0{constructor(){this.queries=Ff(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(t,r){const s=ie(t),i=s.queries;s.queries=Ff(),i.forEach(((a,l)=>{for(const c of l.wa)c.onError(r)}))})(this,new W(k.ABORTED,"Firestore shutting down"))}}function Ff(){return new Tr((n=>bg(n)),ea)}async function O0(n,e){const t=ie(n);let r=3;const s=e.query;let i=t.queries.get(s);i?!i.Sa()&&e.ba()&&(r=2):(i=new D0,r=e.ba()?0:1);try{switch(r){case 0:i.ya=await t.onListen(s,!0);break;case 1:i.ya=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(a){const l=Mc(a,`Initialization of query '${Nr(e.query)}' failed`);return void e.onError(l)}t.queries.set(s,i),i.wa.push(e),e.va(t.onlineState),i.ya&&e.Ca(i.ya)&&Lc(t)}async function x0(n,e){const t=ie(n),r=e.query;let s=3;const i=t.queries.get(r);if(i){const a=i.wa.indexOf(e);a>=0&&(i.wa.splice(a,1),i.wa.length===0?s=e.ba()?0:1:!i.Sa()&&e.ba()&&(s=2))}switch(s){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function M0(n,e){const t=ie(n);let r=!1;for(const s of e){const i=s.query,a=t.queries.get(i);if(a){for(const l of a.wa)l.Ca(s)&&(r=!0);a.ya=s}}r&&Lc(t)}function L0(n,e,t){const r=ie(n),s=r.queries.get(e);if(s)for(const i of s.wa)i.onError(t);r.queries.delete(e)}function Lc(n){n.Da.forEach((e=>{e.next()}))}var Vl,Uf;(Uf=Vl||(Vl={})).Fa="default",Uf.Cache="cache";class F0{constructor(e,t,r){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=r||{}}Ca(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Zr(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache||!this.ba())return!0;const r=t!=="Offline";return(!this.options.ka||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}La(e){e=Zr.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Vl.Cache}}/**
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
 */class im{constructor(e){this.key=e}}class om{constructor(e){this.key=e}}class U0{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=fe(),this.mutatedKeys=fe(),this.Xa=Sg(e),this.eu=new qr(this.Xa)}get tu(){return this.Ha}nu(e,t){const r=t?t.ru:new Lf,s=t?t.eu:this.eu;let i=t?t.mutatedKeys:this.mutatedKeys,a=s,l=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,h=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal(((d,g)=>{const _=s.get(d),S=ta(this.query,g)?g:null,V=!!_&&this.mutatedKeys.has(_.key),D=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let O=!1;_&&S?_.data.isEqual(S.data)?V!==D&&(r.track({type:3,doc:S}),O=!0):this.iu(_,S)||(r.track({type:2,doc:S}),O=!0,(c&&this.Xa(S,c)>0||h&&this.Xa(S,h)<0)&&(l=!0)):!_&&S?(r.track({type:0,doc:S}),O=!0):_&&!S&&(r.track({type:1,doc:_}),O=!0,(c||h)&&(l=!0)),O&&(S?(a=a.add(S),i=D?i.add(d):i.delete(d)):(a=a.delete(d),i=i.delete(d)))})),this.query.limit!==null)for(;a.size>this.query.limit;){const d=this.query.limitType==="F"?a.last():a.first();a=a.delete(d.key),i=i.delete(d.key),r.track({type:1,doc:d})}return{eu:a,ru:r,Ds:l,mutatedKeys:i}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,s){const i=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const a=e.ru.pa();a.sort(((d,g)=>(function(S,V){const D=O=>{switch(O){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return te(20277,{At:O})}};return D(S)-D(V)})(d.type,g.type)||this.Xa(d.doc,g.doc))),this.su(r),s=s!=null&&s;const l=t&&!s?this.ou():[],c=this.Za.size===0&&this.current&&!s?1:0,h=c!==this.Ya;return this.Ya=c,a.length!==0||h?{snapshot:new Zr(this.query,e.eu,i,a,e.mutatedKeys,c===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),_u:l}:{_u:l}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Lf,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach((t=>this.Ha=this.Ha.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ha=this.Ha.delete(t))),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=fe(),this.eu.forEach((r=>{this.au(r.key)&&(this.Za=this.Za.add(r.key))}));const t=[];return e.forEach((r=>{this.Za.has(r)||t.push(new om(r))})),this.Za.forEach((r=>{e.has(r)||t.push(new im(r))})),t}uu(e){this.Ha=e.qs,this.Za=fe();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return Zr.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const Fc="SyncEngine";class B0{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class j0{constructor(e){this.key=e,this.lu=!1}}class $0{constructor(e,t,r,s,i,a){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=a,this.hu={},this.Pu=new Tr((l=>bg(l)),ea),this.Tu=new Map,this.Iu=new Set,this.du=new ke(X.comparator),this.Eu=new Map,this.Au=new Rc,this.Ru={},this.Vu=new Map,this.mu=Yr.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function q0(n,e,t=!0){const r=fm(n);let s;const i=r.Pu.get(e);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await am(r,e,t,!0),s}async function H0(n,e){const t=fm(n);await am(t,e,!0,!1)}async function am(n,e,t,r){const s=await a0(n.localStore,Kt(e)),i=s.targetId,a=n.sharedClientState.addLocalQueryTarget(i,t);let l;return r&&(l=await z0(n,e,i,a==="current",s.resumeToken)),n.isPrimaryClient&&t&&Zg(n.remoteStore,s),l}async function z0(n,e,t,r,s){n.gu=(g,_,S)=>(async function(D,O,Q,$){let G=O.view.nu(Q);G.Ds&&(G=await kf(D.localStore,O.query,!1).then((({documents:w})=>O.view.nu(w,G))));const z=$&&$.targetChanges.get(O.targetId),ue=$&&$.targetMismatches.get(O.targetId)!=null,ge=O.view.applyChanges(G,D.isPrimaryClient,z,ue);return jf(D,O.targetId,ge._u),ge.snapshot})(n,g,_,S);const i=await kf(n.localStore,e,!0),a=new U0(e,i.qs),l=a.nu(i.documents),c=yi.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),h=a.applyChanges(l,n.isPrimaryClient,c);jf(n,t,h._u);const d=new B0(e,t,a);return n.Pu.set(e,d),n.Tu.has(t)?n.Tu.get(t).push(e):n.Tu.set(t,[e]),h.snapshot}async function W0(n,e,t){const r=ie(n),s=r.Pu.get(e),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter((a=>!ea(a,e)))),void r.Pu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Pl(r.localStore,s.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(s.targetId),t&&kc(r.remoteStore,s.targetId),kl(r,s.targetId)})).catch(is)):(kl(r,s.targetId),await Pl(r.localStore,s.targetId,!0))}async function K0(n,e){const t=ie(n),r=t.Pu.get(e),s=t.Tu.get(r.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),kc(t.remoteStore,r.targetId))}async function G0(n,e,t){const r=tb(n);try{const s=await(function(a,l){const c=ie(a),h=Ce.now(),d=l.reduce(((S,V)=>S.add(V.key)),fe());let g,_;return c.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let V=Tn(),D=fe();return c.Os.getEntries(S,d).next((O=>{V=O,V.forEach(((Q,$)=>{$.isValidDocument()||(D=D.add(Q))}))})).next((()=>c.localDocuments.getOverlayedDocuments(S,V))).next((O=>{g=O;const Q=[];for(const $ of l){const G=aA($,g.get($.key).overlayedDocument);G!=null&&Q.push(new Xn($.key,G,_g(G.value.mapValue),xt.exists(!0)))}return c.mutationQueue.addMutationBatch(S,h,Q,l)})).next((O=>{_=O;const Q=O.applyToLocalDocumentSet(g,D);return c.documentOverlayCache.saveOverlays(S,O.batchId,Q)}))})).then((()=>({batchId:_.batchId,changes:Pg(g)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),(function(a,l,c){let h=a.Ru[a.currentUser.toKey()];h||(h=new ke(ce)),h=h.insert(l,c),a.Ru[a.currentUser.toKey()]=h})(r,s.batchId,t),await Ei(r,s.changes),await aa(r.remoteStore)}catch(s){const i=Mc(s,"Failed to persist write");t.reject(i)}}async function lm(n,e){const t=ie(n);try{const r=await s0(t.localStore,e);e.targetChanges.forEach(((s,i)=>{const a=t.Eu.get(i);a&&(Te(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1,22616),s.addedDocuments.size>0?a.lu=!0:s.modifiedDocuments.size>0?Te(a.lu,14607):s.removedDocuments.size>0&&(Te(a.lu,42227),a.lu=!1))})),await Ei(t,r,e)}catch(r){await is(r)}}function Bf(n,e,t){const r=ie(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.Pu.forEach(((i,a)=>{const l=a.view.va(e);l.snapshot&&s.push(l.snapshot)})),(function(a,l){const c=ie(a);c.onlineState=l;let h=!1;c.queries.forEach(((d,g)=>{for(const _ of g.wa)_.va(l)&&(h=!0)})),h&&Lc(c)})(r.eventManager,e),s.length&&r.hu.J_(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Q0(n,e,t){const r=ie(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.Eu.get(e),i=s&&s.key;if(i){let a=new ke(X.comparator);a=a.insert(i,it.newNoDocument(i,re.min()));const l=fe().add(i),c=new sa(re.min(),new Map,new ke(ce),a,l);await lm(r,c),r.du=r.du.remove(i),r.Eu.delete(e),Uc(r)}else await Pl(r.localStore,e,!1).then((()=>kl(r,e,t))).catch(is)}async function J0(n,e){const t=ie(n),r=e.batch.batchId;try{const s=await r0(t.localStore,e);um(t,r,null),cm(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ei(t,s)}catch(s){await is(s)}}async function X0(n,e,t){const r=ie(n);try{const s=await(function(a,l){const c=ie(a);return c.persistence.runTransaction("Reject batch","readwrite-primary",(h=>{let d;return c.mutationQueue.lookupMutationBatch(h,l).next((g=>(Te(g!==null,37113),d=g.keys(),c.mutationQueue.removeMutationBatch(h,g)))).next((()=>c.mutationQueue.performConsistencyCheck(h))).next((()=>c.documentOverlayCache.removeOverlaysForBatchId(h,d,l))).next((()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(h,d))).next((()=>c.localDocuments.getDocuments(h,d)))}))})(r.localStore,e);um(r,e,t),cm(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ei(r,s)}catch(s){await is(s)}}function cm(n,e){(n.Vu.get(e)||[]).forEach((t=>{t.resolve()})),n.Vu.delete(e)}function um(n,e,t){const r=ie(n);let s=r.Ru[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.Ru[r.currentUser.toKey()]=s}}function kl(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Tu.get(e))n.Pu.delete(r),t&&n.hu.pu(r,t);n.Tu.delete(e),n.isPrimaryClient&&n.Au.zr(e).forEach((r=>{n.Au.containsKey(r)||hm(n,r)}))}function hm(n,e){n.Iu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(kc(n.remoteStore,t),n.du=n.du.remove(e),n.Eu.delete(t),Uc(n))}function jf(n,e,t){for(const r of t)r instanceof im?(n.Au.addReference(r.key,e),Y0(n,r)):r instanceof om?(K(Fc,"Document no longer in limbo: "+r.key),n.Au.removeReference(r.key,e),n.Au.containsKey(r.key)||hm(n,r.key)):te(19791,{yu:r})}function Y0(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Iu.has(r)||(K(Fc,"New document in limbo: "+t),n.Iu.add(r),Uc(n))}function Uc(n){for(;n.Iu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Iu.values().next().value;n.Iu.delete(e);const t=new X(Re.fromString(e)),r=n.mu.next();n.Eu.set(r,new j0(t)),n.du=n.du.insert(t,r),Zg(n.remoteStore,new On(Kt(Tc(t.path)),r,"TargetPurposeLimboResolution",Xo.ue))}}async function Ei(n,e,t){const r=ie(n),s=[],i=[],a=[];r.Pu.isEmpty()||(r.Pu.forEach(((l,c)=>{a.push(r.gu(c,e,t).then((h=>{var d;if((h||t)&&r.isPrimaryClient){const g=h?!h.fromCache:(d=t==null?void 0:t.targetChanges.get(c.targetId))===null||d===void 0?void 0:d.current;r.sharedClientState.updateQueryState(c.targetId,g?"current":"not-current")}if(h){s.push(h);const g=Cc.Es(c.targetId,h);i.push(g)}})))})),await Promise.all(a),r.hu.J_(s),await(async function(c,h){const d=ie(c);try{await d.persistence.runTransaction("notifyLocalViewChanges","readwrite",(g=>N.forEach(h,(_=>N.forEach(_.Is,(S=>d.persistence.referenceDelegate.addReference(g,_.targetId,S))).next((()=>N.forEach(_.ds,(S=>d.persistence.referenceDelegate.removeReference(g,_.targetId,S)))))))))}catch(g){if(!os(g))throw g;K(Vc,"Failed to update sequence numbers: "+g)}for(const g of h){const _=g.targetId;if(!g.fromCache){const S=d.Fs.get(_),V=S.snapshotVersion,D=S.withLastLimboFreeSnapshotVersion(V);d.Fs=d.Fs.insert(_,D)}}})(r.localStore,i))}async function Z0(n,e){const t=ie(n);if(!t.currentUser.isEqual(e)){K(Fc,"User change. New user:",e.toKey());const r=await Qg(t.localStore,e);t.currentUser=e,(function(i,a){i.Vu.forEach((l=>{l.forEach((c=>{c.reject(new W(k.CANCELLED,a))}))})),i.Vu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ei(t,r.Bs)}}function eb(n,e){const t=ie(n),r=t.Eu.get(e);if(r&&r.lu)return fe().add(r.key);{let s=fe();const i=t.Tu.get(e);if(!i)return s;for(const a of i){const l=t.Pu.get(a);s=s.unionWith(l.view.tu)}return s}}function fm(n){const e=ie(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=lm.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=eb.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Q0.bind(null,e),e.hu.J_=M0.bind(null,e.eventManager),e.hu.pu=L0.bind(null,e.eventManager),e}function tb(n){const e=ie(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=J0.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=X0.bind(null,e),e}class No{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ia(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return n0(this.persistence,new ZA,e.initialUser,this.serializer)}Du(e){return new Gg(Pc.Vi,this.serializer)}bu(e){return new c0}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}No.provider={build:()=>new No};class nb extends No{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){Te(this.persistence.referenceDelegate instanceof ko,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new FA(r,e.asyncQueue,t)}Du(e){const t=this.cacheSizeBytes!==void 0?gt.withCacheSize(this.cacheSizeBytes):gt.DEFAULT;return new Gg((r=>ko.Vi(r,t)),this.serializer)}}class Dl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Bf(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Z0.bind(null,this.syncEngine),await k0(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new N0})()}createDatastore(e){const t=ia(e.databaseInfo.databaseId),r=(function(i){return new p0(i)})(e.databaseInfo);return(function(i,a,l,c){return new y0(i,a,l,c)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,s,i,a,l){return new E0(r,s,i,a,l)})(this.localStore,this.datastore,e.asyncQueue,(t=>Bf(this.syncEngine,t,0)),(function(){return Of.C()?new Of:new u0})())}createSyncEngine(e,t){return(function(s,i,a,l,c,h,d){const g=new $0(s,i,a,l,c,h);return d&&(g.fu=!0),g})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await(async function(s){const i=ie(s);K(Er,"RemoteStore shutting down."),i.Ia.add(5),await vi(i),i.Ea.shutdown(),i.Aa.set("Unknown")})(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Dl.provider={build:()=>new Dl};/**
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
 */class rb{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):En("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
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
 */const Gn="FirestoreClient";class sb{constructor(e,t,r,s,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=rt.UNAUTHENTICATED,this.clientId=gc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=i,this.authCredentials.start(r,(async a=>{K(Gn,"Received user=",a.uid),await this.authCredentialListener(a),this.user=a})),this.appCheckCredentials.start(r,(a=>(K(Gn,"Received new app check token=",a),this.appCheckCredentialListener(a,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new pr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Mc(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Qa(n,e){n.asyncQueue.verifyOperationInProgress(),K(Gn,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async s=>{r.isEqual(s)||(await Qg(e.localStore,s),r=s)})),e.persistence.setDatabaseDeletedListener((()=>{$n("Terminating Firestore due to IndexedDb database deletion"),n.terminate().then((()=>{K("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((s=>{$n("Terminating Firestore due to IndexedDb database deletion failed",s)}))})),n._offlineComponents=e}async function $f(n,e){n.asyncQueue.verifyOperationInProgress();const t=await ib(n);K(Gn,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>Mf(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,s)=>Mf(e.remoteStore,s))),n._onlineComponents=e}async function ib(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){K(Gn,"Using user provided OfflineComponentProvider");try{await Qa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(s){return s.name==="FirebaseError"?s.code===k.FAILED_PRECONDITION||s.code===k.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11})(t))throw t;$n("Error using user provided cache. Falling back to memory cache: "+t),await Qa(n,new No)}}else K(Gn,"Using default OfflineComponentProvider"),await Qa(n,new nb(void 0));return n._offlineComponents}async function dm(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(K(Gn,"Using user provided OnlineComponentProvider"),await $f(n,n._uninitializedComponentsProvider._online)):(K(Gn,"Using default OnlineComponentProvider"),await $f(n,new Dl))),n._onlineComponents}function ob(n){return dm(n).then((e=>e.syncEngine))}async function qf(n){const e=await dm(n),t=e.eventManager;return t.onListen=q0.bind(null,e.syncEngine),t.onUnlisten=W0.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=H0.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=K0.bind(null,e.syncEngine),t}/**
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
 */function pm(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
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
 */const Hf=new Map;/**
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
 */const gm="firestore.googleapis.com",zf=!0;class Wf{constructor(e){var t,r;if(e.host===void 0){if(e.ssl!==void 0)throw new W(k.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gm,this.ssl=zf}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:zf;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Kg;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<MA)throw new W(k.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ew("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pm((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),(function(i){if(i.timeoutSeconds!==void 0){if(isNaN(i.timeoutSeconds))throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new W(k.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,s){return r.timeoutSeconds===s.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class la{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Wf({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new W(k.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new W(k.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Wf(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new hw;switch(r.type){case"firstParty":return new gw(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new W(k.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Hf.get(t);r&&(K("ComponentProvider","Removing Datastore"),Hf.delete(t),r.terminate())})(this),Promise.resolve()}}function ab(n,e,t,r={}){var s;n=Un(n,la);const i=ts(e),a=n._getSettings(),l=Object.assign(Object.assign({},a),{emulatorOptions:n._getEmulatorOptions()}),c=`${e}:${t}`;i&&(dp(`https://${c}`),pp("Firestore",!0)),a.host!==gm&&a.host!==c&&$n("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},a),{host:c,ssl:i,emulatorOptions:r});if(!mr(h,l)&&(n._setSettings(h),r.mockUserToken)){let d,g;if(typeof r.mockUserToken=="string")d=r.mockUserToken,g=rt.MOCK_USER;else{d=Lv(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const _=r.mockUserToken.sub||r.mockUserToken.user_id;if(!_)throw new W(k.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");g=new rt(_)}n._authCredentials=new fw(new sg(d,g))}}/**
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
 */class wr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new wr(this.firestore,e,this._query)}}class Be{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Be(this.firestore,e,this._key)}toJSON(){return{type:Be._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(mi(t,Be._jsonSchema))return new Be(e,r||null,new X(Re.fromString(t.referencePath)))}}Be._jsonSchemaVersion="firestore/documentReference/1.0",Be._jsonSchema={type:Ue("string",Be._jsonSchemaVersion),referencePath:Ue("string")};class Bn extends wr{constructor(e,t,r){super(e,t,Tc(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Be(this.firestore,null,new X(e))}withConverter(e){return new Bn(this.firestore,e,this._path)}}function Kf(n,e,...t){if(n=ze(n),og("collection","path",e),n instanceof la){const r=Re.fromString(e,...t);return rf(r),new Bn(n,null,r)}{if(!(n instanceof Be||n instanceof Bn))throw new W(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return rf(r),new Bn(n.firestore,null,r)}}function Nl(n,e,...t){if(n=ze(n),arguments.length===1&&(e=gc.newId()),og("doc","path",e),n instanceof la){const r=Re.fromString(e,...t);return nf(r),new Be(n,null,new X(r))}{if(!(n instanceof Be||n instanceof Bn))throw new W(k.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(Re.fromString(e,...t));return nf(r),new Be(n.firestore,n instanceof Bn?n.converter:null,new X(r))}}/**
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
 */const Gf="AsyncQueue";class Qf{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Xg(this,"async_queue_retry"),this.oc=()=>{const r=Ga();r&&K(Gf,"Visibility state changed to "+r.visibilityState),this.F_.y_()},this._c=e;const t=Ga();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ga();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise((()=>{}));const t=new pr;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Zu.push(e),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!os(e))throw e;K(Gf,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(e){const t=this._c.then((()=>(this.nc=!0,e().catch((r=>{throw this.tc=r,this.nc=!1,En("INTERNAL UNHANDLED ERROR: ",Jf(r)),r})).then((r=>(this.nc=!1,r))))));return this._c=t,t}enqueueAfterDelay(e,t,r){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const s=xc.createAndSchedule(this,e,t,r,(i=>this.lc(i)));return this.ec.push(s),s}ac(){this.tc&&te(47125,{hc:Jf(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do e=this._c,await e;while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then((()=>{this.ec.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.ec)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Pc()}))}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function Jf(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
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
 */function Xf(n){return(function(t,r){if(typeof t!="object"||t===null)return!1;const s=t;for(const i of r)if(i in s&&typeof s[i]=="function")return!0;return!1})(n,["next","error","complete"])}class es extends la{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new Qf,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Qf(e),this._firestoreClient=void 0,await e}}}function lb(n,e){const t=typeof n=="object"?n:yp(),r=typeof n=="string"?n:So,s=nc(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=xv("firestore");i&&ab(s,...i)}return s}function mm(n){if(n._terminated)throw new W(k.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||cb(n),n._firestoreClient}function cb(n){var e,t,r;const s=n._freezeSettings(),i=(function(l,c,h,d){return new kw(l,c,h,d.host,d.ssl,d.experimentalForceLongPolling,d.experimentalAutoDetectLongPolling,pm(d.experimentalLongPollingOptions),d.useFetchStreams,d.isUsingEmulator)})(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new sb(n._authCredentials,n._appCheckCredentials,n._queue,i,n._componentsProvider&&(function(l){const c=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(c),_online:c}})(n._componentsProvider))}/**
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
 */class At{constructor(e){this._byteString=e}static fromBase64String(e){try{return new At(Xe.fromBase64String(e))}catch(t){throw new W(k.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new At(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:At._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(mi(e,At._jsonSchema))return At.fromBase64String(e.bytes)}}At._jsonSchemaVersion="firestore/bytes/1.0",At._jsonSchema={type:Ue("string",At._jsonSchemaVersion),bytes:Ue("string")};/**
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
 */class ca{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new W(k.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class ua{constructor(e){this._methodName=e}}/**
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
 */class Qt{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new W(k.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new W(k.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return ce(this._lat,e._lat)||ce(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Qt._jsonSchemaVersion}}static fromJSON(e){if(mi(e,Qt._jsonSchema))return new Qt(e.latitude,e.longitude)}}Qt._jsonSchemaVersion="firestore/geoPoint/1.0",Qt._jsonSchema={type:Ue("string",Qt._jsonSchemaVersion),latitude:Ue("number"),longitude:Ue("number")};/**
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
 */class Jt{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,s){if(r.length!==s.length)return!1;for(let i=0;i<r.length;++i)if(r[i]!==s[i])return!1;return!0})(this._values,e._values)}toJSON(){return{type:Jt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(mi(e,Jt._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new Jt(e.vectorValues);throw new W(k.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Jt._jsonSchemaVersion="firestore/vectorValue/1.0",Jt._jsonSchema={type:Ue("string",Jt._jsonSchemaVersion),vectorValues:Ue("object")};/**
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
 */const ub=/^__.*__$/;class hb{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Xn(e,this.data,this.fieldMask,t,this.fieldTransforms):new _i(e,this.data,t,this.fieldTransforms)}}class _m{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Xn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function ym(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw te(40011,{Ec:n})}}class Bc{constructor(e,t,r,s,i,a){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Ac(),this.fieldTransforms=i||[],this.fieldMask=a||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Bc(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.fc(e),s}gc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Rc({path:r,mc:!1});return s.Ac(),s}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return Oo(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(e.length===0)throw this.wc("Document fields must not be empty");if(ym(this.Ec)&&ub.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class fb{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ia(e)}Dc(e,t,r,s=!1){return new Bc({Ec:e,methodName:t,bc:r,path:Je.emptyPath(),mc:!1,Sc:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function jc(n){const e=n._freezeSettings(),t=ia(n._databaseId);return new fb(n._databaseId,!!e.ignoreUndefinedProperties,t)}function db(n,e,t,r,s,i={}){const a=n.Dc(i.merge||i.mergeFields?2:0,e,t,s);qc("Data must be an object, but it was:",a,r);const l=vm(r,a);let c,h;if(i.merge)c=new Et(a.fieldMask),h=a.fieldTransforms;else if(i.mergeFields){const d=[];for(const g of i.mergeFields){const _=Ol(e,g,t);if(!a.contains(_))throw new W(k.INVALID_ARGUMENT,`Field '${_}' is specified in your field mask but missing from your input data.`);Tm(d,_)||d.push(_)}c=new Et(d),h=a.fieldTransforms.filter((g=>c.covers(g.field)))}else c=null,h=a.fieldTransforms;return new hb(new mt(l),c,h)}class ha extends ua{_toFieldTransform(e){if(e.Ec!==2)throw e.Ec===1?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ha}}class $c extends ua{_toFieldTransform(e){return new rA(e.path,new ii)}isEqual(e){return e instanceof $c}}function pb(n,e,t,r){const s=n.Dc(1,e,t);qc("Data must be an object, but it was:",s,r);const i=[],a=mt.empty();Jn(r,((c,h)=>{const d=Hc(e,c,t);h=ze(h);const g=s.gc(d);if(h instanceof ha)i.push(d);else{const _=Ti(h,g);_!=null&&(i.push(d),a.set(d,_))}}));const l=new Et(i);return new _m(a,l,s.fieldTransforms)}function gb(n,e,t,r,s,i){const a=n.Dc(1,e,t),l=[Ol(e,r,t)],c=[s];if(i.length%2!=0)throw new W(k.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let _=0;_<i.length;_+=2)l.push(Ol(e,i[_])),c.push(i[_+1]);const h=[],d=mt.empty();for(let _=l.length-1;_>=0;--_)if(!Tm(h,l[_])){const S=l[_];let V=c[_];V=ze(V);const D=a.gc(S);if(V instanceof ha)h.push(S);else{const O=Ti(V,D);O!=null&&(h.push(S),d.set(S,O))}}const g=new Et(h);return new _m(d,g,a.fieldTransforms)}function mb(n,e,t,r=!1){return Ti(t,n.Dc(r?4:3,e))}function Ti(n,e){if(Em(n=ze(n)))return qc("Unsupported field value:",e,n),vm(n,e);if(n instanceof ua)return(function(r,s){if(!ym(s.Ec))throw s.wc(`${r._methodName}() can only be used with update() and set()`);if(!s.path)throw s.wc(`${r._methodName}() is not currently supported inside arrays`);const i=r._toFieldTransform(s);i&&s.fieldTransforms.push(i)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.mc&&e.Ec!==4)throw e.wc("Nested arrays are not supported");return(function(r,s){const i=[];let a=0;for(const l of r){let c=Ti(l,s.yc(a));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),a++}return{arrayValue:{values:i}}})(n,e)}return(function(r,s){if((r=ze(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return eA(s.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const i=Ce.fromDate(r);return{timestampValue:Vo(s.serializer,i)}}if(r instanceof Ce){const i=new Ce(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Vo(s.serializer,i)}}if(r instanceof Qt)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof At)return{bytesValue:Bg(s.serializer,r._byteString)};if(r instanceof Be){const i=s.databaseId,a=r.firestore._databaseId;if(!a.isEqual(i))throw s.wc(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Sc(r.firestore._databaseId||s.databaseId,r._key.path)}}if(r instanceof Jt)return(function(a,l){return{mapValue:{fields:{[gg]:{stringValue:mg},[Ro]:{arrayValue:{values:a.toArray().map((h=>{if(typeof h!="number")throw l.wc("VectorValues must only contain numeric values.");return Ic(l.serializer,h)}))}}}}}})(r,s);throw s.wc(`Unsupported field value: ${Jo(r)}`)})(n,e)}function vm(n,e){const t={};return cg(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Jn(n,((r,s)=>{const i=Ti(s,e.Vc(r));i!=null&&(t[r]=i)})),{mapValue:{fields:t}}}function Em(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Ce||n instanceof Qt||n instanceof At||n instanceof Be||n instanceof ua||n instanceof Jt)}function qc(n,e,t){if(!Em(t)||!ag(t)){const r=Jo(t);throw r==="an object"?e.wc(n+" a custom object"):e.wc(n+" "+r)}}function Ol(n,e,t){if((e=ze(e))instanceof ca)return e._internalPath;if(typeof e=="string")return Hc(n,e);throw Oo("Field path arguments must be of type string or ",n,!1,void 0,t)}const _b=new RegExp("[~\\*/\\[\\]]");function Hc(n,e,t){if(e.search(_b)>=0)throw Oo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ca(...e.split("."))._internalPath}catch{throw Oo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Oo(n,e,t,r,s){const i=r&&!r.isEmpty(),a=s!==void 0;let l=`Function ${e}() called with invalid data`;t&&(l+=" (via `toFirestore()`)"),l+=". ";let c="";return(i||a)&&(c+=" (found",i&&(c+=` in field ${r}`),a&&(c+=` in document ${s}`),c+=")"),new W(k.INVALID_ARGUMENT,l+n+c)}function Tm(n,e){return n.some((t=>t.isEqual(e)))}/**
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
 */class Im{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Be(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new yb(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(zc("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class yb extends Im{data(){return super.data()}}function zc(n,e){return typeof e=="string"?Hc(n,e):e instanceof ca?e._internalPath:e._delegate._internalPath}/**
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
 */function vb(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new W(k.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Wc{}class wm extends Wc{}function Eb(n,e,...t){let r=[];e instanceof Wc&&r.push(e),r=r.concat(t),(function(i){const a=i.filter((c=>c instanceof Gc)).length,l=i.filter((c=>c instanceof Kc)).length;if(a>1||a>0&&l>0)throw new W(k.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const s of r)n=s._apply(n);return n}class Kc extends wm{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Kc(e,t,r)}_apply(e){const t=this._parse(e);return Am(e._query,t),new wr(e.firestore,e.converter,Il(e._query,t))}_parse(e){const t=jc(e.firestore);return(function(i,a,l,c,h,d,g){let _;if(h.isKeyField()){if(d==="array-contains"||d==="array-contains-any")throw new W(k.INVALID_ARGUMENT,`Invalid Query. You can't perform '${d}' queries on documentId().`);if(d==="in"||d==="not-in"){Zf(g,d);const V=[];for(const D of g)V.push(Yf(c,i,D));_={arrayValue:{values:V}}}else _=Yf(c,i,g)}else d!=="in"&&d!=="not-in"&&d!=="array-contains-any"||Zf(g,d),_=mb(l,a,g,d==="in"||d==="not-in");return Fe.create(h,d,_)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}class Gc extends Wc{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Gc(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Lt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(s,i){let a=s;const l=i.getFlattenedFilters();for(const c of l)Am(a,c),a=Il(a,c)})(e._query,t),new wr(e.firestore,e.converter,Il(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Qc extends wm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Qc(e,t)}_apply(e){const t=(function(s,i,a){if(s.startAt!==null)throw new W(k.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new W(k.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new si(i,a)})(e._query,this._field,this._direction);return new wr(e.firestore,e.converter,(function(s,i){const a=s.explicitOrderBy.concat([i]);return new as(s.path,s.collectionGroup,a,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)})(e._query,t))}}function Tb(n,e="asc"){const t=e,r=zc("orderBy",n);return Qc._create(r,t)}function Yf(n,e,t){if(typeof(t=ze(t))=="string"){if(t==="")throw new W(k.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ag(e)&&t.indexOf("/")!==-1)throw new W(k.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(Re.fromString(t));if(!X.isDocumentKey(r))throw new W(k.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ff(n,new X(r))}if(t instanceof Be)return ff(n,t._key);throw new W(k.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jo(t)}.`)}function Zf(n,e){if(!Array.isArray(n)||n.length===0)throw new W(k.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function Am(n,e){const t=(function(s,i){for(const a of s)for(const l of a.getFlattenedFilters())if(i.indexOf(l.op)>=0)return l.op;return null})(n.filters,(function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new W(k.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new W(k.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class Ib{convertValue(e,t="none"){switch(Wn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return xe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(zn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw te(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return Jn(e,((s,i)=>{r[s]=this.convertValue(i,t)})),r}convertVectorValue(e){var t,r,s;const i=(s=(r=(t=e.fields)===null||t===void 0?void 0:t[Ro].arrayValue)===null||r===void 0?void 0:r.values)===null||s===void 0?void 0:s.map((a=>xe(a.doubleValue)));return new Jt(i)}convertGeoPoint(e){return new Qt(xe(e.latitude),xe(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Zo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(ti(e));default:return null}}convertTimestamp(e){const t=Hn(e);return new Ce(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=Re.fromString(e);Te(Wg(r),9688,{name:e});const s=new ni(r.get(1),r.get(3)),i=new X(r.popFirst(5));return s.isEqual(t)||En(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function wb(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class Ds{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class gr extends Im{constructor(e,t,r,s,i,a){super(e,t,r,s,a),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new co(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(zc("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new W(k.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=gr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}gr._jsonSchemaVersion="firestore/documentSnapshot/1.0",gr._jsonSchema={type:Ue("string",gr._jsonSchemaVersion),bundleSource:Ue("string","DocumentSnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class co extends gr{data(e={}){return super.data(e)}}class Hr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Ds(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new co(this._firestore,this._userDataWriter,r.key,r,new Ds(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new W(k.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(s,i){if(s._snapshot.oldDocs.isEmpty()){let a=0;return s._snapshot.docChanges.map((l=>{const c=new co(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ds(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);return l.doc,{type:"added",doc:c,oldIndex:-1,newIndex:a++}}))}{let a=s._snapshot.oldDocs;return s._snapshot.docChanges.filter((l=>i||l.type!==3)).map((l=>{const c=new co(s._firestore,s._userDataWriter,l.doc.key,l.doc,new Ds(s._snapshot.mutatedKeys.has(l.doc.key),s._snapshot.fromCache),s.query.converter);let h=-1,d=-1;return l.type!==0&&(h=a.indexOf(l.doc.key),a=a.delete(l.doc.key)),l.type!==1&&(a=a.add(l.doc),d=a.indexOf(l.doc.key)),{type:Ab(l.type),doc:c,oldIndex:h,newIndex:d}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new W(k.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Hr._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=gc.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],s=[];return this.docs.forEach((i=>{i._document!==null&&(t.push(i._document),r.push(this._userDataWriter.convertObjectMap(i._document.data.value.mapValue.fields,"previous")),s.push(i.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Ab(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return te(61501,{type:n})}}Hr._jsonSchemaVersion="firestore/querySnapshot/1.0",Hr._jsonSchema={type:Ue("string",Hr._jsonSchemaVersion),bundleSource:Ue("string","QuerySnapshot"),bundleName:Ue("string"),bundle:Ue("string")};class bm extends Ib{constructor(e){super(),this.firestore=e}convertBytes(e){return new At(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Be(this.firestore,null,t)}}function bb(n,e,t,...r){n=Un(n,Be);const s=Un(n.firestore,es),i=jc(s);let a;return a=typeof(e=ze(e))=="string"||e instanceof ca?gb(i,"updateDoc",n._key,e,t,r):pb(i,"updateDoc",n._key,e),Jc(s,[a.toMutation(n._key,xt.exists(!0))])}function Sb(n){return Jc(Un(n.firestore,es),[new wc(n._key,xt.none())])}function Rb(n,e){const t=Un(n.firestore,es),r=Nl(n),s=wb(n.converter,e);return Jc(t,[db(jc(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,xt.exists(!1))]).then((()=>r))}function Pb(n,...e){var t,r,s;n=ze(n);let i={includeMetadataChanges:!1,source:"default"},a=0;typeof e[a]!="object"||Xf(e[a])||(i=e[a++]);const l={includeMetadataChanges:i.includeMetadataChanges,source:i.source};if(Xf(e[a])){const g=e[a];e[a]=(t=g.next)===null||t===void 0?void 0:t.bind(g),e[a+1]=(r=g.error)===null||r===void 0?void 0:r.bind(g),e[a+2]=(s=g.complete)===null||s===void 0?void 0:s.bind(g)}let c,h,d;if(n instanceof Be)h=Un(n.firestore,es),d=Tc(n._key.path),c={next:g=>{e[a]&&e[a](Cb(h,n,g))},error:e[a+1],complete:e[a+2]};else{const g=Un(n,wr);h=Un(g.firestore,es),d=g._query;const _=new bm(h);c={next:S=>{e[a]&&e[a](new Hr(h,_,g,S))},error:e[a+1],complete:e[a+2]},vb(n._query)}return(function(_,S,V,D){const O=new rb(D),Q=new F0(S,O,V);return _.asyncQueue.enqueueAndForget((async()=>O0(await qf(_),Q))),()=>{O.Ou(),_.asyncQueue.enqueueAndForget((async()=>x0(await qf(_),Q)))}})(mm(h),d,l,c)}function Jc(n,e){return(function(r,s){const i=new pr;return r.asyncQueue.enqueueAndForget((async()=>G0(await ob(r),s,i))),i.promise})(mm(n),e)}function Cb(n,e,t){const r=t.docs.get(e._key),s=new bm(n);return new gr(n,s,e._key,r,new Ds(t.hasPendingWrites,t.fromCache),e.converter)}function Ja(){return new $c("serverTimestamp")}(function(e,t=!0){(function(s){ss=s})(ns),Kr(new _r("firestore",((r,{instanceIdentifier:s,options:i})=>{const a=r.getProvider("app").getImmediate(),l=new es(new dw(r.getProvider("auth-internal")),new mw(a,r.getProvider("app-check-internal")),(function(h,d){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new W(k.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ni(h.options.projectId,d)})(a,s),a);return i=Object.assign({useFetchStreams:t},i),l._setSettings(i),l}),"PUBLIC").setMultipleInstances(!0)),Ln(Xh,Yh,e),Ln(Xh,Yh,"esm2017")})();var Vb="firebase",kb="11.10.0";/**
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
 */Ln(Vb,kb,"app");const Db={apiKey:"AIzaSyB6kGON2V4RWRp8Q4T1agPEWTC777aBMBE",authDomain:"nasdaq-checklist-marlon.firebaseapp.com",projectId:"nasdaq-checklist-marlon",storageBucket:"nasdaq-checklist-marlon.firebasestorage.app",messagingSenderId:"508391209615",appId:"1:508391209615:web:fb8e89880e2a60c81ecefa"},Sm=_p(Db),Xc=cw(Sm),Gi=lb(Sm),Rm=new hn;Rm.setCustomParameters({prompt:"select_account"});function Nb(){return yI(Xc,Rm)}function Ob(){return YT(Xc)}const xb={class:"page-shell"},Mb={class:"app-card"},Lb={class:"hero-row"},Fb={class:"tts-row"},Ub=["title"],Bb={key:0,class:"tts-icon"},jb={key:1,class:"tts-icon"},$b={key:2,class:"tts-icon"},qb=["disabled"],Hb={key:0,class:"auth-panel"},zb=["src","alt"],Wb={class:"auth-copy"},Kb=["disabled"],Gb=["disabled"],Qb={key:0,class:"error-banner"},Jb={class:"stats-row"},Xb={class:"stat-pill"},Yb={class:"stat-pill"},Zb={class:"input-row"},eS=["disabled"],tS={class:"progress-header"},nS={class:"progress-track"},rS={key:1,class:"task-list"},sS=["aria-pressed","onClick"],iS=["onClick"],oS={key:2,class:"empty-state"},Ss=10,ed="nasdaq-mentor-guest-checklist",aS={__name:"App",setup(n){const e=Pn(null),t=Pn(!1),r=Pn(!1),s=Pn(""),i=Pn(""),a=Pn([]);let l=null;const c=Pn(!0),h=Pn(!1);let d=null;function g(T){if(!("speechSynthesis"in window))return;window.speechSynthesis.cancel();const m=new SpeechSynthesisUtterance(T);m.lang="es-ES",m.rate=.95,m.onstart=()=>{h.value=!0},m.onend=()=>{h.value=!1},m.onerror=()=>{h.value=!1},window.speechSynthesis.speak(m)}function _(){const T=a.value.filter(De=>De.completed),m=a.value.filter(De=>!De.completed),pe=[];return T.length&&pe.push(`Tareas completadas: ${T.map(De=>De.title).join(". ")}.`),m.length&&pe.push(`Tareas pendientes: ${m.map(De=>De.title).join(". ")}.`),pe.length?pe.join(" "):"No hay tareas registradas para hoy."}function S(){d=setInterval(()=>{if(!c.value)return;const T=new Date,m=T.getMinutes();T.getSeconds()===0&&m%5===0&&g(_())},1e3)}function V(){d&&(clearInterval(d),d=null)}function D(){g(_())}const O=Zi(()=>a.value.filter(T=>T.completed).length),Q=Zi(()=>a.value.length-O.value),$=Zi(()=>a.value.length?Math.round(O.value/a.value.length*100):0);function G(){const T=localStorage.getItem(ed);if(!T){a.value=[];return}try{const m=JSON.parse(T);a.value=Array.isArray(m)?m.slice(0,Ss):[]}catch{a.value=[]}}function z(){localStorage.setItem(ed,JSON.stringify(a.value))}function ue(){l&&(l(),l=null)}function ge(T){ue();const m=Eb(Kf(Gi,"users",T,"tasks"),Tb("createdAt","desc"));l=Pb(m,pe=>{a.value=pe.docs.map(De=>({id:De.id,title:De.data().title??"",completed:!!De.data().completed}))})}async function w(){const T=i.value.trim();!T||a.value.length>=Ss||(e.value?await Rb(Kf(Gi,"users",e.value.uid,"tasks"),{title:T,completed:!1,createdAt:Ja(),updatedAt:Ja()}):a.value.unshift({id:crypto.randomUUID(),title:T,completed:!1}),i.value="")}async function y(T){if(e.value){const m=a.value.find(pe=>pe.id===T);if(!m)return;await bb(Nl(Gi,"users",e.value.uid,"tasks",T),{completed:!m.completed,updatedAt:Ja()});return}a.value=a.value.map(m=>m.id!==T?m:{...m,completed:!m.completed})}async function E(T){if(e.value){await Sb(Nl(Gi,"users",e.value.uid,"tasks",T));return}a.value=a.value.filter(m=>m.id!==T)}async function I(){r.value=!0,s.value="";try{await Nb()}catch(T){s.value="No se pudo iniciar sesion con Google.",console.error(T)}finally{r.value=!1}}async function b(){r.value=!0,s.value="";try{await Ob()}catch(T){s.value="No se pudo cerrar sesion.",console.error(T)}finally{r.value=!1}}return Xi(a,()=>{e.value||z()},{deep:!0}),Jl(()=>{V(),ue(),"speechSynthesis"in window&&window.speechSynthesis.cancel()}),Md(()=>{S(),XT(Xc,T=>{if(ue(),e.value=T,t.value=!0,T){ge(T.uid);return}G()})}),(T,m)=>(dt(),yt("main",xb,[le("section",Mb,[le("div",Lb,[le("div",null,[m[2]||(m[2]=le("p",{class:"eyebrow"},"Checklist",-1)),m[3]||(m[3]=le("h1",null,"Tareas del dia",-1)),m[4]||(m[4]=le("p",{class:"subcopy"}," Organiza tu enfoque diario y marca tu progreso con una cuenta de Google. ",-1)),le("div",Fb,[le("button",{class:Ws(["tts-toggle",{active:c.value}]),title:c.value?"Desactivar voz":"Activar voz",onClick:m[0]||(m[0]=pe=>c.value=!c.value)},[h.value?(dt(),yt("span",Bb,"🔊")):c.value?(dt(),yt("span",jb,"🔔")):(dt(),yt("span",$b,"🔕")),rp(" "+wt(c.value?"Voz activada":"Voz desactivada"),1)],10,Ub),le("button",{class:"tts-preview",disabled:!a.value.length,onClick:D}," Probar ahora ",8,qb)])]),t.value?(dt(),yt("div",Hb,[e.value?(dt(),yt(Ct,{key:0},[e.value.photoURL?(dt(),yt("img",{key:0,src:e.value.photoURL,alt:e.value.displayName||"Usuario",class:"avatar"},null,8,zb)):xa("",!0),le("div",Wb,[le("strong",null,wt(e.value.displayName),1),le("span",null,wt(e.value.email),1)]),le("button",{class:"ghost-button",disabled:r.value,onClick:b}," Salir ",8,Kb)],64)):(dt(),yt("button",{key:1,class:"google-button",disabled:r.value,onClick:I},wt(r.value?"Conectando...":"Iniciar sesion con Google"),9,Gb))])):xa("",!0)]),s.value?(dt(),yt("p",Qb,wt(s.value),1)):xa("",!0),le("div",Jb,[le("div",Xb,[m[5]||(m[5]=le("span",null,"Completadas",-1)),le("strong",null,wt(O.value),1)]),le("div",Yb,[m[6]||(m[6]=le("span",null,"Pendientes",-1)),le("strong",null,wt(Q.value),1)]),le("div",{class:"stat-pill"},[m[7]||(m[7]=le("span",null,"Maximo",-1)),le("strong",null,wt(Ss))])]),le("div",Zb,[q_(le("input",{"onUpdate:modelValue":m[1]||(m[1]=pe=>i.value=pe),class:"task-input",type:"text",maxlength:"120",placeholder:"Ejemplo: Esperar confirmacion en zona",onKeydown:Tv(w,["enter"])},null,544),[[vv,i.value]]),le("button",{class:"primary-button",disabled:a.value.length>=Ss,onClick:w}," Agregar ",8,eS)]),le("p",{class:"helper-text"},"Puedes crear hasta "+wt(Ss)+" tareas para el dia."),le("div",tS,[m[8]||(m[8]=le("span",null,"Progreso",-1)),le("strong",null,wt($.value)+"%",1)]),le("div",nS,[le("div",{class:"progress-fill",style:Uo({width:`${$.value}%`})},null,4)]),a.value.length?(dt(),yt("div",rS,[(dt(!0),yt(Ct,null,cy(a.value,pe=>(dt(),yt("article",{key:pe.id,class:Ws(["task-card",{complete:pe.completed}])},[le("button",{class:"toggle-button","aria-pressed":pe.completed,onClick:De=>y(pe.id)},[...m[9]||(m[9]=[le("span",{class:"toggle-indicator"},null,-1)])],8,sS),le("p",null,wt(pe.title),1),le("button",{class:"remove-button",onClick:De=>E(pe.id)},"×",8,iS)],2))),128))])):(dt(),yt("div",oS,[...m[10]||(m[10]=[le("p",null,"No hay tareas todavia. Inicia con una meta concreta para hoy.",-1)])]))])]))}};Av(aS).mount("#app");
