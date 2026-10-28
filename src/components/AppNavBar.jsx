import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { assets } from "../constants";
import { products } from "../database/index";
import "bootstrap/js/dist/dropdown"
import { FaX } from "react-icons/fa6";
import { FaBars } from "react-icons/fa";

const img1 = assets.APP_LOGO;

export default function AppNavbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const isClearBackground =
    location.pathname === "/" || location.pathname === "/services";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeNavbar = () => {
    setIsOpen(false);
  };

  const menuLinks = [
    { label: "Home", url: "/" },
    { label: "Products", url: "/products", items: products },
    { label: "Services", url: "/services" },
    { label: "Projects", url: "/projects" },
    { label: "Pricings", url: "/pricings" },
    { label: "About us", url: "/about-us" },
  ];

  return (
    <>
      <style>
        {`
        .dropdown-toggle::after {
          border-top-color: ${isClearBackground && !scrolled ? 'white' : 'green'} 
        }

        .dropdown-menu .dropdown-item:active {
          color: #ffffff !important;
          background-color: #146c43;
        }
        `}
      </style>

      <nav
        className={`navbar navbar-expand-lg fixed-top
       ${scrolled && "bg-white bg-opacity-75 shadow-sm"}
       ${isClearBackground && !scrolled ? 'bg-none py-4' : 'bg-white shadow-sm py-2'}
       `}
        style={{
          backdropFilter: scrolled ? "blur(10px)" : "none",
          transition: "all 0.4s ease-in-out",
        }}
      >
        <div className="container">
          {/* BRAND / LOGO */}
          <Link className="navbar-brand d-flex align-items-center" to="/" onClick={closeNavbar}>
            <img
              src={img1}
              alt="Logo"
              height="40"
              className="object-fit-contain"
            />
          </Link>

          {/* TOGGLER BUTTON */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            onClick={() => setIsOpen(!isOpen)} // Toggle State
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
          >
            {isOpen ? (
              <FaX className={isClearBackground ? (scrolled ? 'text-success' : 'text-white') : 'text-success'} />
            ) : (
              <FaBars className={isClearBackground ? (scrolled ? 'text-success' : 'text-white') : 'text-success'} />
            )}
          </button>

          {/* MENU ITEMS */}
          <div className={`collapse navbar-collapse ${isOpen ? "show" : ""}`} id="navbarNav">
            <ul className="navbar-nav w-100 d-flex flex-column flex-lg-row align-items-center">
              <div className="d-none d-lg-flex flex-grow-1"></div>

              <div className="d-flex flex-column flex-lg-row align-items-center">
                {menuLinks.map((link, index) => {

                  const isActive = location.pathname === link.url;

                  return link?.items?.length > 0 ? (

                    // DROPDOWN NAV LINK
                    <li key={index} className="nav-item dropdown">
                      <a className="dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">

                        <span
                          className={`btn border-0 bg-transparent fw-bold position-relative px-0 mx-2 ${isClearBackground && !scrolled
                            ? "text-white"
                            : "text-success"
                            }`}
                          style={{
                            fontSize: "0.85rem",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            transition: "all 0.3s ease",
                          }}
                        >
                          {link.label}
                        </span>
                      </a>

                      <ul className="dropdown-menu">
                        {link.items.map((item) => (
                          <li key={item.id}>
                            <NavLink
                              style={{ fontSize: "14px" }}
                              onClick={closeNavbar}
                              to={`/products/${item.slug}`}
                              className={({ isActive }) =>
                                `dropdown-item ${isActive ? "bg-success text-white" : "text-secondary"}`
                              }
                            >
                              {item.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    // NORMAL NAVLINK
                    <li className="nav-item mx-lg-2" key={index}>
                      <Link
                        to={link.url}
                        onClick={closeNavbar}
                        className={`btn border-0 bg-transparent fw-bold position-relative px-0 mx-2 ${isClearBackground && !scrolled
                          ? "text-white"
                          : "text-success"}`}
                        style={{
                          fontSize: "0.85rem",
                          textTransform: "uppercase",
                          letterSpacing: "1px",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {link.label}
                        <span className={isClearBackground && !scrolled
                          ? "bg-white"
                          : "bg-success"}
                          style={{
                            position: "absolute",
                            bottom: "-2px",
                            left: "0",
                            width: isActive ? "100%" : "0%",
                            height: "3px",
                            transition: "width 0.3s ease-in-out",
                            borderRadius: "10px",
                          }}
                        />
                      </Link>
                    </li>
                  );
                })}
              </div>

              {/* CONTACT US BUTTON */}
              <li className="nav-item ms-lg-auto mt-3 mt-lg-0 flex-grow-1 d-lg-flex justify-content-end">
                <Link
                  to="/contact-us"
                  onClick={closeNavbar}
                  className="btn btn-success rounded-pill px-3 fw-bold shadow-sm border-0"
                  style={{
                    fontSize: "0.85rem",
                    backgroundColor: "#198754",
                  }}
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div >
      </nav >
    </>
  );
}
