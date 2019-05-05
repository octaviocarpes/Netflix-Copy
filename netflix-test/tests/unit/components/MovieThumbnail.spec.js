import Vue from "vue";
import MovieThumbnail from "@/components/movie-thumbnail/MovieThumbnail.vue";

describe("MovieThumbnail.spec.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(MovieThumbnail);
    vm = new cmp({}).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});