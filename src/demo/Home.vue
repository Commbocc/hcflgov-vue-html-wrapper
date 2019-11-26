<template lang="html">
  <main aria-labelledby="home-h1" class="d-flex flex-column">

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

    <!--  -->
    <section :class="$parent.swapNews ? 'order-4' : 'order-2'" class="bg-white py-5" aria-labelledby="dynamicallyGeneratedSectionId2">
      <div class="container">

        <h2 class="text-left display text-dark font-weight-bold display-4" id="dynamicallyGeneratedSectionId2">
          Featured Links
        </h2>

        <hr class="bg-dark mt-0 pt-1">

        <div class="row align-items-stretch justify-content-around">
          <div v-for="(link, i) in fLinks" class="col-md-6 col-lg-4 mb-4">
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
    <section :class="$parent.swapNews ? 'order-2' : 'order-4'" class="bg-white py-5">
      <div class="container">

        <h2 class="text-left display text-dark font-weight-bold display-4" id="dynamicallyGeneratedSectionId2">
          News &amp; Announcements
        </h2>

        <hr class="bg-dark mt-0 pt-1">

        <div class="row">
          <div class="col-lg-6">
            <div class="mb-3">
              <div is="HcCardNews" :sitecore-item="featured" class=""></div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="list-group">
              <a v-for="(item, i) in newsCards" href="#" class="p-3 list-group-item-action media border border-right-0 border-left-0">
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
          <div v-for="(item, i) in newsCards" class="col-md-6 col-lg-4 mb-3">
            <div is="HcCardNews" :sitecore-item="item" :hide-img="(i == 1 || i == 5)" class="v-card"></div>
          </div>
        </div>

        <p class="text-center my-3">
          <a href="#" class="btn btn-lg btn-primary">
            Visit the Newsroom
          </a>
        </p>

      </div>
    </section>

    <!--  -->
    <section class="bg-light py-5 order-12">
      <div class="container">

        <h2 class="text-left display text-dark font-weight-bold display-4" id="dynamicallyGeneratedSectionId2">
          Board of County Commissioners
        </h2>

        <hr class="bg-dark mt-0 pt-1">

        <!-- commissioners -->
        <div class="row align-items-top justify-content-around">
          <div v-for="commissioner in commissioners" class="col-6 col-sm-4 col-md-3 col-lg mt-2">
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
import posts from './posts'
import QuickLinks from '../partials/QuickLinks'

export default {
  mounted () {
    this.$parent.jumbo = true
    this.$parent.showFeedbackForm = false
    this.$parent.pageTitle = 'Hillsborough County'
  },
  computed: {
    gradients () {
      return ['info','warning','danger','success']
    }
  },
  components: { QuickLinks },
  data: () => ({
    fLinks: [
      { name: 'Adopt a Dog or Cat', icon: 'fas fa-paw' },
      { name: 'Visit the Pet Resource Center', icon: 'fas fa-building' },
      { name: 'Lost & Found Pets', icon: 'fas fa-search' },
      { name: 'Nuisance Animal Noise Ordinance', icon: 'fas fa-volume-up' },
      { name: 'Pet Adoption', icon: 'fas fa-paw' },
      { name: 'Pet Advocacy', icon: 'fas fa-heart' },
      { name: 'Pet Ownership', icon: 'fas fa-user' },
      { name: 'Report Animal Emergency or Cruelty', icon: 'fas fa-exclamation-triangle' },
      { name: 'Volunteer & Help Pet Resources', icon: 'fas fa-plus' },
    ],
    featured: posts[0],
    newsCards: posts.slice(1,5),
    commissioners: [
      {
        name: 'Sandra Murman',
        title: 'District 1',
        imgSrc: 'https://www.hillsboroughcounty.org/library/hillsborough/commissioners/murman-profile.jpg'
      },
      {
        name: 'Ken Hagan',
        title: 'District 2',
        imgSrc: 'https://www.hillsboroughcounty.org/library/hillsborough/commissioners/hagan-k-3.jpg'
      },
      {
        name: 'Lesley "Les" Miller, Jr.',
        title: 'District 3, Chairman',
        imgSrc: 'https://www.hillsboroughcounty.org/library/hillsborough/commissioners/miller-l-2/les-miller.jpg'
      },
      {
        name: 'Stacy White',
        title: 'District 4, Chaplain',
        imgSrc: 'https://www.hillsboroughcounty.org/library/hillsborough/commissioners/stacy-white-headshot.jpg'
      },
      {
        name: 'Mariella Smith',
        title: 'District 5, Countywide',
        imgSrc: 'https://www.hillsboroughcounty.org/library/hillsborough/media-center/images/commissioners/mariella-smith-web.jpg'
      },
      {
        name: 'Pat Kemp',
        title: 'District 6, Countywide, Vice Chair',
        imgSrc: 'https://www.hillsboroughcounty.org/library/hillsborough/commissioners/becknerk-3/pat-kemp-portrait.jpg'
      },
      {
        name: 'Kimberly Overman',
        title: 'District 7, Countywide',
        imgSrc: 'https://www.hillsboroughcounty.org/library/hillsborough/media-center/images/commissioners/overman-full-hcflgovnet.jpg'
      },
    ]
  })
}
</script>
