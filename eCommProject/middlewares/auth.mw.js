const userSchema = require("../models/user.model")

/**
 * create a mw will check if the request body is proper and correct
 */

const verifySignUpBody = async(req, res, next) => {
    try{
        //check for the name
        if(!req.body.name){
            return res.status(400).send({
                message: "Failed ! Name was not provided in request body"
            })
        }
        //check for the email
        if(!req.body.email){
            return res.status(400).send({
                message: "Failed ! Email was not provided in request body"
            })
        }
        //check for the userId
        if(!req.body.userId){
            return res.status(400).send({
                message: "Failed ! UserId was not provided in request body"
            })
        }

        //check if the user with the same userId is already
         
        
        if(user){
            return res.status(400).send({
                message: "Failed ! UserId with same userId is already present"
            })
        }
        
        next()
    
    }catch(err){
        console.log("Error while validating the request object", err)
        res.status(500).send({
            message:"Error while validating the request body"
        })
    }
}

const verifySignInBody = async(req, res, next) => {

    if(!req.body.userId) {
        return res.status(400).send({
            message : "userId is not provided"
        })
    }

    if(!req.body.password) {
        return res.status(400).send({
            message : "password is not provided"
        })
    }
}

module.exports = {
    verifySignUpBody : verifySignUpBody,
    verifySignInBody : verifySignInBody
}