(self.webpackChunkefi_amazon_fires=self.webpackChunkefi_amazon_fires||[]).push([[632],{2993:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,i="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function o(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(!o(e[s],a[s]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!o(s.value[1],a.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(i&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(e[s]!==a[s])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!o(e[u[s]],a[u[s]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return o(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},4839:function(e,t,r){"use strict";var n,i=r(7294),o=(n=i)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function i(){return e.apply(this,arguments)||this}r=e,(t=i).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,i.peek=function(){return s},i.rewind=function(){if(i.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var a=i.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return o.createElement(n,this.props)},i}(i.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}},1374:function(e,t,r){"use strict";r.d(t,{Z:function(){return we}});var n,i,o,a,c=r(5697),s=r.n(c),u=r(4839),l=r.n(u),f=r(2993),p=r.n(f),d=r(7294),h=r(6494),m=r.n(h),y="bodyAttributes",v="htmlAttributes",A="titleAttributes",g={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},b=(Object.keys(g).map((function(e){return g[e]})),"charset"),w="cssText",x="href",T="http-equiv",C="innerHTML",j="itemprop",E="name",O="property",S="rel",N="src",I="target",P={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},L="defaultTitle",k="defer",R="encodeSpecialCharacters",B="onChangeClientState",M="titleTemplate",D=Object.keys(P).reduce((function(e,t){return e[P[t]]=t,e}),{}),Q=[g.NOSCRIPT,g.SCRIPT,g.STYLE],Y="data-react-helmet",U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},K=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},G=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Z=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},F=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},q=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=_(e,g.TITLE),r=_(e,M);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=_(e,L);return t||n||void 0},z=function(e){return _(e,B)||function(){}},W=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return H({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[g.BASE]})).map((function(e){return e[g.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),i=0;i<n.length;i++){var o=n[i].toLowerCase();if(-1!==e.indexOf(o)&&r[o])return t.concat(r)}return t}),[])},X=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&ne("Helmet: "+e+' should be of type "Array". Instead found type "'+U(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var i={};r.filter((function(e){for(var r=void 0,o=Object.keys(e),a=0;a<o.length;a++){var c=o[a],s=c.toLowerCase();-1===t.indexOf(s)||r===S&&"canonical"===e[r].toLowerCase()||s===S&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==C&&c!==w&&c!==j||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),i[r]||(i[r]={}),!n[r][u]&&(i[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var o=Object.keys(i),a=0;a<o.length;a++){var c=o[a],s=m()({},n[c],i[c]);n[c]=s}return e}),[]).reverse()},_=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},$=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){$(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||$:r.g.requestAnimationFrame||$,re="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:r.g.cancelAnimationFrame||ee,ne=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},ie=null,oe=function(e,t){var r=e.baseTag,n=e.bodyAttributes,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;se(g.BODY,n),se(g.HTML,i),ce(f,p);var d={baseTag:ue(g.BASE,r),linkTags:ue(g.LINK,o),metaTags:ue(g.META,a),noscriptTags:ue(g.NOSCRIPT,c),scriptTags:ue(g.SCRIPT,u),styleTags:ue(g.STYLE,l)},h={},m={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(h[e]=r),n.length&&(m[e]=d[e].oldTags)})),t&&t(),s(e,h,m)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),se(g.TITLE,t)},se=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(Y),i=n?n.split(","):[],o=[].concat(i),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===i.indexOf(s)&&i.push(s);var l=o.indexOf(s);-1!==l&&o.splice(l,1)}for(var f=o.length-1;f>=0;f--)r.removeAttribute(o[f]);i.length===o.length?r.removeAttribute(Y):r.getAttribute(Y)!==a.join(",")&&r.setAttribute(Y,a.join(","))}},ue=function(e,t){var r=document.head||document.querySelector(g.HEAD),n=r.querySelectorAll(e+"["+"data-react-helmet]"),i=Array.prototype.slice.call(n),o=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(Y,"true"),i.some((function(e,t){return a=t,r.isEqualNode(e)}))?i.splice(a,1):o.push(r)})),i.forEach((function(e){return e.parentNode.removeChild(e)})),o.forEach((function(e){return r.appendChild(e)})),{oldTags:i,newTags:o}},le=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[P[r]||r]=e[r],t}),t)},pe=function(e,t,r){switch(e){case g.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[Y]=!0,i=fe(r,n),[d.createElement(g.TITLE,i,e)];var e,r,n,i},toString:function(){return function(e,t,r,n){var i=le(r),o=ae(t);return i?"<"+e+' data-react-helmet="true" '+i+">"+q(o,n)+"</"+e+">":"<"+e+' data-react-helmet="true">'+q(o,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case v:return{toComponent:function(){return fe(t)},toString:function(){return le(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,i=((n={key:r})[Y]=!0,n);return Object.keys(t).forEach((function(e){var r=P[e]||e;if(r===C||r===w){var n=t.innerHTML||t.cssText;i.dangerouslySetInnerHTML={__html:n}}else i[r]=t[e]})),d.createElement(e,i)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var i=Object.keys(n).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var i=void 0===n[t]?t:t+'="'+q(n[t],r)+'"';return e?e+" "+i:i}),""),o=n.innerHTML||n.cssText||"",a=-1===Q.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+i+(a?"/>":">"+o+"</"+e+">")}),"")}(e,t,r)}}}},de=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,i=e.htmlAttributes,o=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:pe(g.BASE,t,n),bodyAttributes:pe(y,r,n),htmlAttributes:pe(v,i,n),link:pe(g.LINK,o,n),meta:pe(g.META,a,n),noscript:pe(g.NOSCRIPT,c,n),script:pe(g.SCRIPT,s,n),style:pe(g.STYLE,u,n),title:pe(g.TITLE,{title:f,titleAttributes:p},n)}},he=l()((function(e){return{baseTag:J([x,I],e),bodyAttributes:W(y,e),defer:_(e,k),encode:_(e,R),htmlAttributes:W(v,e),linkTags:X(g.LINK,[S,x],e),metaTags:X(g.META,[E,b,T,O,j],e),noscriptTags:X(g.NOSCRIPT,[C],e),onChangeClientState:z(e),scriptTags:X(g.SCRIPT,[N,C],e),styleTags:X(g.STYLE,[w],e),title:V(e),titleAttributes:W(A,e)}}),(function(e){ie&&re(ie),e.defer?ie=te((function(){oe(e,(function(){ie=null}))})):(oe(e),ie=null)}),de)((function(){return null})),me=(i=he,a=o=function(e){function t(){return K(this,t),F(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case g.SCRIPT:case g.NOSCRIPT:return{innerHTML:t};case g.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,i=e.newChildProps,o=e.nestedChildren;return H({},n,((t={})[r.type]=[].concat(n[r.type]||[],[H({},i,this.mapNestedChildrenToProps(r,o))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,i=e.newProps,o=e.newChildProps,a=e.nestedChildren;switch(n.type){case g.TITLE:return H({},i,((t={})[n.type]=a,t.titleAttributes=H({},o),t));case g.BODY:return H({},i,{bodyAttributes:H({},o)});case g.HTML:return H({},i,{htmlAttributes:H({},o)})}return H({},i,((r={})[n.type]=H({},o),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=H({},t);return Object.keys(e).forEach((function(t){var n;r=H({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.Children.forEach(e,(function(e){if(e&&e.props){var i=e.props,o=i.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[D[r]||r]=e[r],t}),t)}(Z(i,["children"]));switch(r.warnOnInvalidChildren(e,o),e.type){case g.LINK:case g.META:case g.NOSCRIPT:case g.SCRIPT:case g.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:o});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:o})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Z(e,["children"]),n=H({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.createElement(i,n)},G(t,null,[{key:"canUseDOM",set:function(e){i.canUseDOM=e}}]),t}(d.Component),o.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},o.defaultProps={defer:!0,encodeSpecialCharacters:!0},o.peek=i.peek,o.rewind=function(){var e=i.rewind();return e||(e=de({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);me.renderStatic=me.rewind;var ye=r(5893);function ve(e){var t=e.section,r="description",n="";return(0,ye.jsxs)(me,{children:[(0,ye.jsx)("title",{children:t.title}),(0,ye.jsx)("meta",{name:"title",content:t.title}),(0,ye.jsx)("meta",{name:"description",content:r}),(0,ye.jsx)("meta",{property:"og:type",content:"website"}),(0,ye.jsx)("meta",{property:"og:url",content:"https://interconnectedata.it"}),(0,ye.jsx)("meta",{property:"og:title",content:"Interconnected"}),(0,ye.jsx)("meta",{property:"og:description",content:r}),(0,ye.jsx)("meta",{property:"og:image",content:n}),(0,ye.jsx)("meta",{property:"twitter:card",content:"summary_large_image"}),(0,ye.jsx)("meta",{property:"twitter:url",content:""}),(0,ye.jsx)("meta",{property:"twitter:title",content:t.title}),(0,ye.jsx)("meta",{property:"twitter:description",content:r}),(0,ye.jsx)("meta",{property:"twitter:image",content:n})]})}var Ae=r(5030),ge=r.p+"static/pdl-83c9aa7f24299eb528b1c2d8dd4e9f50.png";function be(){var e=[{src:"data:image/png;base64,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"},{src:ge},{src:"data:image/png;base64,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"}];return(0,ye.jsx)("div",{className:"container-fluid gradient",children:(0,ye.jsxs)("div",{className:"row py-5",children:[(0,ye.jsx)("div",{className:"col-6 offset-1",children:(0,ye.jsx)("div",{className:"row",children:e.map((function(e,t){var r=e.src;e.link;return(0,ye.jsx)("div",{className:"col ",children:(0,ye.jsx)("img",{src:r,className:"img-fluid ",style:{height:"80px"},alt:"..."})},t)}))})}),(0,ye.jsx)("div",{className:"col-3 ",children:(0,ye.jsx)("p",{children:'e standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de '})})]})})}function we(e){var t=e.children,r=e.section;return(0,ye.jsxs)("div",{children:[(0,ye.jsx)(ve,{section:r}),(0,ye.jsx)(Ae.Z,{}),t,(0,ye.jsx)(be,{})]})}},5030:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n,i=r(7294),o=r(5444);function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e){return i.createElement("svg",a({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"currentColor",className:"x-lg_svg__bi x-lg_svg__bi-x-lg"},e),n||(n=i.createElement("path",{d:"M1.293 1.293a1 1 0 011.414 0L8 6.586l5.293-5.293a1 1 0 111.414 1.414L9.414 8l5.293 5.293a1 1 0 01-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 01-1.414-1.414L6.586 8 1.293 2.707a1 1 0 010-1.414z"})))}var s=r(5893);function u(){var e=(0,i.useState)(!1),t=e[0],r=e[1];return(0,s.jsx)("nav",{className:"text-white px-5 sticky-top",children:(0,s.jsx)("div",{className:"container-fluid h-100",children:(0,s.jsxs)("div",{className:"row h-100 align-items-center",children:[(0,s.jsx)("div",{className:"col-10",children:(0,s.jsx)("div",{className:"row",children:(0,s.jsx)(o.Link,{className:"text-white text-decoration-none serif fw-bolder ps-2",to:"/",children:"HOME"})})}),(0,s.jsx)("div",{className:"col-2",children:(0,s.jsxs)("div",{className:"row",children:[(0,s.jsx)("span",{className:"text-end",children:(0,s.jsx)("span",{className:"pointer serif fw-bolder",onClick:function(){return r(!0)},children:"MENU"})}),(0,s.jsx)("div",{className:"side-bar "+(t?"active":""),children:(0,s.jsxs)("ul",{className:"nav flex-column text-white px-4",children:[(0,s.jsx)("li",{className:"nav-item text-white py-3 pb-5 border-white",children:(0,s.jsx)("span",{className:"pointer",onClick:function(){return r(!1)},children:(0,s.jsx)(c,{})})}),(0,s.jsx)("li",{className:"nav-item text-white py-3 border-bottom border-top border-white",children:(0,s.jsx)(o.Link,{className:"text-white text-decoration-none serif fw-bolder ps-2",to:"/",children:"Home"})}),(0,s.jsx)("li",{className:"nav-item py-3",children:(0,s.jsx)(o.Link,{className:"text-white text-decoration-none serif fw-bolder ps-2",to:"/first-issue",children:"Issue story 1"})}),(0,s.jsx)("li",{className:"nav-item py-3",children:(0,s.jsx)(o.Link,{className:"text-white text-decoration-none serif fw-bolder ps-2",to:"",children:"Issue story 1"})}),(0,s.jsx)("li",{className:"nav-item py-3 border-bottom border-white",children:(0,s.jsx)(o.Link,{className:"text-white text-decoration-none serif fw-bolder ps-2",to:"",children:"Issue story 1"})}),(0,s.jsx)("li",{className:"nav-item text-white py-3 border-bottom border-white",children:(0,s.jsx)(o.Link,{className:"text-white text-decoration-none serif fw-bolder ps-2",to:"",children:"About"})})]})})]})})]})})})}},287:function(e,t,r){"use strict";r.d(t,{nL:function(){return i},aC:function(){return o},k8:function(){return a},pu:function(){return c}});var n=r(5893);function i(e){var t=e.text,r=e.classi;return(0,n.jsx)("h1",{className:"serif fw-bolder "+r,children:t})}function o(e){var t=e.text,r=e.classi;return(0,n.jsx)("h3",{className:"fw-bolder "+r,children:t})}function a(e){var t=e.text,r=e.classi;return(0,n.jsx)("h4",{className:"serif fw-bolder "+r,children:t})}function c(e){var t=e.text,r=e.classi;return(0,n.jsx)("h6",{className:"serif fst-italic "+r,children:t})}}}]);
//# sourceMappingURL=7dfcf00404f2af03435e316d2c811de7b7dbfbfc-874a14000314fec5a224.js.map