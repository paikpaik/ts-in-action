// Polymorphism(다형성)
// 1. Polymorphism

type SuperPrint = {
  (a: number[]): void;
  (a: boolean[]): void;
  (a: string[]): void;
  (a: (number | boolean)[]): void;
};

const superPrint: SuperPrint = (a) => {
  a.forEach((i) => console.log(i));
};

superPrint([1, 2, 3, 4]);
superPrint([true, false, true]);
superPrint(["1", "2", "3", "4"]);
superPrint([1, 2, true, false]);

// ############################################################
// 2. Generic

type SuperPrintT = {
  <T>(a: T[]): void;
};
type SuperPrintG = {
  <T>(a: T[]): T;
};
type SuperPrintGV = {
  <T, V>(a: T[], b: V): T;
};

const superPrintT: SuperPrintT = (a) => {
  a.forEach((i) => console.log(i));
};
const superPrintG: SuperPrintG = (a) => a[0];
const superPrintGV: SuperPrintGV = (a) => a[0];

superPrintT([1, 2, 3, 4]);
superPrintT([true, false, true]);
superPrintT(["1", "2", "3", "4"]);
superPrintT([1, 2, true, false]);

const a = superPrintG([1, 2, 3, 4]); // a: number
const b = superPrintG([true, false, true]); // b: boolean
const c = superPrintG(["1", "2", "3", "4"]); // c: string
const d = superPrintG([1, 2, true, false]); // d: number | boolean

const a1 = superPrintGV([1, 2, 3, 4], "1"); // a: number
const b1 = superPrintGV([true, false, true], 1); // b: boolean
const c1 = superPrintGV(["1", "2", "3", "4"], true); // c: string
const d1 = superPrintGV([1, 2, true, false], []); // d: number | boolean
