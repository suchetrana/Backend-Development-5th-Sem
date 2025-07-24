const {write, read} = require('./IO/index')
const express = require('express');

const app = express();
const port = 4400;

app.use(express.json());

app.listen(port, (req, res) =>{
    
    console.log(`server started started http://localhost:${port}`)
})

app.post('/user', (req, res)=>{
    console.log(req.body);
    res.json(req.body);

    async function writing() {
        let dataArr = [];

        try {
                const data = await read("./Files/data.txt");
                if(JSON.stringify(data) === ""){
                    dataArr.push(req.body);

                    await write("./Files/data.txt", dataArr);
                    console.log("Users written to file");
                }
                else{
                    dataArr=JSON.parse(data)
                    dataArr.push(req.body)
                    await write("./Files/data.txt", dataArr);
                    console.log("Users written to file");
                } 
    } 
    catch(err){
        console.log(err)
    } 
writing();

    }
});


