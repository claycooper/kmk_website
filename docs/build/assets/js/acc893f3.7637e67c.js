"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[484],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>N});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),u=p(n),k=r,N=u["".concat(d,".").concat(k)]||u[k]||s[k]||l;return n?a.createElement(N,i(i({ref:e},m),{},{components:n})):a.createElement(N,i({ref:e},m))}));function N(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[u]="string"==typeof t?t:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9427:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},i="RGB/Underglow/NeoPixel",o={unversionedId:"en/rgb",id:"en/rgb",title:"RGB/Underglow/NeoPixel",description:"Want your keyboard to shine? Add some lights!",source:"@site/docs/en/rgb.md",sourceDirName:"en",slug:"/en/rgb",permalink:"/docs/en/rgb",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/en/rgb.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"RapidFire",permalink:"/docs/en/rapidfire"},next:{title:"Scanners",permalink:"/docs/en/scanners"}},d={},p=[{value:"CircuitPython",id:"circuitpython",level:2},{value:"Color Selection",id:"color-selection",level:3},{value:"Enabling the extension",id:"enabling-the-extension",level:2},{value:"Keycodes",id:"keycodes",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Built-in Animation Configuration",id:"built-in-animation-configuration",level:2},{value:"Functions",id:"functions",level:2},{value:"Direct variable access",id:"direct-variable-access",level:2},{value:"Hardware Modification",id:"hardware-modification",level:2},{value:"Troubleshooting",id:"troubleshooting",level:2},{value:"Incorrect colors",id:"incorrect-colors",level:3},{value:"Lights don&#39;t turn on",id:"lights-dont-turn-on",level:3},{value:"Alternate LED chipsets",id:"alternate-led-chipsets",level:2},{value:"Multiple PixelBuffer",id:"multiple-pixelbuffer",level:3}],m={toc:p},u="wrapper";function s(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rgbunderglowneopixel"},"RGB/Underglow/NeoPixel"),(0,r.kt)("p",null,"Want your keyboard to shine? Add some lights!"),(0,r.kt)("h2",{id:"circuitpython"},"CircuitPython"),(0,r.kt)("p",null,"This does require the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_CircuitPython_NeoPixel/blob/main/neopixel.py"},"NeoPixel library from Adafruit"),".\nIt is part of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/adafruit/Adafruit_CircuitPython_Bundle"},"Adafruit CircuitPython Bundle"),'.\nSimply put this in the "root" of your CircuitPython device. If unsure, it\'s the folder with ',(0,r.kt)("inlineCode",{parentName:"p"},"main.py")," in it, and should be the first folder you see when you open the device."),(0,r.kt)("p",null,"Currently we support the following addressable LEDs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WS2811, WS2812, WS2812B, WS2812C, etc."),(0,r.kt)("li",{parentName:"ul"},"SK6812, SK6812MINI, SK6805")),(0,r.kt)("h3",{id:"color-selection"},"Color Selection"),(0,r.kt)("p",null,"KMK uses ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/HSL_and_HSV"},"Hue, Saturation, and Value")," to select colors rather than RGB. The color wheel below demonstrates how this works."),(0,r.kt)("p",null,"Changing the ",(0,r.kt)("strong",{parentName:"p"},"Hue")," cycles around the circle.\nChanging the ",(0,r.kt)("strong",{parentName:"p"},"Saturation")," moves between the inner and outer sections of the wheel, affecting the intensity of the color.\nChanging the ",(0,r.kt)("strong",{parentName:"p"},"Value")," sets the overall brightness."),(0,r.kt)("h2",{id:"enabling-the-extension"},"Enabling the extension"),(0,r.kt)("p",null,"The only required values that you need to give the RGB extension would be the board pin for the data line, and the number of pixels/LED's. If using a split keyboard, this number is per side, and not the total of both sides."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import board\nfrom kmk.extensions.RGB import RGB\n\nrgb = RGB(pixel_pin=board.GP14, num_pixels=27)\nkeyboard.extensions.append(rgb)\n")),(0,r.kt)("h2",{id:"keycodes"},"[Keycodes]"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Aliases"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RGB_TOG")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Toggles RGB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RGB_HUI")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Increase Hue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RGB_HUD")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Decrease Hue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RGB_SAI")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Increase Saturation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RGB_SAD")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Decrease Saturation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RGB_VAI")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Increase Value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RGB_VAD")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Decrease Value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RGB_ANI")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Increase animation speed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RGB_AND")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Decrease animation speed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RGB_MODE_PLAIN")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RGB_M_P")),(0,r.kt)("td",{parentName:"tr",align:null},"Static RGB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RGB_MODE_BREATHE")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RGB_M_B")),(0,r.kt)("td",{parentName:"tr",align:null},"Breathing animation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RGB_MODE_RAINBOW")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RGB_M_R")),(0,r.kt)("td",{parentName:"tr",align:null},"Rainbow animation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RGB_MODE_BREATHE_RAINBOW")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RGB_M_BR")),(0,r.kt)("td",{parentName:"tr",align:null},"Breathing rainbow animation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RGB_MODE_KNIGHT")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RGB_M_K")),(0,r.kt)("td",{parentName:"tr",align:null},"Knight Rider animation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"KC.RGB_MODE_SWIRL")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"RGB_M_S")),(0,r.kt)("td",{parentName:"tr",align:null},"Swirl animation")))),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Define"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.num_pixels")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The number of LEDs connected")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.rgb_order")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(1, 0, 2)")),(0,r.kt)("td",{parentName:"tr",align:null},"The order of the pixels R G B, and optionally white. Example(1, 0, 2, 3)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.hue_step")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"10")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of steps to cycle through the hue by")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.sat_step")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"17")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of steps to change the saturation by")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.val_step")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"17")),(0,r.kt)("td",{parentName:"tr",align:null},"The number of steps to change the brightness by")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.hue_default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"The default hue when the keyboard boots")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.sat_default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"255")),(0,r.kt)("td",{parentName:"tr",align:null},"The default saturation when the keyboard boots")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.val_default")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"255")),(0,r.kt)("td",{parentName:"tr",align:null},"The default value (brightness) when the keyboard boots")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.val_limit")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"255")),(0,r.kt)("td",{parentName:"tr",align:null},"The maximum brightness level")))),(0,r.kt)("h2",{id:"built-in-animation-configuration"},"Built-in Animation Configuration"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Define"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.breathe_center")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1.5")),(0,r.kt)("td",{parentName:"tr",align:null},"Used to calculate the curve for the breathing animation. Anywhere from 1.0 - 2.7 is valid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.knight_effect_length")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"4")),(0,r.kt)("td",{parentName:"tr",align:null},'The number of LEDs to light up for the "Knight" animation')))),(0,r.kt)("h2",{id:"functions"},"Functions"),(0,r.kt)("p",null,"If you want to create your own animations, or for example, change the lighting in a macro, or a layer switch, here are some functions that are available."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.set_hsv_fill(hue, sat, val)")),(0,r.kt)("td",{parentName:"tr",align:null},"Fills all LED's with HSV values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.set_hsv(hue, sat, val, index)")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets a single LED with HSV value")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.set_rgb_fill((r, g, b))")),(0,r.kt)("td",{parentName:"tr",align:null},"Fills all LED's with RGB(W) values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.set_rgb((r, g, b), index)")),(0,r.kt)("td",{parentName:"tr",align:null},"Set's a single LED with RGB(W) values")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.disable_auto_write(bool)")),(0,r.kt)("td",{parentName:"tr",align:null},"When True, disables showing changes. Good for setting multiple LED's before a visible update")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.increase_hue(step)")),(0,r.kt)("td",{parentName:"tr",align:null},"Increases hue by a given step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.decrease_hue(step)")),(0,r.kt)("td",{parentName:"tr",align:null},"Decreases hue by a given step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.increase_sat(step)")),(0,r.kt)("td",{parentName:"tr",align:null},"Increases saturation by a given step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.decrease_sat(step)")),(0,r.kt)("td",{parentName:"tr",align:null},"Decreases saturation by a given step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.increase_val(step)")),(0,r.kt)("td",{parentName:"tr",align:null},"Increases value (brightness) by a given step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.decrease_val(step)")),(0,r.kt)("td",{parentName:"tr",align:null},"Decreases value (brightness) by a given step")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.increase_ani()")),(0,r.kt)("td",{parentName:"tr",align:null},"Increases animation speed by 1. Maximum 10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.decrease_ani()")),(0,r.kt)("td",{parentName:"tr",align:null},"Decreases animation speed by 1. Minimum 10")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.off()")),(0,r.kt)("td",{parentName:"tr",align:null},"Turns all LED's off")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.show()")),(0,r.kt)("td",{parentName:"tr",align:null},"Displays all stored configuration for LED's. Useful with disable_auto_write explained above")))),(0,r.kt)("h2",{id:"direct-variable-access"},"Direct variable access"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Define"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.hue")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"0")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the hue from 0-255")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.sat")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"255")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the saturation from 0-255")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.val")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"255")),(0,r.kt)("td",{parentName:"tr",align:null},"Sets the brightness from 0-255")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.reverse_animation")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"False")),(0,r.kt)("td",{parentName:"tr",align:null},"If true, some animations will run in reverse. Can be safely used in user animations")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.animation_mode")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"static")),(0,r.kt)("td",{parentName:"tr",align:null},"This can be changed to any modes included, or to something custom for user animations. Any string is valid")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"rgb.animation_speed")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"1")),(0,r.kt)("td",{parentName:"tr",align:null},"Increases animation speed of most animations. Recommended 1-5, Maximum 10.")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.extensions.rgb import AnimationModes\nrgb = RGB(pixel_pin=rgb_pixel_pin,\n        num_pixels=27\n        val_limit=100,\n        hue_default=0,\n        sat_default=100,\n        rgb_order=(1, 0, 2),  # GRB WS2812\n        val_default=100,\n        hue_step=5,\n        sat_step=5,\n        val_step=5,\n        animation_speed=1,\n        breathe_center=1,  # 1.0-2.7\n        knight_effect_length=3,\n        animation_mode=AnimationModes.STATIC,\n        reverse_animation=False,\n        refresh_rate=60,\n        )\n")),(0,r.kt)("h2",{id:"hardware-modification"},"Hardware Modification"),(0,r.kt)("p",null,"To add RGB LED's to boards that don't support them directly, you will have to\nadd a 3 wires. The power wire will run on 3.3v or 5v (depending on the LED),\nground, and data pins will need added to an unused pin on your microcontroller\nunless your keyboard has specific solder points for them. With those 3 wires\nconnected, set the ",(0,r.kt)("inlineCode",{parentName:"p"},"pixel_pin")," as described above, and you are ready to use your\nRGB LED's/NeoPixel."),(0,r.kt)("h2",{id:"troubleshooting"},"Troubleshooting"),(0,r.kt)("h3",{id:"incorrect-colors"},"Incorrect colors"),(0,r.kt)("p",null,"If your colors are incorrect, check the pixel order of your specific LED's. Here are some common ones."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"WS2811, WS2812, WS2812B, WS2812C are all GRB (1, 0, 2)"),(0,r.kt)("li",{parentName:"ul"},"SK6812, SK6812MINI, SK6805 are all GRB (1, 0, 2)"),(0,r.kt)("li",{parentName:"ul"},"NeoPixels will vary depending on which one you buy. It will be listed on the product page.")),(0,r.kt)("h3",{id:"lights-dont-turn-on"},"Lights don't turn on"),(0,r.kt)("p",null,"Make sure that your board supports LED backlight by checking for a line with\n",(0,r.kt)("inlineCode",{parentName:"p"},"PIXEL_PIN"),". If it does not, you can add it to your keymap.  If you added the\nLED's yourself, you will also need to set ",(0,r.kt)("inlineCode",{parentName:"p"},"num_pixels")," to the number of\ninstalled LED's in total."),(0,r.kt)("h2",{id:"alternate-led-chipsets"},"Alternate LED chipsets"),(0,r.kt)("p",null,"Not all RGB LEDs are compatible with NeoPixels. To support these, the RGB\nextension accepts an instance of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Pixelbuf"),"-compatible object as an optional\nparameter. If supplied, ",(0,r.kt)("inlineCode",{parentName:"p"},"pixel_pin")," is ignored and the supplied Pixelbuf is\nused instead of creating a NeoPixel object.\nThe RGB extension will figure out LED count from the pixelbuffer length if not\npassed explicitly."),(0,r.kt)("p",null,'This works easily with APA102 ("DotStar") LEDs, but for most other RGB LED\nchipsets you will need to provide a wrapper to match the expected interface.'),(0,r.kt)("p",null,"A simple example using APA102:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"import adafruit_dotstar\nfrom kmk.extensions.RGB import RGB\nfrom kb import rgb_pixel_pin  # This can be imported or defined manually\n\n_LED_COUNT=12\npixels = adafruit_dotstar.DotStar(board.SCK, board.MOSI, _LED_COUNT)\n\nrgb = RGB(pixel_pin=None, pixels=pixels)\nkeyboard.extensions.append(rgb)\n")),(0,r.kt)("h3",{id:"multiple-pixelbuffer"},"Multiple PixelBuffer"),(0,r.kt)("p",null,"Similar to alternate drivers, the RGB module supports passing multiple ",(0,r.kt)("inlineCode",{parentName:"p"},"Pixelbuf"),"\nobjects as an iterable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.extensions.RGB import RGB\n\npixels = (\n    Neopixel(...),\n    DotStar(...),\n    CustomPixelBuf(...)\n)\n\nrgb = RGB(pixel_pin=None, pixels=pixels)\nkeyboard.extensions.append(rgb)\n")))}s.isMDXComponent=!0}}]);