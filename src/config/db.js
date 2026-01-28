import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB conectada");
  } catch (error) {
    console.error("Error DB:", error.message);
    process.exit(1);
  }
};
