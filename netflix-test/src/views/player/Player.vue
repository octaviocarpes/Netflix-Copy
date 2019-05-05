<template>
  <div class="player-container">
    <div class="back-to-movies" @click="goToMovies()">
      <img :src="require('../../assets/img/back-arrow.svg')" alt="back icon" />
      <p>Back to Movies</p>
    </div>
    <iframe
      :src="movieURL"
      frameborder="0"
      width="100%"
      height="100%"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Player",

  computed: {
    movieURL() {
      return `https://www.youtube.com/embed/${
        this.$route.params.id
      }?autoplay=1`;
    }
  },

  methods: {
    goToMovies() {
      this.$router.push("/movies");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
