const mongoose=require('mongoose')

// validator

const validator =require('validator')

const userSchema = new mongoose.Schema({
    task:{
        type:String,
        required:true
    },
    info:{
        type:String,
        required:true
    },
    email:{
        type:String,
        reguired:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw Error('invalid Email')
            }
        }
    },
    name:{
        type:String,
        required:true
    }
})

const users = new mongoose.model('users',userSchema)

module.exports=users