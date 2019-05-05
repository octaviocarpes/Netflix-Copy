import Vue from "vue";
import Profile from "@/views/profile/Profile.vue";

describe("Profile.spec.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(Profile);
    vm = new cmp({}).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
