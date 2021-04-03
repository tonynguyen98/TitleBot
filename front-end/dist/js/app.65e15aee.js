(function(t){function e(e){for(var n,s,i=e[0],l=e[1],c=e[2],p=0,f=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(f.length)f.shift()();return a.push.apply(a,c||[]),r()}function r(){for(var t,e=0;e<a.length;e++){for(var r=a[e],n=!0,i=1;i<r.length;i++){var l=r[i];0!==o[l]&&(n=!1)}n&&(a.splice(e--,1),t=s(s.s=r[0]))}return t}var n={},o={app:0},a=[];function s(e){if(n[e])return n[e].exports;var r=n[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=n,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(r,n,function(e){return t[e]}.bind(null,n));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=e,i=i.slice();for(var c=0;c<i.length;c++)e(i[c]);var u=l;a.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"034f":function(t,e,r){"use strict";r("85ec")},"56d7":function(t,e,r){"use strict";r.r(e);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),o=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-container",[r("b-row",{staticClass:"vh-100 text-center",attrs:{"align-v":"center","align-h":"center"}},[r("TitleBot")],1)],1),r("b-navbar",{attrs:{variant:"secondary",fixed:"bottom"}},[r("b-navbar-brand",{staticStyle:{color:"white"},attrs:{href:"https://github.com/tonynguyen98"}},[t._v("© Tony Nguyen")])],1)],1)},a=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-container",[n("b-col",{staticClass:"px-5 py-5 mb-5"},[n("b-img",{attrs:{src:r("b79b"),fluid:"",center:""}}),t.show?n("b-form",{staticClass:"py-3",on:{submit:t.onSubmit}},[n("b-row",{staticClass:"py-3"},[n("b-input-group",{staticClass:"mt-3",attrs:{prepend:"http://"}},[n("b-form-input",{attrs:{type:"search",placeholder:"website.com",required:""},model:{value:t.url,callback:function(e){t.url=e},expression:"url"}}),n("b-input-group-append",[!1===t.isLoading?n("b-button",{attrs:{type:"submit",variant:"secondary"}},[t._v("Search ")]):t._e(),!0===t.isLoading?n("b-button",{attrs:{variant:"secondary",disabled:""}},[n("b-spinner",{attrs:{small:""}})],1):t._e()],1)],1)],1)],1):t._e(),""!==t.title?n("b-card",{staticClass:"text-center",attrs:{"align-h":"center"}},[400===t.errorResponse?n("p",{staticStyle:{"font-size":"large",color:"red"}},[t._v(" Bad URL Request ")]):500===t.errorResponse?n("p",{staticStyle:{"font-size":"large",color:"red"}},[t._v(" Unknown Error ")]):200===t.errorResponse?n("b-col",[n("h3",[t._v("The title of this website is:")]),n("p",{staticStyle:{"font-size":"xx-large"}},[n("em",[t._v(t._s(t.title))])])]):t._e()],1):t._e()],1),0!==t.history.length?n("b-card",{staticStyle:{"text-align":"start",border:"1px solid #cecece"},attrs:{title:"History"}},[n("b-table",{attrs:{"per-page":"10","thead-class":"d-none",items:t.history}})],1):t._e()],1)},i=[],l=r("bc3a"),c=r.n(l),u={name:"TitleBot",data:function(){return{url:"",title:"",errorResponse:200,isLoading:!1,history:[],show:!0}},methods:{onSubmit:function(t){var e=this;this.errorResponse=200,this.isLoading=!0,t.preventDefault(),c.a.get("http://localhost:3000/",{params:{url:"http://".concat(this.url)}}).then((function(t){e.title=t.data,e.history.unshift({url:e.url,title:t.data}),e.isLoading=!1})).catch((function(t){e.errorResponse=t.response.status,e.isLoading=!1}))}}},p=u,f=r("2877"),b=Object(f["a"])(p,s,i,!1,null,null,null),d=b.exports,h={name:"App",components:{TitleBot:d}},y=h,g=(r("034f"),Object(f["a"])(y,o,a,!1,null,null,null)),v=g.exports,m=r("5f5b"),_=r("b1e0");r("f9e3"),r("2dd8");n["default"].config.productionTip=!1,n["default"].use(m["a"]),n["default"].use(_["a"]),new n["default"]({render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,r){},b79b:function(t,e,r){t.exports=r.p+"img/Banner.c7330fc7.png"}});
//# sourceMappingURL=app.65e15aee.js.map