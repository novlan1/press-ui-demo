(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-press-image-preview-image-preview"],{1081:function(e,t,i){"use strict";var o;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return o}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("PressOverlay",{attrs:{show:e.innerShow,"custom-style":"background: rgba(0, 0, 0, 0.9);z-index: "+e.getPropOrData("zIndex")+";"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickOverlay.apply(void 0,arguments)}}},[i("div",{staticClass:"press-image-preview",class:[e.getPropOrData("customClass")],style:e.imagePreviewStyle},[e.getPropOrData("showIndex")?i("div",{staticClass:"press-image-preview__index"},[e._v(e._s(e.active+1)+"/"+e._s(e.getPropOrData("images").length))]):e._e(),i("div",{class:["press-image-preview__close-icon","press-image-preview__close-icon--"+e.getPropOrData("closeIconPosition")],on:{click:function(t){t.stopPropagation(),arguments[0]=t=e.$handleEvent(t),e.onClose.apply(void 0,arguments)}}},[e.getPropOrData("closeable")?i("PressIconPlus",{attrs:{name:e.getPropOrData("closeIcon")}}):e._e()],1),i("v-uni-swiper",{staticClass:"press-image-preview__swipe",attrs:{current:e.active},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onChange.apply(void 0,arguments)}}},e._l(e.getPropOrData("images"),(function(t,o){return i("v-uni-swiper-item",{key:o,staticClass:"press-image-preview__swipe-item",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickSwiperItem.apply(void 0,arguments)}}},[i("img",{staticClass:"press-image-preview__image",attrs:{src:t,fit:"contain"}})])})),1),i("div")],1)])},s=[]},"1e7b":function(e,t,i){"use strict";i("ba1f");var o=i("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i("6d7c"));i("d7e5");var s=o(i("6ec5")),a=o(i("4710")),r=i("c667"),c={images:{type:Array,default:function(){return[]}},startPosition:{type:[Number,String],default:0},transition:{type:String,default:"press-fade"},showIndex:{type:Boolean,default:!0},asyncClose:{type:Boolean,default:!1},customStyle:{type:String,default:""},customClass:{type:String,default:""},closeable:{type:Boolean,default:!1},closeIcon:{type:String,default:"clear"},closeIconPosition:{type:String,default:"top-right"},zIndex:{type:Number,default:10}},l={name:"PressImagePreview",components:{PressOverlay:s.default,PressIconPlus:a.default},mixins:[(0,r.functionalMixin)(c)],props:(0,n.default)({},c),emits:["close","change"],data:function(){return{active:0}},computed:{imagePreviewStyle:function(){return this.getPropOrData("customStyle")}},watch:{startPosition:"setActive",show:function(e){e?(this.setActive(+this.getPropOrData("startPosition")),this.$nextTick((function(){}))):this.$emit("close",{index:this.active,url:this.getPropOrData("images")[this.active]})}},mounted:function(){},methods:{showImagePreview:function(e){this.showDialog(e),this.setActive(e.startPosition||0)},onClosed:function(){},onChange:function(e){var t=e.detail.current,i=void 0===t?0:t;this.setActive(i)},emitClose:function(){this.getPropOrData("asyncClose")?this.promiseCallback("cancel"):(this.$emit("close"),this.innerShow=!1,this.promiseCallback("confirm"))},onClose:function(){this.emitClose()},onClickOverlay:function(){this.onClose()},onClickSwiperItem:function(){this.onClose()},setActive:function(e){e!==this.active&&(this.active=e,this.$emit("change",e))}}};t.default=l},2108:function(e,t,i){"use strict";var o=i("706a"),n=i.n(o);n.a},"2f9a":function(e,t,i){var o=i("a8d8");t=o(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* color */.press-image-preview[data-v-03cb52f4]{position:fixed;bottom:0;left:0;width:100%;height:calc(100% - var(--window-top, 0px));z-index:2}.press-image-preview__swipe[data-v-03cb52f4]{height:100%}.press-image-preview__swipe-item[data-v-03cb52f4]{display:flex;align-items:center;justify-content:center;overflow:hidden}.press-image-preview__cover[data-v-03cb52f4]{position:absolute;top:0;left:0}.press-image-preview__image[data-v-03cb52f4]{width:100%;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.press-image-preview__image--vertical[data-v-03cb52f4]{width:auto;height:100%}.press-image-preview__image img[data-v-03cb52f4]{-webkit-user-drag:none}.press-image-preview__image .van-image__error[data-v-03cb52f4],\n.press-image-preview__image .press-image__error[data-v-03cb52f4]{top:30%;height:40%}.press-image-preview__image .van-image__error-icon[data-v-03cb52f4],\n.press-image-preview__image .press-image__error-icon[data-v-03cb52f4]{font-size:36px}.press-image-preview__image .van-image__loading[data-v-03cb52f4],\n.press-image-preview__image .press-image__loading[data-v-03cb52f4]{background-color:initial}.press-image-preview__index[data-v-03cb52f4]{position:absolute;top:16px;left:50%;color:#fff;font-size:14px;line-height:20px;text-shadow:0 1px 1px #323233;-webkit-transform:translate(-50%);transform:translate(-50%)}[data-v-03cb52f4] .press-image-preview__overlay{background-color:rgba(0,0,0,.9)}.press-image-preview__close-icon[data-v-03cb52f4]{position:absolute;z-index:1;color:#c8c9cc;font-size:22px;cursor:pointer}.press-image-preview__close-icon[data-v-03cb52f4]:active{color:#969799}.press-image-preview__close-icon--top-left[data-v-03cb52f4]{top:16px;left:16px}.press-image-preview__close-icon--top-right[data-v-03cb52f4]{top:16px;right:16px}.press-image-preview__close-icon--bottom-left[data-v-03cb52f4]{bottom:16px;left:16px}.press-image-preview__close-icon--bottom-right[data-v-03cb52f4]{right:16px;bottom:16px}',""]),e.exports=t},"38c1":function(e,t,i){"use strict";i("ba1f");var o=i("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o(i("cfee")),s=o(i("8e5b")),a=i("805d"),r={IMAGE_PREVIEW:"press-image-preview"},c={i18n:{"zh-CN":{previewImage:"预览图片",customType:"传入配置",startPosition:"指定初始位置",showCloseIcon:"展示关闭按钮",watchCloseEvent:"监听关闭事件",asyncClose:"异步关闭",componentUse:"组件调用",closeTip:"关闭"},"en-US":{previewImage:"Preview Image",customType:"Custom Config",startPosition:"Set Start Position",showCloseIcon:"Show Close Icon",watchCloseEvent:"Watch Close Event",asyncClose:"Async Close",componentUse:"Component Use",closeTip:"Close"}},components:{ImagePreviewComp:n.default,PressCell:s.default},data:function(){var e="";return{show:!1,customStyle:e,images:["https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_9f901ce42e18990883.jpeg","https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_8f25b9e2e75f6754ad.jpeg","https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/5/own_mike_260c4142c7225b5f73.jpeg"],FUNCTIONAL_ID_MAP:r}},mounted:function(){},methods:{onShowImagePreview:function(){(0,a.imagePreview)({context:this,selector:"#".concat(r.IMAGE_PREVIEW),images:this.images,customStyle:this.customStyle}).then((function(){}))},onShowComponent:function(){this.show=!0},onShowCustomType:function(e){var t=this,i=void 0,o=void 0,n=void 0;"startPosition"===e?i=1:"showCloseIcon"===e?o=!0:"asyncClose"===e&&(n=!0),(0,a.imagePreview)({context:this,selector:"#".concat(r.IMAGE_PREVIEW),images:this.images,customStyle:this.customStyle,startPosition:i,closeable:o,asyncClose:n}).then((function(){"watchCloseEvent"===e&&t.onGTip(t.t("closeTip"))})).catch((function(e){var t=e.context;n&&setTimeout((function(){t.closeDialog()}),2e3)}))}}};t.default=c},"706a":function(e,t,i){var o=i("2f9a");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var n=i("7537").default;n("b41c1dd0",o,!0,{sourceMap:!1,shadowMode:!1})},"7b41":function(e,t,i){"use strict";i.r(t);var o=i("1e7b"),n=i.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(s);t["default"]=n.a},"805d":function(e,t,i){"use strict";i("ba1f");var o=i("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.imagePreview=l;var n=o(i("6d7c")),s=i("7151"),a=i("306c"),r=o(i("cfee")),c="pressImagePreview";function l(e){var t;return e.selector||(t=(0,a.initH5Instance)(r.default,c),t.mode="functional"),(0,s.showFunctionalComponent)((0,n.default)((0,n.default)({},e),{},{dialog:t,show:!0,showFunction:"showImagePreview"}))}},"9ad6":function(e,t,i){"use strict";i.r(t);var o=i("38c1"),n=i.n(o);for(var s in o)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return o[e]}))}(s);t["default"]=n.a},cfee:function(e,t,i){"use strict";i.r(t);var o=i("1081"),n=i("7b41");for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("2108");var a,r=i("6b9f"),c=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"03cb52f4",null,!1,o["a"],a);t["default"]=c.exports},d102:function(e,t,i){"use strict";i.r(t);var o=i("ee10"),n=i("9ad6");for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);var a,r=i("6b9f"),c=Object(r["a"])(n["default"],o["b"],o["c"],!1,null,"09e659a7",null,!1,o["a"],a);t["default"]=c.exports},ee10:function(e,t,i){"use strict";var o;i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return o}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"demo-wrap"},[i("demo-block",{attrs:{title:e.t("basicUsage")}},[i("press-cell",{attrs:{title:e.t("previewImage"),"is-link":!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onShowImagePreview.apply(void 0,arguments)}}})],1),i("demo-block",{attrs:{title:e.t("customType")}},[i("press-cell",{attrs:{title:e.t("startPosition"),"is-link":!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onShowCustomType("startPosition")}}}),i("press-cell",{attrs:{title:e.t("showCloseIcon"),"is-link":!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onShowCustomType("showCloseIcon")}}}),i("press-cell",{attrs:{title:e.t("watchCloseEvent"),"is-link":!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onShowCustomType("watchCloseEvent")}}})],1),i("demo-block",{attrs:{title:e.t("asyncClose")}},[i("press-cell",{attrs:{title:e.t("asyncClose"),"is-link":!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onShowCustomType("asyncClose")}}})],1),i("demo-block",{attrs:{title:e.t("componentUse")}},[i("press-cell",{attrs:{title:e.t("componentUse"),"is-link":!0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onShowComponent.apply(void 0,arguments)}}})],1),i("ImagePreviewComp",{attrs:{show:e.show,closeable:!0,"start-position":1,images:e.images,"custom-style":e.customStyle},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.show=!1}}}),i("ImagePreviewComp",{ref:e.FUNCTIONAL_ID_MAP.IMAGE_PREVIEW,attrs:{id:e.FUNCTIONAL_ID_MAP.IMAGE_PREVIEW,mode:"functional"}})],1)},s=[]}}]);