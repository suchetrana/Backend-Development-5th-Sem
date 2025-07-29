const express = require('express');
const fs = require('fs');
const app = express()
const port = 5000;

app.use(express.static(__dirname+"/public"));

app.use(express.urlencoded({extended:true}))


// app.get('/', (req, res)=>{
//     res.sendFile(__dirname+"/index.html");    
// })

// app.get('/about.html', (req, res)=>{
//     res.sendFile(__dirname+"index.html");    
// })


app.listen(port, ()=>{
    console.log(`server started http://localhost:${port}`);
})


app.post('/addUser', (req, res) => {

    const {name, password} = req.body;

    const userData = {

    }


    fs.readFile("./Save/data.json")
    
    fs.writeFile("./Save/data.txt", data, (err)=>{

        if(err) return console.log(err);

        console.log("data added ")

    })
    

    console.log(req.body);

})


// Frontend files -> Static file