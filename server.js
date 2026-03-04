import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Test route
app.get("/test", (req, res) => {
  res.json({ message: "Server chal raha hai!" });
});

// Routes
app.use("/api/books", bookRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>📚 Books API chal rahi hai!</h1>");
});

app.listen(PORT, () => {
  console.log(`\n🚀 Server chal raha hai port ${PORT} par`);
});
