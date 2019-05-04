import Vue from "vue";
import Vuex from "vuex";

import loader from "./modules/loader";
import movies from "./modules/movies";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loader,
    movies,
    auth
  }
});
