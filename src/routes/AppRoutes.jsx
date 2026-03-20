import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import StarGradePage from "../pages/product/StarGradePage";
import POSPage from "../pages/product/POSPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/star-grade" element={<StarGradePage />} />
      <Route path="/pos-page" element={<POSPage />} />
    </Routes>
  );
}