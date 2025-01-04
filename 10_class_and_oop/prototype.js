
// Prototypical behavior in JavaScript refers to how objects inherit properties 
// and methods from other objects through the prototype chain. JavaScript uses prototypes
//  to enable object-oriented programming and inheritance, allowing objects to share functionality.
// Everything is object in JS
// String -> Object -> Null
// Array -> Object -> Null

let myName = "namkha     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.namkha= function(){
    console.log("Namkha is present in all objects") //technically everything being object,this should be avalable eveywhere
}
Array.prototype.heyNamkha = function(){
    console.log(`Namkha says hello`); // only array has this.
}

// heroPower.namkha();
// myHeros.namkha();
// myHeros.heyNamkha();

// Inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport // inherating TeachingSupprot
}
Teacher.__proto__ = User // teacher can access all of users

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher) // 1 access 2

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
myName.trueLength()