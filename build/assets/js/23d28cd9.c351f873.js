"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[4840],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return m}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(t),m=a,f=p["".concat(s,".").concat(m)]||p[m]||c[m]||o;return t?n.createElement(f,i(i({ref:r},d),{},{components:t})):n.createElement(f,i({ref:r},d))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},6576:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var n=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},s="Modules",u={unversionedId:"modules",id:"modules",title:"Modules",description:"Modules, unlike extensions, change how your keyboard works. These are meant to have",source:"@site/docs/modules.md",sourceDirName:".",slug:"/modules",permalink:"/docs/modules",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/modules.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ModTap Keycodes",permalink:"/docs/modtap"},next:{title:"Mouse keys",permalink:"/docs/mouse_keys"}},d={},c=[{value:"Core Modules",id:"core-modules",level:2},{value:"Require Libraries",id:"require-libraries",level:3},{value:"Peripherals",id:"peripherals",level:3}],p={toc:c};function m(e){var r=e.components,t=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"modules"},"Modules"),(0,o.kt)("p",null,"Modules, unlike extensions, change how your keyboard works. These are meant to have\nthe ability to alter the core code in any way. Unlike extensions, these are not in a\nsandbox, and can make massive changes to normal operation."),(0,o.kt)("h2",{id:"core-modules"},"Core Modules"),(0,o.kt)("p",null,"These modules are provided in all builds and can be enabled. Currently offered\nmodules are"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/combos"},"Combos"),": Adds chords and sequences"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/layers"},"Layers"),": Adds layer support (Fn key) to allow many more keys to be\nput on your keyboard."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/modtap"},"ModTap"),": Adds support for augmented modifier keys to act as one key\nwhen tapped, and modifier when held."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/mouse_keys"},"Mouse keys"),": Adds mouse keycodes."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/oneshot"},"OneShot"),": Adds support for oneshot/sticky keys."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/power"},"Power"),": Power saving features. This is mostly useful when on battery power."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/split_keyboards"},"Split"),": Keyboards split in two. Seems ergonomic!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/tapdance"},"TapDance"),": Different key actions depending on how often it is pressed.")),(0,o.kt)("h3",{id:"require-libraries"},"Require Libraries"),(0,o.kt)("p",null,"These modules can be used without specific hardware, but require additional libraries such as the ",(0,o.kt)("inlineCode",{parentName:"p"},"Adafruit CircuitPython Bundle"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/midi"},"MIDI"),": Adds sending MIDI data in the form of keymap entries.")),(0,o.kt)("h3",{id:"peripherals"},"Peripherals"),(0,o.kt)("p",null,"These modules are for specific hardware and may require additional libraries to function."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/adns9800"},"ADNS9800"),": Controlling ADNS9800 optical sensor."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/encoder"},"Encoder"),": Handling rotary encoders."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/pimoroni_trackball"},"Pimoroni trackball"),": Handling a small I2C trackball made by Pimoroni."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/easypoint"},"AS5013 aka EasyPoint"),": Handling a small I2C magnetic position sensor made by AMS.")))}m.isMDXComponent=!0}}]);