const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const web = require("./routes/web.js");

// Set Tempalte ejs

app.set("view engine", "ejs");

// Load Routes
app.use("/", web);

app.listen(port, () => {
  console.log(`Server ${port}`);
});
