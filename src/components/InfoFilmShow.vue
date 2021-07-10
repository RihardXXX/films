<template>
  <div class="wrap-film">
    <header class="header-film">
      <h6 class="header-film-title">Информация о фильме</h6>
      <BIconX class="close-icon" @click="closeModal" />
    </header>
  </div>
</template>

<script>
export default {
  name: 'InfoFilmShow',
  props: {
    film: {
      type: Object,
      required: true,
    },
  },
  methods: {
    closeModal() {
      console.log('close');
      this.$emit('closeModalFilmInfo');
    },
  },
};
</script>

<style scoped>
.header-film {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ff9e00;
  color: white;
  padding: 5px 20px;
}

.header-film-title {
  font-size: 25px;
}

.close-icon {
  font-size: 50px;
  cursor: pointer;
}
</style>
