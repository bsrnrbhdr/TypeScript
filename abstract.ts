abstract class LivingThings {
  _name: string;
  constructor(name: string) {
    this._name = name;
  }
  nutrition(): void { };
  abstract breath(): void;
  abstract move(): void;
}

class Plants extends LivingThings {
  constructor(name: string) {
    super(name);
  }
  nutrition() {
    console.log("Do photosynthesis");
  }
  breath() {
    console.log(" use stomata and lenticels");
  }
  move() {
    console.log("response to light");

  }
}

class Animal extends LivingThings{
  constructor(name:string){
    super(name);
  }
  nutrition(){
    console.log("eat");
  }
  breath(){
    console.log("breath");
  }
  move(){
    console.log("run or fly");
  }
}
let animal = new Animal("cat");
animal.move();

let creature: LivingThings
creature = new Plants("lily");
creature.breath();
