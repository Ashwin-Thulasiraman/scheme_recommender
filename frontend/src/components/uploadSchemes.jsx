import { useState } from "react";
import { uploadSchemeDoc } from "../api/schemeApi";

export default function UploadSchemes({ onSuccess }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleUpload() {
    if (!file) return alert("Select a file first");

    setLoading(true);
    try {
      await uploadSchemeDoc(file);
      onSuccess();
      alert("Schemes document uploaded successfully");
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Upload Schemes Document</h2>
      <input
        type="file"
        accept=".pdf"
        onChange={e => setFile(e.target.files[0])}
      />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Processing..." : "Upload"}
      </button>
    </div>
  );
}
