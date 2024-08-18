// const simranPromise = new Promise((resolve, reject) => {

//     let parentDecision = false

//     if(parentDecision){
//         resolve("Yayy, ab shadi hogi")
//     }else{
//         reject("IAS dhoond liya hai...")
//     }
// });

// simranPromise.then((msg) => {
//     console.log("Simran message: ",msg)
//     console.log("Lets book wedding venue")
// }).catch((msg) => {
//     console.log("Simrans message: ",msg)
//     console.log("Tinder kha ho yaar!")
// })

const f1Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    if(Math.random() > 0.5){
        resolve("F1: HeyI am in Goa! ")
    }else{
        reject("F1: Sorry mujhe bahar jana hai")
    }},3000)
})
const f2Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    if(Math.random() > 0.5){
        resolve("F2: HeyI am in Goa! ")
    }else{
        reject("F2: Sorry mujhe nahi jana hai")
    }},2000)
})
const f3Promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    if(Math.random() > 0.5){
        resolve("F3: HeyI am in Goa! ")
    }else{
        reject("F3: Sorry class hai")
    }},1000)
})

Promise.all([f1Promise, f2Promise, f3Promise]).then((msg)=>{
    console.log(msg)
    console.log("I am going to goa")
}).catch((msg)=>{
    console.log(msg)
    console.log("Shit yaar plan cancel")
})