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
    <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Find Suitable Schemes</h2>

      <div className="space-y-4">
        <textarea
          placeholder="Describe your situation (income, profession, age, etc.)"
          value={message}
          onChange={e => setMessage(e.target.value)}
          className="w-full min-h-32 p-4 border-2 border-gray-300 rounded-lg focus:border-green-500 focus:outline-none resize-y text-gray-700"
          rows="4"
        />

        <button 
          onClick={handleSubmit} 
          disabled={loading || !message.trim()}
          className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 disabled:cursor-not-allowed"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Finding...
            </span>
          ) : "Find Schemes"}
        </button>

        {response && (
          <div className="mt-6 bg-green-50 border-l-4 border-green-500 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Suggested Schemes</h3>
            <pre className="whitespace-pre-wrap text-gray-700 font-sans leading-relaxed">{response}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
