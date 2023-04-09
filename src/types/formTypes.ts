// import type { ComputedRef } from "vue";
// import { useField } from "@/hooks/field";

// export type TValidators<T> = {
//   [P in keyof T]: (val: string | number) => boolean;
// };

export type TValidators = Record<string, (val: string | number) => boolean>;

export interface IFormFieldValue {
  value: string;
  validators: TValidators;
}

export interface IInitFormParam {
  [key: string]: IFormFieldValue;
}

export type Errors = {
  [key in keyof TValidators]: boolean;
};

export interface IErrors {
  [key: string]: boolean;
}
