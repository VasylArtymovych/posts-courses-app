<template>
  <form class="form">
    <div class="controls-container">
      <label for="" class="form__label"></label>
      <custom-input
        v-focus
        v-model="form.title.value"
        type="text"
        placeholder="POST TITLE"
        @blur="form.title.blur"
        class="form__input"
        :class="{ invalid: !form.title.valid && form.title.touched }"
      ></custom-input>
      <p
        v-show="form.title.errors.required && form.title.touched"
        class="error"
      >
        Field is required
      </p>
      <p
        v-show="
          !form.title.errors.required &&
          form.title.errors.minLength &&
          form.title.touched
        "
        class="error"
      >
        Title length can't be less then 7.
      </p>
    </div>

    <div class="controls-container">
      <label for="" class="form__label"></label>
      <custom-textarea
        v-model="form.text.value"
        placeholder="POST TEXT"
        @blur="form.text.blur"
        class="form__textarea"
        :class="{ invalid: !form.text.valid && form.text.touched }"
      ></custom-textarea>
      <p v-if="form.text.errors.required && form.text.touched" class="error">
        Field is required
      </p>
      <p
        v-else-if="form.text.errors.minLength && form.text.touched"
        class="error"
      >
        Text length can't be less then 18.
      </p>
    </div>
    <styled-link-button :disabled="!form.valid" @click.prevent="onSubmit"
      >ADD</styled-link-button
    >
  </form>
</template>

<script setup lang="ts">
import { unref } from "vue";
import { required, minLength } from "@/utils/validators";
import { useForm } from "@/hooks/form";
import { IPost } from "@/types/postTypes";
import { postId } from "@/store/postId";

const emit = defineEmits<{
  (e: "addPost", value: IPost): void;
}>();

const form = useForm({
  title: {
    value: "",
    validators: { required, minLength: minLength(7) },
  },
  text: {
    value: "",
    validators: { required, minLength: minLength(18) },
  },
});

const onSubmit = () => {
  const id = postId.value;
  const post = {
    id,
    title: unref(form.title.value),
    body: unref(form.text.value),
  };
  emit("addPost", post);
  postId.value++;

  form.title.value = "";
  form.text.value = "";
};
</script>

<style lang="css" scoped>
.form {
  /* position: relative; */
  display: flex;
  flex-direction: column;
  row-gap: 1.25rem;
  width: 17.7rem;
  padding: 1rem;
  background: linear-gradient(
    90deg,
    var(--light-blue-color),
    var(--whitesmoke-color),
    var(--light-blue-color)
  );
  border-radius: var(--sm-radius);
}

.controls-container {
  width: 100%;
}

.form__input,
.form__textarea {
  width: 100%;
  height: 2rem;
  font-size: 12px;
  padding: 0 5px;
  outline: none;
  border: 1px solid var(--dark-purpule-color);
}

.form__textarea {
  height: 4rem;
  resize: none;
}

.error {
  font-family: "Times New Roman", Times, serif;
  font-size: 10px;
  color: red;
}

@media screen and (min-width: 768px) {
  .form {
    width: 25rem;
  }

  .form__input,
  .form__textarea {
    font-size: 18px;
    height: 2.5rem;
  }

  .error {
    font-family: "Times New Roman", Times, serif;
    font-size: 14px;
    color: red;
  }
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
