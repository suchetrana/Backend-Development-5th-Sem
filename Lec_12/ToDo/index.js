let edit = document.querySelector('.edit');
let del = document.querySelector('.delete');

// console.log(edit);
// console.dir(edit); 

console.dir(del)

console.log(edit.nextElementSibling);
console.log(edit.nextElementSibling.nextElementSibling.innerHTML);

// h1
console.log(edit.parentElement.previousElementSibling)

// delete to li

console.log(del.parentElement.parentElement.parentElement.getAttribute("id"))
