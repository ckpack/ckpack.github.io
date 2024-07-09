import{E as T,G as A,C as M,H as k,q as G,I as m,z as i,J as b,x as g,d as S,K as L,M as $,N as I,i as h,c as O,b as C,k as _,l as E,O as J,p as R}from"./index-Dd2fIxyA.js";/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */function K(e){return e===void 0}var v=K;/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */var U=T,X=A,V="[object Number]";function W(e){return typeof e=="number"||X(e)&&U(e)==V}var y=W;/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */var q={align:{type:String,default:"top",validator:function(t){return t?["start","end","center","stretch","baseline","top","middle","bottom"].includes(t):!0}},gutter:{type:[Number,Object,Array],default:0},justify:{type:String,default:"start",validator:function(t){return t?["start","end","center","space-around","space-between"].includes(t):!0}},tag:{type:String,default:"div"}};/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */var w=function(t){var n="xs";return t<768?n="xs":t>=768&&t<992?n="sm":t>=992&&t<1200?n="md":t>=1200&&t<1400?n="lg":t>=1400&&t<1880?n="xl":n="xxl",n};/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */function B(e,t){M(function(){window.addEventListener(e,t)}),k(function(){window.removeEventListener(e,t)})}/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(r){i(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function D(){var e=G(w(m?0:window.innerWidth)),t=function(){e.value=w(m?0:window.innerWidth)};return B("resize",t),e}function F(e,t){var n=t.justify,r=t.align;return[e,i(i({},"".concat(e,"--").concat(n),n),"".concat(e,"--align-").concat(r),r)]}function H(e,t){var n={},r=function(a){return Object.assign(n,{marginLeft:"".concat(a/-2,"px"),marginRight:"".concat(a/-2,"px")})},c=function(a){return Object.assign(n,{rowGap:"".concat(a,"px")})},s={isNumber:function(a){y(a)&&r(a)},isArray:function(a){g(a)&&a.length&&(s.isNumber(a[0]),y(a[1])&&c(a[1]),b(a[0])&&!v(a[0][t])&&r(a[0][t]),b(a[1])&&!v(a[1][t])&&c(a[1][t]))},isObject:function(a){b(a)&&a[t]&&(g(a)&&a.length?(r(a[t][0]),c(a[t][1])):r(a[t]))}};return Object.keys(s).forEach(function(o){s[o](e)}),n}function z(e){return y(e)?"".concat(e," ").concat(e," 0"):/^\d+(\.\d+)?(px|r?em|%)$/.test(e)?"0 0 ".concat(e):e}function Q(e,t){var n={},r=function(o){return Object.assign(n,{paddingLeft:"".concat(o/2,"px"),paddingRight:"".concat(o/2,"px")})},c={isNumber:function(o){y(o)&&r(o)},isArray:function(o){g(o)&&o.length&&(y(o[0])&&r(o[0]),b(o[0])&&o[0][t]&&r(o[0][t]))},isObject:function(o){b(o)&&o[t]&&r(o[t])}};return Object.keys(c).forEach(function(s){c[s](e)}),n}function Y(e,t){var n=t.span,r=t.order,c=t.offset,s=t.push,o=t.pull,a=["xs","sm","md","lg","xl","xxl"],f=a.reduce(function(p,l){var d=t[l],u={};return y(d)?u.span=d:b(d)&&(u=d||{}),j(j({},p),{},i(i(i(i(i({},"".concat(e,"-").concat(l,"-").concat(u.span),!v(u.span)),"".concat(e,"-").concat(l,"-order-").concat(u.order),parseInt(u.order,10)>=0),"".concat(e,"-").concat(l,"-offset-").concat(u.offset),parseInt(u.offset,10)>=0),"".concat(e,"-").concat(l,"-push-").concat(u.push),parseInt(u.push,10)>=0),"".concat(e,"-").concat(l,"-pull-").concat(u.pull),parseInt(u.pull,10)>=0))},{});return j(i(i(i(i(i(i({},"".concat(e),!0),"".concat(e,"-").concat(n),!v(n)),"".concat(e,"-order-").concat(r),r),"".concat(e,"-offset-").concat(c),c),"".concat(e,"-push-").concat(s),s),"".concat(e,"-pull-").concat(o),o),f)}/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,r)}return n}function Z(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?P(Object(n),!0).forEach(function(r){i(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ee(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!_(e)}var te=S({name:"TRow",props:Z({},q),setup:function(t){var n=L(t),r=n.gutter,c=E();$("rowContext",I({gutter:r}));var s=D(),o=h("row"),a=O(function(){return F(o.value,t)}),f=O(function(){return H(t.gutter,s.value)});return function(){var p,l=t.tag;return C(l,{class:a.value,style:f.value},ee(p=c("default"))?p:{default:function(){return[p]}})}}});/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */var ne={flex:{type:[String,Number]},lg:{type:[Number,Object]},md:{type:[Number,Object]},offset:{type:Number,default:0},order:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},sm:{type:[Number,Object]},span:{type:Number},tag:{type:String,default:"div"},xl:{type:[Number,Object]},xs:{type:[Number,Object]},xxl:{type:[Number,Object]}};/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(c){return Object.getOwnPropertyDescriptor(e,c).enumerable})),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(r){i(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ae(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!_(e)}var oe=S({name:"TCol",inject:["rowContext"],props:re({},ne),setup:function(t){var n=h("col"),r=E(),c=J("rowContext",Object.create(null)),s=D(),o=O(function(){return Y(n.value,t)}),a=O(function(){var f={},p=t.flex;if(p&&(f.flex=z(p)),c){var l=c.gutter;Object.assign(f,Q(l,s.value))}return f});return function(){var f,p=t.tag;return C(p,{class:o.value,style:a.value},ae(f=r("default"))?f:{default:function(){return[f]}})}}});/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */var se=R(te),ie=R(oe);export{ie as C,se as R};
