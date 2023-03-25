<template>
  <ul class="list">
    <PostsListItem
      v-for="post in posts"
      :key="post.id"
      :post="post"
      @delete-post="$emit('deletePost', post.id)"
    />
  </ul>
</template>

<script lang="ts">
export default {};
</script>
<script setup lang="ts">
import { IPost } from "@/types/postTypes";
import PostsListItem from "@/components/Posts/PostsListItem.vue";

interface IProps {
  posts: IPost[];
}

defineProps<IProps>();
</script>

<style lang="css" scoped>
.list {
  list-style: none;
  width: 100%;
  /* padding: 0.625rem; */
}
</style>
