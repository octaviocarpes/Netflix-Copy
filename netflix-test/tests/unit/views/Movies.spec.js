import Vue from "vue";
import Movies from "@/views/movies/Movies.vue";

describe("Movies.spec.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(Movies);
    vm = new cmp({}).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});