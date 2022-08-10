import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const DB_OPTIONS = {
      dbName: "schooldb",
    };
    await mongoose.connect(DATABASE_URL, DB_OPTIONS);
    console.log("Connected.....");
  } catch (err) {
    console.log(err);
  }
};
