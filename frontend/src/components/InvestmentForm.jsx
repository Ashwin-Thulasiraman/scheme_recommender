import { useState } from "react";
import "./InvestmentForm.css";

export default function InvestmentForm({ onSubmit }) {
  const [formData, setFormData] = useState<FormData>({ userInput: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.userInput.trim()) return alert("Please describe the scheme you want.");
    onSubmit(formData);
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label htmlFor="userInput">Describe the scheme you are looking for*</label>
      <textarea
        name="userInput"
        value={formData.userInput}
        onChange={handleChange}
        placeholder="E.g., I want a scheme that helps women start a small business in rural areas"
        rows={4}
        className="text-input"
      />

      {/* Optional Fields */}
      <label>Age (optional)</label>
      <input name="age" value={formData.age || ""} onChange={handleChange} type="number" className="text-input"/>

      <label>Occupation (optional)</label>
      <select name="occupation" value={formData.occupation || ""} onChange={handleChange} className="text-input">
        <option value="">Select occupation</option>
        <option>Student</option>
        <option>Farmer</option>
        <option>Salaried</option>
        <option>Self-employed</option>
        <option>Unemployed</option>
        <option>Senior Citizen</option>
      </select>

      <label>Category (optional)</label>
      <select name="category" value={formData.category || ""} onChange={handleChange} className="text-input">
        <option value="">Select category</option>
        <option>General</option>
        <option>OBC</option>
        <option>SC</option>
        <option>ST</option>
        <option>EWS</option>
      </select>

      <button type="submit" className="submit-btn">Find Schemes</button>
    </form>
  );
}
