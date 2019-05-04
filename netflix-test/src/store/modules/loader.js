export default {
  state: {
    loading: false
  },

  mutations: {
    SET_LOADING: (state, loading) => (state.loading = loading)
  },

  actions: {
    SET_LOADER: ({ commit }, loading) => commit("SET_LOADING", loading)
  }
};
