<template>
  <div class="pagination-movie d-flex justify-content-center">
    <BPagination
      v-model="currentPageModel"
      :total-rows="total"
      :per-page="perPage"
      first-text="начало"
      last-text="конец"
      prev-text="предыдущий"
      next-text="следующий"
    />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
    perPage: {
      type: Number,
      required: true,
    },
  },
  computed: {
    currentPageModel: {
      get() {
        return this.currentPage;
      },
      set(newCurrentPage) {
        // console.log(newCurrentPage);
        this.$emit('changeCurrentPage', newCurrentPage);
      },
    },
  },
};
</script>

<style scoped>
.pagination-movie {
  margin-top: 20px;
}

.pagination-movie >>> .pagination .page-item .page-link {
  background-color: transparent;
  font-size: 12px;
  color: #ffff;
}

.pagination-movie >>> .pagination .page-item.active .page-link {
  border-color: green;
  background-color: white;
  color: black;
  font-weight: bold;
}

.pagination-movie >>> .pagination .page-item.disabled .page-link {
  border-color: grey;
}
</style>
