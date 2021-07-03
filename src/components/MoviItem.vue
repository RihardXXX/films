<template>
  <div>Movi: {{ movi.Title }}</div>
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
};
</script>
