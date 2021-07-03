<template>
  <BContainer>
    <h3 class="list-title">
      Фильмы ТОП 250
    </h3>
    <BRow>
      <template v-if="isList">
        <BCol cols="3" v-for="movi in list" :key="movi.imdbID">
          <MoviItem :movi="movi" />
        </BCol>
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
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
}
</style>
