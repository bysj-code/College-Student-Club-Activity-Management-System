(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-shetuanxinxi-detail"],{"2e04":function(t,e,r){"use strict";var i=r("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,r("28a5"),r("f559"),r("55dd"),r("96cf");var a=i(r("3b8d")),o={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",userid:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],storeupFlag:0,count:0,timer:null}},computed:{baseUrl:function(){return this.$base.url},SecondToDate:function(){var t=this.count;return null!=t&&""!=t&&(t=t>60&&t<3600?parseInt(t/60)+"分钟"+parseInt(60*(parseFloat(t/60)-parseInt(t/60)))+"秒":t>=3600&&t<86400?parseInt(t/3600)+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":t>=86400?parseInt(t/3600/24)+"天"+parseInt(24*(parseFloat(t/3600/24)-parseInt(t/3600/24)))+"小时"+parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(t/3600)-parseInt(t/3600)))-parseInt(60*(parseFloat(t/3600)-parseInt(t/3600)))))+"秒":parseInt(t)+"秒"),t}},onLoad:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.id=e.id,e.userid&&(this.userid=e.userid);case 2:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onShow:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.init(),r=uni.getStorageSync("nowTable"),t.next=4,this.$api.session(r);case 4:i=t.sent,this.user=i.data,this.btnColor=this.btnColor.sort((function(){return.5-Math.random()})),this.getStoreup(),a=uni.getStorageSync("discussshetuanxinxiCleanType"),a&&(uni.removeStorageSync("discussshetuanxinxiCleanType"),this.mescroll.num=1,this.upCallback(this.mescroll));case 10:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),destroyed:function(){},methods:{onPayTap:function(){uni.setStorageSync("paytable","shetuanxinxi"),uni.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},getStoreup:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e={page:1,limit:1,refid:this.id,tablename:"shetuanxinxi",userid:this.user.id,type:1},t.next=3,this.$api.list("storeup",e);case 3:r=t.sent,this.storeupFlag=r.data.list.length;case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),shoucang:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e,r,i,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this,r={page:1,limit:1,refid:e.detail.id,tablename:"shetuanxinxi",userid:e.user.id,type:1},t.next=4,e.$api.list("storeup",r);case 4:if(i=t.sent,1!=i.data.list.length){t.next=9;break}return o=i.data.list[0].id,uni.showModal({title:"提示",content:"是否取消",success:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.confirm){t.next=5;break}return t.next=3,e.$api.del("storeup",JSON.stringify([o]));case 3:e.$utils.msg("取消成功"),e.getStoreup();case 5:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()}),t.abrupt("return");case 9:uni.showModal({title:"提示",content:"是否收藏",success:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!r.confirm){t.next=5;break}return t.next=3,e.$api.add("storeup",{userid:e.user.id,name:e.detail.shetuanmingcheng,picture:e.swiperList[0],refid:e.detail.id,tablename:"shetuanxinxi",type:1});case 3:e.$utils.msg("收藏成功"),e.getStoreup();case 5:case"end":return t.stop()}}),t)})));function r(e){return t.apply(this,arguments)}return r}()});case 10:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onAcrossTap:function(t,e,r,i,a){if(uni.setStorageSync("crossTable","shetuanxinxi"),uni.setStorageSync("crossObj",this.detail),uni.setStorageSync("statusColumnName",r),uni.setStorageSync("statusColumnValue",a),uni.setStorageSync("tips",i),""!=r&&!r.startsWith("[")){var o=uni.getStorageSync("crossObj");for(var n in o)if(n==r&&o[n]==a)return void this.$utils.msg(i)}this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))},init:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.info("shetuanxinxi",this.id);case 2:e=t.sent,this.detail=e.data,this.swiperList=this.detail.tupian?this.detail.tupian.split(","):[];case 5:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$api.list("discussshetuanxinxi",{page:e.num,limit:10,refid:this.id});case 2:r=t.sent,1==e.num&&(this.commentList=[]),this.commentList=this.commentList.concat(r.data.list),0==r.data.list.length&&(this.hasNext=!1),e.endSuccess(e.size,this.hasNext);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var e=this;t=e.$base.url+t,uni.downloadFile({url:t,success:function(r){200===r.statusCode&&(e.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$utils.jump("../discussshetuanxinxi/add-or-update?refid=".concat(this.id));case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var t=(0,a.default)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(this.detail.sfsh){t.next=3;break}return this.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(this.detail.shhf){t.next=6;break}return this.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==this.detail.sfsh&&(this.detail.sfsh="是"),"不通过"==this.detail.sfsh&&(this.detail.sfsh="否"),t.next=10,this.$api.update("shetuanxinxi",this.detail);case 10:this.$utils.msg("审核成功"),this.$refs.popup.close();case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(t){console.log(this.detail),this.sfshIndex=t.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};e.default=o},"32d0":function(t,e,r){"use strict";var i=r("4068"),a=r.n(i);a.a},"39f0":function(t,e,r){var i=r("24fb");e=i(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.container[data-v-3aa9957d]:after{position:fixed;top:0;right:0;left:0;bottom:0;content:"";background-attachment:fixed;background-size:cover;background-position:50%}.swiper[data-v-3aa9957d]{width:100%;height:%?450?%}.swiper uni-image[data-v-3aa9957d]{width:100%}.detail-content[data-v-3aa9957d]{font-size:%?28?%;color:#888;background:#fff;line-height:%?45?%}.detail-content .name[data-v-3aa9957d]{font-size:%?38?%;font-weight:blod;padding-top:%?20?%}.detail-content .price[data-v-3aa9957d]{font-size:%?33?%;color:red}.time-content[data-v-3aa9957d]{background:#fff;padding:%?30?%;font-size:%?30?%;border-radius:%?20?%;margin-top:%?20?%}.time-content .header[data-v-3aa9957d]{font-size:%?33?%;margin-bottom:%?20?%}.bottom-content[data-v-3aa9957d]{position:fixed;bottom:0;left:0;width:100%}.bottom-content uni-button[data-v-3aa9957d]{margin:0 0 0 %?16?%!important;padding:0 %?4?%;box-shadow:0 0 %?12?% transparent}.comoment-header[data-v-3aa9957d]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-bottom:%?12?%}.comoment-header .btn-comment-content[data-v-3aa9957d]{color:#dd514c;font-weight:700;padding:0 %?12?%}.comment-item[data-v-3aa9957d]{margin-bottom:%?10?%;border-bottom:1px solid #eee;padding-bottom:%?20?%}.comment-item .content[data-v-3aa9957d]{margin-left:%?20?%;margin-top:%?20?%}.icon[data-v-3aa9957d]{width:%?50?%;height:%?50?%}.popup-content .popup-form[data-v-3aa9957d]{background:#fff;margin-top:%?20?%}.popup-content .btn-content[data-v-3aa9957d]{text-align:right;background:#fff}.popup-content .btn-content uni-button[data-v-3aa9957d]{margin-left:%?20?%;margin-right:%?20?%;margin-bottom:%?20?%}.detail-list-item[data-v-3aa9957d]{padding:0 %?24?%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:%?68?%;border-bottom:%?2?% solid #efefef;background-color:#fff}.detail-list-item .lable[data-v-3aa9957d]{font-size:%?28?%;color:#000}.detail-list-item .text[data-v-3aa9957d]{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:%?24?%;color:#f0f;text-align:left}.detail-list-item.favor .el-icon-star-on[data-v-3aa9957d]{color:inherit;font-size:inherit}.detail-content .shop-title[data-v-3aa9957d]{padding:%?20?% %?24?%;box-sizing:border-box;line-height:1.4}',""]),t.exports=e},4068:function(t,e,r){var i=r("39f0");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=r("4f06").default;a("b5c3c66a",i,!0,{sourceMap:!1,shadowMode:!1})},"6e47":function(t,e,r){"use strict";r.r(e);var i=r("2e04"),a=r.n(i);for(var o in i)"default"!==o&&function(t){r.d(e,t,(function(){return i[t]}))}(o);e["default"]=a.a},bebb:function(t,e,r){"use strict";r.r(e);var i=r("decc"),a=r("6e47");for(var o in a)"default"!==o&&function(t){r.d(e,t,(function(){return a[t]}))}(o);r("32d0");var n,s=r("f0c5"),d=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"3aa9957d",null,!1,i["a"],n);e["default"]=d.exports},decc:function(t,e,r){"use strict";var i={"mescroll-uni":r("f05e").default,"uni-popup":r("1c89").default},a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("mescroll-uni",{attrs:{up:t.upOption,down:t.downOption,bottom:100},on:{init:function(e){arguments[0]=e=t.$handleEvent(e),t.mescrollInit.apply(void 0,arguments)},down:function(e){arguments[0]=e=t.$handleEvent(e),t.downCallback.apply(void 0,arguments)},up:function(e){arguments[0]=e=t.$handleEvent(e),t.upCallback.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"container"},[r("v-uni-swiper",{staticClass:"swiper",style:{padding:"12rpx 3%",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(228, 228, 228, 1)",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"332rpx"},attrs:{"indicator-dots":!0,autoplay:t.autoplaySwiper,circular:!0,"indicator-active-color":"rgba(54, 111, 112, 0.68)","indicator-color":"rgba(0, 0, 0, .3)",duration:1e3,interval:t.intervalSwiper,vertical:!1}},t._l(t.swiperList,(function(e,i){return r("v-uni-swiper-item",{key:i,style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255, 255, 255, 0)",borderRadius:"20rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"332rpx"}},[r("v-uni-image",{style:{padding:"0",boxShadow:"0 2rpx 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(255,255,255,1)",borderRadius:"20rpx",borderWidth:"0",width:"100%",borderStyle:"solid",height:"300rpx"},attrs:{mode:"aspectFill",src:t.baseUrl+e}})],1)})),1),r("v-uni-view",{staticClass:"detail-content"},[r("v-uni-view",{staticClass:"price detail-list-item",style:{padding:"0",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0 0 0px 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"text icon",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(254, 99, 17, 1)",color:"rgba(255, 255, 255, 1)",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"20%",lineHeight:"50rpx",fontSize:"40rpx",borderStyle:"solid"}},[1==t.storeupFlag?r("v-uni-view",{staticClass:"cuIcon-favorfill",staticStyle:{"line-height":"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shoucang.apply(void 0,arguments)}}}):t._e(),0==t.storeupFlag?r("v-uni-view",{staticClass:"cuIcon-favor",staticStyle:{"line-height":"1"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.shoucang.apply(void 0,arguments)}}}):t._e()],1)],1),r("v-uni-view",{staticClass:"name shop-title",style:{padding:"24rpx",boxShadow:"0 0 0px rgba(0,0,0,.3)",margin:"0",borderColor:"#fff",backgroundColor:"#fff",color:"#000",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"auto",fontSize:"32rpx",borderStyle:"solid"}},[t._v("社团名称："+t._s(t.detail.shetuanmingcheng))]),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0 0 0px 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("社团分类：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.shetuanfenlei))])],1),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0 0 0px 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("社团人数：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.shetuanrenshu))])],1),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0 0 0px 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("创建时间：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.chuangjianshijian))])],1),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0 0 0px 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("社长姓名：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.shezhangxingming))])],1),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0 0 0px 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("联系电话：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.lianxidianhua))])],1),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0 0 0px 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("账号：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.zhanghao))])],1),r("v-uni-view",{staticClass:"detail-list-item",style:{padding:"0",boxShadow:"0 0 4rpx rgba(0,0,0,.3)",margin:"0 0 0px 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"lable",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"center",borderRadius:"0",borderWidth:"0",width:"160rpx",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("邮箱：")]),r("v-uni-view",{staticClass:"text",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"rgba(0,0,0,0)",color:"#333",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"calc(100% - 160rpx)",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(t.detail.youxiang))])],1)],1),r("v-uni-view",{staticClass:"time-content",staticStyle:{height:"auto !important"},style:{padding:"24rpx",boxShadow:"0 0 6rpx rgba(0,0,0,.3)",margin:"0 0 20rpx 0",borderColor:"#fff",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"header",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,0)",backgroundColor:"#fff",borderRadius:"0",color:"#333",borderWidth:"0",width:"100%",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v("社团简介")]),r("v-uni-view",{staticClass:"content",style:{padding:"24rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"8rpx",color:"#333",borderWidth:"2rpx",width:"100%",fontSize:"28rpx",borderStyle:"solid",height:"auto"}},[t._v(t._s(t.detail.shetuanjianjie))])],1),r("v-uni-view",{staticClass:"time-content",style:{padding:"24rpx",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0 0 20rpx 0",borderColor:"red",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{staticClass:"comoment-header",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,.2)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0",width:"100%",borderStyle:"solid",height:"auto"}},[r("v-uni-view",{style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",borderRadius:"0",color:"rgba(0, 0, 0, 1)",borderWidth:"0",width:"auto",lineHeight:"80rpx",fontSize:"32rpx",borderStyle:"solid"}},[t._v("评论")]),r("v-uni-view",{staticClass:"btn-comment-content",staticStyle:{display:"flex","align-items":"center"},style:{padding:"0 12rpx",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"red",backgroundColor:"rgba(54, 111, 112, 1)",color:"rgba(255, 255, 255, 1)",isBtn:!0,borderRadius:"20rpx",borderWidth:"0",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCommentTap.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"cuIcon-add"}),t._v("添加评论")],1)],1),r("v-uni-view",{staticClass:"cu-list comment",staticStyle:{"margin-top":"20upx"}},t._l(t.commentList,(function(e,i){return r("v-uni-view",{key:i,staticClass:"cu-item comment-item",style:{padding:"0",boxShadow:"0 0 16rpx rgba(0,0,0,0)",margin:"0",borderColor:"rgba(0,0,0,.2)",backgroundColor:"#fff",borderRadius:"0",borderWidth:"0 0 2rpx 0",width:"100%",borderStyle:"dashed",height:"auto"}},[r("v-uni-view",{staticClass:"content"},[r("v-uni-view",{staticClass:"text-grey",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(0, 0, 0, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"auto",lineHeight:"80rpx",fontSize:"28rpx",borderStyle:"solid"}},[t._v(t._s(e.nickname))]),r("v-uni-view",{staticClass:"text-gray text-content text-df content",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(164, 164, 164, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"32rpx",fontSize:"24rpx",borderStyle:"solid"}},[t._v(t._s(e.content))]),r("v-uni-view",{staticClass:"margin-top-sm text-gray text-df",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"14rpx 0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(164, 164, 164, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"auto",fontSize:"24rpx",borderStyle:"solid"}},[t._v(t._s(e.addtime))]),e.reply?r("v-uni-view",{staticClass:"text-gray text-content text-df content",style:{padding:"0",boxShadow:"0 0 12rpx rgba(0,0,0,0)",margin:"0",borderColor:"#ccc",backgroundColor:"#fff",color:"rgba(164, 164, 164, 1)",textAlign:"left",borderRadius:"0",borderWidth:"0",width:"100%",lineHeight:"32rpx",fontSize:"24rpx",borderStyle:"solid"}},[t._v("回复:"+t._s(e.reply))]):t._e()],1)],1)})),1)],1),r("v-uni-view",{staticClass:"bottom-content cu-bar bg-white tabbar border shop",style:{padding:"0px",boxShadow:"rgb(0 0 0 / 0%) 0px 0px 12rpx",margin:"0px",borderColor:"rgb(204, 204, 204)",backgroundColor:"rgb(255, 255, 255)",borderRadius:"0px",borderWidth:"2rpx 0 0 0",width:"100%",borderStyle:"solid",height:"100rpx"}},[r("v-uni-view",{staticStyle:{"text-align":"left",display:"flex"}}),r("v-uni-view",{staticStyle:{"text-align":"right"}},[t.userid&&t.isAuth("shetuanxinxi","加入")?r("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",staticStyle:{"margin-right":"10upx","min-width":"180upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"24rpx",color:"#fff",backgroundColor:t.btnColor[6],borderColor:t.btnColor[6]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onAcrossTap("shetuanjiaru","","","")}}},[t._v("加入")]):t._e(),!t.userid&&t.isAuthFront("shetuanxinxi","加入")?r("v-uni-button",{staticClass:"cu-btn bg-brown round shadow-blur",staticStyle:{"margin-right":"10upx","min-width":"180upx"},style:{width:"auto",borderRadius:"8rpx",height:"80rpx",fontSize:"24rpx",color:"#fff",backgroundColor:t.btnColor[6],borderColor:t.btnColor[6]},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onAcrossTap("shetuanjiaru","","","")}}},[t._v("加入")]):t._e()],1)],1)],1),r("uni-popup",{ref:"popup",staticClass:"popup-content",attrs:{type:"center"}},[r("v-uni-form",{staticClass:"popup-form"},[r("v-uni-view",{staticClass:"cu-form-group margin-top"},[r("v-uni-picker",{attrs:{value:t.sfshIndex,range:t.sfshOptions},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.sfshChange.apply(void 0,arguments)}}},[r("v-uni-view",{staticClass:"uni-input"},[t._v(t._s(t.detail.sfsh?t.detail.sfsh:"选择审核结果"))])],1)],1),r("v-uni-view",{staticClass:"cu-form-group"},[r("v-uni-textarea",{staticStyle:{width:"200px"},attrs:{placeholder:"审核回复"},model:{value:t.detail.shhf,callback:function(e){t.$set(t.detail,"shhf",e)},expression:"detail.shhf"}})],1),r("v-uni-view",{staticClass:"btn-content"},[r("v-uni-button",{staticClass:"cu-btn bg-cyan",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onCloseWinTap.apply(void 0,arguments)}}},[t._v("取消")]),r("v-uni-button",{staticClass:"cu-btn bg-red",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onFinishTap.apply(void 0,arguments)}}},[t._v("确认")])],1)],1)],1)],1)},o=[];r.d(e,"b",(function(){return a})),r.d(e,"c",(function(){return o})),r.d(e,"a",(function(){return i}))}}]);