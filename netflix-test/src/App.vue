<template>
  <div id="app">
    <Loader />
    <router-view />
  </div>
</template>

<script>
import store from "@/store";
import Loader from "@/components/loader/Loader";
import StorageService from "@/storage";

export default {
  components: {
    Loader
  },

  mounted() {
    if (!StorageService.getStorage()) StorageService.initiateStorage();

    const user = StorageService.getUserSession();
    if (user) store.dispatch("PERFORM_LOGIN", user);
  }
};
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}

html,
body {
  position: absolute;
  background-color: black;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  height: 100%;
  width: 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
