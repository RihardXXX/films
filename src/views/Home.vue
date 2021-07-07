<template>
  <div class="home-page">
    <Loader v-if="isLoading" />
    <PosterBackground :bg="bg" />
    <Header />
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
import Loader from '@/components/Loader';
import Pagination from '@/components/Pagination';
import Header from '@/components/Header';
import { mapState, mapGetters, mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    MoviesList,
    PosterBackground,
    Pagination,
    Loader,
    Header,
  },
  data() {
    return {
      bg: '',
    };
  },
  watch: {
    '$route.query': {
      handler: 'onPageQueryChange',
      immediate: true,
      deep: true,
    },
  },
  computed: {
    ...mapState('movies', ['movies', 'isLoading']),
    ...mapGetters('movies', ['currentPage', 'perPage', 'totalFilms']),
  },
  methods: {
    ...mapActions('movies', ['changeCurrentPageCall']),
    onPageQueryChange(newValue) {
      const { page } = newValue;
      this.changeCurrentPageCall(Number(page));
    },
    changeBackground(poster) {
      this.bg = poster;
    },
    changePage(page) {
      this.$router.push({ query: { page } });
    },
  },
};
</script>

<style scoped>
.home-page {
  position: relative;
}
</style>
