const fs = require('fs');
let users = [
    {
        id:1,
        name:"Tushar",
        age:21
    },
    {
        id:2,
        name:"Sarvan",
        age:20
    }
]
fs.writeFile("../users2.txt", JSON.stringify(users), function(err){
    if(err) return console.log(error);
    console.log("users written !!!");
})

