import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db";
import authRoutes from "./routes/authRoutes";
import workspaceRoutes from "./routes/workspaceRoutes";
import { protect } from "./middleware/authMiddleware";

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/workspaces", workspaceRoutes);

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

// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});