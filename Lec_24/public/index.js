const signupform  = document.querySelector("#Signup")
const signupusername = document.querySelector("#signup-username")
const signupemail = document.querySelector("#signup-email")
const signuppassword = document.querySelector("#signup-password")

signupform.addEventListener("submit", async  (e) => {
    e.preventDefault()

    let username = signupusername.value
    let email = signupemail.value
    let password = signuppassword.value

    let response = await fetch("/api/users", {

        method: "POST",

        body: JSON.stringify({
            username : username,
            email : email,
            password : password
        }),

        headers: {"Content-Type": "application/json"}       
    })


    let data = await response.json()

    console.log(data)
    if(data.success){
        alert("Signup successful! Please log in.")
    }

    else{
        alert("Signup failed: " + data.message)
    }


})