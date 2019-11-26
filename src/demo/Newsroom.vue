<template lang="html">
  <div class="">

    <!-- htv live -->
    <section v-if="true" is="hc-htv-youtube-live" api-key="AIzaSyCHM69-GIjh_GglzByriM2HTnlxIxM8Mjg"></section>
    <!-- aljazeera -->
    <section v-else is="hc-htv-youtube-live" api-key="AIzaSyCHM69-GIjh_GglzByriM2HTnlxIxM8Mjg" channel-id="UCNye-wNBqNL5ZzHSJj3l8Bg"></section>

    <!-- featured -->
    <section v-if="false" class="py-5 bg-light">
      <div class="container">

        <h2 class="mt-0 text-left text-dark font-weight-bold display-4" id="dynamicallyGeneratedSectionId1">
          Featured News &amp; Events
        </h2>

        <hr class="bg-dark mt-0 pt-1">

        <div class="row align-items-stretch justify-content-center">
          <div v-for="(post, i) in posts.slice(0,3)" class="col-md-6 col-lg-4 mb-4">
            <div is="hc-card-news" :sitecore-item="post" :key="i" :date="new Date" class="v-card"></div>
          </div>
        </div>

      </div>
    </section>

    <!-- search results -->
    <section class="py-4 bg-white">
      <div class="container">

        <div class="row">

          <div class="col-lg-4">

            <div class="d-flex flex-column sticky">

              <!--  -->
              <div class="order-lg-2">
                <div class="mb-3">
                  <a is="hc-icon-btn" href="#" icon="fab fa-youtube" class="" stretch>Hillsborough Television</a>
                </div>
                <div class="mb-3">
                  <a is="hc-icon-btn" href="#" icon="fas fa-broadcast-tower" class="" stretch>Media Packages</a>
                </div>

                <figure class="mb-3 border p-3 text-center">
                  <figcaption class="small font-weight-bold mb-2">
                    Hillsborough County News Flash for July 5, 2019
                  </figcaption>
                  <audio controls>
                    <source src="https://cdn.simplecast.com/audio/4cdb63/4cdb6387-572b-420e-bd0b-7555feaa3ade/c484ce14-a7ed-4ac0-9820-26db1a881d2a/alexa7677_tc.mp3" type="audio/mpeg" />
                  </audio>
                </figure>

              </div>

              <div class="order-lg-3 d-flex flex-wrap justify-content-around mb-3">
                <a href="#" class="p-2 m-1 v-card badge badge-light text-muted">
                  <span class="lead fab fa-facebook fa-fw"></span>
                </a>
                <a href="#" class="p-2 m-1 v-card badge badge-light text-muted">
                  <span class="lead fab fa-twitter fa-fw"></span>
                </a>
                <a href="#" class="p-2 m-1 v-card badge badge-light text-muted">
                  <span class="lead fab fa-youtube fa-fw"></span>
                </a>
                <a href="#" class="p-2 m-1 v-card badge badge-light text-muted">
                  <span class="lead fab fa-instagram fa-fw"></span>
                </a>
                <a href="#" class="p-2 m-1 v-card badge badge-light text-muted">
                  <span class="lead fab fa-linkedin fa-fw"></span>
                </a>
              </div>

              <div class="order-lg-1 mb-3">

                <!-- filters -->
                <div is="hc-search-filters" card-header="Filter News" icon="fa fa-filter"></div>

              </div>

            </div>

          </div>

          <div class="col-lg-8">

            <!-- filtered info -->
            <div class="text-muted small text-right">
              <em>
                showing <strong>{{ pagination.per_page }}</strong> of <strong>{{ pagination.count }}</strong> results
              </em>

              <div v-if="false">
                containing

                <span v-for="n in 2" class="badge badge-info text-white ml-1">
                  filter {{ n }}
                  <a href="#" class="pl-1 text-secondary">&times;</a>
                </span>
              </div>

              <hr class="mt-0">
            </div>

            <div class="">
              <!-- posts -->
              <div is="hc-search-result" v-for="(post, i) in posts" :key="i" :sitecore-item="post" :date="new Date" class="mb-3" :suggested="i == 0"></div>
            </div>

          </div>

        </div>

        <!-- pagination -->
        <div is="HcPagination" ref="pagination" :paging="pagination"></div>

      </div>
    </section>

    <!--  -->
    <section class="py-4 bg-dark gradient-diag-dark text-light">
      <div class="container text-center">
        <strong class="text-primary">
          Some kind of an announcement, not too serious!
        </strong>
        <em class="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.</em>
      </div>
    </section>

    <!-- additional news sources etc. -->
    <section class="py-5 bg-white">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6">

            <img src="https://picsum.photos/700/400/?random" class="img-fluid mb-3 v-card" alt="">

            <a is="hc-icon-btn" href="#" icon="fas fa-exclamation-triangle" class="mb-3">
              HCFL ALert
            </a>

            <a is="hc-icon-btn" href="#" icon="fas fa-globe" class="mb-3">
              Stay Safe
            </a>

          </div>
          <div class="col-md-6">
            <nav class="nav flex-column">
              <a v-for="(post, i) in posts.slice(0,8)" :key="i" href="#" class="nav-link">{{ post.Heading }}</a>
            </nav>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import posts from './posts'

export default {
  data: () => ({
    posts: [],
    pagination:  {"current": 2,"previous": 1,"next": 3,"per_page": 25,"pages": 18,"count": 261}
  }),
  mounted () {
    this.posts = posts
    this.$parent.jumbo = false
    this.$parent.showFeedbackForm = false
    this.$parent.pageTitle = 'Newsroom'
  }
}
</script>
