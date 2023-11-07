// 사전 해시맵
// 1. 클래스를 타입처럼 사용할 수 있음.

type Words = {
  [key: string]: string;
};

class Dict {
  private words: Words;
  constructor() {
    this.words = {};
  }
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }
  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public readonly term: string, public readonly def: string) {}
}

const pizza = new Word("pizza", "이탈리아 음식");
const dict = new Dict();

dict.add(pizza);
console.log(dict.def("pizza")); // 이탈리아 음식
