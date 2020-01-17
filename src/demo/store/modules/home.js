export default {
    state: {
        jumboAlt: true,
        swapNews: false,
    },
    mutations: {

        swapJumboStyle(state) {
            state.jumboAlt = !state.jumboAlt
        },
        swapNews(state) {
            state.swapNews = !state.swapNews
        },

    },
}