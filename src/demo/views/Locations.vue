<template>
  <main v-if="$store.state.data.locations">
    <div class="d-flex flex-column flex-sm-row">
      <!-- location map -->
      <HcLocationsMap
        ref="LocationsMap"
        :locations="$store.state.data.locations"
        @scroll-to="scrollToInList"
        class="order-sm-12"
      />

      <div class="flex-fill order-sm-1">
        <header>
          <ol
            v-if="true"
            is="hc-banner"
            :gradient="bannerGradient"
            :img-src="bannerImage"
            :title="pageTitle"
          >
            <li class="breadcrumb-item">
              <a href="./">Home</a>
            </li>
          </ol>
        </header>

        <section class="py-5">
          <div class="container">
            <!-- location list -->
            <HcLocationsList
              ref="LocationsList"
              :locations="$store.state.data.locations"
              @show-in-map="showInMap"
            />
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<script>
import storeMixin from '@/demo/store/mixins'

export default {
  mixins: [storeMixin],

  mounted() {
    this.showBanner(false)
    this.setPageTitle('Locations')
    this.fetchLocations()
  },

  methods: {
    showInMap(place, mobile = false) {
      if (mobile) {
        this.$refs.LocationsMap.showMobileControls = true
      }
      this.$refs.LocationsMap.activePlace = place
    },
    scrollToInList(place) {
      this.$refs.LocationsList.scrollTo(place)
    }
  }
}
</script>
