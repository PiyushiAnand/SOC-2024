const User = require('../models/users');
const Student = require('../models/student');
const Instructor = require('../models/instructor');
const Course = require('../models/course');
const bcrypt = require('bcrypt');
//const { use } = require('../routes/authRoute');
// const {  } = require('../routes/authRoute');


exports.register=async(req,res)=>{
    const {name, username,password,email,role,domain}=req.body;
    const existingUser = await User.findOne({username});//if username is same email must not be same
    if(existingUser){
        console.log('Username already exists');
        return res.status(400).json({error: 'Username already exists'});
    }
   
    try{
        const hashed_password=await bcrypt.hash(password,10);
        const newuser = new User({
            name ,
            username,
            password: hashed_password,
            email,
            role,
       })
        await newuser.save();
        if(role === 'Student'){
            const student = new Student({
                name,
                studentId:username,
                courses:[],
            })
            await student.save();
        }
        else if(role === 'Instructor'){
            const instructor = new Instructor({
                name,
                instructorId:username,
                domain:domain,
                courses:[],
            })
            await instructor.save();
        }
        res.status(201).json({message:'User registered successfully'});
    }
    catch(error){
        console.error('Error during registration:', error);
        res.status(400).json({ error: 'Registration failed' });
    }
};
exports.login = async(req,res)=>{
   const {username,password,role,domain}=req.body;
   try {
    //console.log('hello');
    const user = await User.findOne({username,role});
    if(!user)return res.status(404).json({error: 'user not registered'});
    if(user.role ==='Instructor'){
        const instructor = await Instructor.findOne({ instructorId: username });
            if (instructor && instructor.domain !== domain) {
                return res.status(404).json({ error: 'Wrong domain selected' });
            }
    }
    const isMatch = await bcrypt.compare(password,user.password);//note: order matters :)
    if(!isMatch)return res.status(400).json({error: 'Password incorrect'});
    //console.log('Correct password');
    res.status(201).json({message: 'Logged in Succesfully!'});
   } catch (error) {
     //res.status(404).json({error: 'user not registered or username and password is wrong'});
     res.status(404).json({error: error.message});
   } 
};
