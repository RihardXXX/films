<template>
  <div class="poster-page-bg" :style="isBg"></div>
</template>

<script>
export default {
  name: 'PosterBackground',
  props: {
    bg: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      default: {
        'background-image': `linear-gradient(
            45deg,
            rgb(0, 3, 38) 0%,
            rgb(82, 15, 117) 100%
          )`,
      },
    };
  },
  computed: {
    isBg() {
      return this.bg ? { 'background-image': `url(${this.bg})` } : this.default;
    },
  },
};
</script>

<style scoped>
.poster-page-bg {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  background-size: cover;
  background-position: center;
  transition: all 0.2s ease;
}

.poster-page-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.5;
  background-image: linear-gradient(
    45deg,
    rgb(0, 3, 38) 0%,
    rgb(82, 15, 117) 100%
  );
}
</style>
