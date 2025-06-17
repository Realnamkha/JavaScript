// const myDate = new Date();
// let object = myDate;

// do {
//   object = Object.getPrototypeOf(object);
//   console.log(object);
// } while (object);

// Date.prototype
// Object { }
// null

// ## Setting up prototypes

// const personPrototype={
//     greet(){
//         console.log("Hello")
//     }
// }
// const carl = Object.create(personPrototype);
// carl.greet(); // hello!

const personPrototype = {
  greet() {
    console.log(`hello, my name is ${this.name}!`);
  },
};

function Person(name) {
  this.name = name;
}

// Correctly copying greet to Person.prototype
Object.assign(Person.prototype, personPrototype);

const alice = new Person("Alice"); // alice.__proto__ === Person.prototype; so alice inherits all of Person
alice.greet(); // hello, my name is Alice!


// Object.assign(Person.prototype, personPrototype);

// Here's what the lookup chain looks like when alice.greet() is called:

// JavaScript looks for greet on alice → not found.

// So it looks at alice.__proto__ which is Person.prototype.

// Person.prototype now has greet() because of Object.assign(...).

// It finds greet() there and calls it with this = alice.