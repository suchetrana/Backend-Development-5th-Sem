let userContainer = document.querySelector('.user-container');

function getUsers(URL){
    fetch(URL)
    .then((res)=>{
        console.log(res);

        return res.json();
    })
    .then((data)=>{
        console.log(data);
        data.forEach((user)=>{
            displayUser(user);
        })
    })
    .catch((err)=>{
        console.log(err);
    })
}

function displayUser(user){
    let li = document.createElement("li");
    li.innerHTML = `<li class="user-item">
            <div class="user-info">
                <h1>${user.name}</h1>
                <p>${user.username}</p>
            </div>
            <div class="user-btn">
                <button id="del"> Delete</button>
                <button id="edit">edit</button>
            </div>
        </li>`
    userContainer.appendChild(li);



}

getUsers('http://localhost:5000/');
