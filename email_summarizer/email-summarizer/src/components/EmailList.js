import React from "react";
import axios from "axios";

export default function EmailList({ emails, setSummary }) {
  const summarizeEmail = async (emailBody) => {
    try {
      const res = await axios.post("http://localhost:5000/summarize", { text: emailBody });
      setSummary(res.data.summary);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Inbox</h2>
      {emails.map((email) => (
        <div key={email.id} style={{ marginBottom: "10px", border: "1px solid #ccc", padding: "10px" }}>
          <strong>{email.subject}</strong>
          <p>{email.body}</p>
          <button onClick={() => summarizeEmail(email.body)}>Summarize</button>
        </div>
      ))}
    </div>
  );
}
