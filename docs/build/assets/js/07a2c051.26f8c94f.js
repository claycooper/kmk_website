"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[1342],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>b});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,b=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7422:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},l="Pimoroni Trackball",i={unversionedId:"en/pimoroni_trackball",id:"en/pimoroni_trackball",title:"Pimoroni Trackball",description:"Module handles usage of Trackball Breakout by Pimoroni.",source:"@site/docs/en/pimoroni_trackball.md",sourceDirName:"en",slug:"/en/pimoroni_trackball",permalink:"/docs/en/pimoroni_trackball",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/en/pimoroni_trackball.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Peg RGB Matrix",permalink:"/docs/en/peg_rgb_matrix"},next:{title:"Porting to KMK",permalink:"/docs/en/porting_to_kmk"}},c={},s=[{value:"Usage",id:"usage",level:3},{value:"Key inputs, other handler combinations",id:"key-inputs-other-handler-combinations",level:3},{value:"Backlight",id:"backlight",level:3}],p={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pimoroni-trackball"},"Pimoroni Trackball"),(0,a.kt)("p",null,"Module handles usage of Trackball Breakout by Pimoroni."),(0,a.kt)("p",null,"Product page: ",(0,a.kt)("a",{parentName:"p",href:"https://shop.pimoroni.com/products/trackball-breakout"},"https://shop.pimoroni.com/products/trackball-breakout")),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("p",null,"Declare I2C bus and add this module in your main class."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"from kmk.modules.pimoroni_trackball import Trackball, TrackballMode\nimport busio as io\n\ni2c = io.I2C(scl=board.D3, sda=board.D2)\ntrackball = Trackball(i2c)\nkeyboard.modules.append(trackball)\n")),(0,a.kt)("p",null,"Module will also work when you cannot use ",(0,a.kt)("inlineCode",{parentName:"p"},"busio")," and do ",(0,a.kt)("inlineCode",{parentName:"p"},"import bitbangio as io")," instead."),(0,a.kt)("h3",{id:"key-inputs-other-handler-combinations"},"Key inputs, other handler combinations"),(0,a.kt)("p",null,"If you have used this thing on a mobile device, you will know it excels at cursor movement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"\nfrom kmk.modules.pimoroni_trackball import Trackball, TrackballMode, PointingHandler, KeyHandler, ScrollHandler, ScrollDirection\n\ntrackball = Trackball(\n    i2c, \n    mode=TrackballMode.MOUSE_MODE, \n    # optional: set rotation angle of the trackball breakout board, default is 1\n    angle_offset=1.6, \n    handlers=[\n        # act like an encoder, input arrow keys\n        KeyHandler(KC.UP, KC.RIGHT, KC.DOWN, KC.LEFT, KC.ENTER), \n        # on layer 1 and above use the default pointing behavior\n        PointingHandler(),\n        # use ScrollDirection.NATURAL (default) or REVERSE to change the scrolling direction\n        ScrollHandler(scroll_direction=ScrollDirection.NATURAL)\n    ]\n)\n\n# now you can use these KeyCodes:\n\nKC.TB_NEXT_HANDLER # rotates through available \nKC.TB_HANDLER(0) # activate KeyHandler \nKC.TB_HANDLER(1) # activate MouseHandler\n\n")),(0,a.kt)("h3",{id:"backlight"},"Backlight"),(0,a.kt)("p",null,"Setup backlight color using below commands:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-python"},"trackball.set_rgbw(r, g, b, w)\ntrackball.set_red(brightness)\ntrackball.set_green(brightness)\ntrackball.set_blue(brightness)\ntrackball.set_white(brightness)\n")),(0,a.kt)("p",null,"This module exposes one keycode ",(0,a.kt)("inlineCode",{parentName:"p"},"TB_MODE"),", which on hold switches between ",(0,a.kt)("inlineCode",{parentName:"p"},"MOUSE_MODE")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"SCROLL_MODE"),".\nTo choose the default mode, pass it in ",(0,a.kt)("inlineCode",{parentName:"p"},"Trackball")," constructor."))}d.isMDXComponent=!0}}]);