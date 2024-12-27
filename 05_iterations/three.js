// for of
// The for...of loop gives you the values directly from the iterable, not the indices.
// This is different from the for...in loop, which iterates over the keys (or indices) of an object or array.
// It is particularly useful when you don't need the index and only care about the values.

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]

// for (const val of arr) {
//     console.log(val);
// }

// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`)
// }

// Maps
const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value); //for of does not work for non-iterable objects in js
    
}