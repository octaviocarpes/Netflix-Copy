import MoviesService from "../../services/movies.service";
import store from "@/store";

export default {
  state: {
    trailers: [],
    movies: []
  },

  mutations: {
    SET_TRAILERS: (state, trailers) => {
      state.trailers = trailers;
      store.dispatch("SET_LOADER", false);
    },

    SET_MOVIES: (state, movies) => {
      state.movies = movies;
      store.dispatch("SET_LOADER", false);
    }
  },

  actions: {
    GET_MOVIES: async ({ commit }) => {
      store.dispatch("SET_LOADER", true);
      commit("SET_MOVIES", await MoviesService.getMovies());
    },

    GET_TRAILERS: async ({ commit }) => {
      store.dispatch("SET_LOADER", true);
      commit("SET_TRAILERS", await MoviesService.getTrailers());
    }
  }
};
