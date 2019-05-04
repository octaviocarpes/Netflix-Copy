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
      component: () => import("./views/Login.vue")
    },

    {
      path: "/profile",
      name: "profile",
      component: () => import("./views/Profile.vue")
    },

    {
      path: "/metrics",
      name: "metrics",
      component: () => import("./views/Metrics.vue")
    },

    {
      path: "/movies",
      name: "movies",
      component: () => import("./views/Movies.vue")
    },

    {
      path: "/player",
      name: "player",
      component: () => import("./views/Player.vue")
    },

    {
      path: "*",
      name: "error",
      component: () => import("./views/Error.vue")
    }
  ]
});
