import { computed, ref } from "vue";
import type { Ref } from "vue";
import { IPost } from "@/types/postTypes";

export const useSearchedSortedPosts = (posts: Ref<IPost[]>) => {
  const searchQuery = ref("");
  const lowerCase = (val: string) => val.toLowerCase();

  const searchedSortedPosts = computed(() => {
    return searchQuery.value !== ""
      ? posts.value.filter((post) =>
          lowerCase(post.title).includes(lowerCase(searchQuery.value))
        )
      : posts.value;
  });

  return { searchQuery, searchedSortedPosts };
};
