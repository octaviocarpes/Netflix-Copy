<template>
  <div class="login-view">
    <div class="black-filter"></div>
    <div class="header-logo">
      <h1>NIETFLIX</h1>
    </div>
    <LoginForm />
    <footer>
      <div class="footer-content">
        <p>Created by Octavio Carpes</p>
        <ul>
          <li><a href="https://github.com/octaviocarpes">Github</a></li>
          <li>
            <a
              href="https://www.linkedin.com/in/octavio-pitrez-carpes-bbbab0148/"
              >Linkedin</a
            >
          </li>
        </ul>
        <p>
          *This is a copy made for study purposes, all rights reserved to
          Netflix
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
import LoginForm from "@/components/login-form/LoginForm";

export default {
  name: "Login",
  components: {
    LoginForm
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
