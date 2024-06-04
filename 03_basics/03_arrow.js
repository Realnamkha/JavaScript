const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this); // current context
    }

}

// user.welcomeMessage()

// console.log(this) // empty because it is running in node but if you do this in browser it points to window

// function chai(){
//     let username="Namkha"
//     console.log(this.username) //this is used only like that for object
// }
// chai()

const chai = () => {
        let username="Namkha"
        console.log(this)
}
chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4,5))

// const addTwo = (num1, num2) => (num1 + num2) // implicit return not need to write return 

const addTwo = (num1, num2) => ({username: "hitesh"})
console.log(addTwo(3,4))
