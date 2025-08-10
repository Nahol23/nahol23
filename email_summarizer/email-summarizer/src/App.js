import React, { useState } from "react";
import GmailLogin from "./components/GmailLogin";
import EmailList from "./components/EmailList";
import Summary from "./components/Summary";

function App() {
  const [emails, setEmails] = useState([]);
  const [summary, setSummary] = useState("");

  return (
    <div style={{ padding: "20px" }}>
      <h1>Email Summarizer</h1>
      <GmailLogin setEmails={setEmails} />
      <EmailList emails={emails} setSummary={setSummary} />
      <Summary summary={summary} />
    </div>
  );
}

export default App;
