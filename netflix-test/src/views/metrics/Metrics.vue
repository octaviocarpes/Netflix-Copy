<template>
  <div class="metrics-container">
    <Navbar />
    <h1>Metrics</h1>
    <div class="metrics-content">
      <div class="top-users">
        <h1>Top Users</h1>
        <UsersChart />
      </div>
      <div class="top-movies">
        <h1>Top Movies</h1>
        <MoviesChart />
      </div>
      <div class="application-access">
        <h1>Application Access</h1>
        <AccessChart />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";
import MoviesChart from "@/components/charts/top-movies-chart/MoviesChart.vue";
import UsersChart from "@/components/charts/top-users-chart/UsersChart.vue";
import AccessChart from "@/components/charts/access-chart/AccessChart.vue";

export default {
  name: "Metrics",

  components: {
    Navbar,
    MoviesChart,
    UsersChart,
    AccessChart
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
