import Vue from "vue";
import App from "@/App";
import { shallowMount } from '@vue/test-utils'

describe("App.spec.js", () => {
  let cmp, vm;

  beforeEach(() => {
    shallowMount(App, {
      stubs: ['router-link', 'router-view']
    })
    cmp = Vue.extend(App);
    vm = new cmp({}).$mount();
  });

  it("has the expected html structure", () => {
    expect(vm.$el).toMatchSnapshot();
  });
});