import Vue from "vue";
import Player from "@/views/player/Player.vue";

describe("Player.spec.js", () => {
  let cmp, vm;

  beforeEach(() => {
    cmp = Vue.extend(Player);
    vm = new cmp({}).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});