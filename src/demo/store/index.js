import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

// modules
import * as modules from './modules'

// data
import commissioners from './data/commissioners'
import posts from './data/posts'
import featuredLinks from './data/featured-links'

Vue.use(Vuex)

const store = new Vuex.Store({
    modules,
    state: {
        showDemoBar: false,
        showAlert: false,
        showBanner: true,
        bannerGradient: 'primary',
        pageTitle: 'Hillsborough County',
        showFeedbackForm: true
    },
    mutations: {
        toggleDemoBar(state) {
            state.showDemoBar = !state.showDemoBar
        },
        setPageTitle(state, data = 'Hillsborough County') {
            state.pageTitle = data
        },
        showBanner(state, data = true) {
            state.showBanner = data
        },
        showFeedbackForm(state, data = true) {
            state.showFeedbackForm = data
        },
        setBannerGradient(state, event) {
            state.bannerGradient = event.target.value
        },
    },
    getters: {
        commissioners: () => commissioners,
        posts: () => posts,
        featuredLinks: () => featuredLinks,
        gradients: () => ['primary', 'info', 'warning', 'danger', 'success']
    },
    actions: {
        async fetchPosts (context, url) {
            let { data } = await axios.get(url)
            return data
        }
    }
})

export default store 