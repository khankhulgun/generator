webpackJsonp([19],{"+3Vt":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{url:""}},methods:{},mounted:function(){this.url=window.init.url}}},2:function(e,t,n){e.exports=n("cw6+")},QG1O:function(e,t){e.exports={render:function(){var e=this.$createElement;return(this._self._c||e)("moqup",{attrs:{src:this.url,disable_preview:!0}})},staticRenderFns:[]}},"VU/8":function(e,t){e.exports=function(e,t,n,o,r,i){var a,s=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(a=e,s=e.default);var l,c="function"==typeof s?s.options:s;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),r&&(c._scopeId=r),i?(l=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=l):o&&(l=o),l){var d=c.functional,f=d?c.render:c.beforeCreate;d?(c._injectStyles=l,c.render=function(e,t){return l.call(t),f(e,t)}):c.beforeCreate=f?[].concat(f,l):[l]}return{esModule:a,exports:s,options:c}}},"cw6+":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("I3G/"),r=n.n(o),i=n("BTaQ"),a=n.n(i),s=n("eWm1"),u=n.n(s),l=n("mtWM"),c=n.n(l),d=n("rcTV"),f=n.n(d);window.Vue=r.a,window.axios=c.a,window.axios.defaults.headers.common={"X-Requested-With":"XMLHttpRequest","X-CSRF-TOKEN":document.querySelector('meta[name="csrf-token"]').getAttribute("content")},r.a.config.productionTip=!1,r.a.use(a.a,{locale:u.a}),new r.a({el:"#moqup",extends:f.a})},eWm1:function(e,t,n){var o;"undefined"!=typeof self&&self,o=function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/locale/",n(n.s=18)}({0:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){o||void 0!==window.iview&&("langs"in iview||(iview.langs={}),iview.langs[e.i.locale]=e)};var o=function(e){return e&&e.__esModule?e:{default:e}}(n(1)).default.prototype.$isServer},1:function(t,n){t.exports=e},18:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={i:{locale:"mn-MN",select:{placeholder:"Сонгох",noMatch:"Таарах өгөгдөл байхгүй байна",loading:"Ачааллаж байна"},table:{noDataText:"Өгөгдөл алга",noFilteredDataText:"No filter data",confirmFilter:"Батлах",resetFilter:"Шинээр тохируулах",clearFilter:"Бүгд"},datepicker:{selectDate:"Огноо сонгох",selectTime:"Цаг сонгох",startTime:"Эхлэх Цаг",endTime:"Дуусах Цаг",clear:"Цэвэрлэх",ok:"OK",datePanelLabel:"[mmmm] [yyyy]",month:"Сар",month1:"1-р сар",month2:"2-р сар",month3:"3-р сар",month4:"4-р сар",month5:"5-р сар",month6:"6-р сар",month7:"7-р сар",month8:"8-р сар",month9:"9-р сар",month10:"10-р сар",month11:"11-р сар",month12:"12-р сар",year:"Жил",weekStartDay:"0",weeks:{sun:"Ням",mon:"Дав",tue:"Мяг",wed:"Лха",thu:"Пүр",fri:"Баа",sat:"Бяа"},months:{m1:"1-р сар",m2:"2-р сар",m3:"3-р сар",m4:"4-р сар",m5:"5-р сар",m6:"6-р сар",m7:"7-р сар",m8:"8-р сар",m9:"9-р сар",m10:"10-р сар",m11:"11-р сар",m12:"12-р сар"}},transfer:{titles:{source:"Эх сурвалж",target:"Оноох бай"},filterPlaceholder:"Эндээс хайх",notFoundText:"Олдсонгүй"},modal:{okText:"OK",cancelText:"Болих"},poptip:{okText:"OK",cancelText:"Болих"},page:{prev:"Өмнөх хуудас",next:"Дараах хуудас",total:"Нийт",item:"зүйл",items:"зүйлүүд",prev5:"Өмнөх 5 хуудас",next5:"Дараагийн 5 хуудас",page:"/хуудсанд",goto:"Очих хуудас",p:""},rate:{star:"Од",stars:"Одууд"},tree:{emptyText:"Өгөгдөл алга"}}};(0,function(e){return e&&e.__esModule?e:{default:e}}(n(0)).default)(o),t.default=o}})},e.exports=o(n("I3G/"))},rcTV:function(e,t,n){var o=n("VU/8")(n("+3Vt"),n("QG1O"),!1,null,null,null);e.exports=o.exports}},[2]);