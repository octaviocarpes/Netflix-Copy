<template>
  <div v-if="!!movie" class="movie-thumbnail-container">
    <img :src="movieThumbnail" alt="Movie Thumbnail" />
    <h4>{{ movieTitle }}</h4>
  </div>
</template>

<script>
import _ from "lodash";
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
  }
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
