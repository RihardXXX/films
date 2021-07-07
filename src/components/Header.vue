<template>
  <header class="header">
    <BNavbar type="dark" class="navbar" variant="dark">
      <BContainer>
        <BNavbarBrand href="#">Фильмы</BNavbarBrand>
        <BNavform>
          <BFormInput
            class="mr-sm-2 search-input"
            placeholder="поиск"
          ></BFormInput>
        </BNavform>
      </BContainer>
    </BNavbar>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  margin-bottom: 30px;
}

.navbar {
  background-color: rgba(0, 0, 0, 0.7) !important;
}

.search-input {
  color: #ffff;
  background-color: rgba(0, 0, 0, 0.1);
  border-color: rgba(255, 255, 255, 0.5);
}

.search-input:focus {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
