(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"76ZC":function(e,t,n){var r=n("GkXj"),a=n("qpZ2"),i=n("NqZG"),o={lowerCaseAttributeNames:!1};function l(e,t){if("string"!=typeof e)throw new TypeError("First argument must be a string");return""===e?[]:r(i(e,(t=t||{}).htmlparser2||o),t)}l.domToReact=r,l.htmlToDOM=i,l.attributesToProps=a,e.exports=l,e.exports.default=l},"7GRD":function(e,t){e.exports={CASE_SENSITIVE_TAG_NAMES:["animateMotion","animateTransform","clipPath","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussainBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","foreignObject","linearGradient","radialGradient","textPath"]}},CC3I:function(e,t,n){var r=n("Lc7W");e.exports=function(e,t){var n,a=null;if(!e||"string"!=typeof e)return a;for(var i,o,l=r(e),s="function"==typeof t,c=0,u=l.length;c<u;c++)i=(n=l[c]).property,o=n.value,s?t(i,o,n):o&&(a||(a={}),a[i]=o);return a}},DjNW:function(e,t,n){for(var r,a=n("7GRD"),i=n("oIDm"),o=a.CASE_SENSITIVE_TAG_NAMES,l=i.Comment,s=i.Element,c=i.ProcessingInstruction,u=i.Text,p={},f=0,m=o.length;f<m;f++)r=o[f],p[r.toLowerCase()]=r;function h(e){for(var t,n={},r=0,a=e.length;r<a;r++)n[(t=e[r]).name]=t.value;return n}function d(e){var t=function(e){return p[e]}(e=e.toLowerCase());return t||e}e.exports={formatAttributes:h,formatDOM:function e(t,n,r){n=n||null;for(var a=[],i=0,o=t.length;i<o;i++){var p,f=t[i];switch(f.nodeType){case 1:(p=new s(d(f.nodeName),h(f.attributes))).children=e(f.childNodes,p);break;case 3:p=new u(f.nodeValue);break;case 8:p=new l(f.nodeValue);break;default:continue}var m=a[i-1]||null;m&&(m.next=p),p.parent=n,p.prev=m,p.next=null,a.push(p)}return r&&((p=new c(r.substring(0,r.indexOf(" ")).toLowerCase(),r)).next=a[0]||null,p.parent=n,a.unshift(p),a[1]&&(a[1].prev=a[0])),a},isIE:function(){return/(MSIE |Trident\/|Edge\/)/.test(navigator.userAgent)}}},GkXj:function(e,t,n){var r=n("q1tI"),a=n("qpZ2"),i=n("MHQ9"),o=i.setStyleProp;function l(e){return i.PRESERVE_CUSTOM_ATTRIBUTES&&"tag"===e.type&&i.isCustomComponent(e.name,e.attribs)}e.exports=function e(t,n){for(var i,s,c,u,p=(n=n||{}).library||r,f=p.cloneElement,m=p.createElement,h=p.isValidElement,d=[],g="function"==typeof n.replace,v=n.trim,y=0,b=t.length;y<b;y++)if(i=t[y],g&&h(s=n.replace(i)))b>1&&(s=f(s,{key:s.key||y})),d.push(s);else if("text"!==i.type){switch(c=i.attribs,l(i)?o(c.style,c):c&&(c=a(c)),u=null,i.type){case"script":case"style":i.children[0]&&(c.dangerouslySetInnerHTML={__html:i.children[0].data});break;case"tag":"textarea"===i.name&&i.children[0]?c.defaultValue=i.children[0].data:i.children&&i.children.length&&(u=e(i.children,n));break;default:continue}b>1&&(c.key=y),d.push(m(i.name,c,u))}else v?i.data.trim()&&d.push(i.data):d.push(i.data);return 1===d.length?d[0]:d}},Lc7W:function(e,t){var n=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,r=/\n/g,a=/^\s*/,i=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,o=/^:\s*/,l=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,s=/^[;\s]*/,c=/^\s+|\s+$/g;function u(e){return e?e.replace(c,""):""}e.exports=function(e,t){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var c=1,p=1;function f(e){var t=e.match(r);t&&(c+=t.length);var n=e.lastIndexOf("\n");p=~n?e.length-n:p+e.length}function m(){var e={line:c,column:p};return function(t){return t.position=new h(e),y(),t}}function h(e){this.start=e,this.end={line:c,column:p},this.source=t.source}h.prototype.content=e;var d=[];function g(n){var r=new Error(t.source+":"+c+":"+p+": "+n);if(r.reason=n,r.filename=t.source,r.line=c,r.column=p,r.source=e,!t.silent)throw r;d.push(r)}function v(t){var n=t.exec(e);if(n){var r=n[0];return f(r),e=e.slice(r.length),n}}function y(){v(a)}function b(e){var t;for(e=e||[];t=x();)!1!==t&&e.push(t);return e}function x(){var t=m();if("/"==e.charAt(0)&&"*"==e.charAt(1)){for(var n=2;""!=e.charAt(n)&&("*"!=e.charAt(n)||"/"!=e.charAt(n+1));)++n;if(n+=2,""===e.charAt(n-1))return g("End of comment missing");var r=e.slice(2,n-2);return p+=2,f(r),e=e.slice(n),p+=2,t({type:"comment",comment:r})}}function k(){var e=m(),t=v(i);if(t){if(x(),!v(o))return g("property missing ':'");var r=v(l),a=e({type:"declaration",property:u(t[0].replace(n,"")),value:r?u(r[0].replace(n,"")):""});return v(s),a}}return y(),function(){var e,t=[];for(b(t);e=k();)!1!==e&&(t.push(e),b(t));return t}()}},MHQ9:function(e,t,n){var r=n("q1tI"),a=n("mwSz").default;var i={reactCompat:!0};var o=r.version.split(".")[0]>=16;e.exports={PRESERVE_CUSTOM_ATTRIBUTES:o,invertObject:function(e,t){if(!e||"object"!=typeof e)throw new TypeError("First argument must be an object");var n,r,a="function"==typeof t,i={},o={};for(n in e)r=e[n],a&&(i=t(n,r))&&2===i.length?o[i[0]]=i[1]:"string"==typeof r&&(o[r]=n);return o},isCustomComponent:function(e,t){if(-1===e.indexOf("-"))return t&&"string"==typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}},setStyleProp:function(e,t){null!=e&&(t.style=a(e,i))}}},"N3/Y":function(e,t){e.exports={MUST_USE_PROPERTY:1,HAS_BOOLEAN_VALUE:4,HAS_NUMERIC_VALUE:8,HAS_POSITIVE_NUMERIC_VALUE:24,HAS_OVERLOADED_BOOLEAN_VALUE:32}},NqZG:function(e,t,n){var r=n("xPsL"),a=n("DjNW").formatDOM,i=/<(![a-zA-Z\s]+)>/;e.exports=function(e){if("string"!=typeof e)throw new TypeError("First argument must be a string");if(""===e)return[];var t,n=e.match(i);return n&&n[1]&&(t=n[1]),a(r(e),null,t)}},QSOs:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r),i=n("Wbzz"),o=n("LjBS"),l=n.n(o);t.a=function(e){var t=Object(r.useRef)(),n=Object(r.useState)(!1),o=n[0],s=n[1],c=["Home","About-the-Author","About-the-Book","Contact"].map((function(e){var t=e.replace(/[ /]/g,"-").trim().toLowerCase(),n="home"===t?"/":"/"+t;return a.a.createElement("li",null,a.a.createElement(i.Link,{to:n},e.replace(/[-/]/g," ").trim()))})),u=function(e){s(!o)};return a.a.createElement(a.a.Fragment,null,a.a.createElement("nav",{className:"navigation"},a.a.createElement("li",null,a.a.createElement(i.Link,{to:"/"},"Home")),a.a.createElement("li",null,a.a.createElement(i.Link,{to:"/about-the-author"},"About the Author")),a.a.createElement("li",null,a.a.createElement(i.Link,{to:"/"},a.a.createElement("img",{alt:"author-logo",src:l.a}))),a.a.createElement("li",null,a.a.createElement(i.Link,{to:"/about-the-book"},"About the Book")),a.a.createElement("li",null,a.a.createElement(i.Link,{to:"/contact"},"Contact"))),a.a.createElement("nav",{className:"burger-nav"},a.a.createElement("h1",null,a.a.createElement(i.Link,{style:"/"===e.pathExt||""===e.pathExt?{color:"rgb(255, 202, 0)"}:{color:"#000"},to:"/"},a.a.createElement("img",{className:"logo-img",src:l.a,alt:"logo"}))),a.a.createElement("ul",{className:"hamburger-ul",onClick:function(e){return u()},ref:t},a.a.createElement("span",{className:"hamburger-span"}),a.a.createElement("span",{className:"hamburger-span"})),a.a.createElement("section",{className:o?"active-nav":"non-active-nav"},a.a.createElement("span",{className:"close-mark",onClick:function(e){return u()}},a.a.createElement("span",{className:"hamburger-x-mark"}),a.a.createElement("span",{className:"hamburger-x-mark"})),a.a.createElement("ul",null,a.a.createElement("p",{class:"list-label"},"Navigations"),c))))}},"eKC+":function(e,t,n){var r=n("nYr6"),a=n("xp0l"),i=n("N3/Y"),o=i.MUST_USE_PROPERTY,l=i.HAS_BOOLEAN_VALUE,s=i.HAS_NUMERIC_VALUE,c=i.HAS_POSITIVE_NUMERIC_VALUE,u=i.HAS_OVERLOADED_BOOLEAN_VALUE;function p(e,t){return(e&t)===t}function f(e,t,n){var r,a,i,f=e.Properties,m=e.DOMAttributeNames;for(a in f)r=m[a]||(n?a:a.toLowerCase()),i=f[a],t[r]={attributeName:r,propertyName:a,mustUseProperty:p(i,o),hasBooleanValue:p(i,l),hasNumericValue:p(i,s),hasPositiveNumericValue:p(i,c),hasOverloadedBooleanValue:p(i,u)}}var m={};f(r,m);var h={};f(a,h,!0);var d={};f(r,d),f(a,d,!0);e.exports={html:m,svg:h,properties:d,isCustomAttribute:RegExp.prototype.test.bind(new RegExp("^(data|aria)-[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"))}},mwSz:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};t.__esModule=!0;var a=r(n("CC3I")),i=n("vhTo");t.default=function(e,t){var n={};return e&&"string"==typeof e?(a.default(e,(function(e,r){e&&r&&(n[i.camelCase(e,t)]=r)})),n):n}},nYr6:function(e,t){e.exports={Properties:{autoFocus:4,accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:4,allowTransparency:0,alt:0,as:0,async:4,autoComplete:0,autoPlay:4,capture:4,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:5,cite:0,classID:0,className:0,cols:24,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:4,controlsList:0,coords:0,crossOrigin:0,data:0,dateTime:0,default:4,defer:4,dir:0,disabled:4,download:32,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:4,formTarget:0,frameBorder:0,headers:0,height:0,hidden:4,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:4,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0,multiple:5,muted:5,name:0,nonce:0,noValidate:4,open:4,optimum:0,pattern:0,placeholder:0,playsInline:4,poster:0,preload:0,profile:0,radioGroup:0,readOnly:4,referrerPolicy:0,rel:0,required:4,reversed:4,role:0,rows:24,rowSpan:8,sandbox:0,scope:0,scoped:4,scrolling:0,seamless:4,selected:5,shape:0,size:24,sizes:0,span:24,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:8,step:0,style:0,summary:0,tabIndex:0,target:0,title:0,type:0,useMap:0,value:0,width:0,wmode:0,wrap:0,about:0,datatype:0,inlist:0,prefix:0,property:0,resource:0,typeof:0,vocab:0,autoCapitalize:0,autoCorrect:0,autoSave:0,color:0,itemProp:0,itemScope:4,itemType:0,itemID:0,itemRef:0,results:0,security:0,unselectable:0},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"}}},oIDm:function(e,t,n){"use strict";var r,a=this&&this.__extends||(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),i=this&&this.__assign||function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var a in t=arguments[n])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.cloneNode=t.Element=t.Document=t.NodeWithChildren=t.ProcessingInstruction=t.Comment=t.Text=t.DataNode=t.Node=void 0;var o=new Map([["tag",1],["script",1],["style",1],["directive",1],["text",3],["cdata",4],["comment",8],["root",9]]),l=function(){function e(e){this.type=e,this.parent=null,this.prev=null,this.next=null,this.startIndex=null,this.endIndex=null}return Object.defineProperty(e.prototype,"nodeType",{get:function(){var e;return null!==(e=o.get(this.type))&&void 0!==e?e:1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parentNode",{get:function(){return this.parent},set:function(e){this.parent=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"previousSibling",{get:function(){return this.prev},set:function(e){this.prev=e},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"nextSibling",{get:function(){return this.next},set:function(e){this.next=e},enumerable:!1,configurable:!0}),e.prototype.cloneNode=function(e){return void 0===e&&(e=!1),d(this,e)},e}();t.Node=l;var s=function(e){function t(t,n){var r=e.call(this,t)||this;return r.data=n,r}return a(t,e),Object.defineProperty(t.prototype,"nodeValue",{get:function(){return this.data},set:function(e){this.data=e},enumerable:!1,configurable:!0}),t}(l);t.DataNode=s;var c=function(e){function t(t){return e.call(this,"text",t)||this}return a(t,e),t}(s);t.Text=c;var u=function(e){function t(t){return e.call(this,"comment",t)||this}return a(t,e),t}(s);t.Comment=u;var p=function(e){function t(t,n){var r=e.call(this,"directive",n)||this;return r.name=t,r}return a(t,e),t}(s);t.ProcessingInstruction=p;var f=function(e){function t(t,n){var r=e.call(this,t)||this;return r.children=n,r}return a(t,e),Object.defineProperty(t.prototype,"firstChild",{get:function(){var e;return null!==(e=this.children[0])&&void 0!==e?e:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"lastChild",{get:function(){return this.children.length>0?this.children[this.children.length-1]:null},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"childNodes",{get:function(){return this.children},set:function(e){this.children=e},enumerable:!1,configurable:!0}),t}(l);t.NodeWithChildren=f;var m=function(e){function t(t){return e.call(this,"root",t)||this}return a(t,e),t}(f);t.Document=m;var h=function(e){function t(t,n,r){void 0===r&&(r=[]);var a=e.call(this,"script"===t?"script":"style"===t?"style":"tag",r)||this;return a.name=t,a.attribs=n,a.attribs=n,a}return a(t,e),Object.defineProperty(t.prototype,"tagName",{get:function(){return this.name},set:function(e){this.name=e},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"attributes",{get:function(){var e=this;return Object.keys(this.attribs).map((function(t){var n,r;return{name:t,value:e.attribs[t],namespace:null===(n=e["x-attribsNamespace"])||void 0===n?void 0:n[t],prefix:null===(r=e["x-attribsPrefix"])||void 0===r?void 0:r[t]}}))},enumerable:!1,configurable:!0}),t}(f);function d(e,t){var n;switch(void 0===t&&(t=!1),e.type){case"text":n=new c(e.data);break;case"directive":var r=e;n=new p(r.name,r.data),null!=r["x-name"]&&(n["x-name"]=r["x-name"],n["x-publicId"]=r["x-publicId"],n["x-systemId"]=r["x-systemId"]);break;case"comment":n=new u(e.data);break;case"tag":case"script":case"style":var a=e,o=t?g(a.children):[],l=new h(a.name,i({},a.attribs),o);o.forEach((function(e){return e.parent=l})),a["x-attribsNamespace"]&&(l["x-attribsNamespace"]=i({},a["x-attribsNamespace"])),a["x-attribsPrefix"]&&(l["x-attribsPrefix"]=i({},a["x-attribsPrefix"])),n=l;break;case"cdata":o=t?g(e.children):[];var s=new f(e.type,o);o.forEach((function(e){return e.parent=s})),n=s;break;case"root":var d=e,v=(o=t?g(d.children):[],new m(o));o.forEach((function(e){return e.parent=v})),d["x-mode"]&&(v["x-mode"]=d["x-mode"]),n=v;break;case"doctype":throw new Error("Not implemented yet: ElementType.Doctype case")}return n.startIndex=e.startIndex,n.endIndex=e.endIndex,n}function g(e){for(var t=e.map((function(e){return d(e,!0)})),n=1;n<t.length;n++)t[n].prev=t[n-1],t[n-1].next=t[n];return t}t.Element=h,t.cloneNode=d},qpZ2:function(e,t,n){var r=n("eKC+"),a=n("MHQ9"),i=a.setStyleProp,o=r.html,l=r.svg,s=r.isCustomAttribute,c=Object.prototype.hasOwnProperty;e.exports=function(e){var t,n,r,u;e=e||{};var p={};for(t in e)r=e[t],s(t)?p[t]=r:(n=t.toLowerCase(),c.call(o,n)?p[(u=o[n]).propertyName]=!!(u.hasBooleanValue||u.hasOverloadedBooleanValue&&!r)||r:c.call(l,t)?p[(u=l[t]).propertyName]=r:a.PRESERVE_CUSTOM_ATTRIBUTES&&(p[t]=r));return i(e.style,p),p}},rai8:function(e,t,n){"use strict";var r=n("q1tI"),a=n.n(r);t.a=function(e){return a.a.createElement(a.a.Fragment,null,a.a.createElement("section",{className:"web-banner"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"wrapper-ds"},a.a.createElement("span",null,e.spanFirst),a.a.createElement("h1",null,e.contextHeading)))))}},vhTo:function(e,t,n){"use strict";t.__esModule=!0,t.camelCase=void 0;var r=/^--[a-zA-Z0-9-]+$/,a=/-([a-z])/g,i=/^[^-]+$/,o=/^-(webkit|moz|ms|o|khtml)-/,l=function(e,t){return t.toUpperCase()},s=function(e,t){return t+"-"};t.camelCase=function(e,t){return void 0===t&&(t={}),function(e){return!e||i.test(e)||r.test(e)}(e)?e:(e=e.toLowerCase(),t.reactCompat||(e=e.replace(o,s)),e.replace(a,l))}},xPsL:function(e,t,n){var r=/<([a-zA-Z]+[0-9]?)/,a=/<head.*>/i,i=/<body.*>/i,o=function(){throw new Error("This browser does not support `document.implementation.createHTMLDocument`")},l=function(){throw new Error("This browser does not support `DOMParser.prototype.parseFromString`")};if("function"==typeof window.DOMParser){var s=new window.DOMParser;o=l=function(e,t){return t&&(e="<"+t+">"+e+"</"+t+">"),s.parseFromString(e,"text/html")}}if(document.implementation){var c=n("DjNW").isIE,u=document.implementation.createHTMLDocument(c()?"html-dom-parser":void 0);o=function(e,t){return t?(u.documentElement.getElementsByTagName(t)[0].innerHTML=e,u):(u.documentElement.innerHTML=e,u)}}var p,f=document.createElement("template");f.content&&(p=function(e){return f.innerHTML=e,f.content.childNodes}),e.exports=function(e){var t,n,s,c,u=e.match(r);switch(u&&u[1]&&(t=u[1].toLowerCase()),t){case"html":return n=l(e),a.test(e)||(s=n.getElementsByTagName("head")[0])&&s.parentNode.removeChild(s),i.test(e)||(s=n.getElementsByTagName("body")[0])&&s.parentNode.removeChild(s),n.getElementsByTagName("html");case"head":case"body":return c=o(e).getElementsByTagName(t),i.test(e)&&a.test(e)?c[0].parentNode.childNodes:c;default:return p?p(e):o(e,"body").getElementsByTagName("body")[0].childNodes}}},xp0l:function(e,t){e.exports={Properties:{accentHeight:0,accumulate:0,additive:0,alignmentBaseline:0,allowReorder:0,alphabetic:0,amplitude:0,arabicForm:0,ascent:0,attributeName:0,attributeType:0,autoReverse:0,azimuth:0,baseFrequency:0,baseProfile:0,baselineShift:0,bbox:0,begin:0,bias:0,by:0,calcMode:0,capHeight:0,clip:0,clipPath:0,clipRule:0,clipPathUnits:0,colorInterpolation:0,colorInterpolationFilters:0,colorProfile:0,colorRendering:0,contentScriptType:0,contentStyleType:0,cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:0,direction:0,display:0,divisor:0,dominantBaseline:0,dur:0,dx:0,dy:0,edgeMode:0,elevation:0,enableBackground:0,end:0,exponent:0,externalResourcesRequired:0,fill:0,fillOpacity:0,fillRule:0,filter:0,filterRes:0,filterUnits:0,floodColor:0,floodOpacity:0,focusable:0,fontFamily:0,fontSize:0,fontSizeAdjust:0,fontStretch:0,fontStyle:0,fontVariant:0,fontWeight:0,format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:0,glyphOrientationHorizontal:0,glyphOrientationVertical:0,glyphRef:0,gradientTransform:0,gradientUnits:0,hanging:0,horizAdvX:0,horizOriginX:0,ideographic:0,imageRendering:0,in:0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:0,kernelUnitLength:0,kerning:0,keyPoints:0,keySplines:0,keyTimes:0,lengthAdjust:0,letterSpacing:0,lightingColor:0,limitingConeAngle:0,local:0,markerEnd:0,markerMid:0,markerStart:0,markerHeight:0,markerUnits:0,markerWidth:0,mask:0,maskContentUnits:0,maskUnits:0,mathematical:0,mode:0,numOctaves:0,offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:0,overlineThickness:0,paintOrder:0,panose1:0,pathLength:0,patternContentUnits:0,patternTransform:0,patternUnits:0,pointerEvents:0,points:0,pointsAtX:0,pointsAtY:0,pointsAtZ:0,preserveAlpha:0,preserveAspectRatio:0,primitiveUnits:0,r:0,radius:0,refX:0,refY:0,renderingIntent:0,repeatCount:0,repeatDur:0,requiredExtensions:0,requiredFeatures:0,restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:0,slope:0,spacing:0,specularConstant:0,specularExponent:0,speed:0,spreadMethod:0,startOffset:0,stdDeviation:0,stemh:0,stemv:0,stitchTiles:0,stopColor:0,stopOpacity:0,strikethroughPosition:0,strikethroughThickness:0,string:0,stroke:0,strokeDasharray:0,strokeDashoffset:0,strokeLinecap:0,strokeLinejoin:0,strokeMiterlimit:0,strokeOpacity:0,strokeWidth:0,surfaceScale:0,systemLanguage:0,tableValues:0,targetX:0,targetY:0,textAnchor:0,textDecoration:0,textRendering:0,textLength:0,to:0,transform:0,u1:0,u2:0,underlinePosition:0,underlineThickness:0,unicode:0,unicodeBidi:0,unicodeRange:0,unitsPerEm:0,vAlphabetic:0,vHanging:0,vIdeographic:0,vMathematical:0,values:0,vectorEffect:0,version:0,vertAdvY:0,vertOriginX:0,vertOriginY:0,viewBox:0,viewTarget:0,visibility:0,widths:0,wordSpacing:0,writingMode:0,x:0,xHeight:0,x1:0,x2:0,xChannelSelector:0,xlinkActuate:0,xlinkArcrole:0,xlinkHref:0,xlinkRole:0,xlinkShow:0,xlinkTitle:0,xlinkType:0,xmlBase:0,xmlns:0,xmlnsXlink:0,xmlLang:0,xmlSpace:0,y:0,y1:0,y2:0,yChannelSelector:0,z:0,zoomAndPan:0},DOMAttributeNames:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDasharray:"stroke-dasharray",strokeDashoffset:"stroke-dashoffset",strokeLinecap:"stroke-linecap",strokeLinejoin:"stroke-linejoin",strokeMiterlimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",xlinkActuate:"xlink:actuate",xlinkArcrole:"xlink:arcrole",xlinkHref:"xlink:href",xlinkRole:"xlink:role",xlinkShow:"xlink:show",xlinkTitle:"xlink:title",xlinkType:"xlink:type",xmlBase:"xml:base",xmlnsXlink:"xmlns:xlink",xmlLang:"xml:lang",xmlSpace:"xml:space"}}}}]);
//# sourceMappingURL=3d09a05621aee58a1933fadaeaf6011991bcf3e0-120e1507b55a4d5714e6.js.map