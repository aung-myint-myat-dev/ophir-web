// components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Instantly scroll to the top left of the document on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Use "smooth" if you want an animated scroll transition
    });
  }, [pathname]);

  return null;
}
