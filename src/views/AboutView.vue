<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>mouse position is: {{ x }}, {{ y }}</h1>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
const x = ref(0);
const y = ref(0);

const update = (event) => {
  x.value = event.pageX;
  y.value = event.pageY;
};

onMounted(() => window.addEventListener("mousemove", update));
onUnmounted(() => {
  window.addEventListener("mousemove", update);
});
</script>
