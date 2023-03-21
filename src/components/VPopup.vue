<template>
  <div class="popup">
    <div class="popup__header">
      <span>Popup name</span>
      <span>
        <i class="material-icons">close</i>
      </span>
    </div>
    <div class="popup__container">
      <slot></slot>
    </div>
    <div class="popup__footer">
      <button>close</button>
      <button>add to cart</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style lang="css">
.popup {
  padding: 1rem;
}
.popup__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.popup__content {
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup__footer {
}
.material-icons {
  font-size: 18px;
}
</style>
