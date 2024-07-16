require('dotenv').config(); 
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const route = require('./routes/authRoute');  // Import your route
mongoose.connect(process.env.MONGO_URI);
const app = express();
app.use(express.json())
app.use('/api',route);
// app.use('/login',route);
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
