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

// Retrieve all doc

const getAllDoc = async () => {
//   const result = await studentModel.find().select('name age');
//   const result = await studentModel.find().select(['name','age']);   include 
  const result = await studentModel.find().select(['-name','-age']);   // Exclude 
  console.log(result);
//   result.forEach((item) => {
//     console.log(item.name,item.age,item.fees.toString())

//   })
};


export {getAllDoc}