import{P as m}from"./prop-types-B8Ud6-8F.js";import{w as z}from"./react-side-effect-C2KxOuiD.js";import{i as Q}from"./react-fast-compare-BoQafF-4.js";import{b as w}from"./react-DAnAhD9J.js";import{o as V}from"./object-assign-DIxWsHyN.js";var S={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},c={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"};Object.keys(c).map(function(a){return c[a]});var v={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src",TARGET:"target"},M={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},H={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},W=Object.keys(M).reduce(function(a,e){return a[M[e]]=e,a},{}),J=[c.NOSCRIPT,c.SCRIPT,c.STYLE],g="data-react-helmet",Z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},K=function(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")},ee=function(){function a(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,r,t){return r&&a(e.prototype,r),t&&a(e,t),e}}(),h=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(a[t]=r[t])}return a},te=function(a,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);a.prototype=Object.create(e&&e.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(a,e):a.__proto__=e)},k=function(a,e){var r={};for(var t in a)e.indexOf(t)>=0||Object.prototype.hasOwnProperty.call(a,t)&&(r[t]=a[t]);return r},re=function(a,e){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:a},_=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return r===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},ne=function(e){var r=O(e,c.TITLE),t=O(e,H.TITLE_TEMPLATE);if(t&&r)return t.replace(/%s/g,function(){return Array.isArray(r)?r.join(""):r});var n=O(e,H.DEFAULT_TITLE);return r||n||void 0},ae=function(e){return O(e,H.ON_CHANGE_CLIENT_STATE)||function(){}},N=function(e,r){return r.filter(function(t){return typeof t[e]<"u"}).map(function(t){return t[e]}).reduce(function(t,n){return h({},t,n)},{})},ie=function(e,r){return r.filter(function(t){return typeof t[c.BASE]<"u"}).map(function(t){return t[c.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var o=Object.keys(n),f=0;f<o.length;f++){var u=o[f],i=u.toLowerCase();if(e.indexOf(i)!==-1&&n[i])return t.concat(n)}return t},[])},I=function(e,r,t){var n={};return t.filter(function(o){return Array.isArray(o[e])?!0:(typeof o[e]<"u"&&ce("Helmet: "+e+' should be of type "Array". Instead found type "'+Z(o[e])+'"'),!1)}).map(function(o){return o[e]}).reverse().reduce(function(o,f){var u={};f.filter(function(d){for(var p=void 0,C=Object.keys(d),A=0;A<C.length;A++){var E=C[A],y=E.toLowerCase();r.indexOf(y)!==-1&&!(p===v.REL&&d[p].toLowerCase()==="canonical")&&!(y===v.REL&&d[y].toLowerCase()==="stylesheet")&&(p=y),r.indexOf(E)!==-1&&(E===v.INNER_HTML||E===v.CSS_TEXT||E===v.ITEM_PROP)&&(p=E)}if(!p||!d[p])return!1;var R=d[p].toLowerCase();return n[p]||(n[p]={}),u[p]||(u[p]={}),n[p][R]?!1:(u[p][R]=!0,!0)}).reverse().forEach(function(d){return o.push(d)});for(var i=Object.keys(u),s=0;s<i.length;s++){var l=i[s],T=V({},n[l],u[l]);n[l]=T}return o},[]).reverse()},O=function(e,r){for(var t=e.length-1;t>=0;t--){var n=e[t];if(n.hasOwnProperty(r))return n[r]}return null},oe=function(e){return{baseTag:ie([v.HREF,v.TARGET],e),bodyAttributes:N(S.BODY,e),defer:O(e,H.DEFER),encode:O(e,H.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:N(S.HTML,e),linkTags:I(c.LINK,[v.REL,v.HREF],e),metaTags:I(c.META,[v.NAME,v.CHARSET,v.HTTPEQUIV,v.PROPERTY,v.ITEM_PROP],e),noscriptTags:I(c.NOSCRIPT,[v.INNER_HTML],e),onChangeClientState:ae(e),scriptTags:I(c.SCRIPT,[v.SRC,v.INNER_HTML],e),styleTags:I(c.STYLE,[v.CSS_TEXT],e),title:ne(e),titleAttributes:N(S.TITLE,e)}},j=function(){var a=Date.now();return function(e){var r=Date.now();r-a>16?(a=r,e(r)):setTimeout(function(){j(e)},0)}}(),D=function(e){return clearTimeout(e)},ue=typeof window<"u"?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||j:global.requestAnimationFrame||j,se=typeof window<"u"?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||D:global.cancelAnimationFrame||D,ce=function(e){return console&&typeof console.warn=="function"&&console.warn(e)},L=null,le=function(e){L&&se(L),e.defer?L=ue(function(){Y(e,function(){L=null})}):(Y(e),L=null)},Y=function(e,r){var t=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,f=e.linkTags,u=e.metaTags,i=e.noscriptTags,s=e.onChangeClientState,l=e.scriptTags,T=e.styleTags,d=e.title,p=e.titleAttributes;F(c.BODY,n),F(c.HTML,o),fe(d,p);var C={baseTag:P(c.BASE,t),linkTags:P(c.LINK,f),metaTags:P(c.META,u),noscriptTags:P(c.NOSCRIPT,i),scriptTags:P(c.SCRIPT,l),styleTags:P(c.STYLE,T)},A={},E={};Object.keys(C).forEach(function(y){var R=C[y],x=R.newTags,X=R.oldTags;x.length&&(A[y]=x),X.length&&(E[y]=C[y].oldTags)}),r&&r(),s(e,A,E)},q=function(e){return Array.isArray(e)?e.join(""):e},fe=function(e,r){typeof e<"u"&&document.title!==e&&(document.title=q(e)),F(c.TITLE,r)},F=function(e,r){var t=document.getElementsByTagName(e)[0];if(t){for(var n=t.getAttribute(g),o=n?n.split(","):[],f=[].concat(o),u=Object.keys(r),i=0;i<u.length;i++){var s=u[i],l=r[s]||"";t.getAttribute(s)!==l&&t.setAttribute(s,l),o.indexOf(s)===-1&&o.push(s);var T=f.indexOf(s);T!==-1&&f.splice(T,1)}for(var d=f.length-1;d>=0;d--)t.removeAttribute(f[d]);o.length===f.length?t.removeAttribute(g):t.getAttribute(g)!==u.join(",")&&t.setAttribute(g,u.join(","))}},P=function(e,r){var t=document.head||document.querySelector(c.HEAD),n=t.querySelectorAll(e+"["+g+"]"),o=Array.prototype.slice.call(n),f=[],u=void 0;return r&&r.length&&r.forEach(function(i){var s=document.createElement(e);for(var l in i)if(i.hasOwnProperty(l))if(l===v.INNER_HTML)s.innerHTML=i.innerHTML;else if(l===v.CSS_TEXT)s.styleSheet?s.styleSheet.cssText=i.cssText:s.appendChild(document.createTextNode(i.cssText));else{var T=typeof i[l]>"u"?"":i[l];s.setAttribute(l,T)}s.setAttribute(g,"true"),o.some(function(d,p){return u=p,s.isEqualNode(d)})?o.splice(u,1):f.push(s)}),o.forEach(function(i){return i.parentNode.removeChild(i)}),f.forEach(function(i){return t.appendChild(i)}),{oldTags:o,newTags:f}},U=function(e){return Object.keys(e).reduce(function(r,t){var n=typeof e[t]<"u"?t+'="'+e[t]+'"':""+t;return r?r+" "+n:n},"")},Te=function(e,r,t,n){var o=U(t),f=q(r);return o?"<"+e+" "+g+'="true" '+o+">"+_(f,n)+"</"+e+">":"<"+e+" "+g+'="true">'+_(f,n)+"</"+e+">"},de=function(e,r,t){return r.reduce(function(n,o){var f=Object.keys(o).filter(function(s){return!(s===v.INNER_HTML||s===v.CSS_TEXT)}).reduce(function(s,l){var T=typeof o[l]>"u"?l:l+'="'+_(o[l],t)+'"';return s?s+" "+T:T},""),u=o.innerHTML||o.cssText||"",i=J.indexOf(e)===-1;return n+"<"+e+" "+g+'="true" '+f+(i?"/>":">"+u+"</"+e+">")},"")},G=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[M[n]||n]=e[n],t},r)},pe=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[W[n]||n]=e[n],t},r)},me=function(e,r,t){var n,o=(n={key:r},n[g]=!0,n),f=G(t,o);return[w.createElement(c.TITLE,f,r)]},ve=function(e,r){return r.map(function(t,n){var o,f=(o={key:n},o[g]=!0,o);return Object.keys(t).forEach(function(u){var i=M[u]||u;if(i===v.INNER_HTML||i===v.CSS_TEXT){var s=t.innerHTML||t.cssText;f.dangerouslySetInnerHTML={__html:s}}else f[i]=t[u]}),w.createElement(e,f)})},b=function(e,r,t){switch(e){case c.TITLE:return{toComponent:function(){return me(e,r.title,r.titleAttributes)},toString:function(){return Te(e,r.title,r.titleAttributes,t)}};case S.BODY:case S.HTML:return{toComponent:function(){return G(r)},toString:function(){return U(r)}};default:return{toComponent:function(){return ve(e,r)},toString:function(){return de(e,r,t)}}}},$=function(e){var r=e.baseTag,t=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,f=e.linkTags,u=e.metaTags,i=e.noscriptTags,s=e.scriptTags,l=e.styleTags,T=e.title,d=T===void 0?"":T,p=e.titleAttributes;return{base:b(c.BASE,r,n),bodyAttributes:b(S.BODY,t,n),htmlAttributes:b(S.HTML,o,n),link:b(c.LINK,f,n),meta:b(c.META,u,n),noscript:b(c.NOSCRIPT,i,n),script:b(c.SCRIPT,s,n),style:b(c.STYLE,l,n),title:b(c.TITLE,{title:d,titleAttributes:p},n)}},he=function(e){var r,t;return t=r=function(n){te(o,n);function o(){return K(this,o),re(this,n.apply(this,arguments))}return o.prototype.shouldComponentUpdate=function(u){return!Q(this.props,u)},o.prototype.mapNestedChildrenToProps=function(u,i){if(!i)return null;switch(u.type){case c.SCRIPT:case c.NOSCRIPT:return{innerHTML:i};case c.STYLE:return{cssText:i}}throw new Error("<"+u.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},o.prototype.flattenArrayTypeChildren=function(u){var i,s=u.child,l=u.arrayTypeChildren,T=u.newChildProps,d=u.nestedChildren;return h({},l,(i={},i[s.type]=[].concat(l[s.type]||[],[h({},T,this.mapNestedChildrenToProps(s,d))]),i))},o.prototype.mapObjectTypeChildren=function(u){var i,s,l=u.child,T=u.newProps,d=u.newChildProps,p=u.nestedChildren;switch(l.type){case c.TITLE:return h({},T,(i={},i[l.type]=p,i.titleAttributes=h({},d),i));case c.BODY:return h({},T,{bodyAttributes:h({},d)});case c.HTML:return h({},T,{htmlAttributes:h({},d)})}return h({},T,(s={},s[l.type]=h({},d),s))},o.prototype.mapArrayTypeChildrenToProps=function(u,i){var s=h({},i);return Object.keys(u).forEach(function(l){var T;s=h({},s,(T={},T[l]=u[l],T))}),s},o.prototype.warnOnInvalidChildren=function(u,i){return!0},o.prototype.mapChildrenToProps=function(u,i){var s=this,l={};return w.Children.forEach(u,function(T){if(!(!T||!T.props)){var d=T.props,p=d.children,C=k(d,["children"]),A=pe(C);switch(s.warnOnInvalidChildren(T,p),T.type){case c.LINK:case c.META:case c.NOSCRIPT:case c.SCRIPT:case c.STYLE:l=s.flattenArrayTypeChildren({child:T,arrayTypeChildren:l,newChildProps:A,nestedChildren:p});break;default:i=s.mapObjectTypeChildren({child:T,newProps:i,newChildProps:A,nestedChildren:p});break}}}),i=this.mapArrayTypeChildrenToProps(l,i),i},o.prototype.render=function(){var u=this.props,i=u.children,s=k(u,["children"]),l=h({},s);return i&&(l=this.mapChildrenToProps(i,l)),w.createElement(e,l)},ee(o,null,[{key:"canUseDOM",set:function(u){e.canUseDOM=u}}]),o}(w.Component),r.propTypes={base:m.object,bodyAttributes:m.object,children:m.oneOfType([m.arrayOf(m.node),m.node]),defaultTitle:m.string,defer:m.bool,encodeSpecialCharacters:m.bool,htmlAttributes:m.object,link:m.arrayOf(m.object),meta:m.arrayOf(m.object),noscript:m.arrayOf(m.object),onChangeClientState:m.func,script:m.arrayOf(m.object),style:m.arrayOf(m.object),title:m.string,titleAttributes:m.object,titleTemplate:m.string},r.defaultProps={defer:!0,encodeSpecialCharacters:!0},r.peek=e.peek,r.rewind=function(){var n=e.rewind();return n||(n=$({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),n},t},ge=function(){return null},Ae=z(oe,le,$)(ge),B=he(Ae);B.renderStatic=B.rewind;export{B as H};
