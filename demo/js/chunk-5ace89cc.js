(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ace89cc"],{"2a31":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return t.commissioner?e("main",[e("section",{staticClass:"py-5"},[e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 order-md-12"},[e("img",{staticClass:"img-fluid mb-3",attrs:{src:t.commissioner.imgSrc,alt:t.commissioner.name}})]),e("div",{staticClass:"col-md-8 order-md-1"},[e("h2",{staticClass:"text-left display text-dark font-weight-bold",attrs:{id:"dynamicallyGeneratedSectionId2"}},[t._v("Contact Commissioner "+t._s(t.commissioner.lName))]),e("hr",{staticClass:"bg-dark mt-0 pt-1"}),e("ul",{staticClass:"fa-ul"},[e("li",{attrs:{title:"Mailing Address"}},[t._m(0),e("strong",{staticClass:"sr-only"},[t._v("Mailing Address:")]),t._v("\n              "+t._s(t.commissioner.mailingAddress)+"\n            ")]),e("li",{attrs:{title:"Phone"}},[t._m(1),e("strong",{staticClass:"sr-only"},[t._v("Phone:")]),t._v("\n              "+t._s(t.commissioner.phone)+"\n            ")]),e("li",{attrs:{title:"Fax"}},[t._m(2),e("strong",{staticClass:"sr-only"},[t._v("Fax:")]),t._v("\n              "+t._s(t.commissioner.fax)+"\n            ")]),e("li",{attrs:{title:"Email"}},[t._m(3),e("a",{attrs:{href:t.commissioner.contactFormLink,target:"_blank"}},[t._v("Email")])]),t.commissioner.aides.length?e("li",{attrs:{title:"Aides"}},[t._m(4),e("strong",{},[t._v("Aides:")]),t._v("\n              "+t._s(t.commissioner.aides.join(", "))+"\n            ")]):t._e()]),t._m(5)])])])]),e("section",{staticClass:"bg-light py-5"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"text-left display text-dark font-weight-bold",attrs:{id:"dynamicallyGeneratedSectionId2"}},[t._v("Boards & Councils")]),e("hr",{staticClass:"bg-dark mt-0 pt-1"}),e("p",[t._v("As part of their duties as a County Commissioner, "+t._s(t.commissioner.lName)+" serves on the following Boards and Councils:")]),e("ul",t._l(t.commissioner.boards,(function(s,a){return e("li",{key:a},[t._v(t._s(s))])})),0)])]),e("section",{staticClass:"py-5"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"text-left display text-dark font-weight-bold",attrs:{id:"dynamicallyGeneratedSectionId2"}},[t._v("About Commissioner "+t._s(t.commissioner.lName))]),e("hr",{staticClass:"bg-dark mt-0 pt-1"}),e("div",{staticClass:"fte",domProps:{innerHTML:t._s(t.commissioner.body)}})])])]):t._e()},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"fa-li"},[e("span",{staticClass:"fas fa-home",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"fa-li"},[e("span",{staticClass:"fas fa-phone",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"fa-li"},[e("span",{staticClass:"fas fa-fax",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"fa-li"},[e("span",{staticClass:"fas fa-envelope",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",{staticClass:"fa-li"},[e("span",{staticClass:"fas fa-user",attrs:{"aria-hidden":"true"}})])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[e("a",{staticClass:"btn btn-outline-light text-dark btn-sm",attrs:{href:"/htvlive",target:"_blank"}},[t._v("Live Meetings")]),t._v("  \n            "),e("a",{staticClass:"btn btn-outline-light text-dark btn-sm",attrs:{rel:"noopener noreferrer",href:"http://www.youtube.com/playlist?list=PLB28DFA90CD9600F1",target:"_blank"}},[t._v("Commissioner's YouTube Playlist ")]),e("a",{staticClass:"btn btn-outline-light text-dark btn-sm",attrs:{rel:"noopener noreferrer",href:"http://www.sandymurman.com/news-letters/",target:"_blank"}},[t._v("Commissioner's Newsletter")]),e("a",{staticClass:"btn btn-outline-light text-dark btn-sm",attrs:{rel:"noopener noreferrer",href:"http://www.sandymurman.com/sandys-gallery/",target:"_blank"}},[t._v("Commissioner's Photos")]),e("a",{staticClass:"btn btn-outline-light text-dark btn-sm",attrs:{rel:"noopener noreferrer",href:"http://www.sandymurman.com/",target:"_blank"}},[t._v("Commissioner's Website")])])}],n=(e("7f7f"),e("96cf"),e("3b8d")),r=e("5674"),o={mixins:[r["a"]],mounted:function(){this.setCommissioner()},data:function(){return{commissioner:null}},methods:{setCommissioner:function(){var t=Object(n["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchCommissioners();case 2:this.commissioner=this.$store.state.data.commissioners[0],this.setPageTitle("".concat(this.commissioner.title,": Comissioner ").concat(this.commissioner.name)),this.setBannerImage(this.commissioner.bannerImgSrc);case 5:case"end":return t.stop()}}),t,this)})));function s(){return t.apply(this,arguments)}return s}()}},l=o,c=e("2877"),m=Object(c["a"])(l,a,i,!1,null,null,null);s["default"]=m.exports},"7f7f":function(t,s,e){var a=e("86cc").f,i=Function.prototype,n=/^\s*function ([^ (]*)/,r="name";r in i||e("9e1e")&&a(i,r,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})}}]);