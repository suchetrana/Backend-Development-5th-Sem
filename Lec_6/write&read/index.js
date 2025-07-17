const fs = require("fs");

fs.readFile("../demo.txt", "utf-8", function(err, data){
    if(err) return console.log(err);

    fs.writeFile("../final.txt", data.trim()+"\n", function(err){
        if(err) return console.log(err);
    })

    fs.readFile("../demo1.txt", "utf-8", function(err, data){
        if(err) return console.log(err);
        fs.appendFile("../final.txt", data.trim(), function(err){
            if(err) return console.log(err);
            console.log("Contents appended!")
        })
    })
}) 