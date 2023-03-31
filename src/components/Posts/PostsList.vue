<template>
  <ul class="list">
    <TransitionGroup name="item" tag="ul">
      <PostsListItem
        v-for="(post, index) in posts"
        :key="post.id"
        :post="post"
        @delete-post="$emit('deletePost', post.id, index)"
      />
    </TransitionGroup>
    <p v-if="posts.length <= 0" class="empty-list-text">List is empty</p>
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

.empty-list-text {
  font-family: fantasy;
  font-size: 1rem;
  font-weight: 700;
  color: var(--light-purpule-color);
  text-shadow: -1px 0 var(--dark-purpule-color), 1px 0 var(--dark-purpule-color),
    0 -1px var(--dark-purpule-color), 0 1px var(--dark-purpule-color);
}

@media (min-width: 480px) {
  .list {
    min-height: calc(100vh - 112px - 40px);
  }
}
@media (min-width: 768px) {
  .list {
    min-height: calc(100vh - 124px - 40px);
  }

  .empty-list-text {
    font-size: 1.7rem;
  }
}
@media (min-width: 1024px) {
  .list {
    min-height: calc(100vh - 124px - 48px);
  }

  .empty-list-text {
    font-size: 2rem;
  }
}
</style>
