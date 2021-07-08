<template>
  <header class="header">
    <BNavbar type="dark" class="navbar" variant="dark">
      <BContainer>
        <BNavbarBrand href="#">Фильмы</BNavbarBrand>
        <BNavForm>
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
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Header',
  data() {
    return {
      searchText: '',
    };
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
  },
  computed: {
    ...mapState('movies', ['error']),
  },
};
</script>

<style scoped>
.header {
  margin-bottom: 30px;
  position: relative;
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

.message {
  color: #ffff;
  position: absolute;
  top: 110px;
  left: 940px;
}
</style>
