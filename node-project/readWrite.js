// //read from an external file

const fs = require('fs')
// console.log(typeof fs)

// //read in the sync way
// console.log("First line")

// // const content = fs.readFileSync("input.txt")

// //reading in async way

// fs.readFile('input.txt',(err, content) => {
//     if(err){
//         console.log(err)
//     }
//     console.log("Content is: "+ content)
// })
// // console.log("output is: "+content)

// console.log("Last line")

//write code to an external file
/////using sync way
// console.log("berfore")

// fs.writeFileSync('output.txt','Hello Everyone')
// console.log("afetr")


//using async way

console.log("before")

fs.writeFile('output2.txt','Hello everone again !', err =>{
    if(err)
    {
        console.log(err)
    }
    console.log("Written successfully")
})
console.log("after")