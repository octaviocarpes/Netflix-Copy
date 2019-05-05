import Vue from "vue";
import Error from "@/views/error/Error.vue";

describe("Error.spec.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(Error);
    vm = new cmp({}).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
