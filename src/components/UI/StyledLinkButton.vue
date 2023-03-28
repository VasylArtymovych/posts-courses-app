<template>
  <div class="btn-wrraper">
    <button class="btn" v-bind="$attrs" :disabled="disabled">
      <slot></slot>
    </button>
  </div>
</template>

<script lang="ts">
export default {
  name: "styled-link-button",
  inheritAttrs: false,
};
</script>

<script setup lang="ts">
interface IProps {
  firstColor?: string;
  secondColor?: string;
  disabled?: boolean;
}
withDefaults(defineProps<IProps>(), {
  firstColor: "#0906c7",
  secondColor: "#ff0",
});
</script>

<style lang="css" scoped>
.btn-wrraper {
  position: relative;
  top: 0;
  left: 0;
  width: 4rem;
  height: 25px;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.7rem;
}

.btn {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-weight: 400px;
  letter-spacing: 1px;
  text-decoration: none;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.05);
  box-shadow: 0 15px 10px rgba(0, 0, 0, 0.3);
  border-left: none;
  border-right: none;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  /* outline: none; */
  color: #fff;
  z-index: 1;
  transition: 0.5s;
  -webkit-backdrop-filter: blur(15px);
  backdrop-filter: blur(15px);
}

.btn-wrraper:hover .btn {
  letter-spacing: 3px;
  /* color: #fff; */
}

.btn::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background: linear-gradient(to left, rgba(255, 255, 255, 0.15), transparent);
  transform: skewX(45deg) translate(0);
  transition: 0.5s;
  filter: blur(0px);
}

.btn-wrraper:hover .btn::before {
  transform: skewX(45deg) translate(200px);
}

.btn-wrraper::before {
  content: "";
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  bottom: -5px;
  width: 30px;
  height: 10px;
  background: v-bind(secondColor);
  box-shadow: 0 0 5px, 0 0 15px v-bind(secondColor),
    0 0 30px v-bind(secondColor), 0 0 60px v-bind(secondColor);
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0.5;
}

.btn-wrraper:hover::before /*lightup button*/ {
  bottom: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
}

.btn-wrraper::after {
  content: "";
  position: absolute;
  left: 50%;
  transform: translatex(-50%);
  top: -5px;
  width: 30px;
  height: 10px;
  background: v-bind(firstColor);
  box-shadow: 0 0 5px v-bind(firstColor), 0 0 15px v-bind(firstColor),
    0 0 30px v-bind(firstColor), 0 0 60px v-bind(firstColor);
  border-radius: 10px;
  transition: 0.5s;
  transition-delay: 0.5;
}

.btn-wrraper:hover::after /*lightup button*/ {
  top: 0;
  height: 50%;
  width: 80%;
  border-radius: 30px;
}

@media screen and (min-width: 768px) {
  .btn-wrraper {
    width: 6rem;
    height: 35px;
    font-size: 1rem;
  }
}
</style>
