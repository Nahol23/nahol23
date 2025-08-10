import React, { useState } from "react";

export default function EmailInput({ emails, setEmails }) {
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");

  const handleAddEmail = (e) => {
    e.preventDefault();

    if (!subject.trim() || !body.trim()) {
      alert("Please fill in both subject and body.");
      return;
    }

    const newEmail = {
      id: emails.length > 0 ? emails[emails.length - 1].id + 1 : 1,
      subject: subject.trim(),
      body: body.trim(),
    };

    setEmails([...emails, newEmail]);
    setSubject("");
    setBody("");
  };

  return (
    <form onSubmit={handleAddEmail} style={{ marginBottom: "20px" }}>
      <h2>Add New Email</h2>
      <div>
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          style={{ width: "100%", marginBottom: "8px", padding: "8px" }}
        />
      </div>
      <div>
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          rows={4}
          style={{ width: "100%", marginBottom: "8px", padding: "8px" }}
        />
      </div>
      <button type="submit">Add Email</button>
    </form>
  );
}
