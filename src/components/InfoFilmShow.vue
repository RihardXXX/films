<template>
  <div class="wrap-film">
    <header class="header-film">
      <h6 class="header-film-title">Информация о фильме</h6>
      <BIconX class="close-icon" @click="closeModal" />
    </header>
    <content>
      <BRow>
        <BCol sm="4">
          <div class="film-poster-wrapper">
            <div class="film-poster" :style="bgPoster"></div>
          </div>
        </BCol>
        <BCol sm="8">
          <h3 class="film-title">{{ film.Title }}</h3>
          <BFormRating
            class="film-rating"
            v-model="film.imdbRating"
            readonly
            show-value
            precision="1"
            stars="10"
            show-value-max
            no-border
          />
          <p class="film-description">{{ film.Plot }}</p>
          <div class="mt-3 mb-4">
            <BBadge variant="success" class="mr-2 my-badge">{{
              film.Year
            }}</BBadge>
            <BBadge variant="success" class="mr-2 my-badge">{{
              film.Runtime
            }}</BBadge>
            <BBadge variant="success" class="mr-2 my-badge">{{
              film.Genre
            }}</BBadge>
            <BBadge variant="success" class="mr-2 my-badge">{{
              film.Language
            }}</BBadge>
          </div>
          <table class="table small">
            <tbody>
              <tr>
                <th>Production</th>
                <td>{{ film.Production }}</td>
              </tr>
              <tr>
                <th>Country</th>
                <td>{{ film.Country }}</td>
              </tr>
              <tr>
                <th>Director</th>
                <td>{{ film.Director }}</td>
              </tr>
              <tr>
                <th>Writer</th>
                <td>{{ film.Writer }}</td>
              </tr>
              <tr>
                <th>Actors</th>
                <td>{{ film.Actors }}</td>
              </tr>
              <tr>
                <th>Awards</th>
                <td>{{ film.Awards }}</td>
              </tr>
            </tbody>
          </table>
        </BCol>
      </BRow>
    </content>
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
  computed: {
    bgPoster() {
      return { 'background-image': `url(${this.film.Poster})` };
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
  border-radius: 5px;
}

.header-film-title {
  font-size: 25px;
  text-align: center;
}

.close-icon {
  font-size: 50px;
  cursor: pointer;
}

.film-poster-wrapper {
  position: relative;
  padding-bottom: 150%;
  overflow: hidden;
}

.film-poster-wrapper .film-poster {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  weight: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.film-title {
  font-size: 3.5rem;
  font-weight: 400;
  line-height: 1.2;
  text-align: center;
}

.film-rating:focus {
  box-shadow: 0;
}

.film-rating >>> .b-rating-star,
.film-rating >>> .b-rating-value {
  justify-content: flex-start;
  flex-grow: 0 !important;
  font-size: 1.3rem;
  font-weight: 300;
  padding: 0;
}

.film-rating >>> .b-rating-star + .b-rating-star {
  margin-left: 4px;
}

.film-rating >>> .b-rating-value {
  margin-left: 15px;
}

.film-rating >>> .b-rating-star .b-rating-icon {
  color: #ff9e00;
}

.film-description {
  font-size: 1.25rem;
  font-weight: 300;
  padding: 10px;
}

.my-badge {
  background-color: #28a745;
  margin-left: 10px;
}
</style>
