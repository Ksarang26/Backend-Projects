/**
 * define th wschema of student collection
 * to be stored in database
 */

const mongoose = require("mongoose")

//schema

const studentSchema = new mongoose.Schema({
    name: {
        type : String,
        required : true
    },
    age : {
        type: Number,
        min : 19
    },
    email : {
        type: String,
        required : true,
        lowercase : true,
        minLength : 15
    },
    Subjects : [String],
    createdAt:{
        type : Date,
        immutable : true,
        default : () => {
            return Date.now()
        }
    }
},{versionKey : false, timestamps : true})

//go ahead and create corresponding collection

module.exports = mongoose.model("Student",studentSchema)