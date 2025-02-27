import mongoose from "mongoose";
import dotenv from "dotenv";
import configs from "../utils/config";

dotenv.config();

const connectToDatabase = async () => {
  try {
    await mongoose.connect(configs.mongodbUrl);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  }
};

export default connectToDatabase;
