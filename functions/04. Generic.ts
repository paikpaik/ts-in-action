// Generic Conclusions(결론)
// 1. 다형성을 가진 generic call signatures를 function으로 한번에 표현 가능

function genericPrint<T>(a: T[]) {
  return a[0];
}

const a2 = genericPrint([1, 2, 3, 4]);
const b2 = genericPrint([true, false, true]);
const c2 = genericPrint(["1", "2", "3", "4"]);
const d2 = genericPrint([1, 2, true, false]);

// ############################################################
// 2. Generic 활용

type User<E> = {
  name: string;
  extraInfo: E;
};

type PaikpaikExtra = {
  favFood: string;
};

type PaikpaikUser = User<PaikpaikExtra>;

const paikpaik: PaikpaikUser = {
  name: "paikpaik",
  extraInfo: {
    favFood: "chicken",
  },
};

const tom: User<null> = {
  name: "tom",
  extraInfo: null,
};

type A = Array<number>;
let num: A = [1, 2, 3, 4];

function printAllNumbers(arr: Array<number>) {}
