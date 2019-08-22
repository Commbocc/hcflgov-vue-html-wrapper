<template lang="html">
  <div class="card">
    <div class="card-header border-0 font-weight-bold text-secondary d-flex justify-content-between pr-3">
      <div>
        <span aria-hidden="true" class="fa fa-filter"></span>
        {{ cardHeader }}
      </div>

      <div class="">
        <a @click.prevent="filters = !filters" href="#" class="text-dark ml-2"><span class="fa-fw far fa-list-alt"></span></a>
        <a @click.prevent="$refs.filterAcc.hideAll()" href="#" class="text-dark ml-2"><span class="fa-fw fas fa-chevron-circle-up"></span></a>
        <a @click.prevent="$refs.filterAcc.showAll()" href="#" class="text-dark ml-2"><span class="fa-fw fas fa-chevron-circle-down"></span></a>
      </div>
    </div>

    <ul v-show="filters" ref="filterAcc" is="hc-accordion" multiple flush class="small">
      <li is="hc-accordion-item">
        <span class="text-muted m-0" slot="header">Types</span>
        <div v-for="n in 5" class="form-check">
          <input class="form-check-input" type="checkbox" value="" :id="`defaultCheck${n}`">
          <label class="form-check-label" :for="`defaultCheck${n}`">
            Filter checkbox {{ n }}
          </label>
        </div>
      </li>
      <li is="hc-accordion-item">
        <span class="text-muted m-0" slot="header">Categories</span>
        <div v-for="n in 5" class="form-check">
          <input class="form-check-input" type="checkbox" value="" :id="`defaultCheck${n}`">
          <label class="form-check-label" :for="`defaultCheck${n}`">
            Filter checkbox {{ n }}
          </label>
        </div>
      </li>
      <li is="hc-accordion-item">
        <span class="text-muted m-0" slot="header">Keywords</span>
        <div v-for="n in 5" class="form-check">
          <input class="form-check-input" type="checkbox" value="" :id="`defaultCheck${n}`">
          <label class="form-check-label" :for="`defaultCheck${n}`">
            Filter checkbox {{ n }}
          </label>
        </div>
      </li>
      <li is="hc-accordion-item">
        <span class="text-muted m-0" slot="header">Sorting</span>

        <div v-for="n in 5" class="form-check">
          <input class="form-check-input" name="orderRadio" type="radio" value="" :id="`defaultRadio${n}`">
          <label class="form-check-label" :for="`defaultRadio${n}`">
            Sort radio {{ n }}
          </label>
        </div>

        <hr>

        <div class="form-check">
          <input class="form-check-input" name="sortRadio" type="radio" value="" id="sortAsc">
          <label class="form-check-label" for="sortAsc">
            Ascending
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" name="sortRadio" type="radio" value="" id="sortDesc">
          <label class="form-check-label" for="sortDesc">
            Descending
          </label>
        </div>

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    cardHeader: {
      type: String
    }
  },
  data: () => ({
    filters: true
  })
}
</script>
