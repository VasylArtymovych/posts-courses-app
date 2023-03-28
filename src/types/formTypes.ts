import type { ComputedRef } from "vue";
import { useField } from "@/hooks/field";

export interface IValidators {
  [ket: string]: (val: string | number) => boolean;
}

export interface IFormFieldValue {
  value: string;
  validators: IValidators;
}

export interface IInitFormParam {
  [key: string]: IFormFieldValue;
}

export type Errors = {
  [key in keyof IValidators]: boolean;
};

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
