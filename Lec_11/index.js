// //accessing dom elements

// //1. by id

// let res = document.getElementById("mydiv")
// console.log(res)
// console.dir(res)

// //2. using class
// let h2= document.getElementsByClassName('h2')  //list collecctions
// console.log(h2[0])

// //3. tag name
// let tag = document.getElementsByTagName('p')
// console.log(tag)

// //4. by query selector
// let query = document.querySelector("#mydiv") //object
// console.log(query)

// let queryall = document.querySelectorAll('p') //collection
// console.log(queryall)

//for work
let p  = document.getElementById('polo')
console.log(p)

// document properties
//1.  accessing element content and change it 
//* inner html = //CHANGE USING TAG 
console.log(p.innerHTML)

p.innerHTML = "<h1>hello world 01</h1>"

// inner text

console.log(p.innerText);

p.innerText = "the quick brown fox jumps"


// accessing element by id or class
//  1. get attribute

console.log(p.getAttribute("id"));

p.setAttribute("class", "usingjs");





