function data(x) {
    return x;
}
var GenericClass = /** @class */ (function () {
    function GenericClass() {
    }
    GenericClass.prototype["function"] = function (params) {
        return params;
    };
    return GenericClass;
}());
var obj = new GenericClass();
console.log(obj["function"](3));
