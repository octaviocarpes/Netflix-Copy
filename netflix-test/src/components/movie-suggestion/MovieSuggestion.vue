<template>
  <div v-if="movie" class="movie-suggestion-container">
    <iframe
      :src="movieURL"
      frameborder="0"
      width="100%"
      height="100%"
      allowfullscreen
    ></iframe>
    <h2 class="movie-title" @click="goToPlayer()">{{ movie.title }}</h2>
  </div>
</template>

<script>
import MetricService from "@/services/metrics.service";

export default {
  name: "MovieSuggestion",

  props: {
    movie: {
      required: true
    }
  },

  computed: {
    movieURL() {
      return `https://www.youtube.com/embed/${this.movie.id}?autoplay=1`;
    }
  },

  methods: {
    goToPlayer() {
      this.executeMetrics();
      this.$router.push(`/player/${this.movie.id}`);
    },

    executeMetrics() {
      MetricService.addUserMoviesMetric(this.movie);
      MetricService.addMovieMetric(this.movie);
      MetricService.setTopMovie();
    }
  }
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
