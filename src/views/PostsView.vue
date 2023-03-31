<script setup lang="ts">
import { usePosts } from "@/hooks/posts";
import { useSortedPosts } from "@/hooks/sortedPosts";
import { useSearchedSortedPosts } from "@/hooks/searchedSortedPosts";
import { useModal } from "@/hooks/modal";
import { postSortOptions } from "@/utils/slectOtions";
import { IPost } from "@/types/postTypes";
import PostsList from "@/components/Posts/PostsList.vue";
import PostForm from "@/components/Posts/PostForm.vue";
import VPagination from "@/components/VPagination.vue";

const { posts, currPage, totalPages, loading, error, addPost, deletePost } =
  usePosts();
const { selectedSortOpt, sortedPosts } = useSortedPosts(posts);
const { searchQuery, searchedSortedPosts } =
  useSearchedSortedPosts(sortedPosts);
const { isShown, toggleModal } = useModal();

const addPostHandler = (post: IPost) => {
  addPost(post);
  toggleModal();
};
</script>

<template>
  <div class="container">
    <div class="top-wrapper">
      <custom-select v-model="selectedSortOpt" :options="postSortOptions" />
      <custom-input
        v-model="searchQuery"
        placeholder="search post"
        class="top-input"
      />
      <custom-button @click="toggleModal" class="top-btn"
        >ADD POST</custom-button
      >
      <Teleport to="#modal">
        <custom-modal :isShown="isShown" :closeModal="toggleModal">
          <template #header> Create post </template>
          <PostForm @add-post="addPostHandler" />
        </custom-modal>
      </Teleport>
    </div>
    <h2 v-if="error" class="error">Oops! Error encountered: {{ error }}</h2>
    <PostsList
      v-else-if="posts"
      :posts="searchedSortedPosts"
      @delete-post="deletePost"
    />
    <h2 v-if="loading" class="loader">Loading...{{ error }}</h2>
    <VPagination
      :curr-page="currPage"
      :total-pages="totalPages"
      @update:curr-page="
        (page) => {
          currPage = page;
        }
      "
    />
  </div>
</template>

<style scoped>
.container {
  min-height: calc(100vh);
  padding: 0 1.25rem;
  background-image: var(--main-bgr);
}

.top-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 4rem 0 1rem;
}
.top-input {
  order: 1;
  flex: 1 1 300px;
  height: 1.5rem;
  margin-top: 10px;
  padding: 0 0.3rem;
  border: 1px solid var(--dark-purpule-color);
  border-radius: 5px;
  outline: none;
  background: linear-gradient(
    360deg,
    var(--light-blue-color),
    var(--whitesmoke-color),
    var(--light-blue-color)
  );
}
.top-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4rem;
  height: 1.5rem;
  font-size: 0.5rem;
  font-weight: 700;
  background: var(--btn-bgr);
}

@media screen and (min-width: 480px) {
  .top-wrapper {
    gap: 1.5rem;
  }
  .top-input {
    order: 0;
    flex: 1 1 0;
    height: 1.7rem;
    margin-top: 0;
    font-size: 1.2rem;
  }
  .top-btn {
    width: 4rem;
    height: 1.7rem;
    font-size: 0.5rem;
  }
}

@media screen and (min-width: 768px) {
  .top-wrapper {
    padding: 4.7rem 0 1rem;
  }

  .top-input {
    order: 0;
    flex: 1 1 0;
    height: 2rem;
    margin-top: 0;
  }
  .top-btn {
    width: 6rem;
    height: 2rem;
    font-size: 0.75rem;
  }
}
</style>
