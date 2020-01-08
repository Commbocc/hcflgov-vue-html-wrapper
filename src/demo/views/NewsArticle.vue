<template lang="html">
  <main>
    <section class="py-4 bg-white flex-grow-1" aria-labelledby="banner">

      <!-- pre-video container -->
      <div class="container">
      <!-- subheading -->
        <p v-if="subHeading" class="h2 text-secondary font-italic mb-3">{{ subHeading }}</p>

        <p class="text-muted small">
          Posted {{ new Date(publishDate).toLocaleString() }} in {{ category }}
        </p>
      </div>

      <!-- video -->
      <div v-if="true" class="container embed-responsive embed-responsive-16by9 mb-3">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
      </div>

      <!-- article content -->
      <div class="container">
        <div class="row">

          <div class="col-lg-8">
            <!-- article body -->
            <div class="rte" v-html="body"></div>
          </div>

          <div class="col-lg-4">

            <!-- image -->
            <figure class="figure">
              <img :src="imgSrc" class="figure-img img-fluid v-card" alt="...">
              <figcaption class="figure-caption">A caption for the above image.</figcaption>
            </figure>

            <!-- related articles -->
            <div class="card mb-3">
              <div class="card-header border-0 font-weight-bold text-secondary">
                <span aria-label="hidden" class="fas fa-newspaper"></span>
                Related Articles
              </div>

              <div class="list-group list-group-flush">
                <a  v-for="(item, i) in relatedArticles" :key="i" href="#" class="list-group-item list-group-item-action small">
                  <h6 class="mb-0">{{ item.Heading }}</h6>
                  <em clsas="small">{{ item.SubHeading }}</em>
                  <span class="text-muted small d-block">{{ item.PublishDate.toLocaleString() }}</span>
                </a>
              </div>
            </div>

            <!-- tags -->
            <ul v-if="tags.length" class="list-inline m-1">
              <li v-for="(tag, i) in tags" :key="i" class="list-inline-item">
                <a href="#tags" class="badge badge-info text-white">
                  {{ tag }}
                </a>
              </li>
            </ul>

            <hr>

          </div>
          

        </div>

        <!-- social share -->
        <aside class="text-center" aria-label="Share this article">
          <a href="#" class="p-2 m-1 v-card badge badge-light text-muted">
            <span class="lead fab fa-fw fa-facebook"></span>
          </a>
          <a href="#" class="p-2 m-1 v-card badge badge-light text-muted">
            <span class="lead fab fa-fw fa-twitter"></span>
          </a>
          <a href="#" class="p-2 m-1 v-card badge badge-light text-muted">
            <span class="lead fab fa-fw fa-linkedin"></span>
          </a>
        </aside>  

      </div>
    </section>
  </main>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import SitecoreContentItemMixin from '@/mixins/Sitecore/ContentItem'
import posts from '../store/data/posts'

export default {
  mixins: [SitecoreContentItemMixin],

  props: {
    sitecoreItem: {
      default: () => posts[0]
    }
  },

  mounted() {
    this.showBanner()
    this.setPageTitle(this.heading)
    this.showFeedbackForm()
    this.relatedArticles = this.posts.slice(0, 4)
  },

  data: () => ({
    relatedArticles: []
  }),

  methods: mapMutations(['setPageTitle', 'showFeedbackForm', 'showBanner']),

  computed: {
    ...mapGetters(['posts'])
  }
}
</script>
