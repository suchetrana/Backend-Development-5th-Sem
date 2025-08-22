const express = require('express');
const jwt = require('jsonwebtoken')
const { default: mongoose } = require('mongoose');
const app = express();
const Port = 3050;

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api/auth', auth)
mongoose.connect("mongodb://localhost:27017/Suchet's DB")
.then(() => {
    console.log("Database connected successfully.");
})
.catch( err =>{
    console.log(err);
})
app.listen(Port, ()=>{
    console.log(`server started at http://localhost:${Port}`);
})
