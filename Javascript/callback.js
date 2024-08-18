//1. It is a function
// 2.Passed as an argument to another function
// Asynchronous 

function greet(name, callback){
    const greeting ="Hello "+name
    callback(greeting)
}

function displayGreeting(message){
    console.log(message)
}

greet("Sarang",displayGreeting)