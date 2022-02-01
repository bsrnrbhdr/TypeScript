function greetings(name:string){
  return "hello " + name;
}

let greet = greetings("busra");

console.log(greet);

let num:number
num = 10
num = 10.4

let city: string = "İzmir"
city = "Ankara"
city = "Istanbul"

let flag: boolean = false
flag = true

let numberArr: number[] = [1,2,3,4]
let numArr2: Array<number> = [1,2,3] // generic types

let tupleArr:[number,string] = [2,"Ankara"] //tuple array

//Pascal case
enum Color {
  Red = 1,
  Blue,
  Black,
}

let color:Color = Color.Red

//if we don't know the type of the data we get, we using any
let value: any = "Ankara"
value = 2
value = {}

//void
let data: void = undefined
function somefunction():void {
  console.log("its a void function");
}

//undefined null
let age:number;
age = 10

//reference null
class Customer{}
