const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "namkha"
}

// course.courseInstructor

const {courseInstructor} = course
const {courseInstructor:ins} = course
console.log(ins)


// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }