(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0a4f23"],{"0937":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{class:t.card?"card":null},[a("div",{class:t.card?"card-header pt-1":"mb-1"},[t.tabLinks.length?a("ul",{staticClass:"nav nav-tabs",class:t.listClass,attrs:{role:"tablist"}},t._l(t.tabLinks,(function(n,e){return a("li",{key:e,staticClass:"nav-item"},[a("a",t._b({class:t.linkClass(e)},"a",t.linkAttrs(n,e),!1),[t._v("\n          "+t._s(n.title)+"\n        ")])])})),0):t._e()]),a("div",{staticClass:"tab-content",class:this.card?"card-body":null},[t._t("default")],2)])},s=[],i={name:"hc-tabs",props:{center:{type:Boolean,default:!1},card:{type:Boolean,default:!1},noFade:{type:Boolean,default:!1}},mounted:function(){this.tabLinks=this.getTabs()},data:function(){return{tabLinks:[]}},computed:{tabs:function(){return this.$slots.default.filter((function(t){return t.componentOptions&&"hc-tab"==t.componentOptions.tag}))},firstChildId:function(){return this.tabs[0].componentInstance._uid},listClass:function(){return[this.center?"justify-content-center":null,this.card?"card-header-tabs":null]}},methods:{getTabs:function(){return this.tabs.map((function(t){return{id:t.componentInstance._uid,title:t.componentOptions.propsData.title}}))},linkClass:function(t){return["nav-link text-decoration-none border-bottom-0",0==t?"active":null]},linkAttrs:function(t,n){return{href:"#pane-".concat(this._uid,"-").concat(t.id),id:"tab-".concat(this._uid,"-").concat(t.id),role:"tab","data-toggle":"tab","aria-controls":"pane-".concat(this._uid,"-").concat(t.id),"aria-selected":0==n?"true":"false"}}}},c=i,o=a("2877"),l=Object(o["a"])(c,e,s,!1,null,null,null);n["default"]=l.exports}}]);