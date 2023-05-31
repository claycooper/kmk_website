"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8236],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,y=p["".concat(s,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(y,a(a({ref:t},d),{},{components:n})):r.createElement(y,a({ref:t},d))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1054:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},a="Sticky Mod",l={unversionedId:"en/sticky_mod",id:"en/sticky_mod",title:"Sticky Mod",description:"This module allows to hold a modifier while a key is being tapped repeatedly; the modifier will be released when any other key is pressed or released.",source:"@site/docs/en/sticky_mod.md",sourceDirName:"en",slug:"/en/sticky_mod",permalink:"/docs/en/sticky_mod",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/en/sticky_mod.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Split Keyboards",permalink:"/docs/en/split_keyboards"},next:{title:"String Substitution",permalink:"/docs/en/string_substitution"}},s={},c=[{value:"Enabling the module",id:"enabling-the-module",level:2},{value:"Keycodes",id:"keycodes",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sticky-mod"},"Sticky Mod"),(0,o.kt)("p",null,"This module allows to hold a modifier while a key is being tapped repeatedly; the modifier will be released when any other key is pressed or released.\nThis is for example useful if you want to switch between open windows with ALT+TAB or CMD+TAB, using only a single key."),(0,o.kt)("h2",{id:"enabling-the-module"},"Enabling the module"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.sticky_mod import StickyMod\nsticky_mod = StickyMod()\nkeyboard.modules.append(sticky_mod)\nkeyboard.keymap = [\n    [\n        KC.SM(kc=KC.TAB, mod=KC.LALT),\n        KC.SM(KC.TAB, KC.LSFT(KC.LALT)),\n    ],\n]\n")),(0,o.kt)("h2",{id:"keycodes"},"Keycodes"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KC.SM(KC.key, KC.mod)")),(0,o.kt)("td",{parentName:"tr",align:null},"sticky mod")))))}u.isMDXComponent=!0}}]);