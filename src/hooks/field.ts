import { reactive, ref, watch } from "vue";
import { IFormFieldValue, Errors } from "@/types/formTypes";

export const useField = (field: IFormFieldValue) => {
  const value = ref(field.value);
  const valid = ref(true);
  const errors = reactive<Errors>({});
  const touched = ref(false);

  const not = (val: boolean): boolean => !val;
  const blur = () => {
    touched.value = true;
  };

  const checkValiOfValue = (val: string | number) => {
    valid.value = true;
    Object.keys(field.validators).forEach((validator: string) => {
      const isValid = field.validators[validator](val);
      if (not(isValid)) {
        valid.value = false;
      }
      errors[validator] = not(isValid);
    });
  };

  checkValiOfValue(field.value);

  watch(value, checkValiOfValue);

  return { value, valid, touched, errors, blur };
};
