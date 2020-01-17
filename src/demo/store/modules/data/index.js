import axios from 'axios'

export default {
    state: {
        articles: [],
        posts: [],
        events: [],
        commissioners: []
    },
    mutations: {
        setArticles(state, data) {
            state.articles = data
        },
        setPosts(state, data) {
            state.posts = data
        },
        setEvents(state, data) {
            state.events = data
        },
        setCommissioners(state, data) {
            state.commissioners = data
        }
    },
    actions: {
        async fetchArticles({ commit }) {
            let { default: data } = await import('./articles')
            commit('setArticles', data)
        },
        async fetchPosts({ commit }, params) {
            let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts?${params}`)
            commit('setPosts', data)
        },
        async fetchEvents({ commit }) {
            let {
                data: {
                    result: events,
                    // locationFacets,
                    // success
                }
            } = await axios.get(`/apis/v1/events`)
            commit('setEvents', events)
        },
        async fetchCommissioners({ commit }) {
            let { default: data } = await import('./commissioners')
            commit('setCommissioners', data)
        }
    }
}