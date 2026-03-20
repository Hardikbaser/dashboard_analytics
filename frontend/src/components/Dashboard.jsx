import React, { useEffect, useState } from "react";
import api from "../services/api"; 
import StatCard from "./statCard";
import Charts from "./charts";
import InsightBox from "./insightBox";
import "../index.css";

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // This combines with VITE_API_URL to make http://localhost:5000/api/stats
    api.get("/stats")  
      .then(res => {
        console.log("Success! Data:", res.data);
        setData(res.data);
      })
      .catch(err => {
        console.error("Dashboard Fetch Error:", err);
      });
  }, []);

  if (!data) return <p className="loading">Loading dashboard data...</p>;

  return (
    <div className="container">
      <h1>📊 Analytics Dashboard</h1>

      <div className="cards">
        <StatCard title="Users" value={data.totalUsers} />
        <StatCard title="Tasks" value={data.totalTasks} />
        <StatCard title="Completed" value={data.completedTasks} />
        <StatCard title="Pending" value={data.pendingTasks} />
      </div>

      <Charts stats={data} />
      {/* Ensure your insight text is being passed correctly */}
      <InsightBox text={data.insight} />
    </div>
  );
}