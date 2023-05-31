"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[7683],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),f=o,m=p["".concat(u,".").concat(f)]||p[f]||g[f]||a;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[p]="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9477:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>g,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},i="Debugging",c={unversionedId:"en/debugging",id:"en/debugging",title:"Debugging",description:"Debug will output most of the useful state to the console. This can be enable in your firmware",source:"@site/docs/en/debugging.md",sourceDirName:"en",slug:"/en/debugging",permalink:"/docs/en/debugging",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/en/debugging.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/docs/en/contributing"},next:{title:"Dynamic Sequences",permalink:"/docs/en/dynamic_sequences"}},u={},l=[],s={toc:l},p="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"debugging"},"Debugging"),(0,o.kt)("p",null,"Debug will output most of the useful state to the console. This can be enable in your firmware\nby setting this in your keymap. NOTE that it will be slower, so only enable this when you\nneed debugging."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"keyboard.debug_enabled = True\n")),(0,o.kt)("p",null,"The output can be viewed by connecting to the serial port of the keybord. Please refer to ",(0,o.kt)("a",{parentName:"p",href:"https://learn.adafruit.com/welcome-to-circuitpython/kattni-connecting-to-the-serial-console"},"THIS")," for\nmore information when connecting to serial console. For Linux users, we recommend ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/npat-efault/picocom"},"picocom")," or\n",(0,o.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/screen/manual/screen.html"},"screen")))}g.isMDXComponent=!0}}]);