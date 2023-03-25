<template>
  <input
    :type="props.type"
    :value="props.modelValue"
    @input="updateInputValue"
  />
</template>

<script lang="ts">
export default {
  name: "custom-input",
};
</script>

<script setup lang="ts">
interface IProps {
  type?: string;
  modelValue: string | number;
}
const emit = defineEmits<{
  (e: "update:modelValue", value: string | number): void;
}>();

const props = withDefaults(defineProps<IProps>(), {
  type: "text",
});

const updateInputValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<style lang=""></style>

/**compositionApi without setup */
<!-- <template>
  <input :type="type" :value="modelValue" @input="changeInputValue" />
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "custom-input",
  emits: ["update:modelValue"],
  props: {
    type: { type: String, default: "text" },
    modelValue: [String, Number],
  },

  setup(porps, { emit }) {
    const changeInputValue = (event: Event) => {
      emit("update:modelValue", (event.target as HTMLInputElement).value);
    };

    return { changeInputValue };
  },
});
</script>

<style scoped></style> -->
