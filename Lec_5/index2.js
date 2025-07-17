let users = [
    {
        id: 1,
        name: "Nitesh",
        age: 17
    },
    {
        id: 2,
        name: "",
        age: 18
    }
]
function isEligible(id){
    new Promise((resolve, reject) => {
        let user = users.filter((user) => user.id === id)[0];
        console.log(user);
        if (!user) return reject("no user found");
        if (user.age >= 18) {
            return resolve("eligible for vote");
        } else {
            return reject("not eligible");
        }
    })
}
