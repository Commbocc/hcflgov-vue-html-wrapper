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

    <div class="d-flex flex-column">

       <!--  -->
    <section v-if="true" :class="swapNews ? 'order-4' : 'order-2'" class="bg-white py-5" aria-labelledby="dynamicallyGeneratedSectionId2">
      <div class="container">

        <h2 class="text-left display text-dark font-weight-bold display-4" id="dynamicallyGeneratedSectionId2">
          Featured Links
        </h2>

        <hr class="bg-dark mt-0 pt-1">

        <div class="row align-items-stretch justify-content-around">
          <div v-for="(link, i) in featuredLinks" :key="i" class="col-md-6 col-lg-4 mb-4">
            <a is="hc-icon-btn" href="#" :icon="link.icon" stretch>
              {{ link.name }}
            </a>
          </div>
        </div>

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

    <!--  -->
    <section v-if="true" :class="swapNews ? 'order-2' : 'order-4'" class="bg-white py-5">
      <div class="container">

        <h2 class="text-left display text-dark font-weight-bold display-4" id="dynamicallyGeneratedSectionId2">
          News &amp; Announcements
        </h2>

        <hr class="bg-dark mt-0 pt-1">

        <div class="row">
          <div class="col-lg-6">
            <div class="mb-3 sticky">
              <div is="HcCardNews" :sitecore-item="posts[0]" class=""></div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="list-group">
              <a v-for="(item, i) in newsCards" :key="i" href="#" class="p-3 list-group-item-action media border border-right-0 border-left-0">
                <div class="media-body">
                  <h6 class="mt-0 mb-1 text-secondary text-capitalize">
                    {{ item.Heading }}
                  </h6>
                  <div class="small font-italic">
                    {{ item.SubHeading }}
                  </div>
                  <span>{{ item.Excerpt }}</span>
                  <span class="d-block text-muted small">Posted {{ item.PublishDate.toLocaleString() }} in {{ item.Category }}</span>
                 </div>
                <span class="fa-2x text-info ml-3 align-self-center" :class="item.Icon"></span>
              </a>
            </div>
          </div>
        </div>

        <div v-if="false" class="row align-items-stretch">
          <div v-for="(item, i) in newsCards" :key="i" class="col-md-6 col-lg-4 mb-3">
            <div is="HcCardNews" :sitecore-item="item" :hide-img="(i == 1 || i == 5)" class="v-card"></div>
          </div>
        </div>

        <p class="text-center my-3">
          <!-- <a href="#" class="btn btn-lg btn-primary">
            Visit the Newsroom
          </a> -->
          <router-link :to="{ name: 'Newsroom' }" class="btn btn-lg btn-primary">
            Visit the Newsroom
          </router-link>
        </p>

      </div>
    </section>

    </div>

    <!--  -->
    <section v-if="true" class="bg-light py-5">
      <div class="container">

        <h2 class="text-left display text-dark font-weight-bold display-4" id="dynamicallyGeneratedSectionId2">
          Board of County Commissioners
        </h2>

        <hr class="bg-dark mt-0 pt-1">

        <!-- commissioners -->
        <div class="row align-items-top justify-content-around">
          <div v-for="(commissioner, i) in commissioners" :key="i" class="col-6 col-sm-4 col-md-3 col-lg mt-2">
            <a href="#" :title="commissioner.name" class="text-dark text-decoration-none">
              <div class="embed-responsive embed-responsive-1by1 rounded-circle v-card" :style="`background-image: url(${commissioner.imgSrc}); background-size: cover;`"></div>
              <div class="text-center small mt-1">
                <strong class="h6 d-block mb-0">{{ commissioner.name }}</strong>
                <span class="text-muted">
                  {{ commissioner.title }}
                </span>
              </div>
            </a>
          </div>
        </div>

        <p class="text-center">
          <a href="#" class="btn btn-lg btn-outline-secondary mt-3">
            Contact My Commissioner
          </a>
        </p>

      </div>
    </section>

  </main>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import QuickLinks from '../../partials/QuickLinks'

export default {
  mounted() {
    this.showBanner(false)
    this.setPageTitle()
    this.showFeedbackForm(false)
  },

  components: { QuickLinks },

  methods: mapMutations(['setPageTitle', 'showBanner', 'showFeedbackForm']),

  computed: {
    ...mapState(['pageTitle', 'bannerGradient']),
    ...mapState({
      jumboAlt: state => state.home.jumboAlt,
      swapNews: state => state.home.swapNews
    }),
    ...mapGetters(['commissioners', 'posts', 'featuredLinks']),
    newsCards() {
      return this.posts.slice(1, 5)
    }
  }
}
</script>
