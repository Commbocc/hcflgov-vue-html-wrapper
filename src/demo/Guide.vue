<template lang="html">
  <main>

    <!--  -->
    <section v-if="false" class="bg-dark gradient-diag-dark v-card sticky-top">
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
                <a class="nav-link" href="#upcomingevents">Upcoming Events</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
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
    <div is="hc-parallax" gradient="success" src="http://tampabayrecycles.org/assets/images/recycle-art.png" class="text-center text-shadow v-card">
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

    <!--  -->
    <section class="py-5">
      <div class="container">

        <p v-for="n in 30">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

      </div>
    </section>


  </main>
</template>

<script>
import QuickLinks from '../partials/QuickLinks'
import EventCards from '../partials/EventCards'

export default {
  mounted () {
    this.$parent.jumbo = false
    this.$parent.pageTitle = 'Trash & Recycling'
  },
  components: {
    QuickLinks,
    EventCards
  }
}
</script>
