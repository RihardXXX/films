<template>
  <header class="header">
    <BNavbar type="dark" class="navbar" variant="dark">
      <BContainer>
        <BNavbarBrand href="#">Фильмы</BNavbarBrand>
        <BNavForm class="nav-form">
          <BFormInput
            class="mr-sm-2 search-input"
            placeholder="поиск"
            v-model="searchText"
            debounce="1000"
          ></BFormInput>
          <span v-if="error" class="message">фильм не найден</span>
        </BNavForm>
      </BContainer>
    </BNavbar>
  </header>
</template>

<script>
import ErrorModal from '@/components/ErrorModal';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      searchText: '',
    };
  },
  components: {
    ErrorModal,
  },
  watch: {
    searchText: 'onSearch',
  },
  methods: {
    ...mapActions('movies', ['searchFilm', 'fetchFilm']),
    onSearch(newValue) {
      if (newValue) {
        this.searchFilm(newValue);
      } else {
        this.fetchFilm();
      }
    },
    makeToast(variant = null) {
      this.$bvToast.toast('фильм не найдет', {
        title: `ошибка`,
        variant,
        solid: true,
      });
    },
  },
  computed: {
    ...mapState('movies', ['error']),
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 30px;
}

.navbar {
  background-color: rgba(0, 0, 0, 0.7) !important;
}

.search-input {
  color: #ffff;
  background-color: rgba(0, 0, 0, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.search-input:focus {
  background-color: rgba(255, 255, 255, 0.2);
}

.nav-form {
  position: relative;
}

.message {
  color: #ffff;
  position: absolute;
  top: 80px;
  left: 50px;
}
</style>
