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
.main-container {
  height: 100%;
}
</style>
