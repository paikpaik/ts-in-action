// Polymorphism, Generic, Interface를 활용한 LocalStorage

interface SStorage<T> {
  [key: string]: T;
}

class LocalStorage<T> {
  private storage: SStorage<T> = {};
  set(key: string, value: T) {
    this.storage[key] = value;
  }
  remove(key: string) {
    delete this.storage[key];
  }
  get(key: string): T {
    return this.storage[key];
  }
  clear() {
    this.storage = {};
  }
}

const stringsStorage = new LocalStorage<string>();
const booleansStorage = new LocalStorage<boolean>();

stringsStorage.get("key");
stringsStorage.set("key", "value");

booleansStorage.get("key");
booleansStorage.set("key", true);
