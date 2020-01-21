<template>
  <div v-if="locations">
    <ul v-if="locations.collection" class="list-unstyled px-md-5 mx-md-5">
      <li
        v-for="place in locations.collection"
        :key="place.guid"
        :ref="`place-${place.guid}`"
        v-in-view
        @in-view="$emit('show-in-map', place)"
        class="mb-5 card card-body vh-75"
      >
        <h3>
          <a :href="place.url" class="text-secondary">{{ place.name }}</a>
        </h3>

        <p class="font-italic text-muted small">{{ place.address }}</p>

        <a href="#" class="small d-sm-none" @click.prevent="$emit('show-in-map', place, true)">Show in Map</a>

        <div class="p-3 p-md-5">
          <div class="embed-responsive embed-responsive-1by1 bg-info">
            <img :src="place.imgSrc" alt class="embed-responsive-item img-fluid" />
          </div>
        </div>

        <div class="small">
          <p
            v-for="i in 1"
            :key="i"
          >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur expedita praesentium voluptas dolor placeat numquam voluptate consequuntur amet officiis? Laudantium, blanditiis quam similique id ullam assumenda culpa veniam facere molestias.</p>
        </div>
      </li>
    </ul>

    <HcPagination :paging="locations.pagination" />
  </div>
</template>

<script>
import VueInView from './VueInView'

export default {
  mixins: [VueInView.mixin],

  props: ['locations'],

  methods: {
    scrollTo(place) {
      this.$refs[`place-${place.guid}`][0].scrollIntoView({
        // behavior: 'smooth'
      })
    }
  }
}
</script>