import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MongoURI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MongoURI);
    console.log("MongoDB connected successfully!");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit process with failure
  }
};

export default connectDB;
