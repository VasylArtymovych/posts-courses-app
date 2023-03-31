<template>
  <div class="home">
    Home
    <h2>{{ test.count }}</h2>
    <button @click="test.count++">+</button>
    <button @click="replace">replace</button>
  </div>
</template>

<script setup lang="ts">
import { reactive } from "vue";

let test = reactive({ count: 0 });

const replace = () => {
  test = reactive({ count: 7 });
};
</script>

<!-- <script lang="ts">
export default {
  name: "HomeView",
};
</script> -->

<style scoped>
.home {
  min-height: 100%;
  /* display: flex;
  justify-content: center;
  align-items: center; */
  padding: 60px 20px 0;
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
