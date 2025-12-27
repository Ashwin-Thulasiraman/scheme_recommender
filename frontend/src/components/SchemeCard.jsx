export default function SchemeCard({ scheme }) {
  const { schemeName, eligibility, benefits } = scheme;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 mb-4 hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-2 text-blue-800">{schemeName}</h3>
      <p className="text-gray-700 mb-2"><strong>Eligibility:</strong> {eligibility}</p>
      <p className="text-gray-700"><strong>Benefits:</strong> {benefits}</p>
    </div>
  );
}
