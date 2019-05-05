import Vue from "vue";
import AccessChart from "@/components/charts/access-chart/AccessChart.vue";

describe("AccessChart.spec.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(AccessChart);
    vm = new cmp({}).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});