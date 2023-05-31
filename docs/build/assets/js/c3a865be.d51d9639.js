"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[2264],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),y=a,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},5880:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Serial ACE (Arbitrary Code Execution over serial interface)",l={unversionedId:"en/serialace",id:"en/serialace",title:"Serial ACE (Arbitrary Code Execution over serial interface)",description:"Caution: This module allows unrestricted, arbitrary code execution on your KMK",source:"@site/docs/en/serialace.md",sourceDirName:"en",slug:"/en/serialace",permalink:"/docs/en/serialace",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/en/serialace.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sequences",permalink:"/docs/en/sequences"},next:{title:"Split Keyboards",permalink:"/docs/en/split_keyboards"}},s={},c=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Example",id:"example",level:2},{value:"Get the List of Active Layers",id:"get-the-list-of-active-layers",level:3},{value:"&quot;Tap&quot; a Key",id:"tap-a-key",level:3}],u={toc:c},p="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"serial-ace-arbitrary-code-execution-over-serial-interface"},"Serial ACE (Arbitrary Code Execution over serial interface)"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Caution: This module allows unrestricted, arbitrary code execution on your KMK\ndevice. That includes potential exploits, such as keyloggers, and unvetted\nuser code that may result in undesired behaviour and/or crashes.\nThis feature is purely experimental in the sense that you probably neither\nwant nor should use it in production.\nAdvanced knowledge of python and the serial console is required, and we will\nnot provide help or support in any way.")),(0,a.kt)("p",null,"This module provides an API to run any valid python code on your keyboard and\nreturn the result of that code via an additional serial consol (not the one you\nuse for the circuitpython debugger)."),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("p",null,"Enable the data serial in ",(0,a.kt)("inlineCode",{parentName:"p"},"boot.py"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"import usb_cdc\nusb_cdc.enable(data=True)\n")),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"Enable the module, just as any other module else:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"from kmk.modules.serialace import SerialACE\nkeyboard.modules.append(SerialACE())\n")),(0,a.kt)("p",null,"Assume the data serial is on ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/ttyACM1"),".\nDepending on your OS settings, it bay be necessary to explicitly set the serial\ndevice to raw transmission, no echo:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"stty -F /dev/ttyACM1 raw -echo\n")),(0,a.kt)("h3",{id:"get-the-list-of-active-layers"},"Get the List of Active Layers"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ echo "keyboard.active_layers" > /dev/ttyACM1\n$ cat /dev/ttyACM1\n[0]\n')),(0,a.kt)("h3",{id:"tap-a-key"},'"Tap" a Key'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ echo \"exec('from kmk.keys import KC; keyboard.tap_key(KC.Y)')\" > /dev/ttyACM1\n$ y\n")))}d.isMDXComponent=!0}}]);