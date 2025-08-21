function middleware1(req, res, next) {
  console.log("runnig middleware 1");
  req.user = {
    id: 1,
    username: "Suchet",
  };
  next();
}
function middleware2(req, res, next) {
  console.log("runnig middleware 2");
  console.log(req.user);
  next()
}

function checkAdmin(req, res, next) {
  let { name } = req.query;
  if (name === "Suchet") {
    req.isAdmin = true;
    return next();
  }
  res.json({
    success: false,
    message: "Not Admin",
  });

}
module.exports = { middleware1, middleware2, checkAdmin};

