// Overloading
// 1. 여러개의 Call Signatures를 가지고 있는 함수를 의미함.

type Add2 = {
  (a: number, b: number): number;
  (a: number, b: string): number;
};

const add2: Add2 = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

// ############################################################
// Overloading 활용 예

type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

// ############################################################
// 수가 다른 파라미터를 가진 Overloading

type Add3 = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const add3: Add3 = (a, b, c?) => {
  if (c) return a + b + c;
  return a + b;
};

add3(1, 2);
add3(1, 2, 3);
