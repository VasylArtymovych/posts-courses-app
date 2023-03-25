import { ref, computed } from "vue";
import type { Ref } from "vue";
import { IPost } from "@/types/postTypes";

type KeysToCompare = Omit<IPost, "id" | "userId">;

export const useSortedPosts = (posts: Ref<IPost[]>) => {
  const selectedSortOpt = ref("");

  const sortedPosts = computed(() => {
    return selectedSortOpt.value !== ""
      ? posts.value.sort((p1, p2) => {
          return p1[selectedSortOpt.value as keyof KeysToCompare].localeCompare(
            p2[selectedSortOpt.value as keyof KeysToCompare]
          );
        })
      : posts.value;
  });

  return { selectedSortOpt, sortedPosts };
};
