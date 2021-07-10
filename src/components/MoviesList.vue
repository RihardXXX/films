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
            @showModalInfoFilm="showModalInfoFilm"
            @mouseover.native="onMouseOver(movi.Poster)"
          />
        </BCol>
      </template>
      <template v-else>
        <div>Empty list films</div>
      </template>
    </BRow>
    <BModal
      body-class="body-info-modal"
      :id="idInfoModal"
      size="xl"
      hide-footer
      hide-header
    >
      <InfoFilmShow
        :film="selectFilm"
        @closeModalFilmInfo="closeModalFilmInfo"
      />
    </BModal>
  </BContainer>
</template>

<script>
import MoviItem from '@/components/MoviItem';
import { mapActions } from 'vuex';
import InfoFilmShow from '@/components/InfoFilmShow';

export default {
  name: 'MoviesList',
  props: {
    list: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
  data() {
    return {
      idInfoModal: 'idInfoModal',
      idFilm: '',
    };
  },
  components: {
    MoviItem,
    InfoFilmShow,
  },
  computed: {
    isList() {
      return this.list && this.list.length;
    },
    selectFilm() {
      return this.idFilm
        ? this.list.find((film) => film.imdbID === this.idFilm)
        : null;
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
    showModalInfoFilm(id) {
      this.idFilm = id;
      this.$bvModal.show(this.idInfoModal);
    },
    closeModalFilmInfo() {
      this.$bvModal.hide(this.idInfoModal);
    },
  },
};
</script>

<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
}

.body-class {
  color: #ffff;
  text-align: center;
}
</style>

<style>
.body-info-modal {
  padding: 0;
}
</style>
