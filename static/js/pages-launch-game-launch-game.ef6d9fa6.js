(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-launch-game-launch-game"],{1261:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("936c");function r(e){var n,t=a.__spreadArray([],e,!0),r=t.length;while(r>1){var o=Math.floor(Math.random()*r);r-=1,n=[t[o],t[r]],t[r]=n[0],t[o]=n[1]}return t}function o(e,n){for(var t=0,a=0;a<=Math.min(n,e.length-1);a++)t+=e[a];return t}n.getAccCellWidth=o,n.shuffle=r},"33cf":function(e,n,t){var a=t("9f5f");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var r=t("7537").default;r("12522386",a,!0,{sourceMap:!1,shadowMode:!1})},"4c2b":function(e,n,t){"use strict";t("ba1f");var a=t("de9e").default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("32f0")),o=t("91b8"),u=t("52c8"),i=a(t("9d1c")),c=a(t("8e5b")),l=a(t("5246")),s=a(t("7d30")),d=a(t("2c05")),f=a(t("fee5")),m=t("f0f2"),v=[{label:"GN",value:"GN",launchFunc:o.launchGNGameRoom,launchParams:{uin:!1,roomId:{label:"Room Id"},roomPwd:{label:"Room Pwd"}}},{label:"GP",value:"GP",launchFunc:o.launchGPGameRoom,launchParams:{uin:!1,roomId:{label:"Room Id"},roomPwd:{label:"Room Pwd"}}},{label:"DDZ",value:"DDZ",launchFunc:o.launchDDZGameRoom,launchParams:{uin:!0,roomId:{label:"Series Id"},roomPwd:{label:"Game Id"}}},{label:"MJ",value:"MJ",launchFunc:o.launchMJGameRoom,launchParams:{uin:!0,roomId:{label:"Series Id"},roomPwd:{label:"Game Id"}}}],p=(0,u.flatten)(v,"value"),h={components:{PressPopupCell:i.default,PressCell:c.default,PressButton:l.default,PressField:s.default,PressPicker:d.default},data:function(){return{FUNCTIONAL_ID_MAP:m.FUNCTIONAL_ID_MAP,inputRoomId:"",inputRoomPwd:"",inputUin:"",curGame:"GN"}},computed:{curGameParams:function(){var e=p[this.curGame]||{},n=e.launchParams;return n||{}}},created:function(){},mounted:function(){},methods:{onLaunchGame:function(){var e,n=this,t=null===(e=p[this.curGame])||void 0===e?void 0:e.launchFunc;t&&t({roomId:this.inputRoomId||"",roomPwd:this.inputRoomPwd||"",seriesId:this.inputRoomId||"",gameId:this.inputRoomPwd||"",uin:this.inputUin||"",context:this,qrCodeLib:r.default,dialogHandler:f.default}).then((function(){n.onGTip("Launch Success")})).catch((function(){n.onGTip("Launch Fail")}))},onSelectGame:function(){var e=this;(0,m.showPicker)({title:"Select Game",closeIcon:!0,list:v,current:{value:this.curGame}}).then((function(n){var t=n.item;e.curGame=t.value,e.onGTip("Set Successfully")})).catch((function(){}))}}};n.default=h},"52c8":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("c5fe"),r=t("1261"),o=t("57cf");t("936c"),t("ce5f"),n.flat=a.flat,n.flatten=a.flatten,n.getAccCellWidth=r.getAccCellWidth,n.shuffle=r.shuffle,n.compareTwoList=o.compareTwoList,n.flattenPreData=o.flattenPreData,n.getKeyValuesMap=o.getKeyValuesMap,n.getMaxAndMinIdx=o.getMaxAndMinIdx,n.getPreviousRatio=o.getPreviousRatio,n.isListAllEqual=o.isListAllEqual},5659:function(e,n,t){"use strict";var a=t("33cf"),r=t.n(a);r.a},"57cf":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var a=t("936c"),r=t("ce5f");function o(e){if(void 0===e&&(e=[]),!e.length)return!0;for(var n=e[0],t=0,a=e.slice(1);t<a.length;t++){var r=a[t];if(r!==n)return!1}return!0}function u(e){if(void 0===e&&(e=[]),!e.length)return{};var n=Object.keys(e[0]),t={};return e.forEach((function(e){n.forEach((function(n){var a,r=(null===(a=e[n])||void 0===a?void 0:a.value)||e[n];t[n]?t[n].push(r):t[n]=[r]}))})),t}function i(e){var n=e.values,t=e.value,r=e.obj,u=n.indexOf(t),i=n.indexOf(t),c=a.__assign(a.__assign({},r),{idx:u,lastIdx:i});if(!o(n)){var l=n.length,s=0===u,d=1===u,f=u===l-1,m=u===l-2;c=a.__assign(a.__assign({},c),{isMax:s,isMin:f,isSecondMax:d,isSecondMin:m})}return c}function c(e,n,t){void 0===e&&(e=[]),void 0===n&&(n={}),void 0===t&&(t="Project"),e.forEach((function(e){Object.keys(e).forEach((function(a){var o,u=e[a];if("number"===typeof u.value){var i=e[t].value,c=null===(o=null===n||void 0===n?void 0:n[i])||void 0===o?void 0:o[a];void 0===c?u.ratio="":(u.ratio=r.getUnitPreviousRatio(u.value,c),u.previousValue=c)}}))}))}function l(e,n){if(void 0===e&&(e=[]),void 0===n&&(n=[]),!e.length)return[];var t=Object.keys(e[0]),r=u(e),o=e.map((function(e){var o=a.__assign({},e);return t.forEach((function(t){var a=r[t],u=e[t]||{};a&&"number"===typeof u.value&&(n.indexOf(t)>-1?a.sort((function(e,n){return e>n?1:e<n?-1:0})):a.sort((function(e,n){return e>n?-1:e<n?1:0})),o[t]=i({values:a,value:u.value,obj:o[t]}))})),o}));return o}function s(e,n){var t=e.reduce((function(e,t){var a;return e[(null===(a=t[n])||void 0===a?void 0:a.value)||"DEFAULT_KEY"]=Object.values(t).reduce((function(e,n){return e[n.name]=n.value,e}),{}),e}),{});return t}function d(e,n,t){var a=s(n,t);return c(e,a,t),e}n.compareTwoList=d,n.flattenPreData=s,n.getKeyValuesMap=u,n.getMaxAndMinIdx=l,n.getPreviousRatio=c,n.isListAllEqual=o},8319:function(e,n,t){"use strict";t.r(n);var a=t("993f"),r=t("c5cc");for(var o in r)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return r[e]}))}(o);t("5659");var u,i=t("6b9f"),c=Object(i["a"])(r["default"],a["b"],a["c"],!1,null,"ce14b04e",null,!1,a["a"],u);n["default"]=c.exports},"993f":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return o})),t.d(n,"a",(function(){return a}));var r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{staticClass:"demo-wrap demo-wrap--gray"},[t("demo-block",{attrs:{title:"Custom"}}),e.curGameParams.roomId?t("PressField",{attrs:{label:e.curGameParams.roomId.label,placeholder:"Please Input "+e.curGameParams.roomId.label},model:{value:e.inputRoomId,callback:function(n){e.inputRoomId=n},expression:"inputRoomId"}}):e._e(),e.curGameParams.roomPwd?t("PressField",{attrs:{label:e.curGameParams.roomPwd.label,placeholder:"Please Input "+e.curGameParams.roomPwd.label},model:{value:e.inputRoomPwd,callback:function(n){e.inputRoomPwd=n},expression:"inputRoomPwd"}}):e._e(),e.curGameParams.uin?t("PressField",{attrs:{label:"Uin",placeholder:"Please Input Uin"},model:{value:e.inputUin,callback:function(n){e.inputUin=n},expression:"inputUin"}}):e._e(),t("press-cell",{attrs:{title:"Game",value:e.curGame,"is-link":!0},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.onSelectGame.apply(void 0,arguments)}}}),t("div",{staticClass:"button__wrap"},[t("PressButton",{attrs:{type:"e-sport-primary-bg"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.onLaunchGame.apply(void 0,arguments)}}},[e._v("Launch Game")])],1),t("PressPopupCell",{ref:e.FUNCTIONAL_ID_MAP.POPUP_CELL,attrs:{id:e.FUNCTIONAL_ID_MAP.POPUP_CELL,mode:"functional"}}),t("PressPicker",{ref:e.FUNCTIONAL_ID_MAP.PICKER,attrs:{id:e.FUNCTIONAL_ID_MAP.PICKER,mode:"functional"}})],1)},o=[]},"9f5f":function(e,n,t){var a=t("a8d8");n=a(!1),n.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.button__wrap[data-v-ce14b04e]{display:flex;justify-content:center;align-items:center;margin:50px 20px 0}',""]),e.exports=n},c5cc:function(e,n,t){"use strict";t.r(n);var a=t("4c2b"),r=t.n(a);for(var o in a)["default"].indexOf(o)<0&&function(e){t.d(n,e,(function(){return a[e]}))}(o);n["default"]=r.a},c5fe:function(e,n,t){"use strict";function a(e){return e.reduce((function(e,n){return e.concat(Array.isArray(n)?a(n):n)}),[])}function r(e,n){return e.reduce((function(e,t){return e[t[n]]=t,e}),{})}Object.defineProperty(n,"__esModule",{value:!0}),n.flat=a,n.flatten=r},ce5f:function(e,n,t){"use strict";function a(e,n){var t=e-n,a=t>0?"+":"";0===n&&(n=.01);var r=(t/n*100).toFixed(1);return+r>999&&(r="999+"),"".concat(a).concat(r,"%")}function r(e,n){return e&&n?+(n/e*100).toFixed(2):0}Object.defineProperty(n,"__esModule",{value:!0});var o={0:"零",1:"一",2:"二",3:"三",4:"四",5:"五",6:"六",7:"七",8:"八",9:"九",10:"十",11:"十一",12:"十二",13:"十三",14:"十四",15:"十五",16:"十六",17:"十七",18:"十八",19:"十九",20:"二十",21:"二十一",22:"二十二",23:"二十三",24:"二十四",25:"二十五",26:"二十六",27:"二十七",28:"二十八",29:"二十九",30:"三十",31:"三十一",32:"三十二"};function u(e){var n=/(?!^)(?=(\d{3})+$)/g;return"".concat(e).replace(n,",")}function i(e){var n=/\B(?=(\d{3})+\b)/g;return"".concat(e).replace(n,",")}function c(e,n){if(e>=0&&n>0&&n>=e){var t=n-e+1;return Math.floor(Math.random()*t+e)}return 0}function l(e,n){void 0===n&&(n=2);var t="".concat(e);while(t.length<n)t="0".concat(t);return t}function s(e,n){var t=Math.pow(10,10);return Math.round((e+n)*t)/t}function d(e,n,t){return Math.min(Math.max(e,n),t)}n.NUMBER_CHI_MAP=o,n.addNumber=s,n.getPartRatio=r,n.getThousandSeparator=u,n.getThousandSeparator2=i,n.getUnitPreviousRatio=a,n.padZero=l,n.random=c,n.range=d}}]);