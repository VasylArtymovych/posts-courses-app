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
:root {
  --main-bgr: linear-gradient(
    to bottom,
    var(--light-purpule-color),
    var(--ligth-orange-color),
    var(--light-purpule-color)
  );
  --btn-bgr: linear-gradient(
    90deg,
    var(--ligth-orange-color),
    var(--dark-orange-color)
  );
  --pink-color: #ff1f71;
  --yelow-color: #ff0;
  --blue-btn-color: #0906c7;
  --ligth-orange-color: rgb(185, 178, 145);
  --orange-color: rgb(255, 136, 0);
  --dark-orange-color: rgb(184, 122, 16);
  --dark-purpule-color: rgb(45, 11, 96);
  --light-purpule-color: rgb(98, 98, 160);
}

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
  min-height: 100vh;

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
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
