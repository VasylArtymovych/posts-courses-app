import { computed, reactive } from "vue";
import { IFormFieldValue } from "@/types/formTypes";
import { useField } from "@/hooks/field";

export const useForm = <T extends object>(init: T) => {
  const form: Record<
    PropertyKey,
    any
    // ReturnType<typeof useField> | ComputedRef<boolean>
  > = reactive({});
  const formValidKey = "valid";

  Object.entries(init).forEach(([key, value]) => {
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
