function save(product) {
    console.log(product._name + " saved");
}
save({ _id: 5, _name: "green tea", _price: 5 });
var Bevarages = /** @class */ (function () {
    function Bevarages(id, name, price) {
        this._id = id;
        this._name = name;
        this._price = price;
    }
    return Bevarages;
}());
var product = new Bevarages(1, "milk", 5);
save(product);
