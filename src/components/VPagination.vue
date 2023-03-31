<template>
  <div class="pagination">
    <div
      v-for="page in totalPages"
      :key="page"
      @click="
        () => {
          updateCurrPage(page);
        }
      "
      class="pagination__btn"
      :class="{ active: page === currPage }"
    >
      {{ page }}
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>
<script setup lang="ts">
interface PaginationProps {
  currPage: number;
  totalPages: number;
}

withDefaults(defineProps<PaginationProps>(), {
  currPage: 1,
  totalPages: 1,
});

const emit = defineEmits<{ (e: "update:currPage", value: number): void }>();

const updateCurrPage = (page: number) => {
  emit("update:currPage", page);
};
</script>

<style lang="css" scoped>
.pagination {
  display: flex;
  justify-content: center;
  gap: 5px;
  padding-bottom: 0.5rem;
  background: transparent;
}

.pagination__btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  font-size: 12px;
  font-weight: 700;
  color: var(--dark-purpule-color);
  background: var(--main-bgr);
  border: 1px solid var(--dark-purpule-color);
  border-radius: var(--sm-radius);
  cursor: pointer;
}
.active {
  color: var(--whitesmoke-color);
  border: 1px solid var(--whitesmoke-color);
}

@media (min-width: 480px) {
  .pagination__btn {
    width: 2rem;
    height: 2rem;
    font-size: 14px;
  }
}
@media (min-width: 1024px) {
  .pagination__btn {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 16px;
  }
}
/* .el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  flex: 1 1 0;
  margin: 0 2px;
  background-color: green !important;
} */
</style>

<!-- <template>
  <el-pagination
    background
    hide-on-single-page
    :small="windowWidth < 768"
    layout="prev, pager, next"
    :total="totalPages * 10"
    :current-page="currPage"
    @update:current-page="updateCurrPage"
  />
</template> -->
