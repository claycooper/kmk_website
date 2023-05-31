"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[8610],{4118:(e,t,a)=>{a.d(t,{Z:()=>h});var l=a(7294),r=a(6010),n=a(8277),s=a(9960),o=a(5999);const i={sidebar:"sidebar_TMXw",sidebarItemTitle:"sidebarItemTitle_V4zb",sidebarItemList:"sidebarItemList_uHd5",sidebarItem:"sidebarItem_spIe",sidebarItemLink:"sidebarItemLink_eqrF",sidebarItemLinkActive:"sidebarItemLinkActive_XZSJ"};function m(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.Z)(i.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.Z)(i.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.Z)(i.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:i.sidebarItem},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:i.sidebarItemLink,activeClassName:i.sidebarItemLinkActive},e.title)))))))}var c=a(3102);function u(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return l.createElement(c.Zo,{component:u,props:e})}var d=a(7524);function p(e){let{sidebar:t}=e;const a=(0,d.i)();return t?.items.length?"mobile"===a?l.createElement(g,{sidebar:t}):l.createElement(m,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:s,...o}=e,i=t&&t.items.length>0;return l.createElement(n.Z,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,r.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},8208:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(5999),n=a(1750);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.Z,{permalink:a,title:l.createElement(r.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(n.Z,{permalink:s,title:l.createElement(r.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},6244:(e,t,a)=>{a.d(t,{Z:()=>f});var l=a(7294),r=a(6010),n=a(5999),s=a(9960),o=a(4996),i=a(8824),m=a(8780),c=a(5290),u=a(6753);const g={blogPostTitle:"blogPostTitle_rzP5",blogPostData:"blogPostData_Zg1s",blogPostDetailsFull:"blogPostDetailsFull_h6_j"};var d=a(62);function p(e){return e.href?l.createElement(s.Z,e):l.createElement(l.Fragment,null,e.children)}function h(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:s,email:o}=t,i=n||o&&`mailto:${o}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(p,{href:i,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(p,{href:i,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const b={authorCol:"authorCol_FlmR",imageOnlyAuthorRow:"imageOnlyAuthorRow_trpF",imageOnlyAuthorCol:"imageOnlyAuthorCol_S2np"};function E(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.Z)("margin-top--md margin-bottom--sm",n?b.imageOnlyAuthorRow:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,r.Z)(!n&&"col col--6",n?b.imageOnlyAuthorCol:b.authorCol),key:t},l.createElement(h,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}function f(e){const t=function(){const{selectMessage:e}=(0,i.c)();return t=>{const a=Math.ceil(t);return e(a,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,o.C)(),{children:p,frontMatter:h,assets:b,metadata:f,truncated:v,isBlogPostPage:N=!1}=e,{date:P,formattedDate:Z,permalink:_,tags:k,readingTime:I,title:T,editUrl:w,authors:y}=f,L=b.image??h.image,A=!N&&v,F=k.length>0,M=N?"h1":"h2";return l.createElement("article",{className:N?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(M,{className:g.blogPostTitle,itemProp:"headline"},N?T:l.createElement(s.Z,{itemProp:"url",to:_},T)),l.createElement("div",{className:(0,r.Z)(g.blogPostData,"margin-vert--md")},l.createElement("time",{dateTime:P,itemProp:"datePublished"},Z),void 0!==I&&l.createElement(l.Fragment,null," \xb7 ",t(I))),l.createElement(E,{authors:y,assets:b})),L&&l.createElement("meta",{itemProp:"image",content:a(L,{absolute:!0})}),l.createElement("div",{id:N?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.Z,null,p)),(F||v)&&l.createElement("footer",{className:(0,r.Z)("row docusaurus-mt-lg",N&&g.blogPostDetailsFull)},F&&l.createElement("div",{className:(0,r.Z)("col",{"col--9":A})},l.createElement(d.Z,{tags:k})),N&&w&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(u.Z,{editUrl:w})),A&&l.createElement("div",{className:(0,r.Z)("col text--right",{"col--3":F})},l.createElement(s.Z,{to:f.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:T})},l.createElement("b",null,l.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(7294),r=a(9960),n=a(4118),s=a(6244),o=a(5999),i=a(8824),m=a(1944),c=a(5281),u=a(8208),g=a(4739),d=a(6010);function p(e){let{tag:t,items:a,sidebar:p,listMetadata:h}=e;const b=function(){const{selectMessage:e}=(0,i.c)();return t=>e(t,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),E=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:b(t.count),tagName:t.label});return l.createElement(m.FG,{className:(0,d.Z)(c.k.wrapper.blogPages,c.k.page.blogTagPostListPage)},l.createElement(m.d,{title:E}),l.createElement(g.Z,{tag:"blog_tags_posts"}),l.createElement(n.Z,{sidebar:p},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,E),l.createElement(r.Z,{href:t.allTagsPath},l.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return l.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})),l.createElement(u.Z,{metadata:h})))}},8824:(e,t,a)=>{a.d(t,{c:()=>m});var l=a(7294),r=a(2263);const n=["zero","one","two","few","many","other"];function s(e){return n.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function i(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function m(){const e=i();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms}), but the message contains ${l.length}: ${e}`);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);