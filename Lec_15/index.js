const express = require('express');
const app = express();

app.use(express.json())
app.use(express.static(__dirname+"/public"))
app.use(express.urlencoded({extended:true}))
app.post('/addUser', (req, res) => {
    try{
        let email = req.body.email;
        let pass = req.body.pass
        console.log('Email:', email, "Password: ", pass)
        
    }

    catch(err){

    }
});

app.listen(4443, () =>{
    console.log("server started");
})