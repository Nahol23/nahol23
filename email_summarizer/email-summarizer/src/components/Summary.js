import React from "react";

export default function Summary({ summary }) {
  return (
    <div style={{ marginTop: "20px", padding: "10px", border: "1px solid green" }}>
      <h2>Summary</h2>
      <p>{summary}</p>
    </div>
  );
}
