const userEmail = [] //assume to be true for empty array

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10 // to avoid null response 
// val1 = null ?? 10 // safety check
// val1 = undefined ?? 15
// val1 = null ?? 10 ?? 20

let result;

result = 0 ?? 10;       // 0 is not nullish, so result is 0
result = false ?? true; // false is not nullish, so result is false
result = "" ?? "Default"; // "" is not nullish, so result is ""

result = null ?? "Fallback"; // null is nullish, so result is "Fallback"
result = undefined ?? "Fallback"; // undefined is nullish, so result is "Fallback"


// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")