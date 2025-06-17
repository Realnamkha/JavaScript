import fs from "fs"

// const contents = fs.readFileSync("a.txt","utf-8")
// console.log(contents)

// async function readFile() {
//     try {
//         const contents = await fs.readFileSync("a.txt","utf-8");
//         console.log(contents)
//     } catch (error) {
//         console.log(error)
//     }
// }
// readFile()

fs.readFile("a.txt","utf-8",function(err,contents){
    console.log(contents)
})
// when the task is finished,it calls back the function.

