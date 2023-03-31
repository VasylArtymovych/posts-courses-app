// const testFunc = <T>(arr: T[]): T | undefined => {
//   return arr[0];
// };

// const val = testFunc([{ name: "vas" }]);
// const val2 = testFunc(["a"]);

// const longest = <T extends { length: number }>(a: T, b: T): T => {
//   if (a.length > b.length) return a;
//   return b;
// };

// const longArr = longest(["a", "b"], []);
// // const longNum = longest(10, 7); //Argument of type 'number' is not assignable to parameter of type '{ length: number; }

// const combine = <T>(arr1: T[], arr2: T[]) => {
//   return arr1.concat(arr2);
// };

// const arrComb = combine<string | number>([1, 2, 3], ["string"]);

// function forEach<T>(arr: T[], calback: (el: T, i: number, arr: T[]) => void) {
//   for (let i = 0; i < arr.length; i++) {
//     calback(arr[i], i, arr);
//   }
// }

// const arr = [1, 3, "str"];
// forEach(arr, (a) => {
//   console.log(a);
// });

// // Function Overloads
// function makeDate(timestamp: number): Date;
// function makeDate(timestamp: number, d: number): Date;
// function makeDate(m: number, d: number, y: number): Date;
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
//   if (d !== undefined && y !== undefined) {
//     return new Date(y, mOrTimestamp, d);
//   } else {
//     return new Date(mOrTimestamp);
//   }
// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5);
// const d3 = makeDate(1, 3);
