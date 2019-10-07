<template>
  <div id="hc-main" class="d-flex flex-column">

    <aside v-if="alert" class="alert alert-dark bg-danger v-card mb-1 text-white gradient-diag-danger mb-0 alert-dismissible fade show" role="alert">
      <div class="container">
        <strong>Cold weather in affect!</strong> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.

        <a href="#" class="alert-link">Stay Safe</a>

        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    </aside>

    <!-- header -->
    <header>
      <!-- https://www.w3.org/WAI/GL/2016/WD-WCAG20-TECHS-20160105/G1 -->
      <nav is="hc-navbar" logo-href="./" skip-content-link="#main-content" class="v-card"></nav>

      <div v-if="jumbo" is="hc-parallax" :gradient="jumboGradient" class="text-center text-shadow">
        <div v-if="jumboAlt" class="">
          <h1 class="font-weight-bold display-2">
            {{ pageTitle }}
          </h1>
          <span class="h2 font-italic">
            Established 1834
          </span>
        </div>
        <div v-else class="">
          <span class="h2 font-italic">
            welcome to
          </span>
          <h1 class="font-weight-bold display-2">
            HCFLGOV.NET
          </h1>
        </div>
      </div>

      <ol v-else is="hc-banner" :gradient="jumboGradient" :title="pageTitle">
        <li class="breadcrumb-item"><a href="./">Home</a></li>
      </ol>
    </header>

    <!-- sudo router -->
    <div class="">
      <main :is="selected" id="main-content"></main>
    </div>

    <!-- footer -->
    <footer is="hc-footer" class="mt-auto"></footer>

    <!-- demo options -->
    <aside class="fixed-bottom" aria-label="Demo Options">
      <button @click="demoOptions = !demoOptions" class="btn btn-sm btn-dark">
        Demo Options
      </button>

      <Navbar v-if="demoOptions"/>
    </aside>

  </div>
</template>

<script>
import * as demoViews from './index'
import Navbar from './_Navbar'

export default {
  components: {
    ...demoViews,
    Navbar
  },
  data: () => ({
    demoOptions: false,
    selected: Object.keys(demoViews)[0],
    alert: false,
    jumbo: true,
    jumboGradient: 'primary',
    jumboAlt: true,
    pageTitle: null,
    swapNews: false
  }),
  computed: {
    views () {
      return Object.keys(demoViews)
    }
  }
}
</script>
