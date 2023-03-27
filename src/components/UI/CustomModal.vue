<template>
  <div v-if="isShown" class="modal__backdrop" @click.self.stop="closeModal">
    <div class="modal__container">
      <h3 class="modal__header">
        <slot name="header">Default header</slot>
      </h3>

      <div class="modal__body">
        <slot>Default body</slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "custom-modal",
};
</script>
<script setup lang="ts">
interface IProps {
  isShown: boolean;
  closeModal: () => void;
}
withDefaults(defineProps<IProps>(), {
  isShown: false,
});
</script>

<style lang="css" scoped>
.modal__backdrop {
  display: flex;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  background: rgba(0, 0, 0, 0.4);
}
.modal__container {
  min-width: 10rem;
  min-height: 15rem;
  padding: 1rem;
  margin: auto;
  background: linear-gradient(
    360deg,
    var(--light-blue-color),
    var(--whitesmoke-color),
    var(--light-blue-color)
  );

  border-radius: 1rem;
  border: 1px solid var(--dark-purpule-color);
  box-shadow: 0 0 0 1px var(--light-blue-color),
    0 0 0 2px var(--dark-purpule-color);
}

.modal__header {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--dark-purpule-color);
  text-shadow: -1px 0 var(--whitesmoke-color), 0 1px var(--whitesmoke-color),
    1px 0 var(--whitesmoke-color), 0 -1px var(--whitesmoke-color);
}

.modal__body {
  border-radius: var(--sm-radius);
  border: 1px solid var(--dark-purpule-color);
  box-shadow: 0 0 0 1px var(--light-blue-color),
    0 0 0 2px var(--dark-purpule-color);
}

@media screen and (min-width: 768px) {
  .modal__header {
    font-size: 1.5rem;
  }
}
</style>
