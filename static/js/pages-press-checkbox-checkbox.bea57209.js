(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-press-checkbox-checkbox"],{"12c7":function(e,t,a){"use strict";function n(e){var t=[];function a(e){e.forEach((function(e){t.push(e),e.componentInstance&&a(e.componentInstance.$children.map((function(e){return e.$vnode}))),e.children&&a(e.children)}))}return a(e),t}function i(e,t){var a=t.$vnode.componentOptions;if(null!==a&&void 0!==a&&a.children){var i=n(a.children);e.sort((function(e,t){return i.indexOf(e.$vnode)-i.indexOf(t.$vnode)}))}}function r(e){var t=e.find((function(e){return e.sortIndex}));t&&e.sort((function(e,t){return e.sortIndex-t.sortIndex}))}a("ba1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.sortChildren=i,t.sortMPChildren=r,a("e291"),a("49c1"),a("f9f6"),a("a707"),a("15ad"),a("8573"),a("21dd")},"1dc1":function(e,t,a){var n=a("ae42");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("7537").default;i("6270cd97",n,!0,{sourceMap:!1,shadowMode:!1})},2036:function(e,t,a){var n=a("d27f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("7537").default;i("7216316c",n,!0,{sourceMap:!1,shadowMode:!1})},2228:function(e,t,a){"use strict";var n=a("2036"),i=a.n(n);i.a},"39e6":function(e,t,a){"use strict";var n=a("1dc1"),i=a.n(n);i.a},"3e33":function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"press-checkbox-group-index"},[a("div",{class:e.groupClass},[e._t("default")],2)])},r=[]},"3f7f":function(e,t,a){"use strict";a("ba1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a("a455"),i=a("6dc1");function r(e,t,a,r,o){var l={"font-size":(0,i.addUnit)(o)};return e&&t&&!a&&!r&&(l["border-color"]=e,l["background-color"]=e),(0,n.style)(l)}var o={iconStyle:r};t.default=o},"484d":function(e,t,a){"use strict";a("ba1f");var n=a("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d7e5"),a("a8dc"),a("e291"),a("49c1"),a("3b71"),a("83ea"),a("8573"),a("f9f6"),a("747a");var i=n(a("6d7c")),r=n(a("c6e9")),o=n(a("4710")),l=a("7550"),s=a("4bd6"),d=n(a("3f7f")),c=a("d060");function u(e,t){e.$emit("input",t),e.$emit("change",t)}var h={name:"PressCheckbox",options:(0,i.default)({},l.defaultOptions),components:{PressIconPlus:o.default},mixins:[(0,s.ChildrenMixin)(c.PARENT_CHECKBOX_GROUP)],field:!0,props:(0,i.default)({name:{type:String,default:""},value:Boolean,disabled:Boolean,useIconSlot:Boolean,checkedColor:{type:String,default:""},labelPosition:{type:String,default:"right"},labelDisabled:Boolean,shape:{type:String,default:"round"},iconSize:{type:[Number],default:20},iconClass:{type:String,default:""},labelClass:{type:String,default:""},customStyle:{type:String,default:""}},l.defaultProps),emits:["input","change"],data:function(){return{parentDisabled:!1,direction:"vertical",dataValue:this.value}},computed:{innerLabelClass:function(){var e=this.labelClass,t=this.labelPosition,a=this.disabled,n=this.parentDisabled;return"".concat(e," ").concat(r.default.bem2("checkbox__label",[t,{disabled:a||n}]))},checkboxClass:function(){var e=this.direction,t=this.customClass;return"".concat(r.default.bem2("checkbox",[{horizontal:"horizontal"===e}])," ").concat(t)},iconStyle:function(){var e=this.checkedColor,t=this.value,a=this.disabled,n=this.parentDisabled,i=this.iconSize;return d.default.iconStyle(e,t,a,n,i)},innerIconClass:function(){var e=this.shape,t=this.disabled,a=this.parentDisabled,n=this.dataValue;return"".concat(r.default.bem2("checkbox__icon",[e,{disabled:t||a,checked:n}]))}},watch:{value:{handler:function(e){this.dataValue=!!e}}},mounted:function(){this.update()},methods:{update:function(){this[c.PARENT_CHECKBOX_GROUP]&&this[c.PARENT_CHECKBOX_GROUP].updateChildren()},setData:function(e){var t=this;Object.keys(e).forEach((function(a){t[a]=e[a]}))},emitChange:function(e){this[c.PARENT_CHECKBOX_GROUP]?this.setParentValue(this[c.PARENT_CHECKBOX_GROUP],e):u(this,e)},toggle:function(){var e=this.parentDisabled,t=this.disabled,a=this.dataValue;t||e||this.emitChange(!a)},onClickLabel:function(){var e=this.labelDisabled,t=this.parentDisabled,a=this.disabled,n=this.dataValue;a||e||t||this.emitChange(!n)},setParentValue:function(e,t){var a=e.value.slice(),n=this.name,i=e.max;if(t){if(i&&a.length>=i)return;-1===a.indexOf(n)&&(a.push(n),u(e,a))}else{var r=a.indexOf(n);-1!==r&&(a.splice(r,1),u(e,a))}}}};t.default=h},"4bd6":function(e,t,a){"use strict";(function(e){a("ba1f");var n=a("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.ChildrenMixin=l,t.ParentMixin=s,a("8573"),a("ea98"),a("e291"),a("a8dc");var i=n(a("ef56")),r=n(a("e62e")),o=a("12c7");function l(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.indexKey||"index";return{inject:(0,r.default)({},t,{default:null}),computed:(0,r.default)({},n,(function(){var e=this;return e.bindRelation(),e[t]?e[t].children.indexOf(this):null})),watch:{disableBindRelation:function(e){var t=this;e||t.bindRelation()}},created:function(){},mounted:function(){var e=this;e.bindRelation()},beforeDestroy:function(){var e,a=this;a[t]&&(a[t].children=a[t].children.filter((function(e){return e!==a})),null===a||void 0===a||null===(e=a.destroyCallback)||void 0===e||e.call(a))},methods:{bindRelation:function(){if(this[t]&&-1===this[t].children.indexOf(this)){var a=[].concat((0,i.default)(this[t].children),[this]);try{(0,o.sortChildren)(a,this[t])}catch(n){e.log("err",n)}this[t].children=a}}}}}function s(e){return{provide:function(){return(0,r.default)({},e,this)},data:function(){return{}}}}}).call(this,a("44fd")["default"])},5959:function(e,t,a){"use strict";a.r(t);var n=a("f0c2"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},"6f5d":function(e,t,a){"use strict";a.r(t);var n=a("af49"),i=a("5959");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);var o,l=a("6b9f"),s=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"2cea9374",null,!1,n["a"],o);t["default"]=s.exports},"8af4":function(e,t,a){"use strict";a.r(t);var n=a("b52c"),i=a("f383");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("2228");var o,l=a("6b9f"),s=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"1627a689",null,!1,n["a"],o);t["default"]=s.exports},ad1c:function(e,t,a){"use strict";a("ba1f");var n=a("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("d7e5"),a("e291"),a("49c1"),a("8573");var i=n(a("c6e9")),r=a("4bd6"),o=a("d060"),l={name:"PressCheckboxGroup",mixins:[(0,r.ParentMixin)(o.PARENT_CHECKBOX_GROUP)],props:{max:{type:Number,default:0},value:{type:Array,default:function(){return[]}},disabled:{type:Boolean,default:!1},direction:{type:String,default:"vertical"}},emits:[],data:function(){return{}},computed:{groupClass:function(){var e=this.direction;return i.default.bem2("checkbox-group",[{horizontal:"horizontal"===e}])}},watch:{disabled:{handler:function(){this.updateChildren()}},value:{handler:function(){this.updateChildren()}}},created:function(){this.children=[]},methods:{updateChildren:function(){var e=this;this.children.forEach((function(t){return e.updateChild(t)}))},updateChild:function(e){var t=this.value,a=this.disabled,n=this.direction;e.setData({dataValue:-1!==t.indexOf(e.name),parentDisabled:a,direction:n})}}};t.default=l},ae42:function(e,t,a){var n=a("a8d8");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.van-ellipsis[data-v-65368d3d]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.van-multi-ellipsis--l2[data-v-65368d3d]{-webkit-line-clamp:2}.van-multi-ellipsis--l2[data-v-65368d3d],\n.van-multi-ellipsis--l3[data-v-65368d3d]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.van-multi-ellipsis--l3[data-v-65368d3d]{-webkit-line-clamp:3}.van-clearfix[data-v-65368d3d]:after{clear:both;content:"";display:table}.van-hairline[data-v-65368d3d],\n.van-hairline--bottom[data-v-65368d3d],\n.van-hairline--left[data-v-65368d3d],\n.van-hairline--right[data-v-65368d3d],\n.van-hairline--surround[data-v-65368d3d],\n.van-hairline--top[data-v-65368d3d],\n.van-hairline--top-bottom[data-v-65368d3d]{position:relative}.van-hairline--bottom[data-v-65368d3d]:after,\n.van-hairline--left[data-v-65368d3d]:after,\n.van-hairline--right[data-v-65368d3d]:after,\n.van-hairline--surround[data-v-65368d3d]:after,\n.van-hairline--top-bottom[data-v-65368d3d]:after,\n.van-hairline--top[data-v-65368d3d]:after,\n.van-hairline[data-v-65368d3d]:after{border:0 solid #ebedf0;bottom:-50%;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.van-hairline--top[data-v-65368d3d]:after{border-top-width:1px}.van-hairline--left[data-v-65368d3d]:after{border-left-width:1px}.van-hairline--right[data-v-65368d3d]:after{border-right-width:1px}.van-hairline--bottom[data-v-65368d3d]::after{border-bottom-width:1px}.van-hairline--top-bottom[data-v-65368d3d]::after{border-width:1px 0}.van-hairline--surround[data-v-65368d3d]::after{border-width:1px}.press-ellipsis[data-v-65368d3d]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-65368d3d]{-webkit-line-clamp:2}.press-multi-ellipsis--l2[data-v-65368d3d],\n.press-multi-ellipsis--l3[data-v-65368d3d]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l3[data-v-65368d3d]{-webkit-line-clamp:3}.press-clearfix[data-v-65368d3d]:after{clear:both;content:"";display:table}.press-hairline[data-v-65368d3d],\n.press-hairline--bottom[data-v-65368d3d],\n.press-hairline--left[data-v-65368d3d],\n.press-hairline--right[data-v-65368d3d],\n.press-hairline--surround[data-v-65368d3d],\n.press-hairline--top[data-v-65368d3d],\n.press-hairline--top-bottom[data-v-65368d3d]{position:relative}.press-hairline--bottom[data-v-65368d3d]:after,\n.press-hairline--left[data-v-65368d3d]:after,\n.press-hairline--right[data-v-65368d3d]:after,\n.press-hairline--surround[data-v-65368d3d]:after,\n.press-hairline--top-bottom[data-v-65368d3d]:after,\n.press-hairline--top[data-v-65368d3d]:after,\n.press-hairline[data-v-65368d3d]:after{border:0 solid #ebedf0;bottom:-50%;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.press-hairline--top[data-v-65368d3d]:after{border-top-width:1px}.press-hairline--left[data-v-65368d3d]:after{border-left-width:1px}.press-hairline--right[data-v-65368d3d]:after{border-right-width:1px}.press-hairline--bottom[data-v-65368d3d]::after{border-bottom-width:1px}.press-hairline--top-bottom[data-v-65368d3d]::after{border-width:1px 0}.press-hairline--surround[data-v-65368d3d]::after{border-width:1px}.press-checkbox-group--horizontal[data-v-65368d3d]{display:flex;flex-wrap:wrap}',""]),e.exports=t},af49:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"demo-wrap"},[a("demo-block",{attrs:{title:e.t("basicUsage"),"section-style":e.sectionStyle}},[a("press-checkbox",{attrs:{value:e.checkedMap.basic},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.onChange(t,"basic")}.apply(void 0,arguments)}}},[e._v(e._s(e.t("checkbox")))])],1),a("demo-block",{attrs:{title:e.t("disabled"),"section-style":e.sectionStyle}},[a("press-checkbox",{attrs:{value:e.checkedMap.disabled,disabled:!0},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.onChange(t,"disabled")}.apply(void 0,arguments)}}},[e._v(e._s(e.t("checkbox")))])],1),a("demo-block",{attrs:{title:e.t("customShape"),"section-style":e.sectionStyle}},[a("press-checkbox",{attrs:{shape:"square",value:e.checkedMap.shape},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.onChange(t,"shape")}.apply(void 0,arguments)}}},[e._v(e._s(e.t("checkbox")))])],1),a("demo-block",{attrs:{title:e.t("customColor"),"section-style":e.sectionStyle}},[a("press-checkbox",{attrs:{value:e.checkedMap.color,"checked-color":"#07c160"},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.onChange(t,"color")}.apply(void 0,arguments)}}},[e._v(e._s(e.t("checkbox")))])],1),a("demo-block",{attrs:{title:e.t("customIconSize"),"section-style":e.sectionStyle}},[a("press-checkbox",{attrs:{value:e.checkedMap.size,"icon-size":25},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.onChange(t,"size")}.apply(void 0,arguments)}}},[e._v(e._s(e.t("checkbox")))])],1),a("demo-block",{attrs:{title:e.t("disableLabel"),"section-style":e.sectionStyle}},[a("press-checkbox",{attrs:{value:e.checkedMap.noLabel,"label-disabled":!0},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.onChange(t,"noLabel")}.apply(void 0,arguments)}}},[e._v(e._s(e.t("checkbox")))])],1),a("demo-block",{attrs:{title:e.t("title3"),"section-style":e.sectionStyle}},[a("press-checkbox-group",{attrs:{value:e.checkedMap.group},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.onChange(t,"group")}.apply(void 0,arguments)}}},[a("press-checkbox",{attrs:{name:"a","custom-style":e.customStyle}},[e._v(e._s(e.t("checkbox"))+" a")]),a("press-checkbox",{attrs:{name:"b","custom-style":e.customStyle}},[e._v(e._s(e.t("checkbox"))+" b")]),a("press-checkbox",{attrs:{name:"c","custom-style":e.customStyle}},[e._v(e._s(e.t("checkbox"))+" c")])],1)],1),a("demo-block",{attrs:{title:e.t("title4"),"section-style":e.sectionStyle}},[a("press-checkbox-group",{attrs:{value:e.checkedMap.groupMax,max:2},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),function(t){return e.onChange(t,"groupMax")}.apply(void 0,arguments)}}},[a("press-checkbox",{attrs:{name:"a","custom-style":e.customStyle}},[e._v(e._s(e.t("checkbox"))+" A")]),a("press-checkbox",{attrs:{name:"b","custom-style":e.customStyle}},[e._v(e._s(e.t("checkbox"))+" B")]),a("press-checkbox",{attrs:{name:"c","custom-style":e.customStyle}},[e._v(e._s(e.t("checkbox"))+" C")])],1)],1)],1)},r=[]},b52c:function(e,t,a){"use strict";var n;a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{class:e.checkboxClass,style:e.customStyle},["left"===e.labelPosition?a("div",{class:e.innerLabelClass,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickLabel.apply(void 0,arguments)}}},[e._t("default")],2):e._e(),a("div",{staticClass:"press-checkbox__icon-wrap",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.toggle.apply(void 0,arguments)}}},[e.useIconSlot?e._t("icon"):a("press-icon-plus",{class:e.innerIconClass,style:e.iconStyle,attrs:{name:"success",size:"0.8em","custom-class":e.iconClass,"custom-style":"line-height: 1.25em;"}})],2),"right"===e.labelPosition?a("div",{class:e.innerLabelClass,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClickLabel.apply(void 0,arguments)}}},[e._t("default")],2):e._e()])},r=[]},d060:function(e,t,a){"use strict";a("ba1f"),Object.defineProperty(t,"__esModule",{value:!0}),t.PARENT_TABS=t.PARENT_TABBAR=t.PARENT_SIDEBAR=t.PARENT_ROW=t.PARENT_RADIO_GROUP=t.PARENT_PICKER=t.PARENT_INDEX_BAR=t.PARENT_GRID=t.PARENT_DROPDOWN_MENU=t.PARENT_COLLAPSE=t.PARENT_CHECKBOX_GROUP=void 0;var n="checkboxGroup";t.PARENT_CHECKBOX_GROUP=n;var i="collapse";t.PARENT_COLLAPSE=i;var r="picker";t.PARENT_PICKER=r;var o="radioGroup";t.PARENT_RADIO_GROUP=o;var l="sidebar";t.PARENT_SIDEBAR=l;var s="tabbar";t.PARENT_TABBAR=s;var d="tabs";t.PARENT_TABS=d;var c="indexBar";t.PARENT_INDEX_BAR=c;var u="grid";t.PARENT_GRID=u;var h="dropdown-menu";t.PARENT_DROPDOWN_MENU=h;var p="row";t.PARENT_ROW=p},d27f:function(e,t,a){var n=a("a8d8");t=n(!1),t.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.van-ellipsis[data-v-1627a689]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.van-multi-ellipsis--l2[data-v-1627a689]{-webkit-line-clamp:2}.van-multi-ellipsis--l2[data-v-1627a689],\n.van-multi-ellipsis--l3[data-v-1627a689]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.van-multi-ellipsis--l3[data-v-1627a689]{-webkit-line-clamp:3}.van-clearfix[data-v-1627a689]:after{clear:both;content:"";display:table}.van-hairline[data-v-1627a689],\n.van-hairline--bottom[data-v-1627a689],\n.van-hairline--left[data-v-1627a689],\n.van-hairline--right[data-v-1627a689],\n.van-hairline--surround[data-v-1627a689],\n.van-hairline--top[data-v-1627a689],\n.van-hairline--top-bottom[data-v-1627a689]{position:relative}.van-hairline--bottom[data-v-1627a689]:after,\n.van-hairline--left[data-v-1627a689]:after,\n.van-hairline--right[data-v-1627a689]:after,\n.van-hairline--surround[data-v-1627a689]:after,\n.van-hairline--top-bottom[data-v-1627a689]:after,\n.van-hairline--top[data-v-1627a689]:after,\n.van-hairline[data-v-1627a689]:after{border:0 solid #ebedf0;bottom:-50%;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.van-hairline--top[data-v-1627a689]:after{border-top-width:1px}.van-hairline--left[data-v-1627a689]:after{border-left-width:1px}.van-hairline--right[data-v-1627a689]:after{border-right-width:1px}.van-hairline--bottom[data-v-1627a689]::after{border-bottom-width:1px}.van-hairline--top-bottom[data-v-1627a689]::after{border-width:1px 0}.van-hairline--surround[data-v-1627a689]::after{border-width:1px}.press-ellipsis[data-v-1627a689]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.press-multi-ellipsis--l2[data-v-1627a689]{-webkit-line-clamp:2}.press-multi-ellipsis--l2[data-v-1627a689],\n.press-multi-ellipsis--l3[data-v-1627a689]{-webkit-box-orient:vertical;display:-webkit-box;overflow:hidden;text-overflow:ellipsis}.press-multi-ellipsis--l3[data-v-1627a689]{-webkit-line-clamp:3}.press-clearfix[data-v-1627a689]:after{clear:both;content:"";display:table}.press-hairline[data-v-1627a689],\n.press-hairline--bottom[data-v-1627a689],\n.press-hairline--left[data-v-1627a689],\n.press-hairline--right[data-v-1627a689],\n.press-hairline--surround[data-v-1627a689],\n.press-hairline--top[data-v-1627a689],\n.press-hairline--top-bottom[data-v-1627a689]{position:relative}.press-hairline--bottom[data-v-1627a689]:after,\n.press-hairline--left[data-v-1627a689]:after,\n.press-hairline--right[data-v-1627a689]:after,\n.press-hairline--surround[data-v-1627a689]:after,\n.press-hairline--top-bottom[data-v-1627a689]:after,\n.press-hairline--top[data-v-1627a689]:after,\n.press-hairline[data-v-1627a689]:after{border:0 solid #ebedf0;bottom:-50%;box-sizing:border-box;content:" ";left:-50%;pointer-events:none;position:absolute;right:-50%;top:-50%;-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:center;transform-origin:center}.press-hairline--top[data-v-1627a689]:after{border-top-width:1px}.press-hairline--left[data-v-1627a689]:after{border-left-width:1px}.press-hairline--right[data-v-1627a689]:after{border-right-width:1px}.press-hairline--bottom[data-v-1627a689]::after{border-bottom-width:1px}.press-hairline--top-bottom[data-v-1627a689]::after{border-width:1px 0}.press-hairline--surround[data-v-1627a689]::after{border-width:1px}\n/* color */.press-checkbox[data-v-1627a689]{display:flex;align-items:center;overflow:hidden;-webkit-user-select:none;user-select:none}.press-checkbox--horizontal[data-v-1627a689]{margin-right:12px}.press-checkbox__icon-wrap[data-v-1627a689], .press-checkbox__label[data-v-1627a689]{line-height:var(--checkbox-size,20px)}.press-checkbox__icon-wrap[data-v-1627a689]{flex:none}.press-checkbox__icon[data-v-1627a689]{display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:1em;height:1em;color:transparent;text-align:center;transition-property:color,border-color,background-color;font-size:var(--checkbox-size,20px);border:1px solid var(--checkbox-border-color,#c8c9cc);transition-duration:var(--checkbox-transition-duration,.2s)}.press-checkbox__icon--round[data-v-1627a689]{border-radius:100%}.press-checkbox__icon--checked[data-v-1627a689]{color:#fff;background-color:var(--checkbox-checked-icon-color,#1989fa);border-color:var(--checkbox-checked-icon-color,#1989fa)}.press-checkbox__icon--disabled[data-v-1627a689]{background-color:var(--checkbox-disabled-background-color,#ebedf0);border-color:var(--checkbox-disabled-icon-color,#c8c9cc)}.press-checkbox__icon--disabled.press-checkbox__icon--checked[data-v-1627a689]{color:var(--checkbox-disabled-icon-color,#c8c9cc)}.press-checkbox__label[data-v-1627a689]{word-wrap:break-word;padding-left:var(--checkbox-label-margin,10px);color:var(--checkbox-label-color,#323233)}.press-checkbox__label--left[data-v-1627a689]{float:left;margin:0 var(--checkbox-label-margin,10px) 0 0}.press-checkbox__label--disabled[data-v-1627a689]{color:var(--checkbox-disabled-label-color,#c8c9cc)}.press-checkbox__label[data-v-1627a689]:empty{margin:0}',""]),e.exports=t},e138:function(e,t,a){"use strict";a.r(t);var n=a("3e33"),i=a("efb0");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("39e6");var o,l=a("6b9f"),s=Object(l["a"])(i["default"],n["b"],n["c"],!1,null,"65368d3d",null,!1,n["a"],o);t["default"]=s.exports},efb0:function(e,t,a){"use strict";a.r(t);var n=a("ad1c"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},f0c2:function(e,t,a){"use strict";(function(e){a("ba1f");var n=a("de9e").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("8af4")),r=n(a("e138")),o={i18n:{"zh-CN":{checkbox:"复选框",customIcon:"自定义图标",customIconSize:"自定义大小",customColor:"自定义颜色",customShape:"自定义形状",title3:"复选框组",title4:"限制最大可选数",title5:"搭配单元格组件使用",toggleAll:"全选与反选",checkAll:"全选",inverse:"反选",horizontal:"水平排列",disableLabel:"禁用文本点击"},"en-US":{checkbox:"Checkbox",customIcon:"Custom Icon",customIconSize:"Custom Icon Size",customColor:"Custom Color",customShape:"Custom Shape",title3:"Checkbox Group",title4:"Maximum amount of checked options",title5:"Inside a Cell",toggleAll:"Toggle All",checkAll:"Check All",inverse:"Inverse",horizontal:"Horizontal",disableLabel:"Disable label click"}},components:{PressCheckbox:i.default,PressCheckboxGroup:r.default},data:function(){return{checkedMap:{basic:!0,shape:!0,size:!0,color:!0,noLabel:!0,disabled:!0,group:["a","b"],groupMax:[]},sectionStyle:"margin: 1px 18px;",customStyle:"margin-bottom: 8px;"}},methods:{onChange:function(t,a){e.log("[onChange.val]",t,a),this.checkedMap[a]=t}}};t.default=o}).call(this,a("44fd")["default"])},f383:function(e,t,a){"use strict";a.r(t);var n=a("484d"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a}}]);