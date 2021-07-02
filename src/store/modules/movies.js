import api from '@/services/api';
import IDs from '@/store/mock/top250.js';

const { getFilm } = api;

const state = {
  top250: IDs,
  perPage: 12,
  currentPage: 1,
  isLoading: false,
  error: false,
};

const getters = {
  sliceIDs: ({ top250 }) => (from, to) => top250.slice(from, to),
  currentPage: ({ currentPage }) => currentPage,
  perPage: ({ perPage }) => perPage,
};

const mutations = {};

const actions = {
  async fetchFilm({ getters, commit }) {
    const { currentPage, perPage, sliceIDs } = getters;
    const from = currentPage * perPage - perPage;
    const to = currentPage * perPage;
    const chunkFilms = sliceIDs(from, to);
    const requests = chunkFilms.map((id) => getFilm(`?i${id}`));
    const response = await Promise.all(requests);
    console.log(response);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
