(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-press-loading-loading"],{"5d0f":function(n,t,e){"use strict";var o=e("917a"),a=e.n(o);a.a},"606b":function(n,t,e){"use strict";e.r(t);var o=e("a10d"),a=e("6ac3");for(var i in a)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return a[n]}))}(i);e("5d0f");var r,s=e("6b9f"),c=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"38905553",null,!1,o["a"],r);t["default"]=c.exports},"6ac3":function(n,t,e){"use strict";e.r(t);var o=e("9901"),a=e.n(o);for(var i in o)["default"].indexOf(i)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(i);t["default"]=a.a},"917a":function(n,t,e){var o=e("f18c");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[n.i,o,""]]),o.locals&&(n.exports=o.locals);var a=e("7537").default;a("6432425e",o,!0,{sourceMap:!1,shadowMode:!1})},9901:function(n,t,e){"use strict";e("ba1f");var o=e("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(e("b802")),i={i18n:{"zh-CN":{buttonMode:"按钮模式",pageMode:"页面模式",customBackground:"指定背景色",click:"点击加载",disappear:"三秒后消失"},"en-US":{buttonMode:"Button Mode",pageMode:"Page Mode",customBackground:"Custom Background",click:"Check",disappear:"Check"}},components:{PressLoading:a.default},data:function(){return{options:{btn:{show:!1},page:{show:!1},bg:{show:!1}}}},methods:{onShowLoading:function(n){var t=this;this.options[n].show=!0,setTimeout((function(){t.options[n].show=!1}),3e3)}}};t.default=i},a10d:function(n,t,e){"use strict";var o;e.d(t,"b",(function(){return a})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){return o}));var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"demo-wrap"},[e("demo-block",{attrs:{title:n.t("buttonMode")}},[e("div",{staticClass:"primary-btn",staticStyle:{position:"relative","margin-left":"10px"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=n.$handleEvent(t),n.onShowLoading("btn")}}},[n._v(n._s(n.options.btn.show?"":n.t("click"))),n.options.btn.show?e("press-loading",{attrs:{"loading-scenes":"btn"}}):n._e()],1)]),e("demo-block",{attrs:{title:n.t("pageMode")}},[e("div",{staticClass:"primary-btn",staticStyle:{position:"relative","margin-left":"10px"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=n.$handleEvent(t),n.onShowLoading("page")}}},[n._v(n._s(n.t("check")))])]),e("demo-block",{attrs:{title:n.t("customBackground")}},[e("div",{staticClass:"primary-btn",staticStyle:{position:"relative","margin-left":"10px"},on:{click:function(t){t.stopPropagation(),arguments[0]=t=n.$handleEvent(t),n.onShowLoading("bg")}}},[n._v(n._s(n.t("disappear")))])]),n.options.page.show?e("press-loading"):n._e(),n.options.bg.show?e("press-loading",{attrs:{"loading-bg":"#eee"}}):n._e()],1)},i=[]},f18c:function(n,t,e){var o=e("a8d8");t=o(!1),t.push([n.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 字号 */\n/* color */\n/* 主按钮 */\n/* 次按钮 */\n/* 不可点击按钮 */\n/* 线框按钮 */\n/* 常规按钮背景 */\n/* 特长按钮背景 */\n/* 主理人特长按钮背景 */\n/* 文字超长处理单行 */\n/* 文字超长处理多行 */\n/* 0.5px边框--横向上边框(通过伪元素控制显示) */\n/* 0.5px边框--横向下边框(通过伪元素控制显示) */\n/* 0.5px边框--纵向左边框(通过伪元素控制显示) */\n/* 0.5px边框--纵向右边框(通过伪元素控制显示) */\n/* 0.5px边框--四边框(通过伪元素控制显示) */\n/* 红点单个数字样式 */\n/* 红点多个数字样式 */\n/* 红点提醒样式--不带数字 */.section-content[data-v-38905553]{margin:0 10px}.primary-btn[data-v-38905553]{display:flex;align-items:center;justify-content:center;position:relative;display:flex;align-items:center;justify-content:center;width:2rem;height:.72rem;font-size:.32rem;color:#fff;border-radius:.08rem;background-image:linear-gradient(180deg,#336bcf 0,#339ce5)}.primary-btn[data-v-38905553]:active{background:#0f489f}.primary-btn[data-v-38905553]::after{position:absolute;top:.08rem;right:0;content:"";width:1.52rem;height:.3rem;background:url(https://image-1251917893.file.myqcloud.com/Esports/new/user/btn-bg-r.png) no-repeat 50%;background-size:contain;pointer-events:none}.primary-btn[data-v-38905553]::before{position:absolute;bottom:0;left:0;content:"";width:1.26rem;height:.3rem;background:url(https://image-1251917893.file.myqcloud.com/Esports/new/user/btn-bg-r.png) no-repeat 50%;background-size:contain;pointer-events:none}.secondary-btn[data-v-38905553]{display:flex;align-items:center;justify-content:center;position:relative;display:flex;align-items:center;justify-content:center;width:2rem;height:.72rem;font-size:.32rem;color:#09134e;border-radius:.08rem;background:#dfe2ea}.secondary-btn[data-v-38905553]:active{background:#dfe2ea}',""]),n.exports=t}}]);