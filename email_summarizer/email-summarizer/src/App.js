import React, { useState } from "react";
import EmailInput from "./components/EmailInput";
import EmailList from "./components/EmailList";
import Summary from "./components/Summary";

function App() {
  const [emails, setEmails] = useState([]);
  const [summary, setSummary] = useState("");

  return (
    <div
      style={{
        padding: "20px",
        maxWidth: "700px",
        margin: "auto",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      }}
    >
      <h1>Email Summarizer</h1>
      <EmailInput emails={emails} setEmails={setEmails} />
      <EmailList emails={emails} setSummary={setSummary} />
      <Summary summary={summary} />
    </div>
  );
}

export default App;
