import Vue from "vue";
import Login from "@/views/login/Login.vue";

describe("Login.spec.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(Login);
    vm = new cmp({}).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});