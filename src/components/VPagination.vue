<template>
  <el-pagination
    background
    hide-on-single-page
    :small="windowWidth < 768"
    layout="prev, pager, next"
    :total="totalPages * 10"
    :current-page="currPage"
    @update:current-page="updateCurrPage"
  />
</template>

<script lang="ts">
export default {};
</script>
<script setup lang="ts">
import { useWindowWidth } from "@/hooks/windowWidth";

interface PaginationProps {
  currPage: number;
  totalPages: number;
}

withDefaults(defineProps<PaginationProps>(), {
  currPage: 1,
  totalPages: 1,
});

const emit = defineEmits<{ (e: "update:currPage", value: number): void }>();

const { width: windowWidth } = useWindowWidth();
const updateCurrPage = (page: number) => {
  emit("update:currPage", page);
};
</script>

<style lang="css" scoped>
.el-pagination {
  display: flex;
  justify-content: center;
  padding-bottom: 0.5rem;
  background: transparent;
}

.el-pagination.is-background .el-pager li {
  background-color: green !important;
  color: red;
}
</style>
