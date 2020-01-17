<template>
  <div>
    <h2 class="mt-0 text-left text-dark font-weight-bold display-4" v-text="text"></h2>
    <hr class="bg-dark mt-0 pt-1" />
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

