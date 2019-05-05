<template>
  <div class="profile-container">
    <Navbar />
    <h1>Profiles</h1>
    <div class="profiles">
      <ul>
        <li v-for="user in profiles" :key="user.id" @click="loginUser(user)">
          <div class="profile">
            <img
              :src="require('../../assets/img/profile-icon.jpg')"
              alt="logo"
              :class="[user.id == sessionUser.id ? 'active' : 'inactive']"
            />
            <p>{{ user.username }}</p>
          </div>
        </li>
      </ul>
      <div v-if="!!moviesWatched" class="last-movies-watched">
        <h1>Last movies watched</h1>
        <ul>
          <li v-for="movie in moviesWatched" :key="movie.id">
            <MovieThumbnail :movie="movie" />
          </li>
        </ul>
      </div>
      <div v-if="!moviesWatched" class="no-movies-watched">
        <h1>This user has not watched any movies yet.</h1>
      </div>
    </div>
  </div>
</template>

<script>
import _ from "lodash";
import store from "@/store";
import Navbar from "@/components/navbar/Navbar";
import Storage from "@/storage";
import MovieThumbnail from "@/components/movie-thumbnail/MovieThumbnail";

export default {
  name: "Profile",

  components: {
    Navbar,
    MovieThumbnail
  },

  computed: {
    profiles() {
      return Storage.getUsers();
    },

    sessionUser() {
      return store.state.auth.user;
    },

    moviesWatched() {
      const metrics = this.getUserMetrics();
      if (metrics) {
        if (metrics.movies.length >= 5)
          return _.reverse(metrics.movies.map(movie => movie.movie)).slice(
            0,
            5
          );
        else
          return metrics.movies.length
            ? _.reverse(metrics.movies.map(movie => movie.movie))
            : null;
      }
      return false;
    }
  },

  methods: {
    loginUser(user) {
      Storage.endUserSession();
      Storage.saveUserSession(user);
      store.dispatch("PERFORM_LOGIN", user);
    },

    getUserMetrics() {
      const storage = Storage.getStorage();
      const user = store.state.auth.user;
      const usersMetrics = _.get(storage, "METRICS.USER_METRICS.users", null);
      if (usersMetrics.length) {
        return _.find(usersMetrics, metric => {
          return metric.user.id == user.id;
        });
      } else return { movies: [] };
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
