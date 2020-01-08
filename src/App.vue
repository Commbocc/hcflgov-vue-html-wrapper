<script>
const inBrowser = typeof window !== 'undefined'
// import defaultOptions from './options'
import components from './components'

let App; export default App = {
  install (Vue) {
    // options = Object.assign(defaultOptions, options)

    Vue.prototype.$hcHtmlWrapper = new Vue({
      ...this,
      // ...options
    })

    Vue.mixin({
      mixins: [components]
    })
  },
  data: () => ({
  }),
  methods: {},
  computed: {
    navbarEndpoint () {
      return 'https://www.hillsboroughcounty.org/apis/v1/endpoints/navbar'
    },
    // TODO: footerEndpoint
    // footerEndpoint () {
    //   return 'https://www.hillsboroughcounty.org/apis/v1/endpoints/footer'
    // }
  }
}

if (inBrowser && window.Vue) {
  window.Vue.use(App)
}
</script>

<style src="@/assets/sass/main.scss" lang="scss"></style>

