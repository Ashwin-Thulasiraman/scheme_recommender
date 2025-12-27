import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold text-gray-800 mb-12">Government Scheme Finder</h1>

      <button
        className="bg-blue-600 text-white px-8 py-4 rounded-lg mb-6 hover:bg-blue-700 transition"
        onClick={() => navigate("/farmer")}
      >
        I am a Farmer / Citizen
      </button>

      <button
        className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition"
        onClick={() => navigate("/institution")}
      >
        I represent an Institution
      </button>
    </div>
  );
}
