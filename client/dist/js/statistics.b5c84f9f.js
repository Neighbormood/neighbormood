(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["statistics"],{"0a06":function(t,e,n){"use strict";var r=n("c532"),a=n("30b5"),i=n("f6b49"),o=n("5270"),s=n("4a7b");function u(t){this.defaults=t,this.interceptors={request:new i,response:new i}}u.prototype.request=function(t){"string"===typeof t?(t=arguments[1]||{},t.url=arguments[0]):t=t||{},t=s(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var e=[o,void 0],n=Promise.resolve(t);this.interceptors.request.forEach((function(t){e.unshift(t.fulfilled,t.rejected)})),this.interceptors.response.forEach((function(t){e.push(t.fulfilled,t.rejected)}));while(e.length)n=n.then(e.shift(),e.shift());return n},u.prototype.getUri=function(t){return t=s(this.defaults,t),a(t.url,t.params,t.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(t){u.prototype[t]=function(e,n){return this.request(s(n||{},{method:t,url:e,data:(n||{}).data}))}})),r.forEach(["post","put","patch"],(function(t){u.prototype[t]=function(e,n,r){return this.request(s(r||{},{method:t,url:e,data:n}))}})),t.exports=u},"0df6":function(t,e,n){"use strict";t.exports=function(t){return function(e){return t.apply(null,e)}}},"1d2b":function(t,e,n){"use strict";t.exports=function(t,e){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return t.apply(e,n)}}},2444:function(t,e,n){"use strict";(function(e){var r=n("c532"),a=n("c8af"),i={"Content-Type":"application/x-www-form-urlencoded"};function o(t,e){!r.isUndefined(t)&&r.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function s(){var t;return("undefined"!==typeof XMLHttpRequest||"undefined"!==typeof e&&"[object process]"===Object.prototype.toString.call(e))&&(t=n("b50d")),t}var u={adapter:s(),transformRequest:[function(t,e){return a(e,"Accept"),a(e,"Content-Type"),r.isFormData(t)||r.isArrayBuffer(t)||r.isBuffer(t)||r.isStream(t)||r.isFile(t)||r.isBlob(t)?t:r.isArrayBufferView(t)?t.buffer:r.isURLSearchParams(t)?(o(e,"application/x-www-form-urlencoded;charset=utf-8"),t.toString()):r.isObject(t)?(o(e,"application/json;charset=utf-8"),JSON.stringify(t)):t}],transformResponse:[function(t){if("string"===typeof t)try{t=JSON.parse(t)}catch(e){}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(t){u.headers[t]={}})),r.forEach(["post","put","patch"],(function(t){u.headers[t]=r.merge(i)})),t.exports=u}).call(this,n("4362"))},2909:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var r=n("6b75");function a(t){if(Array.isArray(t))return Object(r["a"])(t)}n("a4d3"),n("e01a"),n("d28b"),n("a630"),n("d3b7"),n("3ca3"),n("ddb0");function i(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}var o=n("06c5");function s(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(t){return a(t)||i(t)||Object(o["a"])(t)||s()}},"2d83":function(t,e,n){"use strict";var r=n("387f");t.exports=function(t,e,n,a,i){var o=new Error(t);return r(o,e,n,a,i)}},"2e67":function(t,e,n){"use strict";t.exports=function(t){return!(!t||!t.__CANCEL__)}},"30b5":function(t,e,n){"use strict";var r=n("c532");function a(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}t.exports=function(t,e,n){if(!e)return t;var i;if(n)i=n(e);else if(r.isURLSearchParams(e))i=e.toString();else{var o=[];r.forEach(e,(function(t,e){null!==t&&"undefined"!==typeof t&&(r.isArray(t)?e+="[]":t=[t],r.forEach(t,(function(t){r.isDate(t)?t=t.toISOString():r.isObject(t)&&(t=JSON.stringify(t)),o.push(a(e)+"="+a(t))})))})),i=o.join("&")}if(i){var s=t.indexOf("#");-1!==s&&(t=t.slice(0,s)),t+=(-1===t.indexOf("?")?"?":"&")+i}return t}},"387f":function(t,e,n){"use strict";t.exports=function(t,e,n,r,a){return t.config=e,n&&(t.code=n),t.request=r,t.response=a,t.isAxiosError=!0,t.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},t}},3934:function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){var t,e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function a(t){var r=t;return e&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return t=a(window.location.href),function(e){var n=r.isString(e)?a(e):e;return n.protocol===t.protocol&&n.host===t.host}}():function(){return function(){return!0}}()},"467f":function(t,e,n){"use strict";var r=n("2d83");t.exports=function(t,e,n){var a=n.config.validateStatus;n.status&&a&&!a(n.status)?e(r("Request failed with status code "+n.status,n.config,null,n.request,n)):t(n)}},"4a7b":function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){e=e||{};var n={},a=["url","method","data"],i=["headers","auth","proxy","params"],o=["baseURL","transformRequest","transformResponse","paramsSerializer","timeout","timeoutMessage","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","decompress","maxContentLength","maxBodyLength","maxRedirects","transport","httpAgent","httpsAgent","cancelToken","socketPath","responseEncoding"],s=["validateStatus"];function u(t,e){return r.isPlainObject(t)&&r.isPlainObject(e)?r.merge(t,e):r.isPlainObject(e)?r.merge({},e):r.isArray(e)?e.slice():e}function c(a){r.isUndefined(e[a])?r.isUndefined(t[a])||(n[a]=u(void 0,t[a])):n[a]=u(t[a],e[a])}r.forEach(a,(function(t){r.isUndefined(e[t])||(n[t]=u(void 0,e[t]))})),r.forEach(i,c),r.forEach(o,(function(a){r.isUndefined(e[a])?r.isUndefined(t[a])||(n[a]=u(void 0,t[a])):n[a]=u(void 0,e[a])})),r.forEach(s,(function(r){r in e?n[r]=u(t[r],e[r]):r in t&&(n[r]=u(void 0,t[r]))}));var f=a.concat(i).concat(o).concat(s),l=Object.keys(t).concat(Object.keys(e)).filter((function(t){return-1===f.indexOf(t)}));return r.forEach(l,c),n}},5270:function(t,e,n){"use strict";var r=n("c532"),a=n("c401"),i=n("2e67"),o=n("2444");function s(t){t.cancelToken&&t.cancelToken.throwIfRequested()}t.exports=function(t){s(t),t.headers=t.headers||{},t.data=a(t.data,t.headers,t.transformRequest),t.headers=r.merge(t.headers.common||{},t.headers[t.method]||{},t.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(e){delete t.headers[e]}));var e=t.adapter||o.adapter;return e(t).then((function(e){return s(t),e.data=a(e.data,e.headers,t.transformResponse),e}),(function(e){return i(e)||(s(t),e&&e.response&&(e.response.data=a(e.response.data,e.response.headers,t.transformResponse))),Promise.reject(e)}))}},"58b2":function(t,e,n){},"7a77":function(t,e,n){"use strict";function r(t){this.message=t}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,t.exports=r},"7aac":function(t,e,n){"use strict";var r=n("c532");t.exports=r.isStandardBrowserEnv()?function(){return{write:function(t,e,n,a,i,o){var s=[];s.push(t+"="+encodeURIComponent(e)),r.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),r.isString(a)&&s.push("path="+a),r.isString(i)&&s.push("domain="+i),!0===o&&s.push("secure"),document.cookie=s.join("; ")},read:function(t){var e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove:function(t){this.write(t,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}()},"83b9":function(t,e,n){"use strict";var r=n("d925"),a=n("e683");t.exports=function(t,e){return t&&!r(e)?a(t,e):e}},"8ce9":function(t,e,n){},"8df4b":function(t,e,n){"use strict";var r=n("7a77");function a(t){if("function"!==typeof t)throw new TypeError("executor must be a function.");var e;this.promise=new Promise((function(t){e=t}));var n=this;t((function(t){n.reason||(n.reason=new r(t),e(n.reason))}))}a.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},a.source=function(){var t,e=new a((function(e){t=e}));return{token:e,cancel:t}},t.exports=a},b50d:function(t,e,n){"use strict";var r=n("c532"),a=n("467f"),i=n("7aac"),o=n("30b5"),s=n("83b9"),u=n("c345"),c=n("3934"),f=n("2d83");t.exports=function(t){return new Promise((function(e,n){var l=t.data,d=t.headers;r.isFormData(l)&&delete d["Content-Type"];var h=new XMLHttpRequest;if(t.auth){var p=t.auth.username||"",m=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";d.Authorization="Basic "+btoa(p+":"+m)}var g=s(t.baseURL,t.url);if(h.open(t.method.toUpperCase(),o(g,t.params,t.paramsSerializer),!0),h.timeout=t.timeout,h.onreadystatechange=function(){if(h&&4===h.readyState&&(0!==h.status||h.responseURL&&0===h.responseURL.indexOf("file:"))){var r="getAllResponseHeaders"in h?u(h.getAllResponseHeaders()):null,i=t.responseType&&"text"!==t.responseType?h.response:h.responseText,o={data:i,status:h.status,statusText:h.statusText,headers:r,config:t,request:h};a(e,n,o),h=null}},h.onabort=function(){h&&(n(f("Request aborted",t,"ECONNABORTED",h)),h=null)},h.onerror=function(){n(f("Network Error",t,null,h)),h=null},h.ontimeout=function(){var e="timeout of "+t.timeout+"ms exceeded";t.timeoutErrorMessage&&(e=t.timeoutErrorMessage),n(f(e,t,"ECONNABORTED",h)),h=null},r.isStandardBrowserEnv()){var y=(t.withCredentials||c(g))&&t.xsrfCookieName?i.read(t.xsrfCookieName):void 0;y&&(d[t.xsrfHeaderName]=y)}if("setRequestHeader"in h&&r.forEach(d,(function(t,e){"undefined"===typeof l&&"content-type"===e.toLowerCase()?delete d[e]:h.setRequestHeader(e,t)})),r.isUndefined(t.withCredentials)||(h.withCredentials=!!t.withCredentials),t.responseType)try{h.responseType=t.responseType}catch(b){if("json"!==t.responseType)throw b}"function"===typeof t.onDownloadProgress&&h.addEventListener("progress",t.onDownloadProgress),"function"===typeof t.onUploadProgress&&h.upload&&h.upload.addEventListener("progress",t.onUploadProgress),t.cancelToken&&t.cancelToken.promise.then((function(t){h&&(h.abort(),n(t),h=null)})),l||(l=null),h.send(l)}))}},bc3a:function(t,e,n){t.exports=n("cee4")},c345:function(t,e,n){"use strict";var r=n("c532"),a=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];t.exports=function(t){var e,n,i,o={};return t?(r.forEach(t.split("\n"),(function(t){if(i=t.indexOf(":"),e=r.trim(t.substr(0,i)).toLowerCase(),n=r.trim(t.substr(i+1)),e){if(o[e]&&a.indexOf(e)>=0)return;o[e]="set-cookie"===e?(o[e]?o[e]:[]).concat([n]):o[e]?o[e]+", "+n:n}})),o):o}},c401:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e,n){return r.forEach(n,(function(n){t=n(t,e)})),t}},c532:function(t,e,n){"use strict";var r=n("1d2b"),a=Object.prototype.toString;function i(t){return"[object Array]"===a.call(t)}function o(t){return"undefined"===typeof t}function s(t){return null!==t&&!o(t)&&null!==t.constructor&&!o(t.constructor)&&"function"===typeof t.constructor.isBuffer&&t.constructor.isBuffer(t)}function u(t){return"[object ArrayBuffer]"===a.call(t)}function c(t){return"undefined"!==typeof FormData&&t instanceof FormData}function f(t){var e;return e="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(t):t&&t.buffer&&t.buffer instanceof ArrayBuffer,e}function l(t){return"string"===typeof t}function d(t){return"number"===typeof t}function h(t){return null!==t&&"object"===typeof t}function p(t){if("[object Object]"!==a.call(t))return!1;var e=Object.getPrototypeOf(t);return null===e||e===Object.prototype}function m(t){return"[object Date]"===a.call(t)}function g(t){return"[object File]"===a.call(t)}function y(t){return"[object Blob]"===a.call(t)}function b(t){return"[object Function]"===a.call(t)}function v(t){return h(t)&&b(t.pipe)}function x(t){return"undefined"!==typeof URLSearchParams&&t instanceof URLSearchParams}function w(t){return t.replace(/^\s*/,"").replace(/\s*$/,"")}function S(){return("undefined"===typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&("undefined"!==typeof window&&"undefined"!==typeof document)}function E(t,e){if(null!==t&&"undefined"!==typeof t)if("object"!==typeof t&&(t=[t]),i(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&e.call(null,t[a],a,t)}function C(){var t={};function e(e,n){p(t[n])&&p(e)?t[n]=C(t[n],e):p(e)?t[n]=C({},e):i(e)?t[n]=e.slice():t[n]=e}for(var n=0,r=arguments.length;n<r;n++)E(arguments[n],e);return t}function j(t,e,n){return E(e,(function(e,a){t[a]=n&&"function"===typeof e?r(e,n):e})),t}function O(t){return 65279===t.charCodeAt(0)&&(t=t.slice(1)),t}t.exports={isArray:i,isArrayBuffer:u,isBuffer:s,isFormData:c,isArrayBufferView:f,isString:l,isNumber:d,isObject:h,isPlainObject:p,isUndefined:o,isDate:m,isFile:g,isBlob:y,isFunction:b,isStream:v,isURLSearchParams:x,isStandardBrowserEnv:S,forEach:E,merge:C,extend:j,trim:w,stripBOM:O}},c8af:function(t,e,n){"use strict";var r=n("c532");t.exports=function(t,e){r.forEach(t,(function(n,r){r!==e&&r.toUpperCase()===e.toUpperCase()&&(t[e]=n,delete t[r])}))}},ce7e:function(t,e,n){"use strict";var r=n("5530"),a=(n("8ce9"),n("7560"));e["a"]=a["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(r["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(r["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})},cee4:function(t,e,n){"use strict";var r=n("c532"),a=n("1d2b"),i=n("0a06"),o=n("4a7b"),s=n("2444");function u(t){var e=new i(t),n=a(i.prototype.request,e);return r.extend(n,i.prototype,e),r.extend(n,e),n}var c=u(s);c.Axios=i,c.create=function(t){return u(o(c.defaults,t))},c.Cancel=n("7a77"),c.CancelToken=n("8df4b"),c.isCancel=n("2e67"),c.all=function(t){return Promise.all(t)},c.spread=n("0df6"),t.exports=c,t.exports.default=c},d614:function(t,e,n){"use strict";n("58b2")},d925:function(t,e,n){"use strict";t.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)}},e683:function(t,e,n){"use strict";t.exports=function(t,e){return e?t.replace(/\/+$/,"")+"/"+e.replace(/^\/+/,""):t}},f6b49:function(t,e,n){"use strict";var r=n("c532");function a(){this.handlers=[]}a.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},a.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},a.prototype.forEach=function(t){r.forEach(this.handlers,(function(e){null!==e&&t(e)}))},t.exports=a},fcd1:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.loading?n("div",[n("loader")],1):n("div",{staticClass:"container"},[n("v-card",{staticClass:"mt-4 mx-auto",attrs:{"max-width":"400"}},[n("v-card-title",[n("div",{staticClass:"title font-weight-light mb-2"},[t._v(" Last 4 Weeks ")])]),n("v-sheet",{staticClass:"v-sheet--offset mx-auto",attrs:{"max-width":"calc(100% - 32px)"}},[n("v-sparkline",{attrs:{labels:t.trendLabels,"label-size":"14",value:t.trendValues,gradient:t.gradient,smooth:t.radius||!1,padding:t.padding,"line-width":t.width,"stroke-linecap":t.lineCap,fill:t.fill,type:t.type,"auto-line-width":t.autoLineWidth,"auto-draw":""}})],1)],1),n("v-divider"),t._m(0)],1)])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"center"},[n("h1",{staticClass:"title"},[t._v("How you felt on average")]),n("h1",[t._v("🙂")])])}],i=(n("d3b7"),n("5530")),o=n("2f62"),s=n("bc3a"),u=n.n(s),c={data:function(){return{width:2,radius:10,padding:8,lineCap:"round",gradient:["#1feaea","#ffd200","#f72047"],fill:!1,type:"trend",autoLineWidth:!1,loading:!1}},computed:Object(i["a"])({},Object(o["c"])("statistics",["trendValues","trendLabels"])),methods:Object(i["a"])({},Object(o["b"])("statistics",["fetchMoodTrend"])),created:function(){var t=this;this.loading=!0,u.a.get("https://neighbormood.herokuapp.com/users/2/").then((function(e){t.fetchMoodTrend(e.data)})).finally((function(){return t.loading=!1})).catch((function(t){console.log(t)}))}},f=c,l=(n("d614"),n("2877")),d=n("6544"),h=n.n(d),p=n("b0af"),m=n("99d9"),g=n("ce7e"),y=n("8dd9"),b=(n("99af"),n("cb29"),n("caad"),n("d81d"),n("fb6a"),n("a9e3"),n("25f0"),n("53ca")),v=n("a9ad"),x=n("58df"),w=n("2909");function S(t,e){var n=e.minX,r=e.maxX,a=e.minY,i=e.maxY,o=t.length,s=Math.max.apply(Math,Object(w["a"])(t)),u=Math.min.apply(Math,Object(w["a"])(t)),c=(r-n)/(o-1),f=(i-a)/(s-u||1);return t.map((function(t,e){return{x:n+e*c,y:i-(t-u)*f,value:t}}))}function E(t,e){var n=e.minX,r=e.maxX,a=e.minY,i=e.maxY,o=t.length,s=Math.max.apply(Math,Object(w["a"])(t)),u=Math.min.apply(Math,Object(w["a"])(t));u>0&&(u=0),s<0&&(s=0);var c=r/o,f=(i-a)/(s-u||1),l=i-Math.abs(u*f);return t.map((function(t,e){var r=Math.abs(f*t);return{x:n+e*c,y:l-r+ +(t<0)*r,height:r,value:t}}))}n("a15b");function C(t){return parseInt(t,10)}function j(t,e,n){return C(t.x+n.x)===C(2*e.x)&&C(t.y+n.y)===C(2*e.y)}function O(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function L(t,e,n){var r={x:t.x-e.x,y:t.y-e.y},a=Math.sqrt(r.x*r.x+r.y*r.y),i={x:r.x/a,y:r.y/a};return{x:e.x+i.x*n,y:e.y+i.y*n}}function N(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,a=t.shift(),i=t[t.length-1];return(n?"M".concat(a.x," ").concat(r-a.x+2," L").concat(a.x," ").concat(a.y):"M".concat(a.x," ").concat(a.y))+t.map((function(n,r){var i=t[r+1],o=t[r-1]||a,s=i&&j(i,n,o);if(!i||s)return"L".concat(n.x," ").concat(n.y);var u=Math.min(O(o,n),O(i,n)),c=u/2<e,f=c?u/2:e,l=L(o,n,f),d=L(i,n,f);return"L".concat(l.x," ").concat(l.y,"S").concat(n.x," ").concat(n.y," ").concat(d.x," ").concat(d.y)})).join("")+(n?"L".concat(i.x," ").concat(r-a.x+2," Z"):"")}var B=Object(x["a"])(v["a"]).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,n=e.length,r=0;t.length<n;r++){var a=e[r],i=this.labels[r];i||(i="object"===Object(b["a"])(a)?a.value:a),t.push({x:a.x,value:String(i)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"===typeof t?t:t.value}))},_values:function(){return"trend"===this.type?S(this.normalizedValues,this.boundary):E(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var e=t.$refs.path,n=e.getTotalLength();t.fill?(e.style.transformOrigin="bottom center",e.style.transition="none",e.style.transform="scaleY(0)",e.getBoundingClientRect(),e.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),e.style.transform="scaleY(1)"):(e.style.transition="none",e.style.strokeDasharray=n+" "+n,e.style.strokeDashoffset=Math.abs(n-(t.lastLength||0)).toString(),e.getBoundingClientRect(),e.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),e.style.strokeDashoffset="0"),t.lastLength=n}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,n=this.gradient.slice();n.length||n.push("");var r=Math.max(n.length-1,1),a=n.reverse().map((function(e,n){return t.$createElement("stop",{attrs:{offset:n/r,"stop-color":e||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,gradientUnits:"userSpaceOnUse",x1:"left"===e?"100%":"0",y1:"top"===e?"100%":"0",x2:"right"===e?"100%":"0",y2:"bottom"===e?"100%":"0"}},a)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath:function(){var t=S(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:N(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,n=this.parsedLabels.map((function(n,r){return e.$createElement("text",{attrs:{x:n.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(n,r)])}));return this.genG(n)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=E(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,n,r){var a=this,i="number"===typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(r,"-clip")}},t.map((function(t){return a.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:n,height:t.height,rx:i,ry:i}},[a.autoDraw?a.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(a.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:Object(i["a"])(Object(i["a"])({},this.$attrs),{},{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}}),A=Object(l["a"])(f,r,a,!1,null,null,null);e["default"]=A.exports;h()(A,{VCard:p["a"],VCardTitle:m["c"],VDivider:g["a"],VSheet:y["a"],VSparkline:B})}}]);
//# sourceMappingURL=statistics.b5c84f9f.js.map