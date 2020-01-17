<template lang="html">
  <main aria-labelledby="home-h1">

    <!-- header -->
    <header v-if="true">
      <div is="hc-parallax" :gradient="bannerGradient" class="text-center text-shadow">
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
    </header>

    <!--  -->
    <section v-if="true" class="bg-light py-5 order-1" aria-labelledby="dynamicallyGeneratedSectionId1">
      <div class="container">

        <h2 class="mt-0 text-left text-dark font-weight-bold display-4" id="dynamicallyGeneratedSectionId1">
          Common Resources
        </h2>

        <hr class="bg-dark mt-0 pt-1">

        <QuickLinks />

      </div>
    </section>

    <!-- flex column for dynamic switching of the featured links & news sections -->
    <div class="d-flex flex-column">

      <!-- featured links -->
      <section v-if="true" :class="swapNews ? 'order-4' : 'order-2'" class="bg-white py-5" aria-labelledby="dynamicallyGeneratedSectionId2">
        <div class="container">

          <h2 class="text-left display text-dark font-weight-bold display-4" id="dynamicallyGeneratedSectionId2">
            Featured Links
          </h2>

          <hr class="bg-dark mt-0 pt-1">

          <IconButtons :links="featuredLinks" />

        </div>
      </section>

      <!--  -->
      <section class="py-4 bg-dark order-3 gradient-diag-dark text-light">
        <div class="container text-center">
          <strong class="text-primary">
            Some kind of an announcement, not too serious!
          </strong>
          <em class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</em>
        </div>
      </section>

      <!-- News & Announcements -->
      <HomeNewsAnnouncements :articles="articles" :class="swapNews ? 'order-2' : 'order-4'" />

    </div>

    <!-- commissioners -->
    <section v-if="true" class="bg-light py-5">
      <div class="container">

        <h2 class="text-left display text-dark font-weight-bold display-4" id="dynamicallyGeneratedSectionId2">
          Board of County Commissioners
        </h2>

        <hr class="bg-dark mt-0 pt-1">

        <!-- commissioners -->
        <HcCommissionerCirlces :commissioners="commissioners" />

        <p class="text-center">
          <!-- <a href="#" class="btn btn-lg btn-outline-secondary mt-3">
            Contact My Commissioner
          </a> -->
          <router-link :to="{ name: 'Commissioner' }" class="btn btn-lg btn-outline-secondary mt-3">
            Contact My Commissioner
          </router-link>
        </p>

      </div>
    </section>

  </main>
</template>

<script>
import storeMixin from '@/demo/store/mixins'
import { mapState, mapGetters } from 'vuex'
import IconButtons from '../../partials/IconButtons'
import QuickLinks from '../../partials/QuickLinks'
import HomeNewsAnnouncements from '../../partials/HomeNewsAnnouncements'

export default {
  mixins: [storeMixin],

  mounted() {
    this.showBanner(false)
    this.showFeedbackForm(false)
    this.fetchArticles()
    this.fetchCommissioners()
  },

  components: { QuickLinks, IconButtons, HomeNewsAnnouncements },

  computed: {
    ...mapState({
      jumboAlt: state => state.home.jumboAlt,
      swapNews: state => state.home.swapNews,
      commissioners: state => state.data.commissioners,
      articles: state => state.data.articles
    }),
    ...mapGetters(['featuredLinks'])
  }
}
</script>
