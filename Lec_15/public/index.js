const signup = document.querySelector('#signup')
const email = document.querySelector('#email')
const pass = document.querySelector('#pass')

function addUser(email, pass){
    let newUser = {
        email: email,
        pass:  pass
    }
    fetch("/addUser",{
        method:"POST",
        body:JSON.stringify(newUser),
        headers:{
            "content-type":"application/json"
        }
    }).then((res) =>{
        return res.json()
    })
    .then((data) => {
        console.log(data)
        if(data.success){
            alert(data.message);
            signup.reset();
        }
        else{
            alert(data.err);
            signup.reset();
            
        }
    })
    .catch((err)=>{
        console.log(err)
    })
}

signup.addEventListener("submit", function(e){
    e.preventDefault();
    addUser(email.value, pass.value)
})

// addUser("Suchet", 1234)