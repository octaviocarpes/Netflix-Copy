<template>
  <div class="movies-container">
    <Navbar />
    <div v-if="!!movies" class="movie-suggestion">
      <MovieSuggestion :movie="trailers ? trailers[0] : {}" />
    </div>
    <div v-if="!!movies" class="movies-collection">
      <h1>Trailers</h1>
      <ul>
        <li v-for="movie in trailers" :key="movie.id">
          <MovieThumbnail :movie="movie" />
        </li>
      </ul>

      <h1>Movies</h1>
      <ul>
        <li v-for="movie in movies" :key="movie.id">
          <MovieThumbnail :movie="movie" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/navbar/Navbar";
import MovieSuggestion from "@/components/movie-suggestion/MovieSuggestion";
import MovieThumbnail from "@/components/movie-thumbnail/MovieThumbnail";
import store from "@/store";

export default {
  name: "Movies",

  components: {
    Navbar,
    MovieSuggestion,
    MovieThumbnail
  },

  mounted() {
    store.dispatch("GET_MOVIES");
    store.dispatch("GET_TRAILERS");
  },

  computed: {
    movies() {
      return store.state.movies.movies;
    },

    trailers() {
      return store.state.movies.trailers;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
