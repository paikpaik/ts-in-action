// Interfaces
// 1. type과 interface는 거의 유사하다.
// 2. type은 좀 더 확장성이 높다.(기능이 interface보다 다양함)
// 3. type alias도 가능

type Id = number;
type Title = string;
type Boards = Array<string>;
type Post = {
  id: Id;
  title: Title;
};
const tpost: Post = {
  id: 1,
  title: "티스토리",
};
type Food = string;
const bibimbab: Food = "delicious";

// 4. type은 Enum처럼 활용할 수도 있음.
type Category = "할일" | "공지" | "잡담";
type Post1 = {
  id: Id;
  title: Title;
  category: Category;
};
const tpost1: Post1 = {
  id: 2,
  title: "티스토리",
  category: "할일", // 3가지중 하나가 아니면 에러
};

// 5. Interface는 오직 객체의 모양을 ts에게 설명해주기 위한
//    용도로만 사용됨.
//    그럼 type을 쓰지 왜 interface를 쓰냐?
//    OOP를 한다면 inferface가 더 직관적이고 class와 어울릴거라고 생각함.

// 6. Interface는 상속이 가능함.
//    type은 상속이 아니라 &와 등호로 묶어주는게 가능

interface Book {
  name: string;
}
interface ITBook extends Book {}
const cleanArchitecture: ITBook = {
  name: "clean_architecture",
};

type Book1 = {
  name: string;
};
type ITBook1 = Book1 & {};
const cleanArchitecture1: ITBook1 = {
  name: "clean_architecture",
};

// 7. Interface는 property 축적이 가능함. type은 불가능

interface Property {
  name: string;
}
interface Property {
  id: number;
}
interface Property {
  nick: string;
}

const property: Property = {
  name: "property",
  id: 1,
  nick: "prop",
};

// 8. 추상 클래스와 interface의 차이는 interface는 컴파일되면
//    사라지기 때문에 매우 가볍다

interface Product {
  firstName: string;
  lastName: string;
  sayHi(name: string): string;
  fullName(): string;
}

interface Stock {
  quantity: number;
}

class Amazon implements Product, Stock {
  constructor(
    public firstName: string,
    public lastName: string,
    public quantity: number
  ) {}
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name}. My name is ${this.fullName()}`;
  }
}

// 9. interface는 타입으로 지정이 가능하다.

function makeProduct(product: Product): Product {
  return {
    firstName: "bibim",
    lastName: "bab",
    fullName: () => "bibimbab",
    sayHi: (name) => "string",
  };
}

makeProduct({
  firstName: "bibim",
  lastName: "bab",
  fullName: () => "bibimbab",
  sayHi: (name) => "string",
});
