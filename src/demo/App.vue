<template>
  <div id="hc-app" class="d-flex flex-column">
    <!-- alerts -->
    <aside
      v-if="showAlert"
      class="alert alert-dark bg-danger v-card mb-1 text-white gradient-diag-danger mb-0 alert-dismissible fade show"
      role="alert"
    >
      <div class="container">
        <strong>Cold weather in affect!</strong>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
        <a
          href="#"
          class="alert-link"
        >Stay Safe</a>

        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </aside>

    <!-- navbar -->
    <!-- https://www.w3.org/WAI/GL/2016/WD-WCAG20-TECHS-20160105/G1 -->
    <nav is="hc-navbar" logo-href="./" skip-content-link="#main-content" class="v-card"></nav>

    <!-- jumbo -->
    <ol v-if="showBanner" is="hc-banner" :gradient="bannerGradient" :title="pageTitle">
      <li class="breadcrumb-item">
        <a href="./">Home</a>
      </li>
    </ol>

    <!-- router -->
    <router-view :key="$route.fullPath"></router-view>

    <!-- footer -->
    <footer is="hc-footer" class="mt-auto" :show-feedback-form="showFeedbackForm"></footer>

    <!-- demo options -->
    <aside class="fixed-bottom" aria-label="Demo Options">
      <button @click="$store.commit('toggleDemoBar')" class="btn btn-sm btn-dark">Demo Options</button>

      <DemoOptions v-if="showDemoBar" />

    </aside>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import DemoOptions from './components/DemoOptions'

export default {
  components: { DemoOptions },

  computed: mapState(['showAlert', 'showBanner', 'showDemoBar', 'showFeedbackForm', 'bannerGradient', 'pageTitle'])
}
</script>
