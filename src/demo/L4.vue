<template lang="html">
  <main class="py-4" :aria-labelledby="`levelFour${_uid}`">
    <div class="container">

      <div class="row">
        <div class="col-md-8">
          <!-- article content -->

          <div is="L4InspectionCodes" class="rte"></div>

        </div>

        <div class="col-md-4">

          <div class="card card-body bg-light mb-3">
            <ul class="small m-0">
              <li v-for="n in 4">
                <a href="#">Document {{ n }}</a>
              </li>
            </ul>
          </div>

          <a href="#" class="btn btn-outline-secondary btn-block py-4 mb-3" target="_blank">
            <span aria-hidden="true" class="fa-fw fa-2x far fa-file-alt"></span>
            An Accompanying Document
          </a>

          <a href="#" is="hc-icon-btn" icon="fas fa-paw">Pet Resource Center</a>

        </div>
      </div>

    </div>
  </main>
</template>

<script>
import L4Adopt from './L4/Adopt'
import L4InspectionCodes from './L4/InspectionCodes'

export default {
  components: {
    L4Adopt,
    L4InspectionCodes
  },
  mounted () {
    this.$parent.jumbo = false
    this.$parent.showFeedbackForm = true
    this.$parent.pageTitle = 'Adopt a Dog or Cat'
  }
}
</script>
