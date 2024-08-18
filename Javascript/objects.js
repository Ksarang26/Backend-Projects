const person = {
    name: "Vishwa",
    age:99,
    city:"Bangalore"

}



// console.log(Object.entries(person))

const new_person = Object.assign({}, person)
console.log(new_person)
const new_person_1 = Object.assign({}, person, {role: "Developer"})
console.log(new_person_1)