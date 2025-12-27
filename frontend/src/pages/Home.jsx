import { useNavigate } from "react-router-dom";
import React from "react";
export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: 40 }}>
      <h1>Government Scheme Finder</h1>

      <button onClick={() => navigate("/farmer")}>
        I am a Farmer / Citizen
      </button>

      <br /><br />

      <button onClick={() => navigate("/institution")}>
        I represent an Institution
      </button>
    </div>
  );
}
