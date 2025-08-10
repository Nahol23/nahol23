import React from "react";

export default function GmailLogin({ setEmails }) {
  const mockEmails = [
    { id: 1, subject: "Meeting Tomorrow", body: "We will have a meeting tomorrow at 10am..." },
    { id: 2, subject: "Invoice", body: "Please find attached the invoice for last month..." }
  ];

  const handleLogin = () => {
    setEmails(mockEmails);
  };

  return <button onClick={handleLogin}>Login with Gmail</button>;
}
