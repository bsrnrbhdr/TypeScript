//classes are reference types like arrays
var Animal = /** @class */ (function () {
    function Animal(age, name) {
        this._age = age;
        this._name = name;
    }
    Animal.prototype.eat = function () {
        console.log(this._name + " ate it's food");
    };
    return Animal;
}());
var cat = new Animal(12, "meow");
cat.eat();
console.log(cat._age);
