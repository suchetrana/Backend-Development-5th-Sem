const express = require("express");
const { middleware1, middleware2, checkAdmin} = require("./middleware/middleware");

const app = express();
const port = 5050;

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(middleware1);
app.use(middleware2);

app.get('/home', (req, res, next) => {
  res.json({
    success: true,
    message: "Welcome to home page",
  });
  next()
});

app.get("/dashboard", checkAdmin , (req, res, next) => {
    if (req.isAdmin) {
        return res.json({
            success: true,
            message: "welcome to dashboard"
        });
    }

    res.json({
        success: false,
        message: "not authorised , welcome to dashboard"
    });
    next()
});
app.listen(port, () => {
  console.log(`server started at port: http://localhost:${port}`);
});
