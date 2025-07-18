const express = require('express');

const app = express();
const port = 5050

// event internval, event loop , async non-blocking

app.get('/', (req, res)=>{
    console.log(req);
    res.send("Hello World!!");

    // res.send("<h1> Hello World</h1>");

    // res.json({
    //     name:"Sanket",
    //     address: "delhi"
    // })
})

app.get('/users/:id', (req,res)=>{
    let id =req.params.id;
    res.send(id);
    console.log(req.params.id);
})

app.get('/blogs', (req, res) =>{
    console.log(req.query.title);
    res.send("got it")
})
app.listen(port, (req, res) => {
    console.log(`server started started http://localhost:${port}`)
})
