<template>
  <div class="posts-view">
    <PostsList :posts="posts" @delete-post="deletePost" />
  </div>
</template>

<script setup lang="ts">
import { usePosts } from "@/hooks/posts";
import PostsList from "@/components/PostsList.vue";

const { posts, currPage, totalPages, error, deletePost } = usePosts();
</script>

<style scoped>
.posts-view {
  min-height: 100vh;
  padding: 0 1.25rem;
  background-image: linear-gradient(
    to bottom,
    rgb(98, 98, 160),
    rgb(154, 148, 124),
    rgb(84, 84, 119)
  );
}
</style>
