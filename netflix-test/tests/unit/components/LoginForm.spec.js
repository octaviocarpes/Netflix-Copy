import Vue from "vue";
import LoginForm from "@/components/login-form/LoginForm.vue";

describe("LoginForm.spec.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(LoginForm);
    vm = new cmp({}).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});