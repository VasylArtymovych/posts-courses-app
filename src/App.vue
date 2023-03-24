<template>
  <div class="main-container">
    <MainHeader />
    <router-view />
  </div>
</template>

<script setup lang="ts">
import MainHeader from "@/components/Header/MainHeader.vue";
</script>

<style>
html,
body {
  min-height: 100% !important;
  margin: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  background-image: linear-gradient(
    to bottom,
    rgb(98, 98, 160),
    rgb(154, 148, 124),
    rgb(84, 84, 119)
  );
}

.main-container {
  height: 100%;
}
</style>
