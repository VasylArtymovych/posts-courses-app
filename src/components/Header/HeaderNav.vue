<template>
  <nav class="nav">
    <styled-link-button
      v-if="route.path !== '/'"
      type="button"
      @click="
        () => {
          navigateTo('/');
        }
      "
      firstColor="#ff1f71"
      secondColor="#ff1f71"
      >Home</styled-link-button
    >
    <styled-link-button
      v-if="route.path !== '/posts'"
      type="button"
      @click="
        () => {
          navigateTo('/posts');
        }
      "
      >Posts</styled-link-button
    >
    <styled-link-button
      v-if="route.path !== '/courses'"
      type="button"
      @click="
        () => {
          navigateTo('/courses');
        }
      "
      >Courses</styled-link-button
    >
  </nav>
</template>

<script lang="ts">
export default {};
</script>

<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";

// import { ref } from "vue";
// const path = ref(window.location.pathname);
const route = useRoute();
const router = useRouter();

const navigateTo = (path: string) => {
  router.push(path);
};
</script>
<style lang="css">
.nav {
  height: 100%;
  display: flex;
  align-items: center;
  gap: 7px;
}

.nav__link {
  width: 2rem;
  height: 50%;
}
</style>
