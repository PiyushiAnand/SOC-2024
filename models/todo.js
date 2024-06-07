const mongoose=require('mongoose')
const todo_Schema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    completed:{
        type:Boolean,
        default:false
    }
});
module.exports = mongoose.model('Todo',todo_Schema);