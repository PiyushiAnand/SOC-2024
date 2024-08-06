const mongoose = require('mongoose');

const InstructorSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    instructorId:{
        type:String,
        required:true,
    },
    domain:{
        type:String,
        enum:['C++','Java','Web Development','App Development'],
        required:true,
    },
    courses:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
})
const Instructor = mongoose.model('Instructor',InstructorSchema);
module.exports=Instructor;