const BASE_URL = "http://localhost:5000/api";

export async function uploadSchemeDoc(file) {
  const formData = new FormData();
  formData.append("file", file);

  const res = await fetch(`${BASE_URL}/upload`, {
    method: "POST",
    body: formData
  });

  if (!res.ok) throw new Error("Upload failed");
  return res.json();
}

export async function querySchemes(userMessage) {
  const res = await fetch(`${BASE_URL}/query`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ userMessage })
  });

  if (!res.ok) throw new Error("Query failed");
  return res.json();
}
