<template>
  <button :type="props.type" :disabled="props.disabled" class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {
  name: "custom-button",
};
</script>

<script setup lang="ts">
interface IProps {
  type?: "submit" | "button" | "reset" | undefined;
  disabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  type: "submit",
  disabled: false,
});
</script>

<style lang="css" scoped>
.btn {
  position: relative;
  top: 0;
  left: 0;
  padding: 10px;
  border: 1px solid teal;
  border-radius: 7px;
  color: teal;
  cursor: pointer;
  -webkit-box-shadow: 0 3px 0 0 teal;
  -moz-box-shadow: 0 3px 0 0 teal;
  box-shadow: 0 3px 0 0 teal;
  transition: box-shadow 350ms;
}
.btn:hover {
  -webkit-box-shadow: 0 0px 0 0 teal;
  -moz-box-shadow: 0 0px 0 0 teal;
  box-shadow: 0 0px 0 0 teal;
  top: 3px;
  transform: rotateX(5deg) rotateY(10deg) rotateZ(0.5deg);
}
.btn:active {
  -webkit-box-shadow: inset 0 0px 4px 2px teal;
  -moz-box-shadow: inset 0 0px 4px 2px teal;
  box-shadow: inset 0 0px 4px 2px teal;
}
</style>

/**CompositionApi without setup */
<!-- <template>
  <button :type="type" :disabled="disabled" class="btn">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { PropType } from "vue";

type BtnType = "submit" | "button" | "reset" | undefined;
export default defineComponent({
  name: "custom-button",
  props: {
    type: {
      type: String as PropType<BtnType>,
    },
    disabled: Boolean,
  },

  setup() {
    return {};
  },
});
</script> -->
