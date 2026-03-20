import mongoose from "mongoose";

const statsSchema = new mongoose.Schema({
  totalUsers: Number,
  totalTasks: Number,
  completedTasks: Number,
  pendingTasks: Number
}, { timestamps: true });

export default mongoose.model("Stats", statsSchema,"sample");