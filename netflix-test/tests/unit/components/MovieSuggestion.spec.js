import Vue from "vue";
import MovieSuggestion from "@/components/movie-suggestion/MovieSuggestion.vue";

describe("MovieSuggestion.spec.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(MovieSuggestion);
    vm = new cmp({}).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});