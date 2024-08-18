/**
 * define th wschema of student collection
 * to be stored in database
 */

const mongoose = require("mongoose")

//schema

const studentSchema = new mongoose.Schema({
    name: String,
    age : Number
})

//go ahead and create corresponding collection

module.exports = mongoose.model("Student",studentSchema)