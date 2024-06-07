// singleton
// Object.create constructor method

// object literals


const mySym = Symbol("key1")

// we can define both key and value in array
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // to use as symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    // lastLoginDays: ["Monday", "Saturday"]
}
console.log(JsUser.email) // not good as you can see below
console.log(JsUser["email"])
console.log(JsUser["full name"])
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])

// console.log(JsUser["full name"]) 
// console.log(JsUser["full name"])

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
// JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
JsUser.greeting();
JsUser.greetingTwo();