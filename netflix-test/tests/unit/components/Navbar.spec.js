import Vue from "vue";
import Navbar from "@/components/navbar/Navbar.vue";

describe("Navbar.spec.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(Navbar);
    vm = new cmp({}).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});