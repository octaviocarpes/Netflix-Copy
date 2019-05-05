import Vue from "vue";
import MoviesChart from "@/components/charts/top-movies-chart/MoviesChart.vue";

describe("MoviesChart.spec.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(MoviesChart);
    vm = new cmp({}).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});