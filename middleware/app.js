const express = require("express");
const myLogger = require("./middlewares/logger-middleware.js");
const app = express();
const port = process.env.PORT || 8000;
const web = require("./routes/web.js");
const stu = require("./routes/student.js");

// set Template engines

app.set("view engine", "ejs");

// middleware

// app.use(myLogger);

// single middleware // application level
// app.use("/about", myLogger);

// load routes

app.use("/", web);
app.use("/", stu);

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
