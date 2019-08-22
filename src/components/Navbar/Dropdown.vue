<template lang="html">
  <div class="dropdown-menu" :class="(isWantTo) ? 'p-0' : null">

    <div v-if="isWantTo" class="">

      <div class="row no-gutters">
        <a v-for="child in link.Children" :href="xLink(child)" class="col-md list-group-item-secondary list-group-item-action p-2 p-md-5 text-dark d-flex align-items-center">

          <span class="fa fa-newspaper display-4 fa-2x fa-fw mr-3"></span>

          <div class="">
            <span class="h3 mb-0 font-weight-bold d-block">
              {{ child.Name }}
            </span>
            <small class="d-block">
              {{ child.Description }}
            </small>
          </div>
        </a>
      </div>

    </div>

    <template v-else>
      <h4 class="d-none d-lg-block text-info font-weight-bold">{{ link.Name }}</h4>

      <div class="dropdown-menu-2-col">
        <a v-for="child in link.Children" class="dropdown-item" :href="xLink(child)" :target="linkTargets">
          {{ child.Name }}
        </a>
      </div>
    </template>

  </div>
</template>

<script>
import Links from '../../mixins/links'

export default {
  props: ['link'],
  mixins: [Links],
  computed: {
    isWantTo () {
      return (this.link.Guid == 'acce922f-9f4a-4ee1-abe5-7370ce8785f3') ? true : false
    }
  }
}
</script>
