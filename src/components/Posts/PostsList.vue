<template>
  <ul class="list">
    <TransitionGroup name="item" tag="ul">
      <PostsListItem
        v-for="post in posts"
        :key="post.id"
        :post="post"
        @delete-post="$emit('deletePost', post.id)"
      />
    </TransitionGroup>
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
  padding: 0.625rem 0;
}

.item-move,
.item-enter-active,
.item-leave-active {
  transition: all 0.5s ease;
}
.item-enter-from,
.item-leave-to {
  opacity: 0;
  transform: translateX(55px);
}
.item-leave-active {
  position: absolute;
}
</style>
