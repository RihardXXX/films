<template>
  <div class="home-page">
    <PosterBackground :bg="bg" />
    <MoviesList :list="movies" @changeBackground="changeBackground" />
    <Pagination
      :total="totalFilms"
      :currentPage="currentPage"
      :perPage="perPage"
      @changeCurrentPage="changePage"
    />
  </div>
</template>

<script>
import MoviesList from '@/components/MoviesList';
import PosterBackground from '@/components/PosterBackground';
import Pagination from '@/components/Pagination';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    MoviesList,
    PosterBackground,
    Pagination,
  },
  data() {
    return {
      bg: '',
    };
  },
  computed: {
    ...mapState('movies', ['movies']),
    ...mapGetters('movies', ['currentPage', 'perPage', 'totalFilms']),
  },
  methods: {
    ...mapActions('movies', ['changeCurrentPageCall']),
    changeBackground(poster) {
      this.bg = poster;
    },
    changePage(newCurrentPage) {
      this.changeCurrentPageCall(newCurrentPage);
    },
  },
};
</script>

<style scoped>
.home-page {
  position: relative;
}
</style>
