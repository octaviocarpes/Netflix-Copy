import Vue from "vue";
import Metrics from "@/views/metrics/Metrics.vue";

describe("Metrics.spec.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(Metrics);
    vm = new cmp({}).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});
