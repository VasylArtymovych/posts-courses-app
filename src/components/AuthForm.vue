<template>
  <form class="form">
    <div class="controls-container">
      <label for="" class="form__label"></label>
      <custom-input
        v-focus
        type="email"
        class="form__input"
        v-model="form.email.value"
        @blur="form.email.blur"
      ></custom-input>
    </div>

    <div class="controls-container">
      <label for="" class="form__label"></label>
      <custom-input
        type="email"
        class="form__input"
        v-model="form.password.value"
        @blur="form.password.blur"
      ></custom-input>
    </div>
    <button class="submit-btn">SUBMIT</button>
    <pre>{{ form }}</pre>
  </form>
</template>

<script lang="ts">
export default {};
</script>
<script setup lang="ts">
import { required, minLength } from "@/utils/validators";
import { useForm } from "@/hooks/form";

const form = useForm({
  email: {
    value: "",
    validators: { required },
  },
  password: {
    value: "",
    validators: { required, minLength: minLength(7) },
  },
});
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

/**CompositionApi without setup */
<!-- 
<template>
  <form class="form">
    <div class="controls-container">
      <label for="" class="form__label"></label>
      <custom-input
        v-focus
        type="email"
        class="form__input"
        v-model="form.email.value"
        @blur="form.email.blur"
      ></custom-input>
    </div>

    <div class="controls-container">
      <label for="" class="form__label"></label>
      <custom-input
        type="email"
        class="form__input"
        v-model="form.password.value"
        @blur="form.password.blur"
      ></custom-input>
    </div>
    <button class="submit-btn">SUBMIT</button>
    <pre>{{ form }}</pre>
  </form>
</template>

<script>
import { required, minLength } from "@/utils/validators";
import { useForm } from "@/hooks/form";

export default {
  setup() {
    const form = useForm({
      email: {
        value: "",
        validators: { required },
      },
      password: {
        value: "",
        validators: { required, minLength: minLength(7) },
      },
    });

    return { form };
  },
};
</script> -->
