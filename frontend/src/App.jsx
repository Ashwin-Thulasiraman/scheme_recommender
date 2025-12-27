import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import FarmerPage from "./pages/FarmerPage";
import InstitutionPage from "./pages/InstitutionPage";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/farmer" element={<FarmerPage />} />
      <Route path="/institution" element={<InstitutionPage />} />
    </Routes>
  );
}
