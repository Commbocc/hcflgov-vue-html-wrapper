<template lang="html">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="navbar-collapse" id="">

      <form class="form-inline mr-auto my-2 my-lg-0">
        <div class="mr-2">
          <select v-model="$parent.selected" class="form-control">
            <option v-for="view in $parent.views" :value="view">{{ view }}</option>
          </select>
        </div>

        <div class="mr-2">
          <select v-model="$parent.jumboGradient" class="form-control">
            <option v-for="color in ['primary', 'secondary', 'info', 'success', 'warning', 'danger', 'light', 'dark']" :value="color">{{ color }}</option>
          </select>
        </div>

        <div v-if="$parent.selected == 'Home'" class="">
          <button type="button" @click="$parent.jumboAlt = !$parent.jumboAlt" class="btn btn-sm btn-light">Change jumbo text</button>
          <button type="button" @click="$parent.swapNews = !$parent.swapNews" class="btn btn-sm btn-light">Swap News &amp; Featured</button>
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
export default {
}
</script>
