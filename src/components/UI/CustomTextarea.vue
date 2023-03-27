<template>
  <textarea
    :value="modelValue"
    ref="textAreaRef"
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
import { useSetTextareaHeight } from "@/hooks/textareaHeight";

interface TextareaProps {
  modelValue: string;
}
const { textAreaRef, changeTextareaHeight } = useSetTextareaHeight();

defineProps<TextareaProps>();
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();

const updateValue = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLTextAreaElement).value);
  changeTextareaHeight();
};
</script>

<style lang="css" scoped>
.invalid {
  border: 1px solid red;
}
</style>
