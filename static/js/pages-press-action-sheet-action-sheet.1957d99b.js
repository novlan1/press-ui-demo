(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-press-action-sheet-action-sheet"],{"13e6":function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("press-popup",{attrs:{show:e.show,position:"bottom",round:e.round,"z-index":e.zIndex,overlay:e.overlay,"custom-class":"press-action-sheet","safe-area-inset-bottom":e.safeAreaInsetBottom,"close-on-click-overlay":e.closeOnClickOverlay},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickOverlay.apply(void 0,arguments)}}},[e.title?n("div",{staticClass:"press-action-sheet__header"},[e._v(e._s(e.title)),n("press-icon-plus",{attrs:{name:"cross","custom-class":"press-action-sheet__close"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClose.apply(void 0,arguments)}}})],1):e._e(),e.description?n("div",{staticClass:"press-action-sheet__description press-hairline--bottom"},[e._v(e._s(e.description))]):e._e(),e.actions&&e.actions.length?n("div",e._l(e.actions,(function(t,a){return n("v-uni-button",{key:a,class:e.getActionClass(t),style:t.color?"color: "+t.color:"",attrs:{"open-type":e.getOpenType(t),"hover-class":"press-action-sheet__item--hover","data-index":a,lang:e.lang,"session-from":e.sessionFrom,"send-message-title":e.sendMessageTitle,"send-message-path":e.sendMessagePath,"send-message-img":e.sendMessageImg,"show-message-card":e.showMessageCard,"app-parameter":e.appParameter},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),function(){return e.onFakeSelect(t,a)}.apply(void 0,arguments)},getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.onGetUserInfo.apply(void 0,arguments)},contact:function(t){arguments[0]=t=e.$handleEvent(t),e.onContact.apply(void 0,arguments)},getphonenumber:function(t){arguments[0]=t=e.$handleEvent(t),e.onGetPhoneNumber.apply(void 0,arguments)},error:function(t){arguments[0]=t=e.$handleEvent(t),e.onError.apply(void 0,arguments)},launchapp:function(t){arguments[0]=t=e.$handleEvent(t),e.onLaunchApp.apply(void 0,arguments)},opensetting:function(t){arguments[0]=t=e.$handleEvent(t),e.onOpenSetting.apply(void 0,arguments)}}},[t.loading?n("press-loading",{attrs:{"custom-class":"press-action-sheet__loading",size:"22px"}}):[e._v(e._s(t.name)),t.subname?n("div",{staticClass:"press-action-sheet__subname"},[e._v(e._s(t.subname))]):e._e()]],2)})),1):e._e(),e._t("default"),e.cancelText?[n("div",{staticClass:"press-action-sheet__gap"}),n("div",{staticClass:"press-action-sheet__cancel",attrs:{"hover-class":"press-action-sheet__cancel--hover","hover-stay-time":"70"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onCancel.apply(void 0,arguments)}}},[e._v(e._s(e.cancelText))])]:e._e()],2)},o=[]},"47b0":function(e,t,n){"use strict";n.r(t);var a=n("c831"),i=n("9b0d");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);var s,r=n("6b9f"),l=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"72a93340",null,!1,a["a"],s);t["default"]=l.exports},"59bf":function(e,t,n){"use strict";(function(e){n("ba1f");var a=n("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ad6b"),n("4bba");var i=a(n("6703")),o=a(n("8e5b")),s={i18n:{"zh-CN":{custom:"自定义",option1:"选项一",option2:"选项二",option3:"选项三",subname:"描述信息",showCancel:"展示取消按钮",buttonText:"弹出菜单",customPanel:"自定义面板",description:"这是一段描述信息",optionStatus:"选项状态",coloredOption:"着色选项",disabledOption:"禁用选项",showDescription:"展示描述信息",wxOpen:"微信开放能力",getUserInfo:"获取用户信息"},"en-US":{custom:"Custom",option1:"Option 1",option2:"Option 2",option3:"Option 3",subname:"Description",showCancel:"Show Cancel Button",buttonText:"Show ActionSheet",customPanel:"Custom Panel",description:"Description",optionStatus:"Option Status",coloredOption:"Colored Option",disabledOption:"Disabled Option",showDescription:"Show Description",wxOpen:"Wechat Open API",getUserInfo:"Get User Info"}},components:{PressActionSheet:i.default,PressCell:o.default},data:function(){var e=[{title:this.t("basicUsage"),list:[{title:this.t("check"),type:"basic"}]},{title:this.t("custom"),list:[{title:this.t("optionStatus"),type:"status"},{title:this.t("showCancel"),type:"cancel"},{title:this.t("showDescription"),type:"description"},{title:this.t("customPanel"),type:"title"}]}];return{demoList:e,show:!1,showCustom:!1,cancelText:"",description:"",title:"",curActions:[]}},computed:{actions:function(){return[{name:this.t("option1")},{name:this.t("option2")},{name:this.t("option3"),subname:this.t("subname"),openType:"share"}]}},mounted:function(){this.curActions=this.actions},methods:{onShowActionSheet:function(e){var t=[{name:this.t("coloredOption"),color:"#ee0a24"},{loading:!0},{name:this.t("disabledOption"),disabled:!0}],n=[{name:this.t("getUserInfo"),color:"#07c160",openType:"getUserInfo"}],a="",i="",o=[],s="";switch(e){case"title":return void(this.showCustom=!0);case"basic":o=this.actions;break;case"wxOpen":o=n,s=this.t("title");break;case"status":o=t;break;case"cancel":o=this.actions,a=this.t("cancel");break;case"description":o=this.actions,i=this.t("description");break;default:}this.show=!0,this.cancelText=a,this.description=i,this.curActions=o,this.title=s},onClose:function(){this.show=!1,this.showCustom=!1},onSelect:function(t){e.log("onSelect.e",t)},onGetUserInfo:function(t){e.log("onGetUserInfo.e",t)}}};t.default=s}).call(this,n("44fd")["default"])},6703:function(e,t,n){"use strict";n.r(t);var a=n("13e6"),i=n("ebe2");for(var o in i)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(o);n("6c8a");var s,r=n("6b9f"),l=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"ff10f5d4",null,!1,a["a"],s);t["default"]=l.exports},"6c8a":function(e,t,n){"use strict";var a=n("ae35"),i=n.n(a);i.a},8761:function(e,t,n){var a=n("a8d8");t=a(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.van-ellipsis[data-v-ff10f5d4]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.van-multi-ellipsis--l2[data-v-ff10f5d4]{-webkit-line-clamp:2}.van-multi-ellipsis--l2[data-v-ff10f5d4],\n.van-multi-ellipsis--l3[data-v-ff10f5d4]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.van-multi-ellipsis--l3[data-v-ff10f5d4]{-webkit-line-clamp:3}.van-clearfix[data-v-ff10f5d4]:after{clear:both;content:"";display:table}.van-hairline[data-v-ff10f5d4],\n.van-hairline--bottom[data-v-ff10f5d4],\n.van-hairline--left[data-v-ff10f5d4],\n.van-hairline--right[data-v-ff10f5d4],\n.van-hairline--surround[data-v-ff10f5d4],\n.van-hairline--top[data-v-ff10f5d4],\n.van-hairline--top-bottom[data-v-ff10f5d4]{position:relative}.van-hairline--bottom[data-v-ff10f5d4]:after,\n.van-hairline--left[data-v-ff10f5d4]:after,\n.van-hairline--right[data-v-ff10f5d4]:after,\n.van-hairline--surround[data-v-ff10f5d4]:after,\n.van-hairline--top-bottom[data-v-ff10f5d4]:after,\n.van-hairline--top[data-v-ff10f5d4]:after,\n.van-hairline[data-v-ff10f5d4]:after{border:0 solid #ebedf0;bottom:-50%;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.van-hairline--top[data-v-ff10f5d4]:after{border-top-width:1px}.van-hairline--left[data-v-ff10f5d4]:after{border-left-width:1px}.van-hairline--right[data-v-ff10f5d4]:after{border-right-width:1px}.van-hairline--bottom[data-v-ff10f5d4]::after{border-bottom-width:1px}.van-hairline--top-bottom[data-v-ff10f5d4]::after{border-width:1px 0}.van-hairline--surround[data-v-ff10f5d4]::after{border-width:1px}.press-ellipsis[data-v-ff10f5d4]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-ff10f5d4]{-webkit-line-clamp:2}.press-multi-ellipsis--l2[data-v-ff10f5d4],\n.press-multi-ellipsis--l3[data-v-ff10f5d4]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l3[data-v-ff10f5d4]{-webkit-line-clamp:3}.press-clearfix[data-v-ff10f5d4]:after{clear:both;content:"";display:table}.press-hairline[data-v-ff10f5d4],\n.press-hairline--bottom[data-v-ff10f5d4],\n.press-hairline--left[data-v-ff10f5d4],\n.press-hairline--right[data-v-ff10f5d4],\n.press-hairline--surround[data-v-ff10f5d4],\n.press-hairline--top[data-v-ff10f5d4],\n.press-hairline--top-bottom[data-v-ff10f5d4]{position:relative}.press-hairline--bottom[data-v-ff10f5d4]:after,\n.press-hairline--left[data-v-ff10f5d4]:after,\n.press-hairline--right[data-v-ff10f5d4]:after,\n.press-hairline--surround[data-v-ff10f5d4]:after,\n.press-hairline--top-bottom[data-v-ff10f5d4]:after,\n.press-hairline--top[data-v-ff10f5d4]:after,\n.press-hairline[data-v-ff10f5d4]:after{border:0 solid #ebedf0;bottom:-50%;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.press-hairline--top[data-v-ff10f5d4]:after{border-top-width:1px}.press-hairline--left[data-v-ff10f5d4]:after{border-left-width:1px}.press-hairline--right[data-v-ff10f5d4]:after{border-right-width:1px}.press-hairline--bottom[data-v-ff10f5d4]::after{border-bottom-width:1px}.press-hairline--top-bottom[data-v-ff10f5d4]::after{border-width:1px 0}.press-hairline--surround[data-v-ff10f5d4]::after{border-width:1px}\n/* color */[data-v-ff10f5d4] .press-action-sheet{max-height:var(--action-sheet-max-height,90%)!important;color:var(--action-sheet-item-text-color,#323233)}[data-v-ff10f5d4] .press-action-sheet__item,[data-v-ff10f5d4] .press-action-sheet__cancel{padding:14px 16px;text-align:center;font-size:var(--action-sheet-item-font-size,16px);line-height:var(--action-sheet-item-line-height,22px);background-color:var(--action-sheet-item-background,#fff);display:block;border:0;width:100%}[data-v-ff10f5d4] .press-action-sheet__item--hover,[data-v-ff10f5d4] .press-action-sheet__cancel--hover{background-color:#f2f3f5}[data-v-ff10f5d4] .press-action-sheet__item::after,[data-v-ff10f5d4] .press-action-sheet__cancel::after{border-width:0}[data-v-ff10f5d4] .press-action-sheet__cancel{color:var(--action-sheet-cancel-text-color,#646566)}[data-v-ff10f5d4] .press-action-sheet__gap{display:block;height:var(--action-sheet-cancel-padding-top,8px);background-color:var(--action-sheet-cancel-padding-color,#f7f8fa)}[data-v-ff10f5d4] .press-action-sheet__item--disabled{color:var(--action-sheet-item-disabled-text-color,#c8c9cc)}[data-v-ff10f5d4] .press-action-sheet__item--disabled.press-action-sheet__item--hover{background-color:var(--action-sheet-item-background,#fff)}[data-v-ff10f5d4] .press-action-sheet__subname{margin-top:var(--padding-xs,8px);font-size:var(--action-sheet-subname-font-size,12px);color:var(--action-sheet-subname-color,#969799);line-height:var(--action-sheet-subname-line-height,20px)}[data-v-ff10f5d4] .press-action-sheet__header{text-align:center;font-weight:var(--font-weight-bold,500);font-size:var(--action-sheet-header-font-size,16px);line-height:var(--action-sheet-header-height,48px)}[data-v-ff10f5d4] .press-action-sheet__description{text-align:center;padding:20px var(--padding-md,16px);color:var(--action-sheet-description-color,#969799);font-size:var(--action-sheet-description-font-size,14px);line-height:var(--action-sheet-description-line-height,20px)}[data-v-ff10f5d4] .press-action-sheet__close{position:absolute!important;top:0;right:0;line-height:inherit!important;padding:var(--action-sheet-close-icon-padding,0 16px);font-size:var(--action-sheet-close-icon-size,22px)!important;color:var(--action-sheet-close-icon-color,#c8c9cc)}[data-v-ff10f5d4] .press-action-sheet__loading{display:flex!important}',""]),e.exports=t},"9b0d":function(e,t,n){"use strict";n.r(t);var a=n("59bf"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a},ae35:function(e,t,n){var a=n("8761");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var i=n("7537").default;i("15087eba",a,!0,{sourceMap:!1,shadowMode:!1})},c831:function(e,t,n){"use strict";var a;n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return o})),n.d(t,"a",(function(){return a}));var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"demo-wrap"},[e._l(e.demoList,(function(t,a){return n("demo-block",{key:a,attrs:{title:t.title}},e._l(t.list,(function(t){return n("press-cell",{key:t.title,attrs:{title:t.title,"is-link":!0},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.onShowActionSheet(t.type)}}})})),1)})),n("press-action-sheet",{attrs:{show:e.show,actions:e.curActions,"cancel-text":e.cancelText,description:e.description,title:e.title},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.onClose.apply(void 0,arguments)},select:function(t){arguments[0]=t=e.$handleEvent(t),e.onSelect.apply(void 0,arguments)},getuserinfo:function(t){arguments[0]=t=e.$handleEvent(t),e.onGetUserInfo.apply(void 0,arguments)}}}),n("press-action-sheet",{attrs:{show:e.showCustom,title:e.t("title")},on:{close:function(t){arguments[0]=t=e.$handleEvent(t),e.onClose.apply(void 0,arguments)},select:function(t){arguments[0]=t=e.$handleEvent(t),e.onSelect.apply(void 0,arguments)}}},[n("div",{staticStyle:{padding:"16px"}},[e._v(e._s(e.t("content")))])])],2)},o=[]},cb00:function(e,t,n){"use strict";n("ba1f");var a=n("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("d7e5"),n("a8dc");var i=a(n("6d7c")),o=a(n("4710")),s=a(n("3147")),r=a(n("f42f")),l=n("2643"),f=n("7550"),c=a(n("c6e9")),d={name:"PressActionSheet",options:(0,i.default)((0,i.default)({},f.defaultOptions),{},{styleIsolation:"shared"}),components:{PressIconPlus:o.default,PressPopup:s.default,PressLoading:r.default},mixins:[l.button],props:(0,i.default)({show:{type:Boolean,default:!1},title:{type:String,default:""},cancelText:{type:String,default:""},description:{type:String,default:""},round:{type:Boolean,default:!0},zIndex:{type:Number,default:100},actions:{type:Array,default:function(){return[]}},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},closeOnClickAction:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!0}},f.defaultProps),emits:["select","close","cancel","click-overlay","getuserinfo"],data:function(){return{}},methods:{getActionClass:function(e){return"".concat(c.default.bem2("action-sheet__item",{disabled:e.disabled||e.loading})," ").concat(e.className||"")},getOpenType:function(e){var t=this.canIUseGetUserProfile;return e.disabled||e.loading||t&&"getUserInfo"===e.openType?"":e.openType},onFakeSelect:function(e,t){e.disabled||e.loading||this.onSelect(e,t)},onSelect:function(e){var t=this,n=this.closeOnClickAction,a=this.canIUseGetUserProfile;e&&(this.$emit("select",e),n&&this.onClose(),"getUserInfo"===e.openType&&a&&uni.getUserProfile({desc:e.getUserProfileDesc||"  ",complete:function(e){t.$emit("getuserinfo",e)}}))},onCancel:function(){this.$emit("cancel")},onClose:function(){this.$emit("close")},onClickOverlay:function(){this.$emit("click-overlay"),this.onClose()}}};t.default=d},ebe2:function(e,t,n){"use strict";n.r(t);var a=n("cb00"),i=n.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){n.d(t,e,(function(){return a[e]}))}(o);t["default"]=i.a}}]);