let score = "33"

//console.log(typeof score)

let valueInNumber = Number(score)
// The Number() function attempts to convert its argument into a numeric value.
//If the argument cannot be converted to a valid number (e.g., non-numeric strings like "hitesh"), 
// the result is NaN (Not-a-Number).
//console.log(typeof valueInNumber) //number
// typeof score;             // "string"
// typeof valueInNumber;     // "number"
// valueInNumber;            // NaN

// "33" - 33
// "33abc" - NAN
// true - 1

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
//The Boolean() function converts a value into its corresponding boolean 
// representation (true or false) based on JavaScript's concept of "truthy" 
// and "falsy" values.
//console.log(booleanIsLoggedIn) is True because it is truthy value

// OPEARATIONS
// console.log(2+2)

// let str1 = "Hello"
// let str2 = " Namkha"
// let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)
// console.log(1 + "2")
// console.log("1" + "2")
// console.log("1" + 2 + 2)
// console.log(1 + 2 + "2")
// When one operand is a string and the other is a number, JavaScript 
// converts the number to a string and performs string concatenation.
// The + operator is left-associative, meaning it evaluates from left to 
// right in expressions with multiple operators. This is why "1" + 2 + 2 results 
// in "122", while 1 + 2 + "2" results in "32".

// console.log(+true)
// console.log(+"")

// let gameCounter = 100
// gameCounter++;
// console.log(gameCounter)

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"