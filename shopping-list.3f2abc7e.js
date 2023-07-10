let t,e,n;function i(t){return t&&t.__esModule?t.default:t}var r="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},s={},a=r.parcelRequired7c6;null==a&&((a=function(t){if(t in o)return o[t].exports;if(t in s){var e=s[t];delete s[t];var n={id:t,exports:{}};return o[t]=n,e.call(n.exports,n,n.exports),n.exports}var i=Error("Cannot find module '"+t+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(t,e){s[t]=e},r.parcelRequired7c6=a),a("dTazW");var u={};u=new URL(a("kyEFX").resolve("lp5u4"),import.meta.url).toString();var c={};c=new URL(a("kyEFX").resolve("35kVv"),import.meta.url).toString();var l={};l=new URL(a("kyEFX").resolve("6fa5k"),import.meta.url).toString();var p={};p=new URL(a("kyEFX").resolve("49jvD"),import.meta.url).toString();var f={};f=new URL(a("kyEFX").resolve("6THUv"),import.meta.url).toString();var h={};h=new URL(a("kyEFX").resolve("4AGaC"),import.meta.url).toString();var d={};d=new URL(a("kyEFX").resolve("9Ah0R"),import.meta.url).toString();var m={};m=new URL(a("kyEFX").resolve("8uc1C"),import.meta.url).toString();var g={};g=new URL(a("kyEFX").resolve("3fItF"),import.meta.url).toString();var _={};_=new URL(a("kyEFX").resolve("hTaYv"),import.meta.url).toString();var v={};v=new URL(a("kyEFX").resolve("cdwLe"),import.meta.url).toString();var x={};window,x=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e||4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,(function(e){return t[e]}).bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="dist",n(n.s=10)}([function(t,e,n){"use strict";t.exports=function(t,e){var n,i,r,o,s=Object.prototype.hasOwnProperty;for(r=1,o=arguments.length;r<o;r+=1)for(i in n=arguments[r])s.call(n,i)&&(t[i]=n[i]);return t}},function(t,e,n){"use strict";t.exports=function(t){return void 0===t}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Array}},function(t,e,n){"use strict";var i=n(2),r=n(17),o=n(6);t.exports=function(t,e,n){i(t)?r(t,e,n):o(t,e,n)}},function(t,e,n){"use strict";t.exports=function(t){return"string"==typeof t||t instanceof String}},function(t,e,n){"use strict";t.exports=function(t){return t instanceof Function}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i;for(i in n=n||null,t)if(t.hasOwnProperty(i)&&!1===e.call(n,t[i],i,t))break}},function(t,e,n){"use strict";var i=n(18),r=n(0);t.exports=function(t,e){var n;return e||(e=t,t=null),n=e.init||function(){},t&&i(n,t),e.hasOwnProperty("static")&&(r(n,e.static),delete e.static),r(n.prototype,e),n}},function(t,e,n){"use strict";var i=n(2);t.exports=function(t,e,n){var r,o;if(n=n||0,!i(e))return -1;if(Array.prototype.indexOf)return Array.prototype.indexOf.call(e,t,n);for(o=e.length,r=n;n>=0&&r<o;r+=1)if(e[r]===t)return r;return -1}},function(t,e,n){"use strict";var i=n(29),r=n(30),o=n(5);t.exports={capitalizeFirstLetter:function(t){return t.substring(0,1).toUpperCase()+t.substring(1,t.length)},isContained:function(t,e){return!!e&&(t===e||e.contains(t))},createElementByTemplate:function(t,e){var n=document.createElement("div"),r=o(t)?t(e):i(t,e);return n.innerHTML=r,n.firstChild},bind:function(t,e){var n,i=Array.prototype.slice;return t.bind?t.bind.apply(t,i.call(arguments,1)):(n=i.call(arguments,2),function(){return t.apply(e,n.length?n.concat(i.call(arguments)):arguments)})},sendHostName:function(){r("pagination","UA-129987462-1")}}},function(t,e,n){"use strict";n(11),t.exports=n(12)},function(t,e,n){},function(t,e,n){"use strict";var i=n(13),r=n(7),o=n(0),s=n(1),a=n(20),u=n(9),c={totalItems:10,itemsPerPage:10,visiblePages:10,page:1,centerAlign:!1,firstItemClassName:"tui-first-child",lastItemClassName:"tui-last-child",usageStatistics:!0},l=r({init:function(t,e){this._options=o({},c,e),this._currentPage=0,this._view=new a(t,this._options,u.bind(this._onClickHandler,this)),this._paginate(),this._options.usageStatistics&&u.sendHostName()},_setCurrentPage:function(t){this._currentPage=t||this._options.page},_getLastPage:function(){return Math.ceil(this._options.totalItems/this._options.itemsPerPage)||1},_getPageIndex:function(t){return this._options.centerAlign?Math.min(Math.max(t-Math.floor(this._options.visiblePages/2),1),this._getLastPage()-this._options.visiblePages+1):Math.ceil(t/this._options.visiblePages)},_getRelativePage:function(t){var e=this.getCurrentPage();return"prev"===t?e-1:e+1},_getMorePageIndex:function(t){var e=this._getPageIndex(this.getCurrentPage()),n=this._options.visiblePages,i="prev"===t;return this._options.centerAlign?i?e-1:e+n:i?(e-1)*n:e*n+1},_convertToValidPage:function(t){var e=this._getLastPage();return t=Math.min(t=Math.max(t,1),e)},_paginate:function(t){var e=this._makeViewData(t||this._options.page);this._setCurrentPage(t),this._view.update(e)},_makeViewData:function(t){var e={},n=this._getLastPage(),i=this._getPageIndex(t),r=this._getPageIndex(n),o=this._getEdge(t);return e.leftPageNumber=o.left,e.rightPageNumber=o.right,e.prevMore=i>1,e.nextMore=i<r,e.page=t,e.currentPageIndex=t,e.lastPage=n,e.lastPageListIndex=n,e},_getEdge:function(t){var e,n,i=this._getLastPage(),r=this._options.visiblePages,o=this._getPageIndex(t);return this._options.centerAlign?(n=(e=Math.max(t-Math.floor(r/2),1))+r-1)>i&&(e=Math.max(i-r+1,1),n=i):(e=(o-1)*r+1,n=Math.min(n=o*r,i)),{left:e,right:n}},_onClickHandler:function(t,e){switch(t){case"first":e=1;break;case"prev":e=this._getRelativePage("prev");break;case"next":e=this._getRelativePage("next");break;case"prevMore":e=this._getMorePageIndex("prev");break;case"nextMore":e=this._getMorePageIndex("next");break;case"last":e=this._getLastPage();break;default:if(!e)return}this.movePageTo(e)},reset:function(t){s(t)&&(t=this._options.totalItems),this._options.totalItems=t,this._paginate(1)},movePageTo:function(t){t=this._convertToValidPage(t),this.invoke("beforeMove",{page:t})&&(this._paginate(t),this.fire("afterMove",{page:t}))},setTotalItems:function(t){this._options.totalItems=t},setItemsPerPage:function(t){this._options.itemsPerPage=t},getCurrentPage:function(){return this._currentPage||this._options.page}});i.mixin(l),t.exports=l},function(t,e,n){"use strict";var i=n(0),r=n(14),o=n(4),s=n(16),a=n(2),u=n(5),c=n(3),l=/\s+/g;function p(){this.events=null,this.contexts=null}p.mixin=function(t){i(t.prototype,p.prototype)},p.prototype._getHandlerItem=function(t,e){var n={handler:t};return e&&(n.context=e),n},p.prototype._safeEvent=function(t){var e,n=this.events;return n||(n=this.events={}),t&&((e=n[t])||(e=[],n[t]=e),n=e),n},p.prototype._safeContext=function(){var t=this.contexts;return t||(t=this.contexts=[]),t},p.prototype._indexOfContext=function(t){for(var e=this._safeContext(),n=0;e[n];){if(t===e[n][0])return n;n+=1}return -1},p.prototype._memorizeContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1?e[n][1]+=1:e.push([t,1]))},p.prototype._forgetContext=function(t){var e,n;r(t)&&(e=this._safeContext(),(n=this._indexOfContext(t))>-1&&(e[n][1]-=1,e[n][1]<=0&&e.splice(n,1)))},p.prototype._bindEvent=function(t,e,n){var i=this._safeEvent(t);this._memorizeContext(n),i.push(this._getHandlerItem(e,n))},p.prototype.on=function(t,e,n){var i=this;o(t)?c(t=t.split(l),function(t){i._bindEvent(t,e,n)}):s(t)&&(n=e,c(t,function(t,e){i.on(e,t,n)}))},p.prototype.once=function(t,e,n){var i=this;if(s(t)){n=e,c(t,function(t,e){i.once(e,t,n)});return}this.on(t,function r(){e.apply(n,arguments),i.off(t,r,n)},n)},p.prototype._spliceMatches=function(t,e){var n,i=0;if(a(t))for(n=t.length;i<n;i+=1)!0===e(t[i])&&(t.splice(i,1),n-=1,i-=1)},p.prototype._matchHandler=function(t){var e=this;return function(n){var i=t===n.handler;return i&&e._forgetContext(n.context),i}},p.prototype._matchContext=function(t){var e=this;return function(n){var i=t===n.context;return i&&e._forgetContext(n.context),i}},p.prototype._matchHandlerAndContext=function(t,e){var n=this;return function(i){var r=t===i.handler,o=e===i.context,s=r&&o;return s&&n._forgetContext(i.context),s}},p.prototype._offByEventName=function(t,e){var n=this,i=u(e),r=n._matchHandler(e);c(t=t.split(l),function(t){var e=n._safeEvent(t);i?n._spliceMatches(e,r):(c(e,function(t){n._forgetContext(t.context)}),n.events[t]=[])})},p.prototype._offByHandler=function(t){var e=this,n=this._matchHandler(t);c(this._safeEvent(),function(t){e._spliceMatches(t,n)})},p.prototype._offByObject=function(t,e){var n,i=this;0>this._indexOfContext(t)?c(t,function(t,e){i.off(e,t)}):o(e)?(n=this._matchContext(t),i._spliceMatches(this._safeEvent(e),n)):u(e)?(n=this._matchHandlerAndContext(e,t),c(this._safeEvent(),function(t){i._spliceMatches(t,n)})):(n=this._matchContext(t),c(this._safeEvent(),function(t){i._spliceMatches(t,n)}))},p.prototype.off=function(t,e){o(t)?this._offByEventName(t,e):arguments.length?u(t)?this._offByHandler(t):s(t)&&this._offByObject(t,e):(this.events={},this.contexts=[])},p.prototype.fire=function(t){this.invoke.apply(this,arguments)},p.prototype.invoke=function(t){var e,n,i,r;if(!this.hasListener(t))return!0;for(e=this._safeEvent(t),n=Array.prototype.slice.call(arguments,1),i=0;e[i];){if(!1===(r=e[i]).handler.apply(r.context,n))return!1;i+=1}return!0},p.prototype.hasListener=function(t){return this.getListenerLength(t)>0},p.prototype.getListenerLength=function(t){return this._safeEvent(t).length},t.exports=p},function(t,e,n){"use strict";var i=n(1),r=n(15);t.exports=function(t){return!i(t)&&!r(t)}},function(t,e,n){"use strict";t.exports=function(t){return null===t}},function(t,e,n){"use strict";t.exports=function(t){return t===Object(t)}},function(t,e,n){"use strict";t.exports=function(t,e,n){var i=0,r=t.length;for(n=n||null;i<r&&!1!==e.call(n,t[i],i,t);i+=1);}},function(t,e,n){"use strict";var i=n(19);t.exports=function(t,e){var n=i(e.prototype);n.constructor=t,t.prototype=n}},function(t,e,n){"use strict";t.exports=function(t){function e(){}return e.prototype=t,new e}},function(t,e,n){"use strict";var i=n(3),r=n(7),o=n(21),s=n(22),a=n(24),u=n(25),c=n(0),l=n(4),p=n(28),f=n(9),h={page:'<a href="#" class="tui-page-btn">{{page}}</a>',currentPage:'<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',moveButton:'<a href="#" class="tui-page-btn tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></a>',disabledMoveButton:'<span class="tui-page-btn tui-is-disabled tui-{{type}}"><span class="tui-ico-{{type}}">{{type}}</span></span>',moreButton:'<a href="#" class="tui-page-btn tui-{{type}}-is-ellip"><span class="tui-ico-ellip">...</span></a>'},d=["first","prev","next","last"],m=["prev","next"],g=r({init:function(t,e,n){this._containerElement=null,this._firstItemClassName=e.firstItemClassName,this._lastItemClassName=e.lastItemClassName,this._template=c({},h,e.template),this._buttons={},this._enabledPageElements=[],this._setRootElement(t),this._setMoveButtons(),this._setDisabledMoveButtons(),this._setMoreButtons(),this._attachClickEvent(n)},_setRootElement:function(t){if(l(t)?t=document.getElementById(t)||document.querySelector(t):t.jquery&&(t=t[0]),!p(t))throw Error("The container element is invalid.");this._containerElement=t},_setMoveButtons:function(){i(d,function(t){this._buttons[t]=f.createElementByTemplate(this._template.moveButton,{type:t})},this)},_setDisabledMoveButtons:function(){i(d,function(t){var e="disabled"+f.capitalizeFirstLetter(t);this._buttons[e]=f.createElementByTemplate(this._template.disabledMoveButton,{type:t})},this)},_setMoreButtons:function(){i(m,function(t){this._buttons[t+"More"]=f.createElementByTemplate(this._template.moreButton,{type:t})},this)},_getContainerElement:function(){return this._containerElement},_appendFirstButton:function(t){var e;e=t.page>1?this._buttons.first:this._buttons.disabledFirst,this._getContainerElement().appendChild(e)},_appendPrevButton:function(t){var e;e=t.currentPageIndex>1?this._buttons.prev:this._buttons.disabledPrev,this._getContainerElement().appendChild(e)},_appendNextButton:function(t){var e;e=t.currentPageIndex<t.lastPageListIndex?this._buttons.next:this._buttons.disabledNext,this._getContainerElement().appendChild(e)},_appendLastButton:function(t){var e;e=t.page<t.lastPage?this._buttons.last:this._buttons.disabledLast,this._getContainerElement().appendChild(e)},_appendPrevMoreButton:function(t){var e;t.prevMore&&(u(e=this._buttons.prevMore,this._firstItemClassName),this._getContainerElement().appendChild(e))},_appendNextMoreButton:function(t){var e;t.nextMore&&(u(e=this._buttons.nextMore,this._lastItemClassName),this._getContainerElement().appendChild(e))},_appendPages:function(t){var e,n,i=t.leftPageNumber,r=t.rightPageNumber;for(n=i;n<=r;n+=1)n===t.page?e=f.createElementByTemplate(this._template.currentPage,{page:n}):(e=f.createElementByTemplate(this._template.page,{page:n}),this._enabledPageElements.push(e)),n!==i||t.prevMore||u(e,this._firstItemClassName),n!==r||t.nextMore||u(e,this._lastItemClassName),this._getContainerElement().appendChild(e)},_attachClickEvent:function(t){s(this._getContainerElement(),"click",function(e){var n,i,r=o(e);a(e),(i=this._getButtonType(r))||(n=this._getPageNumber(r)),t(i,n)},this)},_getButtonType:function(t){var e;return i(this._buttons,function(n,i){return!f.isContained(t,n)||(e=i,!1)},this),e},_getPageNumber:function(t){var e,n=this._findPageElement(t);return n&&(e=parseInt(n.innerText,10)),e},_findPageElement:function(t){for(var e,n=0,i=this._enabledPageElements.length;n<i;n+=1)if(e=this._enabledPageElements[n],f.isContained(t,e))return e;return null},_empty:function(){this._enabledPageElements=[],i(this._buttons,function(t,e){this._buttons[e]=t.cloneNode(!0)},this),this._getContainerElement().innerHTML=""},update:function(t){this._empty(),this._appendFirstButton(t),this._appendPrevButton(t),this._appendPrevMoreButton(t),this._appendPages(t),this._appendNextMoreButton(t),this._appendNextButton(t),this._appendLastButton(t)}});t.exports=g},function(t,e,n){"use strict";t.exports=function(t){return t.target||t.srcElement}},function(t,e,n){"use strict";var i=n(4),r=n(3),o=n(23);function s(t,e,n,i){var s,a;function u(e){n.call(i||t,e||window.event)}"addEventListener"in t?t.addEventListener(e,u):"attachEvent"in t&&t.attachEvent("on"+e,u),s=o(t,e),a=!1,r(s,function(t){return t.handler!==n||(a=!0,!1)}),a||s.push({handler:n,wrappedHandler:u})}t.exports=function(t,e,n,o){if(i(e)){r(e.split(/\s+/g),function(e){s(t,e,n,o)});return}r(e,function(e,i){s(t,i,e,n)})}},function(t,e,n){"use strict";var i="_feEventKey";t.exports=function(t,e){var n,r=t[i];return r||(r=t[i]={}),(n=r[e])||(n=r[e]=[]),n}},function(t,e,n){"use strict";t.exports=function(t){if(t.preventDefault){t.preventDefault();return}t.returnValue=!1}},function(t,e,n){"use strict";var i=n(3),r=n(8),o=n(26),s=n(27);t.exports=function(t){var e,n=Array.prototype.slice.call(arguments,1),a=t.classList,u=[];if(a){i(n,function(e){t.classList.add(e)});return}(e=o(t))&&(n=[].concat(e.split(/\s+/),n)),i(n,function(t){0>r(t,u)&&u.push(t)}),s(t,u)}},function(t,e,n){"use strict";var i=n(1);t.exports=function(t){return t&&t.className?i(t.className.baseVal)?t.className:t.className.baseVal:""}},function(t,e,n){"use strict";var i=n(2),r=n(1);t.exports=function(t,e){if(e=(e=i(e)?e.join(" "):e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""),r(t.className.baseVal)){t.className=e;return}t.className.baseVal=e}},function(t,e,n){"use strict";t.exports=function(t){return"object"==typeof HTMLElement?t&&(t instanceof HTMLElement||!!t.nodeType):!!(t&&t.nodeType)}},function(t,e,n){"use strict";var i=n(8),r=n(3),o=n(2),s=n(4),a=n(0),u=/{{\s?|\s?}}/g,c=/^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/,l=/\[\s?|\s?\]/,p=/^[a-zA-Z_]+\.[a-zA-Z_]+$/,f=/\./,h=/^["']\w+["']$/,d=/"|'/g,m=/^-?\d+\.?\d*$/,g={if:function(t,e,n){var i,o,s,a,u=(i=[t],o=[],s=0,a=0,r(e,function(t,n){0===t.indexOf("if")?s+=1:"/if"===t?s-=1:s||0!==t.indexOf("elseif")&&"else"!==t||(i.push("else"===t?["true"]:t.split(" ").slice(1)),o.push(e.slice(a,n)),a=n+1)}),o.push(e.slice(a)),{exps:i,sourcesInsideIf:o}),c=!1,l="";return r(u.exps,function(t,e){return(c=x(t,n))&&(l=y(u.sourcesInsideIf[e],n)),!c}),l},each:function(t,e,n){var i=x(t,n),s=o(i)?"@index":"@key",u={},c="";return r(i,function(t,i){u[s]=i,u["@this"]=t,a(n,u),c+=y(e.slice(),n)}),c},with:function(t,e,n){var r=i("as",t),o=t[r+1],s=x(t.slice(0,r),n),u={};return u[o]=s,y(e,a(n,u))||""}},_=3==="a".split(/a/).length?function(t,e){return t.split(e)}:function(t,e){var n,i,r=[],o=0;for(e.global||(e=RegExp(e,"g")),n=e.exec(t);null!==n;)i=n.index,r.push(t.slice(o,i)),o=i+n[0].length,n=e.exec(t);return r.push(t.slice(o)),r};function v(t,e){var n,i=e[t];return"true"===t?i=!0:"false"===t?i=!1:h.test(t)?i=t.replace(d,""):c.test(t)?i=v((n=t.split(l))[0],e)[v(n[1],e)]:p.test(t)?i=v((n=t.split(f))[0],e)[n[1]]:m.test(t)&&(i=parseFloat(t)),i}function x(t,e){var n,i,o=v(t[0],e);return o instanceof Function?(n=t.slice(1),i=[],r(n,function(t){i.push(v(t,e))}),o.apply(null,i)):o}function y(t,e){for(var n,i,r,o=1,a=t[1];s(a);)g[i=(n=a.split(" "))[0]]?(r=function(t,e,n){for(var i,r,o,a=g[t],u=1,c=2,l=e[2];u&&s(l);)0===l.indexOf(t)?u+=1:0===l.indexOf("/"+t)&&(u-=1,o=c),c+=2,l=e[c];if(u)throw Error(t+" needs {{/"+t+"}} expression.");return e[0]=a(e[0].split(" ").slice(1),(i=o,(r=e.splice(1,i-0)).pop(),r),n),e}(i,t.splice(o,t.length-o),e),t=t.concat(r)):t[o]=x(n,e),o+=2,a=t[o];return t.join("")}t.exports=function(t,e){return y(_(t,u),e)}},function(t,e,n){"use strict";var i=n(1),r=n(31);t.exports=function(t,e){var n=location.hostname,o="TOAST UI "+t+" for "+n+": Statistics",s=window.localStorage.getItem(o);(i(window.tui)||!1!==window.tui.usageStatistics)&&(!s||new Date().getTime()-s>6048e5)&&(window.localStorage.setItem(o,new Date().getTime()),setTimeout(function(){("interactive"===document.readyState||"complete"===document.readyState)&&r("https://www.google-analytics.com/collect",{v:1,t:"event",tid:e,cid:n,dp:n,dh:t,el:t,ec:"use"})},1e3))}},function(t,e,n){"use strict";var i=n(6);t.exports=function(t,e){var n=document.createElement("img"),r="";return i(e,function(t,e){r+="&"+e+"="+t}),r=r.substring(1),n.src=t+"?"+r,n.style.display="none",document.body.appendChild(n),document.body.removeChild(n),n}}]);const y=document.querySelector(".js-shopping-cart"),b=document.querySelector(".js-cart-list"),P=document.getElementById("pagination"),E="storage-data";let C=1;function w(){let n=JSON.parse(localStorage.getItem(E));if(n&&0!==n.length){let r=n.length;(function(n){let r=new(i(x))(P,{totalItems:n,itemsPerPage:t,visiblePages:e,centerAlign:!0,page:C});r.on("afterMove",t=>{C=t.page;let e=JSON.parse(localStorage.getItem(E));return L(e,C),C})})(r),L(n,C)}else M()}function M(){let t=`
    <div class="cart-empty">
      <p class="cart-empty__text">
        This page is empty, add some books and proceed to order.
      </p>
      <picture>
        <source
          srcset="
            ${i(c)} 1x,
            ${i(l)} 2x
          "
          media="(min-width: 768px)"
        />
        <img
          srcset="
            ${i(p)} 1x,
            ${i(f)} 2x
            "
          src="${i(p)}"
          alt="Empty cart"
          loading="lazy"
          class="cart-empty__img"
        />
      </picture>
    </div>`;y.innerHTML=t}function L(e,n){let r=(n-1)*t,o=r+t,s=e.slice(r,o),a=s.map(({id:t,book_image:e,title:n,author:r,marketAmazon:o,marketAppleBooks:s,marketBookshop:a,list_name:c})=>`
      <li class="cart__item card js-card" data-book-id="${t}">
        <picture>
          <img
            loading="lazy"
            src="${e||"./images/placeholders/very-small-placeholder.png"}"
            alt="${n}"
            class="card__img"
            width="110"
            height="142"
          />
        </picture>
        <div class="card__content">
          <h3 class="card__title">${n.trim()}</h3>
          <p class="card__category">${c.trim()}</p>
          <p class="card__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Temporibus, architecto voluptate sint debitis ab fugit
            laudantium nostrum dolore quisquam? Laboriosam nulla eum a,
            quo, molestiae sed error possimus expedita veniam maiores
            nam maxime provident quod blanditiis cum voluptate. A
            provident corrupti dignissimos ullam. Porro architecto
            maiores est ullam sed. Cum.
            Temporibus, architecto voluptate sint debitis ab fugit
            laudantium nostrum dolore quisquam? Laboriosam nulla eum a,
            quo, molestiae sed error possimus expedita veniam maiores
            nam maxime provident quod blanditiis cum voluptate. A
            provident corrupti dignissimos ullam. Porro architecto
            maiores est ullam sed. Cum.
          </p>
          <div class="card__footer">
            <p class="card__author">${r.trim()}</p>
            <ul class="card__shops list">
              <li class="shop">
                <a
                  href="${o}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--amazon"
                    loading="lazy"
                    width="28"
                    height="28"
                    srcset="
                      ${i(h)} 1x,
                      ${i(d)} 2x
                    "
                    src="${i(h)}"
                    alt="amazon.com"
                /></a>
              </li>
              <li class="shop">
                <a
                  href="${s}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--apple"
                    loading="lazy"
                    width="28"
                    height="28"
                    srcset="
                      ${i(m)} 1x,
                      ${i(g)} 2x
                    "
                    src="${i(m)}"
                    alt="books.apple.com"
                /></a>
              </li>
              <li class="shop">
                <a
                  href="${a}"
                  target="_blank"
                  rel="noopener nofollow"
                >
                  <img class="shop__image--bookshop"
                    loading="lazy"
                    width="28"
                    height="28"
                    srcset="
                      ${i(_)} 1x,
                      ${i(v)} 2x
                    "
                    src="${i(_)}"
                    alt="bookshop.org"
                /></a>
              </li>
            </ul>
          </div>
          <button
            aria-label="delete" class="card__delete button js-card__delete"
            type="button"
          >
            <svg class="icon-delete" width="22" height="22">
              <use x="1%" href="${i(u)}#icon-bin"></use>
            </svg>
          </button>
        </div>
      </li>`).join("");b.innerHTML=a}b.addEventListener("click",function(e){if(e.target.classList.contains("js-card__delete")){let n=e.target.closest(".js-card"),i=n.dataset.bookId,r=JSON.parse(localStorage.getItem(E)),o=r.filter(t=>t.id!==i);localStorage.setItem(E,JSON.stringify(o)),o.length||(n.remove(),M());let s=Math.ceil(o.length/t);s>=C||(C=s),n.remove(),w()}}),window.addEventListener("resize",function(){let i=window.innerWidth;i<768?(e=1,t=4,clearTimeout(n),n=setTimeout(function(){w()},200)):i>=768&&(t=3,e=3,clearTimeout(n),n=setTimeout(function(){w()},200))}),document.addEventListener("DOMContentLoaded",function(){let n=window.innerWidth;n<768?(e=1,t=4,w()):n>=768&&(t=3,e=3,w())}),w(),a("lJLy0"),a("hele7"),a("hEibw"),a("4S0r6");
//# sourceMappingURL=shopping-list.3f2abc7e.js.map
