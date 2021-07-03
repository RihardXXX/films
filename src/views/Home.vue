<template>
  <div>
    <MoviesList :list="movies" /></div
></template>

<script>
import MoviesList from '@/components/MoviesList';
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    MoviesList,
  },
  computed: {
    ...mapState('movies', ['movies']),
  },
};
</script>
