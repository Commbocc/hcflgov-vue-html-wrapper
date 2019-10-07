<template lang="html">
  <div class="row no-gutters align-items-stretch justify-content-center">
    <div v-for="(link, i) in qLinks" class="col-sm-6 col-lg-4 col-xl p-1">
      <a href="#" class="card v-card card-body list-group-item-action text-center d-flex flex-column h-100">

        <div class="mb-3">
          <span class="fa-3x fa-fw text-secondary" :class="link.icon"></span>
        </div>

        <div class="h5">
          {{ link.name }}
        </div>

        <div class="text-muted">
          <em>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </em>
        </div>

        <div v-if="i == 0 || i == 3" class="badge badge-primary text-white rounded px-2 position-absolute" style="right: 1rem;">
          <span class="fas fa-exclamation"></span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    qLinks: [
      { name: 'At Your Service', icon: 'far fa-handshake' },
      { name: 'Newsroom', icon: 'far fa-newspaper' },
      { name: 'Events', icon: 'far fa-calendar-alt' },
      { name: 'County Locations', icon: 'far fa-building' },
      { name: 'Jobs', icon: 'fas fa-briefcase' }
    ],
  })
}
</script>
