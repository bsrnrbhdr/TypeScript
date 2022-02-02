class Person {
  private _name:string;
  constructor(name:string){
    this._name = name;
  }
  saveToDB() {
    console.log("saved");
  }
  get Name():string{
    return "hello " + this._name;
  }
  set Name(name:string){
    this._name=name;
  }
}

class Customer extends Person {
  sell() {
    console.log("buy");
  }
}
class Workers extends Person {
  salary() {
    console.log("salary");
  }
}
let customer = new Customer("customer")
customer.saveToDB();
customer.sell();

let worker = new Workers("worker");
worker.saveToDB();
worker.salary();
worker.Name = "new name";
console.log(worker.Name);
