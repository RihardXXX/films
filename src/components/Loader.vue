<template>
  <div class="loader-spinner">
    <b-spinner variant="light" type="grow"></b-spinner>
  </div>
</template>

<script>
export default {
  name: 'Loader',
};
</script>

<style scoped>
.loader-spinner {
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
}
</style>
