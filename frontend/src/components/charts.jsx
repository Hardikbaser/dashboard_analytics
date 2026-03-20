import React from "react";
import { Bar, Pie } from "react-chartjs-2";
// 1. Import the Chart.js core and the specific elements you need
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// 2. Register them so Chart.js knows how to use them
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend
);

export default function Charts({ stats }) {
  // Defensive check: if stats hasn't loaded yet, return a loader or null
  if (!stats) return <p>Loading charts...</p>;

  const barData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        label: "Tasks",
        data: [stats.completedTasks, stats.pendingTasks],
        backgroundColor: ["#4caf50", "#ff9800"], // Added some color!
      },
    ],
  };

  const pieData = {
    labels: ["Completed", "Pending"],
    datasets: [
      {
        data: [stats.completedTasks, stats.pendingTasks],
        backgroundColor: ["#4caf50", "#ff9800"],
      },
    ],
  };

  return (
    <div className="charts">
      <div className="chart-box">
        <Bar data={barData} />
      </div>

      <div className="chart-box">
        <Pie data={pieData} />
      </div>
    </div>
  );
}