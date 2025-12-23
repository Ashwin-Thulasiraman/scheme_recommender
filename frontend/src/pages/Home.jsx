import  { useState } from "react";
import SchemeForm from "../components/InvestmentForm";
import SchemeList from "../components/SchemeList";
import "./Home.css";



export default function Home() {
  const [schemes, setSchemes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleFormSubmit = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch("http://localhost:5000/api/schemes/recommend", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to fetch schemes");

      const data = await res.json();
      setSchemes(data.schemes || []);
    } catch (err) {
      setError(err.message || "Something went wrong");
    }

    setLoading(false);
  };

  const Form= SchemeForm;

  return (
    <div className="home-container">
      <h1 className="home-title">Find the Right Scheme</h1>
      <p className="home-subtitle">
        Answer a few questions and get personalized scheme recommendations.
      </p>

      <Form onSubmit={handleFormSubmit} />

      <div className="results-section">
        <SchemeList schemes={schemes} loading={loading} error={error} />
      </div>
    </div>
  );
}
