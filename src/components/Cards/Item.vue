<template>
  <div class="card">
    <span v-if="hideImg" class="gradient-diag-info pt-1"></span>

    <div :class="flexClass">
      <!-- img -->
      <div :class="[imgColClass, imgFlexOrder]">
        <a v-if="!hideImg" :href="url" class="card-img-top d-flex flex-column justify-content-end">
          <div class="gradient-diag-info position-absolute px-2 text-white small text-truncate">
            <span :class="icon" aria-hidden="true"></span>
            {{ category }}
          </div>
          <img :src="imgSrc" alt class="img-fluid" />
        </a>
      </div>
      <div class="bg-info flex-fill order-2">content</div>
    </div>

    <div class="card-body">
      <h4 class="text-secondary">{{ heading }}</h4>

      <div class="lead font-italic small">{{ subHeading }}</div>

      <div class>{{ excerpt }}</div>

      <span
        class="text-muted small"
      >Posted {{ new Date(publishDate).toLocaleString() }} in {{ category }}</span>
    </div>

    <a :href="url" class="card-footer text-right bg-white border-0">Read More &raquo;</a>
  </div>
</template>

<script>
import SitecoreContentItemMixin from '../../mixins/Sitecore/ContentItem'

export default {
  mixins: [SitecoreContentItemMixin],

  props: {
    left: { type: Boolean },
    right: { type: Boolean },
    hideImg: { type: Boolean }
  },

  computed: {
    flexClass() {
      return this.left || this.right ? 'd-flex' : 'flex-column'
    },
    imgColClass() {
      return this.left || this.right ? 'col-sm-3 p-0' : null
    },
    imgFlexOrder() {
      return this.right ? 'order-12' : 'order-1'
    }
  }
}
</script>