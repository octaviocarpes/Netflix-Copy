<template>
  <div class="top-movies-chart-container">
    <canvas id="movies-chart"></canvas>
    <div>
      <h3>Most Viewed Movie:</h3>
      <p>{{ topMovie.movie.title }}</p>
    </div>
    <h3>Total Views: {{ totalViews }}</h3>
  </div>
</template>

<script>
import { MOVIES_METRICS } from "@/controllers/movies.metrics.controller";
import Chart from "chart.js";

export default {
  name: "MoviesChart",

  data() {
    return {
      moviesMetrics: null
    };
  },

  mounted() {
    this.moviesMetrics = MOVIES_METRICS.getMetrics();
    this.initChart();
  },

  computed: {
    totalViews() {
      return MOVIES_METRICS.getTotalViews();
    },

    topMovie() {
      return MOVIES_METRICS.getTopMovie();
    }
  },

  methods: {
    initChart() {
      const ctx = document.getElementById("movies-chart").getContext("2d");
      const chart = new Chart(ctx, {
        type: "doughnut",

        data: {
          labels: MOVIES_METRICS.getMoviesTitles(),
          datasets: [
            {
              label: "Top Movies",
              backgroundColor: this.generateColors(),
              borderColor: "rgb(255, 255, 255)",
              data: MOVIES_METRICS.getMoviesCount()
            }
          ]
        }
      });
    },

    generateColors() {
      return this.moviesMetrics.movies.map(movie => this.random_rgba());
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
