import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import { protect } from "./middleware/authMiddleware";

dotenv.config();

const app = express();

// Connect MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Auth Routes
app.use("/api/auth", authRoutes);

// Home Route
app.get("/", (req, res) => {
  res.send("Backend Running Successfully");
});

// Test Route
app.get("/test", (req, res) => {
  res.json({
    message: "Test Route Working",
  });
});

// Protected Route
app.get("/api/profile", protect, (req, res) => {
  res.json({
    message: "Protected Route Working",
  });
});

// Server Start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});