import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "login",
      component: () => import("./views/login/Login.vue")
    },

    {
      path: "/profile",
      name: "profile",
      component: () => import("./views/profile/Profile.vue")
    },

    {
      path: "/metrics",
      name: "metrics",
      component: () => import("./views/metrics/Metrics.vue")
    },

    {
      path: "/movies",
      name: "movies",
      component: () => import("./views/movies/Movies.vue")
    },

    {
      path: "/player",
      name: "player",
      component: () => import("./views/player/Player.vue")
    },

    {
      path: "*",
      name: "error",
      component: () => import("./views/error/Error.vue")
    }
  ]
});
