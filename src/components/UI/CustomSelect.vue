<template>
  <div class="select-wrapper">
    <label for="sortSelect" class="select-label">SORT POSTS</label>
    <select
      id="sortSelect"
      name="sort-options"
      @change="changeOption"
      class="select"
    >
      <option value="" selected disabled class="select__option">
        Select otion
      </option>
      <option
        v-for="opt in options"
        :key="opt.value"
        :value="opt.value"
        class="select__option"
      >
        {{ opt.name }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
export default {
  name: "custom-select",
};
</script>

<script setup lang="ts">
interface ISortOption {
  value: string;
  name: string;
}
interface IProps {
  modelValue: string;
  options: Array<ISortOption>;
}

withDefaults(defineProps<IProps>(), {
  options: () => [],
});
const emit = defineEmits(["update:modelValue"]);

const changeOption = (e: Event) => {
  emit("update:modelValue", (e.target as HTMLSelectElement).value);
};
</script>

<style lang="css" scoped>
.select-wrapper {
  display: flex;
  flex-direction: column;
  width: 6rem;
}
.select-label {
  font-family: sans-serif;
  font-size: 0.6rem;
  font-weight: 700;
  background: linear-gradient(90deg, white, var(--pink-color));
  background-clip: text;
  color: transparent;
}
.select {
  width: 100%;
  height: 20px;
  display: flex;
  justify-content: center;
  border: 1px solid var(--dark-purpule-color);
  border-radius: 5px;
  outline: none;
  background: var(--btn-bgr);
  color: var(--dark-purpule-color);
}
.select__option {
  display: flex;
  justify-content: center;
}
</style>
