import api from '@/services/api';

const { getFilm } = api;

const state = {};

const getters = {};

const mutations = {};

const actions = {
  fetchFilm(context) {
    return new Promise((resolve, reject) => {
      getFilm('?i=tt0111161').then((data) => {
        console.log(data);
      });
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
