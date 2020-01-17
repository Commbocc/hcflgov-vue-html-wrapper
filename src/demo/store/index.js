import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'

// modules
import * as modules from './modules'

// data
import featuredLinks from './modules/data/featured-links'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules,
    state: {
        demoBar: false,
        pageTitle: 'Hillsborough County',
        alert: false,
        banner: true,
        bannerImage: 'https://commbocc.github.io/hc-templates-jekyll/assets/images/JoeChilluraPark.jpg',
        bannerGradient: 'primary',
        feedbackForm: true
    },
    mutations: {
        toggleDemoBar(state) {
            state.demoBar = !state.demoBar
        },
        setPageTitle(state, data = 'Hillsborough County') {
            document.title = data
            state.pageTitle = data
        },
        showBanner(state, data = true) {
            state.banner = data
        },
        showFeedbackForm(state, data = true) {
            state.feedbackForm = data
        },
        setBannerImage(state, data = 'https://commbocc.github.io/hc-templates-jekyll/assets/images/JoeChilluraPark.jpg') {
            state.bannerImage = data
        },
        setBannerGradient(state, data = 'primary') {
            state.bannerGradient = data
        },
    },
    getters: {
        featuredLinks: () => featuredLinks,
        gradients: () => ['primary', 'info', 'warning', 'danger', 'success']
    }
})

export default store 