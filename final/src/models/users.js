//we will describe the schema of our database here
const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    role:{
        type:String,
        enum:['Instructor','Student'],
        required:true,
    }
})
const User = mongoose.model('User',UserSchema);
module.exports=User;