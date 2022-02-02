var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this._name = name;
    }
    Person.prototype.saveToDB = function () {
        console.log("saved");
    };
    Object.defineProperty(Person.prototype, "Name", {
        get: function () {
            return "hello" + this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: false,
        configurable: true
    });
    return Person;
}());
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.sell = function () {
        console.log("buy");
    };
    return Customer;
}(Person));
var Workers = /** @class */ (function (_super) {
    __extends(Workers, _super);
    function Workers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Workers.prototype.salary = function () {
        console.log("salary");
    };
    return Workers;
}(Person));
var customer = new Customer("customer");
customer.saveToDB();
customer.sell();
var worker = new Workers("worker");
worker.saveToDB();
worker.salary();
worker.Name = "new name";
console.log(worker.Name);
