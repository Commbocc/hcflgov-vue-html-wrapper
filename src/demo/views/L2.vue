<template>
  <main>
    <section class="py-5 gradient-diag-info text-white">
      <div class="container">
        <h1>Category</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum praesentium dolores, maiores iste obcaecati consectetur nihil placeat blanditiis minima. Pariatur error nisi aut fuga delectus quam eius, recusandae maiores distinctio.</p>
      </div>
    </section>

    <section class="py-5">
      <div class="container"></div>
    </section>
  </main>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  mounted() {
    this.showBanner()
    this.setPageTitle('A Category')
    this.showFeedbackForm()
  },

  methods: mapMutations(['setPageTitle', 'showFeedbackForm', 'showBanner'])
}
</script>