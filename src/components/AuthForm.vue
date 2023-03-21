<template>
  <form class="form">
    <div class="controls-container">
      <label for="" class="form__label"></label>
      <input type="email" class="form__input" />
    </div>
    <div class="controls-container">
      <label for="" class="form__label"></label>
      <input type="password" class="form__input" />
    </div>
    <button class="submit-btn">SUBMIT</button>
  </form>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="css">
.form {
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  width: 35rem;
  padding: 1.25rem;
  background-color: rgb(38, 115, 115);
  border-radius: 0.5rem;
}
.controls-container {
}
.form__label {
}
.form__input {
  width: 100%;
  height: 2.5rem;
  font-size: 18px;
}
.submit-btn {
  width: 30%;
  height: 2.5rem;
  align-self: flex-end;
  border-radius: 0.5rem;
}
</style>
