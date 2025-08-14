// async function getCommentData(){
//     try{
//         let res = await axios.get("https://jsonplaceholder.typicode.com/posts/1/comments")
//         console.log(res.data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }

// getCommentData();


function addUser(email, password){
    axios.post('/user', {
        email: email,
        password: password
    })
    .then((res) =>{
        console.log(res.data)
    })
    .catch((err) => {
        console.log(err.message);
    })
}
addUser("xyz@gmail.com", 1234);