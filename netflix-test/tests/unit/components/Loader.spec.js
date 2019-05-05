import Vue from "vue";
import Loader from "@/components/loader/Loader.vue";

describe("Loader.spec.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(Loader);
    vm = new cmp({}).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});