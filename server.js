const express=require('express')
const mongoose = require('mongoose');
require('dotenv').config()
mongoose.connect(process.env.MONGO_URI)
const app=express();

//use the routes
app.use(express.json())
const routes=require('./routes/todo_r')
app.use('/todos',routes)
PORT = process.env.PORT||3000;
app.listen(PORT,()=> console.log('Server Started'))
