<template lang="html">
  <nav v-if="hasPaging" aria-label="Pagination">
    <ul class="pagination justify-content-center flex-wrap">

      <li v-if="paging.current != 1" class="page-item">
        <a class="page-link m-1" :href="`/#/?page=${1}`" title="First">&#171;</a>
      </li>

      <li v-if="paging.previous" class="page-item">
        <a class="page-link m-1" :href="`/#/?page=${paging.previous}`" title="Previous">&#8249;</a>
      </li>

      <li v-for="page in paging.pages" :key="page" v-if="inRange(page)" class="page-item" :class="(page == paging.current) ? `disabled` : null">
        <a class="page-link m-1" :href="`/#/?page=${page}`">{{ page }}</a>
      </li>

      <li v-if="paging.next" class="page-item">
        <a class="page-link m-1" :href="`/#/?page=${paging.next}`" title="Next">&#8250;</a>
      </li>

      <li v-if="paging.current != paging.pages" class="page-item">
        <a class="page-link m-1" :href="`/#/?page=${paging.pages}`" title="Last">&#187;</a>
      </li>

    </ul>

    <!-- <pre>{{ paging }}</pre> -->
  </nav>
</template>

<script>
export default {
  name: 'hc-pagination',
  props: {
    /**
    * The paging object
    */
    paging: {
      type: Object,
      required: true
    }
  },
  methods: {
    inRange (page) {
      let min = this.paging.current - 3
      let max = this.paging.current + 3
      return (page >= min && page <= max) ? true : false
    }
  },
  computed: {
    hasPaging () {
      return (this.paging && this.paging.pages > 1)
    }
  }
}
</script>
