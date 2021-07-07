<template>
  <BContainer>
    <h3 class="list-title">
      Фильмы ТОП 250
    </h3>
    <BRow>
      <template v-if="isList">
        <BCol cols="3" v-for="movi in list" :key="movi.imdbID">
          <MoviItem
            @deleteFilm="deleteFilm"
            :movi="movi"
            @mouseover.native="onMouseOver(movi.Poster)"
          />
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
import { mapActions } from 'vuex';

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
    ...mapActions('movies', ['removeFilm']),
    onMouseOver(poster) {
      this.$emit('changeBackground', poster);
    },
    deleteFilm(data) {
      const { id, title } = data;
      this.$bvModal
        .msgBoxConfirm(`вы действительно хотите удалить фильм ${title}`)
        .then((value) => {
          if (value) this.removeFilm(id);
        })
        .catch((err) => {
          console.log(err);
        });
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
