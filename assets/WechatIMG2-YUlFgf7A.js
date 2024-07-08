import{A,C as M,o as G,D as I,r as L,E as w,_ as i,G as b,i as m,d as S,H as $,I as B,J as W,a as C,c as v,b as E,e as D,f as R,K as J,k,l as K,n as U,p as O,t as _}from"./index-BCMBgn-q.js";/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */function V(e){return e===void 0}var j=V;/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */var X=A,H=M,F="[object Number]";function q(e){return typeof e=="number"||H(e)&&X(e)==F}var d=q;/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */var z={align:{type:String,default:"top",validator:function(t){return t?["start","end","center","stretch","baseline","top","middle","bottom"].includes(t):!0}},gutter:{type:[Number,Object,Array],default:0},justify:{type:String,default:"start",validator:function(t){return t?["start","end","center","space-around","space-between"].includes(t):!0}},tag:{type:String,default:"div"}};/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */var h=function(t){var n="xs";return t<768?n="xs":t>=768&&t<992?n="sm":t>=992&&t<1200?n="md":t>=1200&&t<1400?n="lg":t>=1400&&t<1880?n="xl":n="xxl",n};/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */function Q(e,t){G(function(){window.addEventListener(e,t)}),I(function(){window.removeEventListener(e,t)})}/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?N(Object(n),!0).forEach(function(r){i(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function T(){var e=L(h(w?0:window.innerWidth)),t=function(){e.value=h(w?0:window.innerWidth)};return Q("resize",t),e}function Y(e,t){var n=t.justify,r=t.align;return[e,i(i({},"".concat(e,"--").concat(n),n),"".concat(e,"--align-").concat(r),r)]}function Z(e,t){var n={},r=function(a){return Object.assign(n,{marginLeft:"".concat(a/-2,"px"),marginRight:"".concat(a/-2,"px")})},o=function(a){return Object.assign(n,{rowGap:"".concat(a,"px")})},s={isNumber:function(a){d(a)&&r(a)},isArray:function(a){m(a)&&a.length&&(s.isNumber(a[0]),d(a[1])&&o(a[1]),b(a[0])&&!j(a[0][t])&&r(a[0][t]),b(a[1])&&!j(a[1][t])&&o(a[1][t]))},isObject:function(a){b(a)&&a[t]&&(m(a)&&a.length?(r(a[t][0]),o(a[t][1])):r(a[t]))}};return Object.keys(s).forEach(function(c){s[c](e)}),n}function ee(e){return d(e)?"".concat(e," ").concat(e," 0"):/^\d+(\.\d+)?(px|r?em|%)$/.test(e)?"0 0 ".concat(e):e}function te(e,t){var n={},r=function(c){return Object.assign(n,{paddingLeft:"".concat(c/2,"px"),paddingRight:"".concat(c/2,"px")})},o={isNumber:function(c){d(c)&&r(c)},isArray:function(c){m(c)&&c.length&&(d(c[0])&&r(c[0]),b(c[0])&&c[0][t]&&r(c[0][t]))},isObject:function(c){b(c)&&c[t]&&r(c[t])}};return Object.keys(o).forEach(function(s){o[s](e)}),n}function ne(e,t){var n=t.span,r=t.order,o=t.offset,s=t.push,c=t.pull,a=["xs","sm","md","lg","xl","xxl"],l=a.reduce(function(p,f){var y=t[f],u={};return d(y)?u.span=y:b(y)&&(u=y||{}),g(g({},p),{},i(i(i(i(i({},"".concat(e,"-").concat(f,"-").concat(u.span),!j(u.span)),"".concat(e,"-").concat(f,"-order-").concat(u.order),parseInt(u.order,10)>=0),"".concat(e,"-").concat(f,"-offset-").concat(u.offset),parseInt(u.offset,10)>=0),"".concat(e,"-").concat(f,"-push-").concat(u.push),parseInt(u.push,10)>=0),"".concat(e,"-").concat(f,"-pull-").concat(u.pull),parseInt(u.pull,10)>=0))},{});return g(i(i(i(i(i(i({},"".concat(e),!0),"".concat(e,"-").concat(n),!j(n)),"".concat(e,"-order-").concat(r),r),"".concat(e,"-offset-").concat(o),o),"".concat(e,"-push-").concat(s),s),"".concat(e,"-pull-").concat(c),c),l)}/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */function P(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?P(Object(n),!0).forEach(function(r){i(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):P(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ae(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!D(e)}var ce=S({name:"TRow",props:re({},z),setup:function(t){var n=$(t),r=n.gutter,o=R();B("rowContext",W({gutter:r}));var s=T(),c=C("row"),a=v(function(){return Y(c.value,t)}),l=v(function(){return Z(t.gutter,s.value)});return function(){var p,f=t.tag;return E(f,{class:a.value,style:l.value},ae(p=o("default"))?p:{default:function(){return[p]}})}}});/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */var oe={flex:{type:[String,Number]},lg:{type:[Number,Object]},md:{type:[Number,Object]},offset:{type:Number,default:0},order:{type:Number,default:0},pull:{type:Number,default:0},push:{type:Number,default:0},sm:{type:[Number,Object]},span:{type:Number},tag:{type:String,default:"div"},xl:{type:[Number,Object]},xs:{type:[Number,Object]},xxl:{type:[Number,Object]}};/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */function x(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),n.push.apply(n,r)}return n}function se(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?x(Object(n),!0).forEach(function(r){i(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):x(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function ie(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!D(e)}var ue=S({name:"TCol",inject:["rowContext"],props:se({},oe),setup:function(t){var n=C("col"),r=R(),o=J("rowContext",Object.create(null)),s=T(),c=v(function(){return ne(n.value,t)}),a=v(function(){var l={},p=t.flex;if(p&&(l.flex=ee(p)),o){var f=o.gutter;Object.assign(l,te(f,s.value))}return l});return function(){var l,p=t.tag;return E(p,{class:c.value,style:a.value},ie(l=r("default"))?l:{default:function(){return[l]}})}}});/**
 * tdesign v1.9.7
 * (c) 2024 tdesign
 * @license MIT
 */var Oe=k(ce),ve=k(ue);const le={class:"k-center overflow-hidden"},fe={class:"position-absolute color-white font-600 text-center"},pe={class:"text-8 p-b"},be={class:"text-6"},de=["src"],je={__name:"k-image",props:["src","title","description"],setup(e){return(t,n)=>(K(),U("div",le,[O("div",fe,[O("div",pe,_(e.title),1),O("div",be,_(e.description),1)]),O("img",{class:"w-full max-h-400px",src:e.src,style:{"object-fit":"cover"}},null,8,de)]))}},ge="/assets/WechatIMG2-BLUHsz13.jpg";export{ve as C,Oe as R,ge as W,je as _};
