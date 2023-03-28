<template>
  <div class="pagination">
    <div
      v-for="page in totalPages"
      :key="page"
      class="pagination__page"
      :class="{ active: page === currPage }"
      @click="
        () => {
          updateCurrPage(page);
        }
      "
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

const props = withDefaults(defineProps<PaginationProps>(), {
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
  gap: 0.5rem;
  margin: 0 auto;
}

.pagination__page {
  width: 2rem;
  height: 2rem;
  flex: 0 1 auto;
  border: 1px solid teal;
}

.active {
  border: 2px solid red;
}
</style>
