import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import SayaZawPage from "../pages/product/SayaZawPage";
import POSPage from "../pages/product/POSPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/saya-zaw" element={<SayaZawPage />} />
      <Route path="/pos-page" element={<POSPage />} />
    </Routes>
  );
}