(function(e){function t(t){for(var r,s,i=t[0],u=t[1],c=t[2],l=0,d=[];l<i.length;l++)s=i[l],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);f&&f(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var i=n[s];0!==a[i]&&(r=!1)}r&&(o.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},s={app:0},a={app:0},o=[];function i(e){return u.p+"js/"+({"friends~statistics~user":"friends~statistics~user",friends:"friends",statistics:"statistics",user:"user",login:"login"}[e]||e)+"."+{"friends~statistics~user":"418eec56",friends:"88b3cdb2",statistics:"b5c84f9f",user:"af6c6249",login:"948d2c9c"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"friends~statistics~user":1,friends:1,statistics:1,user:1};s[e]?t.push(s[e]):0!==s[e]&&n[e]&&t.push(s[e]=new Promise((function(t,n){for(var r="css/"+({"friends~statistics~user":"friends~statistics~user",friends:"friends",statistics:"statistics",user:"user",login:"login"}[e]||e)+"."+{"friends~statistics~user":"c7bbccd1",friends:"a55f1fcc",statistics:"6847cb56",user:"496154f4",login:"31d6cfe0"}[e]+".css",a=u.p+r,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var c=o[i],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===r||l===a))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){c=d[i],l=c.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,o=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=r,delete s[e],f.parentNode.removeChild(f),n(o)},f.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){s[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var o=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=i(e);var d=new Error;c=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",d.name="ChunkLoadError",d.type=r,d.request=s,n[1](d)}a[e]=void 0}};var f=setTimeout((function(){c({type:"timeout",target:l})}),12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var d=0;d<c.length;d++)t(c[d]);var f=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-main",[n("router-view")],1)],1)},a=[],o={name:"App",components:{},data:function(){return{}}},i=o,u=n("2877"),c=n("6544"),l=n.n(c),d=n("7496"),f=n("f6c4"),p=Object(u["a"])(i,s,a,!1,null,null,null),m=p.exports;l()(p,{VApp:d["a"],VMain:f["a"]});var h=n("a18c"),v=n("2f62"),g={namespaced:!0,state:{userId:null},mutations:{setUserId:function(e,t){e.userId=t}},actions:{loadUserId:function(e,t){var n=e.commit;n("setUserId",t)}}},b={namespaced:!0,state:{groups:[{name:"Close friends",value:78},{name:"CS 101",value:60},{name:"Ultimate frisbee",value:65}],moods:[{moodScore:6,moodShortDesc:"Coding with friends",moodDescription:"It was awesome to code in Junction!"},{moodScore:5,moodShortDesc:"Great team",moodDescription:"Feels great to have inspired and motivated friends to code with"}],moodHistory:[{historyData:{}}]}},y=(n("96cf"),n("1da1")),w={namespaced:!0,state:{trendValues:null,trendLabels:null},mutations:{setTrendValues:function(e,t){e.trendValues=t},setTrendLabels:function(e,t){e.trendLabels=t}},actions:{fetchMoodTrend:function(){var e=Object(y["a"])(regeneratorRuntime.mark((function e(t,n){var r,s,a,o,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(r=t.commit,s=[],a=[],o=1,i=0;i<30;i++)s.push(Math.floor(100*n[i].mood)),i%7===0&&28!=i?(a.push("Week ".concat(o)),o++):a.push(" ");r("setTrendValues",s),r("setTrendLabels",a);case 7:case"end":return e.stop()}}),e)})));function t(t,n){return e.apply(this,arguments)}return t}()}};r["default"].use(v["a"]);var _=new v["a"].Store({state:{},mutations:{},actions:{},modules:{user:g,friends:b,statistics:w}}),j=n("5f5b"),S=n("b1e0"),O=(n("f9e3"),n("2dd8"),n("f309"));r["default"].use(O["a"]);var T=new O["a"]({}),k=n("c9bf"),A={clientId:"528704927689-rp1melj37fss23amtpudnf5955s61h02.apps.googleusercontent.com",scope:"profile email",prompt:"select_account"};r["default"].use(k["a"],A),r["default"].use(j["a"]),r["default"].use(S["a"]),r["default"].config.productionTip=!1,new r["default"]({router:h["a"],store:_,vuetify:T,render:function(e){return e(m)}}).$mount("#app")},"8a6d":function(e,t,n){"use strict";n("a1f1")},a18c:function(e,t,n){"use strict";n("45fc"),n("d3b7");var r=n("2b0e"),s=n("8c4f"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("TheNavigation"),n("router-view")],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-bottom-navigation",{attrs:{app:"",color:"primary"}},[n("div",{staticClass:"d-flex justify-space-around align-center"},[n("router-link",{attrs:{to:"/friends"}},[n("v-icon",[e._v(" mdi-account-group ")])],1),n("router-link",{attrs:{to:"/user"}},[n("v-icon",[e._v(" mdi-home ")])],1),n("router-link",{attrs:{to:"/statistics"}},[n("v-icon",[e._v(" mdi-chart-bar ")])],1)],1)])},u=[],c=(n("8a6d"),n("2877")),l=n("6544"),d=n.n(l),f=n("b81c"),p=n("132d"),m={},h=Object(c["a"])(m,i,u,!1,null,"062c0162",null),v=h.exports;d()(h,{VBottomNavigation:f["a"],VIcon:p["a"]});var g={name:"Home",components:{TheNavigation:v}},b=g,y=Object(c["a"])(b,a,o,!1,null,null,null),w=y.exports;r["default"].use(s["a"]);var _=[{path:"/",component:w,meta:{requiresAuth:!0},children:[{path:"/user",name:"User",component:function(){return Promise.all([n.e("friends~statistics~user"),n.e("user")]).then(n.bind(null,"1511"))},meta:{requiresAuth:!0}},{path:"/statistics",name:"Statistics",component:function(){return Promise.all([n.e("friends~statistics~user"),n.e("statistics")]).then(n.bind(null,"fcd1"))},meta:{requiresAuth:!0}},{path:"/friends",name:"Friends",component:function(){return Promise.all([n.e("friends~statistics~user"),n.e("friends")]).then(n.bind(null,"6c40"))},meta:{requiresAuth:!0}},{path:"",redirect:"/user"}]},{path:"/login",name:"Login",component:function(){return n.e("login").then(n.bind(null,"a55b"))}}],j=new s["a"]({mode:"history",base:"/",routes:_});j.beforeEach((function(e,t,n){e.matched.some((function(e){return e.meta.requiresAuth}))?localStorage.userId?n():n({name:"Login"}):n()}));t["a"]=j},a1f1:function(e,t,n){}});
//# sourceMappingURL=app.0fa14012.js.map