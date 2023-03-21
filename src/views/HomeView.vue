<template>
  <button class="btn" @click="isPopupVisible = true">show Popup</button>
  <div class="home">
    <AuthForm />
    <VPopaup v-if="isPopupVisible" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AuthForm from "@/components/AuthForm.vue";
import VPopaup from "@/components/VPopup.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    AuthForm,
    VPopaup,
  },

  setup() {
    const isPopupVisible = ref(false);

    return { isPopupVisible };
  },
});
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
}

.btn {
  width: 150px;
  height: 35px;
}
</style>
