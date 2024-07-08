import{D as T,E as A,o as G,G as L,r as I,H as w,_ as i,I as b,i as m,d as S,J as $,K as B,L as W,a as C,c as v,b as E,e as D,f as R,M as J,k,n as K,p as U,q as O,x as _,m as V}from"./index-C7Kzm7a1.js";/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */function X(e){return e===void 0}var j=X;/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */var H=T,q=A,F="[object Number]";function z(e){return typeof e=="number"||q(e)&&H(e)==F}var d=z;/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */var Q={align:{type:String,default:"top",validator:function(t){return t?["start","end","center","stretch","baseline","top","middle","bottom"].includes(t):!0}},gutter:{type:[Number,Object,Array],default:0},justify:{type:String,default:"start",validator:function(t){return t?["start","end","center","space-around","space-between"].includes(t):!0}},tag:{type:String,default:"div"}};/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */var h=function(t){var n="xs";return t<768?n="xs":t>=768&&t<992?n="sm":t>=992&&t<1200?n="md":t>=1200&&t<1400?n="lg":t>=1400&&t<1880?n="xl":n="xxl",n};/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */function Y(e,t){G(function(){window.addEventListener(e,t)}),L(function(){window.removeEventListener(e,t)})}/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(r){i(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function M(){var e=I(h(w?0:window.innerWidth)),t=function(){e.value=h(w?0:window.innerWidth)};return Y("resize",t),e}function Z(e,t){var n=t.justify,r=t.align;return[e,i(i({},"".concat(e,"--").concat(n),n),"".concat(e,"--align-").concat(r),r)]}function ee(e,t){var n={},r=function(a){return Object.assign(n,{marginLeft:"".concat(a/-2,"px"),marginRight:"".concat(a/-2,"px")})},c=function(a){return Object.assign(n,{rowGap:"".concat(a,"px")})},s={isNumber:function(a){d(a)&&r(a)},isArray:function(a){m(a)&&a.length&&(s.isNumber(a[0]),d(a[1])&&c(a[1]),b(a[0])&&!j(a[0][t])&&r(a[0][t]),b(a[1])&&!j(a[1][t])&&c(a[1][t]))},isObject:function(a){b(a)&&a[t]&&(m(a)&&a.length?(r(a[t][0]),c(a[t][1])):r(a[t]))}};return Object.keys(s).forEach(function(o){s[o](e)}),n}function te(e){return d(e)?"".concat(e," ").concat(e," 0"):/^\d+(\.\d+)?(px|r?em|%)$/.test(e)?"0 0 ".concat(e):e}function ne(e,t){var n={},r=function(o){return Object.assign(n,{paddingLeft:"".concat(o/2,"px"),paddingRight:"".concat(o/2,"px")})},c={isNumber:function(o){d(o)&&r(o)},isArray:function(o){m(o)&&o.length&&(d(o[0])&&r(o[0]),b(o[0])&&o[0][t]&&r(o[0][t]))},isObject:function(o){b(o)&&o[t]&&r(o[t])}};return Object.keys(c).forEach(function(s){c[s](e)}),n}function re(e,t){var n=t.span,r=t.order,c=t.offset,s=t.push,o=t.pull,a=["xs","sm","md","lg","xl","xxl"],f=a.reduce(function(p,l){var y=t[l],u={};return d(y)?u.span=y:b(y)&&(u=y||{}),g(g({},p),{},i(i(i(i(i({},"".concat(e,"-").concat(l,"-").concat(u.span),!j(u.span)),"".concat(e,"-").concat(l,"-order-").concat(u.order),parseInt(u.order,10)>=0),"".concat(e,"-").concat(l,"-offset-").concat(u.offset),parseInt(u.offset,10)>=0),"".concat(e,"-").concat(l,"-push-").concat(u.push),parseInt(u.push,10)>=0),"".concat(e,"-").concat(l,"-pull-").concat(u.pull),parseInt(u.pull,10)>=0))},{});return g(i(i(i(i(i(i({},"".concat(e),!0),"".concat(e,"-").concat(n),!j(n)),"".concat(e,"-order-").concat(r),r),"".concat(e,"-offset-").concat(c),c),"".concat(e,"-push-").concat(s),s),"".concat(e,"-pull-").concat(o),o),f)}/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,r)}return n}function ae(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?P(Object(n),!0).forEach(function(r){i(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function oe(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!D(e)}var ce=S({name:"TRow",props:ae({},Q),setup:function(t){var n=$(t),r=n.gutter,c=R();B("rowContext",W({gutter:r}));var s=M(),o=C("row"),a=v(function(){return Z(o.value,t)}),f=v(function(){return ee(t.gutter,s.value)});return function(){var p,l=t.tag;return E(l,{class:a.value,style:f.value},oe(p=c("default"))?p:{default:function(){return[p]}})}}});/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */var se={flex:{type:[String,Number]},lg:{type:[Number,Object]},md:{type:[Number,Object]},offset:{type:Number,default:0},order:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},sm:{type:[Number,Object]},span:{type:Number},tag:{type:String,default:"div"},xl:{type:[Number,Object]},xs:{type:[Number,Object]},xxl:{type:[Number,Object]}};/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,r)}return n}function ie(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(r){i(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ue(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!D(e)}var fe=S({name:"TCol",inject:["rowContext"],props:ie({},se),setup:function(t){var n=C("col"),r=R(),c=J("rowContext",Object.create(null)),s=M(),o=v(function(){return re(n.value,t)}),a=v(function(){var f={},p=t.flex;if(p&&(f.flex=te(p)),c){var l=c.gutter;Object.assign(f,ne(l,s.value))}return f});return function(){var f,p=t.tag;return E(p,{class:o.value,style:a.value},ue(f=r("default"))?f:{default:function(){return[f]}})}}});/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */var ve=k(ce),je=k(fe);const le={class:"k-center overflow-hidden"},pe={class:"position-absolute color-white font-600 text-center"},be={class:"text-8 p-b"},de={class:"text-6"},ye=["src"],ge={__name:"k-image",props:["src","title","description"],setup(e){return(t,n)=>(K(),U("div",le,[O("div",pe,[O("div",be,_(e.title),1),O("div",de,_(e.description),1)]),O("img",V(t.$attrs,{class:"w-full max-h-400px",src:e.src,style:{"object-fit":"cover"}}),null,16,ye)]))}},me="/assets/WechatIMG2-BLUHsz13.jpg";export{je as C,ve as R,me as W,ge as _};
