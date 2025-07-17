const fs = require('fs');
const { json } = require('stream/consumers');

fs.readFile("../users.txt", "utf-8", function(err, data){
    if(err) return console(err);
    let data0 = JSON.parse(data);


    fs.readFile("../users2.txt", "utf-8", function(err, data){
        if(err) return console.log(err);
        let data1 = JSON.parse(data);
        let merge = data0.concat(data1);

            fs.writeFile("../merge.txt", JSON.stringify(merge), function(err){
                if(err) return console.log(err);
                console.log("users.txt and users2.txt file's data added !!")
            })

    })
})


async function task(file1, file2, file3) {
    let user = await read(file1);
    let users = await read(file2);
    let a = JSON.stringify(user);
    let b = JSON.stringify(user2);
    let allUser = a.concat(b);
    let mes = await write(file3, JSON.stringify(allUser));
    console.log(mes);
}