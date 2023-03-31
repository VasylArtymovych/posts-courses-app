import { ref, watchEffect } from "vue";
import type { Ref } from "vue";
import axios from "axios";
import { postsUrl } from "@/utils/requsetUrls";
import { IPost } from "@/types/postTypes";

export const usePosts = (limit = 10, page = 1) => {
  const posts: Ref<IPost[]> = ref([]);
  const postsLimit = ref(limit);
  const currPage = ref(page);
  const totalPages = ref(1);
  const loading = ref(false);
  const error = ref("");

  const fetchPosts = async () => {
    try {
      loading.value = true;
      const response = await axios.get<IPost[]>(postsUrl, {
        params: {
          _limit: postsLimit.value,
          _page: currPage.value,
        },
      });

      posts.value = response.data;
      totalPages.value = Math.ceil(response.headers["x-total-count"] / limit);
    } catch (err: any) {
      error.value = err.message;
    } finally {
      loading.value = false;
    }
  };

  const addPost = (post: IPost) => {
    posts.value.unshift(post);
  };

  const deletePost = (id: number, index: number) => {
    // posts.value = posts.value.filter((post) => post.id !== id);
    posts.value.splice(index, 1);
  };

  watchEffect(fetchPosts);

  return {
    posts,
    postsLimit,
    currPage,
    totalPages,
    loading,
    error,
    addPost,
    deletePost,
  };
};
