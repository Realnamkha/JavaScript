// const tinderUser = new Object() SINGLETON OBJECT
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Namkha",
            lastname: "Gyatso"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } not good way it is problematic
// const obj3 = Object.assign({}, obj1, obj2, obj4) // good method
// console.log(obj3)

// const obj3 = {...obj1, ...obj2} very useful 
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]
console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // data types of array
console.log(Object.values(tinderUser)); // data types of values
console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); to check if value exists in the object