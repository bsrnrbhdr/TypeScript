class Person {
  saveToDB() {
    console.log("saved");
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
let customer = new Customer()
customer.saveToDB();
customer.sell();

let worker = new Workers();
worker.saveToDB();
worker.salary();
