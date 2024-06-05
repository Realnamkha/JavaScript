const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){ //val is used for each item in the array
//     console.log(val);
// } )

// coding.forEach( (item) => {
//     console.log(item);
// } )

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )