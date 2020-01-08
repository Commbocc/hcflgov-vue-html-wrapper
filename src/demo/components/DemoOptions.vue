<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="navbar-collapse" id="">

      <form class="form-inline mr-auto my-2 my-lg-0">
        <div class="mr-2">
          <select :value="$route.name" @change="$router.push({ name: $event.target.value })" class="form-control">
            <option v-for="view in routes" :value="view.name">{{ view.name }}</option>
          </select>
        </div>

        <div class="mr-2">
          <select :value="bannerGradient" @change="setBannerGradient" class="form-control">
            <option v-for="color in ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark']" :value="color">{{ color }}</option>
          </select>
        </div>

        <div v-if="$route.name == 'Home'" class="">
          <button type="button" @click="swapJumboStyle" class="btn btn-sm btn-light">Change jumbo style</button>
          <button type="button" @click="swapNews" class="btn btn-sm btn-light">Swap News &amp; Featured</button>
        </div>

      </form>

      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <a class="nav-link" href="https://commbocc.github.io/hcflgov-vue-html-wrapper/docs/">
            Documentation
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://github.com/Commbocc/hcflgov-vue-html-wrapper">
            <span class="fab fa-github" aria-label="GitHub"></span>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://npmjs.com/package/@hcflgov/vue-html-wrapper">
            <span class="fab fa-npm" aria-label="NPM"></span>
          </a>
        </li>
      </ul>

    </div>
  </nav>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex'
import { routes } from '../router'

export default {

  data: () => ({
    routes
  }),
    
  methods: mapMutations(['setBanner', 'setBannerGradient', 'swapJumboStyle', 'swapNews']),

  computed: {
    ...mapState(['bannerGradient'])
  }
}
</script>
