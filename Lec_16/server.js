const express = require("express");
const app = express();

const port = 3344;
app.use(express.json());
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));

app.post("/user", (req, res) => {
  try {
    
    const { email, password } = req.body;
    console.log(email + " " + password);
    res.json({
      success: true,
      message: "added successfully",
      data: {
        email,
        password,
      },
    });
  } catch (err) {
    console.log(err);
  }
});
app.listen(port, () => {
  console.log(`server started http://localhost:${port}`);
});
