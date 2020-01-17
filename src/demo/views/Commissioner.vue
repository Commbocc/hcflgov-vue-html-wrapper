<template>
  <main v-if="commissioner">
    <!-- commissioner info -->
    <section class="py-5">
      <div class="container">
        <div class="row">
          
          <!-- commissioner image -->
          <div class="col-md-4 order-md-12">
            <img :src="commissioner.imgSrc" :alt="commissioner.name" class="img-fluid mb-3" />
          </div>

          <!-- commissioner contact -->
          <div class="col-md-8 order-md-1">
            <h2
              class="text-left display text-dark font-weight-bold"
              id="dynamicallyGeneratedSectionId2"
            >Contact Commissioner {{ commissioner.lName }}</h2>
            <hr class="bg-dark mt-0 pt-1" />

            <ul class="fa-ul">
              <li title="Mailing Address">
                <span class="fa-li">
                  <span class="fas fa-home" aria-hidden="true"></span>
                </span>
                <strong class="sr-only">Mailing Address:</strong>
                {{ commissioner.mailingAddress }}
              </li>
              <li title="Phone">
                <span class="fa-li">
                  <span class="fas fa-phone" aria-hidden="true"></span>
                </span>
                <strong class="sr-only">Phone:</strong>
                {{ commissioner.phone }}
              </li>
              <li title="Fax">
                <span class="fa-li">
                  <span class="fas fa-fax" aria-hidden="true"></span>
                </span>
                <strong class="sr-only">Fax:</strong>
                {{ commissioner.fax }}
              </li>
              <li title="Email">
                <span class="fa-li">
                  <span class="fas fa-envelope" aria-hidden="true"></span>
                </span>
                <!-- <strong class="sr-only">Eail:</strong> -->
                <a :href="commissioner.contactFormLink" target="_blank">Email</a>
              </li>
              <li v-if="commissioner.aides.length" title="Aides">
                <span class="fa-li">
                  <span class="fas fa-user" aria-hidden="true"></span>
                </span>
                <strong class>Aides:</strong>
                {{ commissioner.aides.join(', ') }}
              </li>
            </ul>

            <!-- links -->
            <p>
              <a
                href="/htvlive"
                class="btn btn-outline-light text-dark btn-sm"
                target="_blank"
              >Live Meetings</a>&nbsp;&nbsp;
              <a
                rel="noopener noreferrer"
                href="http://www.youtube.com/playlist?list=PLB28DFA90CD9600F1"
                target="_blank"
                class="btn btn-outline-light text-dark btn-sm"
              >Commissioner's YouTube Playlist&nbsp;</a>
              <a
                rel="noopener noreferrer"
                href="http://www.sandymurman.com/news-letters/"
                target="_blank"
                class="btn btn-outline-light text-dark btn-sm"
              >Commissioner's Newsletter</a>
              <a
                rel="noopener noreferrer"
                href="http://www.sandymurman.com/sandys-gallery/"
                target="_blank"
                class="btn btn-outline-light text-dark btn-sm"
              >Commissioner's Photos</a>
              <a
                rel="noopener noreferrer"
                href="http://www.sandymurman.com/"
                target="_blank"
                class="btn btn-outline-light text-dark btn-sm"
              >Commissioner's Website</a>
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--  -->
    <section class="bg-light py-5">
      <div class="container">
        <h2
          class="text-left display text-dark font-weight-bold"
          id="dynamicallyGeneratedSectionId2"
        >Boards &amp; Councils</h2>
        <hr class="bg-dark mt-0 pt-1" />
        <p>As part of their duties as a County Commissioner, {{ commissioner.lName }} serves on the following Boards and Councils:</p>
        <ul>
          <li v-for="(board, i) in commissioner.boards" :key="i">{{ board }}</li>
        </ul>
      </div>
    </section>

    <!--  -->
    <section class="py-5">
      <div class="container">
        <h2
          class="text-left display text-dark font-weight-bold"
          id="dynamicallyGeneratedSectionId2"
        >About Commissioner {{ commissioner.lName }}</h2>
        <hr class="bg-dark mt-0 pt-1" />

        <div class="fte" v-html="commissioner.body"></div>
      </div>
    </section>
  </main>
</template>

<script>
import storeMixin from '@/demo/store/mixins'

export default {
  mixins: [storeMixin],

  mounted() {
    this.setCommissioner()
  },

  data: () => ({
    commissioner: null
  }),

  methods: {
    async setCommissioner() {
      await this.fetchCommissioners()
      this.commissioner = this.$store.state.data.commissioners[0]
      this.setPageTitle(
        `${this.commissioner.title}: Comissioner ${this.commissioner.name}`
      )
      this.setBannerImage(this.commissioner.bannerImgSrc)
    }
  }
}
</script>