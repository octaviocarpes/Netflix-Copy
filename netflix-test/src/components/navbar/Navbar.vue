<template>
  <nav>
    <div class="nav-bar-container">
      <div class="nav-bar-content-left">
        <div class="header-logo"><h1>NIETFLIX</h1></div>
        <div class="links">
          <ul>
            <li id="movies-link"><router-link to="movies">Movies</router-link></li>
            <li id="profile-link"><router-link to="profile">Profile</router-link></li>
            <li id="metrics-link"><router-link to="metrics">Metrics</router-link></li>
          </ul>
        </div>
      </div>
      <div class="nav-bar-content-right">
        <div class="user">
          <img
            :src="require('../../assets/img/profile-icon.jpg')"
            alt="profile icon"
          />
          <p>{{ user.username }}</p>
        </div>
        <p @click="logout">Logout</p>
      </div>
    </div>
  </nav>
</template>

<script>
import store from "@/store";
import Storage from "@/storage";

export default {
  name: "Navbar",

  methods: {
    logout() {
      store.dispatch("LOGOUT");
      Storage.endUserSession();
      this.$router.push("/");
    }
  },

  computed: {
    user() {
      return store.state.auth.user;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
