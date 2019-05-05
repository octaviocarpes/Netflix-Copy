export default {
  state: {
    user: {}
  },

  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
    }
  },

  actions: {
    PERFORM_LOGIN: ({ commit }, payload) => {
      commit("SET_USER", payload);
    },

    LOGOUT: ({ commit }) => commit("SET_USER", null)
  }
};
