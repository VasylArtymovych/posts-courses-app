export interface IPostSortOptions {
  value: string;
  name: string;
}

export const postSortOptions: Array<IPostSortOptions> = [
  { value: "title", name: "sort by title" },
  { value: "body", name: "sort by text" },
];
