function waitfor3s(resolve){
    setTimeout(resolve,3000); // after resolved,it gets passed to .then()
}

function setTimeoutPromisified(){
    return new Promise(waitfor3s)
}
// I passed a function into a Promise, and inside that Promise I invoke a function which in turn calls the original callback.

function main(){
    console.log("main is callled");
}
setTimeoutPromisified().then(main) // after you eventually complete,call main

