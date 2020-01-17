export default {
    state: {
        showVideo: true,
    },
    mutations: {

        toggleNewsArticleVideo(state) {
            state.showVideo = !state.showVideo
        },

    },
}