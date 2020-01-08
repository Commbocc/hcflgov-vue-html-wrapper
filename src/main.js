// demo
import Vue from 'vue'
import HcHtmlWrapper from './App'
import Demo from './demo/App'

import router from './demo/router'
import store from './demo/store'

// vendor
// import $ from 'jquery'
import 'popper.js'
import 'bootstrap'

// enable bootstrap popovers
$(function () {$('[data-toggle="popover"]').popover()})

Vue.config.productionTip = false

Vue.use(HcHtmlWrapper)

new Vue({
  render: h => h(Demo),
  router,
  store,
}).$mount('#hc-main')
