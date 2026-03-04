import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`\n✅ Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`\n❌ DB Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;