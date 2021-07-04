<template>
  <div class="home-page">
    <PosterBackground :bg="bg" />
    <MoviesList :list="movies" @changeBackground="changeBackground" /></div
></template>

<script>
import MoviesList from '@/components/MoviesList';
import PosterBackground from '@/components/PosterBackground';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    MoviesList,
    PosterBackground,
  },
  data() {
    return {
      bg: '',
    };
  },
  computed: {
    ...mapState('movies', ['movies']),
  },
  methods: {
    changeBackground(poster) {
      this.bg = poster;
    },
  },
};
</script>

<style scoped>
.home-page {
  position: relative;
}
</style>
