<template>
  <textarea
    :value="modelValue"
    @input="updateValue"
    class="textarea"
  ></textarea>
</template>

<script lang="ts">
export default {
  name: "custom-textarea",
};
</script>
<script setup lang="ts">
interface TextareaProps {
  modelValue: string;
}

defineProps<TextareaProps>();

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLTextAreaElement).value);
};
</script>

<style lang="css" scoped>
.invalid {
  border: 1px solid red;
}
</style>
