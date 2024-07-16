const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    studentId:{
        type:String,
        required:true,
    },
    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
})
const Student = mongoose.model('Student',StudentSchema);
module.exports=Student;