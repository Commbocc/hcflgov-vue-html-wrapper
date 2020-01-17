<template>
  <section class="bg-white py-5">
    <div class="container">
      <h2
        class="text-left display text-dark font-weight-bold display-4"
        id="dynamicallyGeneratedSectionId2"
      >News &amp; Announcements</h2>

      <hr class="bg-dark mt-0 pt-1" />

      <div class="row">
        <div class="col-lg-6 d-none d-md-block">
          <div class="mb-3 sticky">
            <div is="HcCardNews" v-if="activeItem" :sitecore-item="activeItem"></div>
          </div>
        </div>

        <div class="col-lg-6">
          <div class="list-group list-group-flush">
            <a
              v-for="(item, i) in newsCards"
              :key="i"
              href="#"
              class="p-3 list-group-item list-group-item-action"
              @mouseenter="activeItemIndex = i"
            >
              <div class="media">
                <div class="media-body">
                  <h6 class="mt-0 mb-1 text-secondary text-capitalize">{{ item.Heading }}</h6>
                  <div class="small font-italic">{{ item.SubHeading }}</div>
                  <span class="d-md-none">{{ item.Excerpt }}</span>
                  <small
                    :class="activeItemIndex != i ? 'text-muted' : null"
                  >Posted {{ new Date(item.PublishDate).toLocaleString() }} in {{ item.Category }}</small>
                </div>
                <span class="fa-2x text-info ml-3 align-self-center" :class="item.Icon"></span>
              </div>
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
        </a>-->
        <router-link :to="{ name: 'Newsroom' }" class="btn btn-lg btn-primary">Visit the Newsroom</router-link>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['articles'],

  data: () => ({
    activeItemIndex: 0
  }),

  computed: {
    newsCards() {
      return this.articles.length ? this.articles.slice(0, 5) : []
    },
    activeItem() {
      return this.newsCards[this.activeItemIndex]
    }
  }
}
</script>
