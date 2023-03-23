import { ObjectDirective } from "vue";

type FocusDirective = ObjectDirective & { name: string };

export default <FocusDirective>{
  name: "focus",

  mounted(el: HTMLInputElement) {
    el.focus();
  },
};
