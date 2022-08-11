// const mongoose = require("mongoose");
import mongoose from "mongoose";

// defining schema //

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 50 },
  fees: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => {
      v >= 5500.5;
    },
  },
  hobbies: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, publish: { type: Date, default: Date.now } },
  ],
  join: { type: Date, default: Date.now },
});

// compiling schema

const studentModel = mongoose.model("student", studentSchema);

// const createDoc = async () => {
//   try {
//     const studentDoc = new studentModel({
//       name: "Ruchi",
//       age: 20,
//       fees: 6500.5,
//       hobbies: ["cricket", "coding","Badminton"],
//       isActive: true,
//       comments: [{ value: "This is mongoose" }],
//     });

//     // saving docs

//     const result = await studentDoc.save();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// using dynamic db

// const createDoc = async (nm, ag, fe, hob, isact, comt) => {
//   try {
//     const studentDoc = new studentModel({
//       name: nm,
//       age: ag,
//       fees: fe,
//       hobbies: hob,
//       isActive: isact,
//       comments: comt,
//     });

//     // saving docs

//     const result = await studentDoc.save();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

export default createDoc;
// creating new database
