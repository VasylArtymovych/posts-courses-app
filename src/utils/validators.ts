export const required = (val: string): boolean => !!val;
export const minLength =
  (num: number) =>
  (val: string): boolean =>
    val.length >= num;
