var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a); // gives output 10
    
}


// Var is better to avoid as it is not scope 

function one(){
    const username = "namkha"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website); // website not accessible as it is outside the scope

     two()

}
one()

if (true) {
    const username = "namkha"
    if (username === "namkha") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);
}