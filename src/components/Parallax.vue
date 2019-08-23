<template lang="html">
  <v-parallax dark :src="src" :height="height">
    <div class="d-flex align-items-center h-100" :class="gradientClass">
      <div class="container">
        <!-- @slot The content within the parallax element-->
        <slot></slot>
      </div>
    </div>
  </v-parallax>
</template>

<script>
import VParallax from 'vuetify/lib/components/VParallax'
import GradientMixin from '../mixins/gradient'

export default {
  name: 'hc-parallax',
  components: { VParallax },
  mixins: [GradientMixin],
  props: {
    /**
    * The image source of the background image
    */
    src: {
      type: String,
      default: 'https://commbocc.github.io/hc-templates-jekyll/assets/images/JoeChilluraPark.jpg'
    },
    /**
    * The height of the element in pixels
    */
    height: {
      type: Number,
      default: 350
    }
  }
}
</script>

<style lang="scss">
.v-parallax__content {
  padding: 0;
}
</style>
