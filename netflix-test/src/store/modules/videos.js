import VideoService from "../../services/videos.service";

export default {
  state: {
    videos: []
  },

  mutations: {
    SET_VIDEOS: (state, videos) => {
      state.videos = videos;
    }
  },

  actions: {
    GET_VIDEOS: async ({ commit }) => {
      commit("SET_VIDEOS", await VideoService.getVideos());
    }
  }
};
