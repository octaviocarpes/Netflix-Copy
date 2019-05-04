import Vue from "vue";
import Vuex from "vuex";

import videos from "./modules/videos";
import auth from "./modules/auth";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    videos,
    auth
  }
});
