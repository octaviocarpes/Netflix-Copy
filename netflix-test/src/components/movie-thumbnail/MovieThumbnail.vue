<template>
  <div v-if="!!movie" class="movie-thumbnail-container" @click="goToPlayer()">
    <img :src="movieThumbnail" alt="Movie Thumbnail" />
    <h4>{{ movieTitle }}</h4>
  </div>
</template>

<script>
import _ from "lodash";
import MetricService from "@/services/metrics.service";
export default {
  name: "MovieThubmnail",

  props: {
    movie: {
      required: true
    }
  },

  computed: {
    movieThumbnail() {
      return _.get(this.movie, "thumbnails.medium.url", "");
    },

    movieTitle() {
      return _.get(this.movie, "title", "Movie Title");
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
