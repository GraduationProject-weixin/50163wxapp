(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpinxinxi/add-or-update"],{"055c":function(e,n,t){"use strict";t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return i}));var i={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"a2e3"))}},r=function(){var e=this,n=e.$createElement;e._self._c},a=[]},2083:function(e,n,t){"use strict";var i=t("7ff5"),r=t.n(i);r.a},"22f7":function(e,n,t){"use strict";(function(e){t("9944");i(t("66fd"));var n=i(t("39ba"));function i(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"39ba":function(e,n,t){"use strict";t.r(n);var i=t("055c"),r=t("455e");for(var a in r)"default"!==a&&function(e){t.d(n,e,(function(){return r[e]}))}(a);t("2083");var u,s=t("f0c5"),o=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,"42e2ae64",null,!1,i["a"],u);n["default"]=o.exports},"455e":function(e,n,t){"use strict";t.r(n);var i=t("c2b2"),r=t.n(i);for(var a in i)"default"!==a&&function(e){t.d(n,e,(function(){return i[e]}))}(a);n["default"]=r.a},"7ff5":function(e,n,t){},c2b2:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function a(e,n,t,i,r,a,u){try{var s=e[a](u),o=s.value}catch(c){return void t(c)}s.done?n(o):Promise.resolve(o).then(i,r)}function u(e){return function(){var n=this,t=arguments;return new Promise((function(i,r){var u=e.apply(n,t);function s(e){a(u,i,r,s,o,"next",e)}function o(e){a(u,i,r,s,o,"throw",e)}s(void 0)}))}}var s=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("a2e3"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{cross:"",ruleForm:{shangpinbianhao:this.getUUID(),shangpinmingcheng:"",shangpinfenlei:"",shangpinfengmian:"",shuliang:"",guige:"",jiage:"",fabushijian:"",shangpinxiangqing:""},shangpinfenleiOptions:[],shangpinfenleiIndex:0,user:{},ro:{shangpinbianhao:!1,shangpinmingcheng:!1,shangpinfenlei:!1,shangpinfengmian:!1,shuliang:!1,guige:!1,jiage:!1,fabushijian:!1,shangpinxiangqing:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:s},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return u(i.default.mark((function r(){var a,u,s,o;return i.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return t.ruleForm.fabushijian=t.$utils.getCurDateTime(),a=e.getStorageSync("nowTable"),r.next=4,t.$api.session(a);case 4:return u=r.sent,t.user=u.data,r.next=8,t.$api.option("shangpinfenlei","shangpinfenlei",{});case 8:if(u=r.sent,t.shangpinfenleiOptions=u.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=18;break}return t.ruleForm.id=n.id,r.next=16,t.$api.info("shangpinxinxi",t.ruleForm.id);case 16:u=r.sent,t.ruleForm=u.data;case 18:if(t.cross=n.cross,!n.cross){r.next=70;break}s=e.getStorageSync("crossObj"),r.t0=i.default.keys(s);case 22:if((r.t1=r.t0()).done){r.next=70;break}if(o=r.t1.value,"shangpinbianhao"!=o){r.next=28;break}return t.ruleForm.shangpinbianhao=s[o],t.ro.shangpinbianhao=!0,r.abrupt("continue",22);case 28:if("shangpinmingcheng"!=o){r.next=32;break}return t.ruleForm.shangpinmingcheng=s[o],t.ro.shangpinmingcheng=!0,r.abrupt("continue",22);case 32:if("shangpinfenlei"!=o){r.next=36;break}return t.ruleForm.shangpinfenlei=s[o],t.ro.shangpinfenlei=!0,r.abrupt("continue",22);case 36:if("shangpinfengmian"!=o){r.next=40;break}return t.ruleForm.shangpinfengmian=s[o],t.ro.shangpinfengmian=!0,r.abrupt("continue",22);case 40:if("shuliang"!=o){r.next=44;break}return t.ruleForm.shuliang=s[o],t.ro.shuliang=!0,r.abrupt("continue",22);case 44:if("guige"!=o){r.next=48;break}return t.ruleForm.guige=s[o],t.ro.guige=!0,r.abrupt("continue",22);case 48:if("jiage"!=o){r.next=52;break}return t.ruleForm.jiage=s[o],t.ro.jiage=!0,r.abrupt("continue",22);case 52:if("fabushijian"!=o){r.next=56;break}return t.ruleForm.fabushijian=s[o],t.ro.fabushijian=!0,r.abrupt("continue",22);case 56:if("shangpinxiangqing"!=o){r.next=60;break}return t.ruleForm.shangpinxiangqing=s[o],t.ro.shangpinxiangqing=!0,r.abrupt("continue",22);case 60:if("clicktime"!=o){r.next=64;break}return t.ruleForm.clicktime=s[o],t.ro.clicktime=!0,r.abrupt("continue",22);case 64:if("clicknum"!=o){r.next=68;break}return t.ruleForm.clicknum=s[o],t.ro.clicknum=!0,r.abrupt("continue",22);case 68:r.next=22;break;case 70:t.styleChange();case 71:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianConfirm:function(e){console.log(e),this.ruleForm.fabushijian=e.result,this.$forceUpdate()},clicktimeConfirm:function(e){console.log(e),this.ruleForm.clicktime=e.result,this.$forceUpdate()},shangpinfenleiChange:function(e){this.shangpinfenleiIndex=e.target.value,this.ruleForm.shangpinfenlei=this.shangpinfenleiOptions[this.shangpinfenleiIndex]},shangpinfengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.shangpinfengmian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(i.default.mark((function t(){var r,a,u,s,o,c,l,g,f,p;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.ruleForm.shuliang||n.$validate.isIntNumer(n.ruleForm.shuliang)){t.next=3;break}return n.$utils.msg("数量应输入整数"),t.abrupt("return");case 3:if(!n.ruleForm.jiage||n.$validate.isNumber(n.ruleForm.jiage)){t.next=6;break}return n.$utils.msg("价格应输入数字"),t.abrupt("return");case 6:if(!n.ruleForm.clicknum||n.$validate.isIntNumer(n.ruleForm.clicknum)){t.next=9;break}return n.$utils.msg("点击次数应输入整数"),t.abrupt("return");case 9:if(!n.cross){t.next=25;break}if(s=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==s){t.next=25;break}if(c=e.getStorageSync("crossObj"),s.startsWith("[")){t.next=21;break}for(l in c)l==s&&(c[l]=o);return g=e.getStorageSync("crossTable"),t.next=19,n.$api.update("".concat(g),c);case 19:t.next=25;break;case 21:r=Number(e.getStorageSync("userid")),a=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 25:if(!a||!r){t.next=47;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=a,f={page:1,limit:10,crossuserid:r,crossrefid:a},t.next=31,n.$api.list("shangpinxinxi",f);case 31:if(p=t.sent,!(p.data.total>=u)){t.next=37;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 37:if(!n.ruleForm.id){t.next=42;break}return t.next=40,n.$api.update("shangpinxinxi",n.ruleForm);case 40:t.next=44;break;case 42:return t.next=44,n.$api.add("shangpinxinxi",n.ruleForm);case 44:n.$utils.msgBack("提交成功");case 45:t.next=55;break;case 47:if(!n.ruleForm.id){t.next=52;break}return t.next=50,n.$api.update("shangpinxinxi",n.ruleForm);case 50:t.next=54;break;case 52:return t.next=54,n.$api.add("shangpinxinxi",n.ruleForm);case 54:n.$utils.msgBack("提交成功");case 55:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),i=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),i=i>9?i:"0"+i,r=r>9?r:"0"+r,"".concat(t,"-").concat(i,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=o}).call(this,t("543d")["default"])}},[["22f7","common/runtime","common/vendor"]]]);