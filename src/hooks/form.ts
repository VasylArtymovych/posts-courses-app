import { computed, reactive } from "vue";
import { IFormFieldValue, IFormWithValidKey } from "@/types/formTypes";
import { useField } from "@/hooks/field";

export const useForm = <T extends object>(init: T) => {
  const form: IFormWithValidKey = reactive({});
  const formValidKey = "valid";

  Object.entries(init).forEach(([key, value]: [string, IFormFieldValue]) => {
    form[key] = useField(value);
  });

  form[formValidKey] = computed(() => {
    let res = true;
    Object.keys(form)
      .filter((key) => key !== formValidKey)
      .forEach((key) => {
        if (!form[key].valid) {
          res = false;
        }
      });
    return res;
  });

  return form;
};
