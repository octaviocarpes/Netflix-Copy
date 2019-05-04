<template>
  <nav>
    <div class="nav-bar-container">
      <div class="nav-bar-content-left">
        <div class="header-logo"><h1>NIETFLIX</h1></div>
        <div class="links">
          <ul>
            <li><router-link to="movies">Movies</router-link></li>
            <li><router-link to="profile">Profile</router-link></li>
            <li><router-link to="metrics">Metrics</router-link></li>
          </ul>
        </div>
      </div>
      <div class="nav-bar-content-right"><p>Logout</p></div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar"
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
