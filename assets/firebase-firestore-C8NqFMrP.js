import{L as ll,_ as cl,C as hl,r as Yi,a as fl,F as dl,b as qt,g as ml,c as pl,d as gl,i as Jo,p as _l,u as yl,e as Tl,f as El,S as vl,h as St,j as Il,k as Al}from"./firebase-auth-fuRDQpby.js";var Ji=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Wt,Zo;(function(){var r;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function t(E,m){function _(){}_.prototype=m.prototype,E.D=m.prototype,E.prototype=new _,E.prototype.constructor=E,E.C=function(y,T,A){for(var p=Array(arguments.length-2),Ft=2;Ft<arguments.length;Ft++)p[Ft-2]=arguments[Ft];return m.prototype[T].apply(y,p)}}function e(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}t(n,e),n.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(E,m,_){_||(_=0);var y=Array(16);if(typeof m=="string")for(var T=0;16>T;++T)y[T]=m.charCodeAt(_++)|m.charCodeAt(_++)<<8|m.charCodeAt(_++)<<16|m.charCodeAt(_++)<<24;else for(T=0;16>T;++T)y[T]=m[_++]|m[_++]<<8|m[_++]<<16|m[_++]<<24;m=E.g[0],_=E.g[1],T=E.g[2];var A=E.g[3],p=m+(A^_&(T^A))+y[0]+3614090360&4294967295;m=_+(p<<7&4294967295|p>>>25),p=A+(T^m&(_^T))+y[1]+3905402710&4294967295,A=m+(p<<12&4294967295|p>>>20),p=T+(_^A&(m^_))+y[2]+606105819&4294967295,T=A+(p<<17&4294967295|p>>>15),p=_+(m^T&(A^m))+y[3]+3250441966&4294967295,_=T+(p<<22&4294967295|p>>>10),p=m+(A^_&(T^A))+y[4]+4118548399&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(T^m&(_^T))+y[5]+1200080426&4294967295,A=m+(p<<12&4294967295|p>>>20),p=T+(_^A&(m^_))+y[6]+2821735955&4294967295,T=A+(p<<17&4294967295|p>>>15),p=_+(m^T&(A^m))+y[7]+4249261313&4294967295,_=T+(p<<22&4294967295|p>>>10),p=m+(A^_&(T^A))+y[8]+1770035416&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(T^m&(_^T))+y[9]+2336552879&4294967295,A=m+(p<<12&4294967295|p>>>20),p=T+(_^A&(m^_))+y[10]+4294925233&4294967295,T=A+(p<<17&4294967295|p>>>15),p=_+(m^T&(A^m))+y[11]+2304563134&4294967295,_=T+(p<<22&4294967295|p>>>10),p=m+(A^_&(T^A))+y[12]+1804603682&4294967295,m=_+(p<<7&4294967295|p>>>25),p=A+(T^m&(_^T))+y[13]+4254626195&4294967295,A=m+(p<<12&4294967295|p>>>20),p=T+(_^A&(m^_))+y[14]+2792965006&4294967295,T=A+(p<<17&4294967295|p>>>15),p=_+(m^T&(A^m))+y[15]+1236535329&4294967295,_=T+(p<<22&4294967295|p>>>10),p=m+(T^A&(_^T))+y[1]+4129170786&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^T&(m^_))+y[6]+3225465664&4294967295,A=m+(p<<9&4294967295|p>>>23),p=T+(m^_&(A^m))+y[11]+643717713&4294967295,T=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(T^A))+y[0]+3921069994&4294967295,_=T+(p<<20&4294967295|p>>>12),p=m+(T^A&(_^T))+y[5]+3593408605&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^T&(m^_))+y[10]+38016083&4294967295,A=m+(p<<9&4294967295|p>>>23),p=T+(m^_&(A^m))+y[15]+3634488961&4294967295,T=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(T^A))+y[4]+3889429448&4294967295,_=T+(p<<20&4294967295|p>>>12),p=m+(T^A&(_^T))+y[9]+568446438&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^T&(m^_))+y[14]+3275163606&4294967295,A=m+(p<<9&4294967295|p>>>23),p=T+(m^_&(A^m))+y[3]+4107603335&4294967295,T=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(T^A))+y[8]+1163531501&4294967295,_=T+(p<<20&4294967295|p>>>12),p=m+(T^A&(_^T))+y[13]+2850285829&4294967295,m=_+(p<<5&4294967295|p>>>27),p=A+(_^T&(m^_))+y[2]+4243563512&4294967295,A=m+(p<<9&4294967295|p>>>23),p=T+(m^_&(A^m))+y[7]+1735328473&4294967295,T=A+(p<<14&4294967295|p>>>18),p=_+(A^m&(T^A))+y[12]+2368359562&4294967295,_=T+(p<<20&4294967295|p>>>12),p=m+(_^T^A)+y[5]+4294588738&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^T)+y[8]+2272392833&4294967295,A=m+(p<<11&4294967295|p>>>21),p=T+(A^m^_)+y[11]+1839030562&4294967295,T=A+(p<<16&4294967295|p>>>16),p=_+(T^A^m)+y[14]+4259657740&4294967295,_=T+(p<<23&4294967295|p>>>9),p=m+(_^T^A)+y[1]+2763975236&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^T)+y[4]+1272893353&4294967295,A=m+(p<<11&4294967295|p>>>21),p=T+(A^m^_)+y[7]+4139469664&4294967295,T=A+(p<<16&4294967295|p>>>16),p=_+(T^A^m)+y[10]+3200236656&4294967295,_=T+(p<<23&4294967295|p>>>9),p=m+(_^T^A)+y[13]+681279174&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^T)+y[0]+3936430074&4294967295,A=m+(p<<11&4294967295|p>>>21),p=T+(A^m^_)+y[3]+3572445317&4294967295,T=A+(p<<16&4294967295|p>>>16),p=_+(T^A^m)+y[6]+76029189&4294967295,_=T+(p<<23&4294967295|p>>>9),p=m+(_^T^A)+y[9]+3654602809&4294967295,m=_+(p<<4&4294967295|p>>>28),p=A+(m^_^T)+y[12]+3873151461&4294967295,A=m+(p<<11&4294967295|p>>>21),p=T+(A^m^_)+y[15]+530742520&4294967295,T=A+(p<<16&4294967295|p>>>16),p=_+(T^A^m)+y[2]+3299628645&4294967295,_=T+(p<<23&4294967295|p>>>9),p=m+(T^(_|~A))+y[0]+4096336452&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~T))+y[7]+1126891415&4294967295,A=m+(p<<10&4294967295|p>>>22),p=T+(m^(A|~_))+y[14]+2878612391&4294967295,T=A+(p<<15&4294967295|p>>>17),p=_+(A^(T|~m))+y[5]+4237533241&4294967295,_=T+(p<<21&4294967295|p>>>11),p=m+(T^(_|~A))+y[12]+1700485571&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~T))+y[3]+2399980690&4294967295,A=m+(p<<10&4294967295|p>>>22),p=T+(m^(A|~_))+y[10]+4293915773&4294967295,T=A+(p<<15&4294967295|p>>>17),p=_+(A^(T|~m))+y[1]+2240044497&4294967295,_=T+(p<<21&4294967295|p>>>11),p=m+(T^(_|~A))+y[8]+1873313359&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~T))+y[15]+4264355552&4294967295,A=m+(p<<10&4294967295|p>>>22),p=T+(m^(A|~_))+y[6]+2734768916&4294967295,T=A+(p<<15&4294967295|p>>>17),p=_+(A^(T|~m))+y[13]+1309151649&4294967295,_=T+(p<<21&4294967295|p>>>11),p=m+(T^(_|~A))+y[4]+4149444226&4294967295,m=_+(p<<6&4294967295|p>>>26),p=A+(_^(m|~T))+y[11]+3174756917&4294967295,A=m+(p<<10&4294967295|p>>>22),p=T+(m^(A|~_))+y[2]+718787259&4294967295,T=A+(p<<15&4294967295|p>>>17),p=_+(A^(T|~m))+y[9]+3951481745&4294967295,E.g[0]=E.g[0]+m&4294967295,E.g[1]=E.g[1]+(T+(p<<21&4294967295|p>>>11))&4294967295,E.g[2]=E.g[2]+T&4294967295,E.g[3]=E.g[3]+A&4294967295}n.prototype.u=function(E,m){m===void 0&&(m=E.length);for(var _=m-this.blockSize,y=this.B,T=this.h,A=0;A<m;){if(T==0)for(;A<=_;)i(this,E,A),A+=this.blockSize;if(typeof E=="string"){for(;A<m;)if(y[T++]=E.charCodeAt(A++),T==this.blockSize){i(this,y),T=0;break}}else for(;A<m;)if(y[T++]=E[A++],T==this.blockSize){i(this,y),T=0;break}}this.h=T,this.o+=m},n.prototype.v=function(){var E=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);E[0]=128;for(var m=1;m<E.length-8;++m)E[m]=0;var _=8*this.o;for(m=E.length-8;m<E.length;++m)E[m]=_&255,_/=256;for(this.u(E),E=Array(16),m=_=0;4>m;++m)for(var y=0;32>y;y+=8)E[_++]=this.g[m]>>>y&255;return E};function o(E,m){var _=c;return Object.prototype.hasOwnProperty.call(_,E)?_[E]:_[E]=m(E)}function u(E,m){this.h=m;for(var _=[],y=!0,T=E.length-1;0<=T;T--){var A=E[T]|0;y&&A==m||(_[T]=A,y=!1)}this.g=_}var c={};function f(E){return-128<=E&&128>E?o(E,function(m){return new u([m|0],0>m?-1:0)}):new u([E|0],0>E?-1:0)}function d(E){if(isNaN(E)||!isFinite(E))return v;if(0>E)return b(d(-E));for(var m=[],_=1,y=0;E>=_;y++)m[y]=E/_|0,_*=4294967296;return new u(m,0)}function g(E,m){if(E.length==0)throw Error("number format error: empty string");if(m=m||10,2>m||36<m)throw Error("radix out of range: "+m);if(E.charAt(0)=="-")return b(g(E.substring(1),m));if(0<=E.indexOf("-"))throw Error('number format error: interior "-" character');for(var _=d(Math.pow(m,8)),y=v,T=0;T<E.length;T+=8){var A=Math.min(8,E.length-T),p=parseInt(E.substring(T,T+A),m);8>A?(A=d(Math.pow(m,A)),y=y.j(A).add(d(p))):(y=y.j(_),y=y.add(d(p)))}return y}var v=f(0),R=f(1),S=f(16777216);r=u.prototype,r.m=function(){if(x(this))return-b(this).m();for(var E=0,m=1,_=0;_<this.g.length;_++){var y=this.i(_);E+=(0<=y?y:4294967296+y)*m,m*=4294967296}return E},r.toString=function(E){if(E=E||10,2>E||36<E)throw Error("radix out of range: "+E);if(D(this))return"0";if(x(this))return"-"+b(this).toString(E);for(var m=d(Math.pow(E,6)),_=this,y="";;){var T=it(_,m).g;_=$(_,T.j(m));var A=((0<_.g.length?_.g[0]:_.h)>>>0).toString(E);if(_=T,D(_))return A+y;for(;6>A.length;)A="0"+A;y=A+y}},r.i=function(E){return 0>E?0:E<this.g.length?this.g[E]:this.h};function D(E){if(E.h!=0)return!1;for(var m=0;m<E.g.length;m++)if(E.g[m]!=0)return!1;return!0}function x(E){return E.h==-1}r.l=function(E){return E=$(this,E),x(E)?-1:D(E)?0:1};function b(E){for(var m=E.g.length,_=[],y=0;y<m;y++)_[y]=~E.g[y];return new u(_,~E.h).add(R)}r.abs=function(){return x(this)?b(this):this},r.add=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0,T=0;T<=m;T++){var A=y+(this.i(T)&65535)+(E.i(T)&65535),p=(A>>>16)+(this.i(T)>>>16)+(E.i(T)>>>16);y=p>>>16,A&=65535,p&=65535,_[T]=p<<16|A}return new u(_,_[_.length-1]&-2147483648?-1:0)};function $(E,m){return E.add(b(m))}r.j=function(E){if(D(this)||D(E))return v;if(x(this))return x(E)?b(this).j(b(E)):b(b(this).j(E));if(x(E))return b(this.j(b(E)));if(0>this.l(S)&&0>E.l(S))return d(this.m()*E.m());for(var m=this.g.length+E.g.length,_=[],y=0;y<2*m;y++)_[y]=0;for(y=0;y<this.g.length;y++)for(var T=0;T<E.g.length;T++){var A=this.i(y)>>>16,p=this.i(y)&65535,Ft=E.i(T)>>>16,Fe=E.i(T)&65535;_[2*y+2*T]+=p*Fe,B(_,2*y+2*T),_[2*y+2*T+1]+=A*Fe,B(_,2*y+2*T+1),_[2*y+2*T+1]+=p*Ft,B(_,2*y+2*T+1),_[2*y+2*T+2]+=A*Ft,B(_,2*y+2*T+2)}for(y=0;y<m;y++)_[y]=_[2*y+1]<<16|_[2*y];for(y=m;y<2*m;y++)_[y]=0;return new u(_,0)};function B(E,m){for(;(E[m]&65535)!=E[m];)E[m+1]+=E[m]>>>16,E[m]&=65535,m++}function K(E,m){this.g=E,this.h=m}function it(E,m){if(D(m))throw Error("division by zero");if(D(E))return new K(v,v);if(x(E))return m=it(b(E),m),new K(b(m.g),b(m.h));if(x(m))return m=it(E,b(m)),new K(b(m.g),m.h);if(30<E.g.length){if(x(E)||x(m))throw Error("slowDivide_ only works with positive integers.");for(var _=R,y=m;0>=y.l(E);)_=Mt(_),y=Mt(y);var T=at(_,1),A=at(y,1);for(y=at(y,2),_=at(_,2);!D(y);){var p=A.add(y);0>=p.l(E)&&(T=T.add(_),A=p),y=at(y,1),_=at(_,1)}return m=$(E,T.j(m)),new K(T,m)}for(T=v;0<=E.l(m);){for(_=Math.max(1,Math.floor(E.m()/m.m())),y=Math.ceil(Math.log(_)/Math.LN2),y=48>=y?1:Math.pow(2,y-48),A=d(_),p=A.j(m);x(p)||0<p.l(E);)_-=y,A=d(_),p=A.j(m);D(A)&&(A=R),T=T.add(A),E=$(E,p)}return new K(T,E)}r.A=function(E){return it(this,E).h},r.and=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)&E.i(y);return new u(_,this.h&E.h)},r.or=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)|E.i(y);return new u(_,this.h|E.h)},r.xor=function(E){for(var m=Math.max(this.g.length,E.g.length),_=[],y=0;y<m;y++)_[y]=this.i(y)^E.i(y);return new u(_,this.h^E.h)};function Mt(E){for(var m=E.g.length+1,_=[],y=0;y<m;y++)_[y]=E.i(y)<<1|E.i(y-1)>>>31;return new u(_,E.h)}function at(E,m){var _=m>>5;m%=32;for(var y=E.g.length-_,T=[],A=0;A<y;A++)T[A]=0<m?E.i(A+_)>>>m|E.i(A+_+1)<<32-m:E.i(A+_);return new u(T,E.h)}n.prototype.digest=n.prototype.v,n.prototype.reset=n.prototype.s,n.prototype.update=n.prototype.u,Zo=n,u.prototype.add=u.prototype.add,u.prototype.multiply=u.prototype.j,u.prototype.modulo=u.prototype.A,u.prototype.compare=u.prototype.l,u.prototype.toNumber=u.prototype.m,u.prototype.toString=u.prototype.toString,u.prototype.getBits=u.prototype.i,u.fromNumber=d,u.fromString=g,Wt=u}).apply(typeof Ji<"u"?Ji:typeof self<"u"?self:typeof window<"u"?window:{});var jn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var ta,tn,ea,Kn,ns,na,ra,sa;(function(){var r,t=typeof Object.defineProperties=="function"?Object.defineProperty:function(s,a,l){return s==Array.prototype||s==Object.prototype||(s[a]=l.value),s};function e(s){s=[typeof globalThis=="object"&&globalThis,s,typeof window=="object"&&window,typeof self=="object"&&self,typeof jn=="object"&&jn];for(var a=0;a<s.length;++a){var l=s[a];if(l&&l.Math==Math)return l}throw Error("Cannot find global object")}var n=e(this);function i(s,a){if(a)t:{var l=n;s=s.split(".");for(var h=0;h<s.length-1;h++){var I=s[h];if(!(I in l))break t;l=l[I]}s=s[s.length-1],h=l[s],a=a(h),a!=h&&a!=null&&t(l,s,{configurable:!0,writable:!0,value:a})}}function o(s,a){s instanceof String&&(s+="");var l=0,h=!1,I={next:function(){if(!h&&l<s.length){var w=l++;return{value:a(w,s[w]),done:!1}}return h=!0,{done:!0,value:void 0}}};return I[Symbol.iterator]=function(){return I},I}i("Array.prototype.values",function(s){return s||function(){return o(this,function(a,l){return l})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var u=u||{},c=this||self;function f(s){var a=typeof s;return a=a!="object"?a:s?Array.isArray(s)?"array":a:"null",a=="array"||a=="object"&&typeof s.length=="number"}function d(s){var a=typeof s;return a=="object"&&s!=null||a=="function"}function g(s,a,l){return s.call.apply(s.bind,arguments)}function v(s,a,l){if(!s)throw Error();if(2<arguments.length){var h=Array.prototype.slice.call(arguments,2);return function(){var I=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(I,h),s.apply(a,I)}}return function(){return s.apply(a,arguments)}}function R(s,a,l){return R=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?g:v,R.apply(null,arguments)}function S(s,a){var l=Array.prototype.slice.call(arguments,1);return function(){var h=l.slice();return h.push.apply(h,arguments),s.apply(this,h)}}function D(s,a){function l(){}l.prototype=a.prototype,s.aa=a.prototype,s.prototype=new l,s.prototype.constructor=s,s.Qb=function(h,I,w){for(var C=Array(arguments.length-2),Q=2;Q<arguments.length;Q++)C[Q-2]=arguments[Q];return a.prototype[I].apply(h,C)}}function x(s){const a=s.length;if(0<a){const l=Array(a);for(let h=0;h<a;h++)l[h]=s[h];return l}return[]}function b(s,a){for(let l=1;l<arguments.length;l++){const h=arguments[l];if(f(h)){const I=s.length||0,w=h.length||0;s.length=I+w;for(let C=0;C<w;C++)s[I+C]=h[C]}else s.push(h)}}class ${constructor(a,l){this.i=a,this.j=l,this.h=0,this.g=null}get(){let a;return 0<this.h?(this.h--,a=this.g,this.g=a.next,a.next=null):a=this.i(),a}}function B(s){return/^[\s\xa0]*$/.test(s)}function K(){var s=c.navigator;return s&&(s=s.userAgent)?s:""}function it(s){return it[" "](s),s}it[" "]=function(){};var Mt=K().indexOf("Gecko")!=-1&&!(K().toLowerCase().indexOf("webkit")!=-1&&K().indexOf("Edge")==-1)&&!(K().indexOf("Trident")!=-1||K().indexOf("MSIE")!=-1)&&K().indexOf("Edge")==-1;function at(s,a,l){for(const h in s)a.call(l,s[h],h,s)}function E(s,a){for(const l in s)a.call(void 0,s[l],l,s)}function m(s){const a={};for(const l in s)a[l]=s[l];return a}const _="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function y(s,a){let l,h;for(let I=1;I<arguments.length;I++){h=arguments[I];for(l in h)s[l]=h[l];for(let w=0;w<_.length;w++)l=_[w],Object.prototype.hasOwnProperty.call(h,l)&&(s[l]=h[l])}}function T(s){var a=1;s=s.split(":");const l=[];for(;0<a&&s.length;)l.push(s.shift()),a--;return s.length&&l.push(s.join(":")),l}function A(s){c.setTimeout(()=>{throw s},0)}function p(){var s=Vr;let a=null;return s.g&&(a=s.g,s.g=s.g.next,s.g||(s.h=null),a.next=null),a}class Ft{constructor(){this.h=this.g=null}add(a,l){const h=Fe.get();h.set(a,l),this.h?this.h.next=h:this.g=h,this.h=h}}var Fe=new $(()=>new Su,s=>s.reset());class Su{constructor(){this.next=this.g=this.h=null}set(a,l){this.h=a,this.g=l,this.next=null}reset(){this.next=this.g=this.h=null}}let Le,Ue=!1,Vr=new Ft,Ys=()=>{const s=c.Promise.resolve(void 0);Le=()=>{s.then(Cu)}};var Cu=()=>{for(var s;s=p();){try{s.h.call(s.g)}catch(l){A(l)}var a=Fe;a.j(s),100>a.h&&(a.h++,s.next=a.g,a.g=s)}Ue=!1};function zt(){this.s=this.s,this.C=this.C}zt.prototype.s=!1,zt.prototype.ma=function(){this.s||(this.s=!0,this.N())},zt.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function ft(s,a){this.type=s,this.g=this.target=a,this.defaultPrevented=!1}ft.prototype.h=function(){this.defaultPrevented=!0};var bu=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var s=!1,a=Object.defineProperty({},"passive",{get:function(){s=!0}});try{const l=()=>{};c.addEventListener("test",l,a),c.removeEventListener("test",l,a)}catch{}return s})();function qe(s,a){if(ft.call(this,s?s.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,s){var l=this.type=s.type,h=s.changedTouches&&s.changedTouches.length?s.changedTouches[0]:null;if(this.target=s.target||s.srcElement,this.g=a,a=s.relatedTarget){if(Mt){t:{try{it(a.nodeName);var I=!0;break t}catch{}I=!1}I||(a=null)}}else l=="mouseover"?a=s.fromElement:l=="mouseout"&&(a=s.toElement);this.relatedTarget=a,h?(this.clientX=h.clientX!==void 0?h.clientX:h.pageX,this.clientY=h.clientY!==void 0?h.clientY:h.pageY,this.screenX=h.screenX||0,this.screenY=h.screenY||0):(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0),this.button=s.button,this.key=s.key||"",this.ctrlKey=s.ctrlKey,this.altKey=s.altKey,this.shiftKey=s.shiftKey,this.metaKey=s.metaKey,this.pointerId=s.pointerId||0,this.pointerType=typeof s.pointerType=="string"?s.pointerType:Du[s.pointerType]||"",this.state=s.state,this.i=s,s.defaultPrevented&&qe.aa.h.call(this)}}D(qe,ft);var Du={2:"touch",3:"pen",4:"mouse"};qe.prototype.h=function(){qe.aa.h.call(this);var s=this.i;s.preventDefault?s.preventDefault():s.returnValue=!1};var In="closure_listenable_"+(1e6*Math.random()|0),ku=0;function Nu(s,a,l,h,I){this.listener=s,this.proxy=null,this.src=a,this.type=l,this.capture=!!h,this.ha=I,this.key=++ku,this.da=this.fa=!1}function An(s){s.da=!0,s.listener=null,s.proxy=null,s.src=null,s.ha=null}function wn(s){this.src=s,this.g={},this.h=0}wn.prototype.add=function(s,a,l,h,I){var w=s.toString();s=this.g[w],s||(s=this.g[w]=[],this.h++);var C=Cr(s,a,h,I);return-1<C?(a=s[C],l||(a.fa=!1)):(a=new Nu(a,this.src,w,!!h,I),a.fa=l,s.push(a)),a};function Sr(s,a){var l=a.type;if(l in s.g){var h=s.g[l],I=Array.prototype.indexOf.call(h,a,void 0),w;(w=0<=I)&&Array.prototype.splice.call(h,I,1),w&&(An(a),s.g[l].length==0&&(delete s.g[l],s.h--))}}function Cr(s,a,l,h){for(var I=0;I<s.length;++I){var w=s[I];if(!w.da&&w.listener==a&&w.capture==!!l&&w.ha==h)return I}return-1}var br="closure_lm_"+(1e6*Math.random()|0),Dr={};function Js(s,a,l,h,I){if(Array.isArray(a)){for(var w=0;w<a.length;w++)Js(s,a[w],l,h,I);return null}return l=ei(l),s&&s[In]?s.K(a,l,d(h)?!!h.capture:!1,I):xu(s,a,l,!1,h,I)}function xu(s,a,l,h,I,w){if(!a)throw Error("Invalid event type");var C=d(I)?!!I.capture:!!I,Q=Nr(s);if(Q||(s[br]=Q=new wn(s)),l=Q.add(a,l,h,C,w),l.proxy)return l;if(h=Ou(),l.proxy=h,h.src=s,h.listener=l,s.addEventListener)bu||(I=C),I===void 0&&(I=!1),s.addEventListener(a.toString(),h,I);else if(s.attachEvent)s.attachEvent(ti(a.toString()),h);else if(s.addListener&&s.removeListener)s.addListener(h);else throw Error("addEventListener and attachEvent are unavailable.");return l}function Ou(){function s(l){return a.call(s.src,s.listener,l)}const a=Mu;return s}function Zs(s,a,l,h,I){if(Array.isArray(a))for(var w=0;w<a.length;w++)Zs(s,a[w],l,h,I);else h=d(h)?!!h.capture:!!h,l=ei(l),s&&s[In]?(s=s.i,a=String(a).toString(),a in s.g&&(w=s.g[a],l=Cr(w,l,h,I),-1<l&&(An(w[l]),Array.prototype.splice.call(w,l,1),w.length==0&&(delete s.g[a],s.h--)))):s&&(s=Nr(s))&&(a=s.g[a.toString()],s=-1,a&&(s=Cr(a,l,h,I)),(l=-1<s?a[s]:null)&&kr(l))}function kr(s){if(typeof s!="number"&&s&&!s.da){var a=s.src;if(a&&a[In])Sr(a.i,s);else{var l=s.type,h=s.proxy;a.removeEventListener?a.removeEventListener(l,h,s.capture):a.detachEvent?a.detachEvent(ti(l),h):a.addListener&&a.removeListener&&a.removeListener(h),(l=Nr(a))?(Sr(l,s),l.h==0&&(l.src=null,a[br]=null)):An(s)}}}function ti(s){return s in Dr?Dr[s]:Dr[s]="on"+s}function Mu(s,a){if(s.da)s=!0;else{a=new qe(a,this);var l=s.listener,h=s.ha||s.src;s.fa&&kr(s),s=l.call(h,a)}return s}function Nr(s){return s=s[br],s instanceof wn?s:null}var xr="__closure_events_fn_"+(1e9*Math.random()>>>0);function ei(s){return typeof s=="function"?s:(s[xr]||(s[xr]=function(a){return s.handleEvent(a)}),s[xr])}function dt(){zt.call(this),this.i=new wn(this),this.M=this,this.F=null}D(dt,zt),dt.prototype[In]=!0,dt.prototype.removeEventListener=function(s,a,l,h){Zs(this,s,a,l,h)};function Tt(s,a){var l,h=s.F;if(h)for(l=[];h;h=h.F)l.push(h);if(s=s.M,h=a.type||a,typeof a=="string")a=new ft(a,s);else if(a instanceof ft)a.target=a.target||s;else{var I=a;a=new ft(h,s),y(a,I)}if(I=!0,l)for(var w=l.length-1;0<=w;w--){var C=a.g=l[w];I=Rn(C,h,!0,a)&&I}if(C=a.g=s,I=Rn(C,h,!0,a)&&I,I=Rn(C,h,!1,a)&&I,l)for(w=0;w<l.length;w++)C=a.g=l[w],I=Rn(C,h,!1,a)&&I}dt.prototype.N=function(){if(dt.aa.N.call(this),this.i){var s=this.i,a;for(a in s.g){for(var l=s.g[a],h=0;h<l.length;h++)An(l[h]);delete s.g[a],s.h--}}this.F=null},dt.prototype.K=function(s,a,l,h){return this.i.add(String(s),a,!1,l,h)},dt.prototype.L=function(s,a,l,h){return this.i.add(String(s),a,!0,l,h)};function Rn(s,a,l,h){if(a=s.i.g[String(a)],!a)return!0;a=a.concat();for(var I=!0,w=0;w<a.length;++w){var C=a[w];if(C&&!C.da&&C.capture==l){var Q=C.listener,ut=C.ha||C.src;C.fa&&Sr(s.i,C),I=Q.call(ut,h)!==!1&&I}}return I&&!h.defaultPrevented}function ni(s,a,l){if(typeof s=="function")l&&(s=R(s,l));else if(s&&typeof s.handleEvent=="function")s=R(s.handleEvent,s);else throw Error("Invalid listener argument");return 2147483647<Number(a)?-1:c.setTimeout(s,a||0)}function ri(s){s.g=ni(()=>{s.g=null,s.i&&(s.i=!1,ri(s))},s.l);const a=s.h;s.h=null,s.m.apply(null,a)}class Fu extends zt{constructor(a,l){super(),this.m=a,this.l=l,this.h=null,this.i=!1,this.g=null}j(a){this.h=arguments,this.g?this.i=!0:ri(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function je(s){zt.call(this),this.h=s,this.g={}}D(je,zt);var si=[];function ii(s){at(s.g,function(a,l){this.g.hasOwnProperty(l)&&kr(a)},s),s.g={}}je.prototype.N=function(){je.aa.N.call(this),ii(this)},je.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Or=c.JSON.stringify,Lu=c.JSON.parse,Uu=class{stringify(s){return c.JSON.stringify(s,void 0)}parse(s){return c.JSON.parse(s,void 0)}};function Mr(){}Mr.prototype.h=null;function oi(s){return s.h||(s.h=s.i())}function ai(){}var Be={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Fr(){ft.call(this,"d")}D(Fr,ft);function Lr(){ft.call(this,"c")}D(Lr,ft);var oe={},ui=null;function Pn(){return ui=ui||new dt}oe.La="serverreachability";function li(s){ft.call(this,oe.La,s)}D(li,ft);function ze(s){const a=Pn();Tt(a,new li(a))}oe.STAT_EVENT="statevent";function ci(s,a){ft.call(this,oe.STAT_EVENT,s),this.stat=a}D(ci,ft);function Et(s){const a=Pn();Tt(a,new ci(a,s))}oe.Ma="timingevent";function hi(s,a){ft.call(this,oe.Ma,s),this.size=a}D(hi,ft);function $e(s,a){if(typeof s!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){s()},a)}function Ge(){this.g=!0}Ge.prototype.xa=function(){this.g=!1};function qu(s,a,l,h,I,w){s.info(function(){if(s.g)if(w)for(var C="",Q=w.split("&"),ut=0;ut<Q.length;ut++){var z=Q[ut].split("=");if(1<z.length){var mt=z[0];z=z[1];var pt=mt.split("_");C=2<=pt.length&&pt[1]=="type"?C+(mt+"="+z+"&"):C+(mt+"=redacted&")}}else C=null;else C=w;return"XMLHTTP REQ ("+h+") [attempt "+I+"]: "+a+`
`+l+`
`+C})}function ju(s,a,l,h,I,w,C){s.info(function(){return"XMLHTTP RESP ("+h+") [ attempt "+I+"]: "+a+`
`+l+`
`+w+" "+C})}function _e(s,a,l,h){s.info(function(){return"XMLHTTP TEXT ("+a+"): "+zu(s,l)+(h?" "+h:"")})}function Bu(s,a){s.info(function(){return"TIMEOUT: "+a})}Ge.prototype.info=function(){};function zu(s,a){if(!s.g)return a;if(!a)return null;try{var l=JSON.parse(a);if(l){for(s=0;s<l.length;s++)if(Array.isArray(l[s])){var h=l[s];if(!(2>h.length)){var I=h[1];if(Array.isArray(I)&&!(1>I.length)){var w=I[0];if(w!="noop"&&w!="stop"&&w!="close")for(var C=1;C<I.length;C++)I[C]=""}}}}return Or(l)}catch{return a}}var Vn={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},fi={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},Ur;function Sn(){}D(Sn,Mr),Sn.prototype.g=function(){return new XMLHttpRequest},Sn.prototype.i=function(){return{}},Ur=new Sn;function $t(s,a,l,h){this.j=s,this.i=a,this.l=l,this.R=h||1,this.U=new je(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new di}function di(){this.i=null,this.g="",this.h=!1}var mi={},qr={};function jr(s,a,l){s.L=1,s.v=kn(Lt(a)),s.m=l,s.P=!0,pi(s,null)}function pi(s,a){s.F=Date.now(),Cn(s),s.A=Lt(s.v);var l=s.A,h=s.R;Array.isArray(h)||(h=[String(h)]),Ci(l.i,"t",h),s.C=0,l=s.j.J,s.h=new di,s.g=Qi(s.j,l?a:null,!s.m),0<s.O&&(s.M=new Fu(R(s.Y,s,s.g),s.O)),a=s.U,l=s.g,h=s.ca;var I="readystatechange";Array.isArray(I)||(I&&(si[0]=I.toString()),I=si);for(var w=0;w<I.length;w++){var C=Js(l,I[w],h||a.handleEvent,!1,a.h||a);if(!C)break;a.g[C.key]=C}a=s.H?m(s.H):{},s.m?(s.u||(s.u="POST"),a["Content-Type"]="application/x-www-form-urlencoded",s.g.ea(s.A,s.u,s.m,a)):(s.u="GET",s.g.ea(s.A,s.u,null,a)),ze(),qu(s.i,s.u,s.A,s.l,s.R,s.m)}$t.prototype.ca=function(s){s=s.target;const a=this.M;a&&Ut(s)==3?a.j():this.Y(s)},$t.prototype.Y=function(s){try{if(s==this.g)t:{const pt=Ut(this.g);var a=this.g.Ba();const Ee=this.g.Z();if(!(3>pt)&&(pt!=3||this.g&&(this.h.h||this.g.oa()||Mi(this.g)))){this.J||pt!=4||a==7||(a==8||0>=Ee?ze(3):ze(2)),Br(this);var l=this.g.Z();this.X=l;e:if(gi(this)){var h=Mi(this.g);s="";var I=h.length,w=Ut(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ae(this),Ke(this);var C="";break e}this.h.i=new c.TextDecoder}for(a=0;a<I;a++)this.h.h=!0,s+=this.h.i.decode(h[a],{stream:!(w&&a==I-1)});h.length=0,this.h.g+=s,this.C=0,C=this.h.g}else C=this.g.oa();if(this.o=l==200,ju(this.i,this.u,this.A,this.l,this.R,pt,l),this.o){if(this.T&&!this.K){e:{if(this.g){var Q,ut=this.g;if((Q=ut.g?ut.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!B(Q)){var z=Q;break e}}z=null}if(l=z)_e(this.i,this.l,l,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,zr(this,l);else{this.o=!1,this.s=3,Et(12),ae(this),Ke(this);break t}}if(this.P){l=!0;let Vt;for(;!this.J&&this.C<C.length;)if(Vt=$u(this,C),Vt==qr){pt==4&&(this.s=4,Et(14),l=!1),_e(this.i,this.l,null,"[Incomplete Response]");break}else if(Vt==mi){this.s=4,Et(15),_e(this.i,this.l,C,"[Invalid Chunk]"),l=!1;break}else _e(this.i,this.l,Vt,null),zr(this,Vt);if(gi(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),pt!=4||C.length!=0||this.h.h||(this.s=1,Et(16),l=!1),this.o=this.o&&l,!l)_e(this.i,this.l,C,"[Invalid Chunked Response]"),ae(this),Ke(this);else if(0<C.length&&!this.W){this.W=!0;var mt=this.j;mt.g==this&&mt.ba&&!mt.M&&(mt.j.info("Great, no buffering proxy detected. Bytes received: "+C.length),Hr(mt),mt.M=!0,Et(11))}}else _e(this.i,this.l,C,null),zr(this,C);pt==4&&ae(this),this.o&&!this.J&&(pt==4?zi(this.j,this):(this.o=!1,Cn(this)))}else al(this.g),l==400&&0<C.indexOf("Unknown SID")?(this.s=3,Et(12)):(this.s=0,Et(13)),ae(this),Ke(this)}}}catch{}finally{}};function gi(s){return s.g?s.u=="GET"&&s.L!=2&&s.j.Ca:!1}function $u(s,a){var l=s.C,h=a.indexOf(`
`,l);return h==-1?qr:(l=Number(a.substring(l,h)),isNaN(l)?mi:(h+=1,h+l>a.length?qr:(a=a.slice(h,h+l),s.C=h+l,a)))}$t.prototype.cancel=function(){this.J=!0,ae(this)};function Cn(s){s.S=Date.now()+s.I,_i(s,s.I)}function _i(s,a){if(s.B!=null)throw Error("WatchDog timer not null");s.B=$e(R(s.ba,s),a)}function Br(s){s.B&&(c.clearTimeout(s.B),s.B=null)}$t.prototype.ba=function(){this.B=null;const s=Date.now();0<=s-this.S?(Bu(this.i,this.A),this.L!=2&&(ze(),Et(17)),ae(this),this.s=2,Ke(this)):_i(this,this.S-s)};function Ke(s){s.j.G==0||s.J||zi(s.j,s)}function ae(s){Br(s);var a=s.M;a&&typeof a.ma=="function"&&a.ma(),s.M=null,ii(s.U),s.g&&(a=s.g,s.g=null,a.abort(),a.ma())}function zr(s,a){try{var l=s.j;if(l.G!=0&&(l.g==s||$r(l.h,s))){if(!s.K&&$r(l.h,s)&&l.G==3){try{var h=l.Da.g.parse(a)}catch{h=null}if(Array.isArray(h)&&h.length==3){var I=h;if(I[0]==0){t:if(!l.u){if(l.g)if(l.g.F+3e3<s.F)Ln(l),Mn(l);else break t;Wr(l),Et(18)}}else l.za=I[1],0<l.za-l.T&&37500>I[2]&&l.F&&l.v==0&&!l.C&&(l.C=$e(R(l.Za,l),6e3));if(1>=Ei(l.h)&&l.ca){try{l.ca()}catch{}l.ca=void 0}}else le(l,11)}else if((s.K||l.g==s)&&Ln(l),!B(a))for(I=l.Da.g.parse(a),a=0;a<I.length;a++){let z=I[a];if(l.T=z[0],z=z[1],l.G==2)if(z[0]=="c"){l.K=z[1],l.ia=z[2];const mt=z[3];mt!=null&&(l.la=mt,l.j.info("VER="+l.la));const pt=z[4];pt!=null&&(l.Aa=pt,l.j.info("SVER="+l.Aa));const Ee=z[5];Ee!=null&&typeof Ee=="number"&&0<Ee&&(h=1.5*Ee,l.L=h,l.j.info("backChannelRequestTimeoutMs_="+h)),h=l;const Vt=s.g;if(Vt){const qn=Vt.g?Vt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(qn){var w=h.h;w.g||qn.indexOf("spdy")==-1&&qn.indexOf("quic")==-1&&qn.indexOf("h2")==-1||(w.j=w.l,w.g=new Set,w.h&&(Gr(w,w.h),w.h=null))}if(h.D){const Xr=Vt.g?Vt.g.getResponseHeader("X-HTTP-Session-Id"):null;Xr&&(h.ya=Xr,W(h.I,h.D,Xr))}}l.G=3,l.l&&l.l.ua(),l.ba&&(l.R=Date.now()-s.F,l.j.info("Handshake RTT: "+l.R+"ms")),h=l;var C=s;if(h.qa=Ki(h,h.J?h.ia:null,h.W),C.K){vi(h.h,C);var Q=C,ut=h.L;ut&&(Q.I=ut),Q.B&&(Br(Q),Cn(Q)),h.g=C}else ji(h);0<l.i.length&&Fn(l)}else z[0]!="stop"&&z[0]!="close"||le(l,7);else l.G==3&&(z[0]=="stop"||z[0]=="close"?z[0]=="stop"?le(l,7):Qr(l):z[0]!="noop"&&l.l&&l.l.ta(z),l.v=0)}}ze(4)}catch{}}var Gu=class{constructor(s,a){this.g=s,this.map=a}};function yi(s){this.l=s||10,c.PerformanceNavigationTiming?(s=c.performance.getEntriesByType("navigation"),s=0<s.length&&(s[0].nextHopProtocol=="hq"||s[0].nextHopProtocol=="h2")):s=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=s?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Ti(s){return s.h?!0:s.g?s.g.size>=s.j:!1}function Ei(s){return s.h?1:s.g?s.g.size:0}function $r(s,a){return s.h?s.h==a:s.g?s.g.has(a):!1}function Gr(s,a){s.g?s.g.add(a):s.h=a}function vi(s,a){s.h&&s.h==a?s.h=null:s.g&&s.g.has(a)&&s.g.delete(a)}yi.prototype.cancel=function(){if(this.i=Ii(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const s of this.g.values())s.cancel();this.g.clear()}};function Ii(s){if(s.h!=null)return s.i.concat(s.h.D);if(s.g!=null&&s.g.size!==0){let a=s.i;for(const l of s.g.values())a=a.concat(l.D);return a}return x(s.i)}function Ku(s){if(s.V&&typeof s.V=="function")return s.V();if(typeof Map<"u"&&s instanceof Map||typeof Set<"u"&&s instanceof Set)return Array.from(s.values());if(typeof s=="string")return s.split("");if(f(s)){for(var a=[],l=s.length,h=0;h<l;h++)a.push(s[h]);return a}a=[],l=0;for(h in s)a[l++]=s[h];return a}function Qu(s){if(s.na&&typeof s.na=="function")return s.na();if(!s.V||typeof s.V!="function"){if(typeof Map<"u"&&s instanceof Map)return Array.from(s.keys());if(!(typeof Set<"u"&&s instanceof Set)){if(f(s)||typeof s=="string"){var a=[];s=s.length;for(var l=0;l<s;l++)a.push(l);return a}a=[],l=0;for(const h in s)a[l++]=h;return a}}}function Ai(s,a){if(s.forEach&&typeof s.forEach=="function")s.forEach(a,void 0);else if(f(s)||typeof s=="string")Array.prototype.forEach.call(s,a,void 0);else for(var l=Qu(s),h=Ku(s),I=h.length,w=0;w<I;w++)a.call(void 0,h[w],l&&l[w],s)}var wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wu(s,a){if(s){s=s.split("&");for(var l=0;l<s.length;l++){var h=s[l].indexOf("="),I=null;if(0<=h){var w=s[l].substring(0,h);I=s[l].substring(h+1)}else w=s[l];a(w,I?decodeURIComponent(I.replace(/\+/g," ")):"")}}}function ue(s){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,s instanceof ue){this.h=s.h,bn(this,s.j),this.o=s.o,this.g=s.g,Dn(this,s.s),this.l=s.l;var a=s.i,l=new He;l.i=a.i,a.g&&(l.g=new Map(a.g),l.h=a.h),Ri(this,l),this.m=s.m}else s&&(a=String(s).match(wi))?(this.h=!1,bn(this,a[1]||"",!0),this.o=Qe(a[2]||""),this.g=Qe(a[3]||"",!0),Dn(this,a[4]),this.l=Qe(a[5]||"",!0),Ri(this,a[6]||"",!0),this.m=Qe(a[7]||"")):(this.h=!1,this.i=new He(null,this.h))}ue.prototype.toString=function(){var s=[],a=this.j;a&&s.push(We(a,Pi,!0),":");var l=this.g;return(l||a=="file")&&(s.push("//"),(a=this.o)&&s.push(We(a,Pi,!0),"@"),s.push(encodeURIComponent(String(l)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),l=this.s,l!=null&&s.push(":",String(l))),(l=this.l)&&(this.g&&l.charAt(0)!="/"&&s.push("/"),s.push(We(l,l.charAt(0)=="/"?Yu:Xu,!0))),(l=this.i.toString())&&s.push("?",l),(l=this.m)&&s.push("#",We(l,Zu)),s.join("")};function Lt(s){return new ue(s)}function bn(s,a,l){s.j=l?Qe(a,!0):a,s.j&&(s.j=s.j.replace(/:$/,""))}function Dn(s,a){if(a){if(a=Number(a),isNaN(a)||0>a)throw Error("Bad port number "+a);s.s=a}else s.s=null}function Ri(s,a,l){a instanceof He?(s.i=a,tl(s.i,s.h)):(l||(a=We(a,Ju)),s.i=new He(a,s.h))}function W(s,a,l){s.i.set(a,l)}function kn(s){return W(s,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),s}function Qe(s,a){return s?a?decodeURI(s.replace(/%25/g,"%2525")):decodeURIComponent(s):""}function We(s,a,l){return typeof s=="string"?(s=encodeURI(s).replace(a,Hu),l&&(s=s.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),s):null}function Hu(s){return s=s.charCodeAt(0),"%"+(s>>4&15).toString(16)+(s&15).toString(16)}var Pi=/[#\/\?@]/g,Xu=/[#\?:]/g,Yu=/[#\?]/g,Ju=/[#\?@]/g,Zu=/#/g;function He(s,a){this.h=this.g=null,this.i=s||null,this.j=!!a}function Gt(s){s.g||(s.g=new Map,s.h=0,s.i&&Wu(s.i,function(a,l){s.add(decodeURIComponent(a.replace(/\+/g," ")),l)}))}r=He.prototype,r.add=function(s,a){Gt(this),this.i=null,s=ye(this,s);var l=this.g.get(s);return l||this.g.set(s,l=[]),l.push(a),this.h+=1,this};function Vi(s,a){Gt(s),a=ye(s,a),s.g.has(a)&&(s.i=null,s.h-=s.g.get(a).length,s.g.delete(a))}function Si(s,a){return Gt(s),a=ye(s,a),s.g.has(a)}r.forEach=function(s,a){Gt(this),this.g.forEach(function(l,h){l.forEach(function(I){s.call(a,I,h,this)},this)},this)},r.na=function(){Gt(this);const s=Array.from(this.g.values()),a=Array.from(this.g.keys()),l=[];for(let h=0;h<a.length;h++){const I=s[h];for(let w=0;w<I.length;w++)l.push(a[h])}return l},r.V=function(s){Gt(this);let a=[];if(typeof s=="string")Si(this,s)&&(a=a.concat(this.g.get(ye(this,s))));else{s=Array.from(this.g.values());for(let l=0;l<s.length;l++)a=a.concat(s[l])}return a},r.set=function(s,a){return Gt(this),this.i=null,s=ye(this,s),Si(this,s)&&(this.h-=this.g.get(s).length),this.g.set(s,[a]),this.h+=1,this},r.get=function(s,a){return s?(s=this.V(s),0<s.length?String(s[0]):a):a};function Ci(s,a,l){Vi(s,a),0<l.length&&(s.i=null,s.g.set(ye(s,a),x(l)),s.h+=l.length)}r.toString=function(){if(this.i)return this.i;if(!this.g)return"";const s=[],a=Array.from(this.g.keys());for(var l=0;l<a.length;l++){var h=a[l];const w=encodeURIComponent(String(h)),C=this.V(h);for(h=0;h<C.length;h++){var I=w;C[h]!==""&&(I+="="+encodeURIComponent(String(C[h]))),s.push(I)}}return this.i=s.join("&")};function ye(s,a){return a=String(a),s.j&&(a=a.toLowerCase()),a}function tl(s,a){a&&!s.j&&(Gt(s),s.i=null,s.g.forEach(function(l,h){var I=h.toLowerCase();h!=I&&(Vi(this,h),Ci(this,I,l))},s)),s.j=a}function el(s,a){const l=new Ge;if(c.Image){const h=new Image;h.onload=S(Kt,l,"TestLoadImage: loaded",!0,a,h),h.onerror=S(Kt,l,"TestLoadImage: error",!1,a,h),h.onabort=S(Kt,l,"TestLoadImage: abort",!1,a,h),h.ontimeout=S(Kt,l,"TestLoadImage: timeout",!1,a,h),c.setTimeout(function(){h.ontimeout&&h.ontimeout()},1e4),h.src=s}else a(!1)}function nl(s,a){const l=new Ge,h=new AbortController,I=setTimeout(()=>{h.abort(),Kt(l,"TestPingServer: timeout",!1,a)},1e4);fetch(s,{signal:h.signal}).then(w=>{clearTimeout(I),w.ok?Kt(l,"TestPingServer: ok",!0,a):Kt(l,"TestPingServer: server error",!1,a)}).catch(()=>{clearTimeout(I),Kt(l,"TestPingServer: error",!1,a)})}function Kt(s,a,l,h,I){try{I&&(I.onload=null,I.onerror=null,I.onabort=null,I.ontimeout=null),h(l)}catch{}}function rl(){this.g=new Uu}function sl(s,a,l){const h=l||"";try{Ai(s,function(I,w){let C=I;d(I)&&(C=Or(I)),a.push(h+w+"="+encodeURIComponent(C))})}catch(I){throw a.push(h+"type="+encodeURIComponent("_badmap")),I}}function Nn(s){this.l=s.Ub||null,this.j=s.eb||!1}D(Nn,Mr),Nn.prototype.g=function(){return new xn(this.l,this.j)},Nn.prototype.i=(function(s){return function(){return s}})({});function xn(s,a){dt.call(this),this.D=s,this.o=a,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(xn,dt),r=xn.prototype,r.open=function(s,a){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=s,this.A=a,this.readyState=1,Ye(this)},r.send=function(s){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const a={headers:this.u,method:this.B,credentials:this.m,cache:void 0};s&&(a.body=s),(this.D||c).fetch(new Request(this.A,a)).then(this.Sa.bind(this),this.ga.bind(this))},r.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Xe(this)),this.readyState=0},r.Sa=function(s){if(this.g&&(this.l=s,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=s.headers,this.readyState=2,Ye(this)),this.g&&(this.readyState=3,Ye(this),this.g)))if(this.responseType==="arraybuffer")s.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in s){if(this.j=s.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;bi(this)}else s.text().then(this.Ra.bind(this),this.ga.bind(this))};function bi(s){s.j.read().then(s.Pa.bind(s)).catch(s.ga.bind(s))}r.Pa=function(s){if(this.g){if(this.o&&s.value)this.response.push(s.value);else if(!this.o){var a=s.value?s.value:new Uint8Array(0);(a=this.v.decode(a,{stream:!s.done}))&&(this.response=this.responseText+=a)}s.done?Xe(this):Ye(this),this.readyState==3&&bi(this)}},r.Ra=function(s){this.g&&(this.response=this.responseText=s,Xe(this))},r.Qa=function(s){this.g&&(this.response=s,Xe(this))},r.ga=function(){this.g&&Xe(this)};function Xe(s){s.readyState=4,s.l=null,s.j=null,s.v=null,Ye(s)}r.setRequestHeader=function(s,a){this.u.append(s,a)},r.getResponseHeader=function(s){return this.h&&this.h.get(s.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const s=[],a=this.h.entries();for(var l=a.next();!l.done;)l=l.value,s.push(l[0]+": "+l[1]),l=a.next();return s.join(`\r
`)};function Ye(s){s.onreadystatechange&&s.onreadystatechange.call(s)}Object.defineProperty(xn.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(s){this.m=s?"include":"same-origin"}});function Di(s){let a="";return at(s,function(l,h){a+=h,a+=":",a+=l,a+=`\r
`}),a}function Kr(s,a,l){t:{for(h in l){var h=!1;break t}h=!0}h||(l=Di(l),typeof s=="string"?l!=null&&encodeURIComponent(String(l)):W(s,a,l))}function J(s){dt.call(this),this.headers=new Map,this.o=s||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(J,dt);var il=/^https?$/i,ol=["POST","PUT"];r=J.prototype,r.Ha=function(s){this.J=s},r.ea=function(s,a,l,h){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+s);a=a?a.toUpperCase():"GET",this.D=s,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Ur.g(),this.v=this.o?oi(this.o):oi(Ur),this.g.onreadystatechange=R(this.Ea,this);try{this.B=!0,this.g.open(a,String(s),!0),this.B=!1}catch(w){ki(this,w);return}if(s=l||"",l=new Map(this.headers),h)if(Object.getPrototypeOf(h)===Object.prototype)for(var I in h)l.set(I,h[I]);else if(typeof h.keys=="function"&&typeof h.get=="function")for(const w of h.keys())l.set(w,h.get(w));else throw Error("Unknown input type for opt_headers: "+String(h));h=Array.from(l.keys()).find(w=>w.toLowerCase()=="content-type"),I=c.FormData&&s instanceof c.FormData,!(0<=Array.prototype.indexOf.call(ol,a,void 0))||h||I||l.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[w,C]of l)this.g.setRequestHeader(w,C);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Oi(this),this.u=!0,this.g.send(s),this.u=!1}catch(w){ki(this,w)}};function ki(s,a){s.h=!1,s.g&&(s.j=!0,s.g.abort(),s.j=!1),s.l=a,s.m=5,Ni(s),On(s)}function Ni(s){s.A||(s.A=!0,Tt(s,"complete"),Tt(s,"error"))}r.abort=function(s){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=s||7,Tt(this,"complete"),Tt(this,"abort"),On(this))},r.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),On(this,!0)),J.aa.N.call(this)},r.Ea=function(){this.s||(this.B||this.u||this.j?xi(this):this.bb())},r.bb=function(){xi(this)};function xi(s){if(s.h&&typeof u<"u"&&(!s.v[1]||Ut(s)!=4||s.Z()!=2)){if(s.u&&Ut(s)==4)ni(s.Ea,0,s);else if(Tt(s,"readystatechange"),Ut(s)==4){s.h=!1;try{const C=s.Z();t:switch(C){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var a=!0;break t;default:a=!1}var l;if(!(l=a)){var h;if(h=C===0){var I=String(s.D).match(wi)[1]||null;!I&&c.self&&c.self.location&&(I=c.self.location.protocol.slice(0,-1)),h=!il.test(I?I.toLowerCase():"")}l=h}if(l)Tt(s,"complete"),Tt(s,"success");else{s.m=6;try{var w=2<Ut(s)?s.g.statusText:""}catch{w=""}s.l=w+" ["+s.Z()+"]",Ni(s)}}finally{On(s)}}}}function On(s,a){if(s.g){Oi(s);const l=s.g,h=s.v[0]?()=>{}:null;s.g=null,s.v=null,a||Tt(s,"ready");try{l.onreadystatechange=h}catch{}}}function Oi(s){s.I&&(c.clearTimeout(s.I),s.I=null)}r.isActive=function(){return!!this.g};function Ut(s){return s.g?s.g.readyState:0}r.Z=function(){try{return 2<Ut(this)?this.g.status:-1}catch{return-1}},r.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},r.Oa=function(s){if(this.g){var a=this.g.responseText;return s&&a.indexOf(s)==0&&(a=a.substring(s.length)),Lu(a)}};function Mi(s){try{if(!s.g)return null;if("response"in s.g)return s.g.response;switch(s.H){case"":case"text":return s.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in s.g)return s.g.mozResponseArrayBuffer}return null}catch{return null}}function al(s){const a={};s=(s.g&&2<=Ut(s)&&s.g.getAllResponseHeaders()||"").split(`\r
`);for(let h=0;h<s.length;h++){if(B(s[h]))continue;var l=T(s[h]);const I=l[0];if(l=l[1],typeof l!="string")continue;l=l.trim();const w=a[I]||[];a[I]=w,w.push(l)}E(a,function(h){return h.join(", ")})}r.Ba=function(){return this.m},r.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Je(s,a,l){return l&&l.internalChannelParams&&l.internalChannelParams[s]||a}function Fi(s){this.Aa=0,this.i=[],this.j=new Ge,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Je("failFast",!1,s),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Je("baseRetryDelayMs",5e3,s),this.cb=Je("retryDelaySeedMs",1e4,s),this.Wa=Je("forwardChannelMaxRetries",2,s),this.wa=Je("forwardChannelRequestTimeoutMs",2e4,s),this.pa=s&&s.xmlHttpFactory||void 0,this.Xa=s&&s.Tb||void 0,this.Ca=s&&s.useFetchStreams||!1,this.L=void 0,this.J=s&&s.supportsCrossDomainXhr||!1,this.K="",this.h=new yi(s&&s.concurrentRequestLimit),this.Da=new rl,this.P=s&&s.fastHandshake||!1,this.O=s&&s.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=s&&s.Rb||!1,s&&s.xa&&this.j.xa(),s&&s.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&s&&s.detectBufferingProxy||!1,this.ja=void 0,s&&s.longPollingTimeout&&0<s.longPollingTimeout&&(this.ja=s.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}r=Fi.prototype,r.la=8,r.G=1,r.connect=function(s,a,l,h){Et(0),this.W=s,this.H=a||{},l&&h!==void 0&&(this.H.OSID=l,this.H.OAID=h),this.F=this.X,this.I=Ki(this,null,this.W),Fn(this)};function Qr(s){if(Li(s),s.G==3){var a=s.U++,l=Lt(s.I);if(W(l,"SID",s.K),W(l,"RID",a),W(l,"TYPE","terminate"),Ze(s,l),a=new $t(s,s.j,a),a.L=2,a.v=kn(Lt(l)),l=!1,c.navigator&&c.navigator.sendBeacon)try{l=c.navigator.sendBeacon(a.v.toString(),"")}catch{}!l&&c.Image&&(new Image().src=a.v,l=!0),l||(a.g=Qi(a.j,null),a.g.ea(a.v)),a.F=Date.now(),Cn(a)}Gi(s)}function Mn(s){s.g&&(Hr(s),s.g.cancel(),s.g=null)}function Li(s){Mn(s),s.u&&(c.clearTimeout(s.u),s.u=null),Ln(s),s.h.cancel(),s.s&&(typeof s.s=="number"&&c.clearTimeout(s.s),s.s=null)}function Fn(s){if(!Ti(s.h)&&!s.s){s.s=!0;var a=s.Ga;Le||Ys(),Ue||(Le(),Ue=!0),Vr.add(a,s),s.B=0}}function ul(s,a){return Ei(s.h)>=s.h.j-(s.s?1:0)?!1:s.s?(s.i=a.D.concat(s.i),!0):s.G==1||s.G==2||s.B>=(s.Va?0:s.Wa)?!1:(s.s=$e(R(s.Ga,s,a),$i(s,s.B)),s.B++,!0)}r.Ga=function(s){if(this.s)if(this.s=null,this.G==1){if(!s){this.U=Math.floor(1e5*Math.random()),s=this.U++;const I=new $t(this,this.j,s);let w=this.o;if(this.S&&(w?(w=m(w),y(w,this.S)):w=this.S),this.m!==null||this.O||(I.H=w,w=null),this.P)t:{for(var a=0,l=0;l<this.i.length;l++){e:{var h=this.i[l];if("__data__"in h.map&&(h=h.map.__data__,typeof h=="string")){h=h.length;break e}h=void 0}if(h===void 0)break;if(a+=h,4096<a){a=l;break t}if(a===4096||l===this.i.length-1){a=l+1;break t}}a=1e3}else a=1e3;a=qi(this,I,a),l=Lt(this.I),W(l,"RID",s),W(l,"CVER",22),this.D&&W(l,"X-HTTP-Session-Id",this.D),Ze(this,l),w&&(this.O?a="headers="+encodeURIComponent(String(Di(w)))+"&"+a:this.m&&Kr(l,this.m,w)),Gr(this.h,I),this.Ua&&W(l,"TYPE","init"),this.P?(W(l,"$req",a),W(l,"SID","null"),I.T=!0,jr(I,l,null)):jr(I,l,a),this.G=2}}else this.G==3&&(s?Ui(this,s):this.i.length==0||Ti(this.h)||Ui(this))};function Ui(s,a){var l;a?l=a.l:l=s.U++;const h=Lt(s.I);W(h,"SID",s.K),W(h,"RID",l),W(h,"AID",s.T),Ze(s,h),s.m&&s.o&&Kr(h,s.m,s.o),l=new $t(s,s.j,l,s.B+1),s.m===null&&(l.H=s.o),a&&(s.i=a.D.concat(s.i)),a=qi(s,l,1e3),l.I=Math.round(.5*s.wa)+Math.round(.5*s.wa*Math.random()),Gr(s.h,l),jr(l,h,a)}function Ze(s,a){s.H&&at(s.H,function(l,h){W(a,h,l)}),s.l&&Ai({},function(l,h){W(a,h,l)})}function qi(s,a,l){l=Math.min(s.i.length,l);var h=s.l?R(s.l.Na,s.l,s):null;t:{var I=s.i;let w=-1;for(;;){const C=["count="+l];w==-1?0<l?(w=I[0].g,C.push("ofs="+w)):w=0:C.push("ofs="+w);let Q=!0;for(let ut=0;ut<l;ut++){let z=I[ut].g;const mt=I[ut].map;if(z-=w,0>z)w=Math.max(0,I[ut].g-100),Q=!1;else try{sl(mt,C,"req"+z+"_")}catch{h&&h(mt)}}if(Q){h=C.join("&");break t}}}return s=s.i.splice(0,l),a.D=s,h}function ji(s){if(!s.g&&!s.u){s.Y=1;var a=s.Fa;Le||Ys(),Ue||(Le(),Ue=!0),Vr.add(a,s),s.v=0}}function Wr(s){return s.g||s.u||3<=s.v?!1:(s.Y++,s.u=$e(R(s.Fa,s),$i(s,s.v)),s.v++,!0)}r.Fa=function(){if(this.u=null,Bi(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var s=2*this.R;this.j.info("BP detection timer enabled: "+s),this.A=$e(R(this.ab,this),s)}},r.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Et(10),Mn(this),Bi(this))};function Hr(s){s.A!=null&&(c.clearTimeout(s.A),s.A=null)}function Bi(s){s.g=new $t(s,s.j,"rpc",s.Y),s.m===null&&(s.g.H=s.o),s.g.O=0;var a=Lt(s.qa);W(a,"RID","rpc"),W(a,"SID",s.K),W(a,"AID",s.T),W(a,"CI",s.F?"0":"1"),!s.F&&s.ja&&W(a,"TO",s.ja),W(a,"TYPE","xmlhttp"),Ze(s,a),s.m&&s.o&&Kr(a,s.m,s.o),s.L&&(s.g.I=s.L);var l=s.g;s=s.ia,l.L=1,l.v=kn(Lt(a)),l.m=null,l.P=!0,pi(l,s)}r.Za=function(){this.C!=null&&(this.C=null,Mn(this),Wr(this),Et(19))};function Ln(s){s.C!=null&&(c.clearTimeout(s.C),s.C=null)}function zi(s,a){var l=null;if(s.g==a){Ln(s),Hr(s),s.g=null;var h=2}else if($r(s.h,a))l=a.D,vi(s.h,a),h=1;else return;if(s.G!=0){if(a.o)if(h==1){l=a.m?a.m.length:0,a=Date.now()-a.F;var I=s.B;h=Pn(),Tt(h,new hi(h,l)),Fn(s)}else ji(s);else if(I=a.s,I==3||I==0&&0<a.X||!(h==1&&ul(s,a)||h==2&&Wr(s)))switch(l&&0<l.length&&(a=s.h,a.i=a.i.concat(l)),I){case 1:le(s,5);break;case 4:le(s,10);break;case 3:le(s,6);break;default:le(s,2)}}}function $i(s,a){let l=s.Ta+Math.floor(Math.random()*s.cb);return s.isActive()||(l*=2),l*a}function le(s,a){if(s.j.info("Error code "+a),a==2){var l=R(s.fb,s),h=s.Xa;const I=!h;h=new ue(h||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||bn(h,"https"),kn(h),I?el(h.toString(),l):nl(h.toString(),l)}else Et(2);s.G=0,s.l&&s.l.sa(a),Gi(s),Li(s)}r.fb=function(s){s?(this.j.info("Successfully pinged google.com"),Et(2)):(this.j.info("Failed to ping google.com"),Et(1))};function Gi(s){if(s.G=0,s.ka=[],s.l){const a=Ii(s.h);(a.length!=0||s.i.length!=0)&&(b(s.ka,a),b(s.ka,s.i),s.h.i.length=0,x(s.i),s.i.length=0),s.l.ra()}}function Ki(s,a,l){var h=l instanceof ue?Lt(l):new ue(l);if(h.g!="")a&&(h.g=a+"."+h.g),Dn(h,h.s);else{var I=c.location;h=I.protocol,a=a?a+"."+I.hostname:I.hostname,I=+I.port;var w=new ue(null);h&&bn(w,h),a&&(w.g=a),I&&Dn(w,I),l&&(w.l=l),h=w}return l=s.D,a=s.ya,l&&a&&W(h,l,a),W(h,"VER",s.la),Ze(s,h),h}function Qi(s,a,l){if(a&&!s.J)throw Error("Can't create secondary domain capable XhrIo object.");return a=s.Ca&&!s.pa?new J(new Nn({eb:l})):new J(s.pa),a.Ha(s.J),a}r.isActive=function(){return!!this.l&&this.l.isActive(this)};function Wi(){}r=Wi.prototype,r.ua=function(){},r.ta=function(){},r.sa=function(){},r.ra=function(){},r.isActive=function(){return!0},r.Na=function(){};function Un(){}Un.prototype.g=function(s,a){return new At(s,a)};function At(s,a){dt.call(this),this.g=new Fi(a),this.l=s,this.h=a&&a.messageUrlParams||null,s=a&&a.messageHeaders||null,a&&a.clientProtocolHeaderRequired&&(s?s["X-Client-Protocol"]="webchannel":s={"X-Client-Protocol":"webchannel"}),this.g.o=s,s=a&&a.initMessageHeaders||null,a&&a.messageContentType&&(s?s["X-WebChannel-Content-Type"]=a.messageContentType:s={"X-WebChannel-Content-Type":a.messageContentType}),a&&a.va&&(s?s["X-WebChannel-Client-Profile"]=a.va:s={"X-WebChannel-Client-Profile":a.va}),this.g.S=s,(s=a&&a.Sb)&&!B(s)&&(this.g.m=s),this.v=a&&a.supportsCrossDomainXhr||!1,this.u=a&&a.sendRawJson||!1,(a=a&&a.httpSessionIdParam)&&!B(a)&&(this.g.D=a,s=this.h,s!==null&&a in s&&(s=this.h,a in s&&delete s[a])),this.j=new Te(this)}D(At,dt),At.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},At.prototype.close=function(){Qr(this.g)},At.prototype.o=function(s){var a=this.g;if(typeof s=="string"){var l={};l.__data__=s,s=l}else this.u&&(l={},l.__data__=Or(s),s=l);a.i.push(new Gu(a.Ya++,s)),a.G==3&&Fn(a)},At.prototype.N=function(){this.g.l=null,delete this.j,Qr(this.g),delete this.g,At.aa.N.call(this)};function Hi(s){Fr.call(this),s.__headers__&&(this.headers=s.__headers__,this.statusCode=s.__status__,delete s.__headers__,delete s.__status__);var a=s.__sm__;if(a){t:{for(const l in a){s=l;break t}s=void 0}(this.i=s)&&(s=this.i,a=a!==null&&s in a?a[s]:void 0),this.data=a}else this.data=s}D(Hi,Fr);function Xi(){Lr.call(this),this.status=1}D(Xi,Lr);function Te(s){this.g=s}D(Te,Wi),Te.prototype.ua=function(){Tt(this.g,"a")},Te.prototype.ta=function(s){Tt(this.g,new Hi(s))},Te.prototype.sa=function(s){Tt(this.g,new Xi)},Te.prototype.ra=function(){Tt(this.g,"b")},Un.prototype.createWebChannel=Un.prototype.g,At.prototype.send=At.prototype.o,At.prototype.open=At.prototype.m,At.prototype.close=At.prototype.close,sa=function(){return new Un},ra=function(){return Pn()},na=oe,ns={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Vn.NO_ERROR=0,Vn.TIMEOUT=8,Vn.HTTP_ERROR=6,Kn=Vn,fi.COMPLETE="complete",ea=fi,ai.EventType=Be,Be.OPEN="a",Be.CLOSE="b",Be.ERROR="c",Be.MESSAGE="d",dt.prototype.listen=dt.prototype.K,tn=ai,J.prototype.listenOnce=J.prototype.L,J.prototype.getLastError=J.prototype.Ka,J.prototype.getLastErrorCode=J.prototype.Ba,J.prototype.getStatus=J.prototype.Z,J.prototype.getResponseJson=J.prototype.Oa,J.prototype.getResponseText=J.prototype.oa,J.prototype.send=J.prototype.ea,J.prototype.setWithCredentials=J.prototype.Ha,ta=J}).apply(typeof jn<"u"?jn:typeof self<"u"?self:typeof window<"u"?window:{});const Zi="@firebase/firestore",to="4.8.0";/**
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
 */class _t{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}_t.UNAUTHENTICATED=new _t(null),_t.GOOGLE_CREDENTIALS=new _t("google-credentials-uid"),_t.FIRST_PARTY=new _t("first-party-uid"),_t.MOCK_USER=new _t("mock-user");/**
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
 */let Ne="11.10.0";/**
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
 */const de=new ll("@firebase/firestore");function ve(){return de.logLevel}function k(r,...t){if(de.logLevel<=qt.DEBUG){const e=t.map(Ts);de.debug(`Firestore (${Ne}): ${r}`,...e)}}function jt(r,...t){if(de.logLevel<=qt.ERROR){const e=t.map(Ts);de.error(`Firestore (${Ne}): ${r}`,...e)}}function Yt(r,...t){if(de.logLevel<=qt.WARN){const e=t.map(Ts);de.warn(`Firestore (${Ne}): ${r}`,...e)}}function Ts(r){if(typeof r=="string")return r;try{/**
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
*/return(function(e){return JSON.stringify(e)})(r)}catch{return r}}/**
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
 */function M(r,t,e){let n="Unexpected state";typeof t=="string"?n=t:e=t,ia(r,n,e)}function ia(r,t,e){let n=`FIRESTORE (${Ne}) INTERNAL ASSERTION FAILED: ${t} (ID: ${r.toString(16)})`;if(e!==void 0)try{n+=" CONTEXT: "+JSON.stringify(e)}catch{n+=" CONTEXT: "+e}throw jt(n),new Error(n)}function G(r,t,e,n){let i="Unexpected state";typeof e=="string"?i=e:n=e,r||ia(t,i,n)}function L(r,t){return r}/**
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
 */const V={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class N extends dl{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class he{constructor(){this.promise=new Promise(((t,e)=>{this.resolve=t,this.reject=e}))}}/**
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
 */class oa{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class wl{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable((()=>e(_t.UNAUTHENTICATED)))}shutdown(){}}class Rl{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable((()=>e(this.token.user)))}shutdown(){this.changeListener=null}}class Pl{constructor(t){this.t=t,this.currentUser=_t.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){G(this.o===void 0,42304);let n=this.i;const i=f=>this.i!==n?(n=this.i,e(f)):Promise.resolve();let o=new he;this.o=()=>{this.i++,this.currentUser=this.u(),o.resolve(),o=new he,t.enqueueRetryable((()=>i(this.currentUser)))};const u=()=>{const f=o;t.enqueueRetryable((async()=>{await f.promise,await i(this.currentUser)}))},c=f=>{k("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.o&&(this.auth.addAuthTokenListener(this.o),u())};this.t.onInit((f=>c(f))),setTimeout((()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?c(f):(k("FirebaseAuthCredentialsProvider","Auth not yet detected"),o.resolve(),o=new he)}}),0),u()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then((n=>this.i!==t?(k("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(G(typeof n.accessToken=="string",31837,{l:n}),new oa(n.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const t=this.auth&&this.auth.getUid();return G(t===null||typeof t=="string",2055,{h:t}),new _t(t)}}class Vl{constructor(t,e,n){this.P=t,this.T=e,this.I=n,this.type="FirstParty",this.user=_t.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const t=this.R();return t&&this.A.set("Authorization",t),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Sl{constructor(t,e,n){this.P=t,this.T=e,this.I=n}getToken(){return Promise.resolve(new Vl(this.P,this.T,this.I))}start(t,e){t.enqueueRetryable((()=>e(_t.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class eo{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cl{constructor(t,e){this.V=e,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,fl(t)&&t.settings.appCheckToken&&(this.p=t.settings.appCheckToken)}start(t,e){G(this.o===void 0,3512);const n=o=>{o.error!=null&&k("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${o.error.message}`);const u=o.token!==this.m;return this.m=o.token,k("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?e(o.token):Promise.resolve()};this.o=o=>{t.enqueueRetryable((()=>n(o)))};const i=o=>{k("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=o,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((o=>i(o))),setTimeout((()=>{if(!this.appCheck){const o=this.V.getImmediate({optional:!0});o?i(o):k("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new eo(this.p));const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then((e=>e?(G(typeof e.token=="string",44558,{tokenResult:e}),this.m=e.token,new eo(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
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
 */function bl(r){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(r);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let n=0;n<r;n++)e[n]=Math.floor(256*Math.random());return e}/**
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
 */function aa(){return new TextEncoder}/**
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
 */class Es{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const i=bl(40);for(let o=0;o<i.length;++o)n.length<20&&i[o]<e&&(n+=t.charAt(i[o]%62))}return n}}function U(r,t){return r<t?-1:r>t?1:0}function rs(r,t){let e=0;for(;e<r.length&&e<t.length;){const n=r.codePointAt(e),i=t.codePointAt(e);if(n!==i){if(n<128&&i<128)return U(n,i);{const o=aa(),u=Dl(o.encode(no(r,e)),o.encode(no(t,e)));return u!==0?u:U(n,i)}}e+=n>65535?2:1}return U(r.length,t.length)}function no(r,t){return r.codePointAt(t)>65535?r.substring(t,t+2):r.substring(t,t+1)}function Dl(r,t){for(let e=0;e<r.length&&e<t.length;++e)if(r[e]!==t[e])return U(r[e],t[e]);return U(r.length,t.length)}function Ve(r,t,e){return r.length===t.length&&r.every(((n,i)=>e(n,t[i])))}/**
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
 */const ro="__name__";class Ct{constructor(t,e,n){e===void 0?e=0:e>t.length&&M(637,{offset:e,range:t.length}),n===void 0?n=t.length-e:n>t.length-e&&M(1746,{length:n,range:t.length-e}),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return Ct.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof Ct?t.forEach((n=>{e.push(n)})):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let i=0;i<n;i++){const o=Ct.compareSegments(t.get(i),e.get(i));if(o!==0)return o}return U(t.length,e.length)}static compareSegments(t,e){const n=Ct.isNumericId(t),i=Ct.isNumericId(e);return n&&!i?-1:!n&&i?1:n&&i?Ct.extractNumericId(t).compare(Ct.extractNumericId(e)):rs(t,e)}static isNumericId(t){return t.startsWith("__id")&&t.endsWith("__")}static extractNumericId(t){return Wt.fromString(t.substring(4,t.length-2))}}class H extends Ct{construct(t,e,n){return new H(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new N(V.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter((i=>i.length>0)))}return new H(e)}static emptyPath(){return new H([])}}const kl=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ct extends Ct{construct(t,e,n){return new ct(t,e,n)}static isValidIdentifier(t){return kl.test(t)}canonicalString(){return this.toArray().map((t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ct.isValidIdentifier(t)||(t="`"+t+"`"),t))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===ro}static keyField(){return new ct([ro])}static fromServerFormat(t){const e=[];let n="",i=0;const o=()=>{if(n.length===0)throw new N(V.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let u=!1;for(;i<t.length;){const c=t[i];if(c==="\\"){if(i+1===t.length)throw new N(V.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const f=t[i+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new N(V.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=f,i+=2}else c==="`"?(u=!u,i++):c!=="."||u?(n+=c,i++):(o(),i++)}if(o(),u)throw new N(V.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new ct(e)}static emptyPath(){return new ct([])}}/**
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
 */class O{constructor(t){this.path=t}static fromPath(t){return new O(H.fromString(t))}static fromName(t){return new O(H.fromString(t).popFirst(5))}static empty(){return new O(H.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&H.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return H.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new O(new H(t.slice()))}}/**
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
 */function ua(r,t,e){if(!e)throw new N(V.INVALID_ARGUMENT,`Function ${r}() cannot be called with an empty ${t}.`)}function Nl(r,t,e,n){if(t===!0&&n===!0)throw new N(V.INVALID_ARGUMENT,`${r} and ${e} cannot be used together.`)}function so(r){if(!O.isDocumentKey(r))throw new N(V.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${r} has ${r.length}.`)}function io(r){if(O.isDocumentKey(r))throw new N(V.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${r} has ${r.length}.`)}function la(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}function vs(r){if(r===void 0)return"undefined";if(r===null)return"null";if(typeof r=="string")return r.length>20&&(r=`${r.substring(0,20)}...`),JSON.stringify(r);if(typeof r=="number"||typeof r=="boolean")return""+r;if(typeof r=="object"){if(r instanceof Array)return"an array";{const t=(function(n){return n.constructor?n.constructor.name:null})(r);return t?`a custom ${t} object`:"an object"}}return typeof r=="function"?"a function":M(12329,{type:typeof r})}function Ht(r,t){if("_delegate"in r&&(r=r._delegate),!(r instanceof t)){if(t.name===r.constructor.name)throw new N(V.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=vs(r);throw new N(V.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return r}/**
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
 */function et(r,t){const e={typeString:r};return t&&(e.value=t),e}function gn(r,t){if(!la(r))throw new N(V.INVALID_ARGUMENT,"JSON must be an object");let e;for(const n in t)if(t[n]){const i=t[n].typeString,o="value"in t[n]?{value:t[n].value}:void 0;if(!(n in r)){e=`JSON missing required field: '${n}'`;break}const u=r[n];if(i&&typeof u!==i){e=`JSON field '${n}' must be a ${i}.`;break}if(o!==void 0&&u!==o.value){e=`Expected '${n}' field to equal '${o.value}'`;break}}if(e)throw new N(V.INVALID_ARGUMENT,e);return!0}/**
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
 */const oo=-62135596800,ao=1e6;class X{static now(){return X.fromMillis(Date.now())}static fromDate(t){return X.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor((t-1e3*e)*ao);return new X(e,n)}constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new N(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new N(V.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<oo)throw new N(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new N(V.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/ao}_compareTo(t){return this.seconds===t.seconds?U(this.nanoseconds,t.nanoseconds):U(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:X._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(t){if(gn(t,X._jsonSchema))return new X(t.seconds,t.nanoseconds)}valueOf(){const t=this.seconds-oo;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}X._jsonSchemaVersion="firestore/timestamp/1.0",X._jsonSchema={type:et("string",X._jsonSchemaVersion),seconds:et("number"),nanoseconds:et("number")};/**
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
 */class F{static fromTimestamp(t){return new F(t)}static min(){return new F(new X(0,0))}static max(){return new F(new X(253402300799,999999999))}constructor(t){this.timestamp=t}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */const ln=-1;function xl(r,t){const e=r.toTimestamp().seconds,n=r.toTimestamp().nanoseconds+1,i=F.fromTimestamp(n===1e9?new X(e+1,0):new X(e,n));return new Jt(i,O.empty(),t)}function Ol(r){return new Jt(r.readTime,r.key,ln)}class Jt{constructor(t,e,n){this.readTime=t,this.documentKey=e,this.largestBatchId=n}static min(){return new Jt(F.min(),O.empty(),ln)}static max(){return new Jt(F.max(),O.empty(),ln)}}function Ml(r,t){let e=r.readTime.compareTo(t.readTime);return e!==0?e:(e=O.comparator(r.documentKey,t.documentKey),e!==0?e:U(r.largestBatchId,t.largestBatchId))}/**
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
 */const Fl="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ll{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((t=>t()))}}/**
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
 */async function xe(r){if(r.code!==V.FAILED_PRECONDITION||r.message!==Fl)throw r;k("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class P{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&M(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new P(((n,i)=>{this.nextCallback=o=>{this.wrapSuccess(t,o).next(n,i)},this.catchCallback=o=>{this.wrapFailure(e,o).next(n,i)}}))}toPromise(){return new Promise(((t,e)=>{this.next(t,e)}))}wrapUserFunction(t){try{const e=t();return e instanceof P?e:P.resolve(e)}catch(e){return P.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction((()=>t(e))):P.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction((()=>t(e))):P.reject(e)}static resolve(t){return new P(((e,n)=>{e(t)}))}static reject(t){return new P(((e,n)=>{n(t)}))}static waitFor(t){return new P(((e,n)=>{let i=0,o=0,u=!1;t.forEach((c=>{++i,c.next((()=>{++o,u&&o===i&&e()}),(f=>n(f)))})),u=!0,o===i&&e()}))}static or(t){let e=P.resolve(!1);for(const n of t)e=e.next((i=>i?P.resolve(i):n()));return e}static forEach(t,e){const n=[];return t.forEach(((i,o)=>{n.push(e.call(this,i,o))})),this.waitFor(n)}static mapArray(t,e){return new P(((n,i)=>{const o=t.length,u=new Array(o);let c=0;for(let f=0;f<o;f++){const d=f;e(t[d]).next((g=>{u[d]=g,++c,c===o&&n(u)}),(g=>i(g)))}}))}static doWhile(t,e){return new P(((n,i)=>{const o=()=>{t()===!0?e().next((()=>{o()}),i):n()};o()}))}}function Ul(r){const t=r.match(/Android ([\d.]+)/i),e=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(e)}function Oe(r){return r.name==="IndexedDbTransactionError"}/**
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
 */class lr{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=n=>this._e(n),this.ae=n=>e.writeSequenceNumber(n))}_e(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ae&&this.ae(t),t}}lr.ue=-1;/**
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
 */const Is=-1;function cr(r){return r==null}function Jn(r){return r===0&&1/r==-1/0}function ql(r){return typeof r=="number"&&Number.isInteger(r)&&!Jn(r)&&r<=Number.MAX_SAFE_INTEGER&&r>=Number.MIN_SAFE_INTEGER}/**
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
 */const ca="";function jl(r){let t="";for(let e=0;e<r.length;e++)t.length>0&&(t=uo(t)),t=Bl(r.get(e),t);return uo(t)}function Bl(r,t){let e=t;const n=r.length;for(let i=0;i<n;i++){const o=r.charAt(i);switch(o){case"\0":e+="";break;case ca:e+="";break;default:e+=o}}return e}function uo(r){return r+ca+""}/**
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
 */function lo(r){let t=0;for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t++;return t}function se(r,t){for(const e in r)Object.prototype.hasOwnProperty.call(r,e)&&t(e,r[e])}function ha(r){for(const t in r)if(Object.prototype.hasOwnProperty.call(r,t))return!1;return!0}/**
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
 */class Y{constructor(t,e){this.comparator=t,this.root=e||lt.EMPTY}insert(t,e){return new Y(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,lt.BLACK,null,null))}remove(t){return new Y(this.comparator,this.root.remove(t,this.comparator).copy(null,null,lt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(n===0)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(t,n.key);if(i===0)return e+n.left.size;i<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal(((e,n)=>(t(e,n),!1)))}toString(){const t=[];return this.inorderTraversal(((e,n)=>(t.push(`${e}:${n}`),!1))),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Bn(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Bn(this.root,t,this.comparator,!1)}getReverseIterator(){return new Bn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Bn(this.root,t,this.comparator,!0)}}class Bn{constructor(t,e,n,i){this.isReverse=i,this.nodeStack=[];let o=1;for(;!t.isEmpty();)if(o=e?n(t.key,e):1,e&&i&&(o*=-1),o<0)t=this.isReverse?t.left:t.right;else{if(o===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class lt{constructor(t,e,n,i,o){this.key=t,this.value=e,this.color=n??lt.RED,this.left=i??lt.EMPTY,this.right=o??lt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,i,o){return new lt(t??this.key,e??this.value,n??this.color,i??this.left,o??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let i=this;const o=n(t,i.key);return i=o<0?i.copy(null,null,null,i.left.insert(t,e,n),null):o===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return lt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return lt.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,lt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,lt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw M(43730,{key:this.key,value:this.value});if(this.right.isRed())throw M(14113,{key:this.key,value:this.value});const t=this.left.check();if(t!==this.right.check())throw M(27949);return t+(this.isRed()?0:1)}}lt.EMPTY=null,lt.RED=!0,lt.BLACK=!1;lt.EMPTY=new class{constructor(){this.size=0}get key(){throw M(57766)}get value(){throw M(16141)}get color(){throw M(16727)}get left(){throw M(29726)}get right(){throw M(36894)}copy(t,e,n,i,o){return this}insert(t,e,n){return new lt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class st{constructor(t){this.comparator=t,this.data=new Y(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal(((e,n)=>(t(e),!1)))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let n;for(n=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new co(this.data.getIterator())}getIteratorFrom(t){return new co(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach((n=>{e=e.add(n)})),e}isEqual(t){if(!(t instanceof st)||this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(this.comparator(i,o)!==0)return!1}return!0}toArray(){const t=[];return this.forEach((e=>{t.push(e)})),t}toString(){const t=[];return this.forEach((e=>t.push(e))),"SortedSet("+t.toString()+")"}copy(t){const e=new st(this.comparator);return e.data=t,e}}class co{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class wt{constructor(t){this.fields=t,t.sort(ct.comparator)}static empty(){return new wt([])}unionWith(t){let e=new st(ct.comparator);for(const n of this.fields)e=e.add(n);for(const n of t)e=e.add(n);return new wt(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Ve(this.fields,t.fields,((e,n)=>e.isEqual(n)))}}/**
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
 */class fa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class ht{constructor(t){this.binaryString=t}static fromBase64String(t){const e=(function(i){try{return atob(i)}catch(o){throw typeof DOMException<"u"&&o instanceof DOMException?new fa("Invalid base64 string: "+o):o}})(t);return new ht(e)}static fromUint8Array(t){const e=(function(i){let o="";for(let u=0;u<i.length;++u)o+=String.fromCharCode(i[u]);return o})(t);return new ht(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(e){return btoa(e)})(this.binaryString)}toUint8Array(){return(function(e){const n=new Uint8Array(e.length);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return U(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}ht.EMPTY_BYTE_STRING=new ht("");const zl=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Zt(r){if(G(!!r,39018),typeof r=="string"){let t=0;const e=zl.exec(r);if(G(!!e,46558,{timestamp:r}),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const n=new Date(r);return{seconds:Math.floor(n.getTime()/1e3),nanos:t}}return{seconds:Z(r.seconds),nanos:Z(r.nanos)}}function Z(r){return typeof r=="number"?r:typeof r=="string"?Number(r):0}function te(r){return typeof r=="string"?ht.fromBase64String(r):ht.fromUint8Array(r)}/**
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
 */const da="server_timestamp",ma="__type__",pa="__previous_value__",ga="__local_write_time__";function As(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[ma])===null||e===void 0?void 0:e.stringValue)===da}function hr(r){const t=r.mapValue.fields[pa];return As(t)?hr(t):t}function cn(r){const t=Zt(r.mapValue.fields[ga].timestampValue);return new X(t.seconds,t.nanos)}/**
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
 */class $l{constructor(t,e,n,i,o,u,c,f,d,g){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=i,this.ssl=o,this.forceLongPolling=u,this.autoDetectLongPolling=c,this.longPollingOptions=f,this.useFetchStreams=d,this.isUsingEmulator=g}}const Zn="(default)";class hn{constructor(t,e){this.projectId=t,this.database=e||Zn}static empty(){return new hn("","")}get isDefaultDatabase(){return this.database===Zn}isEqual(t){return t instanceof hn&&t.projectId===this.projectId&&t.database===this.database}}/**
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
 */const _a="__type__",Gl="__max__",zn={mapValue:{}},ya="__vector__",tr="value";function ee(r){return"nullValue"in r?0:"booleanValue"in r?1:"integerValue"in r||"doubleValue"in r?2:"timestampValue"in r?3:"stringValue"in r?5:"bytesValue"in r?6:"referenceValue"in r?7:"geoPointValue"in r?8:"arrayValue"in r?9:"mapValue"in r?As(r)?4:Ql(r)?9007199254740991:Kl(r)?10:11:M(28295,{value:r})}function xt(r,t){if(r===t)return!0;const e=ee(r);if(e!==ee(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return r.booleanValue===t.booleanValue;case 4:return cn(r).isEqual(cn(t));case 3:return(function(i,o){if(typeof i.timestampValue=="string"&&typeof o.timestampValue=="string"&&i.timestampValue.length===o.timestampValue.length)return i.timestampValue===o.timestampValue;const u=Zt(i.timestampValue),c=Zt(o.timestampValue);return u.seconds===c.seconds&&u.nanos===c.nanos})(r,t);case 5:return r.stringValue===t.stringValue;case 6:return(function(i,o){return te(i.bytesValue).isEqual(te(o.bytesValue))})(r,t);case 7:return r.referenceValue===t.referenceValue;case 8:return(function(i,o){return Z(i.geoPointValue.latitude)===Z(o.geoPointValue.latitude)&&Z(i.geoPointValue.longitude)===Z(o.geoPointValue.longitude)})(r,t);case 2:return(function(i,o){if("integerValue"in i&&"integerValue"in o)return Z(i.integerValue)===Z(o.integerValue);if("doubleValue"in i&&"doubleValue"in o){const u=Z(i.doubleValue),c=Z(o.doubleValue);return u===c?Jn(u)===Jn(c):isNaN(u)&&isNaN(c)}return!1})(r,t);case 9:return Ve(r.arrayValue.values||[],t.arrayValue.values||[],xt);case 10:case 11:return(function(i,o){const u=i.mapValue.fields||{},c=o.mapValue.fields||{};if(lo(u)!==lo(c))return!1;for(const f in u)if(u.hasOwnProperty(f)&&(c[f]===void 0||!xt(u[f],c[f])))return!1;return!0})(r,t);default:return M(52216,{left:r})}}function fn(r,t){return(r.values||[]).find((e=>xt(e,t)))!==void 0}function Se(r,t){if(r===t)return 0;const e=ee(r),n=ee(t);if(e!==n)return U(e,n);switch(e){case 0:case 9007199254740991:return 0;case 1:return U(r.booleanValue,t.booleanValue);case 2:return(function(o,u){const c=Z(o.integerValue||o.doubleValue),f=Z(u.integerValue||u.doubleValue);return c<f?-1:c>f?1:c===f?0:isNaN(c)?isNaN(f)?0:-1:1})(r,t);case 3:return ho(r.timestampValue,t.timestampValue);case 4:return ho(cn(r),cn(t));case 5:return rs(r.stringValue,t.stringValue);case 6:return(function(o,u){const c=te(o),f=te(u);return c.compareTo(f)})(r.bytesValue,t.bytesValue);case 7:return(function(o,u){const c=o.split("/"),f=u.split("/");for(let d=0;d<c.length&&d<f.length;d++){const g=U(c[d],f[d]);if(g!==0)return g}return U(c.length,f.length)})(r.referenceValue,t.referenceValue);case 8:return(function(o,u){const c=U(Z(o.latitude),Z(u.latitude));return c!==0?c:U(Z(o.longitude),Z(u.longitude))})(r.geoPointValue,t.geoPointValue);case 9:return fo(r.arrayValue,t.arrayValue);case 10:return(function(o,u){var c,f,d,g;const v=o.fields||{},R=u.fields||{},S=(c=v[tr])===null||c===void 0?void 0:c.arrayValue,D=(f=R[tr])===null||f===void 0?void 0:f.arrayValue,x=U(((d=S?.values)===null||d===void 0?void 0:d.length)||0,((g=D?.values)===null||g===void 0?void 0:g.length)||0);return x!==0?x:fo(S,D)})(r.mapValue,t.mapValue);case 11:return(function(o,u){if(o===zn.mapValue&&u===zn.mapValue)return 0;if(o===zn.mapValue)return 1;if(u===zn.mapValue)return-1;const c=o.fields||{},f=Object.keys(c),d=u.fields||{},g=Object.keys(d);f.sort(),g.sort();for(let v=0;v<f.length&&v<g.length;++v){const R=rs(f[v],g[v]);if(R!==0)return R;const S=Se(c[f[v]],d[g[v]]);if(S!==0)return S}return U(f.length,g.length)})(r.mapValue,t.mapValue);default:throw M(23264,{le:e})}}function ho(r,t){if(typeof r=="string"&&typeof t=="string"&&r.length===t.length)return U(r,t);const e=Zt(r),n=Zt(t),i=U(e.seconds,n.seconds);return i!==0?i:U(e.nanos,n.nanos)}function fo(r,t){const e=r.values||[],n=t.values||[];for(let i=0;i<e.length&&i<n.length;++i){const o=Se(e[i],n[i]);if(o)return o}return U(e.length,n.length)}function Ce(r){return ss(r)}function ss(r){return"nullValue"in r?"null":"booleanValue"in r?""+r.booleanValue:"integerValue"in r?""+r.integerValue:"doubleValue"in r?""+r.doubleValue:"timestampValue"in r?(function(e){const n=Zt(e);return`time(${n.seconds},${n.nanos})`})(r.timestampValue):"stringValue"in r?r.stringValue:"bytesValue"in r?(function(e){return te(e).toBase64()})(r.bytesValue):"referenceValue"in r?(function(e){return O.fromName(e).toString()})(r.referenceValue):"geoPointValue"in r?(function(e){return`geo(${e.latitude},${e.longitude})`})(r.geoPointValue):"arrayValue"in r?(function(e){let n="[",i=!0;for(const o of e.values||[])i?i=!1:n+=",",n+=ss(o);return n+"]"})(r.arrayValue):"mapValue"in r?(function(e){const n=Object.keys(e.fields||{}).sort();let i="{",o=!0;for(const u of n)o?o=!1:i+=",",i+=`${u}:${ss(e.fields[u])}`;return i+"}"})(r.mapValue):M(61005,{value:r})}function Qn(r){switch(ee(r)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=hr(r);return t?16+Qn(t):16;case 5:return 2*r.stringValue.length;case 6:return te(r.bytesValue).approximateByteSize();case 7:return r.referenceValue.length;case 9:return(function(n){return(n.values||[]).reduce(((i,o)=>i+Qn(o)),0)})(r.arrayValue);case 10:case 11:return(function(n){let i=0;return se(n.fields,((o,u)=>{i+=o.length+Qn(u)})),i})(r.mapValue);default:throw M(13486,{value:r})}}function is(r){return!!r&&"integerValue"in r}function ws(r){return!!r&&"arrayValue"in r}function mo(r){return!!r&&"nullValue"in r}function po(r){return!!r&&"doubleValue"in r&&isNaN(Number(r.doubleValue))}function Wn(r){return!!r&&"mapValue"in r}function Kl(r){var t,e;return((e=(((t=r?.mapValue)===null||t===void 0?void 0:t.fields)||{})[_a])===null||e===void 0?void 0:e.stringValue)===ya}function sn(r){if(r.geoPointValue)return{geoPointValue:Object.assign({},r.geoPointValue)};if(r.timestampValue&&typeof r.timestampValue=="object")return{timestampValue:Object.assign({},r.timestampValue)};if(r.mapValue){const t={mapValue:{fields:{}}};return se(r.mapValue.fields,((e,n)=>t.mapValue.fields[e]=sn(n))),t}if(r.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(r.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=sn(r.arrayValue.values[e]);return t}return Object.assign({},r)}function Ql(r){return(((r.mapValue||{}).fields||{}).__type__||{}).stringValue===Gl}/**
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
 */class It{constructor(t){this.value=t}static empty(){return new It({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!Wn(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=sn(e)}setAll(t){let e=ct.emptyPath(),n={},i=[];t.forEach(((u,c)=>{if(!e.isImmediateParentOf(c)){const f=this.getFieldsMap(e);this.applyChanges(f,n,i),n={},i=[],e=c.popLast()}u?n[c.lastSegment()]=sn(u):i.push(c.lastSegment())}));const o=this.getFieldsMap(e);this.applyChanges(o,n,i)}delete(t){const e=this.field(t.popLast());Wn(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return xt(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let i=e.mapValue.fields[t.get(n)];Wn(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,n){se(e,((i,o)=>t[i]=o));for(const i of n)delete t[i]}clone(){return new It(sn(this.value))}}function Ta(r){const t=[];return se(r.fields,((e,n)=>{const i=new ct([e]);if(Wn(n)){const o=Ta(n.mapValue).fields;if(o.length===0)t.push(i);else for(const u of o)t.push(i.child(u))}else t.push(i)})),new wt(t)}/**
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
 */class yt{constructor(t,e,n,i,o,u,c){this.key=t,this.documentType=e,this.version=n,this.readTime=i,this.createTime=o,this.data=u,this.documentState=c}static newInvalidDocument(t){return new yt(t,0,F.min(),F.min(),F.min(),It.empty(),0)}static newFoundDocument(t,e,n,i){return new yt(t,1,e,F.min(),n,i,0)}static newNoDocument(t,e){return new yt(t,2,e,F.min(),F.min(),It.empty(),0)}static newUnknownDocument(t,e){return new yt(t,3,e,F.min(),F.min(),It.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(F.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=F.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof yt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new yt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class er{constructor(t,e){this.position=t,this.inclusive=e}}function go(r,t,e){let n=0;for(let i=0;i<r.position.length;i++){const o=t[i],u=r.position[i];if(o.field.isKeyField()?n=O.comparator(O.fromName(u.referenceValue),e.key):n=Se(u,e.data.field(o.field)),o.dir==="desc"&&(n*=-1),n!==0)break}return n}function _o(r,t){if(r===null)return t===null;if(t===null||r.inclusive!==t.inclusive||r.position.length!==t.position.length)return!1;for(let e=0;e<r.position.length;e++)if(!xt(r.position[e],t.position[e]))return!1;return!0}/**
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
 */class nr{constructor(t,e="asc"){this.field=t,this.dir=e}}function Wl(r,t){return r.dir===t.dir&&r.field.isEqual(t.field)}/**
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
 */class Ea{}class nt extends Ea{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,n):new Xl(t,e,n):e==="array-contains"?new Zl(t,n):e==="in"?new tc(t,n):e==="not-in"?new ec(t,n):e==="array-contains-any"?new nc(t,n):new nt(t,e,n)}static createKeyFieldInFilter(t,e,n){return e==="in"?new Yl(t,n):new Jl(t,n)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&e.nullValue===void 0&&this.matchesComparison(Se(e,this.value)):e!==null&&ee(this.value)===ee(e)&&this.matchesComparison(Se(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return M(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Ot extends Ea{constructor(t,e){super(),this.filters=t,this.op=e,this.he=null}static create(t,e){return new Ot(t,e)}matches(t){return va(this)?this.filters.find((e=>!e.matches(t)))===void 0:this.filters.find((e=>e.matches(t)))!==void 0}getFlattenedFilters(){return this.he!==null||(this.he=this.filters.reduce(((t,e)=>t.concat(e.getFlattenedFilters())),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function va(r){return r.op==="and"}function Ia(r){return Hl(r)&&va(r)}function Hl(r){for(const t of r.filters)if(t instanceof Ot)return!1;return!0}function os(r){if(r instanceof nt)return r.field.canonicalString()+r.op.toString()+Ce(r.value);if(Ia(r))return r.filters.map((t=>os(t))).join(",");{const t=r.filters.map((e=>os(e))).join(",");return`${r.op}(${t})`}}function Aa(r,t){return r instanceof nt?(function(n,i){return i instanceof nt&&n.op===i.op&&n.field.isEqual(i.field)&&xt(n.value,i.value)})(r,t):r instanceof Ot?(function(n,i){return i instanceof Ot&&n.op===i.op&&n.filters.length===i.filters.length?n.filters.reduce(((o,u,c)=>o&&Aa(u,i.filters[c])),!0):!1})(r,t):void M(19439)}function wa(r){return r instanceof nt?(function(e){return`${e.field.canonicalString()} ${e.op} ${Ce(e.value)}`})(r):r instanceof Ot?(function(e){return e.op.toString()+" {"+e.getFilters().map(wa).join(" ,")+"}"})(r):"Filter"}class Xl extends nt{constructor(t,e,n){super(t,e,n),this.key=O.fromName(n.referenceValue)}matches(t){const e=O.comparator(t.key,this.key);return this.matchesComparison(e)}}class Yl extends nt{constructor(t,e){super(t,"in",e),this.keys=Ra("in",e)}matches(t){return this.keys.some((e=>e.isEqual(t.key)))}}class Jl extends nt{constructor(t,e){super(t,"not-in",e),this.keys=Ra("not-in",e)}matches(t){return!this.keys.some((e=>e.isEqual(t.key)))}}function Ra(r,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map((n=>O.fromName(n.referenceValue)))}class Zl extends nt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ws(e)&&fn(e.arrayValue,this.value)}}class tc extends nt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&fn(this.value.arrayValue,e)}}class ec extends nt{constructor(t,e){super(t,"not-in",e)}matches(t){if(fn(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&e.nullValue===void 0&&!fn(this.value.arrayValue,e)}}class nc extends nt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ws(e)||!e.arrayValue.values)&&e.arrayValue.values.some((n=>fn(this.value.arrayValue,n)))}}/**
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
 */class rc{constructor(t,e=null,n=[],i=[],o=null,u=null,c=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=i,this.limit=o,this.startAt=u,this.endAt=c,this.Pe=null}}function yo(r,t=null,e=[],n=[],i=null,o=null,u=null){return new rc(r,t,e,n,i,o,u)}function Rs(r){const t=L(r);if(t.Pe===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((n=>os(n))).join(","),e+="|ob:",e+=t.orderBy.map((n=>(function(o){return o.field.canonicalString()+o.dir})(n))).join(","),cr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((n=>Ce(n))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((n=>Ce(n))).join(",")),t.Pe=e}return t.Pe}function Ps(r,t){if(r.limit!==t.limit||r.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<r.orderBy.length;e++)if(!Wl(r.orderBy[e],t.orderBy[e]))return!1;if(r.filters.length!==t.filters.length)return!1;for(let e=0;e<r.filters.length;e++)if(!Aa(r.filters[e],t.filters[e]))return!1;return r.collectionGroup===t.collectionGroup&&!!r.path.isEqual(t.path)&&!!_o(r.startAt,t.startAt)&&_o(r.endAt,t.endAt)}function as(r){return O.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}/**
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
 */class fr{constructor(t,e=null,n=[],i=[],o=null,u="F",c=null,f=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=i,this.limit=o,this.limitType=u,this.startAt=c,this.endAt=f,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function sc(r,t,e,n,i,o,u,c){return new fr(r,t,e,n,i,o,u,c)}function Vs(r){return new fr(r)}function To(r){return r.filters.length===0&&r.limit===null&&r.startAt==null&&r.endAt==null&&(r.explicitOrderBy.length===0||r.explicitOrderBy.length===1&&r.explicitOrderBy[0].field.isKeyField())}function ic(r){return r.collectionGroup!==null}function on(r){const t=L(r);if(t.Te===null){t.Te=[];const e=new Set;for(const o of t.explicitOrderBy)t.Te.push(o),e.add(o.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(u){let c=new st(ct.comparator);return u.filters.forEach((f=>{f.getFlattenedFilters().forEach((d=>{d.isInequality()&&(c=c.add(d.field))}))})),c})(t).forEach((o=>{e.has(o.canonicalString())||o.isKeyField()||t.Te.push(new nr(o,n))})),e.has(ct.keyField().canonicalString())||t.Te.push(new nr(ct.keyField(),n))}return t.Te}function bt(r){const t=L(r);return t.Ie||(t.Ie=oc(t,on(r))),t.Ie}function oc(r,t){if(r.limitType==="F")return yo(r.path,r.collectionGroup,t,r.filters,r.limit,r.startAt,r.endAt);{t=t.map((i=>{const o=i.dir==="desc"?"asc":"desc";return new nr(i.field,o)}));const e=r.endAt?new er(r.endAt.position,r.endAt.inclusive):null,n=r.startAt?new er(r.startAt.position,r.startAt.inclusive):null;return yo(r.path,r.collectionGroup,t,r.filters,r.limit,e,n)}}function us(r,t,e){return new fr(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),t,e,r.startAt,r.endAt)}function dr(r,t){return Ps(bt(r),bt(t))&&r.limitType===t.limitType}function Pa(r){return`${Rs(bt(r))}|lt:${r.limitType}`}function Ie(r){return`Query(target=${(function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map((i=>wa(i))).join(", ")}]`),cr(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map((i=>(function(u){return`${u.field.canonicalString()} (${u.dir})`})(i))).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map((i=>Ce(i))).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map((i=>Ce(i))).join(",")),`Target(${n})`})(bt(r))}; limitType=${r.limitType})`}function mr(r,t){return t.isFoundDocument()&&(function(n,i){const o=i.key.path;return n.collectionGroup!==null?i.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(o):O.isDocumentKey(n.path)?n.path.isEqual(o):n.path.isImmediateParentOf(o)})(r,t)&&(function(n,i){for(const o of on(n))if(!o.field.isKeyField()&&i.data.field(o.field)===null)return!1;return!0})(r,t)&&(function(n,i){for(const o of n.filters)if(!o.matches(i))return!1;return!0})(r,t)&&(function(n,i){return!(n.startAt&&!(function(u,c,f){const d=go(u,c,f);return u.inclusive?d<=0:d<0})(n.startAt,on(n),i)||n.endAt&&!(function(u,c,f){const d=go(u,c,f);return u.inclusive?d>=0:d>0})(n.endAt,on(n),i))})(r,t)}function ac(r){return r.collectionGroup||(r.path.length%2==1?r.path.lastSegment():r.path.get(r.path.length-2))}function Va(r){return(t,e)=>{let n=!1;for(const i of on(r)){const o=uc(i,t,e);if(o!==0)return o;n=n||i.field.isKeyField()}return 0}}function uc(r,t,e){const n=r.field.isKeyField()?O.comparator(t.key,e.key):(function(o,u,c){const f=u.data.field(o),d=c.data.field(o);return f!==null&&d!==null?Se(f,d):M(42886)})(r.field,t,e);switch(r.dir){case"asc":return n;case"desc":return-1*n;default:return M(19790,{direction:r.dir})}}/**
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
 */class pe{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n!==void 0){for(const[i,o]of n)if(this.equalsFn(i,t))return o}}has(t){return this.get(t)!==void 0}set(t,e){const n=this.mapKeyFn(t),i=this.inner[n];if(i===void 0)return this.inner[n]=[[t,e]],void this.innerSize++;for(let o=0;o<i.length;o++)if(this.equalsFn(i[o][0],t))return void(i[o]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(n===void 0)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],t))return n.length===1?delete this.inner[e]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(t){se(this.inner,((e,n)=>{for(const[i,o]of n)t(i,o)}))}isEmpty(){return ha(this.inner)}size(){return this.innerSize}}/**
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
 */const lc=new Y(O.comparator);function Bt(){return lc}const Sa=new Y(O.comparator);function en(...r){let t=Sa;for(const e of r)t=t.insert(e.key,e);return t}function Ca(r){let t=Sa;return r.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ce(){return an()}function ba(){return an()}function an(){return new pe((r=>r.toString()),((r,t)=>r.isEqual(t)))}const cc=new Y(O.comparator),hc=new st(O.comparator);function q(...r){let t=hc;for(const e of r)t=t.add(e);return t}const fc=new st(U);function dc(){return fc}/**
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
 */function Ss(r,t){if(r.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Jn(t)?"-0":t}}function Da(r){return{integerValue:""+r}}function mc(r,t){return ql(t)?Da(t):Ss(r,t)}/**
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
 */class pr{constructor(){this._=void 0}}function pc(r,t,e){return r instanceof dn?(function(i,o){const u={fields:{[ma]:{stringValue:da},[ga]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return o&&As(o)&&(o=hr(o)),o&&(u.fields[pa]=o),{mapValue:u}})(e,t):r instanceof mn?Na(r,t):r instanceof pn?xa(r,t):(function(i,o){const u=ka(i,o),c=Eo(u)+Eo(i.Ee);return is(u)&&is(i.Ee)?Da(c):Ss(i.serializer,c)})(r,t)}function gc(r,t,e){return r instanceof mn?Na(r,t):r instanceof pn?xa(r,t):e}function ka(r,t){return r instanceof rr?(function(n){return is(n)||(function(o){return!!o&&"doubleValue"in o})(n)})(t)?t:{integerValue:0}:null}class dn extends pr{}class mn extends pr{constructor(t){super(),this.elements=t}}function Na(r,t){const e=Oa(t);for(const n of r.elements)e.some((i=>xt(i,n)))||e.push(n);return{arrayValue:{values:e}}}class pn extends pr{constructor(t){super(),this.elements=t}}function xa(r,t){let e=Oa(t);for(const n of r.elements)e=e.filter((i=>!xt(i,n)));return{arrayValue:{values:e}}}class rr extends pr{constructor(t,e){super(),this.serializer=t,this.Ee=e}}function Eo(r){return Z(r.integerValue||r.doubleValue)}function Oa(r){return ws(r)&&r.arrayValue.values?r.arrayValue.values.slice():[]}/**
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
 */class _c{constructor(t,e){this.field=t,this.transform=e}}function yc(r,t){return r.field.isEqual(t.field)&&(function(n,i){return n instanceof mn&&i instanceof mn||n instanceof pn&&i instanceof pn?Ve(n.elements,i.elements,xt):n instanceof rr&&i instanceof rr?xt(n.Ee,i.Ee):n instanceof dn&&i instanceof dn})(r.transform,t.transform)}class Tc{constructor(t,e){this.version=t,this.transformResults=e}}class Rt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Rt}static exists(t){return new Rt(void 0,t)}static updateTime(t){return new Rt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Hn(r,t){return r.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(r.updateTime):r.exists===void 0||r.exists===t.isFoundDocument()}class gr{}function Ma(r,t){if(!r.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return r.isNoDocument()?new _r(r.key,Rt.none()):new _n(r.key,r.data,Rt.none());{const e=r.data,n=It.empty();let i=new st(ct.comparator);for(let o of t.fields)if(!i.has(o)){let u=e.field(o);u===null&&o.length>1&&(o=o.popLast(),u=e.field(o)),u===null?n.delete(o):n.set(o,u),i=i.add(o)}return new ie(r.key,n,new wt(i.toArray()),Rt.none())}}function Ec(r,t,e){r instanceof _n?(function(i,o,u){const c=i.value.clone(),f=Io(i.fieldTransforms,o,u.transformResults);c.setAll(f),o.convertToFoundDocument(u.version,c).setHasCommittedMutations()})(r,t,e):r instanceof ie?(function(i,o,u){if(!Hn(i.precondition,o))return void o.convertToUnknownDocument(u.version);const c=Io(i.fieldTransforms,o,u.transformResults),f=o.data;f.setAll(Fa(i)),f.setAll(c),o.convertToFoundDocument(u.version,f).setHasCommittedMutations()})(r,t,e):(function(i,o,u){o.convertToNoDocument(u.version).setHasCommittedMutations()})(0,t,e)}function un(r,t,e,n){return r instanceof _n?(function(o,u,c,f){if(!Hn(o.precondition,u))return c;const d=o.value.clone(),g=Ao(o.fieldTransforms,f,u);return d.setAll(g),u.convertToFoundDocument(u.version,d).setHasLocalMutations(),null})(r,t,e,n):r instanceof ie?(function(o,u,c,f){if(!Hn(o.precondition,u))return c;const d=Ao(o.fieldTransforms,f,u),g=u.data;return g.setAll(Fa(o)),g.setAll(d),u.convertToFoundDocument(u.version,g).setHasLocalMutations(),c===null?null:c.unionWith(o.fieldMask.fields).unionWith(o.fieldTransforms.map((v=>v.field)))})(r,t,e,n):(function(o,u,c){return Hn(o.precondition,u)?(u.convertToNoDocument(u.version).setHasLocalMutations(),null):c})(r,t,e)}function vc(r,t){let e=null;for(const n of r.fieldTransforms){const i=t.data.field(n.field),o=ka(n.transform,i||null);o!=null&&(e===null&&(e=It.empty()),e.set(n.field,o))}return e||null}function vo(r,t){return r.type===t.type&&!!r.key.isEqual(t.key)&&!!r.precondition.isEqual(t.precondition)&&!!(function(n,i){return n===void 0&&i===void 0||!(!n||!i)&&Ve(n,i,((o,u)=>yc(o,u)))})(r.fieldTransforms,t.fieldTransforms)&&(r.type===0?r.value.isEqual(t.value):r.type!==1||r.data.isEqual(t.data)&&r.fieldMask.isEqual(t.fieldMask))}class _n extends gr{constructor(t,e,n,i=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ie extends gr{constructor(t,e,n,i,o=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=i,this.fieldTransforms=o,this.type=1}getFieldMask(){return this.fieldMask}}function Fa(r){const t=new Map;return r.fieldMask.fields.forEach((e=>{if(!e.isEmpty()){const n=r.data.field(e);t.set(e,n)}})),t}function Io(r,t,e){const n=new Map;G(r.length===e.length,32656,{Ae:e.length,Re:r.length});for(let i=0;i<e.length;i++){const o=r[i],u=o.transform,c=t.data.field(o.field);n.set(o.field,gc(u,c,e[i]))}return n}function Ao(r,t,e){const n=new Map;for(const i of r){const o=i.transform,u=e.data.field(i.field);n.set(i.field,pc(o,u,t))}return n}class _r extends gr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ic extends gr{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class Ac{constructor(t,e,n,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const o=this.mutations[i];o.key.isEqual(t.key)&&Ec(o,t,n[i])}}applyToLocalView(t,e){for(const n of this.baseMutations)n.key.isEqual(t.key)&&(e=un(n,t,e,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(t.key)&&(e=un(n,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const n=ba();return this.mutations.forEach((i=>{const o=t.get(i.key),u=o.overlayedDocument;let c=this.applyToLocalView(u,o.mutatedFields);c=e.has(i.key)?null:c;const f=Ma(u,c);f!==null&&n.set(i.key,f),u.isValidDocument()||u.convertToNoDocument(F.min())})),n}keys(){return this.mutations.reduce(((t,e)=>t.add(e.key)),q())}isEqual(t){return this.batchId===t.batchId&&Ve(this.mutations,t.mutations,((e,n)=>vo(e,n)))&&Ve(this.baseMutations,t.baseMutations,((e,n)=>vo(e,n)))}}class Cs{constructor(t,e,n,i){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=i}static from(t,e,n){G(t.mutations.length===n.length,58842,{Ve:t.mutations.length,me:n.length});let i=(function(){return cc})();const o=t.mutations;for(let u=0;u<o.length;u++)i=i.insert(o[u].key,n[u].version);return new Cs(t,e,n,i)}}/**
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
 */class wc{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class Rc{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
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
 */var tt,j;function Pc(r){switch(r){case V.OK:return M(64938);case V.CANCELLED:case V.UNKNOWN:case V.DEADLINE_EXCEEDED:case V.RESOURCE_EXHAUSTED:case V.INTERNAL:case V.UNAVAILABLE:case V.UNAUTHENTICATED:return!1;case V.INVALID_ARGUMENT:case V.NOT_FOUND:case V.ALREADY_EXISTS:case V.PERMISSION_DENIED:case V.FAILED_PRECONDITION:case V.ABORTED:case V.OUT_OF_RANGE:case V.UNIMPLEMENTED:case V.DATA_LOSS:return!0;default:return M(15467,{code:r})}}function La(r){if(r===void 0)return jt("GRPC error has no .code"),V.UNKNOWN;switch(r){case tt.OK:return V.OK;case tt.CANCELLED:return V.CANCELLED;case tt.UNKNOWN:return V.UNKNOWN;case tt.DEADLINE_EXCEEDED:return V.DEADLINE_EXCEEDED;case tt.RESOURCE_EXHAUSTED:return V.RESOURCE_EXHAUSTED;case tt.INTERNAL:return V.INTERNAL;case tt.UNAVAILABLE:return V.UNAVAILABLE;case tt.UNAUTHENTICATED:return V.UNAUTHENTICATED;case tt.INVALID_ARGUMENT:return V.INVALID_ARGUMENT;case tt.NOT_FOUND:return V.NOT_FOUND;case tt.ALREADY_EXISTS:return V.ALREADY_EXISTS;case tt.PERMISSION_DENIED:return V.PERMISSION_DENIED;case tt.FAILED_PRECONDITION:return V.FAILED_PRECONDITION;case tt.ABORTED:return V.ABORTED;case tt.OUT_OF_RANGE:return V.OUT_OF_RANGE;case tt.UNIMPLEMENTED:return V.UNIMPLEMENTED;case tt.DATA_LOSS:return V.DATA_LOSS;default:return M(39323,{code:r})}}(j=tt||(tt={}))[j.OK=0]="OK",j[j.CANCELLED=1]="CANCELLED",j[j.UNKNOWN=2]="UNKNOWN",j[j.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",j[j.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",j[j.NOT_FOUND=5]="NOT_FOUND",j[j.ALREADY_EXISTS=6]="ALREADY_EXISTS",j[j.PERMISSION_DENIED=7]="PERMISSION_DENIED",j[j.UNAUTHENTICATED=16]="UNAUTHENTICATED",j[j.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",j[j.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",j[j.ABORTED=10]="ABORTED",j[j.OUT_OF_RANGE=11]="OUT_OF_RANGE",j[j.UNIMPLEMENTED=12]="UNIMPLEMENTED",j[j.INTERNAL=13]="INTERNAL",j[j.UNAVAILABLE=14]="UNAVAILABLE",j[j.DATA_LOSS=15]="DATA_LOSS";/**
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
 */const Vc=new Wt([4294967295,4294967295],0);function wo(r){const t=aa().encode(r),e=new Zo;return e.update(t),new Uint8Array(e.digest())}function Ro(r){const t=new DataView(r.buffer),e=t.getUint32(0,!0),n=t.getUint32(4,!0),i=t.getUint32(8,!0),o=t.getUint32(12,!0);return[new Wt([e,n],0),new Wt([i,o],0)]}class bs{constructor(t,e,n){if(this.bitmap=t,this.padding=e,this.hashCount=n,e<0||e>=8)throw new nn(`Invalid padding: ${e}`);if(n<0)throw new nn(`Invalid hash count: ${n}`);if(t.length>0&&this.hashCount===0)throw new nn(`Invalid hash count: ${n}`);if(t.length===0&&e!==0)throw new nn(`Invalid padding when bitmap length is 0: ${e}`);this.fe=8*t.length-e,this.ge=Wt.fromNumber(this.fe)}pe(t,e,n){let i=t.add(e.multiply(Wt.fromNumber(n)));return i.compare(Vc)===1&&(i=new Wt([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ge).toNumber()}ye(t){return!!(this.bitmap[Math.floor(t/8)]&1<<t%8)}mightContain(t){if(this.fe===0)return!1;const e=wo(t),[n,i]=Ro(e);for(let o=0;o<this.hashCount;o++){const u=this.pe(n,i,o);if(!this.ye(u))return!1}return!0}static create(t,e,n){const i=t%8==0?0:8-t%8,o=new Uint8Array(Math.ceil(t/8)),u=new bs(o,i,e);return n.forEach((c=>u.insert(c))),u}insert(t){if(this.fe===0)return;const e=wo(t),[n,i]=Ro(e);for(let o=0;o<this.hashCount;o++){const u=this.pe(n,i,o);this.we(u)}}we(t){const e=Math.floor(t/8),n=t%8;this.bitmap[e]|=1<<n}}class nn extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
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
 */class yr{constructor(t,e,n,i,o){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=o}static createSynthesizedRemoteEventForCurrentChange(t,e,n){const i=new Map;return i.set(t,yn.createSynthesizedTargetChangeForCurrentChange(t,e,n)),new yr(F.min(),i,new Y(U),Bt(),q())}}class yn{constructor(t,e,n,i,o){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=o}static createSynthesizedTargetChangeForCurrentChange(t,e,n){return new yn(n,e,q(),q(),q())}}/**
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
 */class Xn{constructor(t,e,n,i){this.Se=t,this.removedTargetIds=e,this.key=n,this.be=i}}class Ua{constructor(t,e){this.targetId=t,this.De=e}}class qa{constructor(t,e,n=ht.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=i}}class Po{constructor(){this.ve=0,this.Ce=Vo(),this.Fe=ht.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return this.ve!==0}get Ne(){return this.xe}Be(t){t.approximateByteSize()>0&&(this.xe=!0,this.Fe=t)}Le(){let t=q(),e=q(),n=q();return this.Ce.forEach(((i,o)=>{switch(o){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:n=n.add(i);break;default:M(38017,{changeType:o})}})),new yn(this.Fe,this.Me,t,e,n)}ke(){this.xe=!1,this.Ce=Vo()}qe(t,e){this.xe=!0,this.Ce=this.Ce.insert(t,e)}Qe(t){this.xe=!0,this.Ce=this.Ce.remove(t)}$e(){this.ve+=1}Ue(){this.ve-=1,G(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Sc{constructor(t){this.We=t,this.Ge=new Map,this.ze=Bt(),this.je=$n(),this.Je=$n(),this.He=new Y(U)}Ye(t){for(const e of t.Se)t.be&&t.be.isFoundDocument()?this.Ze(e,t.be):this.Xe(e,t.key,t.be);for(const e of t.removedTargetIds)this.Xe(e,t.key,t.be)}et(t){this.forEachTarget(t,(e=>{const n=this.tt(e);switch(t.state){case 0:this.nt(e)&&n.Be(t.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(t.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(e);break;case 3:this.nt(e)&&(n.Ke(),n.Be(t.resumeToken));break;case 4:this.nt(e)&&(this.rt(e),n.Be(t.resumeToken));break;default:M(56790,{state:t.state})}}))}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.Ge.forEach(((n,i)=>{this.nt(i)&&e(i)}))}it(t){const e=t.targetId,n=t.De.count,i=this.st(e);if(i){const o=i.target;if(as(o))if(n===0){const u=new O(o.path);this.Xe(e,u,yt.newNoDocument(u,F.min()))}else G(n===1,20013,{expectedCount:n});else{const u=this.ot(e);if(u!==n){const c=this._t(t),f=c?this.ut(c,t,u):1;if(f!==0){this.rt(e);const d=f===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(e,d)}}}}}_t(t){const e=t.De.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:n="",padding:i=0},hashCount:o=0}=e;let u,c;try{u=te(n).toUint8Array()}catch(f){if(f instanceof fa)return Yt("Decoding the base64 bloom filter in existence filter failed ("+f.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw f}try{c=new bs(u,i,o)}catch(f){return Yt(f instanceof nn?"BloomFilter error: ":"Applying bloom filter failed: ",f),null}return c.fe===0?null:c}ut(t,e,n){return e.De.count===n-this.ht(t,e.targetId)?0:2}ht(t,e){const n=this.We.getRemoteKeysForTarget(e);let i=0;return n.forEach((o=>{const u=this.We.lt(),c=`projects/${u.projectId}/databases/${u.database}/documents/${o.path.canonicalString()}`;t.mightContain(c)||(this.Xe(e,o,null),i++)})),i}Pt(t){const e=new Map;this.Ge.forEach(((o,u)=>{const c=this.st(u);if(c){if(o.current&&as(c.target)){const f=new O(c.target.path);this.Tt(f).has(u)||this.It(u,f)||this.Xe(u,f,yt.newNoDocument(f,t))}o.Ne&&(e.set(u,o.Le()),o.ke())}}));let n=q();this.Je.forEach(((o,u)=>{let c=!0;u.forEachWhile((f=>{const d=this.st(f);return!d||d.purpose==="TargetPurposeLimboResolution"||(c=!1,!1)})),c&&(n=n.add(o))})),this.ze.forEach(((o,u)=>u.setReadTime(t)));const i=new yr(t,e,this.He,this.ze,n);return this.ze=Bt(),this.je=$n(),this.Je=$n(),this.He=new Y(U),i}Ze(t,e){if(!this.nt(t))return;const n=this.It(t,e.key)?2:0;this.tt(t).qe(e.key,n),this.ze=this.ze.insert(e.key,e),this.je=this.je.insert(e.key,this.Tt(e.key).add(t)),this.Je=this.Je.insert(e.key,this.dt(e.key).add(t))}Xe(t,e,n){if(!this.nt(t))return;const i=this.tt(t);this.It(t,e)?i.qe(e,1):i.Qe(e),this.Je=this.Je.insert(e,this.dt(e).delete(t)),this.Je=this.Je.insert(e,this.dt(e).add(t)),n&&(this.ze=this.ze.insert(e,n))}removeTarget(t){this.Ge.delete(t)}ot(t){const e=this.tt(t).Le();return this.We.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}$e(t){this.tt(t).$e()}tt(t){let e=this.Ge.get(t);return e||(e=new Po,this.Ge.set(t,e)),e}dt(t){let e=this.Je.get(t);return e||(e=new st(U),this.Je=this.Je.insert(t,e)),e}Tt(t){let e=this.je.get(t);return e||(e=new st(U),this.je=this.je.insert(t,e)),e}nt(t){const e=this.st(t)!==null;return e||k("WatchChangeAggregator","Detected inactive target",t),e}st(t){const e=this.Ge.get(t);return e&&e.Oe?null:this.We.Et(t)}rt(t){this.Ge.set(t,new Po),this.We.getRemoteKeysForTarget(t).forEach((e=>{this.Xe(t,e,null)}))}It(t,e){return this.We.getRemoteKeysForTarget(t).has(e)}}function $n(){return new Y(O.comparator)}function Vo(){return new Y(O.comparator)}const Cc={asc:"ASCENDING",desc:"DESCENDING"},bc={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},Dc={and:"AND",or:"OR"};class kc{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function ls(r,t){return r.useProto3Json||cr(t)?t:{value:t}}function sr(r,t){return r.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ja(r,t){return r.useProto3Json?t.toBase64():t.toUint8Array()}function Nc(r,t){return sr(r,t.toTimestamp())}function Dt(r){return G(!!r,49232),F.fromTimestamp((function(e){const n=Zt(e);return new X(n.seconds,n.nanos)})(r))}function Ds(r,t){return cs(r,t).canonicalString()}function cs(r,t){const e=(function(i){return new H(["projects",i.projectId,"databases",i.database])})(r).child("documents");return t===void 0?e:e.child(t)}function Ba(r){const t=H.fromString(r);return G(Qa(t),10190,{key:t.toString()}),t}function hs(r,t){return Ds(r.databaseId,t.path)}function Yr(r,t){const e=Ba(t);if(e.get(1)!==r.databaseId.projectId)throw new N(V.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+r.databaseId.projectId);if(e.get(3)!==r.databaseId.database)throw new N(V.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+r.databaseId.database);return new O($a(e))}function za(r,t){return Ds(r.databaseId,t)}function xc(r){const t=Ba(r);return t.length===4?H.emptyPath():$a(t)}function fs(r){return new H(["projects",r.databaseId.projectId,"databases",r.databaseId.database]).canonicalString()}function $a(r){return G(r.length>4&&r.get(4)==="documents",29091,{key:r.toString()}),r.popFirst(5)}function So(r,t,e){return{name:hs(r,t),fields:e.value.mapValue.fields}}function Oc(r,t){let e;if("targetChange"in t){t.targetChange;const n=(function(d){return d==="NO_CHANGE"?0:d==="ADD"?1:d==="REMOVE"?2:d==="CURRENT"?3:d==="RESET"?4:M(39313,{state:d})})(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],o=(function(d,g){return d.useProto3Json?(G(g===void 0||typeof g=="string",58123),ht.fromBase64String(g||"")):(G(g===void 0||g instanceof Buffer||g instanceof Uint8Array,16193),ht.fromUint8Array(g||new Uint8Array))})(r,t.targetChange.resumeToken),u=t.targetChange.cause,c=u&&(function(d){const g=d.code===void 0?V.UNKNOWN:La(d.code);return new N(g,d.message||"")})(u);e=new qa(n,i,o,c||null)}else if("documentChange"in t){t.documentChange;const n=t.documentChange;n.document,n.document.name,n.document.updateTime;const i=Yr(r,n.document.name),o=Dt(n.document.updateTime),u=n.document.createTime?Dt(n.document.createTime):F.min(),c=new It({mapValue:{fields:n.document.fields}}),f=yt.newFoundDocument(i,o,u,c),d=n.targetIds||[],g=n.removedTargetIds||[];e=new Xn(d,g,f.key,f)}else if("documentDelete"in t){t.documentDelete;const n=t.documentDelete;n.document;const i=Yr(r,n.document),o=n.readTime?Dt(n.readTime):F.min(),u=yt.newNoDocument(i,o),c=n.removedTargetIds||[];e=new Xn([],c,u.key,u)}else if("documentRemove"in t){t.documentRemove;const n=t.documentRemove;n.document;const i=Yr(r,n.document),o=n.removedTargetIds||[];e=new Xn([],o,i,null)}else{if(!("filter"in t))return M(11601,{At:t});{t.filter;const n=t.filter;n.targetId;const{count:i=0,unchangedNames:o}=n,u=new Rc(i,o),c=n.targetId;e=new Ua(c,u)}}return e}function Mc(r,t){let e;if(t instanceof _n)e={update:So(r,t.key,t.value)};else if(t instanceof _r)e={delete:hs(r,t.key)};else if(t instanceof ie)e={update:So(r,t.key,t.data),updateMask:Gc(t.fieldMask)};else{if(!(t instanceof Ic))return M(16599,{Rt:t.type});e={verify:hs(r,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map((n=>(function(o,u){const c=u.transform;if(c instanceof dn)return{fieldPath:u.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(c instanceof mn)return{fieldPath:u.field.canonicalString(),appendMissingElements:{values:c.elements}};if(c instanceof pn)return{fieldPath:u.field.canonicalString(),removeAllFromArray:{values:c.elements}};if(c instanceof rr)return{fieldPath:u.field.canonicalString(),increment:c.Ee};throw M(20930,{transform:u.transform})})(0,n)))),t.precondition.isNone||(e.currentDocument=(function(i,o){return o.updateTime!==void 0?{updateTime:Nc(i,o.updateTime)}:o.exists!==void 0?{exists:o.exists}:M(27497)})(r,t.precondition)),e}function Fc(r,t){return r&&r.length>0?(G(t!==void 0,14353),r.map((e=>(function(i,o){let u=i.updateTime?Dt(i.updateTime):Dt(o);return u.isEqual(F.min())&&(u=Dt(o)),new Tc(u,i.transformResults||[])})(e,t)))):[]}function Lc(r,t){return{documents:[za(r,t.path)]}}function Uc(r,t){const e={structuredQuery:{}},n=t.path;let i;t.collectionGroup!==null?(i=n,e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i=n.popLast(),e.structuredQuery.from=[{collectionId:n.lastSegment()}]),e.parent=za(r,i);const o=(function(d){if(d.length!==0)return Ka(Ot.create(d,"and"))})(t.filters);o&&(e.structuredQuery.where=o);const u=(function(d){if(d.length!==0)return d.map((g=>(function(R){return{field:Ae(R.field),direction:Bc(R.dir)}})(g)))})(t.orderBy);u&&(e.structuredQuery.orderBy=u);const c=ls(r,t.limit);return c!==null&&(e.structuredQuery.limit=c),t.startAt&&(e.structuredQuery.startAt=(function(d){return{before:d.inclusive,values:d.position}})(t.startAt)),t.endAt&&(e.structuredQuery.endAt=(function(d){return{before:!d.inclusive,values:d.position}})(t.endAt)),{Vt:e,parent:i}}function qc(r){let t=xc(r.parent);const e=r.structuredQuery,n=e.from?e.from.length:0;let i=null;if(n>0){G(n===1,65062);const g=e.from[0];g.allDescendants?i=g.collectionId:t=t.child(g.collectionId)}let o=[];e.where&&(o=(function(v){const R=Ga(v);return R instanceof Ot&&Ia(R)?R.getFilters():[R]})(e.where));let u=[];e.orderBy&&(u=(function(v){return v.map((R=>(function(D){return new nr(we(D.field),(function(b){switch(b){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(D.direction))})(R)))})(e.orderBy));let c=null;e.limit&&(c=(function(v){let R;return R=typeof v=="object"?v.value:v,cr(R)?null:R})(e.limit));let f=null;e.startAt&&(f=(function(v){const R=!!v.before,S=v.values||[];return new er(S,R)})(e.startAt));let d=null;return e.endAt&&(d=(function(v){const R=!v.before,S=v.values||[];return new er(S,R)})(e.endAt)),sc(t,i,u,o,c,"F",f,d)}function jc(r,t){const e=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return M(28987,{purpose:i})}})(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Ga(r){return r.unaryFilter!==void 0?(function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=we(e.unaryFilter.field);return nt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const i=we(e.unaryFilter.field);return nt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const o=we(e.unaryFilter.field);return nt.create(o,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const u=we(e.unaryFilter.field);return nt.create(u,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return M(61313);default:return M(60726)}})(r):r.fieldFilter!==void 0?(function(e){return nt.create(we(e.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return M(58110);default:return M(50506)}})(e.fieldFilter.op),e.fieldFilter.value)})(r):r.compositeFilter!==void 0?(function(e){return Ot.create(e.compositeFilter.filters.map((n=>Ga(n))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return M(1026)}})(e.compositeFilter.op))})(r):M(30097,{filter:r})}function Bc(r){return Cc[r]}function zc(r){return bc[r]}function $c(r){return Dc[r]}function Ae(r){return{fieldPath:r.canonicalString()}}function we(r){return ct.fromServerFormat(r.fieldPath)}function Ka(r){return r instanceof nt?(function(e){if(e.op==="=="){if(po(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NAN"}};if(mo(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(po(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NOT_NAN"}};if(mo(e.value))return{unaryFilter:{field:Ae(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ae(e.field),op:zc(e.op),value:e.value}}})(r):r instanceof Ot?(function(e){const n=e.getFilters().map((i=>Ka(i)));return n.length===1?n[0]:{compositeFilter:{op:$c(e.op),filters:n}}})(r):M(54877,{filter:r})}function Gc(r){const t=[];return r.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Qa(r){return r.length>=4&&r.get(0)==="projects"&&r.get(2)==="databases"}/**
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
 */class Qt{constructor(t,e,n,i,o=F.min(),u=F.min(),c=ht.EMPTY_BYTE_STRING,f=null){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=o,this.lastLimboFreeSnapshotVersion=u,this.resumeToken=c,this.expectedCount=f}withSequenceNumber(t){return new Qt(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Qt(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
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
 */class Kc{constructor(t){this.gt=t}}function Qc(r){const t=qc({parent:r.parent,structuredQuery:r.structuredQuery});return r.limitType==="LAST"?us(t,t.limit,"L"):t}/**
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
 */class Wc{constructor(){this.Dn=new Hc}addToCollectionParentIndex(t,e){return this.Dn.add(e),P.resolve()}getCollectionParents(t,e){return P.resolve(this.Dn.getEntries(e))}addFieldIndex(t,e){return P.resolve()}deleteFieldIndex(t,e){return P.resolve()}deleteAllFieldIndexes(t){return P.resolve()}createTargetIndexes(t,e){return P.resolve()}getDocumentsMatchingTarget(t,e){return P.resolve(null)}getIndexType(t,e){return P.resolve(0)}getFieldIndexes(t,e){return P.resolve([])}getNextCollectionGroupToUpdate(t){return P.resolve(null)}getMinOffset(t,e){return P.resolve(Jt.min())}getMinOffsetFromCollectionGroup(t,e){return P.resolve(Jt.min())}updateCollectionGroup(t,e,n){return P.resolve()}updateIndexEntries(t,e){return P.resolve()}}class Hc{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e]||new st(H.comparator),o=!i.has(n);return this.index[e]=i.add(n),o}has(t){const e=t.lastSegment(),n=t.popLast(),i=this.index[e];return i&&i.has(n)}getEntries(t){return(this.index[t]||new st(H.comparator)).toArray()}}/**
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
 */const Co={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Wa=41943040;class vt{static withCacheSize(t){return new vt(t,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}}/**
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
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Wa,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
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
 */class be{constructor(t){this._r=t}next(){return this._r+=2,this._r}static ar(){return new be(0)}static ur(){return new be(-1)}}/**
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
 */const bo="LruGarbageCollector",Xc=1048576;function Do([r,t],[e,n]){const i=U(r,e);return i===0?U(t,n):i}class Yc{constructor(t){this.Tr=t,this.buffer=new st(Do),this.Ir=0}dr(){return++this.Ir}Er(t){const e=[t,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(e);else{const n=this.buffer.last();Do(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}}get maxValue(){return this.buffer.last()[0]}}class Jc{constructor(t,e,n){this.garbageCollector=t,this.asyncQueue=e,this.localStore=n,this.Ar=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return this.Ar!==null}Rr(t){k(bo,`Garbage collection scheduled in ${t}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",t,(async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){Oe(e)?k(bo,"Ignoring IndexedDB error during garbage collection: ",e):await xe(e)}await this.Rr(3e5)}))}}class Zc{constructor(t,e){this.Vr=t,this.params=e}calculateTargetCount(t,e){return this.Vr.mr(t).next((n=>Math.floor(e/100*n)))}nthSequenceNumber(t,e){if(e===0)return P.resolve(lr.ue);const n=new Yc(e);return this.Vr.forEachTarget(t,(i=>n.Er(i.sequenceNumber))).next((()=>this.Vr.gr(t,(i=>n.Er(i))))).next((()=>n.maxValue))}removeTargets(t,e,n){return this.Vr.removeTargets(t,e,n)}removeOrphanedDocuments(t,e){return this.Vr.removeOrphanedDocuments(t,e)}collect(t,e){return this.params.cacheSizeCollectionThreshold===-1?(k("LruGarbageCollector","Garbage collection skipped; disabled"),P.resolve(Co)):this.getCacheSize(t).next((n=>n<this.params.cacheSizeCollectionThreshold?(k("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Co):this.pr(t,e)))}getCacheSize(t){return this.Vr.getCacheSize(t)}pr(t,e){let n,i,o,u,c,f,d;const g=Date.now();return this.calculateTargetCount(t,this.params.percentileToCollect).next((v=>(v>this.params.maximumSequenceNumbersToCollect?(k("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,u=Date.now(),this.nthSequenceNumber(t,i)))).next((v=>(n=v,c=Date.now(),this.removeTargets(t,n,e)))).next((v=>(o=v,f=Date.now(),this.removeOrphanedDocuments(t,n)))).next((v=>(d=Date.now(),ve()<=qt.DEBUG&&k("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${u-g}ms
	Determined least recently used ${i} in `+(c-u)+`ms
	Removed ${o} targets in `+(f-c)+`ms
	Removed ${v} documents in `+(d-f)+`ms
Total Duration: ${d-g}ms`),P.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:o,documentsRemoved:v}))))}}function th(r,t){return new Zc(r,t)}/**
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
 */class eh{constructor(){this.changes=new pe((t=>t.toString()),((t,e)=>t.isEqual(e))),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,yt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return n!==void 0?P.resolve(n):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
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
 */class nh{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
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
 */class rh{constructor(t,e,n,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=n,this.indexManager=i}getDocument(t,e){let n=null;return this.documentOverlayCache.getOverlay(t,e).next((i=>(n=i,this.remoteDocumentCache.getEntry(t,e)))).next((i=>(n!==null&&un(n.mutation,i,wt.empty(),X.now()),i)))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.getLocalViewOfDocuments(t,n,q()).next((()=>n))))}getLocalViewOfDocuments(t,e,n=q()){const i=ce();return this.populateOverlays(t,i,e).next((()=>this.computeViews(t,e,i,n).next((o=>{let u=en();return o.forEach(((c,f)=>{u=u.insert(c,f.overlayedDocument)})),u}))))}getOverlayedDocuments(t,e){const n=ce();return this.populateOverlays(t,n,e).next((()=>this.computeViews(t,e,n,q())))}populateOverlays(t,e,n){const i=[];return n.forEach((o=>{e.has(o)||i.push(o)})),this.documentOverlayCache.getOverlays(t,i).next((o=>{o.forEach(((u,c)=>{e.set(u,c)}))}))}computeViews(t,e,n,i){let o=Bt();const u=an(),c=(function(){return an()})();return e.forEach(((f,d)=>{const g=n.get(d.key);i.has(d.key)&&(g===void 0||g.mutation instanceof ie)?o=o.insert(d.key,d):g!==void 0?(u.set(d.key,g.mutation.getFieldMask()),un(g.mutation,d,g.mutation.getFieldMask(),X.now())):u.set(d.key,wt.empty())})),this.recalculateAndSaveOverlays(t,o).next((f=>(f.forEach(((d,g)=>u.set(d,g))),e.forEach(((d,g)=>{var v;return c.set(d,new nh(g,(v=u.get(d))!==null&&v!==void 0?v:null))})),c)))}recalculateAndSaveOverlays(t,e){const n=an();let i=new Y(((u,c)=>u-c)),o=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next((u=>{for(const c of u)c.keys().forEach((f=>{const d=e.get(f);if(d===null)return;let g=n.get(f)||wt.empty();g=c.applyToLocalView(d,g),n.set(f,g);const v=(i.get(c.batchId)||q()).add(f);i=i.insert(c.batchId,v)}))})).next((()=>{const u=[],c=i.getReverseIterator();for(;c.hasNext();){const f=c.getNext(),d=f.key,g=f.value,v=ba();g.forEach((R=>{if(!o.has(R)){const S=Ma(e.get(R),n.get(R));S!==null&&v.set(R,S),o=o.add(R)}})),u.push(this.documentOverlayCache.saveOverlays(t,d,v))}return P.waitFor(u)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next((n=>this.recalculateAndSaveOverlays(t,n)))}getDocumentsMatchingQuery(t,e,n,i){return(function(u){return O.isDocumentKey(u.path)&&u.collectionGroup===null&&u.filters.length===0})(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ic(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,n,i):this.getDocumentsMatchingCollectionQuery(t,e,n,i)}getNextDocuments(t,e,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,n,i).next((o=>{const u=i-o.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,n.largestBatchId,i-o.size):P.resolve(ce());let c=ln,f=o;return u.next((d=>P.forEach(d,((g,v)=>(c<v.largestBatchId&&(c=v.largestBatchId),o.get(g)?P.resolve():this.remoteDocumentCache.getEntry(t,g).next((R=>{f=f.insert(g,R)}))))).next((()=>this.populateOverlays(t,d,o))).next((()=>this.computeViews(t,f,d,q()))).next((g=>({batchId:c,changes:Ca(g)})))))}))}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new O(e)).next((n=>{let i=en();return n.isFoundDocument()&&(i=i.insert(n.key,n)),i}))}getDocumentsMatchingCollectionGroupQuery(t,e,n,i){const o=e.collectionGroup;let u=en();return this.indexManager.getCollectionParents(t,o).next((c=>P.forEach(c,(f=>{const d=(function(v,R){return new fr(R,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)})(e,f.child(o));return this.getDocumentsMatchingCollectionQuery(t,d,n,i).next((g=>{g.forEach(((v,R)=>{u=u.insert(v,R)}))}))})).next((()=>u))))}getDocumentsMatchingCollectionQuery(t,e,n,i){let o;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,n.largestBatchId).next((u=>(o=u,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,n,o,i)))).next((u=>{o.forEach(((f,d)=>{const g=d.getKey();u.get(g)===null&&(u=u.insert(g,yt.newInvalidDocument(g)))}));let c=en();return u.forEach(((f,d)=>{const g=o.get(f);g!==void 0&&un(g.mutation,d,wt.empty(),X.now()),mr(e,d)&&(c=c.insert(f,d))})),c}))}}/**
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
 */class sh{constructor(t){this.serializer=t,this.Br=new Map,this.Lr=new Map}getBundleMetadata(t,e){return P.resolve(this.Br.get(e))}saveBundleMetadata(t,e){return this.Br.set(e.id,(function(i){return{id:i.id,version:i.version,createTime:Dt(i.createTime)}})(e)),P.resolve()}getNamedQuery(t,e){return P.resolve(this.Lr.get(e))}saveNamedQuery(t,e){return this.Lr.set(e.name,(function(i){return{name:i.name,query:Qc(i.bundledQuery),readTime:Dt(i.readTime)}})(e)),P.resolve()}}/**
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
 */class ih{constructor(){this.overlays=new Y(O.comparator),this.kr=new Map}getOverlay(t,e){return P.resolve(this.overlays.get(e))}getOverlays(t,e){const n=ce();return P.forEach(e,(i=>this.getOverlay(t,i).next((o=>{o!==null&&n.set(i,o)})))).next((()=>n))}saveOverlays(t,e,n){return n.forEach(((i,o)=>{this.wt(t,e,o)})),P.resolve()}removeOverlaysForBatchId(t,e,n){const i=this.kr.get(n);return i!==void 0&&(i.forEach((o=>this.overlays=this.overlays.remove(o))),this.kr.delete(n)),P.resolve()}getOverlaysForCollection(t,e,n){const i=ce(),o=e.length+1,u=new O(e.child("")),c=this.overlays.getIteratorFrom(u);for(;c.hasNext();){const f=c.getNext().value,d=f.getKey();if(!e.isPrefixOf(d.path))break;d.path.length===o&&f.largestBatchId>n&&i.set(f.getKey(),f)}return P.resolve(i)}getOverlaysForCollectionGroup(t,e,n,i){let o=new Y(((d,g)=>d-g));const u=this.overlays.getIterator();for(;u.hasNext();){const d=u.getNext().value;if(d.getKey().getCollectionGroup()===e&&d.largestBatchId>n){let g=o.get(d.largestBatchId);g===null&&(g=ce(),o=o.insert(d.largestBatchId,g)),g.set(d.getKey(),d)}}const c=ce(),f=o.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach(((d,g)=>c.set(d,g))),!(c.size()>=i)););return P.resolve(c)}wt(t,e,n){const i=this.overlays.get(n.key);if(i!==null){const u=this.kr.get(i.largestBatchId).delete(n.key);this.kr.set(i.largestBatchId,u)}this.overlays=this.overlays.insert(n.key,new wc(e,n));let o=this.kr.get(e);o===void 0&&(o=q(),this.kr.set(e,o)),this.kr.set(e,o.add(n.key))}}/**
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
 */class oh{constructor(){this.sessionToken=ht.EMPTY_BYTE_STRING}getSessionToken(t){return P.resolve(this.sessionToken)}setSessionToken(t,e){return this.sessionToken=e,P.resolve()}}/**
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
 */class ks{constructor(){this.qr=new st(ot.Qr),this.$r=new st(ot.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(t,e){const n=new ot(t,e);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(t,e){t.forEach((n=>this.addReference(n,e)))}removeReference(t,e){this.Wr(new ot(t,e))}Gr(t,e){t.forEach((n=>this.removeReference(n,e)))}zr(t){const e=new O(new H([])),n=new ot(e,t),i=new ot(e,t+1),o=[];return this.$r.forEachInRange([n,i],(u=>{this.Wr(u),o.push(u.key)})),o}jr(){this.qr.forEach((t=>this.Wr(t)))}Wr(t){this.qr=this.qr.delete(t),this.$r=this.$r.delete(t)}Jr(t){const e=new O(new H([])),n=new ot(e,t),i=new ot(e,t+1);let o=q();return this.$r.forEachInRange([n,i],(u=>{o=o.add(u.key)})),o}containsKey(t){const e=new ot(t,0),n=this.qr.firstAfterOrEqual(e);return n!==null&&t.isEqual(n.key)}}class ot{constructor(t,e){this.key=t,this.Hr=e}static Qr(t,e){return O.comparator(t.key,e.key)||U(t.Hr,e.Hr)}static Ur(t,e){return U(t.Hr,e.Hr)||O.comparator(t.key,e.key)}}/**
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
 */class ah{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.er=1,this.Yr=new st(ot.Qr)}checkEmpty(t){return P.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,n,i){const o=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new Ac(o,e,n,i);this.mutationQueue.push(u);for(const c of i)this.Yr=this.Yr.add(new ot(c.key,o)),this.indexManager.addToCollectionParentIndex(t,c.key.path.popLast());return P.resolve(u)}lookupMutationBatch(t,e){return P.resolve(this.Zr(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,i=this.Xr(n),o=i<0?0:i;return P.resolve(this.mutationQueue.length>o?this.mutationQueue[o]:null)}getHighestUnacknowledgedBatchId(){return P.resolve(this.mutationQueue.length===0?Is:this.er-1)}getAllMutationBatches(t){return P.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new ot(e,0),i=new ot(e,Number.POSITIVE_INFINITY),o=[];return this.Yr.forEachInRange([n,i],(u=>{const c=this.Zr(u.Hr);o.push(c)})),P.resolve(o)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new st(U);return e.forEach((i=>{const o=new ot(i,0),u=new ot(i,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([o,u],(c=>{n=n.add(c.Hr)}))})),P.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,i=n.length+1;let o=n;O.isDocumentKey(o)||(o=o.child(""));const u=new ot(new O(o),0);let c=new st(U);return this.Yr.forEachWhile((f=>{const d=f.key.path;return!!n.isPrefixOf(d)&&(d.length===i&&(c=c.add(f.Hr)),!0)}),u),P.resolve(this.ei(c))}ei(t){const e=[];return t.forEach((n=>{const i=this.Zr(n);i!==null&&e.push(i)})),e}removeMutationBatch(t,e){G(this.ti(e.batchId,"removed")===0,55003),this.mutationQueue.shift();let n=this.Yr;return P.forEach(e.mutations,(i=>{const o=new ot(i.key,e.batchId);return n=n.delete(o),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)})).next((()=>{this.Yr=n}))}rr(t){}containsKey(t,e){const n=new ot(e,0),i=this.Yr.firstAfterOrEqual(n);return P.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,P.resolve()}ti(t,e){return this.Xr(t)}Xr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}Zr(t){const e=this.Xr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
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
 */class uh{constructor(t){this.ni=t,this.docs=(function(){return new Y(O.comparator)})(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const n=e.key,i=this.docs.get(n),o=i?i.size:0,u=this.ni(e);return this.docs=this.docs.insert(n,{document:e.mutableCopy(),size:u}),this.size+=u-o,this.indexManager.addToCollectionParentIndex(t,n.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return P.resolve(n?n.document.mutableCopy():yt.newInvalidDocument(e))}getEntries(t,e){let n=Bt();return e.forEach((i=>{const o=this.docs.get(i);n=n.insert(i,o?o.document.mutableCopy():yt.newInvalidDocument(i))})),P.resolve(n)}getDocumentsMatchingQuery(t,e,n,i){let o=Bt();const u=e.path,c=new O(u.child("__id-9223372036854775808__")),f=this.docs.getIteratorFrom(c);for(;f.hasNext();){const{key:d,value:{document:g}}=f.getNext();if(!u.isPrefixOf(d.path))break;d.path.length>u.length+1||Ml(Ol(g),n)<=0||(i.has(g.key)||mr(e,g))&&(o=o.insert(g.key,g.mutableCopy()))}return P.resolve(o)}getAllFromCollectionGroup(t,e,n,i){M(9500)}ri(t,e){return P.forEach(this.docs,(n=>e(n)))}newChangeBuffer(t){return new lh(this)}getSize(t){return P.resolve(this.size)}}class lh extends eh{constructor(t){super(),this.Or=t}applyChanges(t){const e=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?e.push(this.Or.addEntry(t,i)):this.Or.removeEntry(n)})),P.waitFor(e)}getFromCache(t,e){return this.Or.getEntry(t,e)}getAllFromCache(t,e){return this.Or.getEntries(t,e)}}/**
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
 */class ch{constructor(t){this.persistence=t,this.ii=new pe((e=>Rs(e)),Ps),this.lastRemoteSnapshotVersion=F.min(),this.highestTargetId=0,this.si=0,this.oi=new ks,this.targetCount=0,this._i=be.ar()}forEachTarget(t,e){return this.ii.forEach(((n,i)=>e(i))),P.resolve()}getLastRemoteSnapshotVersion(t){return P.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return P.resolve(this.si)}allocateTargetId(t){return this.highestTargetId=this._i.next(),P.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.si&&(this.si=e),P.resolve()}hr(t){this.ii.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this._i=new be(e),this.highestTargetId=e),t.sequenceNumber>this.si&&(this.si=t.sequenceNumber)}addTargetData(t,e){return this.hr(e),this.targetCount+=1,P.resolve()}updateTargetData(t,e){return this.hr(e),P.resolve()}removeTargetData(t,e){return this.ii.delete(e.target),this.oi.zr(e.targetId),this.targetCount-=1,P.resolve()}removeTargets(t,e,n){let i=0;const o=[];return this.ii.forEach(((u,c)=>{c.sequenceNumber<=e&&n.get(c.targetId)===null&&(this.ii.delete(u),o.push(this.removeMatchingKeysForTargetId(t,c.targetId)),i++)})),P.waitFor(o).next((()=>i))}getTargetCount(t){return P.resolve(this.targetCount)}getTargetData(t,e){const n=this.ii.get(e)||null;return P.resolve(n)}addMatchingKeys(t,e,n){return this.oi.Kr(e,n),P.resolve()}removeMatchingKeys(t,e,n){this.oi.Gr(e,n);const i=this.persistence.referenceDelegate,o=[];return i&&e.forEach((u=>{o.push(i.markPotentiallyOrphaned(t,u))})),P.waitFor(o)}removeMatchingKeysForTargetId(t,e){return this.oi.zr(e),P.resolve()}getMatchingKeysForTargetId(t,e){const n=this.oi.Jr(e);return P.resolve(n)}containsKey(t,e){return P.resolve(this.oi.containsKey(e))}}/**
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
 */class Ha{constructor(t,e){this.ai={},this.overlays={},this.ui=new lr(0),this.ci=!1,this.ci=!0,this.li=new oh,this.referenceDelegate=t(this),this.hi=new ch(this),this.indexManager=new Wc,this.remoteDocumentCache=(function(i){return new uh(i)})((n=>this.referenceDelegate.Pi(n))),this.serializer=new Kc(e),this.Ti=new sh(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new ih,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let n=this.ai[t.toKey()];return n||(n=new ah(e,this.referenceDelegate),this.ai[t.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(t,e,n){k("MemoryPersistence","Starting transaction:",t);const i=new hh(this.ui.next());return this.referenceDelegate.Ii(),n(i).next((o=>this.referenceDelegate.di(i).next((()=>o)))).toPromise().then((o=>(i.raiseOnCommittedEvent(),o)))}Ei(t,e){return P.or(Object.values(this.ai).map((n=>()=>n.containsKey(t,e))))}}class hh extends Ll{constructor(t){super(),this.currentSequenceNumber=t}}class Ns{constructor(t){this.persistence=t,this.Ai=new ks,this.Ri=null}static Vi(t){return new Ns(t)}get mi(){if(this.Ri)return this.Ri;throw M(60996)}addReference(t,e,n){return this.Ai.addReference(n,e),this.mi.delete(n.toString()),P.resolve()}removeReference(t,e,n){return this.Ai.removeReference(n,e),this.mi.add(n.toString()),P.resolve()}markPotentiallyOrphaned(t,e){return this.mi.add(e.toString()),P.resolve()}removeTarget(t,e){this.Ai.zr(e.targetId).forEach((i=>this.mi.add(i.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next((i=>{i.forEach((o=>this.mi.add(o.toString())))})).next((()=>n.removeTargetData(t,e)))}Ii(){this.Ri=new Set}di(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return P.forEach(this.mi,(n=>{const i=O.fromPath(n);return this.fi(t,i).next((o=>{o||e.removeEntry(i,F.min())}))})).next((()=>(this.Ri=null,e.apply(t))))}updateLimboDocument(t,e){return this.fi(t,e).next((n=>{n?this.mi.delete(e.toString()):this.mi.add(e.toString())}))}Pi(t){return 0}fi(t,e){return P.or([()=>P.resolve(this.Ai.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ei(t,e)])}}class ir{constructor(t,e){this.persistence=t,this.gi=new pe((n=>jl(n.path)),((n,i)=>n.isEqual(i))),this.garbageCollector=th(this,e)}static Vi(t,e){return new ir(t,e)}Ii(){}di(t){return P.resolve()}forEachTarget(t,e){return this.persistence.getTargetCache().forEachTarget(t,e)}mr(t){const e=this.yr(t);return this.persistence.getTargetCache().getTargetCount(t).next((n=>e.next((i=>n+i))))}yr(t){let e=0;return this.gr(t,(n=>{e++})).next((()=>e))}gr(t,e){return P.forEach(this.gi,((n,i)=>this.Sr(t,n,i).next((o=>o?P.resolve():e(i)))))}removeTargets(t,e,n){return this.persistence.getTargetCache().removeTargets(t,e,n)}removeOrphanedDocuments(t,e){let n=0;const i=this.persistence.getRemoteDocumentCache(),o=i.newChangeBuffer();return i.ri(t,(u=>this.Sr(t,u,e).next((c=>{c||(n++,o.removeEntry(u,F.min()))})))).next((()=>o.apply(t))).next((()=>n))}markPotentiallyOrphaned(t,e){return this.gi.set(e,t.currentSequenceNumber),P.resolve()}removeTarget(t,e){const n=e.withSequenceNumber(t.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(t,n)}addReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),P.resolve()}removeReference(t,e,n){return this.gi.set(n,t.currentSequenceNumber),P.resolve()}updateLimboDocument(t,e){return this.gi.set(e,t.currentSequenceNumber),P.resolve()}Pi(t){let e=t.key.toString().length;return t.isFoundDocument()&&(e+=Qn(t.data.value)),e}Sr(t,e,n){return P.or([()=>this.persistence.Ei(t,e),()=>this.persistence.getTargetCache().containsKey(t,e),()=>{const i=this.gi.get(e);return P.resolve(i!==void 0&&i>n)}])}getCacheSize(t){return this.persistence.getRemoteDocumentCache().getSize(t)}}/**
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
 */class xs{constructor(t,e,n,i){this.targetId=t,this.fromCache=e,this.Is=n,this.ds=i}static Es(t,e){let n=q(),i=q();for(const o of e.docChanges)switch(o.type){case 0:n=n.add(o.doc.key);break;case 1:i=i.add(o.doc.key)}return new xs(t,e.fromCache,n,i)}}/**
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
 */class fh{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
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
 */class dh{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=(function(){return Il()?8:Ul(Al())>0?6:4})()}initialize(t,e){this.gs=t,this.indexManager=e,this.As=!0}getDocumentsMatchingQuery(t,e,n,i){const o={result:null};return this.ps(t,e).next((u=>{o.result=u})).next((()=>{if(!o.result)return this.ys(t,e,i,n).next((u=>{o.result=u}))})).next((()=>{if(o.result)return;const u=new fh;return this.ws(t,e,u).next((c=>{if(o.result=c,this.Rs)return this.Ss(t,e,u,c.size)}))})).next((()=>o.result))}Ss(t,e,n,i){return n.documentReadCount<this.Vs?(ve()<=qt.DEBUG&&k("QueryEngine","SDK will not create cache indexes for query:",Ie(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),P.resolve()):(ve()<=qt.DEBUG&&k("QueryEngine","Query:",Ie(e),"scans",n.documentReadCount,"local documents and returns",i,"documents as results."),n.documentReadCount>this.fs*i?(ve()<=qt.DEBUG&&k("QueryEngine","The SDK decides to create cache indexes for query:",Ie(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,bt(e))):P.resolve())}ps(t,e){if(To(e))return P.resolve(null);let n=bt(e);return this.indexManager.getIndexType(t,n).next((i=>i===0?null:(e.limit!==null&&i===1&&(e=us(e,null,"F"),n=bt(e)),this.indexManager.getDocumentsMatchingTarget(t,n).next((o=>{const u=q(...o);return this.gs.getDocuments(t,u).next((c=>this.indexManager.getMinOffset(t,n).next((f=>{const d=this.bs(e,c);return this.Ds(e,d,u,f.readTime)?this.ps(t,us(e,null,"F")):this.vs(t,d,e,f)}))))})))))}ys(t,e,n,i){return To(e)||i.isEqual(F.min())?P.resolve(null):this.gs.getDocuments(t,n).next((o=>{const u=this.bs(e,o);return this.Ds(e,u,n,i)?P.resolve(null):(ve()<=qt.DEBUG&&k("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Ie(e)),this.vs(t,u,e,xl(i,ln)).next((c=>c)))}))}bs(t,e){let n=new st(Va(t));return e.forEach(((i,o)=>{mr(t,o)&&(n=n.add(o))})),n}Ds(t,e,n,i){if(t.limit===null)return!1;if(n.size!==e.size)return!0;const o=t.limitType==="F"?e.last():e.first();return!!o&&(o.hasPendingWrites||o.version.compareTo(i)>0)}ws(t,e,n){return ve()<=qt.DEBUG&&k("QueryEngine","Using full collection scan to execute query:",Ie(e)),this.gs.getDocumentsMatchingQuery(t,e,Jt.min(),n)}vs(t,e,n,i){return this.gs.getDocumentsMatchingQuery(t,n,i).next((o=>(e.forEach((u=>{o=o.insert(u.key,u)})),o)))}}/**
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
 */const Os="LocalStore",mh=3e8;class ph{constructor(t,e,n,i){this.persistence=t,this.Cs=e,this.serializer=i,this.Fs=new Y(U),this.Ms=new pe((o=>Rs(o)),Ps),this.xs=new Map,this.Os=t.getRemoteDocumentCache(),this.hi=t.getTargetCache(),this.Ti=t.getBundleCache(),this.Ns(n)}Ns(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new rh(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(e=>t.collect(e,this.Fs)))}}function gh(r,t,e,n){return new ph(r,t,e,n)}async function Xa(r,t){const e=L(r);return await e.persistence.runTransaction("Handle user change","readonly",(n=>{let i;return e.mutationQueue.getAllMutationBatches(n).next((o=>(i=o,e.Ns(t),e.mutationQueue.getAllMutationBatches(n)))).next((o=>{const u=[],c=[];let f=q();for(const d of i){u.push(d.batchId);for(const g of d.mutations)f=f.add(g.key)}for(const d of o){c.push(d.batchId);for(const g of d.mutations)f=f.add(g.key)}return e.localDocuments.getDocuments(n,f).next((d=>({Bs:d,removedBatchIds:u,addedBatchIds:c})))}))}))}function _h(r,t){const e=L(r);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",(n=>{const i=t.batch.keys(),o=e.Os.newChangeBuffer({trackRemovals:!0});return(function(c,f,d,g){const v=d.batch,R=v.keys();let S=P.resolve();return R.forEach((D=>{S=S.next((()=>g.getEntry(f,D))).next((x=>{const b=d.docVersions.get(D);G(b!==null,48541),x.version.compareTo(b)<0&&(v.applyToRemoteDocument(x,d),x.isValidDocument()&&(x.setReadTime(d.commitVersion),g.addEntry(x)))}))})),S.next((()=>c.mutationQueue.removeMutationBatch(f,v)))})(e,n,t,o).next((()=>o.apply(n))).next((()=>e.mutationQueue.performConsistencyCheck(n))).next((()=>e.documentOverlayCache.removeOverlaysForBatchId(n,i,t.batch.batchId))).next((()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(n,(function(c){let f=q();for(let d=0;d<c.mutationResults.length;++d)c.mutationResults[d].transformResults.length>0&&(f=f.add(c.batch.mutations[d].key));return f})(t)))).next((()=>e.localDocuments.getDocuments(n,i)))}))}function Ya(r){const t=L(r);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.hi.getLastRemoteSnapshotVersion(e)))}function yh(r,t){const e=L(r),n=t.snapshotVersion;let i=e.Fs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",(o=>{const u=e.Os.newChangeBuffer({trackRemovals:!0});i=e.Fs;const c=[];t.targetChanges.forEach(((g,v)=>{const R=i.get(v);if(!R)return;c.push(e.hi.removeMatchingKeys(o,g.removedDocuments,v).next((()=>e.hi.addMatchingKeys(o,g.addedDocuments,v))));let S=R.withSequenceNumber(o.currentSequenceNumber);t.targetMismatches.get(v)!==null?S=S.withResumeToken(ht.EMPTY_BYTE_STRING,F.min()).withLastLimboFreeSnapshotVersion(F.min()):g.resumeToken.approximateByteSize()>0&&(S=S.withResumeToken(g.resumeToken,n)),i=i.insert(v,S),(function(x,b,$){return x.resumeToken.approximateByteSize()===0||b.snapshotVersion.toMicroseconds()-x.snapshotVersion.toMicroseconds()>=mh?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0})(R,S,g)&&c.push(e.hi.updateTargetData(o,S))}));let f=Bt(),d=q();if(t.documentUpdates.forEach((g=>{t.resolvedLimboDocuments.has(g)&&c.push(e.persistence.referenceDelegate.updateLimboDocument(o,g))})),c.push(Th(o,u,t.documentUpdates).next((g=>{f=g.Ls,d=g.ks}))),!n.isEqual(F.min())){const g=e.hi.getLastRemoteSnapshotVersion(o).next((v=>e.hi.setTargetsMetadata(o,o.currentSequenceNumber,n)));c.push(g)}return P.waitFor(c).next((()=>u.apply(o))).next((()=>e.localDocuments.getLocalViewOfDocuments(o,f,d))).next((()=>f))})).then((o=>(e.Fs=i,o)))}function Th(r,t,e){let n=q(),i=q();return e.forEach((o=>n=n.add(o))),t.getEntries(r,n).next((o=>{let u=Bt();return e.forEach(((c,f)=>{const d=o.get(c);f.isFoundDocument()!==d.isFoundDocument()&&(i=i.add(c)),f.isNoDocument()&&f.version.isEqual(F.min())?(t.removeEntry(c,f.readTime),u=u.insert(c,f)):!d.isValidDocument()||f.version.compareTo(d.version)>0||f.version.compareTo(d.version)===0&&d.hasPendingWrites?(t.addEntry(f),u=u.insert(c,f)):k(Os,"Ignoring outdated watch update for ",c,". Current version:",d.version," Watch version:",f.version)})),{Ls:u,ks:i}}))}function Eh(r,t){const e=L(r);return e.persistence.runTransaction("Get next mutation batch","readonly",(n=>(t===void 0&&(t=Is),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t))))}function vh(r,t){const e=L(r);return e.persistence.runTransaction("Allocate target","readwrite",(n=>{let i;return e.hi.getTargetData(n,t).next((o=>o?(i=o,P.resolve(i)):e.hi.allocateTargetId(n).next((u=>(i=new Qt(t,u,"TargetPurposeListen",n.currentSequenceNumber),e.hi.addTargetData(n,i).next((()=>i)))))))})).then((n=>{const i=e.Fs.get(n.targetId);return(i===null||n.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.Fs=e.Fs.insert(n.targetId,n),e.Ms.set(t,n.targetId)),n}))}async function ds(r,t,e){const n=L(r),i=n.Fs.get(t),o=e?"readwrite":"readwrite-primary";try{e||await n.persistence.runTransaction("Release target",o,(u=>n.persistence.referenceDelegate.removeTarget(u,i)))}catch(u){if(!Oe(u))throw u;k(Os,`Failed to update sequence numbers for target ${t}: ${u}`)}n.Fs=n.Fs.remove(t),n.Ms.delete(i.target)}function ko(r,t,e){const n=L(r);let i=F.min(),o=q();return n.persistence.runTransaction("Execute query","readwrite",(u=>(function(f,d,g){const v=L(f),R=v.Ms.get(g);return R!==void 0?P.resolve(v.Fs.get(R)):v.hi.getTargetData(d,g)})(n,u,bt(t)).next((c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,n.hi.getMatchingKeysForTargetId(u,c.targetId).next((f=>{o=f}))})).next((()=>n.Cs.getDocumentsMatchingQuery(u,t,e?i:F.min(),e?o:q()))).next((c=>(Ih(n,ac(t),c),{documents:c,qs:o})))))}function Ih(r,t,e){let n=r.xs.get(t)||F.min();e.forEach(((i,o)=>{o.readTime.compareTo(n)>0&&(n=o.readTime)})),r.xs.set(t,n)}class No{constructor(){this.activeTargetIds=dc()}Gs(t){this.activeTargetIds=this.activeTargetIds.add(t)}zs(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Ws(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Ah{constructor(){this.Fo=new No,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t,e=!0){return e&&this.Fo.Gs(t),this.Mo[t]||"not-current"}updateQueryState(t,e,n){this.Mo[t]=e}removeLocalQueryTarget(t){this.Fo.zs(t)}isLocalQueryTarget(t){return this.Fo.activeTargetIds.has(t)}clearQueryState(t){delete this.Mo[t]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(t){return this.Fo.activeTargetIds.has(t)}start(){return this.Fo=new No,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
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
 */class wh{xo(t){}shutdown(){}}/**
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
 */const xo="ConnectivityMonitor";class Oo{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(t){this.ko.push(t)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){k(xo,"Network connectivity changed: AVAILABLE");for(const t of this.ko)t(0)}Lo(){k(xo,"Network connectivity changed: UNAVAILABLE");for(const t of this.ko)t(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let Gn=null;function ms(){return Gn===null?Gn=(function(){return 268435456+Math.round(2147483648*Math.random())})():Gn++,"0x"+Gn.toString(16)}/**
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
 */const Jr="RestConnection",Rh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class Ph{get Qo(){return!1}constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.$o=e+"://"+t.host,this.Uo=`projects/${n}/databases/${i}`,this.Ko=this.databaseId.database===Zn?`project_id=${n}`:`project_id=${n}&database_id=${i}`}Wo(t,e,n,i,o){const u=ms(),c=this.Go(t,e.toUriEncodedString());k(Jr,`Sending RPC '${t}' ${u}:`,c,n);const f={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(f,i,o);const{host:d}=new URL(c),g=Jo(d);return this.jo(t,c,f,n,g).then((v=>(k(Jr,`Received RPC '${t}' ${u}: `,v),v)),(v=>{throw Yt(Jr,`RPC '${t}' ${u} failed with error: `,v,"url: ",c,"request:",n),v}))}Jo(t,e,n,i,o,u){return this.Wo(t,e,n,i,o)}zo(t,e,n){t["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+Ne})(),t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e&&e.headers.forEach(((i,o)=>t[o]=i)),n&&n.headers.forEach(((i,o)=>t[o]=i))}Go(t,e){const n=Rh[t];return`${this.$o}/v1/${e}:${n}`}terminate(){}}/**
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
 */class Vh{constructor(t){this.Ho=t.Ho,this.Yo=t.Yo}Zo(t){this.Xo=t}e_(t){this.t_=t}n_(t){this.r_=t}onMessage(t){this.i_=t}close(){this.Yo()}send(t){this.Ho(t)}s_(){this.Xo()}o_(){this.t_()}__(t){this.r_(t)}a_(t){this.i_(t)}}/**
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
 */const gt="WebChannelConnection";class Sh extends Ph{constructor(t){super(t),this.u_=[],this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}jo(t,e,n,i,o){const u=ms();return new Promise(((c,f)=>{const d=new ta;d.setWithCredentials(!0),d.listenOnce(ea.COMPLETE,(()=>{try{switch(d.getLastErrorCode()){case Kn.NO_ERROR:const v=d.getResponseJson();k(gt,`XHR for RPC '${t}' ${u} received:`,JSON.stringify(v)),c(v);break;case Kn.TIMEOUT:k(gt,`RPC '${t}' ${u} timed out`),f(new N(V.DEADLINE_EXCEEDED,"Request time out"));break;case Kn.HTTP_ERROR:const R=d.getStatus();if(k(gt,`RPC '${t}' ${u} failed with status:`,R,"response text:",d.getResponseText()),R>0){let S=d.getResponseJson();Array.isArray(S)&&(S=S[0]);const D=S?.error;if(D&&D.status&&D.message){const x=(function($){const B=$.toLowerCase().replace(/_/g,"-");return Object.values(V).indexOf(B)>=0?B:V.UNKNOWN})(D.status);f(new N(x,D.message))}else f(new N(V.UNKNOWN,"Server responded with status "+d.getStatus()))}else f(new N(V.UNAVAILABLE,"Connection failed."));break;default:M(9055,{c_:t,streamId:u,l_:d.getLastErrorCode(),h_:d.getLastError()})}}finally{k(gt,`RPC '${t}' ${u} completed.`)}}));const g=JSON.stringify(i);k(gt,`RPC '${t}' ${u} sending request:`,i),d.send(e,"POST",g,n,15)}))}P_(t,e,n){const i=ms(),o=[this.$o,"/","google.firestore.v1.Firestore","/",t,"/channel"],u=sa(),c=ra(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},d=this.longPollingOptions.timeoutSeconds;d!==void 0&&(f.longPollingTimeout=Math.round(1e3*d)),this.useFetchStreams&&(f.useFetchStreams=!0),this.zo(f.initMessageHeaders,e,n),f.encodeInitMessageHeaders=!0;const g=o.join("");k(gt,`Creating RPC '${t}' stream ${i}: ${g}`,f);const v=u.createWebChannel(g,f);this.T_(v);let R=!1,S=!1;const D=new Vh({Ho:b=>{S?k(gt,`Not sending because RPC '${t}' stream ${i} is closed:`,b):(R||(k(gt,`Opening RPC '${t}' stream ${i} transport.`),v.open(),R=!0),k(gt,`RPC '${t}' stream ${i} sending:`,b),v.send(b))},Yo:()=>v.close()}),x=(b,$,B)=>{b.listen($,(K=>{try{B(K)}catch(it){setTimeout((()=>{throw it}),0)}}))};return x(v,tn.EventType.OPEN,(()=>{S||(k(gt,`RPC '${t}' stream ${i} transport opened.`),D.s_())})),x(v,tn.EventType.CLOSE,(()=>{S||(S=!0,k(gt,`RPC '${t}' stream ${i} transport closed`),D.__(),this.I_(v))})),x(v,tn.EventType.ERROR,(b=>{S||(S=!0,Yt(gt,`RPC '${t}' stream ${i} transport errored. Name:`,b.name,"Message:",b.message),D.__(new N(V.UNAVAILABLE,"The operation could not be completed")))})),x(v,tn.EventType.MESSAGE,(b=>{var $;if(!S){const B=b.data[0];G(!!B,16349);const K=B,it=K?.error||(($=K[0])===null||$===void 0?void 0:$.error);if(it){k(gt,`RPC '${t}' stream ${i} received error:`,it);const Mt=it.status;let at=(function(_){const y=tt[_];if(y!==void 0)return La(y)})(Mt),E=it.message;at===void 0&&(at=V.INTERNAL,E="Unknown error status: "+Mt+" with message "+it.message),S=!0,D.__(new N(at,E)),v.close()}else k(gt,`RPC '${t}' stream ${i} received:`,B),D.a_(B)}})),x(c,na.STAT_EVENT,(b=>{b.stat===ns.PROXY?k(gt,`RPC '${t}' stream ${i} detected buffering proxy`):b.stat===ns.NOPROXY&&k(gt,`RPC '${t}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{D.o_()}),0),D}terminate(){this.u_.forEach((t=>t.close())),this.u_=[]}T_(t){this.u_.push(t)}I_(t){this.u_=this.u_.filter((e=>e===t))}}function Zr(){return typeof document<"u"?document:null}/**
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
 */function Tr(r){return new kc(r,!0)}/**
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
 */class Ja{constructor(t,e,n=1e3,i=1.5,o=6e4){this.Fi=t,this.timerId=e,this.d_=n,this.E_=i,this.A_=o,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(t){this.cancel();const e=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),i=Math.max(0,e-n);i>0&&k("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.R_} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,i,(()=>(this.m_=Date.now(),t()))),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){this.V_!==null&&(this.V_.skipDelay(),this.V_=null)}cancel(){this.V_!==null&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}/**
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
 */const Mo="PersistentStream";class Za{constructor(t,e,n,i,o,u,c,f){this.Fi=t,this.w_=n,this.S_=i,this.connection=o,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=c,this.listener=f,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new Ja(t,e)}M_(){return this.state===1||this.state===5||this.x_()}x_(){return this.state===2||this.state===3}start(){this.C_=0,this.state!==4?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&this.D_===null&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,(()=>this.L_())))}k_(t){this.q_(),this.stream.send(t)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(t,e){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,t!==4?this.F_.reset():e&&e.code===V.RESOURCE_EXHAUSTED?(jt(e.toString()),jt("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):e&&e.code===V.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.U_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.n_(e)}U_(){}auth(){this.state=1;const t=this.K_(this.b_),e=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([n,i])=>{this.b_===e&&this.W_(n,i)}),(n=>{t((()=>{const i=new N(V.UNKNOWN,"Fetching auth token failed: "+n.message);return this.G_(i)}))}))}W_(t,e){const n=this.K_(this.b_);this.stream=this.z_(t,e),this.stream.Zo((()=>{n((()=>this.listener.Zo()))})),this.stream.e_((()=>{n((()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,(()=>(this.x_()&&(this.state=3),Promise.resolve()))),this.listener.e_())))})),this.stream.n_((i=>{n((()=>this.G_(i)))})),this.stream.onMessage((i=>{n((()=>++this.C_==1?this.j_(i):this.onNext(i)))}))}O_(){this.state=5,this.F_.g_((async()=>{this.state=0,this.start()}))}G_(t){return k(Mo,`close with error: ${t}`),this.stream=null,this.close(4,t)}K_(t){return e=>{this.Fi.enqueueAndForget((()=>this.b_===t?e():(k(Mo,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ch extends Za{constructor(t,e,n,i,o,u){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}z_(t,e){return this.connection.P_("Listen",t,e)}j_(t){return this.onNext(t)}onNext(t){this.F_.reset();const e=Oc(this.serializer,t),n=(function(o){if(!("targetChange"in o))return F.min();const u=o.targetChange;return u.targetIds&&u.targetIds.length?F.min():u.readTime?Dt(u.readTime):F.min()})(t);return this.listener.J_(e,n)}H_(t){const e={};e.database=fs(this.serializer),e.addTarget=(function(o,u){let c;const f=u.target;if(c=as(f)?{documents:Lc(o,f)}:{query:Uc(o,f).Vt},c.targetId=u.targetId,u.resumeToken.approximateByteSize()>0){c.resumeToken=ja(o,u.resumeToken);const d=ls(o,u.expectedCount);d!==null&&(c.expectedCount=d)}else if(u.snapshotVersion.compareTo(F.min())>0){c.readTime=sr(o,u.snapshotVersion.toTimestamp());const d=ls(o,u.expectedCount);d!==null&&(c.expectedCount=d)}return c})(this.serializer,t);const n=jc(this.serializer,t);n&&(e.labels=n),this.k_(e)}Y_(t){const e={};e.database=fs(this.serializer),e.removeTarget=t,this.k_(e)}}class bh extends Za{constructor(t,e,n,i,o,u){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,n,i,u),this.serializer=o}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(t,e){return this.connection.P_("Write",t,e)}j_(t){return G(!!t.streamToken,31322),this.lastStreamToken=t.streamToken,G(!t.writeResults||t.writeResults.length===0,55816),this.listener.ea()}onNext(t){G(!!t.streamToken,12678),this.lastStreamToken=t.streamToken,this.F_.reset();const e=Fc(t.writeResults,t.commitTime),n=Dt(t.commitTime);return this.listener.ta(n,e)}na(){const t={};t.database=fs(this.serializer),this.k_(t)}X_(t){const e={streamToken:this.lastStreamToken,writes:t.map((n=>Mc(this.serializer,n)))};this.k_(e)}}/**
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
 */class Dh{}class kh extends Dh{constructor(t,e,n,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=n,this.serializer=i,this.ra=!1}ia(){if(this.ra)throw new N(V.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(t,e,n,i){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([o,u])=>this.connection.Wo(t,cs(e,n),i,o,u))).catch((o=>{throw o.name==="FirebaseError"?(o.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new N(V.UNKNOWN,o.toString())}))}Jo(t,e,n,i,o){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([u,c])=>this.connection.Jo(t,cs(e,n),i,u,c,o))).catch((u=>{throw u.name==="FirebaseError"?(u.code===V.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),u):new N(V.UNKNOWN,u.toString())}))}terminate(){this.ra=!0,this.connection.terminate()}}class Nh{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){this.sa===0&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve()))))}la(t){this.state==="Online"?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.ua("Offline")))}set(t){this.ha(),this.sa=0,t==="Online"&&(this._a=!1),this.ua(t)}ua(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}ca(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(jt(e),this._a=!1):k("OnlineStateTracker",e)}ha(){this.oa!==null&&(this.oa.cancel(),this.oa=null)}}/**
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
 */const me="RemoteStore";class xh{constructor(t,e,n,i,o){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=o,this.Ea.xo((u=>{n.enqueueAndForget((async()=>{ge(this)&&(k(me,"Restarting streams for network reachability change."),await(async function(f){const d=L(f);d.Ia.add(4),await Tn(d),d.Aa.set("Unknown"),d.Ia.delete(4),await Er(d)})(this))}))})),this.Aa=new Nh(n,i)}}async function Er(r){if(ge(r))for(const t of r.da)await t(!0)}async function Tn(r){for(const t of r.da)await t(!1)}function tu(r,t){const e=L(r);e.Ta.has(t.targetId)||(e.Ta.set(t.targetId,t),Us(e)?Ls(e):Me(e).x_()&&Fs(e,t))}function Ms(r,t){const e=L(r),n=Me(e);e.Ta.delete(t),n.x_()&&eu(e,t),e.Ta.size===0&&(n.x_()?n.B_():ge(e)&&e.Aa.set("Unknown"))}function Fs(r,t){if(r.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(F.min())>0){const e=r.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Me(r).H_(t)}function eu(r,t){r.Ra.$e(t),Me(r).Y_(t)}function Ls(r){r.Ra=new Sc({getRemoteKeysForTarget:t=>r.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>r.Ta.get(t)||null,lt:()=>r.datastore.serializer.databaseId}),Me(r).start(),r.Aa.aa()}function Us(r){return ge(r)&&!Me(r).M_()&&r.Ta.size>0}function ge(r){return L(r).Ia.size===0}function nu(r){r.Ra=void 0}async function Oh(r){r.Aa.set("Online")}async function Mh(r){r.Ta.forEach(((t,e)=>{Fs(r,t)}))}async function Fh(r,t){nu(r),Us(r)?(r.Aa.la(t),Ls(r)):r.Aa.set("Unknown")}async function Lh(r,t,e){if(r.Aa.set("Online"),t instanceof qa&&t.state===2&&t.cause)try{await(async function(i,o){const u=o.cause;for(const c of o.targetIds)i.Ta.has(c)&&(await i.remoteSyncer.rejectListen(c,u),i.Ta.delete(c),i.Ra.removeTarget(c))})(r,t)}catch(n){k(me,"Failed to remove targets %s: %s ",t.targetIds.join(","),n),await or(r,n)}else if(t instanceof Xn?r.Ra.Ye(t):t instanceof Ua?r.Ra.it(t):r.Ra.et(t),!e.isEqual(F.min()))try{const n=await Ya(r.localStore);e.compareTo(n)>=0&&await(function(o,u){const c=o.Ra.Pt(u);return c.targetChanges.forEach(((f,d)=>{if(f.resumeToken.approximateByteSize()>0){const g=o.Ta.get(d);g&&o.Ta.set(d,g.withResumeToken(f.resumeToken,u))}})),c.targetMismatches.forEach(((f,d)=>{const g=o.Ta.get(f);if(!g)return;o.Ta.set(f,g.withResumeToken(ht.EMPTY_BYTE_STRING,g.snapshotVersion)),eu(o,f);const v=new Qt(g.target,f,d,g.sequenceNumber);Fs(o,v)})),o.remoteSyncer.applyRemoteEvent(c)})(r,e)}catch(n){k(me,"Failed to raise snapshot:",n),await or(r,n)}}async function or(r,t,e){if(!Oe(t))throw t;r.Ia.add(1),await Tn(r),r.Aa.set("Offline"),e||(e=()=>Ya(r.localStore)),r.asyncQueue.enqueueRetryable((async()=>{k(me,"Retrying IndexedDB access"),await e(),r.Ia.delete(1),await Er(r)}))}function ru(r,t){return t().catch((e=>or(r,e,t)))}async function vr(r){const t=L(r),e=ne(t);let n=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:Is;for(;Uh(t);)try{const i=await Eh(t.localStore,n);if(i===null){t.Pa.length===0&&e.B_();break}n=i.batchId,qh(t,i)}catch(i){await or(t,i)}su(t)&&iu(t)}function Uh(r){return ge(r)&&r.Pa.length<10}function qh(r,t){r.Pa.push(t);const e=ne(r);e.x_()&&e.Z_&&e.X_(t.mutations)}function su(r){return ge(r)&&!ne(r).M_()&&r.Pa.length>0}function iu(r){ne(r).start()}async function jh(r){ne(r).na()}async function Bh(r){const t=ne(r);for(const e of r.Pa)t.X_(e.mutations)}async function zh(r,t,e){const n=r.Pa.shift(),i=Cs.from(n,t,e);await ru(r,(()=>r.remoteSyncer.applySuccessfulWrite(i))),await vr(r)}async function $h(r,t){t&&ne(r).Z_&&await(async function(n,i){if((function(u){return Pc(u)&&u!==V.ABORTED})(i.code)){const o=n.Pa.shift();ne(n).N_(),await ru(n,(()=>n.remoteSyncer.rejectFailedWrite(o.batchId,i))),await vr(n)}})(r,t),su(r)&&iu(r)}async function Fo(r,t){const e=L(r);e.asyncQueue.verifyOperationInProgress(),k(me,"RemoteStore received new credentials");const n=ge(e);e.Ia.add(3),await Tn(e),n&&e.Aa.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.Ia.delete(3),await Er(e)}async function Gh(r,t){const e=L(r);t?(e.Ia.delete(2),await Er(e)):t||(e.Ia.add(2),await Tn(e),e.Aa.set("Unknown"))}function Me(r){return r.Va||(r.Va=(function(e,n,i){const o=L(e);return o.ia(),new Ch(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(r.datastore,r.asyncQueue,{Zo:Oh.bind(null,r),e_:Mh.bind(null,r),n_:Fh.bind(null,r),J_:Lh.bind(null,r)}),r.da.push((async t=>{t?(r.Va.N_(),Us(r)?Ls(r):r.Aa.set("Unknown")):(await r.Va.stop(),nu(r))}))),r.Va}function ne(r){return r.ma||(r.ma=(function(e,n,i){const o=L(e);return o.ia(),new bh(n,o.connection,o.authCredentials,o.appCheckCredentials,o.serializer,i)})(r.datastore,r.asyncQueue,{Zo:()=>Promise.resolve(),e_:jh.bind(null,r),n_:$h.bind(null,r),ea:Bh.bind(null,r),ta:zh.bind(null,r)}),r.da.push((async t=>{t?(r.ma.N_(),await vr(r)):(await r.ma.stop(),r.Pa.length>0&&(k(me,`Stopping write stream with ${r.Pa.length} pending writes`),r.Pa=[]))}))),r.ma}/**
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
 */class qs{constructor(t,e,n,i,o){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=i,this.removalCallback=o,this.deferred=new he,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((u=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(t,e,n,i,o){const u=Date.now()+n,c=new qs(t,e,u,i,o);return c.start(n),c}start(t){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new N(V.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((t=>this.deferred.resolve(t)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function js(r,t){if(jt("AsyncQueue",`${t}: ${r}`),Oe(r))return new N(V.UNAVAILABLE,`${t}: ${r}`);throw r}/**
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
 */class Re{static emptySet(t){return new Re(t.comparator)}constructor(t){this.comparator=t?(e,n)=>t(e,n)||O.comparator(e.key,n.key):(e,n)=>O.comparator(e.key,n.key),this.keyedMap=en(),this.sortedSet=new Y(this.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal(((e,n)=>(t(e),!1)))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Re)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,o=n.getNext().key;if(!i.isEqual(o))return!1}return!0}toString(){const t=[];return this.forEach((e=>{t.push(e.toString())})),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const n=new Re;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}/**
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
 */class Lo{constructor(){this.fa=new Y(O.comparator)}track(t){const e=t.doc.key,n=this.fa.get(e);n?t.type!==0&&n.type===3?this.fa=this.fa.insert(e,t):t.type===3&&n.type!==1?this.fa=this.fa.insert(e,{type:n.type,doc:t.doc}):t.type===2&&n.type===2?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):t.type===2&&n.type===0?this.fa=this.fa.insert(e,{type:0,doc:t.doc}):t.type===1&&n.type===0?this.fa=this.fa.remove(e):t.type===1&&n.type===2?this.fa=this.fa.insert(e,{type:1,doc:n.doc}):t.type===0&&n.type===1?this.fa=this.fa.insert(e,{type:2,doc:t.doc}):M(63341,{At:t,ga:n}):this.fa=this.fa.insert(e,t)}pa(){const t=[];return this.fa.inorderTraversal(((e,n)=>{t.push(n)})),t}}class De{constructor(t,e,n,i,o,u,c,f,d){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=o,this.fromCache=u,this.syncStateChanged=c,this.excludesMetadataChanges=f,this.hasCachedResults=d}static fromInitialDocuments(t,e,n,i,o){const u=[];return e.forEach((c=>{u.push({type:0,doc:c})})),new De(t,e,Re.emptySet(e),u,n,i,!0,!1,o)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&dr(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==n[i].type||!e[i].doc.isEqual(n[i].doc))return!1;return!0}}/**
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
 */class Kh{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some((t=>t.ba()))}}class Qh{constructor(){this.queries=Uo(),this.onlineState="Unknown",this.Da=new Set}terminate(){(function(e,n){const i=L(e),o=i.queries;i.queries=Uo(),o.forEach(((u,c)=>{for(const f of c.wa)f.onError(n)}))})(this,new N(V.ABORTED,"Firestore shutting down"))}}function Uo(){return new pe((r=>Pa(r)),dr)}async function Wh(r,t){const e=L(r);let n=3;const i=t.query;let o=e.queries.get(i);o?!o.Sa()&&t.ba()&&(n=2):(o=new Kh,n=t.ba()?0:1);try{switch(n){case 0:o.ya=await e.onListen(i,!0);break;case 1:o.ya=await e.onListen(i,!1);break;case 2:await e.onFirstRemoteStoreListen(i)}}catch(u){const c=js(u,`Initialization of query '${Ie(t.query)}' failed`);return void t.onError(c)}e.queries.set(i,o),o.wa.push(t),t.va(e.onlineState),o.ya&&t.Ca(o.ya)&&Bs(e)}async function Hh(r,t){const e=L(r),n=t.query;let i=3;const o=e.queries.get(n);if(o){const u=o.wa.indexOf(t);u>=0&&(o.wa.splice(u,1),o.wa.length===0?i=t.ba()?0:1:!o.Sa()&&t.ba()&&(i=2))}switch(i){case 0:return e.queries.delete(n),e.onUnlisten(n,!0);case 1:return e.queries.delete(n),e.onUnlisten(n,!1);case 2:return e.onLastRemoteStoreUnlisten(n);default:return}}function Xh(r,t){const e=L(r);let n=!1;for(const i of t){const o=i.query,u=e.queries.get(o);if(u){for(const c of u.wa)c.Ca(i)&&(n=!0);u.ya=i}}n&&Bs(e)}function Yh(r,t,e){const n=L(r),i=n.queries.get(t);if(i)for(const o of i.wa)o.onError(e);n.queries.delete(t)}function Bs(r){r.Da.forEach((t=>{t.next()}))}var ps,qo;(qo=ps||(ps={})).Fa="default",qo.Cache="cache";class Jh{constructor(t,e,n){this.query=t,this.Ma=e,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(t){if(!this.options.includeMetadataChanges){const n=[];for(const i of t.docChanges)i.type!==3&&n.push(i);t=new De(t.query,t.docs,t.oldDocs,n,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.xa?this.Na(t)&&(this.Ma.next(t),e=!0):this.Ba(t,this.onlineState)&&(this.La(t),e=!0),this.Oa=t,e}onError(t){this.Ma.error(t)}va(t){this.onlineState=t;let e=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,t)&&(this.La(this.Oa),e=!0),e}Ba(t,e){if(!t.fromCache||!this.ba())return!0;const n=e!=="Offline";return(!this.options.ka||!n)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}Na(t){if(t.docChanges.length>0)return!0;const e=this.Oa&&this.Oa.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}La(t){t=De.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.xa=!0,this.Ma.next(t)}ba(){return this.options.source!==ps.Cache}}/**
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
 */class ou{constructor(t){this.key=t}}class au{constructor(t){this.key=t}}class Zh{constructor(t,e){this.query=t,this.Ha=e,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=q(),this.mutatedKeys=q(),this.Xa=Va(t),this.eu=new Re(this.Xa)}get tu(){return this.Ha}nu(t,e){const n=e?e.ru:new Lo,i=e?e.eu:this.eu;let o=e?e.mutatedKeys:this.mutatedKeys,u=i,c=!1;const f=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,d=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal(((g,v)=>{const R=i.get(g),S=mr(this.query,v)?v:null,D=!!R&&this.mutatedKeys.has(R.key),x=!!S&&(S.hasLocalMutations||this.mutatedKeys.has(S.key)&&S.hasCommittedMutations);let b=!1;R&&S?R.data.isEqual(S.data)?D!==x&&(n.track({type:3,doc:S}),b=!0):this.iu(R,S)||(n.track({type:2,doc:S}),b=!0,(f&&this.Xa(S,f)>0||d&&this.Xa(S,d)<0)&&(c=!0)):!R&&S?(n.track({type:0,doc:S}),b=!0):R&&!S&&(n.track({type:1,doc:R}),b=!0,(f||d)&&(c=!0)),b&&(S?(u=u.add(S),o=x?o.add(g):o.delete(g)):(u=u.delete(g),o=o.delete(g)))})),this.query.limit!==null)for(;u.size>this.query.limit;){const g=this.query.limitType==="F"?u.last():u.first();u=u.delete(g.key),o=o.delete(g.key),n.track({type:1,doc:g})}return{eu:u,ru:n,Ds:c,mutatedKeys:o}}iu(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n,i){const o=this.eu;this.eu=t.eu,this.mutatedKeys=t.mutatedKeys;const u=t.ru.pa();u.sort(((g,v)=>(function(S,D){const x=b=>{switch(b){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return M(20277,{At:b})}};return x(S)-x(D)})(g.type,v.type)||this.Xa(g.doc,v.doc))),this.su(n),i=i!=null&&i;const c=e&&!i?this.ou():[],f=this.Za.size===0&&this.current&&!i?1:0,d=f!==this.Ya;return this.Ya=f,u.length!==0||d?{snapshot:new De(this.query,t.eu,o,u,t.mutatedKeys,f===0,d,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:c}:{_u:c}}va(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({eu:this.eu,ru:new Lo,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(t){return!this.Ha.has(t)&&!!this.eu.has(t)&&!this.eu.get(t).hasLocalMutations}su(t){t&&(t.addedDocuments.forEach((e=>this.Ha=this.Ha.add(e))),t.modifiedDocuments.forEach((e=>{})),t.removedDocuments.forEach((e=>this.Ha=this.Ha.delete(e))),this.current=t.current)}ou(){if(!this.current)return[];const t=this.Za;this.Za=q(),this.eu.forEach((n=>{this.au(n.key)&&(this.Za=this.Za.add(n.key))}));const e=[];return t.forEach((n=>{this.Za.has(n)||e.push(new au(n))})),this.Za.forEach((n=>{t.has(n)||e.push(new ou(n))})),e}uu(t){this.Ha=t.qs,this.Za=q();const e=this.nu(t.documents);return this.applyChanges(e,!0)}cu(){return De.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,this.Ya===0,this.hasCachedResults)}}const zs="SyncEngine";class tf{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class ef{constructor(t){this.key=t,this.lu=!1}}class nf{constructor(t,e,n,i,o,u){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=i,this.currentUser=o,this.maxConcurrentLimboResolutions=u,this.hu={},this.Pu=new pe((c=>Pa(c)),dr),this.Tu=new Map,this.Iu=new Set,this.du=new Y(O.comparator),this.Eu=new Map,this.Au=new ks,this.Ru={},this.Vu=new Map,this.mu=be.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return this.fu===!0}}async function rf(r,t,e=!0){const n=du(r);let i;const o=n.Pu.get(t);return o?(n.sharedClientState.addLocalQueryTarget(o.targetId),i=o.view.cu()):i=await uu(n,t,e,!0),i}async function sf(r,t){const e=du(r);await uu(e,t,!0,!1)}async function uu(r,t,e,n){const i=await vh(r.localStore,bt(t)),o=i.targetId,u=r.sharedClientState.addLocalQueryTarget(o,e);let c;return n&&(c=await of(r,t,o,u==="current",i.resumeToken)),r.isPrimaryClient&&e&&tu(r.remoteStore,i),c}async function of(r,t,e,n,i){r.gu=(v,R,S)=>(async function(x,b,$,B){let K=b.view.nu($);K.Ds&&(K=await ko(x.localStore,b.query,!1).then((({documents:E})=>b.view.nu(E,K))));const it=B&&B.targetChanges.get(b.targetId),Mt=B&&B.targetMismatches.get(b.targetId)!=null,at=b.view.applyChanges(K,x.isPrimaryClient,it,Mt);return Bo(x,b.targetId,at._u),at.snapshot})(r,v,R,S);const o=await ko(r.localStore,t,!0),u=new Zh(t,o.qs),c=u.nu(o.documents),f=yn.createSynthesizedTargetChangeForCurrentChange(e,n&&r.onlineState!=="Offline",i),d=u.applyChanges(c,r.isPrimaryClient,f);Bo(r,e,d._u);const g=new tf(t,e,u);return r.Pu.set(t,g),r.Tu.has(e)?r.Tu.get(e).push(t):r.Tu.set(e,[t]),d.snapshot}async function af(r,t,e){const n=L(r),i=n.Pu.get(t),o=n.Tu.get(i.targetId);if(o.length>1)return n.Tu.set(i.targetId,o.filter((u=>!dr(u,t)))),void n.Pu.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await ds(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),e&&Ms(n.remoteStore,i.targetId),gs(n,i.targetId)})).catch(xe)):(gs(n,i.targetId),await ds(n.localStore,i.targetId,!0))}async function uf(r,t){const e=L(r),n=e.Pu.get(t),i=e.Tu.get(n.targetId);e.isPrimaryClient&&i.length===1&&(e.sharedClientState.removeLocalQueryTarget(n.targetId),Ms(e.remoteStore,n.targetId))}async function lf(r,t,e){const n=gf(r);try{const i=await(function(u,c){const f=L(u),d=X.now(),g=c.reduce(((S,D)=>S.add(D.key)),q());let v,R;return f.persistence.runTransaction("Locally write mutations","readwrite",(S=>{let D=Bt(),x=q();return f.Os.getEntries(S,g).next((b=>{D=b,D.forEach((($,B)=>{B.isValidDocument()||(x=x.add($))}))})).next((()=>f.localDocuments.getOverlayedDocuments(S,D))).next((b=>{v=b;const $=[];for(const B of c){const K=vc(B,v.get(B.key).overlayedDocument);K!=null&&$.push(new ie(B.key,K,Ta(K.value.mapValue),Rt.exists(!0)))}return f.mutationQueue.addMutationBatch(S,d,$,c)})).next((b=>{R=b;const $=b.applyToLocalDocumentSet(v,x);return f.documentOverlayCache.saveOverlays(S,b.batchId,$)}))})).then((()=>({batchId:R.batchId,changes:Ca(v)})))})(n.localStore,t);n.sharedClientState.addPendingMutation(i.batchId),(function(u,c,f){let d=u.Ru[u.currentUser.toKey()];d||(d=new Y(U)),d=d.insert(c,f),u.Ru[u.currentUser.toKey()]=d})(n,i.batchId,e),await En(n,i.changes),await vr(n.remoteStore)}catch(i){const o=js(i,"Failed to persist write");e.reject(o)}}async function lu(r,t){const e=L(r);try{const n=await yh(e.localStore,t);t.targetChanges.forEach(((i,o)=>{const u=e.Eu.get(o);u&&(G(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?u.lu=!0:i.modifiedDocuments.size>0?G(u.lu,14607):i.removedDocuments.size>0&&(G(u.lu,42227),u.lu=!1))})),await En(e,n,t)}catch(n){await xe(n)}}function jo(r,t,e){const n=L(r);if(n.isPrimaryClient&&e===0||!n.isPrimaryClient&&e===1){const i=[];n.Pu.forEach(((o,u)=>{const c=u.view.va(t);c.snapshot&&i.push(c.snapshot)})),(function(u,c){const f=L(u);f.onlineState=c;let d=!1;f.queries.forEach(((g,v)=>{for(const R of v.wa)R.va(c)&&(d=!0)})),d&&Bs(f)})(n.eventManager,t),i.length&&n.hu.J_(i),n.onlineState=t,n.isPrimaryClient&&n.sharedClientState.setOnlineState(t)}}async function cf(r,t,e){const n=L(r);n.sharedClientState.updateQueryState(t,"rejected",e);const i=n.Eu.get(t),o=i&&i.key;if(o){let u=new Y(O.comparator);u=u.insert(o,yt.newNoDocument(o,F.min()));const c=q().add(o),f=new yr(F.min(),new Map,new Y(U),u,c);await lu(n,f),n.du=n.du.remove(o),n.Eu.delete(t),$s(n)}else await ds(n.localStore,t,!1).then((()=>gs(n,t,e))).catch(xe)}async function hf(r,t){const e=L(r),n=t.batch.batchId;try{const i=await _h(e.localStore,t);hu(e,n,null),cu(e,n),e.sharedClientState.updateMutationState(n,"acknowledged"),await En(e,i)}catch(i){await xe(i)}}async function ff(r,t,e){const n=L(r);try{const i=await(function(u,c){const f=L(u);return f.persistence.runTransaction("Reject batch","readwrite-primary",(d=>{let g;return f.mutationQueue.lookupMutationBatch(d,c).next((v=>(G(v!==null,37113),g=v.keys(),f.mutationQueue.removeMutationBatch(d,v)))).next((()=>f.mutationQueue.performConsistencyCheck(d))).next((()=>f.documentOverlayCache.removeOverlaysForBatchId(d,g,c))).next((()=>f.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(d,g))).next((()=>f.localDocuments.getDocuments(d,g)))}))})(n.localStore,t);hu(n,t,e),cu(n,t),n.sharedClientState.updateMutationState(t,"rejected",e),await En(n,i)}catch(i){await xe(i)}}function cu(r,t){(r.Vu.get(t)||[]).forEach((e=>{e.resolve()})),r.Vu.delete(t)}function hu(r,t,e){const n=L(r);let i=n.Ru[n.currentUser.toKey()];if(i){const o=i.get(t);o&&(e?o.reject(e):o.resolve(),i=i.remove(t)),n.Ru[n.currentUser.toKey()]=i}}function gs(r,t,e=null){r.sharedClientState.removeLocalQueryTarget(t);for(const n of r.Tu.get(t))r.Pu.delete(n),e&&r.hu.pu(n,e);r.Tu.delete(t),r.isPrimaryClient&&r.Au.zr(t).forEach((n=>{r.Au.containsKey(n)||fu(r,n)}))}function fu(r,t){r.Iu.delete(t.path.canonicalString());const e=r.du.get(t);e!==null&&(Ms(r.remoteStore,e),r.du=r.du.remove(t),r.Eu.delete(e),$s(r))}function Bo(r,t,e){for(const n of e)n instanceof ou?(r.Au.addReference(n.key,t),df(r,n)):n instanceof au?(k(zs,"Document no longer in limbo: "+n.key),r.Au.removeReference(n.key,t),r.Au.containsKey(n.key)||fu(r,n.key)):M(19791,{yu:n})}function df(r,t){const e=t.key,n=e.path.canonicalString();r.du.get(e)||r.Iu.has(n)||(k(zs,"New document in limbo: "+e),r.Iu.add(n),$s(r))}function $s(r){for(;r.Iu.size>0&&r.du.size<r.maxConcurrentLimboResolutions;){const t=r.Iu.values().next().value;r.Iu.delete(t);const e=new O(H.fromString(t)),n=r.mu.next();r.Eu.set(n,new ef(e)),r.du=r.du.insert(e,n),tu(r.remoteStore,new Qt(bt(Vs(e.path)),n,"TargetPurposeLimboResolution",lr.ue))}}async function En(r,t,e){const n=L(r),i=[],o=[],u=[];n.Pu.isEmpty()||(n.Pu.forEach(((c,f)=>{u.push(n.gu(f,t,e).then((d=>{var g;if((d||e)&&n.isPrimaryClient){const v=d?!d.fromCache:(g=e?.targetChanges.get(f.targetId))===null||g===void 0?void 0:g.current;n.sharedClientState.updateQueryState(f.targetId,v?"current":"not-current")}if(d){i.push(d);const v=xs.Es(f.targetId,d);o.push(v)}})))})),await Promise.all(u),n.hu.J_(i),await(async function(f,d){const g=L(f);try{await g.persistence.runTransaction("notifyLocalViewChanges","readwrite",(v=>P.forEach(d,(R=>P.forEach(R.Is,(S=>g.persistence.referenceDelegate.addReference(v,R.targetId,S))).next((()=>P.forEach(R.ds,(S=>g.persistence.referenceDelegate.removeReference(v,R.targetId,S)))))))))}catch(v){if(!Oe(v))throw v;k(Os,"Failed to update sequence numbers: "+v)}for(const v of d){const R=v.targetId;if(!v.fromCache){const S=g.Fs.get(R),D=S.snapshotVersion,x=S.withLastLimboFreeSnapshotVersion(D);g.Fs=g.Fs.insert(R,x)}}})(n.localStore,o))}async function mf(r,t){const e=L(r);if(!e.currentUser.isEqual(t)){k(zs,"User change. New user:",t.toKey());const n=await Xa(e.localStore,t);e.currentUser=t,(function(o,u){o.Vu.forEach((c=>{c.forEach((f=>{f.reject(new N(V.CANCELLED,u))}))})),o.Vu.clear()})(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await En(e,n.Bs)}}function pf(r,t){const e=L(r),n=e.Eu.get(t);if(n&&n.lu)return q().add(n.key);{let i=q();const o=e.Tu.get(t);if(!o)return i;for(const u of o){const c=e.Pu.get(u);i=i.unionWith(c.view.tu)}return i}}function du(r){const t=L(r);return t.remoteStore.remoteSyncer.applyRemoteEvent=lu.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=pf.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=cf.bind(null,t),t.hu.J_=Xh.bind(null,t.eventManager),t.hu.pu=Yh.bind(null,t.eventManager),t}function gf(r){const t=L(r);return t.remoteStore.remoteSyncer.applySuccessfulWrite=hf.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=ff.bind(null,t),t}class ar{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(t){this.serializer=Tr(t.databaseInfo.databaseId),this.sharedClientState=this.bu(t),this.persistence=this.Du(t),await this.persistence.start(),this.localStore=this.vu(t),this.gcScheduler=this.Cu(t,this.localStore),this.indexBackfillerScheduler=this.Fu(t,this.localStore)}Cu(t,e){return null}Fu(t,e){return null}vu(t){return gh(this.persistence,new dh,t.initialUser,this.serializer)}Du(t){return new Ha(Ns.Vi,this.serializer)}bu(t){return new Ah}async terminate(){var t,e;(t=this.gcScheduler)===null||t===void 0||t.stop(),(e=this.indexBackfillerScheduler)===null||e===void 0||e.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}ar.provider={build:()=>new ar};class _f extends ar{constructor(t){super(),this.cacheSizeBytes=t}Cu(t,e){G(this.persistence.referenceDelegate instanceof ir,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Jc(n,t.asyncQueue,e)}Du(t){const e=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Ha((n=>ir.Vi(n,e)),this.serializer)}}class _s{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=n=>jo(this.syncEngine,n,1),this.remoteStore.remoteSyncer.handleCredentialChange=mf.bind(null,this.syncEngine),await Gh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return(function(){return new Qh})()}createDatastore(t){const e=Tr(t.databaseInfo.databaseId),n=(function(o){return new Sh(o)})(t.databaseInfo);return(function(o,u,c,f){return new kh(o,u,c,f)})(t.authCredentials,t.appCheckCredentials,n,e)}createRemoteStore(t){return(function(n,i,o,u,c){return new xh(n,i,o,u,c)})(this.localStore,this.datastore,t.asyncQueue,(e=>jo(this.syncEngine,e,0)),(function(){return Oo.C()?new Oo:new wh})())}createSyncEngine(t,e){return(function(i,o,u,c,f,d,g){const v=new nf(i,o,u,c,f,d);return g&&(v.fu=!0),v})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}async terminate(){var t,e;await(async function(i){const o=L(i);k(me,"RemoteStore shutting down."),o.Ia.add(5),await Tn(o),o.Ea.shutdown(),o.Aa.set("Unknown")})(this.remoteStore),(t=this.datastore)===null||t===void 0||t.terminate(),(e=this.eventManager)===null||e===void 0||e.terminate()}}_s.provider={build:()=>new _s};/**
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
 */class yf{constructor(t){this.observer=t,this.muted=!1}next(t){this.muted||this.observer.next&&this.xu(this.observer.next,t)}error(t){this.muted||(this.observer.error?this.xu(this.observer.error,t):jt("Uncaught Error in snapshot listener:",t.toString()))}Ou(){this.muted=!0}xu(t,e){setTimeout((()=>{this.muted||t(e)}),0)}}/**
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
 */const re="FirestoreClient";class Tf{constructor(t,e,n,i,o){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=n,this.databaseInfo=i,this.user=_t.UNAUTHENTICATED,this.clientId=Es.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=o,this.authCredentials.start(n,(async u=>{k(re,"Received user=",u.uid),await this.authCredentialListener(u),this.user=u})),this.appCheckCredentials.start(n,(u=>(k(re,"Received new app check token=",u),this.appCheckCredentialListener(u,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}terminate(){this.asyncQueue.enterRestrictedMode();const t=new he;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const n=js(e,"Failed to shutdown persistence");t.reject(n)}})),t.promise}}async function ts(r,t){r.asyncQueue.verifyOperationInProgress(),k(re,"Initializing OfflineComponentProvider");const e=r.configuration;await t.initialize(e);let n=e.initialUser;r.setCredentialChangeListener((async i=>{n.isEqual(i)||(await Xa(t.localStore,i),n=i)})),t.persistence.setDatabaseDeletedListener((()=>{Yt("Terminating Firestore due to IndexedDb database deletion"),r.terminate().then((()=>{k("Terminating Firestore due to IndexedDb database deletion completed successfully")})).catch((i=>{Yt("Terminating Firestore due to IndexedDb database deletion failed",i)}))})),r._offlineComponents=t}async function zo(r,t){r.asyncQueue.verifyOperationInProgress();const e=await Ef(r);k(re,"Initializing OnlineComponentProvider"),await t.initialize(e,r.configuration),r.setCredentialChangeListener((n=>Fo(t.remoteStore,n))),r.setAppCheckTokenChangeListener(((n,i)=>Fo(t.remoteStore,i))),r._onlineComponents=t}async function Ef(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){k(re,"Using user provided OfflineComponentProvider");try{await ts(r,r._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!(function(i){return i.name==="FirebaseError"?i.code===V.FAILED_PRECONDITION||i.code===V.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(e))throw e;Yt("Error using user provided cache. Falling back to memory cache: "+e),await ts(r,new ar)}}else k(re,"Using default OfflineComponentProvider"),await ts(r,new _f(void 0));return r._offlineComponents}async function mu(r){return r._onlineComponents||(r._uninitializedComponentsProvider?(k(re,"Using user provided OnlineComponentProvider"),await zo(r,r._uninitializedComponentsProvider._online)):(k(re,"Using default OnlineComponentProvider"),await zo(r,new _s))),r._onlineComponents}function vf(r){return mu(r).then((t=>t.syncEngine))}async function $o(r){const t=await mu(r),e=t.eventManager;return e.onListen=rf.bind(null,t.syncEngine),e.onUnlisten=af.bind(null,t.syncEngine),e.onFirstRemoteStoreListen=sf.bind(null,t.syncEngine),e.onLastRemoteStoreUnlisten=uf.bind(null,t.syncEngine),e}/**
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
 */function pu(r){const t={};return r.timeoutSeconds!==void 0&&(t.timeoutSeconds=r.timeoutSeconds),t}/**
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
 */const Go=new Map;/**
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
 */const gu="firestore.googleapis.com",Ko=!0;class Qo{constructor(t){var e,n;if(t.host===void 0){if(t.ssl!==void 0)throw new N(V.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=gu,this.ssl=Ko}else this.host=t.host,this.ssl=(e=t.ssl)!==null&&e!==void 0?e:Ko;if(this.isUsingEmulator=t.emulatorOptions!==void 0,this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=Wa;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<Xc)throw new N(V.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Nl("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=pu((n=t.experimentalLongPollingOptions)!==null&&n!==void 0?n:{}),(function(o){if(o.timeoutSeconds!==void 0){if(isNaN(o.timeoutSeconds))throw new N(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (must not be NaN)`);if(o.timeoutSeconds<5)throw new N(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (minimum allowed value is 5)`);if(o.timeoutSeconds>30)throw new N(V.INVALID_ARGUMENT,`invalid long polling timeout: ${o.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&(function(n,i){return n.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ir{constructor(t,e,n,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Qo({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new N(V.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(t){if(this._settingsFrozen)throw new N(V.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Qo(t),this._emulatorOptions=t.emulatorOptions||{},t.credentials!==void 0&&(this._authCredentials=(function(n){if(!n)return new wl;switch(n.type){case"firstParty":return new Sl(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new N(V.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(t.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(e){const n=Go.get(e);n&&(k("ComponentProvider","Removing Datastore"),Go.delete(e),n.terminate())})(this),Promise.resolve()}}function If(r,t,e,n={}){var i;r=Ht(r,Ir);const o=Jo(t),u=r._getSettings(),c=Object.assign(Object.assign({},u),{emulatorOptions:r._getEmulatorOptions()}),f=`${t}:${e}`;o&&(_l(`https://${f}`),yl("Firestore",!0)),u.host!==gu&&u.host!==f&&Yt("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const d=Object.assign(Object.assign({},u),{host:f,ssl:o,emulatorOptions:n});if(!Tl(d,c)&&(r._setSettings(d),n.mockUserToken)){let g,v;if(typeof n.mockUserToken=="string")g=n.mockUserToken,v=_t.MOCK_USER;else{g=El(n.mockUserToken,(i=r._app)===null||i===void 0?void 0:i.options.projectId);const R=n.mockUserToken.sub||n.mockUserToken.user_id;if(!R)throw new N(V.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new _t(R)}r._authCredentials=new Rl(new oa(g,v))}}/**
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
 */class Ar{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Ar(this.firestore,t,this._query)}}class rt{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Xt(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new rt(this.firestore,t,this._key)}toJSON(){return{type:rt._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(t,e,n){if(gn(e,rt._jsonSchema))return new rt(t,n||null,new O(H.fromString(e.referencePath)))}}rt._jsonSchemaVersion="firestore/documentReference/1.0",rt._jsonSchema={type:et("string",rt._jsonSchemaVersion),referencePath:et("string")};class Xt extends Ar{constructor(t,e,n){super(t,e,Vs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new rt(this.firestore,null,new O(t))}withConverter(t){return new Xt(this.firestore,t,this._path)}}function Lf(r,t,...e){if(r=St(r),ua("collection","path",t),r instanceof Ir){const n=H.fromString(t,...e);return io(n),new Xt(r,null,n)}{if(!(r instanceof rt||r instanceof Xt))throw new N(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return io(n),new Xt(r.firestore,null,n)}}function Uf(r,t,...e){if(r=St(r),arguments.length===1&&(t=Es.newId()),ua("doc","path",t),r instanceof Ir){const n=H.fromString(t,...e);return so(n),new rt(r,null,new O(n))}{if(!(r instanceof rt||r instanceof Xt))throw new N(V.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const n=r._path.child(H.fromString(t,...e));return so(n),new rt(r.firestore,r instanceof Xt?r.converter:null,new O(n))}}/**
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
 */const Wo="AsyncQueue";class Ho{constructor(t=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new Ja(this,"async_queue_retry"),this.oc=()=>{const n=Zr();n&&k(Wo,"Visibility state changed to "+n.visibilityState),this.F_.y_()},this._c=t;const e=Zr();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.ac(),this.uc(t)}enterRestrictedMode(t){if(!this.Xu){this.Xu=!0,this.rc=t||!1;const e=Zr();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.oc)}}enqueue(t){if(this.ac(),this.Xu)return new Promise((()=>{}));const e=new he;return this.uc((()=>this.Xu&&this.rc?Promise.resolve():(t().then(e.resolve,e.reject),e.promise))).then((()=>e.promise))}enqueueRetryable(t){this.enqueueAndForget((()=>(this.Zu.push(t),this.cc())))}async cc(){if(this.Zu.length!==0){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(t){if(!Oe(t))throw t;k(Wo,"Operation failed with retryable error: "+t)}this.Zu.length>0&&this.F_.g_((()=>this.cc()))}}uc(t){const e=this._c.then((()=>(this.nc=!0,t().catch((n=>{throw this.tc=n,this.nc=!1,jt("INTERNAL UNHANDLED ERROR: ",Xo(n)),n})).then((n=>(this.nc=!1,n))))));return this._c=e,e}enqueueAfterDelay(t,e,n){this.ac(),this.sc.indexOf(t)>-1&&(e=0);const i=qs.createAndSchedule(this,t,e,n,(o=>this.lc(o)));return this.ec.push(i),i}ac(){this.tc&&M(47125,{hc:Xo(this.tc)})}verifyOperationInProgress(){}async Pc(){let t;do t=this._c,await t;while(t!==this._c)}Tc(t){for(const e of this.ec)if(e.timerId===t)return!0;return!1}Ic(t){return this.Pc().then((()=>{this.ec.sort(((e,n)=>e.targetTimeMs-n.targetTimeMs));for(const e of this.ec)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.Pc()}))}dc(t){this.sc.push(t)}lc(t){const e=this.ec.indexOf(t);this.ec.splice(e,1)}}function Xo(r){let t=r.message||"";return r.stack&&(t=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),t}/**
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
 */function Yo(r){return(function(e,n){if(typeof e!="object"||e===null)return!1;const i=e;for(const o of n)if(o in i&&typeof i[o]=="function")return!0;return!1})(r,["next","error","complete"])}class ke extends Ir{constructor(t,e,n,i){super(t,e,n,i),this.type="firestore",this._queue=new Ho,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const t=this._firestoreClient.terminate();this._queue=new Ho(t),this._firestoreClient=void 0,await t}}}function qf(r,t){const e=typeof r=="object"?r:ml(),n=typeof r=="string"?r:Zn,i=pl(e,"firestore").getImmediate({identifier:n});if(!i._initialized){const o=gl("firestore");o&&If(i,...o)}return i}function Gs(r){if(r._terminated)throw new N(V.FAILED_PRECONDITION,"The client has already been terminated.");return r._firestoreClient||Af(r),r._firestoreClient}function Af(r){var t,e,n;const i=r._freezeSettings(),o=(function(c,f,d,g){return new $l(c,f,d,g.host,g.ssl,g.experimentalForceLongPolling,g.experimentalAutoDetectLongPolling,pu(g.experimentalLongPollingOptions),g.useFetchStreams,g.isUsingEmulator)})(r._databaseId,((t=r._app)===null||t===void 0?void 0:t.options.appId)||"",r._persistenceKey,i);r._componentsProvider||!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((n=i.localCache)===null||n===void 0)&&n._onlineComponentProvider)&&(r._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),r._firestoreClient=new Tf(r._authCredentials,r._appCheckCredentials,r._queue,o,r._componentsProvider&&(function(c){const f=c?._online.build();return{_offline:c?._offline.build(f),_online:f}})(r._componentsProvider))}/**
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
 */class Pt{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Pt(ht.fromBase64String(t))}catch(e){throw new N(V.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new Pt(ht.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}toJSON(){return{type:Pt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(t){if(gn(t,Pt._jsonSchema))return Pt.fromBase64String(t.bytes)}}Pt._jsonSchemaVersion="firestore/bytes/1.0",Pt._jsonSchema={type:et("string",Pt._jsonSchemaVersion),bytes:et("string")};/**
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
 */class vn{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new N(V.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ct(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
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
 */class wr{constructor(t){this._methodName=t}}/**
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
 */class kt{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new N(V.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new N(V.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}_compareTo(t){return U(this._lat,t._lat)||U(this._long,t._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:kt._jsonSchemaVersion}}static fromJSON(t){if(gn(t,kt._jsonSchema))return new kt(t.latitude,t.longitude)}}kt._jsonSchemaVersion="firestore/geoPoint/1.0",kt._jsonSchema={type:et("string",kt._jsonSchemaVersion),latitude:et("number"),longitude:et("number")};/**
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
 */class Nt{constructor(t){this._values=(t||[]).map((e=>e))}toArray(){return this._values.map((t=>t))}isEqual(t){return(function(n,i){if(n.length!==i.length)return!1;for(let o=0;o<n.length;++o)if(n[o]!==i[o])return!1;return!0})(this._values,t._values)}toJSON(){return{type:Nt._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(t){if(gn(t,Nt._jsonSchema)){if(Array.isArray(t.vectorValues)&&t.vectorValues.every((e=>typeof e=="number")))return new Nt(t.vectorValues);throw new N(V.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}Nt._jsonSchemaVersion="firestore/vectorValue/1.0",Nt._jsonSchema={type:et("string",Nt._jsonSchemaVersion),vectorValues:et("object")};/**
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
 */const wf=/^__.*__$/;class Rf{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return this.fieldMask!==null?new ie(t,this.data,this.fieldMask,e,this.fieldTransforms):new _n(t,this.data,e,this.fieldTransforms)}}class _u{constructor(t,e,n){this.data=t,this.fieldMask=e,this.fieldTransforms=n}toMutation(t,e){return new ie(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function yu(r){switch(r){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw M(40011,{Ec:r})}}class Ks{constructor(t,e,n,i,o,u){this.settings=t,this.databaseId=e,this.serializer=n,this.ignoreUndefinedProperties=i,o===void 0&&this.Ac(),this.fieldTransforms=o||[],this.fieldMask=u||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(t){return new Ks(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:n,mc:!1});return i.fc(t),i}gc(t){var e;const n=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Rc({path:n,mc:!1});return i.Ac(),i}yc(t){return this.Rc({path:void 0,mc:!0})}wc(t){return ur(t,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(t){return this.fieldMask.find((e=>t.isPrefixOf(e)))!==void 0||this.fieldTransforms.find((e=>t.isPrefixOf(e.field)))!==void 0}Ac(){if(this.path)for(let t=0;t<this.path.length;t++)this.fc(this.path.get(t))}fc(t){if(t.length===0)throw this.wc("Document fields must not be empty");if(yu(this.Ec)&&wf.test(t))throw this.wc('Document fields cannot begin and end with "__"')}}class Pf{constructor(t,e,n){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=n||Tr(t)}Dc(t,e,n,i=!1){return new Ks({Ec:t,methodName:e,bc:n,path:ct.emptyPath(),mc:!1,Sc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Tu(r){const t=r._freezeSettings(),e=Tr(r._databaseId);return new Pf(r._databaseId,!!t.ignoreUndefinedProperties,e)}function Vf(r,t,e,n,i,o={}){const u=r.Dc(o.merge||o.mergeFields?2:0,t,e,i);Ws("Data must be an object, but it was:",u,n);const c=Iu(n,u);let f,d;if(o.merge)f=new wt(u.fieldMask),d=u.fieldTransforms;else if(o.mergeFields){const g=[];for(const v of o.mergeFields){const R=ys(t,v,e);if(!u.contains(R))throw new N(V.INVALID_ARGUMENT,`Field '${R}' is specified in your field mask but missing from your input data.`);wu(g,R)||g.push(R)}f=new wt(g),d=u.fieldTransforms.filter((v=>f.covers(v.field)))}else f=null,d=u.fieldTransforms;return new Rf(new It(c),f,d)}class Rr extends wr{_toFieldTransform(t){if(t.Ec!==2)throw t.Ec===1?t.wc(`${this._methodName}() can only appear at the top level of your update data`):t.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Rr}}class Qs extends wr{_toFieldTransform(t){return new _c(t.path,new dn)}isEqual(t){return t instanceof Qs}}function Eu(r,t,e,n){const i=r.Dc(1,t,e);Ws("Data must be an object, but it was:",i,n);const o=[],u=It.empty();se(n,((f,d)=>{const g=Hs(t,f,e);d=St(d);const v=i.gc(g);if(d instanceof Rr)o.push(g);else{const R=Pr(d,v);R!=null&&(o.push(g),u.set(g,R))}}));const c=new wt(o);return new _u(u,c,i.fieldTransforms)}function vu(r,t,e,n,i,o){const u=r.Dc(1,t,e),c=[ys(t,n,e)],f=[i];if(o.length%2!=0)throw new N(V.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let R=0;R<o.length;R+=2)c.push(ys(t,o[R])),f.push(o[R+1]);const d=[],g=It.empty();for(let R=c.length-1;R>=0;--R)if(!wu(d,c[R])){const S=c[R];let D=f[R];D=St(D);const x=u.gc(S);if(D instanceof Rr)d.push(S);else{const b=Pr(D,x);b!=null&&(d.push(S),g.set(S,b))}}const v=new wt(d);return new _u(g,v,u.fieldTransforms)}function Pr(r,t){if(Au(r=St(r)))return Ws("Unsupported field value:",t,r),Iu(r,t);if(r instanceof wr)return(function(n,i){if(!yu(i.Ec))throw i.wc(`${n._methodName}() can only be used with update() and set()`);if(!i.path)throw i.wc(`${n._methodName}() is not currently supported inside arrays`);const o=n._toFieldTransform(i);o&&i.fieldTransforms.push(o)})(r,t),null;if(r===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),r instanceof Array){if(t.settings.mc&&t.Ec!==4)throw t.wc("Nested arrays are not supported");return(function(n,i){const o=[];let u=0;for(const c of n){let f=Pr(c,i.yc(u));f==null&&(f={nullValue:"NULL_VALUE"}),o.push(f),u++}return{arrayValue:{values:o}}})(r,t)}return(function(n,i){if((n=St(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return mc(i.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const o=X.fromDate(n);return{timestampValue:sr(i.serializer,o)}}if(n instanceof X){const o=new X(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:sr(i.serializer,o)}}if(n instanceof kt)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Pt)return{bytesValue:ja(i.serializer,n._byteString)};if(n instanceof rt){const o=i.databaseId,u=n.firestore._databaseId;if(!u.isEqual(o))throw i.wc(`Document reference is for database ${u.projectId}/${u.database} but should be for database ${o.projectId}/${o.database}`);return{referenceValue:Ds(n.firestore._databaseId||i.databaseId,n._key.path)}}if(n instanceof Nt)return(function(u,c){return{mapValue:{fields:{[_a]:{stringValue:ya},[tr]:{arrayValue:{values:u.toArray().map((d=>{if(typeof d!="number")throw c.wc("VectorValues must only contain numeric values.");return Ss(c.serializer,d)}))}}}}}})(n,i);throw i.wc(`Unsupported field value: ${vs(n)}`)})(r,t)}function Iu(r,t){const e={};return ha(r)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):se(r,((n,i)=>{const o=Pr(i,t.Vc(n));o!=null&&(e[n]=o)})),{mapValue:{fields:e}}}function Au(r){return!(typeof r!="object"||r===null||r instanceof Array||r instanceof Date||r instanceof X||r instanceof kt||r instanceof Pt||r instanceof rt||r instanceof wr||r instanceof Nt)}function Ws(r,t,e){if(!Au(e)||!la(e)){const n=vs(e);throw n==="an object"?t.wc(r+" a custom object"):t.wc(r+" "+n)}}function ys(r,t,e){if((t=St(t))instanceof vn)return t._internalPath;if(typeof t=="string")return Hs(r,t);throw ur("Field path arguments must be of type string or ",r,!1,void 0,e)}const Sf=new RegExp("[~\\*/\\[\\]]");function Hs(r,t,e){if(t.search(Sf)>=0)throw ur(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,r,!1,void 0,e);try{return new vn(...t.split("."))._internalPath}catch{throw ur(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,r,!1,void 0,e)}}function ur(r,t,e,n,i){const o=n&&!n.isEmpty(),u=i!==void 0;let c=`Function ${t}() called with invalid data`;e&&(c+=" (via `toFirestore()`)"),c+=". ";let f="";return(o||u)&&(f+=" (found",o&&(f+=` in field ${n}`),u&&(f+=` in document ${i}`),f+=")"),new N(V.INVALID_ARGUMENT,c+r+f)}function wu(r,t){return r.some((e=>e.isEqual(t)))}/**
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
 */class Ru{constructor(t,e,n,i,o){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=i,this._converter=o}get id(){return this._key.path.lastSegment()}get ref(){return new rt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new Cf(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Pu("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class Cf extends Ru{data(){return super.data()}}function Pu(r,t){return typeof t=="string"?Hs(r,t):t instanceof vn?t._internalPath:t._delegate._internalPath}/**
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
 */function bf(r){if(r.limitType==="L"&&r.explicitOrderBy.length===0)throw new N(V.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Df{convertValue(t,e="none"){switch(ee(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Z(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(te(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 11:return this.convertObject(t.mapValue,e);case 10:return this.convertVectorValue(t.mapValue);default:throw M(62114,{value:t})}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const n={};return se(t,((i,o)=>{n[i]=this.convertValue(o,e)})),n}convertVectorValue(t){var e,n,i;const o=(i=(n=(e=t.fields)===null||e===void 0?void 0:e[tr].arrayValue)===null||n===void 0?void 0:n.values)===null||i===void 0?void 0:i.map((u=>Z(u.doubleValue)));return new Nt(o)}convertGeoPoint(t){return new kt(Z(t.latitude),Z(t.longitude))}convertArray(t,e){return(t.values||[]).map((n=>this.convertValue(n,e)))}convertServerTimestamp(t,e){switch(e){case"previous":const n=hr(t);return n==null?null:this.convertValue(n,e);case"estimate":return this.convertTimestamp(cn(t));default:return null}}convertTimestamp(t){const e=Zt(t);return new X(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=H.fromString(t);G(Qa(n),9688,{name:t});const i=new hn(n.get(1),n.get(3)),o=new O(n.popFirst(5));return i.isEqual(e)||jt(`Document ${o} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),o}}/**
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
 */function kf(r,t,e){let n;return n=r?e&&(e.merge||e.mergeFields)?r.toFirestore(t,e):r.toFirestore(t):t,n}class rn{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class fe extends Ru{constructor(t,e,n,i,o,u){super(t,e,n,i,u),this._firestore=t,this._firestoreImpl=t,this.metadata=o}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Yn(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Pu("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new N(V.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t=this._document,e={};return e.type=fe._jsonSchemaVersion,e.bundle="",e.bundleSource="DocumentSnapshot",e.bundleName=this._key.toString(),!t||!t.isValidDocument()||!t.isFoundDocument()?e:(this._userDataWriter.convertObjectMap(t.data.value.mapValue.fields,"previous"),e.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),e)}}fe._jsonSchemaVersion="firestore/documentSnapshot/1.0",fe._jsonSchema={type:et("string",fe._jsonSchemaVersion),bundleSource:et("string","DocumentSnapshot"),bundleName:et("string"),bundle:et("string")};class Yn extends fe{data(t={}){return super.data(t)}}class Pe{constructor(t,e,n,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new rn(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const t=[];return this.forEach((e=>t.push(e))),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach((n=>{t.call(e,new Yn(this._firestore,this._userDataWriter,n.key,n,new rn(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new N(V.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=(function(i,o){if(i._snapshot.oldDocs.isEmpty()){let u=0;return i._snapshot.docChanges.map((c=>{const f=new Yn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new rn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);return c.doc,{type:"added",doc:f,oldIndex:-1,newIndex:u++}}))}{let u=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((c=>o||c.type!==3)).map((c=>{const f=new Yn(i._firestore,i._userDataWriter,c.doc.key,c.doc,new rn(i._snapshot.mutatedKeys.has(c.doc.key),i._snapshot.fromCache),i.query.converter);let d=-1,g=-1;return c.type!==0&&(d=u.indexOf(c.doc.key),u=u.delete(c.doc.key)),c.type!==1&&(u=u.add(c.doc),g=u.indexOf(c.doc.key)),{type:Nf(c.type),doc:f,oldIndex:d,newIndex:g}}))}})(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new N(V.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const t={};t.type=Pe._jsonSchemaVersion,t.bundleSource="QuerySnapshot",t.bundleName=Es.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const e=[],n=[],i=[];return this.docs.forEach((o=>{o._document!==null&&(e.push(o._document),n.push(this._userDataWriter.convertObjectMap(o._document.data.value.mapValue.fields,"previous")),i.push(o.ref.path))})),t.bundle=(this._firestore,this.query._query,t.bundleName,"NOT SUPPORTED"),t}}function Nf(r){switch(r){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return M(61501,{type:r})}}Pe._jsonSchemaVersion="firestore/querySnapshot/1.0",Pe._jsonSchema={type:et("string",Pe._jsonSchemaVersion),bundleSource:et("string","QuerySnapshot"),bundleName:et("string"),bundle:et("string")};class Vu extends Df{constructor(t){super(),this.firestore=t}convertBytes(t){return new Pt(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new rt(this.firestore,null,e)}}function jf(r,t,e,...n){r=Ht(r,rt);const i=Ht(r.firestore,ke),o=Tu(i);let u;return u=typeof(t=St(t))=="string"||t instanceof vn?vu(o,"updateDoc",r._key,t,e,n):Eu(o,"updateDoc",r._key,t),Xs(i,[u.toMutation(r._key,Rt.exists(!0))])}function Bf(r){return Xs(Ht(r.firestore,ke),[new _r(r._key,Rt.none())])}function zf(r,...t){var e,n,i;r=St(r);let o={includeMetadataChanges:!1,source:"default"},u=0;typeof t[u]!="object"||Yo(t[u])||(o=t[u++]);const c={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(Yo(t[u])){const v=t[u];t[u]=(e=v.next)===null||e===void 0?void 0:e.bind(v),t[u+1]=(n=v.error)===null||n===void 0?void 0:n.bind(v),t[u+2]=(i=v.complete)===null||i===void 0?void 0:i.bind(v)}let f,d,g;if(r instanceof rt)d=Ht(r.firestore,ke),g=Vs(r._key.path),f={next:v=>{t[u]&&t[u](xf(d,r,v))},error:t[u+1],complete:t[u+2]};else{const v=Ht(r,Ar);d=Ht(v.firestore,ke),g=v._query;const R=new Vu(d);f={next:S=>{t[u]&&t[u](new Pe(d,R,v,S))},error:t[u+1],complete:t[u+2]},bf(r._query)}return(function(R,S,D,x){const b=new yf(x),$=new Jh(S,b,D);return R.asyncQueue.enqueueAndForget((async()=>Wh(await $o(R),$))),()=>{b.Ou(),R.asyncQueue.enqueueAndForget((async()=>Hh(await $o(R),$)))}})(Gs(d),g,c,f)}function Xs(r,t){return(function(n,i){const o=new he;return n.asyncQueue.enqueueAndForget((async()=>lf(await vf(n),i,o))),o.promise})(Gs(r),t)}function xf(r,t,e){const n=e.docs.get(t._key),i=new Vu(r);return new fe(r,i,t._key,n,new rn(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */class Of{constructor(t,e){this._firestore=t,this._commitHandler=e,this._mutations=[],this._committed=!1,this._dataReader=Tu(t)}set(t,e,n){this._verifyNotCommitted();const i=es(t,this._firestore),o=kf(i.converter,e,n),u=Vf(this._dataReader,"WriteBatch.set",i._key,o,i.converter!==null,n);return this._mutations.push(u.toMutation(i._key,Rt.none())),this}update(t,e,n,...i){this._verifyNotCommitted();const o=es(t,this._firestore);let u;return u=typeof(e=St(e))=="string"||e instanceof vn?vu(this._dataReader,"WriteBatch.update",o._key,e,n,i):Eu(this._dataReader,"WriteBatch.update",o._key,e),this._mutations.push(u.toMutation(o._key,Rt.exists(!0))),this}delete(t){this._verifyNotCommitted();const e=es(t,this._firestore);return this._mutations=this._mutations.concat(new _r(e._key,Rt.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new N(V.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function es(r,t){if((r=St(r)).firestore!==t)throw new N(V.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return r}function $f(){return new Qs("serverTimestamp")}/**
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
 */function Gf(r){return Gs(r=Ht(r,ke)),new Of(r,(t=>Xs(r,t)))}(function(t,e=!0){(function(i){Ne=i})(vl),cl(new hl("firestore",((n,{instanceIdentifier:i,options:o})=>{const u=n.getProvider("app").getImmediate(),c=new ke(new Pl(n.getProvider("auth-internal")),new Cl(u,n.getProvider("app-check-internal")),(function(d,g){if(!Object.prototype.hasOwnProperty.apply(d.options,["projectId"]))throw new N(V.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new hn(d.options.projectId,g)})(u,i),u);return o=Object.assign({useFetchStreams:e},o),c._setSettings(o),c}),"PUBLIC").setMultipleInstances(!0)),Yi(Zi,to,t),Yi(Zi,to,"esm2017")})();export{Bf as a,Lf as c,Uf as d,qf as g,zf as o,$f as s,jf as u,Gf as w};
