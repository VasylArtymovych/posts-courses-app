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
  position: relative;
  list-style: none;
  width: 100%;
  min-height: calc(100vh - 146px - 32px);
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
  transform: scale(0.5);
}
.item-leave-active {
  position: absolute;
}

@media (min-width: 480px) {
  .list {
    min-height: calc(100vh - 112px - 32px);
  }
}
@media (min-width: 768px) {
  .list {
    min-height: calc(100vh - 124px - 40px);
  }
}
</style>
