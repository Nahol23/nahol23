import React, { useState } from "react";
import axios from "axios";

export default function EmailList({ emails, setSummary }) {
  const [loadingId, setLoadingId] = useState(null);

  const summarizeEmail = async (emailBody, id) => {
    setLoadingId(id);
    setSummary(""); // clear previous summary

    try {
      const response = await axios.post("http://localhost:3000/summarize", {
        text: emailBody,
      });

      setSummary(response.data.summary);
    } catch (error) {
      console.error("Error summarizing email:", error);
      setSummary("Sorry, there was an error summarizing this email.");
    }

    setLoadingId(null);
  };

  if (emails.length === 0) return <p>No emails to display. Please add an email.</p>;

  return (
    <div>
      <h2>Inbox</h2>
      {emails.map((email) => (
        <div
          key={email.id}
          style={{
            marginBottom: "10px",
            border: "1px solid #ccc",
            padding: "10px",
            backgroundColor: loadingId === email.id ? "#f0f8ff" : "white",
          }}
        >
          <strong>{email.subject}</strong>
          <p>{email.body}</p>
          <button
            onClick={() => summarizeEmail(email.body, email.id)}
            disabled={loadingId !== null}
          >
            {loadingId === email.id ? "Summarizing..." : "Summarize"}
          </button>
        </div>
      ))}
    </div>
  );
}
