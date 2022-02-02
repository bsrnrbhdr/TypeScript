function data<T>(x: T): T {
  return x;
}

class GenericClass<T>{
  value: T;
  function(params: T): T {
    return params;
  }
}
let obj = new GenericClass<number>();
console.log(obj.function(3));
