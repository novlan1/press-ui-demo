(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-press-fab-fab"],{"1a4f":function(t,e,n){"use strict";var o;n.d(e,"b",(function(){return i})),n.d(e,"c",(function(){return c})),n.d(e,"a",(function(){return o}));var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-wrap"},[n("demo-block",{attrs:{title:t.t("basicUsage")}},[n("press-cell",{attrs:{title:t.t("toggleDirection"),"is-link":!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchBtn(0)}}}),n("press-cell",{attrs:{title:t.t("changeColor"),"is-link":!0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.switchColor.apply(void 0,arguments)}}})],1),n("press-fab",{ref:"fabRef",attrs:{pattern:t.pattern,content:t.content,horizontal:t.horizontal,vertical:t.vertical,direction:t.direction,top:t.top},on:{trigger:function(e){arguments[0]=e=t.$handleEvent(e),t.trigger.apply(void 0,arguments)},fabClick:function(e){arguments[0]=e=t.$handleEvent(e),t.fabClick.apply(void 0,arguments)}}})],1)},c=[]},2925:function(t,e,n){"use strict";var o=n("d073"),i=n.n(o);i.a},"4b51":function(t,e,n){"use strict";(function(t){n("ba1f");var o=n("de9e").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a8dc");var i=o(n("4ad2")),c=o(n("8e5b")),a=n("c6e9"),r=n("e293"),s={i18n:{"zh-CN":{toggleDirection:"切换方向",changeColor:"修改颜色",prompt:"提示",you:"您",image:"相册",home:"首页",star:"收藏",modalContent:function(t,e){return"你".concat(e?"选中了":"取消了").concat(t)}},"en-US":{toggleDirection:"Direction",changeColor:"Color",prompt:"Prompt",selected:"selected",cancelled:"cancelled",you:"You",image:"image",home:"home",star:"star",modalContent:function(t,e){return"You ".concat(e?"selected":"cancelled"," ").concat(t)}}},components:{PressFab:i.default,PressCell:c.default},data:function(){return{title:"press-fab",horizontal:"right",vertical:"bottom",direction:"horizontal",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#007AFF",iconColor:"#fff"},is_color_type:!1,content:[{iconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_394e9b73a2b402c417.png",selectedIconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_ddaf193c855d2d4b93.png",text:this.t("image"),active:!1},{iconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_48f3dce2ae13561480.png",selectedIconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_119ad562534f721c7f.png",text:this.t("home"),active:!1},{iconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_069e81d6aae9e308e1.png",selectedIconPath:"https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_eda1e7d95cb62dc6e1.png",text:this.t("star"),active:!1}],top:(0,a.isNotInUni)()?44:0}},onBackPress:function(){return!!this.$refs.fabRef.isShow&&(this.$refs.fabRef.close(),!0)},methods:{trigger:function(e){var n=this,o=this.t,i=this.content;t.log("[trigger] e: ",e),this.content[e.index].active=!e.item.active,uni.showModal({title:o("prompt"),content:this.t("modalContent",e.item.text,i[e.index].active),confirmText:o("confirm"),cancelText:o("cancel"),success:function(t){t.confirm?n.onGTip("confirm"):t.cancel&&n.onGTip("cancel")}})},fabClick:function(){t.log("[fabClick]")},switchBtn:function(t,e){var n=this.$refs.fabRef,o=n.onClick,i=n.isShow;i||null===o||void 0===o||o(),0===t?this.direction="horizontal"===this.direction?"vertical":"horizontal":(this.horizontal=t,this.vertical=e),(0,r.forceUpdate)(this)},switchColor:function(){this.is_color_type=!this.is_color_type,this.is_color_type?(this.pattern.iconColor="#aaa",this.pattern.buttonColor="#fff"):(this.pattern.iconColor="#fff",this.pattern.buttonColor="#007AFF")}}};e.default=s}).call(this,n("44fd")["default"])},"5d7c":function(t,e,n){"use strict";n.r(e);var o=n("4b51"),i=n.n(o);for(var c in o)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(c);e["default"]=i.a},"7bfc":function(t,e,n){"use strict";n.r(e);var o=n("1a4f"),i=n("5d7c");for(var c in i)["default"].indexOf(c)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(c);n("2925");var a,r=n("6b9f"),s=Object(r["a"])(i["default"],o["b"],o["c"],!1,null,"850397d6",null,!1,o["a"],a);e["default"]=s.exports},"8fdd":function(t,e,n){var o=n("a8d8");e=o(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.button[data-v-850397d6]{margin-bottom:10px}',""]),t.exports=e},d073:function(t,e,n){var o=n("8fdd");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("7537").default;i("2c7dc1bc",o,!0,{sourceMap:!1,shadowMode:!1})}}]);