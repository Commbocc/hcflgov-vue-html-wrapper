<template lang="html">
  <main>

    <!--  -->
    <section v-if="true" class="guide-navbar-containr bg-dark gradient-diag-dark v-card sticky-top">
      <div class="container">
        <nav id="spy-target" class="navbar navbar-dark navbar-expand-md">
          <span class="lead text-light d-md-none">Guide Menu</span>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-guide" aria-controls="navbar-guide" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbar-guide">
            <ul class="nav navbar-nav small">
              <li class="nav-item">
                <a class="nav-link" href="#quicklinks">Quick Links</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#what-can-i-recycle">What Can I Recycle?</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#upcomingevents">Upcoming Events</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#video">A Video</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#tips">Tips</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#trending">Trending</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </section>

    <!--  -->
    <section id="quicklinks" class="bg-light py-5 order-1" aria-labelledby="dynamicallyGeneratedSectionId1">
      <div class="container">

        <h2 class="mt-0 text-left text-dark font-weight-bold display-4" >
          Quick Links
        </h2>

        <hr class="bg-dark mt-0 pt-1">

        <QuickLinks />

      </div>
    </section>

    <!--  -->
    <div id="what-can-i-recycle" is="hc-parallax" gradient="light" src="http://tampabayrecycles.org/assets/images/recycle-art.png" class="text-center text-shadow v-card">
      <div class="">
        <h2 class="font-weight-bold display-4">
          What Can I Recycle?
        </h2>
        <p class="lead">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="#" class="btn btn-lg btn-outline-light">
          Learn More
        </a>
      </div>
    </div>

    <!--  -->
    <section id="upcomingevents" class="bg-white py-5 order-1" aria-labelledby="dynamicallyGeneratedSectionId1">
      <div class="container">

        <h2 class="mt-0 text-left text-dark font-weight-bold display-4">
          Upcoming Events
        </h2>

        <hr class="bg-dark mt-0 pt-1">

        <div class="row">
          <div v-for="n in 4" class="col-md-6">
            <a href="#" class="p-3 list-group-item-action media border border-right-0 border-left-0">
              <div class="media-body">
                <h6 class="mt-0 mb-1 text-secondary text-capitalize">
                  Scam Likely
                </h6>
                <div class="small font-italic">
                  7 things to know for 2019 Consumer Protection Week
                </div>
                <span>quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto</span>
                <span class="d-block text-muted small">Posted 3/17/2019, 8:00:00 PM in Consumer Protection</span>
              </div>
              <span class="fa-2x text-info ml-3 align-self-center fas fa-calendar-alt">
              </span>
            </a>
          </div>
        </div>

        <!-- <EventCards /> -->

      </div>
    </section>

    <section id="video" class="bg-light gradient-diag-dark py-sm-5">
      <div class="container embed-responsive embed-responsive-16by9 my-sm-5">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
      </div>
    </section>

    <!--  -->
    <section id="tips" class="py-5 bg-white">
      <div class="container">

        <h2 class="mt-0 text-left text-dark font-weight-bold display-4">
          Trash &amp; Recycling Tips
        </h2>

        <hr class="bg-dark mt-0 pt-1">

        <p class="lead">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <p class="lead">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>

        <hr class="my-5">

        <div class="row align-items-center">
          <div class="col-md-5 order-md-12">
            <img src="https://picsum.photos/seed/15/800" class="img-fluid d-block mx-auto v-card mb-3">
          </div>

          <div class="col-md-7 order-md-1">
            <p class="display-4 text-primary">Lorem ipsum dolor sit amet quia et suscipit</p>
            <ul>

              <li>Place trash in a container with a lid or use a sturdy trash bag.</li>
              <li>Place recycling on the curb in a City-issued, recycling cart. Contact BOS:311 to request a new recycling cart, but keep in mind they are not available until March. </li>
              <li>Do not use small plastic and paper bags from market or convenience stores for trash or recycling on your curb. </li>
              <li>You can turn a trash can into a recycling bin with a sticker from 311. The bin should be smaller than 32 gallons, and needs to have a lid.</li>

            </ul>

            <p class="text-center">
              <a href="#" class="btn btn-outline-secondary btn-lg">Lorem Ipsum Dolor</a>
            </p>

          </div>
        </div>

        <hr class="my-5">

        <div class="row align-items-center">
          <div class="col-md-5">
            <img src="https://picsum.photos/seed/2/800" class="img-fluid d-block mx-auto v-card mb-3">
          </div>

          <div class="col-md-7">
            <p class="display-4 text-primary">Lorem ipsum dolor sit amet quia et suscipit</p>
            <ul>

              <li>Place trash in a container with a lid or use a sturdy trash bag.</li>
              <li>Place recycling on the curb in a City-issued, recycling cart. Contact BOS:311 to request a new recycling cart, but keep in mind they are not available until March. </li>
              <li>Do not use small plastic and paper bags from market or convenience stores for trash or recycling on your curb. </li>
              <li>You can turn a trash can into a recycling bin with a sticker from 311. The bin should be smaller than 32 gallons, and needs to have a lid.</li>

            </ul>

            <p class="text-center">
              <a href="#" class="btn btn-outline-secondary btn-lg">Lorem Ipsum Dolor</a>
            </p>
          </div>
        </div>

        <hr class="my-5">

        <div class="row">
          <div class="col-12">
            <p class="h4">Heading</p>

            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p class="h4">Another Heading</p>

            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <p class="text-center">
              <a href="#" class="btn btn-outline-secondary btn-lg">Lorem Ipsum Dolor</a>
            </p>

          </div>
        </div>

      </div>
    </section>

    <section id="trending" class="py-5 bg-dark">
      <div class="container">

        <h2 class="mt-0 text-left text-warning font-weight-bold display-4" >
          Trending
        </h2>

        <hr class="bg-warning mt-0 mb-5 pt-1">

        <ol class="d-flex flex-wrap text-warning">
          <li class="col-md-6 mb-4 px-4" v-for="post in trending">
            <a href="#" class="h5 text-white text-capitalize">
              {{ post.title }}
            </a>
            <small class="text-muted d-block">2 hours ago</small>
          </li>
        </ol>

      </div>
    </section>


  </main>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

import QuickLinks from '@/partials/QuickLinks'
import EventCards from '@/partials/EventCards'

export default {
  mounted() {
    this.showBanner()
    this.setPageTitle('Trash & Recycling')
    this.showFeedbackForm(true)
    this.setTrendingPosts()
  },

  components: { QuickLinks, EventCards },

  methods: {
    ...mapMutations(['setPageTitle', 'showFeedbackForm', 'showBanner']),
    ...mapActions(['fetchPosts']),
    async setTrendingPosts() {
      this.trending = await this.fetchPosts(
        'https://jsonplaceholder.typicode.com/posts?_limit=6'
      )
    }
  },

  data: () => ({
    trending: []
  })
}
</script>
