import React, { useState, useEffect } from "react";

import { assets } from '../constants';

const img1 = assets.APP_LOGO;

export default function AppNavbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActive("home");

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY + 120;

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollY >= top && scrollY < top + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  const closeMobileMenu = () => {
    const menu = document.getElementById("navbarNav");
    if (menu?.classList.contains("show")) {
      menu.classList.remove("show");
    }
  };

  const menuItems = [
    { label: "HOME", id: "home" },
    { label: "ABOUT US", id: "about" },
    { label: "SERVICES", id: "services" },
    { label: "PROJECT", id: "project" },
    { label: "PRICING", id: "pricing" },
    { label: "CONTACT", id: "contact" },
  ];

  return (
    <nav className={`navbar navbar-expand-md fixed-top ${scrolled ? "nav-scrolled" : "nav-top"}`}>
      <div className="container">

        {/* BRAND */}
        <div className="d-flex align-items-center">
          <img src={img1} alt="Logo" className="logo-img" />
          <span
            className="navbar-brand text-light fw-bold ms-2"
            style={{ cursor: "pointer" }}
            onClick={() => handleScrollTo("home")}
          >
            Ophir IT Solutions
          </span>
        </div>

        {/* TOGGLER */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto fw-bold mt-3 mt-md-0">
            {menuItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <button
                  className={`nav-link btn btn-link ${active === item.id ? "active-nav" : ""}`}
                  onClick={() => {
                    handleScrollTo(item.id);
                    closeMobileMenu();
                  }}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </nav>
  );
}
