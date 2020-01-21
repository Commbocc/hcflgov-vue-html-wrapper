<template lang="html">
  <div v-if="place" class="text-center">
    <a :href="place.url" class="d-block font-weight-bold">{{ place.name }}</a>

    <div class="d-flex justify-content-between mt-3">
      <a href="#" class="list-group-item-action text-primary mx-3">
        <span class="fa-fw fas fa-link"></span>
      </a>
      <a href="#" class="list-group-item-action text-primary mx-3">
        <span class="fa-fw fas fa-directions"></span>
      </a>
      <a href="#" class="list-group-item-action text-primary mx-3">
        <span class="fa-fw fab fa-facebook"></span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  // data: () => ({
  //   place: null
  // })
  props: ['place']
  // computed: {
  //   place() {
  //     return this.$HcLocations.activePlace
  //   }
  // }
}
</script>
