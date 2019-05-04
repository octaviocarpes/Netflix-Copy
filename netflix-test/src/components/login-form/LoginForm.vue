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
    <div v-if="error" class="error">
      <p>*Error signing in.</p>
    </div>
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
import { METRICS_KEY } from "@/constants/keys";
import store from "@/store";

export default {
  name: "LoginForm",

  data() {
    return {
      register: false,
      login: "",
      password: "",
      error: false
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
      this.saveRegisterMetrics();
      this.toggleRegister();
    },

    performLogin() {
      const user = StorageService.getUser(btoa(this.login + this.password));
      /* eslint-disable-next-line */
      if (!!user) {
        store.dispatch("PERFORM_LOGIN", user);
        this.saveLoginMetrics();
        this.$router.push("/movies");
      } else this.showLoginError();
    },

    showLoginError() {
      this.error = true;
      setTimeout(() => (this.error = false), 5000);
    },

    saveRegisterMetrics() {
      let Metric = StorageService.getMetrics(METRICS_KEY);
      Metric.REGISTER_METRICS.registers++;
      StorageService.registerMetrics(METRICS_KEY, Metric);
    },

    saveLoginMetrics() {
      let Metric = StorageService.getMetrics(METRICS_KEY);
      Metric.LOGIN_METRICS.logins++;
      StorageService.registerMetrics(METRICS_KEY, Metric);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
