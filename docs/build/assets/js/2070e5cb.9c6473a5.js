"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1801],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||l;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8130:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const l={},o="LED (Mono color backlight)",i={unversionedId:"en/led",id:"en/led",title:"LED (Mono color backlight)",description:"Want your keyboard to shine? Add some lights!",source:"@site/docs/en/led.md",sourceDirName:"en",slug:"/en/led",permalink:"/docs/en/led",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/en/led.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Layers",permalink:"/docs/en/layers"},next:{title:"Lock Status",permalink:"/docs/en/lock_status"}},d={},p=[{value:"Enabling the extension",id:"enabling-the-extension",level:2},{value:"Keycodes",id:"keycodes",level:2},{value:"Configuration",id:"configuration",level:2}],s={toc:p},m="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"led-mono-color-backlight"},"LED (Mono color backlight)"),(0,a.kt)("p",null,"Want your keyboard to shine? Add some lights!"),(0,a.kt)("h2",{id:"enabling-the-extension"},"Enabling the extension"),(0,a.kt)("p",null,"The only required values that you need to give the LED extension would be the\n",(0,a.kt)("inlineCode",{parentName:"p"},"led_pin"),". It can either be a single board pin, or a list of pins for multiple\nLED's."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.extensions.LED import LED\nimport board\n\nled_ext = LED(led_pin=[board.GP0, board.GP1])\nkeyboard.extensions.append(led_ext)\n")),(0,a.kt)("h2",{id:"keycodes"},"[Keycodes]"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Key"),(0,a.kt)("th",{parentName:"tr",align:null},"Aliases"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.LED_TOG()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Toggles LED's")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.LED_INC()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Increase Brightness")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.LED_DEC()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Decrease Brightness")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.LED_SET()")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Set Brightness")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.LED_ANI")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Increase animation speed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.LED_AND")),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},"Decrease animation speed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.LED_MODE_PLAIN")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"LED_M_P")),(0,a.kt)("td",{parentName:"tr",align:null},"Static LED's")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"KC.LED_MODE_BREATHE")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"LED_M_B")),(0,a.kt)("td",{parentName:"tr",align:null},"Breathing animation")))),(0,a.kt)("p",null,"Keycodes with arguments can affect all, or a selection of LED's."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"# toggle all LEDs\nLED_TOG_ALL = KC.LED_TOG()\n\n# increase brightness of first LED\nLED_INC_0   = KC.LED_INC(0)\n\n# decrease brightness of second and third LED\nLED_DEC_1_2 = KC.LED_DEC(1,2)\n\n")),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"All of these values can be set by default for when the keyboard boots."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.extensions.led import AnimationModes\nled_ext = LED(\n    led_pin=led_pin,\n    brightness=50,\n    brightness_step=5,\n    brightness_limit=100,\n    breathe_center=1.5,\n    animation_mode=AnimationModes.STATIC,\n    animation_speed=1,\n    user_animation=None,\n    val=100,\n    )\n")))}c.isMDXComponent=!0}}]);