import api from '@/services/api';
import IDs from '@/store/mock/top250.js';
import utils from '@/utils';

const { getFilm } = api;
const { errorResponse } = utils;

const state = {
  top250: IDs,
  perPage: 12,
  currentPage: 1,
  isLoading: false,
  error: false,
  movies: [],
};

const getters = {
  sliceIDs: ({ top250 }) => (from, to) => top250.slice(from, to),
  currentPage: ({ currentPage }) => currentPage,
  perPage: ({ perPage }) => perPage,
  totalFilms: ({ top250 }) => top250.length,
};

const mutations = {
  fetchFilmStart(state) {
    state.isLoading = true;
  },
  fetchFilmSuccess(state, paylod) {
    state.isLoading = false;
    state.movies = [...paylod];
    state.error = false;
  },
  fetchFilmFailure(state, error) {
    state.isLoading = false;
    state.error = true;
  },
  setCurrentPage(state, paylod) {
    state.currentPage = paylod;
  },
  removeFilmSet(state, paylod) {
    state.top250 = [...paylod];
  },
  setErrorFalse(state, paylod) {
    state.error = paylod;
  },
};

const actions = {
  initialMovies: {
    handler({ dispatch }) {
      dispatch('fetchFilm');
    },
    root: true,
  },
  async fetchFilm({ getters, commit }) {
    const { currentPage, perPage, sliceIDs } = getters;
    const from = currentPage * perPage - perPage;
    const to = currentPage * perPage;
    const chunkFilms = sliceIDs(from, to);
    commit('fetchFilmStart');
    const requests = chunkFilms.map((id) => getFilm(`?i=${id}`));
    const response = await Promise.all(requests);
    if (!response || errorResponse(response)) {
      const errorMessage = response[0]['Error'];
      commit('fetchFilmFailure', errorMessage);
      return errorMessage;
    } else {
      commit('fetchFilmSuccess', response);
      return response;
    }
  },
  changeCurrentPageCall({ commit, dispatch }, newCurrentPage) {
    commit('setCurrentPage', newCurrentPage);
    dispatch('fetchFilm');
  },
  removeFilm({ state, commit, dispatch }, id) {
    const newTop = state.top250.filter((film) => film !== id);
    commit('removeFilmSet', newTop);
    dispatch('fetchFilm');
  },
  async searchFilm({ commit }, query) {
    commit('fetchFilmStart');
    const response = await getFilm(`?s=${query}`);
    if (response && !response.Error) {
      const result = response.Search;
      commit('fetchFilmSuccess', result);
      return result;
    } else {
      // const errorMessage = response.Error;
      commit('fetchFilmFailure');
      // return errorMessage;
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
