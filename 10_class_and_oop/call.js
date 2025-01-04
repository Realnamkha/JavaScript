function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    // SetUsername(username) // The function is being called but as soon as it is called it is removed from exexution context
    SetUsername.call(this, username) // do this in mine and it holds the reference
   
    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@gmail.com","123")
console.log(chai)