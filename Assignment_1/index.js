
const fs = require('fs');

const {read, write} = require('./IO/index');

const [,, inputUser, inputProduct] = process.argv;



async function buyProduct(userName, productName){

    let users = await read("./TxtFiles/users.txt");
    let products = await read("./TxtFiles/products.txt");

    let user = users.find((u) => u.name.toLowerCase() === userName.toLowerCase());
    let item = products.find((p) => p.product.toLowerCase() === productName.toLowerCase());


    if(!user) return console.log("Customer not found");
    if(!item) return console.log("product not found");

    logMaintain("./TxtFiles/orderHistory.txt", user, item);
}

async function logMaintain(file, user, item) {
    write
    
}

buyProduct(inputUser, inputProduct);

