// 1. private, public
// 2. abstract class
// 3. abstract class 안에서는 abstract method도 생성이 가능.
//    구현하지말고 call signatures만 적어야 됨.
// 3.1. abstract method는 abstract class를 상속받는 모든 것들이 구현을
//      해야하는 method를 의미함.
// 4. protected
// 4.1. private로 설정되어 있다면 상속을 받을지라도 구현이 불가능함. 따라서
//      protected를 쓰는것이 좋다.

abstract class User1 {
  constructor(
    private firstName: string,
    protected lastName: string,
    public nickName: string
  ) {}
  abstract getNickName(): void;
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Person extends User1 {
  getNickName() {
    console.log(this.lastName);
  }
}

const harry = new Person("harry", "james", "potter");
