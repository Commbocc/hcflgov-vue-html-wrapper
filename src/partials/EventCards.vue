<template lang="html">
  <div class="row">

    <div v-for="n in 4" :key="n" class="col-md-6">

      <div class="card card-body mt-4">
        <div class="row justify-content-center">
          <div class="col-8 col-sm-4">
            <img :src="`https://picsum.photos/seed/${n}/800`" alt="" class="img-fluid mb-3">
          </div>
          <div class="col-sm-8">
            <h5 class="mt-0">Media heading</h5>
            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </div>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
export default {
}
</script>
