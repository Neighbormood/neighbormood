import Vue from "vue";
import Vuex from "vuex";
import user from "./modules/user";
import friends from "./modules/friends";
import statistics from "./modules/statistics";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    friends,
    statistics
  }
});
