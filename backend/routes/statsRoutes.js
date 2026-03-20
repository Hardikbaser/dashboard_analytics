import express from "express";
import Stats from "../models/stats.js";
import { generateInsight } from "../services/insightService.js";

const router = express.Router();

router.get("/stats", async (req, res) => {
  try {
    // Get latest stats document
    const stats = await Stats.findOne().sort({ createdAt: -1 });

    if (!stats) {
      return res.status(404).json({ message: "No stats found" });
    }

    const insight = generateInsight(stats);

    res.json({
      ...stats._doc,
      insight
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;