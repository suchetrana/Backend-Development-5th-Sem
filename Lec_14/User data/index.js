const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.static(__dirname + "/public"));
app.get("/users", (req, res) =>{
    fs.readFile("'/user.json", "utf-8", function(err, data){
        if(err) return res.send(err);
        let users = JSON.parse(data);
        res.json(users);
    })
})
const port = 5000
app.listen(port, () => {
    console.log(`server started http://localhost:${port}`);
})