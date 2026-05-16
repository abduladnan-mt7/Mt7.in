import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      console.warn("⚠️ No MONGO_URI found. Backend will run in MOCK MODE (local file storage).");
      return;
    }
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("❌ MongoDB connection error. Falling back to MOCK MODE.");
    console.warn("Ensure you have a local MongoDB running or provide a valid MONGO_URI in .env.");
  }
};

export default connectDB;
