import React from "react";
export default function InsightBox({ text }) {
  return (
    <div className="insight">
      <h3>Insight</h3>
      <p>{text}</p>
    </div>
  );
}