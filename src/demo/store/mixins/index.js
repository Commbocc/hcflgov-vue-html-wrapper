/**
 * @mixin
 */
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    computed: mapState([
        'demoBar',
        'pageTitle',
        'alert',
        'banner',
        'feedbackForm',
        'bannerImage',
        'bannerGradient',
    ]),

    methods: {
        ...mapMutations([
            'toggleDemoBar',
            'setPageTitle',
            'showBanner',
            'showFeedbackForm',
            'setBannerImage',
            'setBannerGradient'
        ]),
        ...mapActions([
            'fetchArticles',
            'fetchPosts',
            'fetchEvents',
            'fetchCommissioners',
            'fetchLocations'
        ])
    },

    beforeMount() {
        this.setPageTitle()
        this.showBanner()
        this.showFeedbackForm()
        this.setBannerImage()
        this.setBannerGradient()
    },
}