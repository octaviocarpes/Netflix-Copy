<template>
  <div class="access-chart-container">
    <canvas id="access-chart"></canvas>
    <div class="access-data">
      <h2>Logins:</h2><h3>{{ logins }}</h3>
    </div>
    <div class="access-data">
      <h2>Registers:</h2><h3>{{ registers }}</h3>
    </div>
  </div>
</template>

<script>
import Chart from "chart.js";
import { ACCESS_METRICS } from "@/controllers/access.metrics.controller";

export default {
  name: "AccessChart",

  mounted() {
    this.initChart();
  },

  methods: {
    initChart() {
      const ctx = document.getElementById("access-chart").getContext("2d");
      const chart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Logins", "Registers"],
          datasets: [
            {
              label: "Access Data",
              backgroundColor: this.generateColors(),
              borderColor: "rgb(255, 255, 255)",
              data: [ACCESS_METRICS.getLogins(), ACCESS_METRICS.getRegisters()],
            }
          ]
        }
      });
    },

    generateColors() {
      return [this.random_rgba(), this.random_rgba()]
    },

    random_rgba() {
      let o = Math.round,
        r = Math.random,
        s = 255;
      return `rgba(${o(r() * s)}, ${o(r() * s)}, ${o(r() * s)}, 1)`;
    }
  },

  computed: {
    logins() {
      return ACCESS_METRICS.getLogins();
    },

    registers() {
      return ACCESS_METRICS.getRegisters();
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./style";
</style>
