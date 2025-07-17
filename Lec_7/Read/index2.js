const fs = require('fs');
import read from '../IO/index.js'
fs.readFile("../users.txt", "utf-8", function(err, data){
    if(err) return console.log(err);
    // console.log(data[0]);

    let users = JSON.parse(data);
    console.log(users);
})




async function readUser () {
    let users = await read("../users.txt")
    let users2 = await read("../users2.txt")
}

async function writeUser() {
    await fs.write("../merge.txt", "Helloo !!!")
    
}