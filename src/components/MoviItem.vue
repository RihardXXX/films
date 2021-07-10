<template>
  <div class="movi-item mb-3">
    <div class="movi-item-poster" :style="bgPoster"></div>
    <div class="movi-info-wrap">
      <div class="movi-item-info">
        <div class="movi-title">{{ movi.Title }}</div>
        <div class="movi-year">{{ movi.Year }}</div>
      </div>
      <div class="movi-item-controls row no-gutters">
        <div class="col">
          <BButton size="md" block variant="outline-light">смотреть</BButton>
        </div>
        <div class="col">
          <BButton @click="infoShow" variant="outline-light"
            >информация</BButton
          >
        </div>
        <div class="col">
          <BButton variant="outline-light" @click="deleteItemFilm"
            >удалить</BButton
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieItem',
  props: {
    movi: {
      type: Object,
      required: true,
    },
  },
  computed: {
    bgPoster() {
      return { 'background-image': `url(${this.movi.Poster})` };
    },
    id() {
      return this.movi.imdbID;
    },
  },
  methods: {
    deleteItemFilm() {
      const { Title: title } = this.movi;
      this.$emit('deleteFilm', { id, title });
    },
    infoShow() {
      this.$emit('showModalInfoFilm', this.id);
    },
  },
};
</script>

<style scoped>
.movi-item {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.4s ease;
  height: 450px;
}

.movi-item:hover {
  box-shadow: 0px 1px 30px rgba(0, 0, 0, 0.7);
  transform: scale(1.03);
}

.movi-item-poster {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  z-index: -1;
}

.movi-info-wrap {
  /* position: absolute; */
  /* z-index: 200; */
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  opacity: 0;
  transition: all 0.5s ease;
}

.movi-item:hover .movi-info-wrap {
  opacity: 1;
  background-color: rgba(0, 0, 0, 0.6);
}

.movi-item-controls {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.movi-item-controls button {
  margin-top: 5px;
}

.movi-item-info {
  text-align: center;
  color: white;
  padding: 5px;
}

.movi-title {
  font-size: 20px;
}

.movi-year {
  font-size: 16px;
}
</style>
