import React, { useState, useEffect } from "react";
import { assets } from "../constants";

const img1 = assets.APP_LOGO;

export default function AppNavbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

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

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Services", id: "services" },
    { label: "Project", id: "project" },
    { label: "Pricing", id: "pricing" },
  ];

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled
          ? "bg-white bg-opacity-75 shadow-sm py-2"
          : "bg-transparent py-4"
      }`}
      style={{
        backdropFilter: scrolled ? "blur(10px)" : "none",
        transition: "all 0.4s ease-in-out",
      }}
    >
      <div className="container">
        {/* BRAND / LOGO */}
        <a
          className="navbar-brand d-flex align-items-center"
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleScrollTo("home");
          }}
        >
          <img
            src={img1}
            alt="Logo"
            height="40"
            className="object-fit-contain"
          />
        </a>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span
            className="navbar-toggler-icon"
            style={{
              filter:
                "invert(35%) sepia(85%) saturate(450%) hue-rotate(80deg) brightness(95%) contrast(90%)",
            }}
          ></span>
        </button>

        {/* MENU ITEMS */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav w-100 d-flex flex-column flex-lg-row align-items-center">
            <div className="d-none d-lg-flex flex-grow-1"></div>
            <div className="d-flex flex-column flex-lg-row align-items-center">
              {menuItems.map((item) => (
                <li className="nav-item mx-lg-2" key={item.id}>
                  <button
                    className={`btn border-0 bg-transparent fw-bold position-relative px-0 mx-2 
      ${scrolled ? "text-success" : "text-white"}`}
                    style={{
                      fontSize: "0.85rem",
                      letterSpacing: "1px",
                      transition: "all 0.3s ease",
                    }}
                    onClick={() => handleScrollTo(item.id)}
                  >
                    {item.label.toUpperCase()}

                    {/* INDICATOR BAR */}
                    <span
                      style={{
                        position: "absolute",
                        bottom: "-2px",
                        left: "0",
                        width: active === item.id ? "100%" : "0%",
                        height: "3px",
                        backgroundColor: scrolled ? "#198754" : "#ffffff",
                        transition: "width 0.3s ease-in-out",
                        borderRadius: "10px",
                      }}
                    />
                  </button>
                </li>
              ))}
            </div>

            <li className="nav-item ms-lg-auto mt-3 mt-lg-0 flex-grow-1 d-lg-flex justify-content-end">
              <button
                className="btn btn-success rounded-pill px-3 fw-bold shadow-sm border-0"
                style={{
                  fontSize: "0.85rem",
                  backgroundColor: "#198754",
                }}
                onClick={() => handleScrollTo("contact")}
              >
                CONTACT US
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
