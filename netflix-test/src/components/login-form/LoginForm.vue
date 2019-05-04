<template>
  <div class="login-form-container">
    <h1>{{ register ? "Register" : "Sign In" }}</h1>
    <form class="login-inputs" @submit.prevent="submitForm()">
      <input
        v-model="login"
        tabindex="1"
        type="text"
        placeholder="Login"
        id="login-form-input"
      />
      <input
        v-model="password"
        tabindex="2"
        type="password"
        placeholder="Password"
        id="login-form-password-input"
      />
      <button tabindex="3" type="submit">
        {{ register ? "Sign Up" : "Sign In" }}
      </button>
    </form>
    <div v-if="!register" class="remember-me">
      <input type="checkbox" name="remember-me" id="remember-me" />
      <p>Remember me</p>
    </div>
    <div v-if="!register" class="register">
      New to Nietflix? <b @click="toggleRegister()">Sign up now!</b>
    </div>
    <div v-if="register" class="register">
      <b @click="toggleRegister">Back to Login</b>
    </div>
  </div>
</template>

<script>
import StorageService from "@/storage";
import store from "@/store";

export default {
  name: "LoginForm",

  data() {
    return {
      register: false,
      login: "",
      password: ""
    };
  },

  methods: {
    toggleRegister() {
      this.register = !this.register;
    },

    submitForm() {
      if (this.register) this.registerUser();
      else this.performLogin();
    },

    registerUser() {
      StorageService.registerUser(this.login, this.password);
      this.toggleRegister();
    },

    performLogin() {
      const user = StorageService.getUser(btoa(this.login + this.password));
      if (user) {
        store.dispatch("PERFORM_LOGIN", user);
        this.$router.push("/movies");
      } else console.log("error");
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
