let file1 = require("/.file1");
function mul(a, b){
    return a*b;
}
function add(a, b){
    return a+b;
}


module.exports.mul = mul;
module.exports.add = add;