const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true,
    },
    link:{
        type:[String],//all the links for a particular course
        required:true,
    }
})
const Course=mongoose.model('Course',CourseSchema);
module.exports = Course;