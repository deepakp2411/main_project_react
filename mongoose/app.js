const express = require("express");
const connectDB = require("./db/connectdb");
const app = express();
const port = process.env.PORT || 3000;

const DATABASE_URL = "mongodb://localhost:27017/schooldb"

// mongoose.connect("mongodb://localhost:27017/schooldb").then(() => {
//   console.log("Connected Successfully ...");
// });


// mongodb 
connectDB(DATABASE_URL);


app.listen(port, () => {
  console.log(`Port ${port}`);
});
