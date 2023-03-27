<template>
  <div class="header">
    <div class="header__container">
      <HeaderLogo>StudyApp</HeaderLogo>
      <HeaderNav />
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>
<script setup lang="ts">
import HeaderLogo from "@/components/Header/HeaderLogo.vue";
import HeaderNav from "@/components/Header/HeaderNav.vue";
</script>

<style lang="css" scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 50px;

  background: var(--dark-bgr);
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.header__container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
}

@media screen and (min-width: 768px) {
  .header {
    height: 60px;
  }
}
</style>
