// import { onMounted } from "vue";
import { ref } from "vue";

export const useSetTextareaHeight = () => {
  const textAreaRef = ref<HTMLTextAreaElement | null>(null);
  const height = 42;

  const changeTextareaHeight = (): void => {
    if (textAreaRef.value) {
      const elHeight = textAreaRef.value.offsetHeight;
      textAreaRef.value.style.height = height + "px";
      const scrollHeight = textAreaRef.value.scrollHeight;

      if (scrollHeight < 250) {
        textAreaRef.value.style.height = scrollHeight + "px";
        textAreaRef.value.style.overflow = "hidden";
      } else {
        textAreaRef.value.style.height = elHeight + "px";
        textAreaRef.value.style.overflow = "auto";
      }
    }
  };

  // onMounted(() => {
  //   if (textAreaRef.value) {
  //     height = textAreaRef.value.offsetHeight;
  //   }
  // });

  return { textAreaRef, changeTextareaHeight };
};
