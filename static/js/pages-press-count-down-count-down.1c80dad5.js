(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-press-count-down-count-down"],{"00d1":function(e,t,n){var a=n("a8d8");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.item[data-v-4d1512ea]{display:inline-block;width:22px;margin-right:5px;color:#fff;font-size:12px;text-align:center;background-color:#1989fa;border-radius:2px}',""]),e.exports=t},"2e8e":function(e,t,n){var a=n("ac48");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("7537").default;i("195baf67",a,!0,{sourceMap:!1,shadowMode:!1})},"658b":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"press-count-down"},[e.useSlot?e._t("default",[n("span",[e._v(e._s(e.formattedTime))])],{timeData:e.timeData}):[e._v(e._s(e.formattedTime))]],2)},r=[]},"68e8":function(e,t,n){"use strict";function a(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n="".concat(e);while(n.length<t)n="0".concat(n);return n}n("ba1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.isSameSecond=c,t.parseFormat=d,t.parseTimeData=l,n("8573"),n("2ff4"),n("7e1b");var i=1e3,r=60*i,o=60*r,s=24*o;function l(e){var t=Math.floor(e/s),n=Math.floor(e%s/o),a=Math.floor(e%o/r),l=Math.floor(e%r/i),d=Math.floor(e%i);return{days:t,hours:n,minutes:a,seconds:l,milliseconds:d}}function d(e,t){var n=t.days,i=t.hours,r=t.minutes,o=t.seconds,s=t.milliseconds;return-1===e.indexOf("DD")?i+=24*n:e=e.replace("DD",a(n)),-1===e.indexOf("HH")?r+=60*i:e=e.replace("HH",a(i)),-1===e.indexOf("mm")?o+=60*r:e=e.replace("mm",a(r)),-1===e.indexOf("ss")?s+=1e3*o:e=e.replace("ss",a(o)),e.replace("SSS",a(s,3))}function c(e,t){return Math.floor(e/1e3)===Math.floor(t/1e3)}},"6ab6":function(e,t,n){"use strict";var a=n("7881"),i=n.n(a);i.a},7881:function(e,t,n){var a=n("00d1");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("7537").default;i("4bf56930",a,!0,{sourceMap:!1,shadowMode:!1})},"8c16":function(e,t,n){"use strict";n.r(t);var a=n("f4fa"),i=n("dcfd");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("6ab6");var o,s=n("6b9f"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"4d1512ea",null,!1,a["a"],o);t["default"]=l.exports},"8e5c":function(e,t,n){"use strict";n("ba1f");var a=n("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("fcae")),r=a(n("49d6")),o=a(n("7534")),s=n("7151"),l=n("bed8"),d={i18n:{"zh-CN":{millisecond:"毫秒级渲染",customStyle:"自定义样式",customFormat:"自定义格式",manualControl:"手动控制",formatWithDay:"DD 天 HH 时 mm 分 ss 秒",reset:"重置",pause:"暂停",start:"开始",finished:"倒计时结束"},"en-US":{millisecond:"Millisecond",customStyle:"Custom Style",customFormat:"Custom Format",manualControl:"Manual Control",formatWithDay:"DD Day, HH:mm:ss",reset:"Reset",pause:"Pause",start:"Start",finished:"Finished"}},components:{PressCountDown:i.default,PressGrid:r.default,PressGridItem:o.default},data:function(){return{time:108e6,sectionStyle:"margin: 0 12px 20px;"}},methods:{onChange:function(){},start:function(){var e=(0,s.selectComponent)(this,"#controlCountDown");(0,l.setData)(e,null,"start")},pause:function(){var e=(0,s.selectComponent)(this,"#controlCountDown");(0,l.setData)(e,null,"pause")},reset:function(){var e=(0,s.selectComponent)(this,"#controlCountDown");(0,l.setData)(e,null,"reset")},finished:function(){}}};t.default=d},ac48:function(e,t,n){var a=n("a8d8");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.van-ellipsis[data-v-00e882e2]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.van-multi-ellipsis--l2[data-v-00e882e2]{-webkit-line-clamp:2}.van-multi-ellipsis--l2[data-v-00e882e2],\n.van-multi-ellipsis--l3[data-v-00e882e2]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.van-multi-ellipsis--l3[data-v-00e882e2]{-webkit-line-clamp:3}.van-clearfix[data-v-00e882e2]:after{clear:both;content:"";display:table}.van-hairline[data-v-00e882e2],\n.van-hairline--bottom[data-v-00e882e2],\n.van-hairline--left[data-v-00e882e2],\n.van-hairline--right[data-v-00e882e2],\n.van-hairline--surround[data-v-00e882e2],\n.van-hairline--top[data-v-00e882e2],\n.van-hairline--top-bottom[data-v-00e882e2]{position:relative}.van-hairline--bottom[data-v-00e882e2]:after,\n.van-hairline--left[data-v-00e882e2]:after,\n.van-hairline--right[data-v-00e882e2]:after,\n.van-hairline--surround[data-v-00e882e2]:after,\n.van-hairline--top-bottom[data-v-00e882e2]:after,\n.van-hairline--top[data-v-00e882e2]:after,\n.van-hairline[data-v-00e882e2]:after{border:0 solid #ebedf0;bottom:-50%;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.van-hairline--top[data-v-00e882e2]:after{border-top-width:1px}.van-hairline--left[data-v-00e882e2]:after{border-left-width:1px}.van-hairline--right[data-v-00e882e2]:after{border-right-width:1px}.van-hairline--bottom[data-v-00e882e2]::after{border-bottom-width:1px}.van-hairline--top-bottom[data-v-00e882e2]::after{border-width:1px 0}.van-hairline--surround[data-v-00e882e2]::after{border-width:1px}.press-ellipsis[data-v-00e882e2]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-00e882e2]{-webkit-line-clamp:2}.press-multi-ellipsis--l2[data-v-00e882e2],\n.press-multi-ellipsis--l3[data-v-00e882e2]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l3[data-v-00e882e2]{-webkit-line-clamp:3}.press-clearfix[data-v-00e882e2]:after{clear:both;content:"";display:table}.press-hairline[data-v-00e882e2],\n.press-hairline--bottom[data-v-00e882e2],\n.press-hairline--left[data-v-00e882e2],\n.press-hairline--right[data-v-00e882e2],\n.press-hairline--surround[data-v-00e882e2],\n.press-hairline--top[data-v-00e882e2],\n.press-hairline--top-bottom[data-v-00e882e2]{position:relative}.press-hairline--bottom[data-v-00e882e2]:after,\n.press-hairline--left[data-v-00e882e2]:after,\n.press-hairline--right[data-v-00e882e2]:after,\n.press-hairline--surround[data-v-00e882e2]:after,\n.press-hairline--top-bottom[data-v-00e882e2]:after,\n.press-hairline--top[data-v-00e882e2]:after,\n.press-hairline[data-v-00e882e2]:after{border:0 solid #ebedf0;bottom:-50%;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.press-hairline--top[data-v-00e882e2]:after{border-top-width:1px}.press-hairline--left[data-v-00e882e2]:after{border-left-width:1px}.press-hairline--right[data-v-00e882e2]:after{border-right-width:1px}.press-hairline--bottom[data-v-00e882e2]::after{border-bottom-width:1px}.press-hairline--top-bottom[data-v-00e882e2]::after{border-width:1px 0}.press-hairline--surround[data-v-00e882e2]::after{border-width:1px}\n/* color */.press-count-down[data-v-00e882e2]{color:var(--count-down-text-color,#323233);font-size:var(--count-down-font-size,14px);line-height:var(--count-down-line-height,20px)}',""]),e.exports=t},af45:function(e,t,n){"use strict";n("ba1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d7e5");var a=n("68e8");function i(e){return setTimeout(e,30)}var r={name:"PressCountDown",props:{useSlot:Boolean,millisecond:Boolean,time:{type:Number,default:0},format:{type:String,default:"HH:mm:ss"},autoStart:{type:Boolean,default:!0}},emits:["change","finish"],data:function(){return{formattedTime:"0",remain:0}},computed:{timeData:function(){var e=(0,a.parseTimeData)(this.remain);return e}},watch:{time:{handler:function(e){var t=this.remain,n=this.millisecond;(n||Math.floor(e/1e3)!==Math.floor(t/1e3)&&Math.round(e/1e3)!==Math.round(t/1e3))&&this.reset()},immediate:!0}},destroyed:function(){this.onDestroyed()},unmounted:function(){this.onDestroyed()},methods:{onDestroyed:function(){clearTimeout(this.tid),this.tid=null},start:function(){this.counting||(this.counting=!0,this.endTime=Date.now()+this.remain,this.tick())},pause:function(){this.counting=!1,clearTimeout(this.tid)},reset:function(){this.pause(),this.remain=this.time,this.setRemain(this.remain),this.autoStart&&this.start()},tick:function(){this.millisecond?this.microTick():this.macroTick()},microTick:function(){var e=this;this.tid=i((function(){e.setRemain(e.getRemain()),0!==e.remain&&e.microTick()}))},macroTick:function(){var e=this;this.tid=i((function(){var t=e.getRemain();(0,a.isSameSecond)(t,e.remain)&&0!==t||e.setRemain(t),0!==e.remain&&e.macroTick()}))},getRemain:function(){return Math.max(this.endTime-Date.now(),0)},setRemain:function(e){this.remain=e;var t=(0,a.parseTimeData)(e);this.useSlot&&this.$emit("change",t),this.formattedTime=(0,a.parseFormat)(this.format,t),0===e&&(this.pause(),this.$emit("finish"))}}};t.default=r},d060:function(e,t,n){"use strict";n("ba1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.PARENT_TABS=t.PARENT_TABBAR=t.PARENT_SIDEBAR=t.PARENT_ROW=t.PARENT_RADIO_GROUP=t.PARENT_PICKER=t.PARENT_INDEX_BAR=t.PARENT_GRID=t.PARENT_DROPDOWN_MENU=t.PARENT_COLLAPSE=t.PARENT_CHECKBOX_GROUP=void 0;var a="checkboxGroup";t.PARENT_CHECKBOX_GROUP=a;var i="collapse";t.PARENT_COLLAPSE=i;var r="picker";t.PARENT_PICKER=r;var o="radioGroup";t.PARENT_RADIO_GROUP=o;var s="sidebar";t.PARENT_SIDEBAR=s;var l="tabbar";t.PARENT_TABBAR=l;var d="tabs";t.PARENT_TABS=d;var c="indexBar";t.PARENT_INDEX_BAR=c;var u="grid";t.PARENT_GRID=u;var f="dropdown-menu";t.PARENT_DROPDOWN_MENU=f;var p="row";t.PARENT_ROW=p},dcfd:function(e,t,n){"use strict";n.r(t);var a=n("8e5c"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},e655:function(e,t,n){"use strict";n.r(t);var a=n("af45"),i=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},f4fa:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-wrap"},[n("demo-block",{attrs:{title:e.t("basicUsage"),"section-style":e.sectionStyle}},[n("press-count-down",{attrs:{time:e.time}})],1),n("demo-block",{attrs:{title:e.t("customFormat"),"section-style":e.sectionStyle}},[n("press-count-down",{attrs:{time:e.time,format:e.t("formatWithDay")}})],1),n("demo-block",{attrs:{title:e.t("millisecond"),"section-style":e.sectionStyle}},[n("press-count-down",{attrs:{time:e.time,millisecond:!0,format:"HH:mm:ss:SSS"}})],1),n("demo-block",{attrs:{title:e.t("customStyle"),"section-style":e.sectionStyle}},[n("press-count-down",{attrs:{"use-slot":!0,time:e.time},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onChange.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.timeData;return[n("span",{staticClass:"item"},[e._v(e._s(a.hours))]),n("span",{staticClass:"item"},[e._v(e._s(a.minutes))]),n("span",{staticClass:"item"},[e._v(e._s(a.seconds))])]}}])})],1),n("demo-block",{attrs:{title:e.t("manualControl"),"section-style":e.sectionStyle}},[n("press-count-down",{ref:"controlCountDown",attrs:{id:"controlCountDown",millisecond:!0,time:3e3,"auto-start":!1,format:"ss:SSS"},on:{finish:function(t){arguments[0]=t=e.$handleEvent(t),e.finished.apply(void 0,arguments)}}})],1),n("press-grid",{attrs:{clickable:!0,"column-num":3}},[n("press-grid-item",{attrs:{text:e.t("start"),icon:"play-circle-o"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.start.apply(void 0,arguments)}}}),n("press-grid-item",{attrs:{text:e.t("pause"),icon:"pause-circle-o"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.pause.apply(void 0,arguments)}}}),n("press-grid-item",{attrs:{text:e.t("reset"),icon:"replay"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.reset.apply(void 0,arguments)}}})],1)],1)},r=[]},fcae:function(e,t,n){"use strict";n.r(t);var a=n("658b"),i=n("e655");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(r);n("fcfb");var o,s=n("6b9f"),l=Object(s["a"])(i["default"],a["b"],a["c"],!1,null,"00e882e2",null,!1,a["a"],o);t["default"]=l.exports},fcfb:function(e,t,n){"use strict";var a=n("2e8e"),i=n.n(a);i.a}}]);