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
    <styled-link-button>SUBMIT</styled-link-button>
    <pre>{{ form }}</pre>
  </form>
</template>

<script lang="ts">
export default {};
</script>
<script setup lang="ts">
import { required, minLength } from "@/utils/validators";
import { useForm } from "@/hooks/form";
import StyledLinkButton from "./UI/StyledLinkButton.vue";

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
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  width: 35rem;
  padding: 1.25rem;
  background-color: rgb(38, 115, 115);
  border-radius: 0.5rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-right: 1px solid rgba(255, 255, 255, 0.1);
}
.form::before {
  content: "";
  position: absolute;
  inset: -5px;
  z-index: -1;
  transform: translate(7px, 5px);
  background: linear-gradient(
    45deg,
    rgb(79, 79, 188),
    #b39b19,
    rgb(79, 79, 188),
    rgb(17, 17, 50),
    #706420,
    rgb(79, 79, 188)
  );
  filter: blur(5px);
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
