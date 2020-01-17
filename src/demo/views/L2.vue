<template>
  <main>
    <!--  -->
    <section class="py-5 gradient-diag-info text-white v-card">
      <div class="container">
        <p class="h1">{{ pageTitle }} Category</p>
        <p>From reclaimed water in Brandon to trash pick-up in Carrollwood, we provide the services that help 1.3 million people call Hillsborough County home. Whether you’re a newcomer or a longtime resident, this is your first stop for finding the information you need, for the place you live.</p>
      </div>
    </section>

    <!-- L3's -->
    <section class="py-5">
      <div class="container">
        <h2 class="mt-0 text-left text-dark font-weight-bold display-4">{{ pageTitle }} Sections</h2>
        <hr class="bg-dark mt-0 pt-1" />

        <IconButtons :links="l3s" />
      </div>
    </section>

    <!-- L3's -->
    <section v-if="false" class="py-5">
      <div class="container">
        <h2 class="mt-0 text-left text-dark font-weight-bold display-4">{{ pageTitle }} Level Threes</h2>
        <hr class="bg-dark mt-0 pt-1" />

        <QuickLinks />
      </div>
    </section>

    <!-- Guides -->
    <section class="py-5 bg-light">
      <div class="container">
        <h2 class="mt-0 text-left text-dark font-weight-bold display-4">{{ pageTitle }} Guides</h2>
        <hr class="bg-dark mt-0 pt-1" />
        <QuickLinks />
      </div>
    </section>

    <!-- News & Events -->
    <section class="py-5">
      <div class="container">
        <h2
          class="mt-0 text-left text-dark font-weight-bold display-4"
        >{{ pageTitle }} News and Events</h2>
        <hr class="bg-dark mt-0 pt-1" />

        <div class="row align-items-stretch">
          <div v-for="(item, i) in articles.slice(0,3)" :key="i" class="col-md-4 mb-3">
            <HcCardNews :sitecore-item="articles[i]" />
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState } from 'vuex'
import storeMixin from '@/demo/store/mixins'
import QuickLinks from '@/partials/QuickLinks'
import IconButtons from '../../partials/IconButtons'
// import EventCards from '../../partials/EventCards'

let l3s = [
  { name: 'Code Violations', icon: 'fas fa-home' },
  { name: 'Homeowners & Neighborhoods', icon: 'fas fa-home' },
  { name: 'Homeowner Permits', icon: 'far fa-file-alt' },
  { name: 'Mosquito Control', icon: 'fas fa-bug' },
  { name: 'Roads & Sidewalks', icon: 'fas fa-road' },
  { name: 'Trash & Recycling', icon: 'fas fa-trash' },
  { name: 'Water & Sewer', icon: 'fas fa-water' }
]

export default {
  mixins: [storeMixin],

  components: { QuickLinks, IconButtons },

  mounted() {
    this.setPageTitle('Property & Home')
    this.setBannerGradient('dark')
    this.fetchArticles()
  },

  computed: mapState({
    articles: state => state.data.articles
  }),

  data: () => ({
    l3s
  })
}
</script>