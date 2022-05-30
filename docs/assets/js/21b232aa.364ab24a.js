"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8005],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},893:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="Status LEDs",u={unversionedId:"extension_statusled",id:"extension_statusled",title:"Status LEDs",description:"Indicate which layer you are on with an array of single leds.",source:"@site/docs/extension_statusled.md",sourceDirName:".",slug:"/extension_statusled",permalink:"/kmk_website/docs/extension_statusled",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/extension_statusled.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Encoder module",permalink:"/kmk_website/docs/encoder"},next:{title:"Stringy Keymaps",permalink:"/kmk_website/docs/extension_stringy_keymaps"}},c={},p=[{value:"Enabling the extension",id:"enabling-the-extension",level:2},{value:"Keycodes",id:"keycodes",level:2},{value:"Configuration",id:"configuration",level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"status-leds"},"Status LEDs"),(0,o.kt)("p",null,"Indicate which layer you are on with an array of single leds."),(0,o.kt)("p",null,"During startup the leds light up to indicate that the bootup is finished."),(0,o.kt)("p",null,"For the time being just a simple consecutive single led\nindicator. And when there are more layers than leds it\nwraps around to the first led again.\n(Also works for a single led, which just lights when any\nlayer is active)"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Most of the code comes from the Mono color LED backlight extension"),"."),(0,o.kt)("h2",{id:"enabling-the-extension"},"Enabling the extension"),(0,o.kt)("p",null,"To enable the extension you need to define a list of ",(0,o.kt)("inlineCode",{parentName:"p"},"led_pins"),". It can be a list of a one, two or three pins."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.extensions.statusled import statusLED\nimport board\n\nstatusLED = statusLED(led_pins=[board.GP0, board.GP1, board.GP2])\nkeyboard.extensions.append(statusLED)\n")),(0,o.kt)("h2",{id:"keycodes"},"[Keycodes]"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Key"),(0,o.kt)("th",{parentName:"tr",align:null},"Aliases"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KC.SLED_INC")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Increase Brightness")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"KC.SLED_DEC")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},"Decrease Brightness")))),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"All of these values can be set by default for when the keyboard boots."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"statusLED = statusLED(\n    led_pin=led_pin,\n    brightness=30,\n    brightness_step=5,\n    brightness_limit=100,\n    )\n")),(0,o.kt)("p",null,"The brightness values are in percentages."))}m.isMDXComponent=!0}}]);