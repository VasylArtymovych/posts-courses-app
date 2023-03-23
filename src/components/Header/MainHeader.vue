<template>
  <div class="header">
    <div class="container">
      <span class="logo"><i class="material-icons">face</i> App</span>
      <HeaderNav />
      <!-- <slot></slot> -->
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>
<script setup lang="ts">
import HeaderNav from "@/components/Header/HeaderNav.vue";
</script>

<style lang="css">
.header {
  width: 100%;
  height: 40px;

  background: linear-gradient(
    to bottom,
    rgb(79, 79, 188) 20%,
    rgb(17, 17, 50) 100%
  );
  /* box-shadow: 0 2px 4px 2px rgb(79, 79, 188); */
  /* border-bottom: 1px solid rgb(6, 218, 229); */
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

@media screen and (min-width: 768px) {
  .header {
    height: 50px;
  }
}
</style>
