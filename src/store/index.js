import Vue from 'vue';
import Vuex from 'vuex';
import movies from '@/store/modules/movies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
  },
});
