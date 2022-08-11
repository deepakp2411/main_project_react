import express from "express";
import connectDB from "./db/connectdb.js";
import { getAllDoc } from "./models/Student.js";

// require('./models/Student.js')
const app = express();
const port = process.env.PORT || 3000;
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

connectDB(DATABASE_URL);


getAllDoc()



app.listen(port, () => {
  console.log(`Port running at ${port}`);
});
