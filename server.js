import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());

// Connect MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/virtualTest")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log("DB Error:", err));

// Use routes
app.use("/api/users", userRoutes);

app.listen(3000, () => console.log("Server running on port 3000"));
