<template>
  <div class="row align-items-stretch">
    <div v-for="(link, i) in links" :key="i" class="col-md-6 col-lg-4 mb-4">
      <a is="hc-icon-btn" href="#" :icon="link.icon" stretch>{{ link.name }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ['links']
}
</script>