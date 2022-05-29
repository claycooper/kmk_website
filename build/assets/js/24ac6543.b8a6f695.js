"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[9112],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=a,h=c["".concat(p,".").concat(m)]||c[m]||s[m]||o;return r?n.createElement(h,i(i({ref:t},d),{},{components:r})):n.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5502:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],l={},p="Getting Started",u={unversionedId:"Getting_Started",id:"Getting_Started",title:"Getting Started",description:"Life was like a box of chocolates. You never know what you're gonna get.",source:"@site/docs/Getting_Started.md",sourceDirName:".",slug:"/Getting_Started",permalink:"/docs/Getting_Started",draft:!1,editUrl:"https://github.com/KMKfw/kmk_firmware/tree/master/docs/Getting_Started.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tapdance",permalink:"/docs/ptBR/tapdance"},next:{title:"Officially supported microcontrollers",permalink:"/docs/Officially_Supported_Microcontrollers"}},d={},s=[{value:"TL;DR Quick start guide",id:"tldr-quick-start-guide",level:2},{value:"Now that you&#39;re up and running, you may want to go further...",id:"now-that-youre-up-and-running-you-may-want-to-go-further",level:2},{value:"You&#39;re extremely lucky and you have a fully supported keyboard",id:"youre-extremely-lucky-and-you-have-a-fully-supported-keyboard",level:3},{value:"You&#39;ve got another, maybe DIY, board and want to customize KMK for it",id:"youve-got-another-maybe-diy-board-and-want-to-customize-kmk-for-it",level:3},{value:"Additional help and support",id:"additional-help-and-support",level:2}],c={toc:s};function m(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Life was like a box of chocolates. You never know what you're gonna get.")),(0,o.kt)("p",null,"KMK is a keyboard focused layer that sits on top of ",(0,o.kt)("a",{parentName:"p",href:"https://circuitpython.org/"},"CircuitPython"),". As such, it should work with most ",(0,o.kt)("a",{parentName:"p",href:"https://circuitpython.org/downloads"},"boards that support CircuitPython"),". It is best to use the last stable version (>5.0).\nKnown working and recommended devices can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/Officially_Supported_Microcontrollers"},"here")),(0,o.kt)("h2",{id:"tldr-quick-start-guide"},"TL;DR Quick start guide"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"To infinity and beyond!"),(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://learn.adafruit.com/welcome-to-circuitpython/installing-circuitpython"},"Install CircuitPython on your board"),". With most boards, it should be as easy as drag and dropping the firmware on the drive"),(0,o.kt)("li",{parentName:"ol"},"Get a ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/KMKfw/kmk_firmware/archive/refs/heads/master.zip"},"copy of KMK")," from the master branch "),(0,o.kt)("li",{parentName:"ol"},"Unzip it and copy the KMK folder and the boot.py file at the root of the USB drive corresponding to your board (often appearing as CIRCUITPY)"),(0,o.kt)("li",{parentName:"ol"},"Create a new ",(0,o.kt)("em",{parentName:"li"},"code.py")," or ",(0,o.kt)("em",{parentName:"li"},"main.py")," file in the same root directory (same level as boot.py) with the example content hereunder: "))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"IMPORTANT:"))," adapt the GP0 / GP1 pins to your specific board ! "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"print(\"Starting\")\n\nimport board\n\nfrom kmk.kmk_keyboard import KMKKeyboard\nfrom kmk.keys import KC\nfrom kmk.scanners import DiodeOrientation\n\nkeyboard = KMKKeyboard()\n\nkeyboard.col_pins = (board.GP0,)    # try D5 on Feather, keeboar\nkeyboard.row_pins = (board.GP1,)    # try D6 on Feather, keeboar\nkeyboard.diode_orientation = DiodeOrientation.COL2ROW\n\nkeyboard.keymap = [\n    [KC.A,]\n]\n\nif __name__ == '__main__':\n    keyboard.go()\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"With a wire / paperclip / whatever, connect the pins you selected for col_pin and row_pin together.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"feather and keeboar example pins",src:r(4775).Z,width:"640",height:"616"})),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},'If it prints the letter "a" (or a "Q" or ... depending on your keyboard layout), you\'re done!')),(0,o.kt)("h2",{id:"now-that-youre-up-and-running-you-may-want-to-go-further"},"Now that you're up and running, you may want to go further..."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This is your last chance. After this, there is no turning back. You take the blue pill\u2014the story ends, you wake up in your bed and believe whatever you want to believe. You take the red pill\u2014you stay in Wonderland, and I show you how deep the rabbit hole goes. Remember: all I'm offering is the truth. Nothing more.")),(0,o.kt)("h3",{id:"youre-extremely-lucky-and-you-have-a-fully-supported-keyboard"},"You're extremely lucky and you have a fully supported keyboard"),(0,o.kt)("p",null,'If your keyboard and microcontroller are officially supported, simply visit the page for your files, and dropping them on the root of the "flash drive". Those pages can be found ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/KMKfw/kmk_firmware/tree/master/boards"},"here"),". You will need the ",(0,o.kt)("inlineCode",{parentName:"p"},"kb.py")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py"),". More advanced instructions can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/config_and_keymap"},"here"),"."),(0,o.kt)("h3",{id:"youve-got-another-maybe-diy-board-and-want-to-customize-kmk-for-it"},"You've got another, maybe DIY, board and want to customize KMK for it"),(0,o.kt)("p",null,"First, be sure to understand how your device work, and particularly its specific matrix configuration. You can have a look ",(0,o.kt)("a",{parentName:"p",href:"http://pcbheaven.com/wikipages/How_Key_Matrices_Works/"},"here")," or read the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.qmk.fm/#/hand_wire"},"guide")," provided by the QMK team for handwired keyboards\nOnce you've got the gist of it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You can have a look ",(0,o.kt)("a",{parentName:"li",href:"/docs/config_and_keymap"},"here")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/keys"},"here")," to start customizing your code.py / main.py file"),(0,o.kt)("li",{parentName:"ul"},"There's a ",(0,o.kt)("a",{parentName:"li",href:"/docs/keycodes"},"reference")," of the available keycodes"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/international"},"International")," extension adds keys for non US layouts and ",(0,o.kt)("a",{parentName:"li",href:"/docs/media_keys"},"Media Keys")," adds keys for ... media")),(0,o.kt)("p",null,"And to go even further:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/sequences"},"Sequences")," are used for sending multiple keystrokes in a single action"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/layers"},"Layers")," can transform the whole way your keyboard is behaving with a single touch"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/modtap"},"ModTap")," allow you to customize the way a key behaves whether it is tapped or hold, and ",(0,o.kt)("a",{parentName:"li",href:"/docs/tapdance"},"TapDance")," depending on the number of times it is pressed")),(0,o.kt)("p",null,"Want to have fun features such as RGB, split keyboards and more? Check out what builtin ",(0,o.kt)("a",{parentName:"p",href:"/docs/modules"},"modules")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/extensions"},"extensions")," can do!\nYou can also get ideas from the various ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/KMKfw/kmk_firmware/tree/master/user_keymaps"},"user examples")," that we provide and dig into our ",(0,o.kt)("a",{parentName:"p",href:"/docs/"},"documentation"),"."),(0,o.kt)("h2",{id:"additional-help-and-support"},"Additional help and support"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Roads? Where we're going we don't need roads.")),(0,o.kt)("p",null,"In case you need it, debugging help can be found ",(0,o.kt)("a",{parentName:"p",href:"/docs/debugging"},"here")),(0,o.kt)("p",null,"If you need support with KMK or just want to say hi, find us in\n",(0,o.kt)("a",{parentName:"p",href:"https://matrix.to/#/#kmkfw:klar.sh"},"#kmkfw:klar.sh on Matrix"),".  This channel is\nbridged to Discord ",(0,o.kt)("a",{parentName:"p",href:"https://discordapp.com/widget?id=493256121075761173&theme=dark"},"here"),"\nfor convenience. If you ask for help on chat or open a bug report, if possible\nplease give us your commit SHA, found by running\n",(0,o.kt)("inlineCode",{parentName:"p"},"from kmk.consts import KMK_RELEASE;  print(KMK_RELEASE)")," in the REPL on your\ncontroller."))}m.isMDXComponent=!0},4775:function(e,t,r){t.Z=r.p+"assets/images/pins56-4c44f1ec8981d234229f1cf1d812b046.jpg"}}]);