import fs from "fs";
function onProcess(resolve){
    const contents = fs.readFile("a.txt","utf-8");
    contents.trim();
    fs.writeFile("a.txt","utf-8");
    resolve();
}
function cleanFilePromisified(){
    return new Promise(onProcess)
}
function onDone(){
    console.log("Done");
}
cleanFilePromisified().then(onDone)