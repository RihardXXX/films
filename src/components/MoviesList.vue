<template>
  <BContainer>
    <h3 class="list-title">
      Фильмы ТОП 250
    </h3>
    <BRow>
      <template v-if="isList">
        <BCol cols="3" v-for="movi in list" :key="movi.imdbID">
          <MoviItem :movi="movi" @mouseover.native="onMouseOver(movi.Poster)" />
        </BCol>
      </template>
      <template v-else>
        <div>Empty list films</div>
      </template>
    </BRow>
  </BContainer>
</template>

<script>
import MoviItem from '@/components/MoviItem';

export default {
  name: 'MoviesList',
  props: {
    list: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  components: {
    MoviItem,
  },
  computed: {
    isList() {
      return this.list && this.list.length;
    },
  },
  methods: {
    onMouseOver(poster) {
      this.$emit('changeBackground', poster);
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
}

.list-title {
  color: #ffff;
  text-align: center;
}
</style>
