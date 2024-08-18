// function getGreeetMethod(){
//     return function(){                    //asynchronous
//         console.log("Hello world")
//     }
// }

// let greetFn = getGreeetMethod()
// console.log(typeof greetFn)

// greetFn()


/**
 * forEach Method
 */

/**
 * map -> creation of new transformed array
 */

arr = [1,2,3,4,5]

cube_arr = arr.map(num => num**3)

console.log(cube_arr)

// filter

let arr1 = [1,2,3,4,5,6,7,8,9,10]

let even_arr = arr1.filter((num) => num%2 == 0)
console.log(even_arr)

// reduce

const sum = [1,2,3,4,5,6,7,8,9,10].reduce((curr,next)=>curr+next)
console.log(sum)


