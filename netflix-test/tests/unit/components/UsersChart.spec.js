import Vue from "vue";
import UsersChart from "@/components/charts/top-users-chart/UsersChart.vue";

describe("UsersChart.spec.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(UsersChart);
    vm = new cmp({}).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});