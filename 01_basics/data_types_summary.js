//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null  //object
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Namkha", "Gyatso", "Lama"];
let myObj = {
    name: "hitesh",
    age: 22,
}
const myFunction = function(){
    console.log("Hello world"); //function as variable //object function
}

console.log(typeof anotherId);