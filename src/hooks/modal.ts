import { ref } from "vue";

export const useModal = (initVal = false) => {
  const isShown = ref(initVal);

  const openModal = () => {
    isShown.value = true;
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    isShown.value = false;
    document.body.style.overflow = "";
  };

  const toggleModal = () => {
    isShown.value = !isShown.value;

    if (isShown.value === true) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return { isShown, openModal, closeModal, toggleModal };
};
