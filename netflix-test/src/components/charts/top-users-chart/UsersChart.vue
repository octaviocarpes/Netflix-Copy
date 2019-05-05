<template>
  <div class="top-users-chart-container">
    <canvas id="users-chart"></canvas>
    <div>
      <h3>Top User:</h3>
      <p>{{ topUser.user.username }}</p>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import { USERS_METRICS } from "@/controllers/users.metrics.controller";

export default {
  name: "UsersChart",

  data() {
    return {
      usersMetrics: null
    };
  },

  mounted() {
    this.usersMetrics = USERS_METRICS.getMetrics();
    this.initChart();
  },

  computed: {
    topUser() {
      return USERS_METRICS.getTopUser();
    }
  },

  methods: {
    initChart() {
      const ctx = document.getElementById("users-chart").getContext("2d");
      const chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: USERS_METRICS.getUsersNames(),
          datasets: [
            {
              label: "Views per User",
              backgroundColor: this.generateColors(),
              borderColor: "rgb(255, 255, 255)",
              data: USERS_METRICS.getUsersCount(),
              borderWidth: 1
            }
          ]
        },
        options: {
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ],
            xAxes: [
              {
                barThickness: 50
              }
            ]
          }
        }
      });
    },

    generateColors() {
      return this.usersMetrics.users.map(user => this.random_rgba());
    },

    random_rgba() {
      let o = Math.round,
        r = Math.random,
        s = 255;
      return `rgba(${o(r() * s)}, ${o(r() * s)}, ${o(r() * s)}, 1)`;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
