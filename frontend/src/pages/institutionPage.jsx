import UploadSchemes from "../components/uploadSchemes";

export default function InstitutionPage() {
  return (
    <div className="min-h-screen p-8 bg-gray-100 flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">Upload Government Scheme Documents</h2>

      <div className="bg-white shadow-lg p-6 rounded-xl w-full max-w-lg">
        <UploadSchemes onSuccess={() => alert("Upload successful")} />
      </div>
    </div>
  );
}
