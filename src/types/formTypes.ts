import type { ComputedRef } from "vue";
import { useField } from "@/hooks/field";

export interface IValidators {
  [ket: string]: (val: string | number) => boolean;
}

export interface IFormFieldValue {
  value: string | number;
  validators: IValidators;
}

export interface IInitFormParam {
  [key: string]: IFormFieldValue;
}

export interface IErrors {
  [key: string]: boolean;
}

// export interface IFieldValue {
//   value: string | number;
//   valid: boolean;
//   errors: IErrors;
//   touched: boolean;
//   blur: () => void;
// }

export interface IForm {
  [key: string]: ReturnType<typeof useField>;
}

export type IFormWithValidKey = { valid?: ComputedRef<boolean> } & IForm;
