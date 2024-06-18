class User {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value // introduce new varible this._password to avoid confusion with constructor.
    }
}
const namkha = new User("namkha.ai", "abc")
console.log(namkha.email);