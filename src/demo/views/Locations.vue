<template>
  <main>
    <div class="d-flex flex-column flex-sm-row">
      <!-- location map -->
      <div is="HcLocationsMap" class="order-sm-12">HcLocationsMap</div>

      <div class="flex-fill">
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
            <div is="HcLocationsList">HcLocationsList</div>
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
  }
}
</script>