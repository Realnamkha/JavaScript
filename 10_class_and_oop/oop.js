// object literal
// const user = {
//     username : "namkha",
//     age : 18,
//     signedIn: true,

//     getUserDetails : function(){
//         console.log("got users details");
//         // console.log(`Username: ${this.username}`);
//         // console.log(this);
//     }
// }

// const user2 = {
//     username : "namkha",
//     age : 18,
//     signedIn: true,

//     getUserDetails : function(){
//         console.log("got users details");
//         // console.log(`Username: ${this.username}`);
//         // console.log(this);
//     }
// }

// console.log(user.getUserDetails())

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
const userOne = new User("hitesh", 12, true) // new empty instance is created,construtor function is called , this keyworord is injected
const userTwo = new User("ChaiAurCode", 11, false)
// console.log(userOne)
console.log(userOne.constructor);
console.log(userTwo);