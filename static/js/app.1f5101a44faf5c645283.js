webpackJsonp([1],{Cb0s:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=a("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"App"},r,!1,function(e){a("gsu9")},null,null).exports,o=a("/ocq"),s=a("c/Tr"),i=a.n(s),c=a("BO1k"),u=a.n(c),m={props:{form:Object,targets:Array},data:function(){return{activeName:"1",tableData:[],tables:[{name:"1级府兵",value:2},{name:"2级府兵",value:5},{name:"3级府兵",value:9},{name:"4级府兵",value:13},{name:"5级府兵",value:18},{name:"6级府兵",value:26},{name:"7级府兵",value:35},{name:"8级府兵",value:50},{name:"9级府兵",value:75},{name:"10级府兵",value:110},{name:"11级府兵",value:220},{name:"12级府兵",value:500}].sort(function(){return-1}),bandits:[{name:"1级山贼",value:2},{name:"2级山贼",value:5},{name:"3级山贼",value:9},{name:"4级山贼",value:13},{name:"5级山贼",value:18},{name:"6级山贼",value:26},{name:"7级山贼",value:35},{name:"8级山贼",value:50},{name:"9级山贼",value:75},{name:"10级山贼",value:110},{name:"11级山贼",value:220},{name:"12级山贼",value:500},{name:"14级山贼",value:4300},{name:"15级山贼",value:4400},{name:"16级山贼",value:4500},{name:"17级山贼",value:4600},{name:"18级山贼",value:4700},{name:"19级山贼",value:4800},{name:"20级山贼",value:4900},{name:"21级山贼",value:5e3},{name:"22级山贼",value:5100},{name:"23级山贼",value:5200},{name:"24级山贼",value:5300},{name:"25级山贼",value:5400},{name:"26级山贼",value:5e3},{name:"27级山贼",value:6e3},{name:"28级山贼",value:7e3},{name:"29级山贼",value:8e3},{name:"30级山贼",value:9e3}].sort(function(){return-1}),old:0,newTableData:[],addtion:0,addtions:i()({length:10},function(e,t){return{name:t+1+"级",value:.15*(t+1)}}),soldier:0,bandit:0,banditAddtion:0,banditScore:0,soldierScore:0}},watch:{form:{deep:!0,handler:function(e,t){this.calcRate()}}},methods:{calcRate:function(){var e=this,t=this.form.level1+this.addtion+this.form.level2+this.form.level3+this.form.mul+Math.max(this.form.other-1,0),a=this.tables.filter(function(t,a){return t.value==e.soldier})||[],l=this.bandits.filter(function(t,a){return t.value==e.bandit})||[],r=!0,n=!1,o=void 0;try{for(var s,i=u()(a);!(r=(s=i.next()).done);r=!0){var c=s.value;c.score=c.value,c.totalScore=parseFloat(t*c.value).toFixed(0),this.soldierScore=c.totalScore}}catch(e){n=!0,o=e}finally{try{!r&&i.return&&i.return()}finally{if(n)throw o}}var m=!0,d=!1,v=void 0;try{for(var p,f=u()(l);!(m=(p=f.next()).done);m=!0){var h=p.value,b=parseFloat((t+this.banditAddtion)*h.value).toFixed(0);a.push({name:h.name,score:h.value,totalScore:b}),this.banditScore=b}}catch(e){d=!0,v=e}finally{try{!m&&f.return&&f.return()}finally{if(d)throw v}}this.tableData=a;var _=1e4*this.form.old;this.form.money>0&&(_+=3500*this.form.money),this.old=_,this.calcTable()},calcTable:function(){var e=[],t=!0,a=!1,l=void 0;try{for(var r,n=u()(this.targets);!(t=(r=n.next()).done);t=!0){var o=r.value,s=Math.max(o.value-this.old,0),i=Math.floor(s/this.soldierScore),c=Math.floor(s/this.banditScore);e.push({name:o.name,soldierCount:(i/1e4).toFixed(1),banditCount:c})}}catch(e){a=!0,l=e}finally{try{!t&&n.return&&n.return()}finally{if(a)throw l}}this.newTableData=e}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"tuesday"}},[a("el-card",{staticClass:"box-card"},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"我的府兵等级"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择等级"},on:{change:e.calcRate},model:{value:e.soldier,callback:function(t){e.soldier=t},expression:"soldier"}},[a("el-option",{attrs:{label:"无",value:0}}),e._v(" "),e._l(e.tables,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"山贼等级"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择等级"},on:{change:e.calcRate},model:{value:e.bandit,callback:function(t){e.bandit=t},expression:"bandit"}},[a("el-option",{attrs:{label:"无",value:0}}),e._v(" "),e._l(e.bandits,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"平叛功绩对决"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择等级"},on:{change:e.calcRate},model:{value:e.banditAddtion,callback:function(t){e.banditAddtion=t},expression:"banditAddtion"}},[a("el-option",{attrs:{label:"无",value:0}}),e._v(" "),e._l(e.addtions,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})],2)],1)],1),e._v(" "),a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("课业基本信息")])]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"项目"}}),e._v(" "),a("el-table-column",{attrs:{prop:"score",label:"基础分"}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalScore",label:"加倍分"}})],1)],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("需要数量")])]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:e.newTableData}},[a("el-table-column",{attrs:{align:"center",prop:"name",width:"70",label:"档位"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"需要数量"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"text item"},[e._v("\n              "+e._s("府兵: "+t.row.soldierCount)+"万\n            ")]),e._v(" "),a("div",{staticClass:"text item"},[e._v("\n              "+e._s("山贼: "+t.row.banditCount)+"次\n            ")])])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"60",label:"达标"},scopedSlots:e._u([{key:"default",fn:function(e){return[0==e.row.soldierCount?a("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-check",circle:""}}):a("el-button",{attrs:{size:"small",icon:"el-icon-close",circle:""}})]}}])})],1)],1)],1)},staticRenderFns:[]},v=a("VU/8")(m,d,!1,null,null,null).exports,p={props:{form:Object,targets:Array},data:function(){return{activeName:"1",tableData:[{name:"金矿",score:800,totalScore:800},{name:"粮食",score:600,totalScore:600},{name:"木材",score:400,totalScore:400}],newOld:0,newTableData:[],goldScore:0,woodScore:0,foodScore:0,goldRate:0,woodRate:0,foodRate:0,addtion:0,addtions:i()({length:10},function(e,t){return{name:t+1+"级",value:.15*(t+1)}})}},watch:{form:{deep:!0,handler:function(e,t){this.calcRate()}}},methods:{calcRate:function(){var e=this.form.level1+this.addtion+this.form.level2+this.form.level3+this.form.mul+Math.max(this.form.other-1,0),t=this.tableData,a=!0,l=!1,r=void 0;try{for(var n,o=u()(t);!(a=(n=o.next()).done);a=!0){var s=n.value;s.totalScore=parseFloat(e*s.score).toFixed(0),"金矿"==s.name?this.goldScore=s.totalScore:"粮食"==s.name?this.foodScore=s.totalScore:this.woodScore=s.totalScore}}catch(e){l=!0,r=e}finally{try{!a&&o.return&&o.return()}finally{if(l)throw r}}var i=1e4*this.form.old;this.form.money>0&&(i+=3500*this.form.money),this.newOld=i,this.calcTable()},calcTable:function(){var e=[],t=!0,a=!1,l=void 0;try{for(var r,n=u()(this.targets);!(t=(r=n.next()).done);t=!0){var o=r.value,s=Math.max(o.value-this.newOld,0),i=s/this.goldScore,c=s/this.foodScore,m=s/this.woodScore;e.push({name:o.name,value:s,goldTotal:i.toFixed(1),woodTotal:m.toFixed(1),foodTotal:c.toFixed(1)})}}catch(e){a=!0,l=e}finally{try{!t&&n.return&&n.return()}finally{if(a)throw l}}this.newTableData=e}}},f={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"monday"}},[a("el-card",{staticClass:"box-card"},[a("el-form",[a("el-form-item",{attrs:{inline:"",label:"采集功绩对决"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择等级"},on:{change:e.calcRate},model:{value:e.addtion,callback:function(t){e.addtion=t},expression:"addtion"}},[a("el-option",{attrs:{label:"无",value:0}}),e._v(" "),e._l(e.addtions,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})],2)],1)],1),e._v(" "),a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("基础采集信息")])]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"项目"}}),e._v(" "),a("el-table-column",{attrs:{prop:"score",label:"基础分"}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalScore",label:"加倍分"}})],1)],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:e.newTableData}},[a("el-table-column",{attrs:{align:"center",prop:"name",width:"70",label:"档位"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"需要资源"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"text item"},[e._v("\n              "+e._s("金矿: "+t.row.goldTotal)+"万\n            ")]),e._v(" "),a("div",{staticClass:"text item"},[e._v("\n              "+e._s("粮食: "+t.row.foodTotal)+"万\n            ")]),e._v(" "),a("div",{staticClass:"text item"},[e._v("\n              "+e._s("木材: "+t.row.woodTotal)+"万\n            ")])])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"60",label:"达标"},scopedSlots:e._u([{key:"default",fn:function(e){return[0==e.row.value?a("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-check",circle:""}}):a("el-button",{attrs:{size:"small",icon:"el-icon-close",circle:""}})]}}])})],1)],1)],1)},staticRenderFns:[]};var h=a("VU/8")(p,f,!1,function(e){a("YmWS")},null,null).exports,b={props:{form:Object,targets:Array},data:function(){return{activeName:"1",tableData:[],tables:[{name:"4级府兵",value:"4级府兵"},{name:"5级府兵",value:"5级府兵"},{name:"6级府兵",value:"6级府兵"},{name:"7级府兵",value:"7级府兵"},{name:"8级府兵",value:"8级府兵"},{name:"9级府兵",value:"9级府兵"},{name:"10级府兵",value:"10级府兵"},{name:"11级府兵",value:"11级府兵"},{name:"12级府兵",value:"12级府兵"}].sort(function(){return-1}),minors:[{name:"4级府兵",value:1},{name:"5级府兵",value:2},{name:"6级府兵",value:3},{name:"7级府兵",value:4},{name:"8级府兵",value:5},{name:"9级府兵",value:6},{name:"10级府兵",value:7},{name:"11级府兵",value:8},{name:"12级府兵",value:9}],seriously:[{name:"4级府兵",value:1},{name:"5级府兵",value:2},{name:"6级府兵",value:3},{name:"7级府兵",value:4},{name:"8级府兵",value:5},{name:"9级府兵",value:6},{name:"10级府兵",value:8},{name:"11级府兵",value:10},{name:"12级府兵",value:18}],died:[{name:"4级府兵",value:4},{name:"5级府兵",value:5},{name:"6级府兵",value:6},{name:"7级府兵",value:7},{name:"8级府兵",value:8},{name:"9级府兵",value:10},{name:"10级府兵",value:12},{name:"11级府兵",value:15},{name:"12级府兵",value:36}],old:0,newTableData:[],addtion:0,addtions:i()({length:10},function(e,t){return{name:t+1+"级",value:.15*(t+1)}}),soldier:0,isEnemy:0,diedScore:0,seriouslyScore:0,minorsScore:0}},watch:{form:{deep:!0,handler:function(e,t){this.calcRate()}}},methods:{calcRate:function(){var e=this,t=this.form.level1+this.addtion+this.form.level2+this.form.level3+this.form.mul+Math.max(this.form.other-1,0);this.isEnemy&&(t+=3);var a=[],l=this.minors.filter(function(t,a){return t.name==e.soldier}),r=this.seriously.filter(function(t,a){return t.name==e.soldier}),n=this.died.filter(function(t,a){return t.name==e.soldier}),o=!0,s=!1,i=void 0;try{for(var c,m=u()(l);!(o=(c=m.next()).done);o=!0){var d=c.value;a.push({name:"轻伤"+d.name,score:d.value,totalScore:t*d.value}),this.minorsScore=t*d.value}}catch(e){s=!0,i=e}finally{try{!o&&m.return&&m.return()}finally{if(s)throw i}}var v=!0,p=!1,f=void 0;try{for(var h,b=u()(r);!(v=(h=b.next()).done);v=!0){var _=h.value;a.push({name:"重伤"+_.name,score:_.value,totalScore:t*_.value}),this.seriouslyScore=t*_.value}}catch(e){p=!0,f=e}finally{try{!v&&b.return&&b.return()}finally{if(p)throw f}}var y=!0,x=!1,w=void 0;try{for(var S,g=u()(n);!(y=(S=g.next()).done);y=!0){var k=S.value;a.push({name:"阵亡"+k.name,score:k.value,totalScore:t*k.value}),this.diedScore=t*k.value}}catch(e){x=!0,w=e}finally{try{!y&&g.return&&g.return()}finally{if(x)throw w}}this.tableData=a;var C=this.form.old;this.form.money>0&&(C+=3500*this.form.money),this.old=C,this.calcTable()},calcTable:function(){var e=[],t=!0,a=!1,l=void 0;try{for(var r,n=u()(this.targets);!(t=(r=n.next()).done);t=!0){var o=r.value,s=Math.max(o.value-this.old,0),i=s/this.minorsScore,c=s/this.seriouslyScore,m=s/this.diedScore;e.push({name:o.name,minorsCount:(i/1e4).toFixed(1),seriouslyCount:(c/1e4).toFixed(1),diedCount:(m/1e4).toFixed(1)})}}catch(e){a=!0,l=e}finally{try{!t&&n.return&&n.return()}finally{if(a)throw l}}this.newTableData=e.sort(function(){return-1})}}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"tuesday"}},[a("el-card",{staticClass:"box-card"},[a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"府兵等级"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择等级"},on:{change:e.calcRate},model:{value:e.soldier,callback:function(t){e.soldier=t},expression:"soldier"}},[a("el-option",{attrs:{label:"无",value:0}}),e._v(" "),e._l(e.tables,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"争锋功绩对决"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择等级"},on:{change:e.calcRate},model:{value:e.addtion,callback:function(t){e.addtion=t},expression:"addtion"}},[a("el-option",{attrs:{label:"无",value:0}}),e._v(" "),e._l(e.addtions,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"是对决州"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},on:{change:e.calcRate},model:{value:e.isEnemy,callback:function(t){e.isEnemy=t},expression:"isEnemy"}})],1)],1),e._v(" "),a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("课业基本信息")])]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"项目"}}),e._v(" "),a("el-table-column",{attrs:{prop:"score",label:"基础分"}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalScore",label:"加倍分"}})],1)],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("需要数量")])]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:e.newTableData}},[a("el-table-column",{attrs:{align:"center",prop:"name",width:"70",label:"档位"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"需要数量"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"text item"},[e._v("\n              "+e._s("嘎: "+t.row.diedCount)+"万\n            ")]),e._v(" "),a("div",{staticClass:"text item"},[e._v("\n              "+e._s("重: "+t.row.seriouslyCount)+"万\n            ")]),e._v(" "),a("div",{staticClass:"text item"},[e._v("\n              "+e._s("轻: "+t.row.minorsCount)+"万\n            ")])])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"60",label:"达标"},scopedSlots:e._u([{key:"default",fn:function(e){return[0==e.row.minorsCount?a("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-check",circle:""}}):a("el-button",{attrs:{size:"small",icon:"el-icon-close",circle:""}})]}}])})],1)],1)],1)},staticRenderFns:[]},y=a("VU/8")(b,_,!1,null,null,null).exports,x={props:{form:Object,targets:Array},data:function(){return{activeName:"1",tableData:[{name:"天下",score:4e4,totalScore:4e4},{name:"势力/时运",score:5e4,totalScore:5e4}],airScore:0,otherScore:0,old:0,newTableData:[],addtion:0,addtions:i()({length:10},function(e,t){return{name:t+1+"级",value:.15*(t+1)}})}},watch:{form:{deep:!0,handler:function(e,t){this.calcRate()}}},methods:{calcRate:function(){var e=this.form.level1+this.addtion+this.form.level2+this.form.level3+this.form.mul+Math.max(this.form.other-1,0),t=this.tableData,a=!0,l=!1,r=void 0;try{for(var n,o=u()(t);!(a=(n=o.next()).done);a=!0){var s=n.value;s.totalScore=parseFloat(e*s.score).toFixed(0),"天下"==s.name?this.airScore=s.totalScore:this.otherScore=s.totalScore}}catch(e){l=!0,r=e}finally{try{!a&&o.return&&o.return()}finally{if(l)throw r}}var i=1e4*this.form.old;this.form.money>0&&(i+=3500*this.form.money),this.old=i,this.calcTable()},calcTable:function(){var e=[],t=!0,a=!1,l=void 0;try{for(var r,n=u()(this.targets);!(t=(r=n.next()).done);t=!0){var o=r.value,s=Math.max(o.value-this.old,0),i=Math.floor(s/this.airScore),c=Math.floor(s/this.otherScore);e.push({name:o.name,count:i,otherCount:c})}}catch(e){a=!0,l=e}finally{try{!t&&n.return&&n.return()}finally{if(a)throw l}}this.newTableData=e}}},w={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"tuesday"}},[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("招贤基本信息")])]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"项目"}}),e._v(" "),a("el-table-column",{attrs:{prop:"score",label:"基础分"}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalScore",label:"加倍分"}})],1)],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("需要招贤次数")])]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{stripe:"",data:e.newTableData}},[a("el-table-column",{attrs:{align:"center",prop:"name",width:"70",label:"档位"}}),e._v(" "),a("el-table-column",{attrs:{align:"center",label:"需要次数"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"text item"},[e._v("\n              "+e._s("天下: "+t.row.count)+"次\n            ")]),e._v(" "),a("div",{staticClass:"text item"},[e._v("\n              "+e._s("势力/时运: "+t.row.otherCount)+"次\n            ")])])]}}])}),e._v(" "),a("el-table-column",{attrs:{align:"center",width:"60",label:"达标"},scopedSlots:e._u([{key:"default",fn:function(e){return[0==e.row.count?a("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-check",circle:""}}):a("el-button",{attrs:{size:"small",icon:"el-icon-close",circle:""}})]}}])})],1)],1)],1)},staticRenderFns:[]},S=a("VU/8")(x,w,!1,null,null,null).exports,g={props:{form:Object,targets:Array},data:function(){return{activeName:"1",tableData:[{name:"建筑分",score:1,totalScore:1},{name:"建筑加速",score:100,totalScore:100}],newTableData:[],addtion:0,addtions:i()({length:10},function(e,t){return{name:t+1+"级",value:.15*(t+1)}}),drawer:!1,old:0,speed:{m1:null,m5:null,m15:null,m60:null,m480:null,m1440:null},totalHour:0,speedScore:0}},watch:{form:{deep:!0,handler:function(e,t){this.calcRate()}}},methods:{changeSpped:function(){var e=(parseInt(this.speed.m1||0)+5*parseInt(this.speed.m5||0)+15*parseInt(this.speed.m15||0)+60*parseInt(this.speed.m60||0)+480*parseInt(this.speed.m480||0)+1440*parseInt(this.speed.m1440||0))/60;this.totalHour=e.toFixed(2),this.calcRate()},calcRate:function(){var e=this.form.level1+this.addtion+this.form.level2+this.form.level3+this.form.mul+Math.max(this.form.other-1,0),t=this.tableData,a=!0,l=!1,r=void 0;try{for(var n,o=u()(t);!(a=(n=o.next()).done);a=!0){var s=n.value;s.totalScore=parseFloat(e*s.score).toFixed(0),"建筑加速"==s.name&&(this.speedScore=s.totalScore)}}catch(e){l=!0,r=e}finally{try{!a&&o.return&&o.return()}finally{if(l)throw r}}var i=1e4*this.form.old;this.form.money>0&&(i+=3500*this.form.money),this.old=i,this.calcTable()},calcTable:function(){var e=[],t=!0,a=!1,l=void 0;try{for(var r,n=u()(this.targets);!(t=(r=n.next()).done);t=!0){var o=r.value,s=Math.floor((o.value-this.old)/this.speedScore),i=Math.max((s/60).toFixed(1),0),c=Math.max(i-this.totalHour,0);e.push({name:o.name,hours:i+" 时",minutes:s+" 分",finish:0==c,sub:c.toFixed(2)})}}catch(e){a=!0,l=e}finally{try{!t&&n.return&&n.return()}finally{if(a)throw l}}this.newTableData=e}}},k={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"tuesday"}},[a("el-card",{staticClass:"box-card"},[a("el-form",[a("el-form-item",{attrs:{inline:"",label:"城建功绩对决"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择等级"},on:{change:e.calcRate},model:{value:e.addtion,callback:function(t){e.addtion=t},expression:"addtion"}},[a("el-option",{attrs:{label:"无",value:0}}),e._v(" "),e._l(e.addtions,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})],2)],1),e._v(" "),a("el-form-item",[a("span",{on:{click:function(t){e.drawer=!0}}},[e._v("我的加速: "),a("span",{staticClass:"text-danger"},[e._v(e._s(e.totalHour))]),e._v("时")])])],1),e._v(" "),a("el-drawer",{attrs:{title:"我的加速",visible:e.drawer,size:"50%","with-header":!1},on:{"update:visible":function(t){e.drawer=t}}},[a("el-form",[a("el-form-item",{attrs:{label:"1分钟"}},[a("el-input",{attrs:{type:"number"},on:{change:e.changeSpped},model:{value:e.speed.m1,callback:function(t){e.$set(e.speed,"m1",t)},expression:"speed.m1"}},[a("template",{slot:"append"},[e._v("个")])],2)],1),e._v(" "),a("el-form-item",{attrs:{inline:"",label:"5分钟"}},[a("el-input",{attrs:{type:"number"},on:{change:e.changeSpped},model:{value:e.speed.m5,callback:function(t){e.$set(e.speed,"m5",t)},expression:"speed.m5"}},[a("template",{slot:"append"},[e._v("个")])],2)],1),e._v(" "),a("el-form-item",{attrs:{inline:"",label:"15分钟"}},[a("el-input",{attrs:{type:"number"},on:{change:e.changeSpped},model:{value:e.speed.m15,callback:function(t){e.$set(e.speed,"m15",t)},expression:"speed.m15"}},[a("template",{slot:"append"},[e._v("个")])],2)],1),e._v(" "),a("el-form-item",{attrs:{inline:"",label:"1小时"}},[a("el-input",{attrs:{type:"number"},on:{change:e.changeSpped},model:{value:e.speed.m60,callback:function(t){e.$set(e.speed,"m60",t)},expression:"speed.m60"}},[a("template",{slot:"append"},[e._v("个")])],2)],1),e._v(" "),a("el-form-item",{attrs:{inline:"",label:"8小时"}},[a("el-input",{attrs:{type:"number"},on:{change:e.changeSpped},model:{value:e.speed.m480,callback:function(t){e.$set(e.speed,"m480",t)},expression:"speed.m480"}},[a("template",{slot:"append"},[e._v("个")])],2)],1),e._v(" "),a("el-form-item",{attrs:{inline:"",label:"24小时"}},[a("el-input",{attrs:{type:"number"},on:{change:e.changeSpped},model:{value:e.speed.m1440,callback:function(t){e.$set(e.speed,"m1440",t)},expression:"speed.m1440"}},[a("template",{slot:"append"},[e._v("个")])],2)],1)],1)],1),e._v(" "),a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("城建基本信息")])]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"项目"}}),e._v(" "),a("el-table-column",{attrs:{prop:"score",label:"基础分"}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalScore",label:"加倍分"}})],1)],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("需要加速(建筑分忽略)")])]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.newTableData}},[a("el-table-column",{attrs:{prop:"name",label:"档位"}}),e._v(" "),a("el-table-column",{attrs:{prop:"hours",label:"总小时"}}),e._v(" "),a("el-table-column",{attrs:{prop:"finish",label:"可达标"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.finish?a("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-check",circle:""}}):a("span",{staticClass:"text-danger"},[e._v("-"+e._s(t.row.sub))])]}}])})],1)],1)],1)},staticRenderFns:[]},C=a("VU/8")(g,k,!1,null,null,null).exports,T={props:{form:Object,targets:Array},data:function(){return{activeName:"1",tableData:[{name:"课业分",score:1,totalScore:1},{name:"课业加速",score:100,totalScore:100}],newTableData:[],addtion:0,addtions:i()({length:10},function(e,t){return{name:t+1+"级",value:.15*(t+1)}}),drawer:!1,old:0,speed:{m1:null,m5:null,m15:null,m60:null,m480:null,m1440:null},totalHour:0,speedScore:0}},watch:{form:{deep:!0,handler:function(e,t){this.calcRate()}}},methods:{changeSpped:function(){var e=(parseInt(this.speed.m1||0)+5*parseInt(this.speed.m5||0)+15*parseInt(this.speed.m15||0)+60*parseInt(this.speed.m60||0)+480*parseInt(this.speed.m480||0)+1440*parseInt(this.speed.m1440||0))/60;this.totalHour=e.toFixed(2),this.calcRate()},calcRate:function(){var e=this.form.level1+this.addtion+this.form.level2+this.form.level3+this.form.mul+Math.max(this.form.other-1,0),t=this.tableData,a=!0,l=!1,r=void 0;try{for(var n,o=u()(t);!(a=(n=o.next()).done);a=!0){var s=n.value;s.totalScore=parseFloat(e*s.score).toFixed(0),"课业加速"==s.name&&(this.speedScore=s.totalScore)}}catch(e){l=!0,r=e}finally{try{!a&&o.return&&o.return()}finally{if(l)throw r}}var i=1e4*this.form.old;this.form.money>0&&(i+=3500*this.form.money),this.old=i,this.calcTable()},calcTable:function(){var e=[],t=!0,a=!1,l=void 0;try{for(var r,n=u()(this.targets);!(t=(r=n.next()).done);t=!0){var o=r.value,s=Math.floor((o.value-this.old)/this.speedScore),i=Math.max((s/60).toFixed(1),0),c=Math.max(i-this.totalHour,0);e.push({name:o.name,hours:i+" 时",minutes:s+" 分",finish:0==c,sub:c.toFixed(2)})}}catch(e){a=!0,l=e}finally{try{!t&&n.return&&n.return()}finally{if(a)throw l}}this.newTableData=e}}},D={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"tuesday"}},[a("el-card",{staticClass:"box-card"},[a("el-form",[a("el-form-item",{attrs:{inline:"",label:"课业功绩对决"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择等级"},on:{change:e.calcRate},model:{value:e.addtion,callback:function(t){e.addtion=t},expression:"addtion"}},[a("el-option",{attrs:{label:"无",value:0}}),e._v(" "),e._l(e.addtions,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})],2)],1),e._v(" "),a("el-form-item",[a("span",{on:{click:function(t){e.drawer=!0}}},[e._v("我的加速: "),a("span",{staticClass:"text-danger"},[e._v(e._s(e.totalHour))]),e._v("时")])])],1),e._v(" "),a("el-drawer",{attrs:{title:"我的加速",visible:e.drawer,size:"50%","with-header":!1},on:{"update:visible":function(t){e.drawer=t}}},[a("el-form",[a("el-form-item",{attrs:{label:"1分钟"}},[a("el-input",{attrs:{type:"number"},on:{change:e.changeSpped},model:{value:e.speed.m1,callback:function(t){e.$set(e.speed,"m1",t)},expression:"speed.m1"}},[a("template",{slot:"append"},[e._v("个")])],2)],1),e._v(" "),a("el-form-item",{attrs:{inline:"",label:"5分钟"}},[a("el-input",{attrs:{type:"number"},on:{change:e.changeSpped},model:{value:e.speed.m5,callback:function(t){e.$set(e.speed,"m5",t)},expression:"speed.m5"}},[a("template",{slot:"append"},[e._v("个")])],2)],1),e._v(" "),a("el-form-item",{attrs:{inline:"",label:"15分钟"}},[a("el-input",{attrs:{type:"number"},on:{change:e.changeSpped},model:{value:e.speed.m15,callback:function(t){e.$set(e.speed,"m15",t)},expression:"speed.m15"}},[a("template",{slot:"append"},[e._v("个")])],2)],1),e._v(" "),a("el-form-item",{attrs:{inline:"",label:"1小时"}},[a("el-input",{attrs:{type:"number"},on:{change:e.changeSpped},model:{value:e.speed.m60,callback:function(t){e.$set(e.speed,"m60",t)},expression:"speed.m60"}},[a("template",{slot:"append"},[e._v("个")])],2)],1),e._v(" "),a("el-form-item",{attrs:{inline:"",label:"8小时"}},[a("el-input",{attrs:{type:"number"},on:{change:e.changeSpped},model:{value:e.speed.m480,callback:function(t){e.$set(e.speed,"m480",t)},expression:"speed.m480"}},[a("template",{slot:"append"},[e._v("个")])],2)],1),e._v(" "),a("el-form-item",{attrs:{inline:"",label:"24小时"}},[a("el-input",{attrs:{type:"number"},on:{change:e.changeSpped},model:{value:e.speed.m1440,callback:function(t){e.$set(e.speed,"m1440",t)},expression:"speed.m1440"}},[a("template",{slot:"append"},[e._v("个")])],2)],1)],1)],1),e._v(" "),a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("课业基本信息")])]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData}},[a("el-table-column",{attrs:{prop:"name",label:"项目"}}),e._v(" "),a("el-table-column",{attrs:{prop:"score",label:"基础分"}}),e._v(" "),a("el-table-column",{attrs:{prop:"totalScore",label:"加倍分"}})],1)],1),e._v(" "),a("el-card",{staticClass:"box-card"},[a("div",{staticClass:"clearfix",attrs:{slot:"header"},slot:"header"},[a("span",[e._v("需要加速(课业分忽略)")])]),e._v(" "),a("el-table",{staticStyle:{width:"100%"},attrs:{data:e.newTableData}},[a("el-table-column",{attrs:{prop:"name",align:"center",label:"档位"}}),e._v(" "),a("el-table-column",{attrs:{prop:"hours",align:"center",label:"总小时"}}),e._v(" "),a("el-table-column",{attrs:{prop:"finish",label:"可达标"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.finish?a("el-button",{attrs:{type:"success",size:"small",icon:"el-icon-check",circle:""}}):a("span",{staticClass:"text-danger"},[e._v("-"+e._s(t.row.sub))])]}}])})],1)],1)],1)},staticRenderFns:[]},R={components:{Monday:h,Tuesday:C,Wednesday:a("VU/8")(T,D,!1,null,null,null).exports,Thursday:S,Friday:v,Saturday:y},data:function(){return{activeName:"1",form:{level1:0,level2:0,level3:0,mul:1,target:0,other:null,money:null,old:0},level1s:i()({length:5},function(e,t){return{name:t+1+"级",value:.1*(t+1)}}),level2s:i()({length:10},function(e,t){return{name:t+1+"级",value:.1*(t+1)}}),level3s:i()({length:10},function(e,t){return{name:t+1+"级",value:.15*(t+1)}}),muls:[{name:"1.5倍",value:1.5},{name:"2倍",value:2},{name:"3倍",value:3}],targets:[{name:"20万",value:2e5},{name:"80万",value:8e5},{name:"160万",value:16e5},{name:"500万",value:5e6},{name:"1000万",value:1e7},{name:"2000万",value:2e7},{name:"2400万",value:24e6},{name:"3000万",value:3e7},{name:"4000万",value:4e7}]}},methods:{handleClick:function(e,t){}}},F={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("el-row",[a("el-form",{ref:"form",attrs:{inline:"",model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"考公倍数"}},[a("el-select",{attrs:{placeholder:"请选择倍数"},model:{value:e.form.mul,callback:function(t){e.$set(e.form,"mul",t)},expression:"form.mul"}},[a("el-option",{attrs:{label:"无",value:1}}),e._v(" "),e._l(e.muls,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"对决功绩壹"}},[a("el-select",{attrs:{placeholder:"请选择等级"},model:{value:e.form.level1,callback:function(t){e.$set(e.form,"level1",t)},expression:"form.level1"}},[a("el-option",{attrs:{label:"无",value:0}}),e._v(" "),e._l(e.level1s,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"对决功绩贰"}},[a("el-select",{attrs:{placeholder:"请选择等级"},model:{value:e.form.level2,callback:function(t){e.$set(e.form,"level2",t)},expression:"form.level2"}},[a("el-option",{attrs:{label:"无",value:0}}),e._v(" "),e._l(e.level2s,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"对决功绩叁"}},[a("el-select",{attrs:{placeholder:"请选择等级"},model:{value:e.form.level3,callback:function(t){e.$set(e.form,"level3",t)},expression:"form.level3"}},[a("el-option",{attrs:{label:"无",value:0}}),e._v(" "),e._l(e.level3s,function(e,t){return a("el-option",{key:t,attrs:{label:e.name,value:e.value}})})],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"我的氪金"}},[a("el-input",{attrs:{placeholder:"氪金直接记录已有功绩",type:"number"},model:{value:e.form.money,callback:function(t){e.$set(e.form,"money",t)},expression:"form.money"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"已有功绩"}},[a("el-input",{attrs:{min:0,placeholder:"当前功绩",type:"number"},model:{value:e.form.old,callback:function(t){e.$set(e.form,"old",t)},expression:"form.old"}},[a("template",{slot:"append"},[e._v("万")])],2)],1),e._v(" "),a("el-form-item",{attrs:{label:"双倍城皮"}},[a("el-switch",{attrs:{"active-value":2,"inactive-value":1,"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.form.other,callback:function(t){e.$set(e.form,"other",t)},expression:"form.other"}})],1)],1)],1),e._v(" "),a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"周一",name:"1"}},[a("monday",{attrs:{form:e.form,targets:e.targets}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"周二",name:"2"}},[a("tuesday",{attrs:{form:e.form,targets:e.targets}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"周三",name:"3"}},[a("wednesday",{attrs:{form:e.form,targets:e.targets}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"周四",name:"4"}},[a("thursday",{attrs:{form:e.form,targets:e.targets}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"周五",name:"5"}},[a("friday",{attrs:{form:e.form,targets:e.targets}})],1),e._v(" "),a("el-tab-pane",{attrs:{label:"周六",name:"6"}},[a("saturday",{attrs:{form:e.form,targets:e.targets}})],1)],1)],1)},staticRenderFns:[]};var $=a("VU/8")(R,F,!1,function(e){a("Cb0s")},null,null).exports;l.default.use(o.a);var M=new o.a({routes:[{path:"/",name:"HelloWorld",component:$}]}),A=a("zL8q"),z=a.n(A);a("tvR6");l.default.use(z.a),l.default.config.productionTip=!1,new l.default({el:"#app",router:M,components:{App:n},template:"<App/>"})},YmWS:function(e,t){},gsu9:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.1f5101a44faf5c645283.js.map