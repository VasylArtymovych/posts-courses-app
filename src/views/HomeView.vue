<template>
  <div class="home">Home</div>
</template>

<script setup lang="ts"></script>

<!-- <script lang="ts">
export default {
  name: "HomeView",
};
</script> -->

<style scoped>
.home {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 0, 20px;
}
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<!-- <script lang="ts">
import { defineComponent } from "vue";
import AuthForm from "@/components/AuthForm.vue";
import MainHeader from "@/components/Header/MainHeader.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    MainHeader,
    AuthForm,
  },

  setup() {
    return {};
  },
});
</script> -->
