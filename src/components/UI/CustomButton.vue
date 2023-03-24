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
  border: 1px solid rgb(45, 11, 96);
  border-radius: 7px;
  color: rgb(45, 11, 96);
  cursor: pointer;
  -webkit-box-shadow: 0 3px 0 0 rgb(45, 11, 96);
  -moz-box-shadow: 0 3px 0 0 rgb(45, 11, 96);
  box-shadow: 0 3px 0 0 rgb(45, 11, 96);
  transition: box-shadow 350ms;
}
.btn:hover {
  -webkit-box-shadow: 0 0px 0 0 teal;
  -moz-box-shadow: 0 0px 0 0 teal;
  box-shadow: 0 0px 0 0 teal;
  top: 3px;
  transform: rotateX(5deg) rotateY(10deg) rotateZ(0.5deg);
  background: linear-gradient(180deg, rgb(184, 122, 16), rgb(185, 178, 145));
}
.btn:active {
  -webkit-box-shadow: inset 0 0px 4px 2px teal;
  -moz-box-shadow: inset 0 0px 4px 2px teal;
  box-shadow: inset 0 0px 4px 2px teal;
}
.btn-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 1rem;
  font-size: 0.4rem;
  font-weight: 700;
  background: linear-gradient(90deg, rgb(185, 178, 145), rgb(184, 122, 16));
}
@media screen and (min-width: 768px) {
  .btn-layout {
    width: 4rem;
    height: 2rem;
    font-size: 0.8rem;
    font-weight: 700;
    background: linear-gradient(90deg, rgb(185, 178, 145), rgb(184, 122, 16));
  }
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
