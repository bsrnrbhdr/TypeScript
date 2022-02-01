//classes are reference types like arrays
class Animal {
  _age: number;
  _name: string;

  constructor(age: number, name: string) {
    this._age = age;
    this._name = name;
  }

  eat() {
    console.log(this._name + " ate it's food");
  }

}

let cat = new Animal(12, "meow");
cat.eat();
console.log(cat._age);
