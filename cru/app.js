import express from "express";
import connectDB from "./db/connectdb.js";
import createDoc from "./models/student.js";

// require('./models/Student.js')
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

connectDB(DATABASE_URL);

// create docs

createDoc("Bruce", 25, 8784, [
  "gaming",
  "dancing",
  false,
  [{ value: "This is batman bro" }],
]);

app.listen(port, () => {
  console.log(`Port running at ${port}`);
});
