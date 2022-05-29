"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9180],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return c}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},y=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),y=p(n),c=r,m=y["".concat(s,".").concat(c)]||y[c]||u[c]||l;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}y.displayName="MDXCreateElement"},5300:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),l=(n(7294),n(3905)),o=["components"],i={},s="Layers",p={unversionedId:"layers",id:"layers",title:"Layers",description:"Layers module adds keys for accessing other layers. It can simply be added to",source:"@site/docs/layers.md",sourceDirName:".",slug:"/layers",permalink:"/docs/layers",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/layers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"THIS IS OUT OF DATE. DO NOT USE. ONLY FOR REFERENCE",permalink:"/docs/kmkpython_vs_circuitpython"},next:{title:"LED (Mono color backlight)",permalink:"/docs/led"}},d={},u=[{value:"Keycodes",id:"keycodes",level:2},{value:"Custom HoldTap Behavior",id:"custom-holdtap-behavior",level:2},{value:"Working with Layers",id:"working-with-layers",level:2},{value:"Using Multiple Base Layers",id:"using-multiple-base-layers",level:3},{value:"Example Code",id:"example-code",level:2}],y={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"layers"},"Layers"),(0,l.kt)("p",null,"Layers module adds keys for accessing other layers. It can simply be added to\nthe extensions list."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.layers import Layers\nkeyboard.modules.append(Layers())\n")),(0,l.kt)("h2",{id:"keycodes"},"Keycodes"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Key"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.DF(layer)")),(0,l.kt)("td",{parentName:"tr",align:null},"Switches the default layer until the next time the keyboard powers off")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.MO(layer)")),(0,l.kt)("td",{parentName:"tr",align:null},"Momentarily activates layer, switches off when you let go")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.LM(layer, mod)")),(0,l.kt)("td",{parentName:"tr",align:null},"As ",(0,l.kt)("inlineCode",{parentName:"td"},"MO(layer)")," but with ",(0,l.kt)("inlineCode",{parentName:"td"},"mod")," active")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.LT(layer, kc)")),(0,l.kt)("td",{parentName:"tr",align:null},"Momentarily activates layer if held, sends kc if tapped")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.TG(layer)")),(0,l.kt)("td",{parentName:"tr",align:null},"Toggles the layer (enables it if no active, and vise versa)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.TO(layer)")),(0,l.kt)("td",{parentName:"tr",align:null},"Activates layer and deactivates all other layers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"KC.TT(layer)")),(0,l.kt)("td",{parentName:"tr",align:null},"Momentarily activates layer if held, toggles it if tapped repeatedly")))),(0,l.kt)("h2",{id:"custom-holdtap-behavior"},"Custom HoldTap Behavior"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"KC.TT")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"KC.LT")," use the same heuristic to determine taps and holds as\nModTap. Check out the ",(0,l.kt)("a",{parentName:"p",href:"/docs/modtap"},"ModTap doc")," to find out more."),(0,l.kt)("h2",{id:"working-with-layers"},"Working with Layers"),(0,l.kt)("p",null,"When starting out, care should be taken when working with layers, since it's possible to lock\nyourself to a layer with no way of returning to the base layer short of unplugging your\nkeyboard. This is especially easy to do when using the ",(0,l.kt)("inlineCode",{parentName:"p"},"KC.TO()")," keycode, which deactivates\nall other layers in the stack."),(0,l.kt)("p",null,"Some helpful guidelines to keep in mind as you design your layers:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Only reference higher-numbered layers from a given layer"),(0,l.kt)("li",{parentName:"ul"},"Leave keys as ",(0,l.kt)("inlineCode",{parentName:"li"},"KC.TRNS")," in higher layers when they would overlap with a layer-switch")),(0,l.kt)("h3",{id:"using-multiple-base-layers"},"Using Multiple Base Layers"),(0,l.kt)("p",null,"In some cases, you may want to have more than one base layer (for instance you want to use\nboth QWERTY and Dvorak layouts, or you have a custom gamepad that can switch between\ndifferent games). In this case, best practice is to have these layers be the lowest, i.e.\ndefined first in your keymap. These layers are mutually-exclusive, so treat changing default\nlayers with ",(0,l.kt)("inlineCode",{parentName:"p"},"KC.DF()")," the same way that you would treat using ",(0,l.kt)("inlineCode",{parentName:"p"},"KC.TO()")),(0,l.kt)("h2",{id:"example-code"},"Example Code"),(0,l.kt)("p",null,"For our example, let's take a simple 3x3 macropad with two layers as follows:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.layers import Layers\nkeyboard.modules.append(Layers())\n\n# Layer Keys\nMOMENTARY = KC.MO(1)\nMOD_LAYER = KC.LM(1, KC.RCTL)\nLAYER_TAP = KC.LT(1, KC.END, prefer_hold=True, tap_interrupted=False, tap_time=250) # any tap longer than 250ms will be interpreted as a hold\n\nkeyboard.keymap = [\n    # Base layer\n    [\n        KC.NO,  KC.UP,  KC.NO,  \n        KC.LEFT,KC.DOWN,KC.RGHT,\n        MOMENTARY, LAYER_TAP, MOD_LAYER,\n    ],\n\n    # Function Layer\n    [\n        KC.F1,  KC.F2,  KC.F3,\n        KC.F4,  KC.F5,  KC.F6,\n        KC.TRNS,KC.TRNS,KC.TRNS,    \n    ],\n]\n")))}c.isMDXComponent=!0}}]);