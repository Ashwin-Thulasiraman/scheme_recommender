import UploadSchemes from "../components/uploadSchemes";

export default function InstitutionPage() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Upload Government Scheme Documents</h2>
      <UploadSchemes onSuccess={() => alert("Upload successful")} />
    </div>
  );
}
