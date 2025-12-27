import { useState } from "react";
import { querySchemes } from "../api/schemeApi";

export default function SchemeChat() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit() {
    if (!message.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const data = await querySchemes(message);
      setResponse(data.suggestions);
    } catch (err) {
      setResponse("Error fetching scheme suggestions");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Find Suitable Schemes</h2>

      <textarea
        placeholder="Describe your situation (income, profession, age, etc.)"
        value={message}
        onChange={e => setMessage(e.target.value)}
      />

      <button onClick={handleSubmit} disabled={loading}>
        {loading ? "Finding..." : "Find Schemes"}
      </button>

      {response && (
        <div>
          <h3>Suggested Schemes</h3>
          <pre style={{ whiteSpace: "pre-wrap" }}>{response}</pre>
        </div>
      )}
    </div>
  );
}
