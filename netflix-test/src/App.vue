<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { METRICS_KEY } from "@/constants/keys";
import StorageService from "@/storage";
import Metrics from "@/storage/models/metrics.model";
const { metrics } = Metrics;

export default {
  mounted() {
    StorageService.registerMetrics(METRICS_KEY, metrics);
  }
};
</script>

<style lang="scss">
* {
  padding: 0px;
  margin: 0px;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: absolute;
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
