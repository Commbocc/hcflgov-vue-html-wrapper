<template lang="html">
  <div class="dropdown-menu" :class="(isWantTo) ? 'p-0' : null">

    <!-- i want to -->
    <div v-if="isWantTo" id="navbar-dropdown-i-want-to" class="">
      <div class="container-fluid">
        <div class="row no-gutters justify-content-center">
          <a v-for="(child, i) in link.Children" :href="xLink(child)" :key="i" class="col-lg list-group-item border-left-0 border-right-0 list-group-item-action p-2 p-lg-3 p-xl-4 d-flex align-items-center">

            <i :class="wantToIcons[i]" class="fa-2x fa-fw text-primary mr-3"></i>

            <div class="">
              <span class="h4 mb-0 font-weight-bold d-block">
                {{ child.Name }}
              </span>
              <small class="d-block">
                {{ child.Description }}
              </small>
            </div>

          </a>
        </div>
      </div>
    </div>

    <!-- default -->
    <template v-else>
      <h4 class="d-none d-lg-block text-info font-weight-bold">{{ link.Name }}</h4>

      <div class="dropdown-menu-2-col">
        <a v-for="(child, i) in link.Children" :key="i" class="dropdown-item" :href="xLink(child)" :target="linkTargets">
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
    },
    wantToIcons () {
      return [
        'far fa-clipboard',
        'fas fa-user-plus',
        'fas fa-bullhorn',
        'fas fa-concierge-bell',
        'fas fa-dollar-sign',
      ]
    }
  }
}
</script>
