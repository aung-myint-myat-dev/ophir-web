import { Container, Row, Col, Button } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

import { assets } from "../../../constants";

const item1 = assets.lovecar_logo;
const item2 = assets.sayazawmaths_logo;
const item3 = assets.foodburma_logo;
const item4 = assets.stargrade_logo;
const item5 = assets.APP_LOGO;
const item6 = assets.zogenealogy_logo;
const item7 = assets.call2clean_logo;

function Product() {
  const items = [
    {
      img: item1,
      title: "Love Car (App)",
      links: [
        {
          label: "Android",
          url: "https://play.google.com/store/search?q=lovecar&c=apps&hl=en",
        },
        {
          label: "iOS",
          url: "https://apps.apple.com/br/app/love-car/id6739915707?l=en-GB",
        },
      ],
    },
    {
      img: item2,
      title: "Saya Zaw (App)",
      links: [{ label: "View More", url: "/saya-zaw" }],
    },
    {
      img: item3,
      title: "Food Burma (App)",
      disabled: true,
      links: [{ label: "View More", url: "#food-burma" }],
    },

    {
      img: item4,
      title: "Star Grade Education",
      disabled: true,
      links: [{ label: "View More", url: "/#star-grade" }],
    },

    // {
    //   img: item1,
    //   title: "Car Business Management",
    //   links: [{ label: "View More", url: "https://lovecarbusiness.com/" }],
    // },
    {
      img: item6,
      title: "Zo Genealogy",
      links: [{ label: "View More", url: "https://zogenealogy.org/" }],
    },
    {
      img: item7,
      title: "Call2Clean Janitorial",
      links: [
        { label: "View More", url: "https://www.call2cleanservices.com/" },
      ],
    },
    {
      img: item5,
      title: "Ophir Restaurant POS",
      links: [{ label: "View More", url: "/pos-page" }],
    },
  ];

  return (
    <div
      className=" py-5"
      style={{
        backgroundColor: "light",
      }}
    >
      <section id="project">
        <Container>
            <div>
              <h2 className="fw-bold display-5 text-center mb-5">Our Projects</h2>
            </div>

          <Row className="g-4">
            {items.map((item, index) => (
              <Col lg={3} md={4} sm={6} key={index}>
                <div
                  className="card h-100 border-0 shadow-sm rounded-4 position-relative overflow-hidden transition-all"
                  style={{ background: "#f8f9fa" }}
                >
                  <div
                    className="p-4 d-flex align-items-center justify-content-center"
                    style={{ height: "120px" }}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="img-fluid"
                      style={{
                        maxHeight: "70px",
                        objectFit: "contain",
                      }}
                    />
                  </div>

                  {/* Content Area */}
                  <div className="card-body bg-white rounded-4 m-2 p-3 shadow-sm d-flex flex-column">
                    <h6 className="fw-bold text-dark mb-3 text-truncate">
                      {item.title}
                    </h6>

                    <div className="mt-auto d-flex gap-2">
                      {item.links.map((linkItem, idx) => {
                        const isExternal = linkItem.url.startsWith("http");
                        const isViewMore = linkItem.label
                          .toLowerCase()
                          .includes("view");

                        // Common Class names
                        const linkClass = `text-decoration-none d-inline-flex align-items-center fw-bold ${
                          item.disabled
                            ? "pe-none opacity-50"
                            : "text-primary text-decoration-underline"
                        }`;

                        const content = (
                          <>
                            {linkItem.label}
                            {isViewMore && (
                              <MdKeyboardDoubleArrowRight
                                style={{ fontSize: "1.1rem" }}
                              />
                            )}
                            {isExternal && !isViewMore && (
                              <i
                                className="bi bi-box-arrow-up-right ms-1"
                                style={{ fontSize: "0.7rem" }}
                              ></i>
                            )}
                          </>
                        );

                        if (isExternal) {
                          return (
                            <a
                              key={idx}
                              href={linkItem.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={linkClass}
                              style={{ fontSize: "0.85rem", gap: "4px" }}
                            >
                              {content}
                            </a>
                          );
                        }

                        return (
                          <Link
                            key={idx}
                            to={linkItem.url}
                            className={linkClass}
                            style={{ fontSize: "0.85rem", gap: "4px" }}
                          >
                            {content}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Product;
