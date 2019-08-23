/**
 * @mixin
 */

export default {
  props: {
    /**
    * The Bootstrap color class of the gradient<br>
    * `primary, dark, light, info, success, warning, danger`
    */
    gradient: {
      type: String,
      default: 'primary'
    }
  },
  computed: {
    gradientClass () {
      return `gradient-diag-${this.gradient}`
    }
  }
}
