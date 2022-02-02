interface Product {
  _id: number;
  _name: string;
  _price: number;

}
function save(product: Product) {
  console.log(product._name + " saved");
}
save({ _id: 5, _name: "green tea", _price: 5 });

class Bevarages implements Product {
  _id: number;
  _name: string;
  _price: number;
  constructor(id: number, name: string, price: number) {
    this._id = id;
    this._name = name;
    this._price = price;
  }
}

let product = new Bevarages(1, "milk", 5);
save(product);
