const mongoose = require('mongoose')
const studentModel = require("./models/student.model1")

/**
 * Write a code to connect with mongoDB
 */

mongoose.connect("mongodb://localhost/be_demodb")

const db = mongoose.connection  //start the connection with mongoDB

db.on("error", () => {
    console.log("Error while connection to db")
});

db.once("open", () => {
    console.log("Connected to MongoDB")
    //logic to insert data in db
    init()
    //Running the queries on MongoDB
    dbQueries()
})

async function init (){
    //logic to insert data in db
    const student = {
        name :"Sarang",
        age : 22, 
        email : "instasarang@gmail.com",
        Subjects: ["Maths", "English"]
    }

    const std_obj = await studentModel.create(student)

    console.log(std_obj)
}

async function dbQueries(){
    //read the student data
    console.log("inside db quries function");
    
    //read the student data based on id
    try{
    const student = await studentModel.findById("66c187a7f599668533ddaaee")
    // console.log(student)
    }catch(err){
        // console.log(err)
    }

    //search based on name
    try{
        
    const student = await studentModel.find({name:"Shree"})
    // console.log(student)
    }catch(err){
        // console.log(err)
    }


    // studentModel.find({email: "instasarang@gamil.com"})

    /**
     * Deal with multiple conditions(where clause in MySQL)
     */

    const student = await studentModel.where("age").gt("10").where("name").equals("Sarang").limit(2)
    // console.log(student)

    /**
     * Delete one document where name = "Sarang"
     */

    const stds = await studentModel.deleteOne({name:"Sarang"})
    console.log(stds)

}