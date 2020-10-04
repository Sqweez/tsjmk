import Vue from 'vue'
import Vuex from 'vuex'
import elements from "./modules/elements";
import counters from "./modules/counters";
import auth from "./modules/auth";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    elements,
    counters,
    auth
  }
})
