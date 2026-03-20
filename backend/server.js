import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import statsRoutes from "./routes/statsRoutes.js";

dotenv.config();

const app = express();
// Add this temporarily to server.js
app.get("/api/test", (req, res) => {
  res.json({ message: "API path is working!" });
});

// Middleware
app.use(cors());
app.use(express.json());

// 🔗 MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB Connected"))
  .catch((err) => {
    console.error("❌ DB Connection Error:", err.message);
    process.exit(1);
  });
mongoose.connection.on('open', async () => {
  const collections = await mongoose.connection.db.listCollections().toArray();
  console.log("--- DEBUG: COLLECTIONS FOUND ---");
  console.log(collections.map(c => c.name));
  console.log("--------------------------------");
});
mongoose.connection.on('open', async () => {
  // Access the raw MongoDB driver to see what is REALLY there
  const rawData = await mongoose.connection.db.collection('sample').findOne();
  console.log("--- RAW DATABASE CHECK ---");
  console.log("Raw Document Found:", rawData);
  console.log("--------------------------");
});
// Routes
app.use("/api", statsRoutes);

// Root route
app.get("/", (req, res) => {
  res.send(" API is running...");
});

// Server start
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});