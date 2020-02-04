<template>
  <main>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <!-- map -->
          <div class="col-md-5 order-md-12">
            <div class="embed-responsive embed-responsive-4by3 mb-3">
              <iframe
                class="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3520.380889547893!2d-82.3776239849299!3d28.073922382641392!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2c8048c8d1f95%3A0x60a653c5323521a1!2sLettuce+Lake+Park!5e0!3m2!1sen!2sus!4v1464279654670"
                frameborder="0"
                style="border:0"
                allowfullscreen
              ></iframe>
            </div>
          </div>

          <!-- location -->
          <div class="col-md-7 order-md-1">
            <h2 class="text-left text-dark font-weight-bold">Location and Hours</h2>
            <hr class="bg-dark mt-0 pt-1" />

            <!-- description list -->
            <dl class="row">
              <dt class="col-sm-3 text-truncate">Address</dt>
              <dd class="col-sm-9">
                6920 East Fletcher Avenue
                <br />Tampa, FL 33637
              </dd>
              <dt class="col-sm-3 text-truncate">Hours</dt>
              <dd class="col-sm-9">
                Spring/Summer: 8 AM to 7 PM
                <br />Fall/Winter: 8 AM to 6 PM
              </dd>
              <dt class="col-sm-3 text-truncate">Contact</dt>
              <dd class="col-sm-9">(813) 987-6204</dd>
              <dt class="col-sm-3 text-truncate">Entrance Fee</dt>
              <dd class="col-sm-9">$2 per vehicle. Up to 8 people per vehicle. Rentals are extra.</dd>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <!-- parallax -->
    <div
      id="location-image-gallery-parallax"
      is="hc-parallax"
      :gradient="bannerGradient"
      src="https://www.hillsboroughcounty.org/library/hillsborough/locations/lettuce-lake-conservation-park/lettucelake4.jpg"
      class="text-center text-shadow v-card"
    >
      <div class>
        <h2 class="font-weight-bold display-4">Image Gallery</h2>
        <p class="lead px-5">View all of the fun things to do at {{ pageTitle }}.</p>
        <a href="#" class="btn btn-lg btn-outline-light">View the Gallery</a>
      </div>
    </div>

    <section class="py-5">
      <div class="container">
        <h2 class="text-left text-dark font-weight-bold">About {{ pageTitle }}</h2>
        <hr class="bg-dark mt-0 pt-1" />

        <div class="row">
          <div class="col-md-8">
            <p>Lettuce Lake Conservation Park is one of Hillsborough County's most visited parks. More than half of the park’s property lies in the natural floodplain of the Hillsborough River, consisting of a hardwood swamp forest. The remainder of the park consists of hardwood hammocks and pine flatwoods plant communities.</p>
            <p>The park features wooded picnic areas and playgrounds, a 1.25-mile paved exercise trail and 3,500-foot boardwalk with an observation tower provides scenic views of the Hillsborough River. Park ranger and volunteer-led nature education tours are available on weekends. Canoe and kayaks rentals provide up-close encounters with a variety of aquatic birds and wildlife.</p>
          </div>
          <div class="col-md-4">
            <!-- amenities -->
            <div class="mb-3" aria-describedby="amenitites-heading">
              <p class="sr-only" id="amenitites-heading">Amenities</p>
              <a href="#" class="badge badge-info m-1 text-white">Barbecue Grills</a>
              <a href="#" class="badge badge-info m-1 text-white">Bird Watching</a>
              <a href="#" class="badge badge-info m-1 text-white">Boardwalk</a>
              <a href="#" class="badge badge-info m-1 text-white">Boat Dock</a>
              <a href="#" class="badge badge-info m-1 text-white">Canoe Rentals</a>
              <a href="#" class="badge badge-info m-1 text-white">Hiking Trail</a>
              <a href="#" class="badge badge-info m-1 text-white">Picnic Shelters</a>
              <a href="#" class="badge badge-info m-1 text-white">Playground</a>
              <a href="#" class="badge badge-info m-1 text-white">Restrooms</a>
              <a href="#" class="badge badge-info m-1 text-white">Visitors Center</a>
            </div>
            <!-- custom content -->
            <div class="card">
              <img
                src="https://www.hillsboroughcounty.org/library/hillsborough/media-center/images/hiking-spree/pr_hiking-spree-2019_online-image.jpg"
                alt
                class="card-img-top"
              />
              <ul is="hc-accordion" flush>
                <li is="hc-accordion-item">
                  <span slot="header">Official Hiking Spree Location</span>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non architecto nihil esse, mollitia totam pariatur ea vero tempora fuga. Veniam quisquam iusto quod nulla rem quos fugit laudantium, possimus suscipit.</p>
                  <a href="#" class="btn btn-primary btn-block">Learn More about the Hiking Spree</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import storeMixin from '@/demo/store/mixins'

export default {
  mixins: [storeMixin],

  mounted() {
    this.setPageTitle('Lettuce Lake Park')
    this.setBannerImage(
      'https://www.hillsboroughcounty.org/library/hillsborough/locations/lettuce-lake-conservation-park/lettucelakebanner.jpg'
    )
    this.setBannerGradient('success')
  },

  components: {}
}
</script>