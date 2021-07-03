import Vue from 'vue';
import Vuex from 'vuex';
import movies from '@/store/modules/movies';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    movies,
  },
});

store.dispatch('initialMovies');

export default store;
