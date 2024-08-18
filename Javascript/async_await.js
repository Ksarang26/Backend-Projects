// async function getMessage(){
//     return 'Hell students'
// }

// getMessage().then(result => console.log(result))
console.log("Helo from beggining")
async function printHelloAfterWait(){

    console.log('First line')

    let data = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Hello from function")
        },3000)
    })

    let result = await data
    console.log(result)
    console.log('last line')
}

printHelloAfterWait()

console.log("Hello from end")