<template>
  <div>
    <b-button variant="info" @click="makeToast('info')" class="mb-2"
      >Info</b-button
    >
  </div>
</template>

<script>
export default {
  name: 'ErrorModal',
  mounted() {
    this.makeToast();
  },
  methods: {
    makeToast(variant = null) {
      this.$bvToast.toast('фильм не найдет', {
        title: `ошибка`,
        variant,
        solid: true,
      });
    },
  },
};
</script>
