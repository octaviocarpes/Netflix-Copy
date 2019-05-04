<template>
  <div v-if="movie" class="movie-suggestion-container">
    <iframe
      :src="movieURL"
      frameborder="0"
      width="100%"
      height="100%"
      allowfullscreen
    ></iframe>
    <h2 class="title" @click="goToPlayer()">{{ movie.title }}</h2>
  </div>
</template>

<script>
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
      this.$router.push(`/player/${this.movie.id}`);
    }
  }
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
