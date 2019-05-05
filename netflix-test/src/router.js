import Vue from "vue";
import Router from "vue-router";
import StorageService from "@/storage";

Vue.use(Router);

const router = new Router({
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
      component: () => import("./views/profile/Profile.vue"),
      beforeEnter: (to, from, next) => {
        const user = StorageService.getUserSession();
        /* eslint-disable-next-line */
        if (!!user) next();
        else next("/");
      }
    },

    {
      path: "/metrics",
      name: "metrics",
      component: () => import("./views/metrics/Metrics.vue"),
      beforeEnter: (to, from, next) => {
        const user = StorageService.getUserSession();
        /* eslint-disable-next-line */
        if (!!user) next();
        else next("/");
      }
    },

    {
      path: "/movies",
      name: "movies",
      component: () => import("./views/movies/Movies.vue"),
      beforeEnter: (to, from, next) => {
        const user = StorageService.getUserSession();
        /* eslint-disable-next-line */
        if (!!user) next();
        else next("/");
      }
    },

    {
      path: "/player/:id",
      name: "player",
      component: () => import("./views/player/Player.vue"),
      beforeEnter: (to, from, next) => {
        const user = StorageService.getUserSession();
        /* eslint-disable-next-line */
        if (!!user) next();
        else next("/");
      }
    },

    {
      path: "*",
      name: "error",
      component: () => import("./views/error/Error.vue")
    }
  ]
});

export default router;
