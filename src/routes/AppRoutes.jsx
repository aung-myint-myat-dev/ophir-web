import { Routes, Route } from "react-router-dom";

import HomePage from "../pages/home/HomePage";
import AboutUs from "../pages/about-us/AboutUs";
import Services from "../pages/services/Services";
import Projects from "../pages/projects/Projects";
import Pricings from "../pages/pricings/Pricings";
import ProductDetail from "../pages/products/ProductDetail";
import ContactUs from "../pages/contact-us/ContactUs";
import NotFound from "../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* NO FOUND ROUTE */}
      <Route path="*" element={<NotFound />} />

      {/* PAGES ROUTES */}
      <Route path="/" element={<HomePage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/pricings" element={<Pricings />} />
      <Route path="/contact-us" element={<ContactUs />} />

      {/* PRODUCT DETAIL ROUTE */}
      <Route path="/products/:slug" element={<ProductDetail />} />
    </Routes>
  );
}