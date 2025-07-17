const products = [
    { name: "laptop", amount: 45000 },
    { name: "phone", amount: 15000 },
];
function buyProduct(product_name){
    return new Promise((resolve, reject) => {
        let isProduct = null
        for (let i = 0; i < products.length; i++) {
            // console.log( products[i].name==product_name);
            if (products[i].name === product_name) {
                isProduct = products[i];
            }
        }
        if (!isProduct) {
            return reject("product is not available", null);
        } else {
            resolve(null, isProduct.amount);
            //cb(null,isProduct.amount);

        }
    });
}
buyProduct("laptop").then((data)=>{
    console.log(data);
})
.catch((err) =>{
    console.log(err)
})


async function myfun(){
    try{
        let amount = await buyProduct("");
        let message = await buyProduct("");
    }
}
