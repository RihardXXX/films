<template>
  <div class="home">
    <h1>hello</h1>
    <button @click="show">button</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'Home',
  components: {
    HelloWorld,
  },
  methods: {
    show() {
      this.$store.dispatch('movies/fetchFilm');
    },
  },
};
</script>
