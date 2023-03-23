import { DirectiveBinding, ObjectDirective } from "vue";

type ClickOutsideDirective = ObjectDirective & { name: string };
//directive is active when click event fires outside the el:
export default <ClickOutsideDirective>{
  name: "click-outside",

  mounted(el, binding: DirectiveBinding) {
    el.clickOutside = function (event: Event) {
      if (!(el === event.target || el.contains(event.target))) {
        binding.value(event);
      }
    };

    document.body.addEventListener("click", el.clickOutside);
  },

  unmounted(el) {
    document.body.removeEventListener("click", el.clickOutside);
  },
};
