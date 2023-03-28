<template>
  <li class="item">
    <div class="text-wrapper">
      <span class="item__id">{{ post.id }}</span>
      <h3 class="item__title">{{ post.title }}!</h3>
      <p class="item__body">{{ post.body }}</p>
    </div>
    <div class="btns-wrapper">
      <custom-button class="btn-layout">OPEN</custom-button>
      <custom-button class="btn-layout" @click="onDeleteBtn"
        >DELETE</custom-button
      >
    </div>
  </li>
</template>

<script lang="ts">
export default {};
</script>
<script setup lang="ts">
import { IPost } from "@/types/postTypes";
import CustomButton from "@/components/UI/CustomButton.vue";

interface IProps {
  post: IPost;
}

const emit = defineEmits<{ (e: "deletePost"): void }>();
defineProps<IProps>();

const onDeleteBtn = () => {
  emit("deletePost");
};
</script>

<style lang="css">
.item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  row-gap: 0.5rem;
  width: 100%;
  padding: 0.7rem;
  border: 2px solid rgb(45, 11, 96);
  border-radius: 10px;
  box-shadow: 0 4px 0 rgb(84, 75, 124);
  background: transparent;
  backdrop-filter: hue-rotate(100deg);
}
.item:not(:last-child) {
  margin-bottom: 0.625rem;
}
.item__id {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  left: -7px;
  top: -5px;
  width: 1.6rem;
  height: 1.6rem;
  font-family: fantasy;
  font-size: 0.8rem;
  font-weight: bold;
  background: rgb(255, 136, 0);
  border-radius: 50%;
  border-right: 2px solid rgb(45, 11, 96);
  border-bottom: 2px solid rgb(45, 11, 96);
}
.item__title {
  font-family: fantasy;
  font-size: 0.9rem;
  font-weight: 700;
  line-height: 1.2;
}
.item__body {
  font-family: cursive;
  font-size: 0.8rem;
  line-height: 1;
}

.btns-wrapper {
  display: flex;
  flex-direction: column;
  row-gap: 0.5rem;
}

@media screen and (min-width: 768px) {
  .item__id {
    left: -10px;
    width: 2rem;
    height: 2rem;
    font-size: 1rem;
  }
  .item__title {
    font-size: 1.5rem;
    line-height: 1.5;
  }
  .item__body {
    font-size: 1.2rem;
    line-height: 1.2;
  }
}
</style>
