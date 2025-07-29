let box = document.querySelector('#box');
let btn = document.querySelector('#btn');
let stp = document.querySelector("#stp")
let colours = ["red", "black", "green", "yellow", "brown", "pink", "blue", "purple"];
let id;

function genrateRandom(){
    let index = Math.floor(Math.random()*10);
    console.log(index);
    let colour = colours[index];
    console.log(colour);

    box.style.background = colour;
}
btn.addEventListener('click', function() {
    id = setInterval(() => {
        genrateRandom();
    }, 500)
})

stp.addEventListener('click', function() {
    if(id) clearInterval(id);
})
// genrateRandom();