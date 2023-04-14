(self.webpackChunkreact_py_docs=self.webpackChunkreact_py_docs||[]).push([[550],{6505:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>u});var o=n(7462),a=n(7294),s=n(6010),r=n(6412),l=n(5281),c=n(7016);const i={codeBlockContainer:"codeBlockContainer_Ckt0"};function u(e){let{as:t,...n}=e;const u=(0,r.usePrismTheme)(),d=(0,c.getPrismCssVariables)(u);return a.createElement(t,(0,o.default)({},n,{style:d,className:(0,s.default)(n.className,i.codeBlockContainer,l.ThemeClassNames.common.codeBlock)}))}},1170:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>l});var o=n(7294),a=n(6010),s=n(6505),r=n(2944);function l(e){let{children:t,className:n}=e;return o.createElement(s.default,{as:"pre",tabIndex:0,className:(0,a.default)(r.default.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:r.default.codeBlockLines},t))}},5864:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var o=n(7462),a=n(7294),s=n(6010),r=n(6668),l=n(6412),c=n(7016),i=n(902);const u={attributes:!0,characterData:!0,childList:!0,subtree:!0};function d(e,t){const[n,o]=(0,a.useState)(),s=(0,a.useCallback)((()=>{o(e.current?.closest("[role=tabpanel][hidden]"))}),[e,o]);(0,a.useEffect)((()=>{s()}),[s]),function(e,t,n){void 0===n&&(n=u);const o=(0,i.useEvent)(t),s=(0,i.useShallowMemoObject)(n);(0,a.useEffect)((()=>{const t=new MutationObserver(o);return e&&t.observe(e,s),()=>t.disconnect()}),[e,o,s])}(n,(e=>{e.forEach((e=>{"attributes"===e.type&&"hidden"===e.attributeName&&(t(),s())}))}),{attributes:!0,characterData:!1,childList:!1,subtree:!1})}const p={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var m={Prism:n(7410).default,theme:p};function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function g(){return g=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},g.apply(this,arguments)}var h=/\r\n|\r|\n/,y=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},b=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function k(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}var v=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),f(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,o=Object.create(null),a=e.styles.reduce((function(e,n){var o=n.languages,a=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=g({},e[t],a);e[t]=n})),e}),o);return a.root=n,a.plain=g({},n,{backgroundColor:null}),a}(e.theme,e.language):void 0;return t.themeDict=n})),f(this,"getLineProps",(function(e){var n=e.key,o=e.className,a=e.style,s=g({},k(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),r=t.getThemeDict(t.props);return void 0!==r&&(s.style=r.plain),void 0!==a&&(s.style=void 0!==s.style?g({},s.style,a):a),void 0!==n&&(s.key=n),o&&(s.className+=" "+o),s})),f(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,a=n.length,s=t.getThemeDict(t.props);if(void 0!==s){if(1===a&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===a&&!o)return s[n[0]];var r=o?{display:"inline-block"}:{},l=n.map((function(e){return s[e]}));return Object.assign.apply(Object,[r].concat(l))}})),f(this,"getTokenProps",(function(e){var n=e.key,o=e.className,a=e.style,s=e.token,r=g({},k(e,["key","className","style","token"]),{className:"token "+s.types.join(" "),children:s.content,style:t.getStyleForToken(s),key:void 0});return void 0!==a&&(r.style=void 0!==r.style?g({},r.style,a):a),void 0!==n&&(r.key=n),o&&(r.className+=" "+o),r})),f(this,"tokenize",(function(e,t,n,o){var a={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",a);var s=a.tokens=e.tokenize(a.code,a.grammar,a.language);return e.hooks.run("after-tokenize",a),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,a=e.children,s=this.getThemeDict(this.props),r=t.languages[n];return a({tokens:function(e){for(var t=[[]],n=[e],o=[0],a=[e.length],s=0,r=0,l=[],c=[l];r>-1;){for(;(s=o[r]++)<a[r];){var i=void 0,u=t[r],d=n[r][s];if("string"==typeof d?(u=r>0?u:["plain"],i=d):(u=b(u,d.type),d.alias&&(u=b(u,d.alias)),i=d.content),"string"==typeof i){var p=i.split(h),m=p.length;l.push({types:u,content:p[0]});for(var f=1;f<m;f++)y(l),c.push(l=[]),l.push({types:u,content:p[f]})}else r++,t.push(u),n.push(i),o.push(0),a.push(i.length)}r--,t.pop(),n.pop(),o.pop(),a.pop()}return y(l),c}(void 0!==r?this.tokenize(t,o,r,n):[o]),className:"prism-code language-"+n,style:void 0!==s?s.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(a.Component);const E=v,N={codeLine:"codeLine_lJS_",codeLineNumber:"codeLineNumber_Tfdd",codeLineContent:"codeLineContent_feaV"};function B(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:l,getTokenProps:c}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=l({line:t,className:(0,s.default)(n,r&&N.codeLine)}),u=t.map(((e,t)=>a.createElement("span",(0,o.default)({key:t},c({token:e,key:t})))));return a.createElement("span",i,r?a.createElement(a.Fragment,null,a.createElement("span",{className:N.codeLineNumber}),a.createElement("span",{className:N.codeLineContent},u)):u,a.createElement("br",null))}var C=n(5999);const w={copyButtonCopied:"copyButtonCopied_obH4",copyButtonIcons:"copyButtonIcons_eSgA",copyButtonIcon:"copyButtonIcon_y97N",copyButtonSuccessIcon:"copyButtonSuccessIcon_LjdS"};function L(e){let{code:t,className:n}=e;const[o,r]=(0,a.useState)(!1),l=(0,a.useRef)(void 0),c=(0,a.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const o=document.createElement("textarea"),a=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const s=document.getSelection(),r=s.rangeCount>0&&s.getRangeAt(0);n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}o.remove(),r&&(s.removeAllRanges(),s.addRange(r)),a&&a.focus()}(t),r(!0),l.current=window.setTimeout((()=>{r(!1)}),1e3)}),[t]);return(0,a.useEffect)((()=>()=>window.clearTimeout(l.current)),[]),a.createElement("button",{type:"button","aria-label":o?(0,C.translate)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,C.translate)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,C.translate)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.default)("clean-btn",n,w.copyButton,o&&w.copyButtonCopied),onClick:c},a.createElement("span",{className:w.copyButtonIcons,"aria-hidden":"true"},a.createElement("svg",{className:w.copyButtonIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),a.createElement("svg",{className:w.copyButtonSuccessIcon,viewBox:"0 0 24 24"},a.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const T={wordWrapButtonIcon:"wordWrapButtonIcon_Bwma",wordWrapButtonEnabled:"wordWrapButtonEnabled_EoeP"};function j(e){let{className:t,onClick:n,isEnabled:o}=e;const r=(0,C.translate)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return a.createElement("button",{type:"button",onClick:n,className:(0,s.default)("clean-btn",t,o&&T.wordWrapButtonEnabled),"aria-label":r,title:r},a.createElement("svg",{className:T.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true"},a.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}var _=n(6505),S=n(2944);function x(e){let{children:t,className:n="",metastring:i,title:u,showLineNumbers:p,language:f}=e;const{prism:{defaultLanguage:g,magicComments:h}}=(0,r.useThemeConfig)(),y=f??(0,c.parseLanguage)(n)??g,b=(0,l.usePrismTheme)(),k=function(){const[e,t]=(0,a.useState)(!1),[n,o]=(0,a.useState)(!1),s=(0,a.useRef)(null),r=(0,a.useCallback)((()=>{const n=s.current.querySelector("code");e?n.removeAttribute("style"):(n.style.whiteSpace="pre-wrap",n.style.overflowWrap="anywhere"),t((e=>!e))}),[s,e]),l=(0,a.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=s.current,n=e>t||s.current.querySelector("code").hasAttribute("style");o(n)}),[s]);return d(s,l),(0,a.useEffect)((()=>{l()}),[e,l]),(0,a.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:s,isEnabled:e,isCodeScrollable:n,toggle:r}}(),v=(0,c.parseCodeBlockTitle)(i)||u,{lineClassNames:N,code:C}=(0,c.parseLines)(t,{metastring:i,language:y,magicComments:h}),w=p??(0,c.containsLineNumbers)(i);return a.createElement(_.default,{as:"div",className:(0,s.default)(n,y&&!n.includes(`language-${y}`)&&`language-${y}`)},v&&a.createElement("div",{className:S.default.codeBlockTitle},v),a.createElement("div",{className:S.default.codeBlockContent},a.createElement(E,(0,o.default)({},m,{theme:b,code:C,language:y??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:r}=e;return a.createElement("pre",{tabIndex:0,ref:k.codeBlockRef,className:(0,s.default)(t,S.default.codeBlock,"thin-scrollbar")},a.createElement("code",{className:(0,s.default)(S.default.codeBlockLines,w&&S.default.codeBlockLinesWithNumbering)},n.map(((e,t)=>a.createElement(B,{key:t,line:e,getLineProps:o,getTokenProps:r,classNames:N[t],showLineNumbers:w})))))})),a.createElement("div",{className:S.default.buttonGroup},(k.isEnabled||k.isCodeScrollable)&&a.createElement(j,{className:S.default.codeButton,onClick:()=>k.toggle(),isEnabled:k.isEnabled}),a.createElement(L,{className:S.default.codeButton,code:C}))))}},4673:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>f});var o=n(7462),a=n(7294),s=n(6010),r=n(2389),l=n(6043);const c={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function i(e){return!!e&&("SUMMARY"===e.tagName||i(e.parentElement))}function u(e,t){return!!e&&(e===t||u(e.parentElement,t))}function d(e){let{summary:t,children:n,...d}=e;const p=(0,r.default)(),m=(0,a.useRef)(null),{collapsed:f,setCollapsed:g}=(0,l.useCollapsible)({initialState:!d.open}),[h,y]=(0,a.useState)(d.open),b=a.isValidElement(t)?t:a.createElement("summary",null,t??"Details");return a.createElement("details",(0,o.default)({},d,{ref:m,open:h,"data-collapsed":f,className:(0,s.default)(c.details,p&&c.isBrowser,d.className),onMouseDown:e=>{i(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;i(t)&&u(t,m.current)&&(e.preventDefault(),f?(g(!1),y(!0)):g(!0))}}),b,a.createElement(l.Collapsible,{lazy:!1,collapsed:f,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{g(e),y(!e)}},a.createElement("div",{className:c.collapsibleContent},n)))}const p={details:"details_b_Ee"},m="alert alert--info";function f(e){let{...t}=e;return a.createElement(d,(0,o.default)({},t,{className:(0,s.default)(m,p.details,t.className)}))}},6412:(e,t,n)=>{"use strict";n.r(t),n.d(t,{usePrismTheme:()=>s});var o=n(2949),a=n(6668);function s(){const{prism:e}=(0,a.useThemeConfig)(),{colorMode:t}=(0,o.useColorMode)(),n=e.theme,s=e.darkTheme||n;return"dark"===t?s:n}},7016:(e,t,n)=>{"use strict";n.r(t),n.d(t,{containsLineNumbers:()=>u,getPrismCssVariables:()=>m,parseCodeBlockTitle:()=>i,parseLanguage:()=>d,parseLines:()=>p});var o=n(7594),a=n.n(o);const s=/title=(?<quote>["'])(?<title>.*?)\1/,r=/\{(?<range>[\d,-]+)\}/,l={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function c(e,t){const n=e.map((e=>{const{start:n,end:o}=l[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function i(e){return e?.match(s)?.groups.title??""}function u(e){return Boolean(e?.includes("showLineNumbers"))}function d(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}function p(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:s,metastring:i}=t;if(i&&r.test(i)){const e=i.match(r).groups.range;if(0===s.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${i}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=s[0].className,o=a()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const u=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return c(["js","jsBlock"],t);case"jsx":case"tsx":return c(["js","jsBlock","jsx"],t);case"html":return c(["js","jsBlock","html"],t);case"python":case"py":case"bash":return c(["bash"],t);case"markdown":case"md":return c(["html","jsx","bash"],t);default:return c(Object.keys(l),t)}}(o,s),d=n.split("\n"),p=Object.fromEntries(s.map((e=>[e.className,{start:0,range:""}]))),m=Object.fromEntries(s.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),f=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),g=Object.fromEntries(s.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let a=0;a<d.length;){const e=d[a].match(u);if(!e){a+=1;continue}const t=e.slice(1).find((e=>void 0!==e));m[t]?p[m[t]].range+=`${a},`:f[t]?p[f[t]].start=a:g[t]&&(p[g[t]].range+=`${p[g[t]].start}-${a-1},`),d.splice(a,1)}n=d.join("\n");const h={};return Object.entries(p).forEach((e=>{let[t,{range:n}]=e;a()(n).forEach((e=>{h[e]??=[],h[e].push(t)}))})),{lineClassNames:h,code:n}}function m(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,a]=e;const s=t[o];s&&"string"==typeof a&&(n[s]=a)})),n}},2944:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>o});const o={codeBlockContent:"codeBlockContent_biex",codeBlockTitle:"codeBlockTitle_Ktv7",codeBlock:"codeBlock_bY9V",codeBlockStandalone:"codeBlockStandalone_MEMb",codeBlockLines:"codeBlockLines_e6Vv",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_o6Pm",buttonGroup:"buttonGroup__atx"}},7594:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,a,s]=t;if(o&&s){o=parseInt(o),s=parseInt(s);const e=o<s?1:-1;"-"!==a&&".."!==a&&"\u2025"!==a||(s+=e);for(let t=o;t!==s;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);