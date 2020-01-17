<template>
  <div class="row align-items-top justify-content-around">
    <div
      v-for="(commissioner, i) in commissioners"
      :key="i"
      class="col-6 col-sm-4 col-md-3 col-lg mt-2"
    >
      <a href="#" :title="commissioner.name" class="text-dark text-decoration-none">
        <div
          class="embed-responsive embed-responsive-1by1 rounded-circle v-card"
          :style="`background-image: url(${commissioner.imgSrc}); background-size: cover;`"
        ></div>
        <div class="text-center small mt-1">
          <strong class="h6 d-block mb-0">{{ commissioner.name }}</strong>
          <span class="text-muted">{{ commissioner.title }}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['commissioners']
}
</script>