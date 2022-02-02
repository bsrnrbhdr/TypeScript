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
var LivingThings = /** @class */ (function () {
    function LivingThings(name) {
        this._name = name;
    }
    LivingThings.prototype.nutrition = function () { };
    ;
    return LivingThings;
}());
var Plants = /** @class */ (function (_super) {
    __extends(Plants, _super);
    function Plants(name) {
        return _super.call(this, name) || this;
    }
    Plants.prototype.nutrition = function () {
        console.log("Do photosynthesis");
    };
    Plants.prototype.breath = function () {
        console.log(" use stomata and lenticels");
    };
    Plants.prototype.move = function () {
        console.log("response to light");
    };
    return Plants;
}(LivingThings));
var Animal = /** @class */ (function (_super) {
    __extends(Animal, _super);
    function Animal(name) {
        return _super.call(this, name) || this;
    }
    Animal.prototype.nutrition = function () {
        console.log("eat");
    };
    Animal.prototype.breath = function () {
        console.log("breath");
    };
    Animal.prototype.move = function () {
        console.log("run or fly");
    };
    return Animal;
}(LivingThings));
var animal = new Animal("cat");
animal.move();
var creature;
creature = new Plants("lily");
creature.breath();
