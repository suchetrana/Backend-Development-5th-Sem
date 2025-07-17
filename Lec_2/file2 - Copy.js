let file1 = require("/.file1");
function mul(a, b){
    return a*b;
}
function div(a, b){
    if(b == 0) return "divison not possible";
    return a/b;
}


module.exports.mul = mul;
module.exports.div = div;
