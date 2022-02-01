function add(x, y) {
  return x + y;
}

function add2(x: number, y: number): number {
  return x + y;
}

//anonim function
let add3 = function(x: number, y: number): number {
  return x + y;
}

console.log(add(2, 3));
console.log(add("ankara", 2));
console.log(add2(3, 4));
console.log(add3(3, 4));

//optional or defult must be at the last
function add_with_default(x: number, y: number = 5) {
  return x + y;
}
console.log(add_with_default(2));

//NaN not a number
function add_with_undefined(x: number, y?: number) {
  //if y defined
  if (y) {
    return x + y;
  }
  return x;
}

console.log(add_with_undefined(3));


//Rest parameters
function invitation(person1: string, ...others: string[]): string {
  return person1 + " " + others.join(" ");
}
console.log(invitation("a", "b", "c"));

function invitation2(...others: string[]): string {
  return others.join(" ");
}
